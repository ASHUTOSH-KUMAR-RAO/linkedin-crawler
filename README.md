# Lead Research Engine

A local, fully working **Lead Discovery & Enrichment System**. Enter a query like
*"FinTech founders in India"* and the system discovers candidates, enriches them with
publicly-available contact/social data through legitimate providers, deduplicates,
scores relevance and confidence, stores everything in Postgres, streams progress live
to the browser, and lets you export the results to CSV or Excel.

**No data is ever fabricated.** If an email, phone number, or LinkedIn URL cannot be
found through a permitted source, the field is left blank — never guessed.

---

## 1. Architecture

```
                     ┌───────────────┐
   Browser  ───────▶ │   apps/web    │  Next.js + Tailwind (search, live progress, results table, export)
                     └───────┬───────┘
                             │ REST + Server-Sent Events
                     ┌───────▼───────┐
                     │   apps/api    │  Fastify: validates requests, enqueues jobs,
                     │               │  serves results/exports, streams SSE progress
                     └───────┬───────┘
                             │ BullMQ (Redis)
                     ┌───────▼───────┐
                     │  apps/worker  │  Runs the actual research pipeline:
                     │               │  Discovery → Relevance Ranking → Dedup →
                     │               │  Enrichment → Confidence Scoring → Persist
                     └───────┬───────┘
                             │
        ┌────────────────────┼─────────────────────────┐
        ▼                    ▼                          ▼
 packages/discovery   packages/enrichment      packages/verification
 (DiscoveryProvider    (EnrichmentProvider       (dedupe, relevance score,
  interface + Demo /    interface + Demo /         confidence score)
  SerpApi providers)    Demo / Hunter.io)
        │                    │
        └──────────┬─────────┘
                    ▼
           packages/database (Prisma + Postgres)
                    │
           packages/export (CSV / genuine XLSX via ExcelJS)
```

**Why these choices:**
- **Fastify** over Express: lower overhead, built-in schema validation hooks, better TS ergonomics.
- **BullMQ + Redis**: mature, battle-tested job queue with retries/backoff built in, decoupling the API (must respond instantly) from the worker (does the slow research).
- **Prisma**: type-safe queries matched to a hand-normalized schema, easy migrations.
- **Server-Sent Events** over WebSockets: one-directional progress stream is all we need; SSE is simpler to implement/debug and works over plain HTTP.
- **Next.js + Tailwind**: fast to build a clean, responsive frontend without extra tooling.
- **ExcelJS**: produces a *real* `.xlsx` workbook (with a formatted header row and autofilter), not a renamed CSV.

## 2. Project structure

```
lead-research-engine/
  apps/
    web/       Next.js frontend
    api/       Fastify API (job creation, results, SSE progress, export)
    worker/    BullMQ worker running the research pipeline
  packages/
    database/      Prisma schema + client
    discovery/      DiscoveryProvider interface + implementations
    enrichment/     EnrichmentProvider interface + implementations
    verification/   Dedup, relevance scoring, confidence scoring
    export/         CSV / XLSX generation
    queue/          Shared Redis/BullMQ config + progress event types
  tests/            Vitest tests for the core pipeline logic
  docker-compose.yml
  .env.example
```

## 3. Required external services (all optional except Postgres/Redis)

| Service | Required? | Used for | Env var | Where to get a key |
|---|---|---|---|---|
| PostgreSQL | **Yes** | primary datastore | `DATABASE_URL` | via Docker Compose (included) |
| Redis | **Yes** | job queue + live progress pub/sub | `REDIS_URL` | via Docker Compose (included) |
| SerpApi | No (optional) | discovers publicly-indexed profile/company pages via search — does **not** log into or scrape LinkedIn directly | `SEARCH_API_KEY` | https://serpapi.com/manage-api-key |
| Hunter.io | No (optional) | legitimate work-email finder API | `ENRICHMENT_API_KEY` | https://hunter.io/api-keys |

**With DEMO_MODE=true (the default) you need neither SerpApi nor Hunter.io** — the whole
pipeline runs end-to-end on clearly-labeled sample data so you can test everything first.

## 4. Local development requirements

