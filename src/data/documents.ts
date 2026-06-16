export type DocumentGuide = {
  slug: string;
  name: string;
  authority: string;
  summary: string;
  whoNeeds: string;
  processingTime: string;
  requiredDocuments: string[];
  steps: string[];
  officialUrl: string;
  faqs: { q: string; a: string }[];
};

export const documents: DocumentGuide[] = [
  {
    slug: "pan-card",
    name: "PAN Card",
    authority: "Income Tax Department",
    summary:
      "The Permanent Account Number is a ten-character alphanumeric identity used for all financial and tax-related transactions in India.",
    whoNeeds:
      "Anyone filing income tax, opening certain bank accounts, or making high-value financial transactions.",
    processingTime: "Typically 15 to 20 working days for physical card; e-PAN faster",
    requiredDocuments: [
      "Proof of identity (Aadhaar, Voter ID or Passport)",
      "Proof of address",
      "Proof of date of birth",
      "Recent passport-size photograph",
    ],
    steps: [
      "Visit the NSDL or UTIITSL PAN services portal",
      "Select Form 49A for Indian citizens",
      "Fill personal details and upload documents",
      "Pay the processing fee and complete Aadhaar e-KYC",
      "Receive acknowledgement and track the application",
    ],
    officialUrl: "https://www.onlineservices.nsdl.com",
    faqs: [
      {
        q: "Can I get an instant PAN?",
        a: "Yes, an instant e-PAN can be generated free of cost using Aadhaar-based e-KYC on the Income Tax e-filing portal.",
      },
    ],
  },
  {
    slug: "passport",
    name: "Passport",
    authority: "Ministry of External Affairs",
    summary:
      "An official travel document issued to Indian citizens that certifies identity and nationality for international travel.",
    whoNeeds: "Indian citizens travelling abroad for work, study, tourism or migration.",
    processingTime: "Normal: a few weeks; Tatkal: expedited",
    requiredDocuments: [
      "Proof of present address",
      "Proof of date of birth",
      "Aadhaar Card",
      "Identity proof",
    ],
    steps: [
      "Register and log in to the Passport Seva portal",
      "Fill the passport application form online",
      "Pay the fee and book an appointment",
      "Visit the Passport Seva Kendra with original documents",
      "Complete police verification as advised",
    ],
    officialUrl: "https://www.passportindia.gov.in",
    faqs: [
      {
        q: "What is Tatkal passport?",
        a: "Tatkal is an expedited scheme for faster passport issuance against a higher fee, subject to eligibility.",
      },
    ],
  },
  {
    slug: "income-certificate",
    name: "Income Certificate",
    authority: "State Revenue Department",
    summary:
      "An official document certifying the annual income of a family, required for scholarships, reservations and welfare schemes.",
    whoNeeds:
      "Students seeking scholarships, applicants for income-based schemes and reservation benefits.",
    processingTime: "Usually 7 to 15 working days depending on the state",
    requiredDocuments: [
      "Aadhaar Card",
      "Ration card",
      "Salary slip or income proof",
      "Self-declaration form",
    ],
    steps: [
      "Visit your state e-District or revenue services portal",
      "Apply for the income certificate service",
      "Fill family income details and upload proof",
      "Submit and note the application reference number",
      "Download the digitally signed certificate once approved",
    ],
    officialUrl: "https://services.india.gov.in",
    faqs: [
      {
        q: "How long is an income certificate valid?",
        a: "Most states issue income certificates valid for one financial year, after which renewal is required.",
      },
    ],
  },
  {
    slug: "caste-certificate",
    name: "Caste Certificate",
    authority: "State Revenue Department",
    summary:
      "A legal document certifying that a person belongs to a particular caste recognised under SC, ST or OBC categories.",
    whoNeeds:
      "Applicants seeking reservation benefits in education, employment and welfare schemes.",
    processingTime: "Usually 15 to 30 working days depending on verification",
    requiredDocuments: [
      "Aadhaar Card",
      "Proof of residence",
      "Family caste proof or parental certificate",
      "Self-declaration",
    ],
    steps: [
      "Visit the state e-District portal",
      "Select the caste certificate application service",
      "Fill details and upload supporting documents",
      "Submit for verification by the revenue officer",
      "Download the certificate after approval",
    ],
    officialUrl: "https://services.india.gov.in",
    faqs: [
      {
        q: "Is the caste certificate valid across states?",
        a: "Caste certificates are issued state-wise; benefits may vary, so confirm acceptance with the concerned authority.",
      },
    ],
  },
  {
    slug: "driving-licence",
    name: "Driving Licence",
    authority: "Ministry of Road Transport & Highways",
    summary:
      "An official document authorising an individual to drive a motor vehicle on public roads in India.",
    whoNeeds: "Anyone who wishes to legally drive a motor vehicle in India.",
    processingTime: "Learner's licence quickly; permanent after driving test",
    requiredDocuments: [
      "Aadhaar Card",
      "Age proof",
      "Address proof",
      "Passport-size photographs",
      "Learner's licence (for permanent DL)",
    ],
    steps: [
      "Visit the Parivahan Sarathi portal",
      "Apply for a learner's licence and clear the online test",
      "Practice and book a slot for the driving test",
      "Appear for the driving test at the RTO",
      "Receive the permanent driving licence on passing",
    ],
    officialUrl: "https://parivahan.gov.in",
    faqs: [
      {
        q: "Do I need a learner's licence first?",
        a: "Yes, you must hold a valid learner's licence for the prescribed period before applying for a permanent driving licence.",
      },
    ],
  },
  {
    slug: "aadhaar-card",
    name: "Aadhaar Card",
    authority: "Unique Identification Authority of India",
    summary:
      "A 12-digit unique identity number based on biometric and demographic data, serving as proof of identity and address.",
    whoNeeds: "Every resident of India for identity, KYC and welfare delivery.",
    processingTime: "Enrolment update reflects within a few days",
    requiredDocuments: [
      "Proof of identity",
      "Proof of address",
      "Proof of date of birth",
    ],
    steps: [
      "Locate the nearest Aadhaar enrolment centre",
      "Fill the enrolment form and provide documents",
      "Complete biometric capture (fingerprints, iris, photo)",
      "Collect the acknowledgement slip with the enrolment ID",
      "Download the e-Aadhaar once generated",
    ],
    officialUrl: "https://uidai.gov.in",
    faqs: [
      {
        q: "Is updating Aadhaar mobile number free?",
        a: "Biometric and mobile updates carry a nominal fee at enrolment centres; some online demographic updates may be free.",
      },
    ],
  },
];

export function getDocumentBySlug(slug: string): DocumentGuide | undefined {
  return documents.find((d) => d.slug === slug);
}
