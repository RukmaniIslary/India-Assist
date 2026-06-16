export type CalculatorMeta = {
  slug: string;
  name: string;
  category: "Loan" | "Investment" | "Tax" | "Eligibility";
  summary: string;
  keywords: string[];
};

export const calculators: CalculatorMeta[] = [
  {
    slug: "emi",
    name: "EMI Calculator",
    category: "Loan",
    summary:
      "Calculate your Equated Monthly Instalment for home, car or personal loans with a full amortisation breakdown.",
    keywords: ["emi calculator", "loan emi", "monthly instalment", "home loan emi"],
  },
  {
    slug: "sip",
    name: "SIP Calculator",
    category: "Investment",
    summary:
      "Estimate the future value of your Systematic Investment Plan and see how compounding grows your wealth.",
    keywords: ["sip calculator", "mutual fund sip", "investment returns"],
  },
  {
    slug: "loan-eligibility",
    name: "Loan Eligibility Calculator",
    category: "Eligibility",
    summary:
      "Find out how much loan you may qualify for based on your monthly income and existing obligations.",
    keywords: ["loan eligibility", "how much loan", "income based loan"],
  },
  {
    slug: "fd",
    name: "Fixed Deposit Calculator",
    category: "Investment",
    summary:
      "Calculate the maturity amount and interest earned on your fixed deposit with compound interest.",
    keywords: ["fd calculator", "fixed deposit maturity", "interest calculator"],
  },
  {
    slug: "income-tax",
    name: "Income Tax Calculator",
    category: "Tax",
    summary:
      "Estimate your income tax liability under the new tax regime slabs for the financial year.",
    keywords: ["income tax calculator", "tax slab", "new regime tax"],
  },
  {
    slug: "ppf",
    name: "PPF Calculator",
    category: "Investment",
    summary:
      "Project the maturity value of your Public Provident Fund over the 15-year lock-in with annual contributions.",
    keywords: ["ppf calculator", "public provident fund", "ppf maturity"],
  },
];

export function getCalculatorBySlug(slug: string): CalculatorMeta | undefined {
  return calculators.find((c) => c.slug === slug);
}
