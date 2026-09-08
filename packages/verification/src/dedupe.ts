export interface DedupeCandidate {
  /** Index into the original array - used to report which items merged. */
  index: number;
  name: string;
  company?: string;
  linkedinUrl?: string;
  email?: string;
}

export interface DedupeGroup {
  /** Index of the record kept as canonical (the first one seen). */
  canonicalIndex: number;
  /** Indexes of records considered duplicates of the canonical record. */
  duplicateIndexes: number[];
  matchedOn: "linkedin_url" | "email" | "name_company" | "none";
}

function normalizeName(name: string): string {
  return name
    .toLowerCase()
    .replace(/\(demo\)/g, "")
    .replace(/[^a-z\s]/g, "")
    .trim()
    .replace(/\s+/g, " ");
}

function normalizeCompany(company: string): string {
  return company
    .toLowerCase()
    .replace(/\(demo\)/g, "")
    .replace(/[.,]/g, "")
    .replace(/\b(inc|llc|ltd|pvt|private|limited|technologies|labs|corp|co)\b/g, "")
    .trim()
    .replace(/\s+/g, " ");
}

function normalizeUrl(url: string): string {
  return url.toLowerCase().replace(/\/$/, "").replace(/^https?:\/\/(www\.)?/, "");
}

/** Simple Levenshtein-based similarity ratio between 0 and 1. */
function similarity(a: string, b: string): number {
  if (a === b) return 1;
  if (!a.length || !b.length) return 0;

  const dp: number[][] = Array.from({ length: a.length + 1 }, () => new Array(b.length + 1).fill(0));
  for (let i = 0; i <= a.length; i++) dp[i][0] = i;
  for (let j = 0; j <= b.length; j++) dp[0][j] = j;

  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + cost);
    }
  }

  const distance = dp[a.length][b.length];
  const maxLen = Math.max(a.length, b.length);
  return 1 - distance / maxLen;
}

/**
 * Deduplicates a list of candidates using a strict priority order
 * (spec section 10):
 *   1. Exact LinkedIn URL match (highest confidence - always merge)
 *   2. Exact verified email match (always merge)
 *   3. Strong name + company similarity (only merge above a high threshold,
 *      to avoid aggressive false-positive merges when confidence is low)
 *
 * Returns groups; callers should keep the canonical record per group and
 * treat the rest as duplicates (e.g. drop them, or merge missing fields in).
 */
export function deduplicate(candidates: DedupeCandidate[]): DedupeGroup[] {
  const groups: DedupeGroup[] = [];
  const claimed = new Set<number>();

  const byLinkedIn = new Map<string, number>();
  const byEmail = new Map<string, number>();

  // Pass 1: LinkedIn URL and email exact matches
  for (let i = 0; i < candidates.length; i++) {
    if (claimed.has(i)) continue;
    const c = candidates[i];

    if (c.linkedinUrl) {
      const key = normalizeUrl(c.linkedinUrl);
      if (byLinkedIn.has(key)) {
        const canonicalIndex = byLinkedIn.get(key)!;
        let group = groups.find((g) => g.canonicalIndex === canonicalIndex);
        if (!group) {
          group = { canonicalIndex, duplicateIndexes: [], matchedOn: "linkedin_url" };
          groups.push(group);
        }
        group.duplicateIndexes.push(i);
        claimed.add(i);
        continue;
      }
      byLinkedIn.set(key, i);
    }

    if (c.email) {
      const key = c.email.toLowerCase().trim();
      if (byEmail.has(key)) {
        const canonicalIndex = byEmail.get(key)!;
        if (!claimed.has(i)) {
          let group = groups.find((g) => g.canonicalIndex === canonicalIndex);
          if (!group) {
            group = { canonicalIndex, duplicateIndexes: [], matchedOn: "email" };
            groups.push(group);
          }
          group.duplicateIndexes.push(i);
          claimed.add(i);
        }
        continue;
      }
      byEmail.set(key, i);
    }
  }

  // Pass 2: strong name + company similarity for anything not already claimed
  const remaining = candidates
    .map((c, i) => ({ c, i }))
    .filter(({ i }) => !claimed.has(i) && !groups.some((g) => g.canonicalIndex === i));

  const NAME_COMPANY_THRESHOLD = 0.92; // deliberately high to avoid false merges

  for (let a = 0; a < remaining.length; a++) {
    const { c: candA, i: idxA } = remaining[a];
    if (claimed.has(idxA)) continue;

    for (let b = a + 1; b < remaining.length; b++) {
      const { c: candB, i: idxB } = remaining[b];
      if (claimed.has(idxB)) continue;

      const nameA = normalizeName(candA.name);
      const nameB = normalizeName(candB.name);
      const nameSim = similarity(nameA, nameB);

      if (nameSim < NAME_COMPANY_THRESHOLD) continue;

      const companyA = candA.company ? normalizeCompany(candA.company) : "";
      const companyB = candB.company ? normalizeCompany(candB.company) : "";
      if (!companyA || !companyB) continue; // require both companies present - low confidence otherwise
      const companySim = similarity(companyA, companyB);
      if (companySim < NAME_COMPANY_THRESHOLD) continue;

      let group = groups.find((g) => g.canonicalIndex === idxA);
      if (!group) {
        group = { canonicalIndex: idxA, duplicateIndexes: [], matchedOn: "name_company" };
        groups.push(group);
      }
      group.duplicateIndexes.push(idxB);
      claimed.add(idxB);
    }
  }

  return groups;
}
