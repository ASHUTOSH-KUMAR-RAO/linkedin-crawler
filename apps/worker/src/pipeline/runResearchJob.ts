import { prisma } from "@lre/database";
import { createRedisConnection, progressChannel, type ProgressEvent, type ResearchJobPayload } from "@lre/queue";
import { getEnabledDiscoveryProviders, type Candidate } from "@lre/discovery";
import { getEnabledEnrichmentProviders } from "@lre/enrichment";
import { deduplicate, computeRelevanceScore, computeConfidenceScore, type DedupeCandidate } from "@lre/verification";
import { persistLead, type MergedContact, type SourceRecord } from "./persist";
import { logger } from "../lib/logger";

const redisPublisher = createRedisConnection(false);

async function publish(event: Omit<ProgressEvent, "timestamp">) {
  const full: ProgressEvent = { ...event, timestamp: new Date().toISOString() };
  await redisPublisher.publish(progressChannel(event.jobId), JSON.stringify(full));
}

async function updateJobProgress(jobId: string, stage: string, percent: number) {
  await prisma.researchJob.update({
    where: { id: jobId },
    data: { progressStage: stage, progressPercent: percent },
  });
  await publish({ type: "stage_update", jobId, stage, percent });
}

interface PipelineStats {
  candidatesFound: number;
  candidatesAfterDedup: number;
  duplicatesRemoved: number;
  emailsFound: number;
  phonesFound: number;
  providerErrors: string[];
}

