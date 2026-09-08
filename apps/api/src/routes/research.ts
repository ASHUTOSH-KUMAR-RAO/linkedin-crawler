import type { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "@lre/database";
import { getResearchQueue, createRedisConnection, progressChannel, type ProgressEvent } from "@lre/queue";
import { requireAuth } from "../lib/auth";
import { logger } from "../lib/logger";

const CreateJobSchema = z.object({
  query: z
    .string()
    .trim()
    .min(3, "Query must be at least 3 characters")
    .max(300, "Query is too long"),
});

const QUICK_MAX_RESULTS = 60;
const DEEP_MAX_RESULTS = 500;

export async function researchRoutes(app: FastifyInstance) {
  app.addHook("preHandler", requireAuth);

  async function createJob(mode: "QUICK" | "DEEP", requestedCount: number, query: string) {
    const job = await prisma.researchJob.create({
      data: { query, mode, requestedCount, status: "PENDING" },
    });

    await getResearchQueue().add(
      "research-job",
      { jobId: job.id, query, mode, requestedCount },
      { jobId: job.id }
    );

    logger.info({ jobId: job.id, mode, query }, "research job enqueued");
    return job;
  }

  // POST /api/research/quick
  app.post("/api/research/quick", async (req, reply) => {
    const parsed = CreateJobSchema.safeParse(req.body);
    if (!parsed.success) {
      return reply.code(400).send({ error: "Validation failed", details: parsed.error.flatten() });
    }
    const job = await createJob("QUICK", QUICK_MAX_RESULTS, parsed.data.query);
    return reply.code(202).send({ job_id: job.id });
  });

  // POST /api/research/deep
  app.post("/api/research/deep", async (req, reply) => {
    const parsed = CreateJobSchema.safeParse(req.body);
    if (!parsed.success) {
      return reply.code(400).send({ error: "Validation failed", details: parsed.error.flatten() });
    }
    const job = await createJob("DEEP", DEEP_MAX_RESULTS, parsed.data.query);
    return reply.code(202).send({ job_id: job.id });
  });

  // GET /api/research/:jobId
  app.get<{ Params: { jobId: string } }>("/api/research/:jobId", async (req, reply) => {
    const job = await prisma.researchJob.findUnique({ where: { id: req.params.jobId } });
    if (!job) return reply.code(404).send({ error: "Job not found" });
    return reply.send({
      job_id: job.id,
      query: job.query,
      mode: job.mode,
      status: job.status,
      requested_count: job.requestedCount,
      found_count: job.foundCount,
      progress_stage: job.progressStage,
      progress_percent: job.progressPercent,
      error_message: job.errorMessage,
      created_at: job.createdAt,
      started_at: job.startedAt,
      completed_at: job.completedAt,
    });
  });

  // GET /api/research/:jobId/results?page=1&pageSize=50&filters...
  app.get<{
    Params: { jobId: string };
    Querystring: {
      page?: string;
      pageSize?: string;
      company?: string;
      jobTitle?: string;
      location?: string;
      hasEmail?: string;
      hasPhone?: string;
      hasLinkedin?: string;
      minRelevance?: string;
      minConfidence?: string;
      search?: string;
    };
  }>("/api/research/:jobId/results", async (req, reply) => {
    const job = await prisma.researchJob.findUnique({ where: { id: req.params.jobId } });
    if (!job) return reply.code(404).send({ error: "Job not found" });

    const page = Math.max(1, parseInt(req.query.page ?? "1", 10) || 1);
    const pageSize = Math.min(200, Math.max(1, parseInt(req.query.pageSize ?? "50", 10) || 50));

    const where: any = {
      jobId: job.id,
      relevanceScore: req.query.minRelevance ? { gte: parseInt(req.query.minRelevance, 10) } : undefined,
      confidenceScore: req.query.minConfidence ? { gte: parseInt(req.query.minConfidence, 10) } : undefined,
      person: {
        jobTitle: req.query.jobTitle ? { contains: req.query.jobTitle, mode: "insensitive" } : undefined,
        location: req.query.location ? { contains: req.query.location, mode: "insensitive" } : undefined,
        linkedinUrl: req.query.hasLinkedin === "true" ? { not: null } : undefined,
        name: req.query.search ? { contains: req.query.search, mode: "insensitive" } : undefined,
        contactData:
          req.query.hasEmail === "true"
            ? { email: { not: "" } }
            : req.query.hasPhone === "true"
            ? { phone: { not: "" } }
            : undefined,
        companies: req.query.company
          ? { some: { company: { name: { contains: req.query.company, mode: "insensitive" } } } }
          : undefined,
      },
    };

    const [total, results] = await Promise.all([
      prisma.researchResult.count({ where }),
      prisma.researchResult.findMany({
        where,
        orderBy: { relevanceScore: "desc" },
        skip: (page - 1) * pageSize,
        take: pageSize,
        include: {
          person: {
            include: {
              companies: { include: { company: true } },
              contactData: true,
              socialProfiles: true,
              sources: true,
            },
          },
        },
      }),
    ]);

    return reply.send({
      job_id: job.id,
      page,
      page_size: pageSize,
      total,
      results: results.map(serializeResult),
    });
  });

  // GET /api/research/:jobId/progress (Server-Sent Events)
  app.get<{ Params: { jobId: string } }>("/api/research/:jobId/progress", async (req, reply) => {
    const job = await prisma.researchJob.findUnique({ where: { id: req.params.jobId } });
    if (!job) return reply.code(404).send({ error: "Job not found" });

    reply.raw.writeHead(200, {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
      "Access-Control-Allow-Origin": "*",
    });

    const send = (event: ProgressEvent) => {
      reply.raw.write(`data: ${JSON.stringify(event)}\n\n`);
    };

    // Immediately send current known state so a client connecting mid-job
    // (or after a page refresh) doesn't miss the current stage.
    send({
      type: job.status === "COMPLETED" || job.status === "PARTIAL" ? "job_completed" : "stage_update",
      jobId: job.id,
      stage: job.progressStage ?? "queued",
      percent: job.progressPercent,
      timestamp: new Date().toISOString(),
    });

    const subscriber = createRedisConnection(false);
    await subscriber.subscribe(progressChannel(job.id));
    subscriber.on("message", (_channel, message) => {
      try {
        const event: ProgressEvent = JSON.parse(message);
        send(event);
        if (event.type === "job_completed" || event.type === "job_failed" || event.type === "job_partial") {
          reply.raw.end();
        }
      } catch (err) {
        logger.error({ err }, "failed to parse progress event");
      }
    });

    const heartbeat = setInterval(() => {
      reply.raw.write(`: heartbeat\n\n`);
    }, 15000);

    req.raw.on("close", () => {
      clearInterval(heartbeat);
      subscriber.unsubscribe();
      subscriber.quit();
    });
  });

  // POST /api/research/:jobId/cancel
  app.post<{ Params: { jobId: string } }>("/api/research/:jobId/cancel", async (req, reply) => {
    const job = await prisma.researchJob.findUnique({ where: { id: req.params.jobId } });
    if (!job) return reply.code(404).send({ error: "Job not found" });
    if (job.status === "COMPLETED" || job.status === "FAILED") {
      return reply.code(400).send({ error: `Job already in terminal state: ${job.status}` });
    }
    await prisma.researchJob.update({ where: { id: job.id }, data: { status: "CANCELLED" } });
    return reply.send({ ok: true });
  });
}

export function serializeResult(result: any) {
  const person = result.person;
  const currentCompany = person.companies.find((pc: any) => pc.current) ?? person.companies[0];
  return {
    result_id: result.id,
    person_id: person.id,
    name: person.name,
    is_demo: person.isDemo,
    company: currentCompany?.company?.name ?? "",
    company_website: currentCompany?.company?.website ?? "",
    industry: currentCompany?.company?.industry ?? "",
    job_title: person.jobTitle ?? "",
    keyword: result.keyword ?? "",
    location: person.location ?? "",
    linkedin_url: person.linkedinUrl ?? "",
    social_profiles: person.socialProfiles.map((s: any) => ({ platform: s.platform, url: s.profileUrl })),
    email: person.contactData?.email ?? "",
    email_status: person.contactData?.emailStatus ?? "UNKNOWN",
    phone: person.contactData?.phone ?? "",
    phone_status: person.contactData?.phoneStatus ?? "UNKNOWN",
    relevance_score: result.relevanceScore,
    confidence_score: result.confidenceScore,
    relevance_reasons: safeParseJson(result.relevanceReasons),
    confidence_reasons: safeParseJson(result.confidenceReasons),
    sources: person.sources.map((s: any) => ({
      type: s.sourceType,
      url: s.sourceUrl,
      status: s.sourceStatus,
      discovered_at: s.discoveredAt,
    })),
  };
}

function safeParseJson(value: string | null) {
  if (!value) return [];
  try {
    return JSON.parse(value);
  } catch {
    return [];
  }
}
