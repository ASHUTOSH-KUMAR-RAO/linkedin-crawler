"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoEnrichmentProvider = void 0;
/**
 * DemoEnrichmentProvider
 * ----------------------
 * Only active when DEMO_MODE=true. Simulates a realistic enrichment outcome
 * (some leads get a demo email, some don't - just like real enrichment
 * providers, which never have 100% coverage). All generated values are
 * clearly fake (@example.com) and tied to candidates already tagged as
 * DEMO by the DemoDiscoveryProvider. This provider never runs against real
 * candidates because it only activates in DEMO_MODE.
 */
function hashSeed(str) {
    let h = 0;
    for (let i = 0; i < str.length; i++) {
        h = (h << 5) - h + str.charCodeAt(i);
        h |= 0;
    }
    return Math.abs(h);
}
class DemoEnrichmentProvider {
    name = "demo-enrichment";
    isEnabled() {
        return process.env.DEMO_MODE === "true";
    }
    async enrich(candidate) {
        const seed = hashSeed(candidate.name + (candidate.company ?? ""));
        const roll = seed % 100;
        const slug = candidate.name
            .toLowerCase()
            .replace(/\(demo\)/g, "")
            .trim()
            .replace(/\s+/g, ".");
        const companyDomain = candidate.companyWebsite
            ? candidate.companyWebsite.replace(/^https?:\/\//, "").replace(/\/$/, "")
            : "example.com";
        const result = {
            socialProfiles: [],
            sourceType: "DEMO",
            sourceStatus: "ok",
        };
        // ~65% of demo leads get a (fake, labeled) email - mirrors realistic coverage
        if (roll < 65) {
            result.email = `${slug}@${companyDomain}`;
            result.emailStatus = "FOUND";
        }
        else {
            result.email = "";
            result.emailStatus = "UNAVAILABLE";
        }
        // ~30% of demo leads get a phone number
        if (roll % 3 === 0) {
            result.phone = `+91-9${(seed % 900000000).toString().padStart(9, "0")}`;
            result.phoneStatus = "FOUND";
        }
        else {
            result.phone = "";
            result.phoneStatus = "UNAVAILABLE";
        }
        // ~50% get a demo Twitter/X profile
        if (roll % 2 === 0) {
            result.socialProfiles = [
                { platform: "twitter", profileUrl: `https://x.com/${slug.replace(/\./g, "")}_demo` },
            ];
        }
        return result;
    }
}
exports.DemoEnrichmentProvider = DemoEnrichmentProvider;
//# sourceMappingURL=demoEnrichmentProvider.js.map