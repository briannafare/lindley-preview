export type FormType =
  | "schedule-call"
  | "rate-quote"
  | "calculator"
  | "neighborhood"
  | "guide-download"
  | "divorce-consult"
  | "apply-click";

export type LoanType =
  | "Purchase"
  | "Refinance"
  | "FHA"
  | "VA"
  | "Jumbo"
  | "Cash-Out"
  | "HELOC"
  | "Investment"
  | "Reverse"
  | "Divorce";

export type LoanAmountRange =
  | "Under $200k"
  | "$200-400k"
  | "$400-600k"
  | "$600k-1M"
  | "$1M+";

export type CreditScoreRange =
  | "Below 580"
  | "580-619"
  | "620-679"
  | "680-719"
  | "720-759"
  | "760+"
  | "Not Sure";

export type Timeline = "ASAP" | "1-3 months" | "3-6 months" | "Just exploring";

export type UtmParams = {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
};

export type LeadSubmission = {
  formType: FormType;
  firstName: string;
  lastName?: string;
  email: string;
  phone?: string;
  loanType?: LoanType;
  loanAmountRange?: LoanAmountRange;
  creditScoreRange?: CreditScoreRange;
  timeline?: Timeline;
  neighborhoodInterest?: string;
  sourcePage?: string;
  calculatorHomePrice?: number;
  calculatorPayment?: number;
  message?: string;
  utm?: UtmParams;
};

type FormConfig = {
  tags: string[];
  requiredFields: Array<keyof LeadSubmission>;
  webhookEnvVar: string;
};

export const FORM_CONFIGS: Record<FormType, FormConfig> = {
  "schedule-call": {
    tags: ["source:website", "form:schedule-call"],
    requiredFields: ["firstName", "email", "phone"],
    webhookEnvVar: "GHL_WEBHOOK_SCHEDULE_CALL",
  },
  "rate-quote": {
    tags: ["source:website", "form:rate-quote"],
    requiredFields: ["firstName", "email", "phone", "loanType"],
    webhookEnvVar: "GHL_WEBHOOK_RATE_QUOTE",
  },
  calculator: {
    tags: ["source:website", "form:calculator"],
    requiredFields: ["firstName", "email"],
    webhookEnvVar: "GHL_WEBHOOK_CALCULATOR",
  },
  neighborhood: {
    tags: ["source:website", "form:neighborhood"],
    requiredFields: ["firstName", "email", "neighborhoodInterest"],
    webhookEnvVar: "GHL_WEBHOOK_NEIGHBORHOOD",
  },
  "guide-download": {
    tags: ["source:website", "form:guide-download"],
    requiredFields: ["firstName", "email"],
    webhookEnvVar: "GHL_WEBHOOK_GUIDE_DOWNLOAD",
  },
  "divorce-consult": {
    tags: ["source:website", "form:divorce-consult", "interest:divorce"],
    requiredFields: ["firstName", "email", "phone"],
    webhookEnvVar: "GHL_WEBHOOK_DIVORCE_CONSULT",
  },
  "apply-click": {
    tags: ["source:website", "clicked-apply"],
    requiredFields: ["email"],
    webhookEnvVar: "GHL_WEBHOOK_APPLY_CLICK",
  },
};

const LOAN_TYPE_TO_INTEREST_TAG: Record<LoanType, string> = {
  Purchase: "interest:purchase",
  Refinance: "interest:refinance",
  FHA: "interest:fha",
  VA: "interest:va",
  Jumbo: "interest:jumbo",
  "Cash-Out": "interest:cash-out",
  HELOC: "interest:heloc",
  Investment: "interest:investment",
  Reverse: "interest:reverse",
  Divorce: "interest:divorce",
};

const TIMELINE_TO_TAG: Record<Timeline, string> = {
  ASAP: "timeline:asap",
  "1-3 months": "timeline:1-3mo",
  "3-6 months": "timeline:3-6mo",
  "Just exploring": "timeline:exploring",
};

export function tagsForSubmission(s: LeadSubmission): string[] {
  const config = FORM_CONFIGS[s.formType];
  const tags = new Set(config.tags);
  if (s.loanType) tags.add(LOAN_TYPE_TO_INTEREST_TAG[s.loanType]);
  if (s.timeline) tags.add(TIMELINE_TO_TAG[s.timeline]);
  return Array.from(tags);
}
