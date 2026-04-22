"use client";

import { useState, type FormEvent } from "react";
import { useUtm } from "@/lib/useUtm";
import type {
  CreditScoreRange,
  FormType,
  LoanAmountRange,
  LoanType,
  Timeline,
} from "@/lib/forms";

type FieldKey =
  | "firstName"
  | "lastName"
  | "email"
  | "phone"
  | "loanType"
  | "loanAmountRange"
  | "creditScoreRange"
  | "timeline"
  | "neighborhoodInterest"
  | "message";

const FIELDS_BY_FORM: Record<FormType, FieldKey[]> = {
  "schedule-call": ["firstName", "lastName", "email", "phone", "message"],
  "rate-quote": [
    "firstName",
    "lastName",
    "email",
    "phone",
    "loanType",
    "loanAmountRange",
    "creditScoreRange",
    "timeline",
  ],
  calculator: ["firstName", "email"],
  neighborhood: ["firstName", "email", "neighborhoodInterest"],
  "guide-download": ["firstName", "email"],
  "divorce-consult": ["firstName", "lastName", "email", "phone", "message"],
  "apply-click": ["email"],
};

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

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  loanType: string;
  loanAmountRange: string;
  creditScoreRange: string;
  timeline: string;
  neighborhoodInterest: string;
  message: string;
};

const EMPTY: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  loanType: "",
  loanAmountRange: "",
  creditScoreRange: "",
  timeline: "",
  neighborhoodInterest: "",
  message: "",
};

type LeadFormProps = {
  formType: FormType;
  sourcePage?: string;
  submitLabel?: string;
  successHeading?: string;
  successBody?: string;
  calculatorHomePrice?: number;
  calculatorPayment?: number;
  className?: string;
  onSuccess?: () => void;
};

const inputClass =
  "w-full border border-border rounded-xl px-3 py-2 bg-white text-ink outline-none focus:border-ink transition-colors";
const labelClass =
  "text-[0.75rem] font-semibold uppercase tracking-[0.08em] text-ink mb-1 block";

