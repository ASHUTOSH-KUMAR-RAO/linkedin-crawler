const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

export interface SocialProfileDto {
  platform: string;
  url: string;
}

export interface SourceDto {
  type: string;
  url?: string | null;
  status: string;
  discovered_at: string;
}

export interface LeadResultDto {
  result_id: string;
  person_id: string;
  name: string;
  is_demo: boolean;
  company: string;
  company_website: string;
  industry: string;
  job_title: string;
  keyword: string;
  location: string;
  linkedin_url: string;
  social_profiles: SocialProfileDto[];
  email: string;
  email_status: string;
  phone: string;
  phone_status: string;
  relevance_score: number;
  confidence_score: number;
  relevance_reasons: string[];
  confidence_reasons: string[];
  sources: SourceDto[];
}

export interface JobStatusDto {
  job_id: string;
  query: string;
  mode: "QUICK" | "DEEP";
  status: "PENDING" | "RUNNING" | "COMPLETED" | "PARTIAL" | "FAILED" | "CANCELLED";
  requested_count: number;
  found_count: number;
  progress_stage: string | null;
  progress_percent: number;
  error_message: string | null;
  created_at: string;
  started_at: string | null;
  completed_at: string | null;
}

export interface ResultsPageDto {
  job_id: string;
  page: number;
  page_size: number;
  total: number;
  results: LeadResultDto[];
}

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    ...init,
    headers: { "Content-Type": "application/json", ...(init?.headers ?? {}) },
  });
  if (!res.ok) {
    let message = `Request failed (${res.status})`;
    try {
      const body = await res.json();
      message = body.error || message;
    } catch {
      /* ignore */
    }
    throw new Error(message);
  }
  return res.json() as Promise<T>;
}

export async function createResearchJob(mode: "quick" | "deep", query: string): Promise<{ job_id: string }> {
  return request(`/api/research/${mode}`, { method: "POST", body: JSON.stringify({ query }) });
}

export async function getJobStatus(jobId: string): Promise<JobStatusDto> {
  return request(`/api/research/${jobId}`);
}

export interface ResultFilters {
  company?: string;
  jobTitle?: string;
  location?: string;
  hasEmail?: boolean;
  hasPhone?: boolean;
  hasLinkedin?: boolean;
  minRelevance?: number;
  minConfidence?: number;
  search?: string;
}

export async function getResults(
  jobId: string,
  page: number,
  pageSize: number,
  filters: ResultFilters = {}
): Promise<ResultsPageDto> {
  const params = new URLSearchParams();
  params.set("page", String(page));
  params.set("pageSize", String(pageSize));
  if (filters.company) params.set("company", filters.company);
  if (filters.jobTitle) params.set("jobTitle", filters.jobTitle);
  if (filters.location) params.set("location", filters.location);
  if (filters.hasEmail) params.set("hasEmail", "true");
  if (filters.hasPhone) params.set("hasPhone", "true");
  if (filters.hasLinkedin) params.set("hasLinkedin", "true");
  if (filters.minRelevance) params.set("minRelevance", String(filters.minRelevance));
  if (filters.minConfidence) params.set("minConfidence", String(filters.minConfidence));
  if (filters.search) params.set("search", filters.search);
  return request(`/api/research/${jobId}/results?${params.toString()}`);
}

export function progressStreamUrl(jobId: string): string {
  return `${API_BASE}/api/research/${jobId}/progress`;
}

export function exportJobUrl(jobId: string, type: "csv" | "excel"): string {
  return `${API_BASE}/api/research/${jobId}/export/${type}`;
}

export async function exportSelected(type: "csv" | "excel", resultIds: string[]): Promise<Blob> {
  const res = await fetch(`${API_BASE}/api/export/${type}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ result_ids: resultIds }),
  });
  if (!res.ok) throw new Error(`Export failed (${res.status})`);
  return res.blob();
}

export async function cancelJob(jobId: string): Promise<void> {
  await request(`/api/research/${jobId}/cancel`, { method: "POST" });
}
