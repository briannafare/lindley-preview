#!/usr/bin/env node
// GHL one-shot setup. Idempotent: safe to re-run.
// Reads PIT token from .mcp.json (gitignored). Prints env-var block on success.
//
// Usage: node scripts/ghl-setup.mjs [phase]
//   phase: health | tags | customfields | pipeline | calendar | all (default)

import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const mcpPath = path.join(ROOT, ".mcp.json");
if (!fs.existsSync(mcpPath)) {
  console.error(`Missing ${mcpPath}. Cannot proceed without PIT token.`);
  process.exit(1);
}
const mcp = JSON.parse(fs.readFileSync(mcpPath, "utf8"));
const ghl = mcp?.mcpServers?.ghl?.headers;
if (!ghl?.Authorization || !ghl?.Version || !ghl?.locationId) {
  console.error(
    "Malformed .mcp.json — need mcpServers.ghl.headers.{Authorization,Version,locationId}",
  );
  process.exit(1);
}

const TOKEN = ghl.Authorization.replace(/^Bearer\s+/i, "");
const VERSION = ghl.Version;
const LOCATION_ID = ghl.locationId;
const BASE = "https://services.leadconnectorhq.com";

const headers = {
  Authorization: `Bearer ${TOKEN}`,
  Version: VERSION,
  "Content-Type": "application/json",
  Accept: "application/json",
};

async function api(method, endpoint, body, { retries = 2 } = {}) {
  for (let attempt = 0; attempt <= retries; attempt++) {
    const res = await fetch(`${BASE}${endpoint}`, {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined,
    });
    const text = await res.text();
    let json = null;
    try {
      json = text ? JSON.parse(text) : null;
    } catch {
      /* non-JSON */
    }
    // Retry on 5xx (seen transient 503s from the edge)
    if (!res.ok && res.status >= 500 && attempt < retries) {
      await new Promise((r) => setTimeout(r, 500 * (attempt + 1)));
      continue;
    }
    return { ok: res.ok, status: res.status, json, text };
  }
  throw new Error("Unreachable");
}

function die(msg, extra) {
  console.error(`\nFAIL: ${msg}`);
  if (extra) console.error(extra);
  process.exit(1);
}

// ---------------------------------------------------------------- HEALTH ----

async function healthCheck() {
  console.log(`Location: ${LOCATION_ID}`);
  console.log(`Version:  ${VERSION}`);
  console.log(`Token:    ${TOKEN.slice(0, 10)}...${TOKEN.slice(-4)}`);

  const r = await api(
    "GET",
    `/opportunities/pipelines?locationId=${LOCATION_ID}`,
  );
  if (!r.ok) die(`health check failed ${r.status}`, r.text.slice(0, 300));
  const pipelines = r.json?.pipelines ?? [];
  console.log(`\nHealth OK — ${pipelines.length} existing pipeline(s):`);
  for (const p of pipelines) console.log(`  - ${p.name} (${p.id})`);
  return { pipelines };
}

// ------------------------------------------------------------------ TAGS ----

const TAGS = [
  "source:website",
  "source:ai-chat",
  "source:voice-ai",
  "source:referral",
  "source:past-client",
  "source:google",
  "form:schedule-call",
  "form:rate-quote",
  "form:calculator",
  "form:neighborhood",
  "form:guide-download",
  "form:divorce-consult",
  "clicked-apply",
  "interest:purchase",
  "interest:refinance",
  "interest:divorce",
  "interest:fha",
  "interest:va",
  "interest:jumbo",
  "interest:cash-out",
  "interest:heloc",
  "interest:investment",
  "interest:reverse",
  "timeline:asap",
  "timeline:1-3mo",
  "timeline:3-6mo",
  "timeline:exploring",
  "nurture:long-term",
  "closed-won",
  "closed-lost",
  "divorce:going-through",
  "divorce:considering",
  "divorce:recently-divorced",
  "divorce:attorney-referral",
];

async function listTags() {
  const r = await api("GET", `/locations/${LOCATION_ID}/tags`);
  if (!r.ok) die(`list tags failed ${r.status}`, r.text.slice(0, 300));
  return r.json?.tags ?? [];
}

async function createTag(name) {
  return api("POST", `/locations/${LOCATION_ID}/tags`, { name });
}

async function ensureTags() {
  console.log(`\nTags: ensuring ${TAGS.length} tags`);
  const existing = await listTags();
  const byName = new Map(existing.map((t) => [t.name.toLowerCase(), t]));
  let created = 0;
  let skipped = 0;
  const failed = [];
  for (const name of TAGS) {
    if (byName.has(name.toLowerCase())) {
      skipped++;
      continue;
    }
    const r = await createTag(name);
    if (r.ok) {
      created++;
      console.log(`  [new]  ${name}`);
    } else {
      failed.push({ name, status: r.status, text: r.text.slice(0, 200) });
      console.log(`  [FAIL ${r.status}] ${name} — ${r.text.slice(0, 120)}`);
    }
  }
  console.log(`Tags done: ${created} created, ${skipped} already existed, ${failed.length} failed`);
  return { created, skipped, failed };
}

