import type { Candidate } from "@lre/discovery";

export interface EnrichmentResult {
  email?: string;
  emailStatus: "UNKNOWN" | "FOUND" | "VERIFIED" | "UNAVAILABLE";
  phone?: string;
  phoneStatus: "UNKNOWN" | "FOUND" | "VERIFIED" | "UNAVAILABLE";
  socialProfiles: { platform: string; profileUrl: string }[];
  companyWebsite?: string;
  industry?: string;
  sourceType: string;
  sourceUrl?: string;
  sourceStatus: "ok" | "blocked" | "error" | "not_found";
}

/**
 * EnrichmentProvider abstraction (spec section 4 & 17).
 * Implementations must ONLY use legitimate, permitted, publicly available
 * data or authorized third-party enrichment APIs. Never guess or fabricate
 * emails, phone numbers, or social URLs - return UNAVAILABLE instead.
 */
export interface EnrichmentProvider {
  readonly name: string;
  isEnabled(): boolean;
  enrich(candidate: Candidate): Promise<Partial<EnrichmentResult>>;
}
