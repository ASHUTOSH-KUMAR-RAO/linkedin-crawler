/**
 * A Candidate is a raw, unverified lead surfaced by a DiscoveryProvider.
 * Nothing here is guaranteed accurate yet - verification/enrichment happens
 * downstream. Any field that could not be found MUST be left undefined/empty,
 * never guessed.
 */
export interface Candidate {
  name: string;
  jobTitle?: string;
  company?: string;
  companyWebsite?: string;
  location?: string;
  linkedinUrl?: string;
  keyword?: string; // which part of the query this candidate matched
  sourceType: SourceType;
  sourceUrl?: string;
  sourceStatus: "ok" | "blocked" | "error" | "not_found";
  raw?: Record<string, unknown>; // raw provider payload for debugging/audit
}

export type SourceType =
  | "SEARCH_ENGINE"
  | "PUBLIC_WEB"
  | "LINKEDIN_PUBLIC"
  | "COMPANY_WEBSITE"
  | "ENRICHMENT_API"
  | "DEMO"
  | "OTHER";

export interface DiscoveryQuery {
  query: string;
  maxResults: number;
}

/**
 * DiscoveryProvider abstraction (spec section 3 & 17).
 * Implementations must NEVER bypass authentication, CAPTCHAs, anti-bot
 * systems, or rate limits. If a provider cannot legitimately access data,
 * it must return an empty/partial result with sourceStatus="blocked" rather
 * than attempting to circumvent restrictions.
 */
export interface DiscoveryProvider {
  readonly name: string;
  readonly sourceType: SourceType;
  isEnabled(): boolean;
  search(input: DiscoveryQuery): Promise<Candidate[]>;
}
