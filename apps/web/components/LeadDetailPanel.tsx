"use client";

import type { LeadResultDto } from "@/lib/api";

function Field({ label, value, link }: { label: string; value: React.ReactNode; link?: string }) {
  return (
    <div className="mb-3">
      <div className="text-xs uppercase tracking-wide text-gray-400">{label}</div>
      {link ? (
        <a href={link} target="_blank" rel="noreferrer" className="text-brand-600 hover:underline">
          {value}
        </a>
      ) : (
        <div className="text-gray-800">{value || <span className="text-gray-300">—</span>}</div>
      )}
    </div>
  );
}

export function LeadDetailPanel({ lead, onClose }: { lead: LeadResultDto | null; onClose: () => void }) {
  if (!lead) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/30" onClick={onClose}>
      <div
        className="h-full w-full max-w-md overflow-y-auto bg-white p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex items-start justify-between">
          <h2 className="text-lg font-semibold text-gray-900">
            {lead.name}
            {lead.is_demo && (
              <span className="ml-2 rounded bg-purple-100 px-1.5 py-0.5 text-[10px] font-semibold text-purple-700">
                DEMO
              </span>
            )}
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-700">
            ✕
          </button>
        </div>

        <Field label="Company" value={lead.company} />
        <Field label="Position" value={lead.job_title} />
        <Field label="Location" value={lead.location} />
        <Field label="Industry" value={lead.industry} />
        <Field label="LinkedIn" value={lead.linkedin_url ? "View Profile" : ""} link={lead.linkedin_url || undefined} />
        <Field
          label="Social"
          value={lead.social_profiles.length ? `View Profile (${lead.social_profiles[0].platform})` : ""}
          link={lead.social_profiles[0]?.url}
        />
        <Field label="Email" value={lead.email} link={lead.email ? `mailto:${lead.email}` : undefined} />
        <Field label="Phone" value={lead.phone} />
        <Field label="Website" value={lead.company_website} link={lead.company_website || undefined} />

        <div className="my-4 border-t border-gray-100" />

        <div className="mb-4">
          <div className="text-xs uppercase tracking-wide text-gray-400 mb-1">Relevance</div>
          <div className="text-2xl font-semibold text-gray-900">{lead.relevance_score}%</div>
          <ul className="mt-1 list-inside list-disc text-xs text-gray-500">
            {lead.relevance_reasons.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </div>

        <div className="mb-4">
          <div className="text-xs uppercase tracking-wide text-gray-400 mb-1">Confidence</div>
          <div className="text-2xl font-semibold text-gray-900">{lead.confidence_score}%</div>
          <ul className="mt-1 list-inside list-disc text-xs text-gray-500">
            {lead.confidence_reasons.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-wide text-gray-400 mb-1">Sources</div>
          <ul className="space-y-1 text-xs text-gray-500">
            {lead.sources.map((s, i) => (
              <li key={i} className="flex items-center justify-between">
                <span>{s.type}</span>
                <span
                  className={
                    s.status === "ok"
                      ? "text-green-600"
                      : s.status === "blocked"
                      ? "text-amber-600"
                      : "text-red-500"
                  }
                >
                  {s.status}
                </span>
              </li>
            ))}
            {lead.sources.length === 0 && <li className="text-gray-300">No source records</li>}
          </ul>
        </div>
      </div>
    </div>
  );
}
