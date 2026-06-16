export type LoanType = {
  slug: string;
  name: string;
  rateRange: string;
  tenure: string;
  summary: string;
  features: string[];
  bestFor: string;
};

export const loanTypes: LoanType[] = [
  {
    slug: "home-loan",
    name: "Home Loan",
    rateRange: "8.3% – 9.5% p.a.",
    tenure: "Up to 30 years",
    summary:
      "Finance the purchase or construction of a home with long tenures and competitive interest rates.",
    features: [
      "Tax benefits on principal and interest",
      "Balance transfer to reduce EMIs",
      "Top-up loans for renovation",
    ],
    bestFor: "Buying, building or renovating a house",
  },
  {
    slug: "personal-loan",
    name: "Personal Loan",
    rateRange: "10.5% – 24% p.a.",
    tenure: "1 – 7 years",
    summary:
      "Unsecured loan for any personal need with quick disbursal and minimal documentation.",
    features: [
      "No collateral required",
      "Fast approval and disbursal",
      "Flexible end-use",
    ],
    bestFor: "Weddings, travel, medical or emergency expenses",
  },
  {
    slug: "education-loan",
    name: "Education Loan",
    rateRange: "8.5% – 14% p.a.",
    tenure: "Up to 15 years",
    summary:
      "Fund higher education in India or abroad with moratorium periods and tax benefits.",
    features: [
      "Moratorium during the course",
      "Tax deduction on interest under Section 80E",
      "Covers tuition and living costs",
    ],
    bestFor: "Students pursuing higher studies",
  },
  {
    slug: "car-loan",
    name: "Car Loan",
    rateRange: "8.7% – 12% p.a.",
    tenure: "1 – 7 years",
    summary:
      "Finance a new or used car with attractive rates and on-road price funding.",
    features: [
      "Up to 90% on-road funding",
      "Quick approval at dealerships",
      "Flexible repayment options",
    ],
    bestFor: "Buying a new or pre-owned vehicle",
  },
  {
    slug: "business-loan",
    name: "Business Loan",
    rateRange: "11% – 22% p.a.",
    tenure: "1 – 5 years",
    summary:
      "Working capital and growth funding for MSMEs and self-employed professionals.",
    features: [
      "Collateral-free options",
      "Flexible working-capital limits",
      "Support for MSME schemes",
    ],
    bestFor: "MSMEs and self-employed business owners",
  },
  {
    slug: "gold-loan",
    name: "Gold Loan",
    rateRange: "9% – 18% p.a.",
    tenure: "Up to 3 years",
    summary:
      "Borrow against gold jewellery with same-day disbursal and minimal paperwork.",
    features: [
      "Quick liquidity against gold",
      "Minimal documentation",
      "Flexible repayment plans",
    ],
    bestFor: "Short-term funds against gold",
  },
];
