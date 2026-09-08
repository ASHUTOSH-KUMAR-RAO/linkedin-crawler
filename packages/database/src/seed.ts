/**
 * This project does NOT seed fabricated leads into the database.
 * Demo data (used when DEMO_MODE=true) is generated at job-run time by the
 * DemoDiscoveryProvider and is clearly flagged with isDemo=true on the
 * Person record. This script only verifies the DB connection and that
 * migrations have been applied.
 */
import { prisma } from "./index";

async function main() {
  const count = await prisma.researchJob.count();
  console.log(`[seed] Database reachable. Existing research_jobs: ${count}`);
  console.log("[seed] Nothing to seed. Run a research job from the UI to populate data.");
}

main()
  .catch((err) => {
    console.error("[seed] Failed:", err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
