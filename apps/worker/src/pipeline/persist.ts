import { prisma } from "@lre/database";
import type { Candidate } from "@lre/discovery";

export interface MergedContact {
  email: string;
  emailStatus: "UNKNOWN" | "FOUND" | "VERIFIED" | "UNAVAILABLE";
  phone: string;
  phoneStatus: "UNKNOWN" | "FOUND" | "VERIFIED" | "UNAVAILABLE";
  socialProfiles: { platform: string; profileUrl: string }[];
}

export interface SourceRecord {
  sourceType:
    | "SEARCH_ENGINE"
    | "PUBLIC_WEB"
    | "LINKEDIN_PUBLIC"
    | "COMPANY_WEBSITE"
    | "ENRICHMENT_API"
    | "DEMO"
    | "OTHER";
  sourceUrl?: string;
  sourceStatus: "ok" | "blocked" | "error" | "not_found";
}

export interface PersistInput {
  jobId: string;
  candidate: Candidate;
  contact: MergedContact;
  keyword: string;
  relevanceScore: number;
  relevanceReasons: string[];
  confidenceScore: number;
  confidenceReasons: string[];
  sources: SourceRecord[];
  isDemo: boolean;
}

/**
 * Persists one fully-processed lead. Uses upserts so re-running a query
 * (or overlapping candidates across providers) doesn't create duplicate
 * Company/Person rows, and wraps everything in a transaction so a failure
 * partway through never leaves an inconsistent record behind.
 */
export async function persistLead(input: PersistInput): Promise<string> {
  const { candidate } = input;

  return prisma.$transaction(async (tx) => {
    // 1. Person - upsert by linkedinUrl if we have one (unique), otherwise create fresh.
    let person = candidate.linkedinUrl
      ? await tx.person.findUnique({ where: { linkedinUrl: candidate.linkedinUrl } })
      : null;

    if (person) {
      person = await tx.person.update({
        where: { id: person.id },
        data: {
          name: candidate.name,
          jobTitle: candidate.jobTitle || person.jobTitle,
          location: candidate.location || person.location,
          isDemo: input.isDemo,
        },
      });
    } else {
      person = await tx.person.create({
        data: {
          name: candidate.name,
          jobTitle: candidate.jobTitle || null,
          location: candidate.location || null,
          linkedinUrl: candidate.linkedinUrl || null,
          isDemo: input.isDemo,
        },
      });
    }

    // 2. Company - upsert by (name, website)
    if (candidate.company) {
      const company = await tx.company.upsert({
        where: { name_website: { name: candidate.company, website: candidate.companyWebsite || "" } },
        update: {},
        create: {
          name: candidate.company,
          website: candidate.companyWebsite || null,
          industry: null,
          location: candidate.location || null,
        },
      });

      await tx.personCompany.upsert({
        where: { personId_companyId: { personId: person.id, companyId: company.id } },
        update: { relationship: candidate.jobTitle || null, current: true },
        create: {
          personId: person.id,
          companyId: company.id,
          relationship: candidate.jobTitle || null,
          current: true,
        },
      });
    }

    // 3. Contact data - never overwrite a known value with an empty one
    const existingContact = await tx.contactData.findUnique({ where: { personId: person.id } });
    await tx.contactData.upsert({
      where: { personId: person.id },
      update: {
        email: input.contact.email || existingContact?.email || "",
        emailStatus: input.contact.email ? input.contact.emailStatus : existingContact?.emailStatus ?? "UNKNOWN",
        phone: input.contact.phone || existingContact?.phone || "",
        phoneStatus: input.contact.phone ? input.contact.phoneStatus : existingContact?.phoneStatus ?? "UNKNOWN",
      },
      create: {
        personId: person.id,
        email: input.contact.email || "",
        emailStatus: input.contact.emailStatus,
        phone: input.contact.phone || "",
        phoneStatus: input.contact.phoneStatus,
      },
    });

    // 4. Social profiles
    for (const social of input.contact.socialProfiles) {
      await tx.socialProfile.upsert({
        where: { personId_platform: { personId: person.id, platform: social.platform } },
        update: { profileUrl: social.profileUrl },
        create: { personId: person.id, platform: social.platform, profileUrl: social.profileUrl },
      });
    }

    // 5. Sources (audit trail - append, never dedupe away; useful for confidence explanation)
    for (const source of input.sources) {
      await tx.source.create({
        data: {
          personId: person.id,
          sourceType: source.sourceType,
          sourceUrl: source.sourceUrl || null,
          sourceStatus: source.sourceStatus,
        },
      });
    }

    // 6. Research result (one per job+person)
    await tx.researchResult.upsert({
      where: { jobId_personId: { jobId: input.jobId, personId: person.id } },
      update: {
        keyword: input.keyword,
        relevanceScore: input.relevanceScore,
        confidenceScore: input.confidenceScore,
        relevanceReasons: JSON.stringify(input.relevanceReasons),
        confidenceReasons: JSON.stringify(input.confidenceReasons),
      },
      create: {
        jobId: input.jobId,
        personId: person.id,
        keyword: input.keyword,
        relevanceScore: input.relevanceScore,
        confidenceScore: input.confidenceScore,
        relevanceReasons: JSON.stringify(input.relevanceReasons),
        confidenceReasons: JSON.stringify(input.confidenceReasons),
      },
    });

    return person.id;
  });
}
