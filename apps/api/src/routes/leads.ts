import type { FastifyInstance } from "fastify";
import { prisma } from "@lre/database";
import { requireAuth } from "../lib/auth";

export async function leadsRoutes(app: FastifyInstance) {
  app.addHook("preHandler", requireAuth);

  // GET /api/leads/:id  -> full detail panel data for one person
  app.get<{ Params: { id: string } }>("/api/leads/:id", async (req, reply) => {
    const person = await prisma.person.findUnique({
      where: { id: req.params.id },
      include: {
        companies: { include: { company: true } },
        contactData: true,
        socialProfiles: true,
        sources: true,
        results: { orderBy: { createdAt: "desc" }, take: 1 },
      },
    });

    if (!person) return reply.code(404).send({ error: "Lead not found" });

    const currentCompany = person.companies.find((pc) => pc.current) ?? person.companies[0];
    const latestResult = person.results[0];

    return reply.send({
      id: person.id,
      name: person.name,
      is_demo: person.isDemo,
      job_title: person.jobTitle ?? "",
      location: person.location ?? "",
      linkedin_url: person.linkedinUrl ?? "",
      company: currentCompany?.company?.name ?? "",
      company_website: currentCompany?.company?.website ?? "",
      industry: currentCompany?.company?.industry ?? "",
      email: person.contactData?.email ?? "",
      email_status: person.contactData?.emailStatus ?? "UNKNOWN",
      phone: person.contactData?.phone ?? "",
      phone_status: person.contactData?.phoneStatus ?? "UNKNOWN",
      social_profiles: person.socialProfiles.map((s) => ({ platform: s.platform, url: s.profileUrl })),
      relevance_score: latestResult?.relevanceScore ?? null,
      confidence_score: latestResult?.confidenceScore ?? null,
      relevance_reasons: safeParseJson(latestResult?.relevanceReasons ?? null),
      confidence_reasons: safeParseJson(latestResult?.confidenceReasons ?? null),
      sources: person.sources.map((s) => ({
        type: s.sourceType,
        url: s.sourceUrl,
        status: s.sourceStatus,
        discovered_at: s.discoveredAt,
      })),
    });
  });
}

function safeParseJson(value: string | null) {
  if (!value) return [];
  try {
    return JSON.parse(value);
  } catch {
    return [];
  }
}
