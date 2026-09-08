import type { DiscoveryProvider } from "./types";
import { DemoDiscoveryProvider } from "./providers/demoDiscoveryProvider";
import { SearchApiDiscoveryProvider } from "./providers/searchApiDiscoveryProvider";

export * from "./types";
export { DemoDiscoveryProvider } from "./providers/demoDiscoveryProvider";
export { SearchApiDiscoveryProvider } from "./providers/searchApiDiscoveryProvider";

/**
 * Returns every DiscoveryProvider that is currently enabled, based on
 * environment configuration. Adding a new provider means adding it to this
 * list - nothing else in the app needs to change (spec section 17).
 */
export function getEnabledDiscoveryProviders(): DiscoveryProvider[] {
  const all: DiscoveryProvider[] = [new DemoDiscoveryProvider(), new SearchApiDiscoveryProvider()];
  return all.filter((p) => p.isEnabled());
}
