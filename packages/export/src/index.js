"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EXPORT_COLUMNS = void 0;
exports.buildCsv = buildCsv;
exports.buildXlsx = buildXlsx;
exports.exportFilename = exportFilename;
const exceljs_1 = __importDefault(require("exceljs"));
exports.EXPORT_COLUMNS = [
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
function csvEscape(value) {
    const v = value ?? "";
    if (v.includes(",") || v.includes('"') || v.includes("\n")) {
        return `"${v.replace(/"/g, '""')}"`;
    }
    return v;
}
/** Builds a proper UTF-8 encoded CSV string (with BOM so Excel on Windows opens it correctly). */
function buildCsv(rows) {
    const header = exports.EXPORT_COLUMNS.map((c) => csvEscape(c.header)).join(",");
    const lines = rows.map((row) => exports.EXPORT_COLUMNS.map((c) => csvEscape(row[c.key] ?? "")).join(","));
    const BOM = "\uFEFF";
    return BOM + [header, ...lines].join("\r\n");
}
/** Builds a genuine Excel workbook (.xlsx) buffer - not a renamed CSV. */
async function buildXlsx(rows) {
    const workbook = new exceljs_1.default.Workbook();
    workbook.creator = "Lead Research Engine";
    workbook.created = new Date();
    const sheet = workbook.addWorksheet("Leads");
    sheet.columns = exports.EXPORT_COLUMNS.map((c) => ({ header: c.header, key: c.key, width: 22 }));
    sheet.getRow(1).font = { bold: true };
    sheet.getRow(1).alignment = { vertical: "middle" };
    for (const row of rows) {
        sheet.addRow(row);
    }
    sheet.autoFilter = {
        from: { row: 1, column: 1 },
        to: { row: 1, column: exports.EXPORT_COLUMNS.length },
    };
    const arrayBuffer = await workbook.xlsx.writeBuffer();
    return Buffer.from(arrayBuffer);
}
function exportFilename(mode, ext) {
    const date = new Date().toISOString().slice(0, 10);
    return `lead-research-${mode}-${date}.${ext}`;
}
//# sourceMappingURL=index.js.map