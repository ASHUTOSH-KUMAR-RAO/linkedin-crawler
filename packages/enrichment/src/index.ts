import type { EnrichmentProvider } from "./types";
import { DemoEnrichmentProvider } from "./providers/demoEnrichmentProvider";
import { CompanyWebsiteProvider } from "./providers/companyWebsiteProvider";
import { HunterEmailProvider } from "./providers/hunterEmailProvider";

export * from "./types";
export { DemoEnrichmentProvider } from "./providers/demoEnrichmentProvider";
export { CompanyWebsiteProvider } from "./providers/companyWebsiteProvider";
export { HunterEmailProvider } from "./providers/hunterEmailProvider";

/**
 * Returns every EnrichmentProvider currently enabled via env configuration,
 * in the order they should run. CompanyWebsiteProvider MUST run before
 * HunterEmailProvider - it resolves a real company domain (when missing)
 * that HunterEmailProvider then needs to look up an email.
 */
export function getEnabledEnrichmentProviders(): EnrichmentProvider[] {
  const all: EnrichmentProvider[] = [
    new DemoEnrichmentProvider(),
    new CompanyWebsiteProvider(),
    new HunterEmailProvider(),
  ];
  return all.filter((p) => p.isEnabled());
}