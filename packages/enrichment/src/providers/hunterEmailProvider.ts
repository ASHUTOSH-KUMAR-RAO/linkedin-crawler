import fetch from "node-fetch";
import type { Candidate } from "@lre/discovery";
import type { EnrichmentProvider, EnrichmentResult } from "../types";

/**
 * HunterEmailProvider
 * -------------------
 * Uses Hunter.io's authorized Email Finder API
 * (https://hunter.io/api-documentation/v2#email-finder) to find a
 * work email for a person, given their name and a company domain.
 * This is a legitimate, permission-based enrichment provider - Hunter.io
 * aggregates publicly available and consensually-sourced email patterns,
 * it does not scrape private data.
 *
 * If no company domain is known, or Hunter has no match, this returns
 * emailStatus="UNAVAILABLE" with an empty email - it never guesses.
 *
 * Required env var: ENRICHMENT_API_KEY (from https://hunter.io/api-keys)
 */
export class HunterEmailProvider implements EnrichmentProvider {
  readonly name = "hunter-email-finder";

  isEnabled(): boolean {
    return !!process.env.ENRICHMENT_API_KEY;
  }

  async enrich(candidate: Candidate): Promise<Partial<EnrichmentResult>> {
    if (!this.isEnabled()) return {};
    if (!candidate.companyWebsite || !candidate.name) {
      return { email: "", emailStatus: "UNAVAILABLE", sourceType: "ENRICHMENT_API", sourceStatus: "not_found" };
    }

    const domain = candidate.companyWebsite.replace(/^https?:\/\//, "").split("/")[0];
    const [firstName, ...rest] = candidate.name.replace(/\(demo\)/gi, "").trim().split(" ");
    const lastName = rest.join(" ");

    const url = new URL("https://api.hunter.io/v2/email-finder");
    url.searchParams.set("domain", domain);
    url.searchParams.set("first_name", firstName || "");
    url.searchParams.set("last_name", lastName || "");
    url.searchParams.set("api_key", process.env.ENRICHMENT_API_KEY!);

    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 15000);
      const res = await fetch(url.toString(), { signal: controller.signal as any });
      clearTimeout(timeout);

      if (res.status === 401 || res.status === 403) {
        return { email: "", emailStatus: "UNAVAILABLE", sourceType: "ENRICHMENT_API", sourceStatus: "error" };
      }
      if (res.status === 429) {
        return { email: "", emailStatus: "UNAVAILABLE", sourceType: "ENRICHMENT_API", sourceStatus: "blocked" };
      }
      if (!res.ok) {
        return { email: "", emailStatus: "UNAVAILABLE", sourceType: "ENRICHMENT_API", sourceStatus: "error" };
      }

      const data = (await res.json()) as any;
      const email: string | null = data?.data?.email ?? null;
      const score: number | undefined = data?.data?.score;

      if (email) {
        return {
          email,
          emailStatus: score && score >= 70 ? "VERIFIED" : "FOUND",
          sourceType: "ENRICHMENT_API",
          sourceUrl: "https://hunter.io",
          sourceStatus: "ok",
        };
      }

      return { email: "", emailStatus: "UNAVAILABLE", sourceType: "ENRICHMENT_API", sourceStatus: "not_found" };
    } catch {
      return { email: "", emailStatus: "UNAVAILABLE", sourceType: "ENRICHMENT_API", sourceStatus: "error" };
    }
  }
}
