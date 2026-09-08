"use client";

const STAGES = [
  "Query initialized",
  "Discovering candidates",
  "Verifying companies",
  "Enriching contacts",
  "Removing duplicates",
  "Finalizing results",
];

function stageIndex(stage: string | null): number {
  if (!stage) return -1;
  const idx = STAGES.findIndex((s) => s.toLowerCase() === stage.toLowerCase());
  return idx;
}

export function ProgressPanel({
  stage,
  percent,
  status,
}: {
  stage: string | null;
  percent: number;
  status: string;
}) {
  const currentIdx = stageIndex(stage);

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-gray-700">
          {status === "COMPLETED" || status === "PARTIAL" ? "Research complete" : "Researching..."}
        </h3>
        <span className="text-xs text-gray-400">{percent}%</span>
      </div>

      <div className="h-1.5 w-full rounded-full bg-gray-100 mb-4 overflow-hidden">
        <div
          className="h-full rounded-full bg-brand-500 transition-all duration-500"
          style={{ width: `${percent}%` }}
        />
      </div>

      <ul className="space-y-2">
        {STAGES.map((s, i) => {
          const done = currentIdx > i || status === "COMPLETED" || status === "PARTIAL";
          const active = currentIdx === i && status === "RUNNING";
          return (
            <li key={s} className="flex items-center gap-2 text-sm">
              <span
                className={
                  done
                    ? "text-green-600"
                    : active
                    ? "text-brand-600 animate-pulse"
                    : "text-gray-300"
                }
              >
                {done ? "✓" : active ? "⟳" : "○"}
              </span>
              <span className={done ? "text-gray-700" : active ? "text-gray-900 font-medium" : "text-gray-400"}>
                {s}
              </span>
            </li>
          );
        })}
      </ul>

      {status === "FAILED" && (
        <p className="mt-3 text-sm text-red-600">This job failed. See the error above the results area.</p>
      )}
      {status === "PARTIAL" && (
        <p className="mt-3 text-sm text-amber-600">
          Completed with some provider issues - results may be incomplete but nothing was fabricated.
        </p>
      )}
    </div>
  );
}
