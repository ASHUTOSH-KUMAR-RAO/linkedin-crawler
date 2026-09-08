import Fastify from "fastify";
import cors from "@fastify/cors";
import rateLimit from "@fastify/rate-limit";
import sensible from "@fastify/sensible";
import { env } from "./lib/env";
import { logger } from "./lib/logger";
import { researchRoutes } from "./routes/research";
import { leadsRoutes } from "./routes/leads";
import { exportRoutes } from "./routes/export";

async function main() {
  const app = Fastify({ logger, bodyLimit: 2 * 1024 * 1024 });

  await app.register(sensible);
  await app.register(cors, { origin: env.CORS_ORIGIN, credentials: true });
  await app.register(rateLimit, {
    max: 100,
    timeWindow: "1 minute",
    errorResponseBuilder: () => ({ error: "Too many requests, please slow down." }),
  });

  app.get("/health", async () => ({
    status: "ok",
    demo_mode: env.DEMO_MODE,
    time: new Date().toISOString(),
  }));

  await app.register(researchRoutes);
  await app.register(leadsRoutes);
  await app.register(exportRoutes);

  app.setErrorHandler((err, req, reply) => {
    logger.error({ err, url: req.url }, "unhandled error");
    reply.code(err.statusCode ?? 500).send({
      error: env.NODE_ENV === "production" ? "Internal server error" : err.message,
    });
  });

  await app.listen({ port: env.PORT, host: "0.0.0.0" });
  logger.info(`Lead Research Engine API listening on http://localhost:${env.PORT} (DEMO_MODE=${env.DEMO_MODE})`);
}

main().catch((err) => {
  console.error("Fatal startup error:", err);
  process.exit(1);
});