// ---------------------------------------------------------- CUSTOM FIELDS ----

const CUSTOM_FIELDS = [
  {
    name: "Loan Type",
    dataType: "SINGLE_OPTIONS",
    options: [
      "Purchase",
      "Refinance",
      "FHA",
      "VA",
      "Jumbo",
      "Cash-Out",
      "HELOC",
      "Investment",
      "Reverse",
      "Divorce",
    ],
    envVar: "GHL_CF_LOAN_TYPE",
  },
  {
    name: "Loan Amount Range",
    dataType: "SINGLE_OPTIONS",
    options: ["Under $200k", "$200-400k", "$400-600k", "$600k-1M", "$1M+"],
    envVar: "GHL_CF_LOAN_AMOUNT_RANGE",
  },
  {
    name: "Credit Score Range",
    dataType: "SINGLE_OPTIONS",
    options: [
      "Below 580",
      "580-619",
      "620-679",
      "680-719",
      "720-759",
      "760+",
      "Not Sure",
    ],
    envVar: "GHL_CF_CREDIT_SCORE_RANGE",
  },
  {
    name: "Timeline",
    dataType: "SINGLE_OPTIONS",
    options: ["ASAP", "1-3 months", "3-6 months", "Just exploring"],
    envVar: "GHL_CF_TIMELINE",
  },
  {
    name: "Neighborhood Interest",
    dataType: "TEXT",
    envVar: "GHL_CF_NEIGHBORHOOD_INTEREST",
  },
  {
    name: "Lead Source Page",
    dataType: "TEXT",
    envVar: "GHL_CF_LEAD_SOURCE_PAGE",
  },
  {
    name: "Calculator Home Price",
    dataType: "NUMERICAL",
    envVar: "GHL_CF_CALCULATOR_HOME_PRICE",
  },
  {
    name: "Calculator Payment",
    dataType: "NUMERICAL",
    envVar: "GHL_CF_CALCULATOR_PAYMENT",
  },
];

async function listCustomFields() {
  const r = await api(
    "GET",
    `/locations/${LOCATION_ID}/customFields?model=contact`,
  );
  if (!r.ok)
    die(`list custom fields failed ${r.status}`, r.text.slice(0, 300));
  return r.json?.customFields ?? [];
}

async function createCustomField(spec) {
  const body = {
    name: spec.name,
    dataType: spec.dataType,
    model: "contact",
  };
  if (spec.options) {
    // GHL v2 expects plain string array for SINGLE_OPTIONS options.
    body.options = spec.options;
  }
  return api("POST", `/locations/${LOCATION_ID}/customFields`, body);
}

async function ensureCustomFields() {
  console.log(`\nCustom fields: ensuring ${CUSTOM_FIELDS.length} fields`);
  const existing = await listCustomFields();
  const byName = new Map(existing.map((f) => [f.name.toLowerCase(), f]));
  const results = [];
  for (const spec of CUSTOM_FIELDS) {
    const existingField = byName.get(spec.name.toLowerCase());
    if (existingField) {
      console.log(`  [skip] ${spec.name} (${existingField.id})`);
      results.push({ ...spec, id: existingField.id, status: "existed" });
      continue;
    }
    const r = await createCustomField(spec);
    if (r.ok) {
      const id = r.json?.customField?.id ?? r.json?.id;
      console.log(`  [new]  ${spec.name} (${id})`);
      results.push({ ...spec, id, status: "created" });
    } else {
      console.log(
        `  [FAIL ${r.status}] ${spec.name} — ${r.text.slice(0, 200)}`,
      );
      results.push({ ...spec, status: "failed", error: r.text });
    }
  }
  return results;
}

// -------------------------------------------------------------- PIPELINE ----

const PIPELINE_NAME = "Lindley Team — Client Journey";
const STAGE_NAMES = [
  "New Lead",
  "Contacted",
  "Discovery Scheduled",
  "Pre-Qualification",
  "Application Started",
  "In Processing",
  "Closed Won",
  "Closed Lost",
  "Long-Term Nurture",
];

async function listPipelines() {
  const r = await api(
    "GET",
    `/opportunities/pipelines?locationId=${LOCATION_ID}`,
  );
  if (!r.ok) die(`list pipelines failed ${r.status}`, r.text.slice(0, 300));
  return r.json?.pipelines ?? [];
}

async function createPipeline() {
  const body = {
    locationId: LOCATION_ID,
    name: PIPELINE_NAME,
    stages: STAGE_NAMES.map((name, i) => ({ name, position: i })),
  };
  return api("POST", `/opportunities/pipelines`, body);
}

