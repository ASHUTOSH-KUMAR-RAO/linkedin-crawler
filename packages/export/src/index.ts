import ExcelJS from "exceljs";

/** Flat row shape used for both CSV and XLSX export (spec section 13). */
export interface ExportRow {
  name: string;
  company: string;
  jobTitle: string;
  keyword: string;
  linkedinUrl: string;
  socialMedia: string;
  email: string;
  phone: string;
  location: string;
  industry: string;
  companyWebsite: string;
  relevanceScore: string;
  confidenceScore: string;
  source: string;
}

export const EXPORT_COLUMNS: { key: keyof ExportRow; header: string }[] = [
  { key: "name", header: "Name" },
  { key: "company", header: "Company" },
  { key: "jobTitle", header: "Job Title" },
  { key: "keyword", header: "Keyword" },
  { key: "linkedinUrl", header: "LinkedIn URL" },
  { key: "socialMedia", header: "Social Media" },
  { key: "email", header: "Email" },
  { key: "phone", header: "Phone" },
  { key: "location", header: "Location" },
  { key: "industry", header: "Industry" },
  { key: "companyWebsite", header: "Company Website" },
  { key: "relevanceScore", header: "Relevance Score" },
  { key: "confidenceScore", header: "Confidence Score" },
  { key: "source", header: "Source" },
];

function csvEscape(value: string): string {
  const v = value ?? "";
  if (v.includes(",") || v.includes('"') || v.includes("\n")) {
    return `"${v.replace(/"/g, '""')}"`;
  }
  return v;
}

/** Builds a proper UTF-8 encoded CSV string (with BOM so Excel on Windows opens it correctly). */
export function buildCsv(rows: ExportRow[]): string {
  const header = EXPORT_COLUMNS.map((c) => csvEscape(c.header)).join(",");
  const lines = rows.map((row) => EXPORT_COLUMNS.map((c) => csvEscape(row[c.key] ?? "")).join(","));
  const BOM = "\uFEFF";
  return BOM + [header, ...lines].join("\r\n");
}

/** Builds a genuine Excel workbook (.xlsx) buffer - not a renamed CSV. */
export async function buildXlsx(rows: ExportRow[]): Promise<Buffer> {
  const workbook = new ExcelJS.Workbook();
  workbook.creator = "Lead Research Engine";
  workbook.created = new Date();

  const sheet = workbook.addWorksheet("Leads");
  sheet.columns = EXPORT_COLUMNS.map((c) => ({ header: c.header, key: c.key as string, width: 22 }));
  sheet.getRow(1).font = { bold: true };
  sheet.getRow(1).alignment = { vertical: "middle" };

  for (const row of rows) {
    sheet.addRow(row);
  }

  sheet.autoFilter = {
    from: { row: 1, column: 1 },
    to: { row: 1, column: EXPORT_COLUMNS.length },
  };

  const arrayBuffer = await workbook.xlsx.writeBuffer();
  return Buffer.from(arrayBuffer);
}

export function exportFilename(mode: "quick" | "deep", ext: "csv" | "xlsx"): string {
  const date = new Date().toISOString().slice(0, 10);
  return `lead-research-${mode}-${date}.${ext}`;
}
