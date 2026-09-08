import * as dotenv from "dotenv";
import * as path from "path";
dotenv.config({ path: path.resolve(__dirname, "../../../../.env") });
import { z } from "zod";

const EnvSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
  PORT: z.coerce.number().default(4000),
  DATABASE_URL: z.string().min(1, "DATABASE_URL is required"),
  REDIS_URL: z.string().min(1, "REDIS_URL is required"),
  DEMO_MODE: z
    .string()
    .default("true")
    .transform((v) => v === "true"),
  SEARCH_API_KEY: z.string().optional().default(""),
  ENRICHMENT_API_KEY: z.string().optional().default(""),
  API_AUTH_TOKEN: z.string().optional().default(""), // if set, required as Bearer token on all routes
  CORS_ORIGIN: z.string().default("http://localhost:3000"),
});

function loadEnv() {
  const parsed = EnvSchema.safeParse(process.env);
  if (!parsed.success) {
    console.error("[env] Invalid environment configuration:");
    console.error(parsed.error.flatten().fieldErrors);
    process.exit(1);
  }
  return parsed.data;
}

export const env = loadEnv();
