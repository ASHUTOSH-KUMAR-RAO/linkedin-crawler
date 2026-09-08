"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HunterEmailProvider = exports.CompanyWebsiteProvider = exports.DemoEnrichmentProvider = void 0;
exports.getEnabledEnrichmentProviders = getEnabledEnrichmentProviders;
const demoEnrichmentProvider_1 = require("./providers/demoEnrichmentProvider");
const companyWebsiteProvider_1 = require("./providers/companyWebsiteProvider");
const hunterEmailProvider_1 = require("./providers/hunterEmailProvider");
__exportStar(require("./types"), exports);
var demoEnrichmentProvider_2 = require("./providers/demoEnrichmentProvider");
Object.defineProperty(exports, "DemoEnrichmentProvider", { enumerable: true, get: function () { return demoEnrichmentProvider_2.DemoEnrichmentProvider; } });
var companyWebsiteProvider_2 = require("./providers/companyWebsiteProvider");
Object.defineProperty(exports, "CompanyWebsiteProvider", { enumerable: true, get: function () { return companyWebsiteProvider_2.CompanyWebsiteProvider; } });
var hunterEmailProvider_2 = require("./providers/hunterEmailProvider");
Object.defineProperty(exports, "HunterEmailProvider", { enumerable: true, get: function () { return hunterEmailProvider_2.HunterEmailProvider; } });
/**
 * Returns every EnrichmentProvider currently enabled via env configuration,
 * in the order they should run. CompanyWebsiteProvider MUST run before
 * HunterEmailProvider - it resolves a real company domain (when missing)
 * that HunterEmailProvider then needs to look up an email.
 */
function getEnabledEnrichmentProviders() {
    const all = [
        new demoEnrichmentProvider_1.DemoEnrichmentProvider(),
        new companyWebsiteProvider_1.CompanyWebsiteProvider(),
        new hunterEmailProvider_1.HunterEmailProvider(),
    ];
    return all.filter((p) => p.isEnabled());
}
//# sourceMappingURL=index.js.map