"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import {
  createResearchJob,
  getJobStatus,
  getResults,
  progressStreamUrl,
  cancelJob,
  type JobStatusDto,
  type LeadResultDto,
  type ResultFilters,
} from "@/lib/api";
import { ProgressPanel } from "@/components/ProgressPanel";
import { ResultsTable } from "@/components/ResultsTable";
import { LeadDetailPanel } from "@/components/LeadDetailPanel";
import { FiltersBar } from "@/components/FiltersBar";
import { ExportButtons } from "@/components/ExportButtons";
import { Pagination } from "@/components/Pagination";

const PAGE_SIZE = 50;

export default function HomePage() {
  const [query, setQuery] = useState("");
  const [jobId, setJobId] = useState<string | null>(null);
  const [jobStatus, setJobStatus] = useState<JobStatusDto | null>(null);
  const [results, setResults] = useState<LeadResultDto[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState<ResultFilters>({});
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [detailLead, setDetailLead] = useState<LeadResultDto | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const eventSourceRef = useRef<EventSource | null>(null);

  const refreshResults = useCallback(async () => {
    if (!jobId) return;
    try {
      const data = await getResults(jobId, page, PAGE_SIZE, filters);
      setResults(data.results);
      setTotal(data.total);
    } catch (err: any) {
      setError(err.message);
    }
  }, [jobId, page, filters]);

  // Start a job
  async function startJob(mode: "quick" | "deep") {
    if (query.trim().length < 3) {
      setError("Please enter at least 3 characters describing who you're looking for.");
      return;
    }
    setError(null);
    setSubmitting(true);
    setResults([]);
    setSelected(new Set());
    setTotal(0);
    setPage(1);

    try {
      const { job_id } = await createResearchJob(mode, query.trim());
      setJobId(job_id);
      const status = await getJobStatus(job_id);
      setJobStatus(status);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  }

  // Subscribe to SSE progress once we have a jobId
  useEffect(() => {
    if (!jobId) return;

    eventSourceRef.current?.close();
    const es = new EventSource(progressStreamUrl(jobId));
    eventSourceRef.current = es;

    es.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data.type === "stage_update") {
          setJobStatus((prev) => (prev ? { ...prev, progress_stage: data.stage, progress_percent: data.percent, status: "RUNNING" } : prev));
        } else if (data.type === "candidate_found") {
          setJobStatus((prev) => (prev ? { ...prev, progress_percent: data.percent } : prev));
          refreshResults();
        } else if (data.type === "job_completed" || data.type === "job_partial") {
          setJobStatus((prev) =>
            prev ? { ...prev, status: data.type === "job_partial" ? "PARTIAL" : "COMPLETED", progress_percent: 100 } : prev
          );
          refreshResults();
          es.close();
        } else if (data.type === "job_failed") {
          setJobStatus((prev) => (prev ? { ...prev, status: "FAILED", error_message: data.message } : prev));
          setError(data.message);
          es.close();
        }
      } catch {
        /* ignore malformed event */
      }
    };

    es.onerror = () => {
      // EventSource auto-reconnects; if the job already finished server-side
      // this is harmless. We rely on polling fallback below as a safety net.
    };

    return () => es.close();
  }, [jobId, refreshResults]);

  // Fallback polling every 4s in case SSE is interrupted (e.g. proxy buffering)
  useEffect(() => {
    if (!jobId) return;
    const interval = setInterval(async () => {
      try {
        const status = await getJobStatus(jobId);
        setJobStatus(status);
        if (status.status !== "PENDING" && status.status !== "RUNNING") {
          refreshResults();
        }
      } catch {
        /* ignore transient errors */
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [jobId, refreshResults]);

  useEffect(() => {
    refreshResults();
  }, [refreshResults]);

  function toggleSelect(resultId: string) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(resultId)) next.delete(resultId);
      else next.add(resultId);
      return next;
    });
  }

  function toggleSelectAll() {
    setSelected((prev) => {
      const allSelected = results.length > 0 && results.every((r) => prev.has(r.result_id));
      if (allSelected) return new Set();
      return new Set(results.map((r) => r.result_id));
    });
  }

  const isRunning = jobStatus?.status === "PENDING" || jobStatus?.status === "RUNNING";

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <header className="mb-8 text-center">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">Lead Research Engine</h1>
        <p className="mt-1 text-gray-500">What are you looking for?</p>
      </header>

      <div className="mx-auto mb-6 flex max-w-2xl flex-col gap-3 sm:flex-row">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="FinTech founders in India"
          className="flex-1 rounded-xl border border-gray-200 bg-white px-4 py-2.5 shadow-sm outline-none focus:border-brand-500"
          onKeyDown={(e) => e.key === "Enter" && startJob("quick")}
        />
        <button
          disabled={submitting}
          onClick={() => startJob("quick")}
          className="rounded-xl bg-brand-500 px-5 py-2.5 font-medium text-white shadow-sm hover:bg-brand-600 disabled:opacity-50"
        >
          Quick 60
        </button>
        <button
          disabled={submitting}
          onClick={() => startJob("deep")}
          className="rounded-xl border border-brand-500 px-5 py-2.5 font-medium text-brand-600 hover:bg-brand-50 disabled:opacity-50"
        >
          Deep Research
        </button>
      </div>

      {error && (
        <div className="mx-auto mb-6 max-w-2xl rounded-lg bg-red-50 px-4 py-2 text-sm text-red-600">{error}</div>
      )}

      {jobId && jobStatus && (
        <div className="mb-6 grid gap-4">
          <div className="flex items-center justify-between">
            <ProgressPanel stage={jobStatus.progress_stage} percent={jobStatus.progress_percent} status={jobStatus.status} />
          </div>
          {isRunning && (
            <button
              onClick={() => jobId && cancelJob(jobId)}
              className="w-fit text-xs text-gray-400 underline hover:text-gray-600"
            >
              Cancel job
            </button>
          )}
        </div>
      )}

      {jobId && (
        <div className="grid gap-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <FiltersBar filters={filters} onChange={(f) => { setFilters(f); setPage(1); }} />
            <ExportButtons jobId={jobId} selectedIds={Array.from(selected)} />
          </div>

          <ResultsTable
            results={results}
            selected={selected}
            onToggleSelect={toggleSelect}
            onToggleSelectAll={toggleSelectAll}
            onRowClick={setDetailLead}
          />

          <Pagination page={page} pageSize={PAGE_SIZE} total={total} onPageChange={setPage} />
        </div>
      )}

      <LeadDetailPanel lead={detailLead} onClose={() => setDetailLead(null)} />
    </main>
  );
}