export default function LeadForm({
  formType,
  sourcePage,
  submitLabel = "Submit",
  successHeading = "Got it — Bri will be in touch.",
  successBody = "We'll reach out shortly to schedule your complimentary consultation.",
  calculatorHomePrice,
  calculatorPayment,
  className = "",
  onSuccess,
}: LeadFormProps) {
  const [state, setState] = useState<FormState>(EMPTY);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const utm = useUtm();

  const fields = FIELDS_BY_FORM[formType];

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setState((prev) => ({ ...prev, [key]: value }));

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const payload = {
      formType,
      sourcePage:
        sourcePage ??
        (typeof window !== "undefined" ? window.location.pathname : undefined),
      calculatorHomePrice,
      calculatorPayment,
      utm,
      ...Object.fromEntries(
        Object.entries(state).filter(([, v]) => v !== ""),
      ),
    };

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(data.error || `Request failed (${res.status})`);
      }
      setStatus("success");
      onSuccess?.();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  if (status === "success") {
    return (
      <div className={`rounded-[2rem] border border-border bg-cream p-8 ${className}`}>
        <h3 className="font-display text-xl font-bold text-ink mb-2">
          {successHeading}
        </h3>
        <p className="text-sm text-ink-mid">{successBody}</p>
      </div>
    );
  }

  const showField = (key: FieldKey) => fields.includes(key);

  return (
    <form
      onSubmit={handleSubmit}
      className={`rounded-[2rem] border border-border bg-white p-8 space-y-4 ${className}`}
      noValidate
    >
      {showField("firstName") && (
        <div>
          <label className={labelClass} htmlFor={`${formType}-firstName`}>
            First name
          </label>
          <input
            id={`${formType}-firstName`}
            type="text"
            required
            autoComplete="given-name"
            className={inputClass}
            value={state.firstName}
            onChange={(e) => update("firstName", e.target.value)}
          />
        </div>
      )}

      {showField("lastName") && (
        <div>
          <label className={labelClass} htmlFor={`${formType}-lastName`}>
            Last name
          </label>
          <input
            id={`${formType}-lastName`}
            type="text"
            autoComplete="family-name"
            className={inputClass}
            value={state.lastName}
            onChange={(e) => update("lastName", e.target.value)}
          />
        </div>
      )}

      {showField("email") && (
        <div>
          <label className={labelClass} htmlFor={`${formType}-email`}>
            Email
          </label>
          <input
            id={`${formType}-email`}
            type="email"
            required
            autoComplete="email"
            className={inputClass}
            value={state.email}
            onChange={(e) => update("email", e.target.value)}
          />
        </div>
      )}

      {showField("phone") && (
        <div>
          <label className={labelClass} htmlFor={`${formType}-phone`}>
            Phone
          </label>
          <input
            id={`${formType}-phone`}
            type="tel"
            autoComplete="tel"
            className={inputClass}
            value={state.phone}
            onChange={(e) => update("phone", e.target.value)}
          />
        </div>
      )}

      {showField("loanType") && (
        <div>
          <label className={labelClass} htmlFor={`${formType}-loanType`}>
            What are you looking to do?
          </label>
          <select
            id={`${formType}-loanType`}
            className={inputClass}
            value={state.loanType}
            onChange={(e) => update("loanType", e.target.value)}
          >
            <option value="">Select one</option>
            {LOAN_TYPES.map((v) => (
              <option key={v} value={v}>
                {v}
              </option>
            ))}
          </select>
        </div>
      )}

      {showField("loanAmountRange") && (
        <div>
          <label className={labelClass} htmlFor={`${formType}-loanAmountRange`}>
            Loan amount range
          </label>
          <select
            id={`${formType}-loanAmountRange`}
            className={inputClass}
            value={state.loanAmountRange}
            onChange={(e) => update("loanAmountRange", e.target.value)}
          >
            <option value="">Select one</option>
            {LOAN_AMOUNT_RANGES.map((v) => (
              <option key={v} value={v}>
                {v}
              </option>
            ))}
          </select>
        </div>
      )}

      {showField("creditScoreRange") && (
        <div>
          <label className={labelClass} htmlFor={`${formType}-creditScoreRange`}>
            Credit score range
          </label>
          <select
            id={`${formType}-creditScoreRange`}
            className={inputClass}
            value={state.creditScoreRange}
            onChange={(e) => update("creditScoreRange", e.target.value)}
          >
            <option value="">Select one</option>
            {CREDIT_SCORE_RANGES.map((v) => (
              <option key={v} value={v}>
                {v}
              </option>
            ))}
          </select>
        </div>
      )}

      {showField("timeline") && (
        <div>
          <label className={labelClass} htmlFor={`${formType}-timeline`}>
            Timeline
          </label>
          <select
            id={`${formType}-timeline`}
            className={inputClass}
            value={state.timeline}
            onChange={(e) => update("timeline", e.target.value)}
          >
            <option value="">Select one</option>
            {TIMELINES.map((v) => (
              <option key={v} value={v}>
                {v}
              </option>
            ))}
          </select>
        </div>
      )}

      {showField("neighborhoodInterest") && (
        <div>
          <label
            className={labelClass}
            htmlFor={`${formType}-neighborhoodInterest`}
          >
            Neighborhood of interest
          </label>
          <input
            id={`${formType}-neighborhoodInterest`}
            type="text"
            required
            className={inputClass}
            value={state.neighborhoodInterest}
            onChange={(e) => update("neighborhoodInterest", e.target.value)}
          />
        </div>
      )}

      {showField("message") && (
        <div>
          <label className={labelClass} htmlFor={`${formType}-message`}>
            Anything we should know?
          </label>
          <textarea
            id={`${formType}-message`}
            rows={3}
            className={inputClass}
            value={state.message}
            onChange={(e) => update("message", e.target.value)}
          />
        </div>
      )}

      {status === "error" && (
        <p className="text-sm text-red-600" role="alert">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="px-8 py-4 bg-ink text-white rounded-full text-[0.78rem] font-bold tracking-[0.04em] uppercase hover:scale-[1.03] transition-transform disabled:opacity-60 disabled:hover:scale-100"
      >
        {status === "submitting" ? "Sending..." : submitLabel}
      </button>

      <p className="text-[0.7rem] text-ink-light mt-2">
        Licensed in Oregon and Washington only. Not a commitment to lend.
      </p>
    </form>
  );
}
