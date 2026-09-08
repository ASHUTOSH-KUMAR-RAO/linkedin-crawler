import { describe, it, expect } from "vitest";
import ExcelJS from "exceljs";
import { buildCsv, buildXlsx, EXPORT_COLUMNS, type ExportRow } from "../packages/export/src/index";

function emptyRow(overrides: Partial<ExportRow> = {}): ExportRow {
  return {
    name: "",
    company: "",
    jobTitle: "",
    keyword: "",
    linkedinUrl: "",
    socialMedia: "",
    email: "",
    phone: "",
    location: "",
    industry: "",
    companyWebsite: "",
    relevanceScore: "",
    confidenceScore: "",
    source: "",
    ...overrides,
  };
}

describe("buildCsv", () => {
  it("includes a UTF-8 BOM and correct header row", () => {
    const csv = buildCsv([emptyRow({ name: "Rahul Sharma" })]);
    expect(csv.startsWith("\uFEFF")).toBe(true);
    expect(csv).toContain(EXPORT_COLUMNS.map((c) => c.header).join(","));
  });

  it("leaves missing fields blank rather than fabricating values", () => {
    const csv = buildCsv([emptyRow({ name: "Ankit Gupta", email: "" })]);
    const lines = csv.replace("\uFEFF", "").split("\r\n");
    const dataLine = lines[1];
    // Ankit Gupta,,,,,,,,,,,,,  -> email column must be empty, not fabricated
    expect(dataLine.split(",")[0]).toBe("Ankit Gupta");
  });

  it("escapes commas and quotes correctly", () => {
    const csv = buildCsv([emptyRow({ company: 'Acme, "Inc"' })]);
    expect(csv).toContain('"Acme, ""Inc"""');
  });
});

describe("buildXlsx", () => {
  it("produces a genuine parseable Excel workbook, not a renamed CSV", async () => {
    const buffer = await buildXlsx([emptyRow({ name: "Priya Iyer", relevanceScore: "94", confidenceScore: "88" })]);
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.load(buffer);
    const sheet = workbook.getWorksheet("Leads");
    expect(sheet).toBeDefined();
    expect(sheet!.getRow(1).getCell(1).value).toBe("Name");
    expect(sheet!.getRow(2).getCell(1).value).toBe("Priya Iyer");
  });
});
