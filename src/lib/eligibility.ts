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
  casteCategory: "general" | "obc" | "sc" | "st";
  bplCardHolder: boolean;
  disabilityStatus: boolean;
  maritalStatus: "single" | "married" | "widow" | "divorced";
  landOwnership: boolean;
};

export type EligibilityRule = (p: EligibilityProfile) => boolean;

// Maps a scheme slug to a rule. Rules are intentionally indicative and
// approximate the public eligibility criteria of each scheme.
const rules: Record<string, EligibilityRule> = {
  // Housing
  "pradhan-mantri-awas-yojana": (p) => p.annualIncome <= 1800000,
  "pm-awas-yojana-gramin": (p) => p.bplCardHolder || p.annualIncome <= 300000,

  // Health
  "ayushman-bharat-pmjay": (p) =>
    p.annualIncome <= 500000 || p.age >= 70 || p.bplCardHolder,
  "rashtriya-swasthya-bima-yojana": (p) =>
    p.bplCardHolder || p.occupation === "unorganised-worker",
  "janani-suraksha-yojana": (p) => p.gender === "female",

  // Agriculture (land ownership now matters)
  "pm-kisan-samman-nidhi": (p) => p.occupation === "farmer" && p.landOwnership,
  "pradhan-mantri-fasal-bima-yojana": (p) => p.occupation === "farmer",
  "kisan-credit-card": (p) => p.occupation === "farmer",
  "pm-kisan-maandhan-yojana": (p) =>
    p.occupation === "farmer" && p.landOwnership && p.age >= 18 && p.age <= 40,
  "soil-health-card-scheme": (p) => p.occupation === "farmer",
  "pm-kusum": (p) => p.occupation === "farmer" && p.landOwnership,

  // Employment & livelihood
  "e-shram-card": (p) =>
    p.occupation === "unorganised-worker" && p.age >= 16 && p.age <= 59,
  "mahatma-gandhi-nrega": (p) =>
    p.age >= 18 &&
    (p.occupation === "unemployed" ||
      p.occupation === "unorganised-worker" ||
      p.occupation === "farmer"),
  "pm-kaushal-vikas-yojana": (p) => p.age >= 15 && p.age <= 45,
  "deen-dayal-upadhyaya-grameen-kaushalya-yojana": (p) =>
    p.age >= 15 && p.age <= 35,
  "pm-svanidhi": (p) => p.occupation === "self-employed",
  "startup-india": (p) => p.occupation === "self-employed",

  // Financial inclusion
  "pradhan-mantri-jan-dhan-yojana": (p) => p.age >= 10,
  "pradhan-mantri-mudra-yojana": (p) =>
    p.occupation === "self-employed" || p.occupation === "unemployed",
  "stand-up-india": (p) =>
    p.gender === "female" || p.casteCategory === "sc" || p.casteCategory === "st",

  // Pension & social assistance
  "atal-pension-yojana": (p) => p.age >= 18 && p.age <= 40,
  "pradhan-mantri-vaya-vandana-yojana": (p) => p.age >= 60,
  "national-social-assistance-programme": (p) =>
    p.bplCardHolder &&
    (p.age >= 60 || p.maritalStatus === "widow" || p.disabilityStatus),

  // Women & child
  "sukanya-samriddhi-yojana": (p) => p.gender === "female" && p.age < 10,
  "pradhan-mantri-ujjwala-yojana": (p) =>
    p.gender === "female" && (p.bplCardHolder || p.annualIncome <= 300000),
  "beti-bachao-beti-padhao": (p) => p.gender === "female" && p.age < 18,

  // Education
  "national-scholarship-portal": (p) =>
    p.occupation === "student" &&
    (p.annualIncome <= 800000 || p.casteCategory !== "general"),
  "pm-poshan-shakti-nirman": (p) => p.occupation === "student" && p.age <= 14,
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
      return "You are a land-owning farmer, which is the primary criterion.";
    case "pradhan-mantri-fasal-bima-yojana":
    case "kisan-credit-card":
    case "soil-health-card-scheme":
      return "You indicated farming as your occupation.";
    case "pm-kisan-maandhan-yojana":
      return "You are a land-owning farmer within the 18–40 enrolment age.";
    case "pm-kusum":
      return "You are a land-owning farmer who can install a solar pump.";
    case "e-shram-card":
      return "You are an unorganised-sector worker within the eligible age band.";
    case "mahatma-gandhi-nrega":
      return "As a rural adult seeking work, you can claim guaranteed employment.";
    case "atal-pension-yojana":
      return `Your age (${p.age}) is within the 18–40 enrolment window.`;
    case "pradhan-mantri-vaya-vandana-yojana":
      return "You are a senior citizen aged 60 or above.";
    case "national-social-assistance-programme":
      return p.disabilityStatus
        ? "As a BPL person with a disability, you may qualify for the disability pension."
        : p.maritalStatus === "widow"
          ? "As a BPL widow, you may qualify for the widow pension."
          : "As a BPL senior citizen, you may qualify for the old-age pension.";
    case "rashtriya-swasthya-bima-yojana":
      return "Your BPL or unorganised-worker status matches the cover.";
    case "stand-up-india":
      return p.gender === "female"
        ? "Women entrepreneurs are a target group for this scheme."
        : "SC/ST entrepreneurs are a target group for this scheme.";
    case "pradhan-mantri-ujjwala-yojana":
      return "As a woman from a low-income or BPL household, you qualify for a free LPG connection.";
    case "beti-bachao-beti-padhao":
      return "This applies to the girl child and her family.";
    case "sukanya-samriddhi-yojana":
      return "Profile matches a girl child below 10 years.";
    case "national-scholarship-portal":
      return p.casteCategory !== "general"
        ? "As a student from a reserved category, more scholarships may apply to you."
        : "You are a student within the typical income limit.";
    case "pm-poshan-shakti-nirman":
      return "School students up to age 14 receive a free mid-day meal.";
    case "pm-kaushal-vikas-yojana":
    case "deen-dayal-upadhyaya-grameen-kaushalya-yojana":
      return `Your age (${p.age}) is within the skill-training window.`;
    case "pradhan-mantri-mudra-yojana":
    case "pm-svanidhi":
    case "startup-india":
      return "Your self-employment profile matches this enterprise support scheme.";
    case "ayushman-bharat-pmjay":
      return p.age >= 70
        ? "Senior citizens aged 70+ are covered under the extended scheme."
        : p.bplCardHolder
          ? "BPL families are covered under this health scheme."
          : "Your household income is within the indicative limit.";
    case "pm-awas-yojana-gramin":
      return "Your BPL or low-income status matches rural housing assistance.";
    default:
      return "Your profile matches the indicative eligibility criteria.";
  }
}
