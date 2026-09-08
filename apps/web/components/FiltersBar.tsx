"use client";

import type { ResultFilters } from "@/lib/api";

export function FiltersBar({
  filters,
  onChange,
}: {
  filters: ResultFilters;
  onChange: (filters: ResultFilters) => void;
}) {
  return (
    <div className="flex flex-wrap items-center gap-2 rounded-xl border border-gray-200 bg-white p-3 shadow-sm">
      <input
        placeholder="Search within results..."
        className="w-48 rounded-lg border border-gray-200 px-3 py-1.5 text-sm"
        value={filters.search ?? ""}
        onChange={(e) => onChange({ ...filters, search: e.target.value })}
      />
      <input
        placeholder="Company"
        className="w-32 rounded-lg border border-gray-200 px-3 py-1.5 text-sm"
        value={filters.company ?? ""}
        onChange={(e) => onChange({ ...filters, company: e.target.value })}
      />
      <input
        placeholder="Job title"
        className="w-32 rounded-lg border border-gray-200 px-3 py-1.5 text-sm"
        value={filters.jobTitle ?? ""}
        onChange={(e) => onChange({ ...filters, jobTitle: e.target.value })}
      />
      <input
        placeholder="Location"
        className="w-32 rounded-lg border border-gray-200 px-3 py-1.5 text-sm"
        value={filters.location ?? ""}
        onChange={(e) => onChange({ ...filters, location: e.target.value })}
      />
      <label className="flex items-center gap-1 text-sm text-gray-600">
        <input
          type="checkbox"
          checked={!!filters.hasEmail}
          onChange={(e) => onChange({ ...filters, hasEmail: e.target.checked })}
        />
        Has email
      </label>
      <label className="flex items-center gap-1 text-sm text-gray-600">
        <input
          type="checkbox"
          checked={!!filters.hasPhone}
          onChange={(e) => onChange({ ...filters, hasPhone: e.target.checked })}
        />
        Has phone
      </label>
      <label className="flex items-center gap-1 text-sm text-gray-600">
        <input
          type="checkbox"
          checked={!!filters.hasLinkedin}
          onChange={(e) => onChange({ ...filters, hasLinkedin: e.target.checked })}
        />
        Has LinkedIn
      </label>
      <div className="flex items-center gap-1 text-sm text-gray-600">
        Min relevance
        <input
          type="number"
          min={0}
          max={100}
          className="w-16 rounded-lg border border-gray-200 px-2 py-1 text-sm"
          value={filters.minRelevance ?? ""}
          onChange={(e) => onChange({ ...filters, minRelevance: e.target.value ? Number(e.target.value) : undefined })}
        />
      </div>
      <div className="flex items-center gap-1 text-sm text-gray-600">
        Min confidence
        <input
          type="number"
          min={0}
          max={100}
          className="w-16 rounded-lg border border-gray-200 px-2 py-1 text-sm"
          value={filters.minConfidence ?? ""}
          onChange={(e) =>
            onChange({ ...filters, minConfidence: e.target.value ? Number(e.target.value) : undefined })
          }
        />
      </div>
    </div>
  );
}
