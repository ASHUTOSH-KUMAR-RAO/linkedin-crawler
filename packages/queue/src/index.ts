import { Queue } from "bullmq";
import IORedis from "ioredis";

export const RESEARCH_QUEUE_NAME = "research-jobs";

/**
 * Single Redis connection factory. BullMQ requires maxRetriesPerRequest: null
 * on connections used for blocking operations (workers), so we expose two
 * variants but both point at the same REDIS_URL.
 */
export function createRedisConnection(forWorker = false): IORedis {
  const url = process.env.REDIS_URL || "redis://localhost:6379";
  return new IORedis(url, {
    maxRetriesPerRequest: forWorker ? null : 20,
    enableReadyCheck: true,
  });
}

export interface ResearchJobPayload {
  jobId: string; // matches ResearchJob.id in the database
  query: string;
  mode: "QUICK" | "DEEP";
  requestedCount: number;
}

let _queue: Queue<ResearchJobPayload> | null = null;

/** Lazily-created singleton BullMQ Queue used by the API to enqueue jobs. */
export function getResearchQueue(): Queue<ResearchJobPayload> {
  if (!_queue) {
    _queue = new Queue<ResearchJobPayload>(RESEARCH_QUEUE_NAME, {
      connection: createRedisConnection(false),
      defaultJobOptions: {
        attempts: 1, // the pipeline itself handles per-provider retries; a whole-job
        // retry would re-run discovery from scratch, which we don't want silently.
        removeOnComplete: 100,
        removeOnFail: 100,
      },
    });
  }
  return _queue;
}

/** Redis pub/sub channel used to stream live progress events for a given job. */
export function progressChannel(jobId: string): string {
  return `research-progress:${jobId}`;
}

export type ProgressEventType =
  | "stage_update"
  | "candidate_found"
  | "job_completed"
  | "job_failed"
  | "job_partial";

export interface ProgressEvent {
  type: ProgressEventType;
  jobId: string;
  stage?: string;
  percent?: number;
  message?: string;
  person?: {
    id: string;
    name: string;
    company: string;
    jobTitle: string;
    relevanceScore: number;
    confidenceScore: number;
  };
  timestamp: string;
}