- Windows 10/11
- [Node.js 20 LTS](https://nodejs.org/en) or newer
- [Git for Windows](https://git-scm.com/download/win)
- [Docker Desktop for Windows](https://www.docker.com/products/docker-desktop/)
- PowerShell (built into Windows)

---

# WINDOWS LOCAL SETUP — STEP BY STEP

Open **PowerShell** and run these in order.

### Step 1 — Install Node.js
Download and run the installer from https://nodejs.org/en (LTS version). Verify:
```powershell
node -v
npm -v
```

### Step 2 — Install Git
Download and run the installer from https://git-scm.com/download/win. Verify:
```powershell
git --version
```

### Step 3 — Install Docker Desktop
Download and install from https://www.docker.com/products/docker-desktop/, then **restart your computer** if prompted. Open Docker Desktop once and make sure it says "Docker Desktop is running". Verify in PowerShell:
```powershell
docker --version
docker compose version
```

### Step 4 — Get the project onto your machine
If you received this project as a folder/zip, extract it and `cd` into it:
```powershell
cd C:\Users\<you>\Downloads\lead-research-engine
```

### Step 5 — Install dependencies
From the project root:
```powershell
npm install
```
This installs dependencies for every app/package in the workspace (root, api, worker, web, and all `packages/*`).

### Step 6 — Create your .env file
```powershell
Copy-Item .env.example .env
```
Open `.env` in Notepad (`notepad .env`) and leave everything as-is for now — `DEMO_MODE=true` means you don't need any API keys yet.

### Step 7 — Start PostgreSQL and Redis with Docker
```powershell
docker compose up -d
```
Check both containers are healthy:
```powershell
docker compose ps
```
You should see `lre-postgres` and `lre-redis` both `Up`.

### Step 8 — Generate the Prisma client and run migrations
```powershell
npm run db:generate
npx prisma migrate dev --name init --schema packages/database/prisma/schema.prisma
```
This creates all tables (`research_jobs`, `people`, `companies`, `person_companies`, `contact_data`, `social_profiles`, `research_results`, `sources`) in Postgres.

### Step 9 — (Optional) Seed check
```powershell
npm run db:seed
```
This just verifies the database is reachable — no fake leads are ever seeded.

### Step 10 — Start the API (leave this PowerShell window open)
```powershell
npm run dev:api
```
You should see: `Lead Research Engine API listening on http://localhost:4000 (DEMO_MODE=true)`

### Step 11 — Start the worker (open a **new** PowerShell window)
```powershell
cd C:\Users\<you>\Downloads\lead-research-engine
npm run dev:worker
```
You should see: `Starting Lead Research Engine worker (concurrency=2)`

### Step 12 — Start the frontend (open a **third** PowerShell window)
```powershell
cd C:\Users\<you>\Downloads\lead-research-engine
npm run dev:web
```
You should see Next.js report it's ready on `http://localhost:3000`.

### Step 13 — Open the app
Open your browser to **http://localhost:3000**

### Step 14 — Run your first test search
See the **FIRST TEST** section below.

---

# FIRST TEST

1. In the search box, type: **`FinTech founders in India`**
2. Click **Quick 60**.
3. You'll immediately see the progress checklist start filling in (Query initialized →
   Discovering candidates → Verifying companies → Enriching contacts → Removing
   duplicates → Finalizing results).
4. Within a few seconds (DEMO_MODE runs fast, with no real network calls), a results
   table will populate progressively with up to 60 rows. Every name is suffixed with
   **(DEMO)** and each row has a purple **DEMO** tag — this confirms you're looking at
   clearly-labeled sample data, not real people.
5. Click any row to open the detail panel — you'll see Relevance % and Confidence %
   each with a bullet list explaining exactly why they got that score.
6. Try the filters bar (e.g. check "Has email").
7. Select a few rows via checkbox, then click **Export CSV (Selected)** — a real CSV
   downloads. Click **Export Excel (All)** — a genuine `.xlsx` downloads (open it in
   Excel to confirm it's a real workbook, not a renamed CSV).

Expected result: a fully working end-to-end pipeline, using **zero external API keys**,
that never fabricates data — any field a demo record doesn't have (e.g. ~35% of demo
leads intentionally have no email, matching realistic enrichment coverage) shows as
blank in both the UI and the exports.

---

## 5. Enabling real (non-demo) discovery/enrichment

1. Get a SerpApi key: https://serpapi.com/manage-api-key → put it in `.env` as `SEARCH_API_KEY=...`
2. Get a Hunter.io key: https://hunter.io/api-keys → put it in `.env` as `ENRICHMENT_API_KEY=...`
3. Set `DEMO_MODE=false` in `.env`
4. Restart the API and worker (`Ctrl+C` then re-run `npm run dev:api` / `npm run dev:worker`)

With `DEMO_MODE=false` and no keys set, the app will report the job as **FAILED** with
the message *"No discovery providers are enabled..."* rather than fabricating results —
this is intentional per the "never guess" requirement.

## 6. Running tests
```powershell
npm test
```
This runs Vitest against the deduplication logic, relevance scoring, confidence
scoring, CSV/XLSX export (including that missing fields stay blank), provider-failure
resilience (one provider throwing must not crash discovery), and API query validation.

## 7. Database inspection
```powershell
npx prisma studio --schema packages/database/prisma/schema.prisma
```
Opens a browser GUI at http://localhost:5555 to browse every table.

## 8. Relevance scoring explained
Out of 100 points: keyword/industry match in the query (30), job title seniority (30),
location match (20), company/industry context present (20). See
`packages/verification/src/relevanceScore.ts` — every score returns a `reasons[]` array
shown in the lead detail panel so nothing is a black box.

## 9. Confidence scoring explained
Separate from relevance. Out of 100 points: agreement across independent sources (up
to 35), a valid public LinkedIn URL present (20), email verification status (25), no
source errors encountered (10), cross-source dedup convergence (10). See
`packages/verification/src/confidenceScore.ts`.

## 10. Deduplication logic
Priority order (`packages/verification/src/dedupe.ts`):
1. Exact LinkedIn URL match → always merge.
2. Exact email match → always merge.
3. Name + company similarity ≥ 0.92 (Levenshtein-based) → merge; below that threshold,
   records are kept separate to avoid false-positive merges.

## 11. Troubleshooting

| Problem | Fix |
|---|---|
| `docker compose up -d` fails / hangs | Make sure Docker Desktop is actually running (check the whale icon in the system tray). Restart Docker Desktop. |
| API errors with `ECONNREFUSED` to Postgres | Run `docker compose ps` — if `lre-postgres` isn't `Up`, run `docker compose up -d` again and wait ~10s. |
| `prisma migrate dev` fails to reach Postgres | Confirm `DATABASE_URL` in `.env` matches `docker-compose.yml` (`lre` / `lre_local_password` / port `5432`). |
| Worker logs "No discovery providers are enabled" | Set `DEMO_MODE=true` in `.env`, or configure `SEARCH_API_KEY`. Restart worker. |
| Frontend shows a network error | Confirm the API is running on port 4000 and `NEXT_PUBLIC_API_URL` in `.env` matches. Restart the web app after editing `.env` (Next.js only reads env vars at startup). |
| Progress bar stuck at 0% | Confirm the worker process (Step 11) is actually running — the API only enqueues jobs, it doesn't process them. |
| Port already in use (3000/4000/5432/6379) | Stop whatever else is using that port, or change `PORT` / the Docker Compose port mapping. |
| `npm install` fails partway | Delete `node_modules` and `package-lock.json` at the root, then re-run `npm install`. |
| Excel file won't open / looks corrupted | Make sure you downloaded via the **Export Excel** button (not Export CSV renamed) — the XLSX is built with ExcelJS as a real workbook. |

## 12. Production considerations (not implemented here, but noted)
- Add authentication/authorization beyond the simple bearer-token gate (`API_AUTH_TOKEN`).
- Put the API behind HTTPS/a reverse proxy; SSE works through most proxies but disable buffering (`X-Accel-Buffering: no` on Nginx).
- Add per-provider circuit breakers and provider-level rate limiting/backoff tuning for production discovery/enrichment volumes.
- Move `WORKER_CONCURRENCY` and provider timeouts into per-environment config.
- Add a real migrations CI step (`prisma migrate deploy`) instead of `migrate dev` in production.
- Consider a durable object store for exported files if volume grows beyond in-memory streaming.
