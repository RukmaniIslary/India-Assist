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
      "If you don't own a pucca house yet, this is the big one. It helps eligible families build or buy a home, with a good chunk of your home loan interest knocked off as a subsidy.",
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
      "Think of it as government-backed health cover for your family. Cashless treatment at empanelled hospitals, no premium to pay if you qualify, and it happens to be the largest scheme of its kind anywhere in the world.",
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
      "Straightforward income support for farming families. The money lands directly in your bank account, three times a year, with no middleman in between.",
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
      "A single national ID for workers in the unorganised sector. You register once, get a Universal Account Number, and accident insurance cover comes along with it — all free.",
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
  {
    slug: "pradhan-mantri-fasal-bima-yojana",
    name: "Pradhan Mantri Fasal Bima Yojana",
    shortName: "PMFBY",
    ministry: "Ministry of Agriculture & Farmers Welfare",
    category: "Agriculture",
    summary:
      "A crop insurance scheme that protects farmers against the financial loss from crop failure due to natural calamities, pests and diseases.",
    benefit:
      "Insurance payout for crop loss against a low, subsidised premium paid by the farmer.",
    launched: "2016",
    beneficiaries: "Farmers growing notified crops in notified areas",
    eligibility: [
      "All farmers growing notified crops in a notified area",
      "Includes sharecroppers and tenant farmers with proof of cultivation",
      "Compulsory for farmers with crop loans (loanee farmers), voluntary for others",
    ],
    documents: [
      "Aadhaar Card",
      "Land records or tenancy agreement",
      "Bank account linked with Aadhaar",
      "Sowing certificate or crop details",
    ],
    howToApply: [
      "Visit the official PMFBY portal or your nearest bank/CSC",
      "Select the crop, season and area to be insured",
      "Submit land and bank details with documents",
      "Pay the subsidised premium and collect the policy acknowledgement",
    ],
    officialUrl: "https://pmfby.gov.in",
    faqs: [
      {
        q: "What premium does a farmer pay under PMFBY?",
        a: "Farmers pay a maximum of 2% for Kharif, 1.5% for Rabi food and oilseed crops, and 5% for commercial or horticultural crops; the rest is subsidised.",
      },
    ],
  },
  {
    slug: "kisan-credit-card",
    name: "Kisan Credit Card",
    shortName: "KCC",
    ministry: "Ministry of Agriculture & Farmers Welfare",
    category: "Agriculture",
    summary:
      "A credit scheme that gives farmers timely, low-cost access to working capital for cultivation and allied activities through a simple credit card.",
    benefit:
      "Short-term crop loans at a concessional interest rate, with interest subvention on prompt repayment.",
    launched: "1998",
    beneficiaries: "Farmers, including tenant farmers, fishers and dairy farmers",
    eligibility: [
      "Individual or joint cultivators who own farmland",
      "Tenant farmers, oral lessees and sharecroppers",
      "Self-help groups or joint liability groups of farmers",
      "Farmers engaged in animal husbandry and fisheries",
    ],
    documents: [
      "Aadhaar Card",
      "Land ownership or cultivation proof",
      "Passport-size photographs",
      "Bank account details",
    ],
    howToApply: [
      "Approach your bank branch or apply through the KCC portal",
      "Fill the Kisan Credit Card application form",
      "Submit land documents and identity proof",
      "Receive the sanctioned credit limit and KCC card",
    ],
    officialUrl: "https://www.myscheme.gov.in",
    faqs: [
      {
        q: "What is the interest rate on a Kisan Credit Card?",
        a: "Crop loans up to the prescribed limit are available at a concessional rate, with an additional interest subvention for farmers who repay on time.",
      },
    ],
  },
  {
    slug: "pm-kisan-maandhan-yojana",
    name: "PM Kisan Maandhan Yojana",
    shortName: "PM-KMY",
    ministry: "Ministry of Agriculture & Farmers Welfare",
    category: "Agriculture",
    summary:
      "A voluntary, contributory pension scheme for small and marginal farmers to provide income security in their old age.",
    benefit:
      "Assured monthly pension of Rs. 3,000 after the age of 60, with matching government contribution.",
    launched: "2019",
    beneficiaries: "Small and marginal farmers aged 18 to 40",
    eligibility: [
      "Small or marginal farmer with cultivable land up to 2 hectares",
      "Age between 18 and 40 years at enrolment",
      "Not covered under any other statutory social security scheme",
    ],
    documents: [
      "Aadhaar Card",
      "Land records",
      "Savings bank or PM-KISAN account details",
    ],
    howToApply: [
      "Visit the nearest Common Service Centre with documents",
      "Complete enrolment with Aadhaar and bank details",
      "Choose the monthly contribution as per your entry age",
      "Authorise auto-debit of the contribution",
    ],
    officialUrl: "https://maandhan.in",
    faqs: [
      {
        q: "How much pension does PM-KMY provide?",
        a: "Enrolled farmers receive an assured monthly pension of Rs. 3,000 after attaining 60 years of age.",
      },
    ],
  },
  {
    slug: "soil-health-card-scheme",
    name: "Soil Health Card Scheme",
    shortName: "SHC",
    ministry: "Ministry of Agriculture & Farmers Welfare",
    category: "Agriculture",
    summary:
      "A scheme that provides farmers with a card detailing the nutrient status of their soil and tailored recommendations to improve yield.",
    benefit:
      "Free soil testing and crop-wise nutrient recommendations to cut input costs and raise productivity.",
    launched: "2015",
    beneficiaries: "All farmers across the country",
    eligibility: [
      "Any farmer cultivating land is eligible",
      "No income or landholding restriction",
    ],
    documents: ["Aadhaar Card", "Land details"],
    howToApply: [
      "Contact your local agriculture department or Krishi Vigyan Kendra",
      "Provide your land details for soil sample collection",
      "Soil samples are tested at a designated laboratory",
      "Collect or download your Soil Health Card with recommendations",
    ],
    officialUrl: "https://soilhealth.dac.gov.in",
    faqs: [
      {
        q: "How often is the Soil Health Card issued?",
        a: "The card is typically issued once every few years so farmers can track changes in soil health and adjust inputs accordingly.",
      },
    ],
  },
  {
    slug: "pm-kusum",
    name: "PM-KUSUM (Solar Energy for Farmers)",
    shortName: "PM-KUSUM",
    ministry: "Ministry of New & Renewable Energy",
    category: "Agriculture",
    summary:
      "A scheme that helps farmers install solar pumps and grid-connected solar power plants to secure irrigation and earn extra income.",
    benefit:
      "Subsidy on solar pump installation and the option to sell surplus solar power to the grid.",
    launched: "2019",
    beneficiaries: "Individual farmers, cooperatives and farmer groups",
    eligibility: [
      "Individual farmers and groups of farmers",
      "Farmer Producer Organisations and cooperatives",
      "Panchayats and water user associations in eligible areas",
    ],
    documents: [
      "Aadhaar Card",
      "Land ownership documents",
      "Bank account details",
      "Recent photograph",
    ],
    howToApply: [
      "Apply through your state nodal agency or the PM-KUSUM portal",
      "Submit land and bank details with the application",
      "Pay your share of the cost after approval",
      "Get the solar pump or plant installed by an empanelled vendor",
    ],
    officialUrl: "https://pmkusum.mnre.gov.in",
    faqs: [
      {
        q: "How much subsidy is available under PM-KUSUM?",
        a: "Central and state subsidies together cover a major share of the cost of a solar pump, with the farmer paying only a small portion.",
      },
    ],
  },
  {
    slug: "janani-suraksha-yojana",
    name: "Janani Suraksha Yojana",
    shortName: "JSY",
    ministry: "Ministry of Health & Family Welfare",
    category: "Health",
    summary:
      "A safe-motherhood scheme under the National Health Mission that promotes institutional delivery to reduce maternal and infant mortality.",
    benefit:
      "Cash assistance to pregnant women for delivering in a government or accredited health facility.",
    launched: "2005",
    beneficiaries: "Pregnant women, with focus on low-income and rural mothers",
    eligibility: [
      "Pregnant women opting for institutional delivery",
      "Priority to women from low-income households",
      "Cash benefit varies by rural or urban area and state category",
    ],
    documents: [
      "Aadhaar Card",
      "JSY or MCP (Mother and Child Protection) card",
      "Bank account details",
      "Proof of residence",
    ],
    howToApply: [
      "Register the pregnancy at the nearest health centre or with an ASHA worker",
      "Complete antenatal check-ups as advised",
      "Deliver at a government or accredited private facility",
      "Receive the cash benefit directly in your bank account",
    ],
    officialUrl: "https://nhm.gov.in",
    faqs: [
      {
        q: "Who helps a beneficiary access JSY?",
        a: "An ASHA worker acts as the link, helping the mother register, attend check-ups and reach the facility for delivery.",
      },
    ],
  },
  {
    slug: "mission-indradhanush",
    name: "Mission Indradhanush",
    shortName: "MI",
    ministry: "Ministry of Health & Family Welfare",
    category: "Health",
    summary:
      "A nationwide immunisation drive to fully vaccinate children and pregnant women against preventable diseases.",
    benefit:
      "Free vaccination against several life-threatening diseases for children and expecting mothers.",
    launched: "2014",
    beneficiaries: "Children up to 2 years and pregnant women",
    eligibility: [
      "Children up to two years of age, especially those who missed routine doses",
      "Pregnant women due for tetanus and other recommended vaccines",
      "Focus on under-vaccinated and hard-to-reach areas",
    ],
    documents: [
      "Mother and Child Protection card",
      "Aadhaar Card of the child or parent (if available)",
    ],
    howToApply: [
      "Visit the nearest health centre, anganwadi or immunisation session site",
      "Carry the Mother and Child Protection card",
      "Get the due vaccines administered free of cost",
      "Note the next vaccination date on the card",
    ],
    officialUrl: "https://nhm.gov.in",
    faqs: [
      {
        q: "Do I need to pay for vaccines under Mission Indradhanush?",
        a: "No, all vaccines provided under the programme are free at government health facilities and immunisation sites.",
      },
    ],
  },
  {
    slug: "pradhan-mantri-national-dialysis-programme",
    name: "Pradhan Mantri National Dialysis Programme",
    shortName: "PMNDP",
    ministry: "Ministry of Health & Family Welfare",
    category: "Health",
    summary:
      "A programme that provides free dialysis services to poor patients with chronic kidney disease at district hospitals.",
    benefit:
      "Free haemodialysis sessions for eligible patients, reducing the heavy out-of-pocket cost of treatment.",
    launched: "2016",
    beneficiaries: "Patients with chronic kidney disease needing dialysis",
    eligibility: [
      "Patient diagnosed with chronic kidney disease requiring dialysis",
      "Priority to economically weaker and BPL patients",
      "Referred or treated at a participating district hospital",
    ],
    documents: [
      "Aadhaar Card",
      "Doctor's prescription or diagnosis report",
      "BPL or income proof where required",
    ],
    howToApply: [
      "Visit the dialysis unit at your district hospital",
      "Submit the diagnosis report and identity proof",
      "Complete the registration for free dialysis",
      "Attend the scheduled dialysis sessions",
    ],
    officialUrl: "https://nhm.gov.in",
    faqs: [
      {
        q: "Is dialysis completely free under PMNDP?",
        a: "Eligible patients receive free haemodialysis sessions at participating district hospitals under the National Health Mission.",
      },
    ],
  },
  {
    slug: "pradhan-mantri-bhartiya-janaushadhi-pariyojana",
    name: "Pradhan Mantri Bhartiya Janaushadhi Pariyojana",
    shortName: "PMBJP",
    ministry: "Ministry of Chemicals & Fertilizers",
    category: "Health",
    summary:
      "A scheme that makes quality generic medicines available at affordable prices through dedicated Janaushadhi Kendras across the country.",
    benefit:
      "Quality generic medicines at a fraction of branded prices, lowering the cost of treatment for everyone.",
    launched: "2008",
    beneficiaries: "All citizens, especially those on regular medication",
    eligibility: [
      "Open to every citizen buying medicines — no eligibility restriction",
      "Entrepreneurs and pharmacists can also apply to open a Janaushadhi Kendra",
    ],
    documents: [
      "Doctor's prescription for purchasing medicines",
      "For opening a Kendra: Aadhaar, pharmacist licence and premises proof",
    ],
    howToApply: [
      "Locate the nearest Janaushadhi Kendra using the official portal or app",
      "Carry your doctor's prescription",
      "Buy the prescribed generic medicines at the subsidised price",
    ],
    officialUrl: "https://janaushadhi.gov.in",
    faqs: [
      {
        q: "Are generic medicines at Janaushadhi Kendras good quality?",
        a: "Yes, the medicines sold are required to meet prescribed quality standards and are far cheaper than equivalent branded versions.",
      },
    ],
  },
  {
    slug: "rashtriya-bal-swasthya-karyakram",
    name: "Rashtriya Bal Swasthya Karyakram",
    shortName: "RBSK",
    ministry: "Ministry of Health & Family Welfare",
    category: "Health",
    summary:
      "A child health screening and early intervention programme that detects and treats defects, diseases, deficiencies and developmental delays in children.",
    benefit:
      "Free screening and treatment, including referral and surgery support, for children with identified health conditions.",
    launched: "2013",
    beneficiaries: "Children from birth to 18 years",
    eligibility: [
      "Children aged 0 to 6 years at anganwadi centres",
      "Children enrolled in government and government-aided schools up to 18 years",
      "Newborns screened at health facilities",
    ],
    documents: [
      "Mother and Child Protection card or school enrolment proof",
      "Aadhaar Card of the child (if available)",
    ],
    howToApply: [
      "Children are screened at anganwadis, schools and health facilities by mobile health teams",
      "Identified cases are referred to a District Early Intervention Centre",
      "Further diagnosis and treatment are provided free of cost",
    ],
    officialUrl: "https://nhm.gov.in",
    faqs: [
      {
        q: "What does RBSK screen children for?",
        a: "It screens for the four Ds — defects at birth, diseases, deficiencies and developmental delays including disability.",
      },
    ],
  },
  {
    slug: "pradhan-mantri-ujjwala-yojana",
    name: "Pradhan Mantri Ujjwala Yojana",
    shortName: "PMUY",
    ministry: "Ministry of Petroleum & Natural Gas",
    category: "Women & Child",
    summary:
      "Provides free LPG connections to women from low-income households, replacing smoky traditional fuels with clean cooking gas and protecting their health.",
    benefit:
      "A free LPG connection with financial support for the first refill and stove.",
    launched: "2016",
    beneficiaries: "Adult women from eligible low-income households",
    eligibility: [
      "Adult woman belonging to an eligible poor household",
      "No existing LPG connection in the household",
      "Listed in SECC or specified beneficiary categories",
    ],
    documents: [
      "Aadhaar Card",
      "Ration card or proof of poor household",
      "Bank account linked with Aadhaar",
      "Recent photograph",
    ],
    howToApply: [
      "Visit the nearest LPG distributor or apply on the official portal",
      "Submit the KYC form with documents",
      "Complete verification by the distributor",
      "Receive your free LPG connection",
    ],
    officialUrl: "https://www.pmuy.gov.in",
    faqs: [
      {
        q: "Who can apply for an Ujjwala connection?",
        a: "An adult woman from an eligible low-income household without an existing LPG connection can apply.",
      },
    ],
  },
  {
    slug: "swachh-bharat-mission",
    name: "Swachh Bharat Mission",
    shortName: "SBM",
    ministry: "Ministry of Jal Shakti / Housing & Urban Affairs",
    category: "Health",
    summary:
      "A national cleanliness mission to eliminate open defecation and improve sanitation by supporting household and community toilets, plus solid waste management.",
    benefit:
      "Financial incentive to build a household toilet and access to improved sanitation.",
    launched: "2014",
    beneficiaries: "Households without access to a toilet",
    eligibility: [
      "Household without a functional toilet",
      "Priority to eligible rural and urban poor families",
      "Beneficiary identified as per state guidelines",
    ],
    documents: [
      "Aadhaar Card",
      "Bank account details",
      "Proof of residence",
    ],
    howToApply: [
      "Apply through your gram panchayat or urban local body",
      "Submit identity and bank details",
      "Construct the toilet as per approved design",
      "Receive the incentive after verification",
    ],
    officialUrl: "https://swachhbharatmission.gov.in",
    faqs: [
      {
        q: "What support does SBM provide for toilets?",
        a: "Eligible households receive a financial incentive to construct an individual household latrine after verification.",
      },
    ],
  },
  {
    slug: "mahatma-gandhi-nrega",
    name: "Mahatma Gandhi National Rural Employment Guarantee Act",
    shortName: "MGNREGA",
    ministry: "Ministry of Rural Development",
    category: "Employment",
    summary:
      "Guarantees up to 100 days of paid wage employment in a financial year to every rural household whose adult members volunteer for unskilled manual work.",
    benefit:
      "Guaranteed wage employment of up to 100 days a year per rural household.",
    launched: "2005",
    beneficiaries: "Adult members of rural households",
    eligibility: [
      "Adult member of a rural household willing to do unskilled manual work",
      "Resident of the village where work is sought",
      "Registered for a job card with the gram panchayat",
    ],
    documents: [
      "Aadhaar Card",
      "Proof of residence",
      "Passport-size photographs",
      "Bank or post office account details",
    ],
    howToApply: [
      "Register your household at the gram panchayat",
      "Obtain the MGNREGA job card",
      "Submit a written application for work",
      "Receive work within 15 days or unemployment allowance",
    ],
    officialUrl: "https://nrega.nic.in",
    faqs: [
      {
        q: "How many days of work does MGNREGA guarantee?",
        a: "It guarantees up to 100 days of wage employment per rural household in a financial year.",
      },
    ],
  },
  {
    slug: "pradhan-mantri-mudra-yojana",
    name: "Pradhan Mantri Mudra Yojana",
    shortName: "PMMY",
    ministry: "Ministry of Finance",
    category: "Financial Inclusion",
    summary:
      "Offers collateral-free loans to small and micro enterprises and self-employed individuals through banks and NBFCs to fund and grow their businesses.",
    benefit:
      "Collateral-free business loans under the Shishu, Kishore and Tarun categories.",
    launched: "2015",
    beneficiaries: "Non-corporate, non-farm micro and small enterprises",
    eligibility: [
      "Indian citizen running or starting a small non-farm business",
      "Requires funds for a viable income-generating activity",
      "Not a defaulter with any bank or financial institution",
    ],
    documents: [
      "Aadhaar Card and PAN Card",
      "Business plan or proof of activity",
      "Bank account details",
      "Recent photographs",
    ],
    howToApply: [
      "Approach a bank, NBFC or apply via the Udyamimitra portal",
      "Submit the business plan and KYC documents",
      "Choose the loan category as per your need",
      "Receive the sanctioned amount after appraisal",
    ],
    officialUrl: "https://www.mudra.org.in",
    faqs: [
      {
        q: "What are the loan categories under Mudra?",
        a: "Loans are classified as Shishu, Kishore and Tarun based on the financing need and stage of the business.",
      },
    ],
  },
  {
    slug: "beti-bachao-beti-padhao",
    name: "Beti Bachao Beti Padhao",
    shortName: "BBBP",
    ministry: "Ministry of Women & Child Development",
    category: "Women & Child",
    summary:
      "A national campaign to prevent gender-biased sex selection and ensure the survival, protection and education of the girl child through awareness and services.",
    benefit:
      "Awareness, protection and education support to improve the lives of girl children.",
    launched: "2015",
    beneficiaries: "Girl children and their families",
    eligibility: [
      "Girl children and their families across the country",
      "Implemented through districts with focus on improving the child sex ratio",
    ],
    documents: [
      "Aadhaar Card of the girl child",
      "Birth certificate",
      "Proof of residence",
    ],
    howToApply: [
      "Engage with district programmes via anganwadi or local authorities",
      "Link the girl child to schemes like Sukanya Samriddhi for savings",
      "Ensure school enrolment and continued education",
    ],
    officialUrl: "https://wcd.nic.in",
    faqs: [
      {
        q: "Is Beti Bachao Beti Padhao a cash scheme?",
        a: "It is primarily an awareness and convergence initiative; financial benefits come through linked schemes such as Sukanya Samriddhi Yojana.",
      },
    ],
  },
  {
    slug: "pm-scholarship-scheme",
    name: "Prime Minister's Scholarship Scheme",
    shortName: "PMSS",
    ministry: "Department of Ex-Servicemen Welfare, Ministry of Defence",
    category: "Education",
    summary:
      "Provides scholarships to the wards and widows of ex-servicemen and ex-coast guard personnel to pursue professional and technical higher education.",
    benefit:
      "Annual scholarship to support professional and technical degree courses.",
    launched: "2006",
    beneficiaries: "Wards and widows of ex-servicemen and ex-coast guard personnel",
    eligibility: [
      "Ward or widow of an ex-serviceman or ex-coast guard personnel",
      "Admitted to a recognised professional or technical course",
      "Meets the minimum marks criteria in the qualifying exam",
    ],
    documents: [
      "Aadhaar Card",
      "Ex-servicemen identity proof",
      "Marksheet and admission proof",
      "Bank account details",
    ],
    howToApply: [
      "Register on the National Scholarship Portal",
      "Select the Prime Minister's Scholarship Scheme",
      "Upload eligibility and academic documents",
      "Submit the application before the deadline",
    ],
    officialUrl: "https://ksb.gov.in",
    faqs: [
      {
        q: "Who is eligible for the PM Scholarship Scheme?",
        a: "Wards and widows of ex-servicemen and ex-coast guard personnel pursuing recognised professional or technical courses can apply.",
      },
    ],
  },
  {
    slug: "pradhan-mantri-vaya-vandana-yojana",
    name: "Pradhan Mantri Vaya Vandana Yojana",
    shortName: "PMVVY",
    ministry: "Ministry of Finance (via LIC)",
    category: "Pension",
    summary:
      "A pension scheme for senior citizens offering a guaranteed regular income through assured returns on a one-time investment for a fixed term.",
    benefit:
      "Assured pension income for senior citizens over the policy term.",
    launched: "2017",
    beneficiaries: "Senior citizens aged 60 and above",
    eligibility: [
      "Indian citizen aged 60 years and above",
      "Able to make the one-time purchase price investment",
      "Within the maximum investment limit per senior citizen",
    ],
    documents: [
      "Aadhaar Card",
      "Age proof",
      "Bank account details",
      "PAN Card",
    ],
    howToApply: [
      "Visit an LIC branch or the official LIC portal",
      "Choose the pension payout frequency",
      "Pay the one-time purchase price",
      "Start receiving the assured pension",
    ],
    officialUrl: "https://licindia.in",
    faqs: [
      {
        q: "Who can buy PMVVY?",
        a: "Any Indian senior citizen aged 60 and above can purchase the scheme, subject to the maximum investment limit.",
      },
    ],
  },
  {
    slug: "pm-svanidhi",
    name: "PM Street Vendor's AtmaNirbhar Nidhi",
    shortName: "PM SVANidhi",
    ministry: "Ministry of Housing & Urban Affairs",
    category: "Employment",
    summary:
      "Gives street vendors affordable working-capital loans to restart and grow their businesses, with incentives for repayment and digital transactions.",
    benefit:
      "Collateral-free working-capital loan with interest subsidy and cashback on digital payments.",
    launched: "2020",
    beneficiaries: "Urban street vendors",
    eligibility: [
      "Street vendor with a certificate of vending or identity card",
      "Vendors identified in the survey by the urban local body",
      "Vendors who began vending before the cut-off date as notified",
    ],
    documents: [
      "Aadhaar Card",
      "Certificate of vending or vendor ID",
      "Bank account details",
    ],
    howToApply: [
      "Apply via the PM SVANidhi portal, a bank or a CSC",
      "Submit your vendor identity and KYC documents",
      "Receive the working-capital loan after approval",
      "Repay on time to access higher loan limits",
    ],
    officialUrl: "https://pmsvanidhi.mohua.gov.in",
    faqs: [
      {
        q: "What loan does PM SVANidhi offer?",
        a: "It offers a collateral-free working-capital loan that increases in steps as vendors repay on time.",
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
