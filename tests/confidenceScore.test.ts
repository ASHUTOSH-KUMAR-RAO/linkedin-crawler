import { describe, it, expect } from "vitest";
import { computeConfidenceScore } from "../packages/verification/src/confidenceScore";

describe("computeConfidenceScore", () => {
  it("gives high confidence to a well-sourced, verified record", () => {
    const result = computeConfidenceScore({
      independentSourceCount: 3,
      hasLinkedIn: true,
      emailVerified: true,
      hasEmail: true,
      hadSourceErrors: false,
      wasDeduplicatedFromMultiple: true,
    });
    expect(result.score).toBeGreaterThanOrEqual(90);
  });

  it("gives low confidence to a single-source, unverified, no-contact record", () => {
    const result = computeConfidenceScore({
      independentSourceCount: 1,
      hasLinkedIn: false,
      emailVerified: false,
      hasEmail: false,
      hadSourceErrors: true,
      wasDeduplicatedFromMultiple: false,
    });
    expect(result.score).toBeLessThan(30);
  });

  it("is independent from relevance - a highly relevant person can still have low confidence", () => {
    // This test documents intent: confidence and relevance are separate axes.
    const confidence = computeConfidenceScore({
      independentSourceCount: 1,
      hasLinkedIn: false,
      emailVerified: false,
      hasEmail: false,
      hadSourceErrors: true,
      wasDeduplicatedFromMultiple: false,
    });
    expect(confidence.score).toBeLessThan(50);
  });
});
