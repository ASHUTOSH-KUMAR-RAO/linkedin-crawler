"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoDiscoveryProvider = void 0;
/**
 * DemoDiscoveryProvider
 * ---------------------
 * Generates deterministic, clearly-fictional sample candidates so the full
 * pipeline (discovery -> enrichment -> verification -> dedup -> scoring ->
 * storage -> export) can be exercised locally with zero external API keys.
 *
 * Every candidate name and company here is fictional and every record is
 * tagged sourceType="DEMO". This provider is only active when
 * DEMO_MODE=true. It never claims to represent a real person.
 */
const FIRST_NAMES = [
    "Arjun", "Priya", "Rahul", "Ananya", "Vikram", "Neha", "Karan", "Isha",
    "Sanjay", "Meera", "Aditya", "Divya", "Rohan", "Kavya", "Nikhil", "Pooja",
    "Aakash", "Riya", "Varun", "Simran",
];
const LAST_NAMES = [
    "Sharma", "Gupta", "Patel", "Iyer", "Nair", "Reddy", "Singh", "Mehta",
    "Kapoor", "Rao", "Das", "Bose", "Chatterjee", "Verma", "Malhotra",
];
const TITLES = [
    "Founder", "Co-Founder", "CEO", "CTO", "VP of Engineering", "Head of Product",
    "Managing Partner", "Investor", "Director", "General Manager",
];
const COMPANY_SUFFIXES = ["Labs", "Technologies", "Systems", "Ventures", "Capital", "Works", "Fintech", "Cloud", "Analytics"];
const INDUSTRIES = ["FinTech", "SaaS", "AI/ML", "E-commerce", "HealthTech", "EdTech", "Cybersecurity"];
function hashSeed(str) {
    let h = 0;
    for (let i = 0; i < str.length; i++) {
        h = (h << 5) - h + str.charCodeAt(i);
        h |= 0;
    }
    return Math.abs(h);
}
function mulberry32(seed) {
    let a = seed;
    return function () {
        a |= 0;
        a = (a + 0x6d2b79f5) | 0;
        let t = Math.imul(a ^ (a >>> 15), 1 | a);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}
function pick(rand, arr) {
    return arr[Math.floor(rand() * arr.length)];
}
/** Extracts a plausible location/industry keyword out of the free-text query. */
function extractQueryHints(query) {
    const lower = query.toLowerCase();
    const locationMatch = query.match(/in\s+([A-Za-z\s]+)$/i);
    const location = locationMatch ? locationMatch[1].trim() : "";
    let industry = INDUSTRIES.find((i) => lower.includes(i.toLowerCase())) ?? "";
    if (!industry && lower.includes("fintech"))
        industry = "FinTech";
    if (!industry && lower.includes("saas"))
        industry = "SaaS";
    if (!industry && (lower.includes("ai") || lower.includes("artificial intelligence")))
        industry = "AI/ML";
    return { location, industry };
}
class DemoDiscoveryProvider {
    name = "demo-discovery";
    sourceType = "DEMO";
    isEnabled() {
        return process.env.DEMO_MODE === "true";
    }
    async search(input) {
        const { query, maxResults } = input;
        const { location, industry } = extractQueryHints(query);
        const rand = mulberry32(hashSeed(query));
        const count = Math.min(maxResults, 150);
        const candidates = [];
        const usedNames = new Set();
        for (let i = 0; i < count; i++) {
            let first = pick(rand, FIRST_NAMES);
            let last = pick(rand, LAST_NAMES);
            let full = `${first} ${last}`;
            let attempts = 0;
            while (usedNames.has(full) && attempts < 20) {
                first = pick(rand, FIRST_NAMES);
                last = pick(rand, LAST_NAMES);
                full = `${first} ${last}`;
                attempts++;
            }
            usedNames.add(full);
            const companyName = `${pick(rand, LAST_NAMES)}${pick(rand, COMPANY_SUFFIXES)}`;
            const title = pick(rand, TITLES);
            const slug = full.toLowerCase().replace(/\s+/g, "-") + "-" + hashSeed(full + i).toString(36).slice(0, 6);
            candidates.push({
                name: `${full} (DEMO)`,
                jobTitle: title,
                company: `${companyName} (Demo)`,
                companyWebsite: `https://demo-${companyName.toLowerCase()}.example.com`,
                location: location || pick(rand, ["Bangalore", "Mumbai", "Delhi", "Pune", "Hyderabad"]),
                linkedinUrl: `https://www.linkedin.com/in/${slug}`,
                keyword: industry || query,
                sourceType: "DEMO",
                sourceUrl: undefined,
                sourceStatus: "ok",
                raw: { demo: true, generatedFor: query },
            });
        }
        return candidates;
    }
}
exports.DemoDiscoveryProvider = DemoDiscoveryProvider;
//# sourceMappingURL=demoDiscoveryProvider.js.map