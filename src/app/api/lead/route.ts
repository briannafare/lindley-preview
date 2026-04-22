import { NextResponse } from "next/server";
import { submitLead } from "@/lib/ghl";
import {
  FORM_CONFIGS,
  type FormType,
  type LeadSubmission,
  type LoanType,
  type LoanAmountRange,
  type CreditScoreRange,
  type Timeline,
} from "@/lib/forms";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const FORM_TYPES = Object.keys(FORM_CONFIGS) as FormType[];

function isFormType(v: unknown): v is FormType {
  return typeof v === "string" && (FORM_TYPES as string[]).includes(v);
}

function asString(v: unknown): string | undefined {
  if (typeof v !== "string") return undefined;
  const trimmed = v.trim();
  return trimmed.length ? trimmed : undefined;
}

function asNumber(v: unknown): number | undefined {
  if (typeof v === "number" && Number.isFinite(v)) return v;
  if (typeof v === "string" && v.trim() !== "") {
    const n = Number(v);
    if (Number.isFinite(n)) return n;
  }
  return undefined;
}

const LOAN_TYPES: LoanType[] = [
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
];
const LOAN_AMOUNT_RANGES: LoanAmountRange[] = [
  "Under $200k",
  "$200-400k",
  "$400-600k",
  "$600k-1M",
  "$1M+",
];
const CREDIT_SCORE_RANGES: CreditScoreRange[] = [
  "Below 580",
  "580-619",
  "620-679",
  "680-719",
  "720-759",
  "760+",
  "Not Sure",
];
const TIMELINES: Timeline[] = [
  "ASAP",
  "1-3 months",
  "3-6 months",
  "Just exploring",
];

function enumField<T extends string>(v: unknown, allowed: T[]): T | undefined {
  const s = asString(v);
  return s && (allowed as string[]).includes(s) ? (s as T) : undefined;
}

function parseBody(raw: unknown): LeadSubmission | { error: string } {
  if (!raw || typeof raw !== "object") return { error: "Invalid body" };
  const b = raw as Record<string, unknown>;

  if (!isFormType(b.formType)) return { error: "Invalid formType" };

  const firstName = asString(b.firstName);
  const email = asString(b.email);
  if (!firstName) return { error: "firstName is required" };
  if (!email || !EMAIL_RE.test(email)) return { error: "Valid email required" };

  const utmRaw = (b.utm ?? {}) as Record<string, unknown>;

  const submission: LeadSubmission = {
    formType: b.formType,
    firstName,
    lastName: asString(b.lastName),
    email,
    phone: asString(b.phone),
    loanType: enumField(b.loanType, LOAN_TYPES),
    loanAmountRange: enumField(b.loanAmountRange, LOAN_AMOUNT_RANGES),
    creditScoreRange: enumField(b.creditScoreRange, CREDIT_SCORE_RANGES),
    timeline: enumField(b.timeline, TIMELINES),
    neighborhoodInterest: asString(b.neighborhoodInterest),
    sourcePage: asString(b.sourcePage),
    calculatorHomePrice: asNumber(b.calculatorHomePrice),
    calculatorPayment: asNumber(b.calculatorPayment),
    message: asString(b.message),
    utm: {
      utm_source: asString(utmRaw.utm_source),
      utm_medium: asString(utmRaw.utm_medium),
      utm_campaign: asString(utmRaw.utm_campaign),
      utm_term: asString(utmRaw.utm_term),
      utm_content: asString(utmRaw.utm_content),
    },
  };

  const config = FORM_CONFIGS[submission.formType];
  for (const required of config.requiredFields) {
    if (submission[required] == null || submission[required] === "") {
      return { error: `${required} is required for ${submission.formType}` };
    }
  }

  return submission;
}

export async function POST(req: Request) {
  let json: unknown;
  try {
    json = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = parseBody(json);
  if ("error" in parsed) {
    return NextResponse.json({ error: parsed.error }, { status: 400 });
  }

  try {
    const result = await submitLead(parsed);
    return NextResponse.json({ ok: true, ...result });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("[/api/lead]", message);
    return NextResponse.json(
      { error: "Lead submission failed" },
      { status: 502 },
    );
  }
}
