"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyWebsiteProvider = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
/**
 * CompanyWebsiteProvider
 * ----------------------
 * Many discovery providers (e.g. search-engine-based discovery) can find a
 * company's NAME but not its real website/domain. Email-finder APIs like
 * Hunter.io require a domain to search against - without one, email lookup
 * silently fails every time.
 *
 * This provider closes that gap legitimately: it runs a public search for
 * "<company name> official website" and takes the top result's hostname.
 * This is public information a human could find in one Google search - it
 * is NOT a guess (e.g. we never assume "companyname.com"), and if no
 * confident result is found, companyWebsite is simply left empty.
 *
 * Required env var: SEARCH_API_KEY (same SerpApi key used for discovery)
 */
class CompanyWebsiteProvider {
    name = "company-website-resolver";
    isEnabled() {
        return !!process.env.SEARCH_API_KEY;
    }
    async enrich(candidate) {
        if (!this.isEnabled() || !candidate.company)
            return {};
        if (candidate.companyWebsite)
            return {}; // already known - nothing to do
        const apiKey = process.env.SEARCH_API_KEY;
        const cleanCompany = candidate.company.replace(/\(demo\)/gi, "").trim();
        const url = new URL("https://serpapi.com/search.json");
        url.searchParams.set("engine", "google");
        url.searchParams.set("q", `${cleanCompany} official website`);
        url.searchParams.set("num", "5");
        url.searchParams.set("api_key", apiKey);
        try {
            const controller = new AbortController();
            const timeout = setTimeout(() => controller.abort(), 15000);
            const res = await (0, node_fetch_1.default)(url.toString(), { signal: controller.signal });
            clearTimeout(timeout);
            if (!res.ok) {
                return { sourceType: "SEARCH_ENGINE", sourceStatus: "error" };
            }
            const data = (await res.json());
            const organic = Array.isArray(data.organic_results) ? data.organic_results : [];
            // Skip obvious non-company-site domains (social platforms, directories,
            // job boards) so we don't misattribute someone else's page as the
            // company's real website.
            const EXCLUDED_HOSTS = [
                "linkedin.com", "facebook.com", "twitter.com", "x.com", "instagram.com",
                "wikipedia.org", "crunchbase.com", "glassdoor.com", "indeed.com",
                "youtube.com", "bloomberg.com",
            ];
            for (const item of organic) {
                const link = item.link ?? "";
                if (!link)
                    continue;
                try {
                    const hostname = new URL(link).hostname.replace(/^www\./, "");
                    if (EXCLUDED_HOSTS.some((h) => hostname.includes(h)))
                        continue;
                    return {
                        companyWebsite: `https://${hostname}`,
                        sourceType: "SEARCH_ENGINE",
                        sourceUrl: link,
                        sourceStatus: "ok",
                    };
                }
                catch {
                    continue;
                }
            }
            // No confident match found - leave blank, do not guess.
            return { companyWebsite: "", sourceType: "SEARCH_ENGINE", sourceStatus: "not_found" };
        }
        catch {
            return { sourceType: "SEARCH_ENGINE", sourceStatus: "error" };
        }
    }
}
exports.CompanyWebsiteProvider = CompanyWebsiteProvider;
//# sourceMappingURL=companyWebsiteProvider.js.map