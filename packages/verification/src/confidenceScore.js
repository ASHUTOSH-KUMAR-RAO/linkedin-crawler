"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.computeConfidenceScore = computeConfidenceScore;
/**
 * Confidence scoring (spec section 12).
 * This is deliberately SEPARATE from relevance: relevance measures "is this
 * the right person for the query", confidence measures "how sure are we the
 * data about this person is accurate and well-sourced".
 *
 * Weighting (out of 100):
 *   - Source agreement (multiple independent sources)  : up to 35 pts
 *   - LinkedIn URL present & well-formed                : 20 pts
 *   - Email verification status                         : 25 pts
 *   - No source errors encountered                      : 10 pts
 *   - Cross-source dedup agreement bonus                : 10 pts
 */
function computeConfidenceScore(input) {
    const reasons = [];
    let score = 0;
    const sourceScore = Math.min(35, input.independentSourceCount * 15);
    score += sourceScore;
    reasons.push(input.independentSourceCount > 1
        ? `Confirmed by ${input.independentSourceCount} independent sources (+${sourceScore})`
        : `Only 1 source reported this record (+${sourceScore})`);
    if (input.hasLinkedIn) {
        score += 20;
        reasons.push(`Public LinkedIn profile URL present (+20)`);
    }
    else {
        reasons.push(`No LinkedIn profile URL found (+0)`);
    }
    if (input.emailVerified) {
        score += 25;
        reasons.push(`Email verified by enrichment provider (+25)`);
    }
    else if (input.hasEmail) {
        score += 12;
        reasons.push(`Email found but not independently verified (+12)`);
    }
    else {
        reasons.push(`No email found (+0)`);
    }
    if (!input.hadSourceErrors) {
        score += 10;
        reasons.push(`No source errors during discovery/enrichment (+10)`);
    }
    else {
        reasons.push(`One or more sources errored or were blocked while researching this person (+0)`);
    }
    if (input.wasDeduplicatedFromMultiple) {
        score += 10;
        reasons.push(`Multiple discovery records converged on the same person (+10)`);
    }
    else {
        reasons.push(`Seen in only one discovery record (+0)`);
    }
    score = Math.max(0, Math.min(100, score));
    return { score, reasons };
}
//# sourceMappingURL=confidenceScore.js.map