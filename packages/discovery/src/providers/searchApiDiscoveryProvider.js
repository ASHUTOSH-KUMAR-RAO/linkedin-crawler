"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchApiDiscoveryProvider = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
class SearchApiDiscoveryProvider {
    name = "serpapi-public-search";
    sourceType = "SEARCH_ENGINE";
    isEnabled() {
        return !!process.env.SEARCH_API_KEY;
    }
    async search(input) {
        if (!this.isEnabled())
            return [];
        const apiKey = process.env.SEARCH_API_KEY;
        const candidates = [];
        const searchQueries = [
            `site:linkedin.com/in ${input.query}`,
            `${input.query} founder OR CEO OR CTO public profile`,
        ];
        const RESULTS_PER_PAGE = 20;
        const MAX_PAGES_PER_QUERY = 5;
        for (const q of searchQueries) {
            if (candidates.length >= input.maxResults)
                break;
            for (let page = 0; page < MAX_PAGES_PER_QUERY; page++) {
                if (candidates.length >= input.maxResults)
                    break;
                const url = new URL("https://serpapi.com/search.json");
                url.searchParams.set("engine", "google");
                url.searchParams.set("q", q);
                url.searchParams.set("num", String(RESULTS_PER_PAGE));
                url.searchParams.set("start", String(page * RESULTS_PER_PAGE));
                url.searchParams.set("api_key", apiKey);
                try {
                    const controller = new AbortController();
                    const timeout = setTimeout(() => controller.abort(), 15000);
                    const res = await this.fetchWithRetry(url.toString(), controller.signal);
                    clearTimeout(timeout);
                    if (!res.ok) {
                        candidates.push(this.blockedPlaceholder(q, `HTTP ${res.status}`));
                        break;
                    }
                    const data = (await res.json());
                    const organic = Array.isArray(data.organic_results) ? data.organic_results : [];
                    if (organic.length === 0)
                        break;
                    for (const item of organic) {
                        if (candidates.length >= input.maxResults)
                            break;
                        const title = item.title ?? "";
                        const link = item.link ?? "";
                        const snippet = item.snippet ?? "";
                        const isLinkedInProfile = /linkedin\.com\/in\//i.test(link);
                        const parts = title.split(/[-|]/).map((p) => p.trim()).filter(Boolean);
                        const name = parts[0] || "";
                        if (!name)
                            continue;
                        candidates.push({
                            name,
                            jobTitle: parts[1] || undefined,
                            company: parts[2] || undefined,
                            location: undefined,
                            linkedinUrl: isLinkedInProfile ? link : undefined,
                            keyword: input.query,
                            sourceType: "SEARCH_ENGINE",
                            sourceUrl: link,
                            sourceStatus: "ok",
                            raw: { title, snippet, link },
                        });
                    }
                }
                catch (err) {
                    candidates.push(this.blockedPlaceholder(q, err?.message ?? "request failed"));
                    break;
                }
            }
        }
        return candidates;
    }
    blockedPlaceholder(query, reason) {
        return {
            name: "",
            keyword: query,
            sourceType: "SEARCH_ENGINE",
            sourceStatus: "blocked",
            raw: { reason },
        };
    }
    async fetchWithRetry(url, signal, attempt = 1) {
        try {
            return await (0, node_fetch_1.default)(url, { signal: signal });
        }
        catch (err) {
            if (attempt >= 3)
                throw err;
            const backoffMs = 500 * Math.pow(2, attempt);
            await new Promise((r) => setTimeout(r, backoffMs));
            return this.fetchWithRetry(url, signal, attempt + 1);
        }
    }
}
exports.SearchApiDiscoveryProvider = SearchApiDiscoveryProvider;
//# sourceMappingURL=searchApiDiscoveryProvider.js.map