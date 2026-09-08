import pino from "pino";
import { env } from "./env";

/**
 * Structured logger. IMPORTANT: never pass raw env objects or API keys into
 * log calls. Redact any accidental secret-looking fields defensively.
 */
export const logger = pino({
  level: env.NODE_ENV === "production" ? "info" : "debug",
  transport:
    env.NODE_ENV !== "production"
      ? { target: "pino-pretty", options: { colorize: true, translateTime: "HH:MM:ss" } }
      : undefined,
  redact: ["*.apiKey", "*.api_key", "*.token", "*.password", "*.SEARCH_API_KEY", "*.ENRICHMENT_API_KEY"],
});