export async function runResearchJob(payload: ResearchJobPayload): Promise<void> {
  const { jobId, query, mode, requestedCount } = payload;
  const stats: PipelineStats = {
    candidatesFound: 0,
    candidatesAfterDedup: 0,
    duplicatesRemoved: 0,
    emailsFound: 0,
    phonesFound: 0,
    providerErrors: [],
  };

  try {
    await prisma.researchJob.update({
      where: { id: jobId },
      data: { status: "RUNNING", startedAt: new Date() },
    });
    await updateJobProgress(jobId, "Query initialized", 5);

    // ---------- STAGE 1: Discovery ----------
    const discoveryProviders = getEnabledDiscoveryProviders();
    if (discoveryProviders.length === 0) {
      await failJob(
        jobId,
        "No discovery providers are enabled. Set DEMO_MODE=true, or configure SEARCH_API_KEY, in your .env file."
      );
      return;
    }

    await updateJobProgress(jobId, "Discovering candidates", 15);

    // Fetch more than requested to give dedup/ranking something to work with.
    const overFetchTarget = mode === "DEEP" ? requestedCount * 3 : requestedCount * 2;
    let rawCandidates: Candidate[] = [];

    for (const provider of discoveryProviders) {
      try {
        const found = await provider.search({ query, maxResults: overFetchTarget });
        rawCandidates.push(...found);
      } catch (err: any) {
        stats.providerErrors.push(`${provider.name}: ${err?.message ?? "unknown error"}`);
        logger.warn({ provider: provider.name, err: err?.message }, "discovery provider failed - continuing");
      }
    }

    // Drop placeholder/blocked entries that carry no usable identity.
    rawCandidates = rawCandidates.filter((c) => c.name && c.name.trim().length > 0);
    stats.candidatesFound = rawCandidates.length;

    if (rawCandidates.length === 0) {
      await failJob(jobId, "No candidates could be discovered for this query from any enabled provider.");
      return;
    }

    // ---------- STAGE 2: Relevance ranking (pre-dedup, to prioritize which
    // candidates are worth enriching first / kept when over-fetched) ----------
    const scored = rawCandidates.map((c) => ({
      candidate: c,
      relevance: computeRelevanceScore({
        query,
        name: c.name,
        jobTitle: c.jobTitle,
        company: c.company,
        location: c.location,
      }),
    }));
    scored.sort((a, b) => b.relevance.score - a.relevance.score);

    await updateJobProgress(jobId, "Verifying companies", 30);

    // ---------- STAGE 3: Deduplication ----------
    const dedupeInput: DedupeCandidate[] = scored.map((s, i) => ({
      index: i,
      name: s.candidate.name,
      company: s.candidate.company,
      linkedinUrl: s.candidate.linkedinUrl,
    }));
    const groups = deduplicate(dedupeInput);

    const duplicateIndexSet = new Set<number>();
    const sourceCountByCanonical = new Map<number, number>();
    for (const g of groups) {
      sourceCountByCanonical.set(g.canonicalIndex, g.duplicateIndexes.length + 1);
      for (const dupIdx of g.duplicateIndexes) duplicateIndexSet.add(dupIdx);
    }

    const canonicalEntries = scored.filter((_, i) => !duplicateIndexSet.has(i));
    stats.candidatesAfterDedup = canonicalEntries.length;
    stats.duplicatesRemoved = duplicateIndexSet.size;

    // Truncate to what we actually need, keeping the highest-relevance items.
    const finalEntries = canonicalEntries.slice(0, requestedCount);

    // ---------- STAGE 4: Contact enrichment ----------
    await updateJobProgress(jobId, "Enriching contacts", 50);
    const enrichmentProviders = getEnabledEnrichmentProviders();

    let processed = 0;
    for (const entry of finalEntries) {
      const candidate = entry.candidate;
      const merged: MergedContact = {
        email: "",
        emailStatus: "UNKNOWN",
        phone: "",
        phoneStatus: "UNKNOWN",
        socialProfiles: [],
      };
      const sourceRecords: SourceRecord[] = [
        { sourceType: candidate.sourceType, sourceUrl: candidate.sourceUrl, sourceStatus: candidate.sourceStatus },
      ];
      let hadSourceErrors = candidate.sourceStatus !== "ok";

      for (const provider of enrichmentProviders) {
        try {
          const result = await provider.enrich(candidate);
          if (result.email && !merged.email) {
            merged.email = result.email;
            merged.emailStatus = result.emailStatus ?? "FOUND";
          }
          if (result.phone && !merged.phone) {
            merged.phone = result.phone;
            merged.phoneStatus = result.phoneStatus ?? "FOUND";
          }
                   if (result.socialProfiles?.length) {
            merged.socialProfiles.push(...result.socialProfiles);
          }
          if (result.companyWebsite && !candidate.companyWebsite) {
            candidate.companyWebsite = result.companyWebsite;
          }
          if (result.sourceType) {
            sourceRecords.push({
              sourceType: result.sourceType as SourceRecord["sourceType"],
              sourceUrl: result.sourceUrl,
              sourceStatus: result.sourceStatus ?? "ok",
            });
          }
          if (result.sourceStatus && result.sourceStatus !== "ok") hadSourceErrors = true;
        } catch (err: any) {
          hadSourceErrors = true;
          stats.providerErrors.push(`${provider.name}: ${err?.message ?? "unknown error"}`);
          logger.warn({ provider: provider.name, err: err?.message }, "enrichment provider failed - continuing");
        }
      }

      if (merged.email) stats.emailsFound++;
      if (merged.phone) stats.phonesFound++;

      // ---------- STAGE 5: Confidence scoring ----------
      const canonicalIndex = scored.indexOf(entry);
      const independentSourceCount = sourceCountByCanonical.get(canonicalIndex) ?? 1;
      const confidence = computeConfidenceScore({
        independentSourceCount,
        hasLinkedIn: !!candidate.linkedinUrl,
        emailVerified: merged.emailStatus === "VERIFIED",
        hasEmail: !!merged.email,
        hadSourceErrors,
        wasDeduplicatedFromMultiple: independentSourceCount > 1,
      });

      await persistLead({
        jobId,
        candidate,
        contact: merged,
        keyword: candidate.keyword || query,
        relevanceScore: entry.relevance.score,
        relevanceReasons: entry.relevance.reasons,
        confidenceScore: confidence.score,
        confidenceReasons: confidence.reasons,
        sources: sourceRecords,
        isDemo: candidate.sourceType === "DEMO",
      });

      processed++;
      const percent = 50 + Math.round((processed / finalEntries.length) * 40);
      await publish({
        type: "candidate_found",
        jobId,
        percent,
        person: {
          id: candidate.linkedinUrl || candidate.name,
          name: candidate.name,
          company: candidate.company ?? "",
          jobTitle: candidate.jobTitle ?? "",
          relevanceScore: entry.relevance.score,
          confidenceScore: confidence.score,
        },
      });

      if (processed % 5 === 0 || processed === finalEntries.length) {
        await prisma.researchJob.update({
          where: { id: jobId },
          data: { progressPercent: percent, foundCount: processed },
        });
      }
    }

    await updateJobProgress(jobId, "Removing duplicates", 92);
    await updateJobProgress(jobId, "Finalizing results", 97);

    const finalStatus = stats.providerErrors.length > 0 ? "PARTIAL" : "COMPLETED";
    await prisma.researchJob.update({
      where: { id: jobId },
      data: {
        status: finalStatus,
        completedAt: new Date(),
        foundCount: finalEntries.length,
        progressStage: "Completed",
        progressPercent: 100,
      },
    });

    logger.info(
      {
        jobId,
        query,
        mode,
        candidatesFound: stats.candidatesFound,
        candidatesAfterDedup: stats.candidatesAfterDedup,
        duplicatesRemoved: stats.duplicatesRemoved,
        emailsFound: stats.emailsFound,
        phonesFound: stats.phonesFound,
        errors: stats.providerErrors,
        finalCount: finalEntries.length,
      },
      "research job finished"
    );

    await publish({
      type: finalStatus === "PARTIAL" ? "job_partial" : "job_completed",
      jobId,
      percent: 100,
      message:
        finalStatus === "PARTIAL"
          ? `Completed with ${stats.providerErrors.length} provider issue(s); results may be incomplete.`
          : "Completed successfully.",
    });
  } catch (err: any) {
    logger.error({ jobId, err: err?.message, stack: err?.stack }, "research job crashed");
    await failJob(jobId, err?.message ?? "Unknown error");
  }
}

async function failJob(jobId: string, message: string) {
  await prisma.researchJob.update({
    where: { id: jobId },
    data: { status: "FAILED", errorMessage: message, completedAt: new Date(), progressStage: "Failed", progressPercent: 100 },
  });
  await publish({ type: "job_failed", jobId, message, percent: 100 });
}
