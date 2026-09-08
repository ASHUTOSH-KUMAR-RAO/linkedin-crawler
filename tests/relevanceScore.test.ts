import { describe, it, expect } from "vitest";
import { computeRelevanceScore } from "../packages/verification/src/relevanceScore";

describe("computeRelevanceScore", () => {
  it("scores a strong match highly", () => {
    const result = computeRelevanceScore({
      query: "FinTech founders in Bangalore",
      name: "Rahul Sharma",
      jobTitle: "Founder",
      company: "ABC FinTech",
      industry: "FinTech",
      location: "Bangalore",
    });
    expect(result.score).toBeGreaterThanOrEqual(80);
    expect(result.reasons.length).toBeGreaterThan(0);
  });

  it("scores a weak/irrelevant match lowly", () => {
    const result = computeRelevanceScore({
      query: "FinTech founders in Bangalore",
      name: "Someone Else",
    });
    expect(result.score).toBeLessThan(40);
  });

  it("never exceeds 100 or goes below 0", () => {
    const result = computeRelevanceScore({
      query: "AI startup CEOs",
      name: "A",
      jobTitle: "CEO Founder Director",
      company: "AI Startup Labs",
      industry: "AI/ML",
      location: "AI startup CEOs",
    });
    expect(result.score).toBeLessThanOrEqual(100);
    expect(result.score).toBeGreaterThanOrEqual(0);
  });
});
