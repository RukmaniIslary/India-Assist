import { schemes, type Scheme } from "@/data/schemes";

export type EligibilityProfile = {
  age: number;
  gender: "male" | "female" | "other";
  state: string;
  annualIncome: number;
  occupation:
    | "student"
    | "farmer"
    | "salaried"
    | "self-employed"
    | "unorganised-worker"
    | "senior-citizen"
    | "unemployed";
};

export type EligibilityRule = (p: EligibilityProfile) => boolean;

// Maps a scheme slug to a rule. Rules are intentionally indicative and
// approximate the public eligibility criteria of each scheme.
const rules: Record<string, EligibilityRule> = {
  "pradhan-mantri-awas-yojana": (p) => p.annualIncome <= 1800000,
  "ayushman-bharat-pmjay": (p) => p.annualIncome <= 500000 || p.age >= 70,
  "pm-kisan-samman-nidhi": (p) => p.occupation === "farmer",
  "e-shram-card": (p) =>
    p.occupation === "unorganised-worker" && p.age >= 16 && p.age <= 59,
  "atal-pension-yojana": (p) => p.age >= 18 && p.age <= 40,
  "sukanya-samriddhi-yojana": (p) => p.gender === "female" && p.age < 10,
  "pradhan-mantri-jan-dhan-yojana": (p) => p.age >= 10,
  "national-scholarship-portal": (p) =>
    p.occupation === "student" && p.annualIncome <= 800000,
};

export type EligibilityResult = {
  scheme: Scheme;
  reason: string;
};

export function evaluateEligibility(
  profile: EligibilityProfile,
): EligibilityResult[] {
  const results: EligibilityResult[] = [];
  for (const scheme of schemes) {
    const rule = rules[scheme.slug];
    if (rule && rule(profile)) {
      results.push({
        scheme,
        reason: buildReason(scheme, profile),
      });
    }
  }
  return results;
}

function buildReason(scheme: Scheme, p: EligibilityProfile): string {
  switch (scheme.slug) {
    case "pm-kisan-samman-nidhi":
      return "You indicated farming as your occupation, which is the primary criterion.";
    case "e-shram-card":
      return "You are an unorganised-sector worker within the eligible age band.";
    case "atal-pension-yojana":
      return `Your age (${p.age}) is within the 18–40 enrolment window.`;
    case "sukanya-samriddhi-yojana":
      return "Profile matches a girl child below 10 years.";
    case "national-scholarship-portal":
      return "You are a student within the typical income limit.";
    case "ayushman-bharat-pmjay":
      return p.age >= 70
        ? "Senior citizens aged 70+ are covered under the extended scheme."
        : "Your household income is within the indicative limit.";
    default:
      return "Your profile matches the indicative eligibility criteria.";
  }
}
