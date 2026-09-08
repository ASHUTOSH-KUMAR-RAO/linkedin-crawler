import { describe, it, expect } from "vitest";
import { z } from "zod";

// Mirrors the schema used in apps/api/src/routes/research.ts
const CreateJobSchema = z.object({
  query: z.string().trim().min(3, "Query must be at least 3 characters").max(300, "Query is too long"),
});

describe("research query validation", () => {
  it("accepts a normal query", () => {
    const result = CreateJobSchema.safeParse({ query: "FinTech founders in India" });
    expect(result.success).toBe(true);
  });

  it("rejects an empty query", () => {
    const result = CreateJobSchema.safeParse({ query: "" });
    expect(result.success).toBe(false);
  });

  it("rejects a too-short query", () => {
    const result = CreateJobSchema.safeParse({ query: "ai" });
    expect(result.success).toBe(false);
  });

  it("rejects a missing query field", () => {
    const result = CreateJobSchema.safeParse({});
    expect(result.success).toBe(false);
  });

  it("rejects an excessively long query", () => {
    const result = CreateJobSchema.safeParse({ query: "a".repeat(301) });
    expect(result.success).toBe(false);
  });
});
