"use client";

import { exportJobUrl, exportSelected } from "@/lib/api";

function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

export function ExportButtons({ jobId, selectedIds }: { jobId: string; selectedIds: string[] }) {
  async function handleExport(scope: "all" | "selected", type: "csv" | "excel") {
    if (scope === "all") {
      window.location.href = exportJobUrl(jobId, type);
      return;
    }
    if (selectedIds.length === 0) {
      alert("Select at least one row first, or use Export All.");
      return;
    }
    const blob = await exportSelected(type, selectedIds);
    const ext = type === "csv" ? "csv" : "xlsx";
    const date = new Date().toISOString().slice(0, 10);
    downloadBlob(blob, `lead-research-selected-${date}.${ext}`);
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      <button
        onClick={() => handleExport("all", "csv")}
        className="rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
      >
        Export CSV (All)
      </button>
      <button
        onClick={() => handleExport("all", "excel")}
        className="rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
      >
        Export Excel (All)
      </button>
      <button
        onClick={() => handleExport("selected", "csv")}
        className="rounded-lg bg-brand-500 px-3 py-1.5 text-sm font-medium text-white hover:bg-brand-600"
      >
        Export CSV (Selected)
      </button>
      <button
        onClick={() => handleExport("selected", "excel")}
        className="rounded-lg bg-brand-500 px-3 py-1.5 text-sm font-medium text-white hover:bg-brand-600"
      >
        Export Excel (Selected)
      </button>
    </div>
  );
}
