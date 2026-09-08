import { describe, it, expect } from "vitest";
import type { DiscoveryProvider, Candidate } from "../packages/discovery/src/types";

/** Minimal stand-in for the aggregation logic used inside runResearchJob. */
async function aggregateDiscovery(providers: DiscoveryProvider[], query: string, maxResults: number) {
  const errors: string[] = [];
  let candidates: Candidate[] = [];
  for (const provider of providers) {
    try {
      const found = await provider.search({ query, maxResults });
      candidates.push(...found);
    } catch (err: any) {
      errors.push(`${provider.name}: ${err.message}`);
    }
  }
  return { candidates, errors };
}

class WorkingProvider implements DiscoveryProvider {
  name = "working-provider";
  sourceType = "PUBLIC_WEB" as const;
  isEnabled() {
    return true;
  }
  async search(): Promise<Candidate[]> {
    return [
      {
        name: "Test Person",
        sourceType: "PUBLIC_WEB",
        sourceStatus: "ok",
      },
    ];
  }
}

class FailingProvider implements DiscoveryProvider {
  name = "failing-provider";
  sourceType = "SEARCH_ENGINE" as const;
  isEnabled() {
    return true;
  }
  async search(): Promise<Candidate[]> {
    throw new Error("Simulated provider outage");
  }
}

describe("provider failure handling", () => {
  it("continues and returns partial results when one provider fails", async () => {
    const { candidates, errors } = await aggregateDiscovery(
      [new WorkingProvider(), new FailingProvider()],
      "FinTech founders in India",
      10
    );
    expect(candidates).toHaveLength(1);
    expect(candidates[0].name).toBe("Test Person");
    expect(errors).toHaveLength(1);
    expect(errors[0]).toContain("failing-provider");
  });

  it("does not throw even if every provider fails - caller decides how to fail the job", async () => {
    const { candidates, errors } = await aggregateDiscovery([new FailingProvider()], "query", 10);
    expect(candidates).toHaveLength(0);
    expect(errors).toHaveLength(1);
  });
});