async function ensurePipeline() {
  console.log(`\nPipeline: ensuring "${PIPELINE_NAME}"`);
  const existing = await listPipelines();
  const match = existing.find((p) => p.name === PIPELINE_NAME);
  if (match) {
    console.log(`  [skip] already exists (${match.id})`);
    return match;
  }
  const r = await createPipeline();
  if (!r.ok) {
    console.log(
      `  [FAIL ${r.status}] pipeline create — ${r.text.slice(0, 400)}`,
    );
    return null;
  }
  const p = r.json?.pipeline ?? r.json;
  console.log(`  [new]  ${p.name} (${p.id})`);
  for (const s of p.stages ?? []) {
    console.log(`         stage: ${s.name} (${s.id})`);
  }
  return p;
}

// -------------------------------------------------------------- CALENDAR ----

const CALENDAR_NAME = "30-Minute Consultation with Bri";
const CALENDAR_SLUG = "30-min-consultation-with-bri";

async function listCalendars() {
  const r = await api("GET", `/calendars/?locationId=${LOCATION_ID}`);
  if (!r.ok) die(`list calendars failed ${r.status}`, r.text.slice(0, 300));
  return r.json?.calendars ?? [];
}

async function listCalendarGroups() {
  const r = await api("GET", `/calendars/groups?locationId=${LOCATION_ID}`);
  if (!r.ok) die(`list calendar groups failed ${r.status}`);
  return r.json?.groups ?? [];
}

async function listLocationUsers() {
  const r = await api("GET", `/users/?locationId=${LOCATION_ID}`);
  if (!r.ok) die(`list users failed ${r.status}`);
  return r.json?.users ?? [];
}

async function ensureCalendar() {
  console.log(`\nCalendar: ensuring "${CALENDAR_NAME}"`);
  const existing = await listCalendars();
  const match = existing.find((c) => c.name === CALENDAR_NAME);
  if (match) {
    console.log(`  [skip] already exists (${match.id})`);
    return match;
  }
  const groups = await listCalendarGroups();
  if (!groups.length) die("no calendar groups found; create one in GHL first");
  const groupId = groups[0].id;
  const users = await listLocationUsers();
  const bri =
    users.find((u) => /lindley/i.test(u.name)) ?? users[0];
  if (!bri) die("no users found for location");

  const body = {
    locationId: LOCATION_ID,
    groupId,
    name: CALENDAR_NAME,
    description: "Complimentary 30-minute consultation with Bri Lindley",
    slotDuration: 30,
    slotDurationUnit: "mins",
    slotInterval: 30,
    slotIntervalUnit: "mins",
    slotBuffer: 15,
    slotBufferUnit: "mins",
    calendarType: "round_robin",
    eventType: "RoundRobin_OptimizeForAvailability",
    widgetSlug: CALENDAR_SLUG,
    slug: CALENDAR_SLUG,
    teamMembers: [{ userId: bri.id, priority: 1 }],
    isActive: true,
    allowReschedule: true,
    allowCancellation: true,
  };
  const r = await api("POST", "/calendars/", body);
  if (!r.ok) {
    console.log(`  [FAIL ${r.status}] ${r.text.slice(0, 400)}`);
    return null;
  }
  const cal = r.json?.calendar ?? r.json;
  console.log(`  [new]  ${cal.name} (${cal.id})`);
  console.log(`         slug: ${cal.slug}`);
  console.log(`         owner: ${bri.name} (${bri.id})`);
  return cal;
}

// --------------------------------------------------------------- DISPATCH ----

async function main() {
  const phase = process.argv[2] ?? "all";
  const state = { pipelines: [], customFields: [] };

  if (phase === "health" || phase === "all") {
    Object.assign(state, await healthCheck());
  }
  if (phase === "tags" || phase === "all") {
    await ensureTags();
  }
  if (phase === "customfields" || phase === "all") {
    state.customFields = await ensureCustomFields();
    console.log("\nCustom field env vars:");
    for (const f of state.customFields) {
      if (f.id) console.log(`  ${f.envVar}=${f.id}`);
    }
  }
  if (phase === "pipeline" || phase === "all") {
    const pipeline = await ensurePipeline();
    if (pipeline) {
      const newLead = (pipeline.stages ?? []).find((s) => s.name === "New Lead");
      console.log("\nPipeline env vars:");
      console.log(`  GHL_PIPELINE_ID=${pipeline.id}`);
      if (newLead) console.log(`  GHL_STAGE_NEW_LEAD_ID=${newLead.id}`);
    }
  }
  if (phase === "calendar" || phase === "all") {
    const cal = await ensureCalendar();
    if (cal) {
      console.log(`\nCalendar booking URL: https://api.leadconnectorhq.com/widget/booking/${cal.id}`);
    }
  }

  console.log("\nDone.");
}

main().catch((err) => {
  console.error("\nUnhandled error:", err?.message ?? err);
  if (err?.stack) console.error(err.stack);
  process.exit(1);
});
