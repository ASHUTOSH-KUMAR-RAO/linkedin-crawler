const BLOCKED_HOSTNAME_PATTERNS = [
  /^localhost$/i,
  /^127\./,
  /^0\.0\.0\.0$/,
  /^10\./,
  /^172\.(1[6-9]|2\d|3[0-1])\./,
  /^192\.168\./,
  /^169\.254\./, // link-local / cloud metadata endpoint range
  /^::1$/,
  /^fc00:/i,
];

/**
 * Validates that a URL is safe to fetch server-side: http(s) only, and not
 * pointing at localhost/private/internal network ranges (SSRF protection).
 * Used defensively anywhere the app might build a fetch target from
 * external/provider-supplied data.
 */
export function isUrlSafeToFetch(rawUrl: string): boolean {
  try {
    const url = new URL(rawUrl);
    if (url.protocol !== "http:" && url.protocol !== "https:") return false;
    const hostname = url.hostname;
    if (BLOCKED_HOSTNAME_PATTERNS.some((p) => p.test(hostname))) return false;
    return true;
  } catch {
    return false;
  }
}
