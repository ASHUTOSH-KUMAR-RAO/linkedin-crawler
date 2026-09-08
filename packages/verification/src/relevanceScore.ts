export interface RelevanceInput {
  query: string;
  name: string;
  jobTitle?: string;
  company?: string;
  industry?: string;
  location?: string;
}

export interface RelevanceOutput {
  score: number; // 0-100
  reasons: string[];
}

const SENIOR_TITLES = [
  "founder", "co-founder", "ceo", "cto", "coo", "cfo", "president",
  "managing partner", "general partner", "investor", "vp", "director",
  "head of",
];

/**
 * Relevance scoring (spec section 11).
 *
 * Weighting (out of 100):
 *   - Keyword / industry match in query      : 30 pts
 *   - Job title seniority & relevance         : 30 pts
 *   - Location match                          : 20 pts
 *   - Company / industry context present      : 20 pts
 *
 * This is a transparent, rule-based scorer (not a black box) so every score
 * can be explained to the user via `reasons`.
 */
export function computeRelevanceScore(input: RelevanceInput): RelevanceOutput {
  const reasons: string[] = [];
  let score = 0;

  const queryLower = input.query.toLowerCase();
  const queryTokens = queryLower
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((t) => t.length > 2);

  // 1. Keyword / industry match (30 pts)
  const haystack = [input.jobTitle, input.company, input.industry]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
  const matchedTokens = queryTokens.filter((t) => haystack.includes(t));
  const keywordScore = queryTokens.length
    ? Math.round((matchedTokens.length / queryTokens.length) * 30)
    : 0;
  score += keywordScore;
  if (matchedTokens.length > 0) {
    reasons.push(`Matched query keywords: ${matchedTokens.join(", ")} (+${keywordScore})`);
  } else {
    reasons.push(`No direct keyword overlap with query (+0)`);
  }

  // 2. Job title relevance (30 pts)
  if (input.jobTitle) {
    const titleLower = input.jobTitle.toLowerCase();
    const isSenior = SENIOR_TITLES.some((t) => titleLower.includes(t));
    const titleScore = isSenior ? 30 : 15;
    score += titleScore;
    reasons.push(
      isSenior
        ? `Job title "${input.jobTitle}" is a senior/decision-maker role (+${titleScore})`
        : `Job title "${input.jobTitle}" present but not clearly senior (+${titleScore})`
    );
  } else {
    reasons.push(`Job title unknown (+0)`);
  }

  // 3. Location match (20 pts)
  if (input.location && queryLower.includes(input.location.toLowerCase())) {
    score += 20;
    reasons.push(`Location "${input.location}" matches query (+20)`);
  } else if (input.location) {
    score += 5;
    reasons.push(`Location "${input.location}" known but not an explicit query match (+5)`);
  } else {
    reasons.push(`Location unknown (+0)`);
  }

  // 4. Company/industry context present (20 pts)
  if (input.company && input.industry) {
    score += 20;
    reasons.push(`Company and industry both known (+20)`);
  } else if (input.company || input.industry) {
    score += 10;
    reasons.push(`Partial company/industry context known (+10)`);
  } else {
    reasons.push(`No company/industry context (+0)`);
  }

  score = Math.max(0, Math.min(100, score));
  return { score, reasons };
}
