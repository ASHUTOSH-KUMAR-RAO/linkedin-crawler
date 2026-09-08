import * as dotenv from "dotenv";
import * as path from "path";
dotenv.config({ path: path.resolve(__dirname, "../../../.env") });
import { Worker } from "bullmq";
import { RESEARCH_QUEUE_NAME, createRedisConnection, type ResearchJobPayload } from "@lre/queue";
import { prisma } from "@lre/database";
import { runResearchJob } from "./pipeline/runResearchJob";
import { logger } from "./lib/logger";

const CONCURRENCY = parseInt(process.env.WORKER_CONCURRENCY ?? "2", 10);

async function main() {
  logger.info(`Starting Lead Research Engine worker (concurrency=${CONCURRENCY})`);

  const worker = new Worker<ResearchJobPayload>(
    RESEARCH_QUEUE_NAME,
    async (job) => {
      // Respect cancellation requested via POST /api/research/:jobId/cancel
      const dbJob = await prisma.researchJob.findUnique({ where: { id: job.data.jobId } });
      if (dbJob?.status === "CANCELLED") {
        logger.info({ jobId: job.data.jobId }, "job was cancelled before it started - skipping");
        return;
      }
      await runResearchJob(job.data);
    },
    { connection: createRedisConnection(true), concurrency: CONCURRENCY }
  );

  worker.on("completed", (job) => {
    logger.info({ jobId: job.data.jobId }, "queue job completed");
  });

  worker.on("failed", async (job, err) => {
    logger.error({ jobId: job?.data?.jobId, err: err.message }, "queue job failed");
    if (job?.data?.jobId) {
      await prisma.researchJob.update({
        where: { id: job.data.jobId },
        data: { status: "FAILED", errorMessage: err.message, completedAt: new Date() },
      }).catch(() => {});
    }
  });

  process.on("SIGTERM", async () => {
    logger.info("SIGTERM received, shutting down worker gracefully");
    await worker.close();
    process.exit(0);
  });
  process.on("SIGINT", async () => {
    logger.info("SIGINT received, shutting down worker gracefully");
    await worker.close();
    process.exit(0);
  });
}

main().catch((err) => {
  console.error("Fatal worker startup error:", err);
  process.exit(1);
});
