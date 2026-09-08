"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RESEARCH_QUEUE_NAME = void 0;
exports.createRedisConnection = createRedisConnection;
exports.getResearchQueue = getResearchQueue;
exports.progressChannel = progressChannel;
const bullmq_1 = require("bullmq");
const ioredis_1 = __importDefault(require("ioredis"));
exports.RESEARCH_QUEUE_NAME = "research-jobs";
/**
 * Single Redis connection factory. BullMQ requires maxRetriesPerRequest: null
 * on connections used for blocking operations (workers), so we expose two
 * variants but both point at the same REDIS_URL.
 */
function createRedisConnection(forWorker = false) {
    const url = process.env.REDIS_URL || "redis://localhost:6379";
    return new ioredis_1.default(url, {
        maxRetriesPerRequest: forWorker ? null : 20,
        enableReadyCheck: true,
    });
}
let _queue = null;
/** Lazily-created singleton BullMQ Queue used by the API to enqueue jobs. */
function getResearchQueue() {
    if (!_queue) {
        _queue = new bullmq_1.Queue(exports.RESEARCH_QUEUE_NAME, {
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
function progressChannel(jobId) {
    return `research-progress:${jobId}`;
}
//# sourceMappingURL=index.js.map