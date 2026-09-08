import { describe, it, expect } from "vitest";
import { deduplicate, type DedupeCandidate } from "../packages/verification/src/dedupe";

describe("deduplicate", () => {
  it("merges records with an identical LinkedIn URL", () => {
    const candidates: DedupeCandidate[] = [
      { index: 0, name: "Rahul Sharma", linkedinUrl: "https://linkedin.com/in/rahul-sharma-123" },
      { index: 1, name: "Rahul  Sharma", linkedinUrl: "https://www.linkedin.com/in/rahul-sharma-123/" },
    ];
    const groups = deduplicate(candidates);
    expect(groups).toHaveLength(1);
    expect(groups[0].matchedOn).toBe("linkedin_url");
    expect(groups[0].duplicateIndexes).toEqual([1]);
  });

  it("merges records with an identical email", () => {
    const candidates: DedupeCandidate[] = [
      { index: 0, name: "Ankit Gupta", email: "ankit@xyzpay.com" },
      { index: 1, name: "Ankit G.", email: "Ankit@XYZPay.com" },
    ];
    const groups = deduplicate(candidates);
    expect(groups).toHaveLength(1);
    expect(groups[0].matchedOn).toBe("email");
  });

  it("merges strongly similar name+company pairs", () => {
    const candidates: DedupeCandidate[] = [
      { index: 0, name: "Priya Iyer", company: "ABC Technologies" },
      { index: 1, name: "Priya Iyer", company: "ABC Technologies Pvt Ltd" },
    ];
    const groups = deduplicate(candidates);
    expect(groups).toHaveLength(1);
    expect(groups[0].matchedOn).toBe("name_company");
  });

  it("does NOT merge different people with no strong signal", () => {
    const candidates: DedupeCandidate[] = [
      { index: 0, name: "Arjun Mehta", company: "Alpha Capital" },
      { index: 1, name: "Vikram Rao", company: "Beta Ventures" },
    ];
    const groups = deduplicate(candidates);
    expect(groups).toHaveLength(0);
  });

  it("does not aggressively merge same name with different companies", () => {
    const candidates: DedupeCandidate[] = [
      { index: 0, name: "Neha Singh", company: "Fintech Labs" },
      { index: 1, name: "Neha Singh", company: "Totally Different Corp" },
    ];
    const groups = deduplicate(candidates);
    expect(groups).toHaveLength(0);
  });
});
