export type Scheme = {
  slug: string;
  name: string;
  shortName?: string;
  ministry: string;
  category:
    | "Housing"
    | "Health"
    | "Agriculture"
    | "Employment"
    | "Pension"
    | "Financial Inclusion"
    | "Women & Child"
    | "Education";
  summary: string;
  benefit: string;
  launched: string;
  beneficiaries?: string;
  eligibility: string[];
  documents: string[];
  howToApply: string[];
  officialUrl: string;
  faqs: { q: string; a: string }[];
};

export const schemes: Scheme[] = [
  {
    slug: "pradhan-mantri-awas-yojana",
    name: "Pradhan Mantri Awas Yojana (PMAY)",
    shortName: "PMAY",
    ministry: "Ministry of Housing & Urban Affairs",
    category: "Housing",
    summary:
      "A flagship mission to provide affordable pucca housing to all eligible urban and rural households, with credit-linked interest subsidy on home loans.",
    benefit:
      "Interest subsidy up to Rs. 2.67 lakh on home loans and direct assistance for house construction.",
    launched: "2015",
    beneficiaries: "Economically Weaker Section, Low Income Group, Middle Income Group",
    eligibility: [
      "Household should not own a pucca house anywhere in India",
      "Annual household income within the prescribed slab (EWS up to Rs. 3 lakh, LIG up to Rs. 6 lakh)",
      "Beneficiary family comprises husband, wife and unmarried children",
      "Should not have availed central assistance under any housing scheme earlier",
    ],
    documents: [
      "Aadhaar Card",
      "Income Certificate",
      "Bank account details",
      "Proof of residence",
      "Property documents (for construction)",
    ],
    howToApply: [
      "Visit the official PMAY portal and select Citizen Assessment",
      "Enter your Aadhaar number to verify identity",
      "Fill in personal, income and bank details",
      "Submit the application and note the application number",
      "Track status using the application number on the portal",
    ],
    officialUrl: "https://pmaymis.gov.in",
    faqs: [
      {
        q: "Who is eligible for PMAY subsidy?",
        a: "Families belonging to EWS, LIG and MIG categories without a pucca house, within the prescribed income limits, are eligible for the credit-linked subsidy.",
      },
      {
        q: "What is the maximum subsidy under PMAY?",
        a: "Eligible beneficiaries can receive an interest subsidy of up to Rs. 2.67 lakh on their home loan depending on income category.",
      },
    ],
  },
  {
    slug: "ayushman-bharat-pmjay",
    name: "Ayushman Bharat — PM Jan Arogya Yojana",
    shortName: "PM-JAY",
    ministry: "Ministry of Health & Family Welfare",
    category: "Health",
    summary:
      "The world's largest publicly funded health assurance scheme, providing cashless secondary and tertiary hospital care to eligible families.",
    benefit:
      "Health cover of Rs. 5 lakh per family per year for secondary and tertiary care hospitalisation.",
    launched: "2018",
    beneficiaries: "Deprived rural families and identified urban worker categories",
    eligibility: [
      "Families identified under the Socio-Economic Caste Census (SECC) database",
      "Specified occupational categories of urban workers",
      "No restriction on family size, age or gender",
      "Senior citizens aged 70 and above are covered under the extended scheme",
    ],
    documents: [
      "Aadhaar Card",
      "Ration Card",
      "Mobile number for verification",
      "Family identity proof",
    ],
    howToApply: [
      "Check eligibility on the official PM-JAY portal using your mobile number",
      "Visit the nearest empanelled hospital or Common Service Centre",
      "Complete e-KYC verification with Aadhaar",
      "Receive your Ayushman card for cashless treatment",
    ],
    officialUrl: "https://pmjay.gov.in",
    faqs: [
      {
        q: "How much is the health cover under PM-JAY?",
        a: "The scheme provides health cover of Rs. 5 lakh per family per year for hospitalisation at empanelled hospitals.",
      },
      {
        q: "Is there any premium to pay?",
        a: "No, the scheme is fully funded by the government and there is no premium for eligible beneficiaries.",
      },
    ],
  },
  {
    slug: "pm-kisan-samman-nidhi",
    name: "PM Kisan Samman Nidhi",
    shortName: "PM-KISAN",
    ministry: "Ministry of Agriculture & Farmers Welfare",
    category: "Agriculture",
    summary:
      "An income support scheme that transfers direct financial assistance to land-holding farmer families across the country.",
    benefit:
      "Rs. 6,000 per year transferred directly in three equal instalments of Rs. 2,000.",
    launched: "2019",
    beneficiaries: "Land-holding farmer families",
    eligibility: [
      "Should be a land-holding farmer family with cultivable land",
      "Name should be recorded in the land records of the state",
      "Excludes institutional landholders and higher-income tax payers",
      "Excludes serving and retired government employees above a defined grade",
    ],
    documents: [
      "Aadhaar Card",
      "Land ownership records",
      "Bank account linked with Aadhaar",
      "Mobile number",
    ],
    howToApply: [
      "Visit the official PM-KISAN portal and select New Farmer Registration",
      "Enter Aadhaar number and select rural or urban farmer",
      "Fill land and bank details and submit",
      "Complete e-KYC to receive instalments without delay",
    ],
    officialUrl: "https://pmkisan.gov.in",
    faqs: [
      {
        q: "How is the PM-KISAN amount paid?",
        a: "The Rs. 6,000 annual benefit is paid in three equal instalments of Rs. 2,000 directly to the farmer's bank account.",
      },
      {
        q: "Is e-KYC mandatory?",
        a: "Yes, completing e-KYC is mandatory to continue receiving instalments under the scheme.",
      },
    ],
  },
  {
    slug: "e-shram-card",
    name: "e-Shram — National Database of Unorganised Workers",
    shortName: "e-Shram",
    ministry: "Ministry of Labour & Employment",
    category: "Employment",
    summary:
      "A national registry that gives unorganised workers a Universal Account Number and access to social security and accident insurance benefits.",
    benefit:
      "Accidental insurance cover of Rs. 2 lakh and a single window for unorganised-sector welfare benefits.",
    launched: "2021",
    beneficiaries: "Unorganised sector workers aged 16 to 59",
    eligibility: [
      "Worker should be in the unorganised sector",
      "Age between 16 and 59 years",
      "Should not be a member of EPFO or ESIC",
      "Should not be an income tax payer",
    ],
    documents: [
      "Aadhaar Card",
      "Mobile number linked with Aadhaar",
      "Bank account details",
    ],
    howToApply: [
      "Visit the official e-Shram portal and select self-registration",
      "Authenticate using Aadhaar-linked mobile OTP",
      "Fill personal, occupational and bank details",
      "Download the e-Shram card with your Universal Account Number",
    ],
    officialUrl: "https://eshram.gov.in",
    faqs: [
      {
        q: "What insurance is provided with the e-Shram card?",
        a: "Registered workers get accidental insurance cover of Rs. 2 lakh for the first year under the linked scheme.",
      },
    ],
  },
  {
    slug: "atal-pension-yojana",
    name: "Atal Pension Yojana",
    shortName: "APY",
    ministry: "Ministry of Finance",
    category: "Pension",
    summary:
      "A guaranteed pension scheme focused on unorganised-sector workers, offering a defined monthly pension after the age of 60.",
    benefit:
      "Guaranteed monthly pension between Rs. 1,000 and Rs. 5,000 after the age of 60.",
    launched: "2015",
    beneficiaries: "Citizens aged 18 to 40 with a bank account",
    eligibility: [
      "Indian citizen aged between 18 and 40 years",
      "Should have a savings bank or post office account",
      "Should not be an income tax payer (current rule)",
      "Aadhaar and mobile number recommended for enrolment",
    ],
    documents: ["Aadhaar Card", "Savings bank account", "Mobile number"],
    howToApply: [
      "Approach your bank or post office where you hold a savings account",
      "Fill the APY registration form and choose your pension amount",
      "Provide Aadhaar and mobile number",
      "Authorise auto-debit of contributions from your account",
    ],
    officialUrl: "https://www.npscra.nsdl.co.in",
    faqs: [
      {
        q: "When does the pension start under APY?",
        a: "The guaranteed monthly pension begins after the subscriber attains the age of 60 years.",
      },
    ],
  },
  {
    slug: "sukanya-samriddhi-yojana",
    name: "Sukanya Samriddhi Yojana",
    shortName: "SSY",
    ministry: "Ministry of Finance",
    category: "Women & Child",
    summary:
      "A small savings scheme for the girl child that offers attractive, tax-free returns to support education and marriage expenses.",
    benefit:
      "High fixed interest with tax benefits under Section 80C and tax-free maturity proceeds.",
    launched: "2015",
    beneficiaries: "Parents or guardians of a girl child below 10 years",
    eligibility: [
      "Account can be opened for a girl child below 10 years of age",
      "A maximum of two accounts per family (exceptions for twins)",
      "Resident Indian girl child",
    ],
    documents: [
      "Birth certificate of the girl child",
      "Identity and address proof of guardian",
      "Photographs",
    ],
    howToApply: [
      "Visit a post office or authorised bank branch",
      "Fill the SSY account opening form",
      "Submit the girl child's birth certificate and guardian KYC",
      "Make the initial deposit to activate the account",
    ],
    officialUrl: "https://www.indiapost.gov.in",
    faqs: [
      {
        q: "What is the maturity period of SSY?",
        a: "The account matures 21 years from the date of opening, with deposits required for the first 15 years.",
      },
    ],
  },
  {
    slug: "pradhan-mantri-jan-dhan-yojana",
    name: "Pradhan Mantri Jan Dhan Yojana",
    shortName: "PMJDY",
    ministry: "Ministry of Finance",
    category: "Financial Inclusion",
    summary:
      "A national mission for financial inclusion offering basic bank accounts, RuPay debit cards and built-in insurance for the unbanked.",
    benefit:
      "Zero-balance bank account, RuPay debit card with accident insurance and overdraft facility.",
    launched: "2014",
    beneficiaries: "Any Indian citizen without a bank account",
    eligibility: [
      "Indian citizen aged 10 years and above",
      "Should not already hold a bank account (for new account benefits)",
      "Valid KYC document required",
    ],
    documents: ["Aadhaar Card or any valid KYC document", "Photograph"],
    howToApply: [
      "Visit any bank branch or Bank Mitra outlet",
      "Fill the Jan Dhan account opening form",
      "Submit KYC documents and photograph",
      "Receive your RuPay debit card and passbook",
    ],
    officialUrl: "https://pmjdy.gov.in",
    faqs: [
      {
        q: "Is there a minimum balance for a Jan Dhan account?",
        a: "No, the PMJDY account is a zero-balance account with no requirement to maintain a minimum balance.",
      },
    ],
  },
  {
    slug: "national-scholarship-portal",
    name: "National Scholarship Portal Schemes",
    shortName: "NSP",
    ministry: "Ministry of Electronics & IT (with line ministries)",
    category: "Education",
    summary:
      "A single-window platform hosting central and state scholarship schemes for students across pre-matric, post-matric and merit categories.",
    benefit:
      "Direct scholarship disbursal covering tuition, maintenance and academic allowances.",
    launched: "2015",
    beneficiaries: "Students from eligible categories and income groups",
    eligibility: [
      "Enrolled student in a recognised institution",
      "Family income within the scheme-specific limit",
      "Category and academic criteria as per the chosen scheme",
    ],
    documents: [
      "Aadhaar Card",
      "Income Certificate",
      "Caste/Category certificate (if applicable)",
      "Previous year marksheet",
      "Bank account linked with Aadhaar",
    ],
    howToApply: [
      "Register on the National Scholarship Portal as a fresh applicant",
      "Complete your profile and verify the OTP",
      "Select the applicable scholarship scheme",
      "Upload documents and submit before the deadline",
    ],
    officialUrl: "https://scholarships.gov.in",
    faqs: [
      {
        q: "Can I apply for multiple scholarships on NSP?",
        a: "You can apply for one scholarship per academic year through the portal, choosing the scheme you are most eligible for.",
      },
    ],
  },
];

export function getSchemeBySlug(slug: string): Scheme | undefined {
  return schemes.find((s) => s.slug === slug);
}

export const schemeCategories = Array.from(
  new Set(schemes.map((s) => s.category)),
).sort();
