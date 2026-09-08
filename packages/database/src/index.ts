import { PrismaClient } from "../generated/client";

// Reuse a single PrismaClient instance across hot reloads / multiple imports
// to avoid exhausting the Postgres connection pool.
declare global {
  // eslint-disable-next-line no-var
  var __lrePrisma: PrismaClient | undefined;
}

export const prisma =
  global.__lrePrisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["warn", "error"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") {
  global.__lrePrisma = prisma;
}

export * from "../generated/client";
