import type { FastifyRequest, FastifyReply } from "fastify";
import { env } from "./env";

/**
 * Lightweight bearer-token auth. If API_AUTH_TOKEN is not set (default for
 * local/demo use), auth is skipped entirely so the app "just works" out of
 * the box. Setting API_AUTH_TOKEN in .env enables enforcement - useful once
 * this is exposed beyond localhost.
 */
export async function requireAuth(req: FastifyRequest, reply: FastifyReply) {
  if (!env.API_AUTH_TOKEN) return; // auth disabled locally

  const header = req.headers.authorization;
  if (!header || !header.startsWith("Bearer ")) {
    return reply.code(401).send({ error: "Missing bearer token" });
  }
  const token = header.slice("Bearer ".length);
  if (token !== env.API_AUTH_TOKEN) {
    return reply.code(401).send({ error: "Invalid bearer token" });
  }
}
