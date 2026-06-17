export const siteConfig = {
  name: "India Assist",
  shortName: "IndiaAssist",
  domain: "indiaassist.online",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://www.indiaassist.online",
  tagline: "India's assistance engine",
  description:
    "India Assist helps every Indian discover government schemes, scholarships, document procedures, finance calculators and eligibility in one place.",
  locale: "en_IN",
  adsenseClient:
    process.env.NEXT_PUBLIC_ADSENSE_CLIENT || "ca-pub-8685123310989975",
  gaId: process.env.NEXT_PUBLIC_GA_ID || "",
  email: "support@indiaassist.online",
  social: {
    twitter: "https://twitter.com/indiaassist",
    facebook: "https://facebook.com/indiaassist",
    linkedin: "https://linkedin.com/company/indiaassist",
    youtube: "https://youtube.com/@indiaassist",
  },
} as const;

export type NavItem = {
  label: string;
  href: string;
  description?: string;
};

export const mainNav: NavItem[] = [
  { label: "Schemes", href: "/schemes", description: "Government welfare schemes" },
  { label: "Scholarships", href: "/scholarships", description: "National & state scholarships" },
  { label: "Documents", href: "/documents", description: "Apply for official documents" },
  { label: "Calculators", href: "/calculators", description: "EMI, SIP, loan & tax tools" },
  { label: "Loans", href: "/loans", description: "Compare loan options" },
  { label: "States", href: "/states", description: "State-wise benefit guides" },
  { label: "Blog", href: "/blog", description: "Guides & comparisons" },
];

export const footerNav = {
  Explore: [
    { label: "Schemes", href: "/schemes" },
    { label: "Scholarships", href: "/scholarships" },
    { label: "Documents", href: "/documents" },
    { label: "State Guides", href: "/states" },
  ],
  Tools: [
    { label: "Calculators", href: "/calculators" },
    { label: "Eligibility Engine", href: "/eligibility" },
    { label: "Loans", href: "/loans" },
    { label: "Search", href: "/search" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Blog", href: "/blog" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Disclaimer", href: "/disclaimer" },
  ],
};
