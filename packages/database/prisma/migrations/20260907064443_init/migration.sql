-- CreateEnum
CREATE TYPE "JobMode" AS ENUM ('QUICK', 'DEEP');

-- CreateEnum
CREATE TYPE "JobStatus" AS ENUM ('PENDING', 'RUNNING', 'COMPLETED', 'PARTIAL', 'FAILED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "ContactStatus" AS ENUM ('UNKNOWN', 'FOUND', 'VERIFIED', 'UNAVAILABLE');

-- CreateEnum
CREATE TYPE "SourceType" AS ENUM ('SEARCH_ENGINE', 'PUBLIC_WEB', 'LINKEDIN_PUBLIC', 'COMPANY_WEBSITE', 'ENRICHMENT_API', 'DEMO', 'OTHER');

-- CreateTable
CREATE TABLE "research_jobs" (
    "id" TEXT NOT NULL,
    "query" TEXT NOT NULL,
    "mode" "JobMode" NOT NULL,
    "status" "JobStatus" NOT NULL DEFAULT 'PENDING',
    "requested_count" INTEGER NOT NULL DEFAULT 60,
    "found_count" INTEGER NOT NULL DEFAULT 0,
    "error_message" TEXT,
    "progress_stage" TEXT,
    "progress_percent" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "started_at" TIMESTAMP(3),
    "completed_at" TIMESTAMP(3),

    CONSTRAINT "research_jobs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "people" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "job_title" TEXT,
    "location" TEXT,
    "linkedin_url" TEXT,
    "is_demo" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "people_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "companies" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "website" TEXT,
    "industry" TEXT,
    "location" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "companies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "person_companies" (
    "person_id" TEXT NOT NULL,
    "company_id" TEXT NOT NULL,
    "relationship" TEXT,
    "current" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "person_companies_pkey" PRIMARY KEY ("person_id","company_id")
);

-- CreateTable
CREATE TABLE "contact_data" (
    "id" TEXT NOT NULL,
    "person_id" TEXT NOT NULL,
    "email" TEXT,
    "phone" TEXT,
    "email_status" "ContactStatus" NOT NULL DEFAULT 'UNKNOWN',
    "phone_status" "ContactStatus" NOT NULL DEFAULT 'UNKNOWN',
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "contact_data_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "social_profiles" (
    "id" TEXT NOT NULL,
    "person_id" TEXT NOT NULL,
    "platform" TEXT NOT NULL,
    "profile_url" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "social_profiles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "research_results" (
    "id" TEXT NOT NULL,
    "job_id" TEXT NOT NULL,
    "person_id" TEXT NOT NULL,
    "keyword" TEXT,
    "relevance_score" INTEGER NOT NULL,
    "confidence_score" INTEGER NOT NULL,
    "relevance_reasons" TEXT,
    "confidence_reasons" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "research_results_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sources" (
    "id" TEXT NOT NULL,
    "person_id" TEXT NOT NULL,
    "source_type" "SourceType" NOT NULL,
    "source_url" TEXT,
    "source_status" TEXT NOT NULL DEFAULT 'ok',
    "discovered_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "sources_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "people_linkedin_url_key" ON "people"("linkedin_url");

-- CreateIndex
CREATE INDEX "people_name_idx" ON "people"("name");

-- CreateIndex
CREATE INDEX "companies_name_idx" ON "companies"("name");

-- CreateIndex
CREATE UNIQUE INDEX "companies_name_website_key" ON "companies"("name", "website");

-- CreateIndex
CREATE UNIQUE INDEX "contact_data_person_id_key" ON "contact_data"("person_id");

-- CreateIndex
CREATE UNIQUE INDEX "social_profiles_person_id_platform_key" ON "social_profiles"("person_id", "platform");

-- CreateIndex
CREATE INDEX "research_results_job_id_idx" ON "research_results"("job_id");

-- CreateIndex
CREATE UNIQUE INDEX "research_results_job_id_person_id_key" ON "research_results"("job_id", "person_id");

-- CreateIndex
CREATE INDEX "sources_person_id_idx" ON "sources"("person_id");

-- AddForeignKey
ALTER TABLE "person_companies" ADD CONSTRAINT "person_companies_person_id_fkey" FOREIGN KEY ("person_id") REFERENCES "people"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "person_companies" ADD CONSTRAINT "person_companies_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "companies"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contact_data" ADD CONSTRAINT "contact_data_person_id_fkey" FOREIGN KEY ("person_id") REFERENCES "people"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "social_profiles" ADD CONSTRAINT "social_profiles_person_id_fkey" FOREIGN KEY ("person_id") REFERENCES "people"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "research_results" ADD CONSTRAINT "research_results_job_id_fkey" FOREIGN KEY ("job_id") REFERENCES "research_jobs"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "research_results" ADD CONSTRAINT "research_results_person_id_fkey" FOREIGN KEY ("person_id") REFERENCES "people"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sources" ADD CONSTRAINT "sources_person_id_fkey" FOREIGN KEY ("person_id") REFERENCES "people"("id") ON DELETE CASCADE ON UPDATE CASCADE;
