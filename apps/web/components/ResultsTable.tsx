"use client";

import type { LeadResultDto } from "@/lib/api";

function ScoreBadge({ value, kind }: { value: number; kind: "relevance" | "confidence" }) {
  const color =
    value >= 80 ? "bg-green-100 text-green-700" : value >= 60 ? "bg-blue-100 text-blue-700" : value >= 40 ? "bg-amber-100 text-amber-700" : "bg-gray-100 text-gray-500";
  return <span className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${color}`}>{value}%</span>;
}

export function ResultsTable({
  results,
  selected,
  onToggleSelect,
  onToggleSelectAll,
  onRowClick,
}: {
  results: LeadResultDto[];
  selected: Set<string>;
  onToggleSelect: (resultId: string) => void;
  onToggleSelectAll: () => void;
  onRowClick: (result: LeadResultDto) => void;
}) {
  const allSelected = results.length > 0 && results.every((r) => selected.has(r.result_id));

  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
      <table className="min-w-full text-sm">
        <thead>
          <tr className="border-b border-gray-100 bg-gray-50 text-left text-xs uppercase tracking-wide text-gray-500">
            <th className="px-3 py-2">
              <input type="checkbox" checked={allSelected} onChange={onToggleSelectAll} />
            </th>
            <th className="px-3 py-2">Name</th>
            <th className="px-3 py-2">Company</th>
            <th className="px-3 py-2">Job Title</th>
            <th className="px-3 py-2">Keyword</th>
            <th className="px-3 py-2">LinkedIn</th>
            <th className="px-3 py-2">Social</th>
            <th className="px-3 py-2">Email</th>
            <th className="px-3 py-2">Phone</th>
            <th className="px-3 py-2">Location</th>
            <th className="px-3 py-2">Relevance</th>
            <th className="px-3 py-2">Confidence</th>
          </tr>
        </thead>
        <tbody>
          {results.map((r) => (
            <tr
              key={r.result_id}
              className="cursor-pointer border-b border-gray-50 hover:bg-brand-50/40"
              onClick={() => onRowClick(r)}
            >
              <td className="px-3 py-2" onClick={(e) => e.stopPropagation()}>
                <input
                  type="checkbox"
                  checked={selected.has(r.result_id)}
                  onChange={() => onToggleSelect(r.result_id)}
                />
              </td>
              <td className="px-3 py-2 font-medium text-gray-800">
                {r.name}
                {r.is_demo && (
                  <span className="ml-1 rounded bg-purple-100 px-1.5 py-0.5 text-[10px] font-semibold text-purple-700">
                    DEMO
                  </span>
                )}
              </td>
              <td className="px-3 py-2 text-gray-600">{r.company || "—"}</td>
              <td className="px-3 py-2 text-gray-600">{r.job_title || "—"}</td>
              <td className="px-3 py-2 text-gray-500">{r.keyword || "—"}</td>
              <td className="px-3 py-2">
                {r.linkedin_url ? (
                  <a
                    href={r.linkedin_url}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-brand-600 hover:underline"
                  >
                    View
                  </a>
                ) : (
                  <span className="text-gray-300">—</span>
                )}
              </td>
              <td className="px-3 py-2">
                {r.social_profiles.length > 0 ? (
                  <a
                    href={r.social_profiles[0].url}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-brand-600 hover:underline"
                  >
                    View
                  </a>
                ) : (
                  <span className="text-gray-300">—</span>
                )}
              </td>
              <td className="px-3 py-2 text-gray-600">{r.email || <span className="text-gray-300">—</span>}</td>
              <td className="px-3 py-2 text-gray-600">{r.phone || <span className="text-gray-300">—</span>}</td>
              <td className="px-3 py-2 text-gray-600">{r.location || "—"}</td>
              <td className="px-3 py-2">
                <ScoreBadge value={r.relevance_score} kind="relevance" />
              </td>
              <td className="px-3 py-2">
                <ScoreBadge value={r.confidence_score} kind="confidence" />
              </td>
            </tr>
          ))}
          {results.length === 0 && (
            <tr>
              <td colSpan={12} className="px-3 py-8 text-center text-gray-400">
                No results yet.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
