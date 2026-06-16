export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readingTime: string;
  content: { heading?: string; paragraphs: string[]; list?: string[] }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-check-government-scheme-eligibility",
    title: "How to Check Your Eligibility for Government Schemes in India",
    excerpt:
      "A practical guide to discovering which central and state welfare schemes you qualify for based on income, age, occupation and state.",
    category: "Schemes",
    author: "India Assist Editorial",
    date: "2026-01-12",
    readingTime: "6 min read",
    content: [
      {
        paragraphs: [
          "India runs hundreds of welfare schemes across housing, health, agriculture, education and pensions. The challenge for most citizens is not the lack of schemes but knowing which ones apply to them.",
          "This guide walks through a structured way to assess eligibility so you spend time only on the benefits you can actually claim.",
        ],
      },
      {
        heading: "Start with your core profile",
        paragraphs: [
          "Most schemes filter applicants by a handful of attributes. Gather these before you begin so you can match quickly.",
        ],
        list: [
          "Age and gender",
          "State of residence",
          "Annual household income",
          "Occupation category (farmer, worker, student, senior citizen)",
          "Social category if applicable",
        ],
      },
      {
        heading: "Use the eligibility engine",
        paragraphs: [
          "Our eligibility engine takes these inputs and instantly returns the schemes that match your profile, along with the documents you need and the official application link.",
          "Always verify final eligibility and current rules on the official government portal before applying.",
        ],
      },
    ],
  },
  {
    slug: "emi-vs-sip-where-should-you-focus",
    title: "EMI vs SIP: Balancing Loan Repayment and Wealth Creation",
    excerpt:
      "Understand how loan EMIs and SIP investments interact, and how to plan your monthly cash flow for both.",
    category: "Finance",
    author: "India Assist Editorial",
    date: "2026-02-03",
    readingTime: "7 min read",
    content: [
      {
        paragraphs: [
          "Equated Monthly Instalments and Systematic Investment Plans pull in opposite directions: one repays debt, the other builds assets. Managing both well is the foundation of personal finance.",
        ],
      },
      {
        heading: "Know your numbers first",
        paragraphs: [
          "Before deciding how to split your monthly surplus, calculate your exact EMI obligation and the projected growth of a SIP using our calculators.",
        ],
        list: [
          "Use the EMI calculator to fix your loan instalment",
          "Use the SIP calculator to project long-term returns",
          "Keep total EMIs within a healthy share of monthly income",
        ],
      },
      {
        heading: "A simple rule of thumb",
        paragraphs: [
          "High-interest debt should generally be cleared faster, while long-term goals benefit from staying invested. Run both calculators and compare the effective cost and return before deciding.",
        ],
      },
    ],
  },
  {
    slug: "documents-checklist-before-applying-schemes",
    title: "The Essential Documents Checklist Before Applying for Any Scheme",
    excerpt:
      "Keep these documents ready to make every scheme, scholarship and certificate application smooth and fast.",
    category: "Documents",
    author: "India Assist Editorial",
    date: "2026-02-20",
    readingTime: "5 min read",
    content: [
      {
        paragraphs: [
          "Most application rejections happen because of missing or mismatched documents. A ready folder of verified documents saves time and avoids repeat visits.",
        ],
      },
      {
        heading: "The universal checklist",
        paragraphs: ["Keep both digital and physical copies of the following."],
        list: [
          "Aadhaar Card linked with an active mobile number",
          "PAN Card for financial applications",
          "Income certificate for benefit-linked schemes",
          "Caste or category certificate where applicable",
          "Bank passbook with account linked to Aadhaar",
          "Recent passport-size photographs",
        ],
      },
      {
        heading: "Keep them consistent",
        paragraphs: [
          "Ensure your name, date of birth and address match across all documents. Even small spelling differences can delay verification.",
        ],
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
