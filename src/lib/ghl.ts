import {
  FORM_CONFIGS,
  type LeadSubmission,
  tagsForSubmission,
} from "./forms";

const GHL_API_BASE = "https://services.leadconnectorhq.com";
const GHL_API_VERSION = "2021-07-28";

type CustomFieldValue = { id: string; value: string | number };

type GhlCreateContactResponse = {
  contact?: { id: string };
};

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required env var: ${name}`);
  return value;
}

function customFieldsFor(s: LeadSubmission): CustomFieldValue[] {
  const map: Array<[string, string | number | undefined]> = [
    ["GHL_CF_LOAN_TYPE", s.loanType],
    ["GHL_CF_LOAN_AMOUNT_RANGE", s.loanAmountRange],
    ["GHL_CF_CREDIT_SCORE_RANGE", s.creditScoreRange],
    ["GHL_CF_TIMELINE", s.timeline],
    ["GHL_CF_NEIGHBORHOOD_INTEREST", s.neighborhoodInterest],
    ["GHL_CF_LEAD_SOURCE_PAGE", s.sourcePage],
    ["GHL_CF_CALCULATOR_HOME_PRICE", s.calculatorHomePrice],
    ["GHL_CF_CALCULATOR_PAYMENT", s.calculatorPayment],
  ];
  const fields: CustomFieldValue[] = [];
  for (const [envName, value] of map) {
    if (value === undefined || value === "" || value === null) continue;
    const id = process.env[envName];
    if (!id) continue;
    fields.push({ id, value });
  }
  return fields;
}

async function ghlFetch<T>(path: string, body: unknown): Promise<T> {
  const token = requireEnv("GHL_PIT_TOKEN");
  const res = await fetch(`${GHL_API_BASE}${path}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      Version: GHL_API_VERSION,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`GHL ${path} failed: ${res.status} ${text}`);
  }
  return res.json() as Promise<T>;
}

async function createContact(s: LeadSubmission, tags: string[]) {
  const locationId = requireEnv("GHL_LOCATION_ID");
  const payload = {
    locationId,
    firstName: s.firstName,
    lastName: s.lastName,
    email: s.email,
    phone: s.phone,
    tags,
    customFields: customFieldsFor(s),
    source: s.utm?.utm_source || "website",
  };
  const res = await ghlFetch<GhlCreateContactResponse>("/contacts/", payload);
  if (!res.contact?.id) throw new Error("GHL contact create returned no id");
  return res.contact.id;
}

async function addOpportunity(contactId: string, s: LeadSubmission) {
  const pipelineId = process.env.GHL_PIPELINE_ID;
  const pipelineStageId = process.env.GHL_STAGE_NEW_LEAD_ID;
  const locationId = requireEnv("GHL_LOCATION_ID");
  if (!pipelineId || !pipelineStageId) {
    console.warn(
      "[ghl] Skipping opportunity: GHL_PIPELINE_ID or GHL_STAGE_NEW_LEAD_ID not set",
    );
    return null;
  }
  const name =
    `${s.firstName}${s.lastName ? ` ${s.lastName}` : ""} — ${s.formType}`.trim();
  await ghlFetch("/opportunities/", {
    locationId,
    pipelineId,
    pipelineStageId,
    contactId,
    name,
    status: "open",
  });
  return true;
}

async function postToWebhook(url: string, s: LeadSubmission, tags: string[]) {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...s, tags }),
  });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`GHL webhook failed: ${res.status} ${text}`);
  }
}

export async function submitLead(s: LeadSubmission) {
  const config = FORM_CONFIGS[s.formType];
  const tags = tagsForSubmission(s);

  const webhookUrl = process.env[config.webhookEnvVar];
  if (webhookUrl) {
    await postToWebhook(webhookUrl, s, tags);
    return { mode: "webhook" as const };
  }

  const contactId = await createContact(s, tags);
  await addOpportunity(contactId, s);
  return { mode: "direct" as const, contactId };
}
