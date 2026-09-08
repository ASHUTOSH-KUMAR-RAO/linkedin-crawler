import type { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "@lre/database";
import { buildCsv, buildXlsx, exportFilename, type ExportRow } from "@lre/export";
import { requireAuth } from "../lib/auth";
import { serializeResult } from "./research";

const SelectedIdsSchema = z.object({
  result_ids: z.array(z.string()).min(1, "At least one result_id is required"),
});

function toExportRow(serialized: ReturnType<typeof serializeResult>): ExportRow {
  return {
    name: serialized.name ?? "",
    company: serialized.company ?? "",
    jobTitle: serialized.job_title ?? "",
    keyword: serialized.keyword ?? "",
    linkedinUrl: serialized.linkedin_url ?? "",
    socialMedia: (serialized.social_profiles ?? []).map((s: any) => s.url).join(" | "),
    email: serialized.email ?? "",
    phone: serialized.phone ?? "",
    location: serialized.location ?? "",
    industry: serialized.industry ?? "",
    companyWebsite: serialized.company_website ?? "",
    relevanceScore: String(serialized.relevance_score ?? ""),
    confidenceScore: String(serialized.confidence_score ?? ""),
    source: (serialized.sources ?? []).map((s: any) => s.type).join(" | "),
  };
}

async function fetchRowsForJob(jobId: string): Promise<ExportRow[]> {
  const results = await prisma.researchResult.findMany({
    where: { jobId },
    orderBy: { relevanceScore: "desc" },
    include: {
      person: {
        include: { companies: { include: { company: true } }, contactData: true, socialProfiles: true, sources: true },
      },
    },
  });
  return results.map((r) => toExportRow(serializeResult(r)));
}

async function fetchRowsForIds(resultIds: string[]): Promise<ExportRow[]> {
  const results = await prisma.researchResult.findMany({
    where: { id: { in: resultIds } },
    orderBy: { relevanceScore: "desc" },
    include: {
      person: {
        include: { companies: { include: { company: true } }, contactData: true, socialProfiles: true, sources: true },
      },
    },
  });
  return results.map((r) => toExportRow(serializeResult(r)));
}

export async function exportRoutes(app: FastifyInstance) {
  app.addHook("preHandler", requireAuth);

  // GET /api/research/:jobId/export/csv - export ALL results for a job
  app.get<{ Params: { jobId: string } }>("/api/research/:jobId/export/csv", async (req, reply) => {
    const job = await prisma.researchJob.findUnique({ where: { id: req.params.jobId } });
    if (!job) return reply.code(404).send({ error: "Job not found" });

    const rows = await fetchRowsForJob(job.id);
    const csv = buildCsv(rows);
    const filename = exportFilename(job.mode === "QUICK" ? "quick" : "deep", "csv");

    reply.header("Content-Type", "text/csv; charset=utf-8");
    reply.header("Content-Disposition", `attachment; filename="${filename}"`);
    return reply.send(csv);
  });

  // GET /api/research/:jobId/export/excel - export ALL results for a job
  app.get<{ Params: { jobId: string } }>("/api/research/:jobId/export/excel", async (req, reply) => {
    const job = await prisma.researchJob.findUnique({ where: { id: req.params.jobId } });
    if (!job) return reply.code(404).send({ error: "Job not found" });

    const rows = await fetchRowsForJob(job.id);
    const buffer = await buildXlsx(rows);
    const filename = exportFilename(job.mode === "QUICK" ? "quick" : "deep", "xlsx");

    reply.header("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
    reply.header("Content-Disposition", `attachment; filename="${filename}"`);
    return reply.send(buffer);
  });

  // POST /api/export/csv - export a SELECTED set of result_ids (checkbox selection)
  app.post("/api/export/csv", async (req, reply) => {
    const parsed = SelectedIdsSchema.safeParse(req.body);
    if (!parsed.success) return reply.code(400).send({ error: "Validation failed", details: parsed.error.flatten() });

    const rows = await fetchRowsForIds(parsed.data.result_ids);
    const csv = buildCsv(rows);
    const filename = exportFilename("quick", "csv").replace("lead-research", "lead-research-selected");

    reply.header("Content-Type", "text/csv; charset=utf-8");
    reply.header("Content-Disposition", `attachment; filename="${filename}"`);
    return reply.send(csv);
  });

  // POST /api/export/excel - export a SELECTED set of result_ids (checkbox selection)
  app.post("/api/export/excel", async (req, reply) => {
    const parsed = SelectedIdsSchema.safeParse(req.body);
    if (!parsed.success) return reply.code(400).send({ error: "Validation failed", details: parsed.error.flatten() });

    const rows = await fetchRowsForIds(parsed.data.result_ids);
    const buffer = await buildXlsx(rows);
    const filename = exportFilename("quick", "xlsx").replace("lead-research", "lead-research-selected");

    reply.header("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
    reply.header("Content-Disposition", `attachment; filename="${filename}"`);
    return reply.send(buffer);
  });
}
