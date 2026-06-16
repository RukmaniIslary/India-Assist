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
      "The ten-character code you'll need for pretty much anything money-related — filing taxes, opening accounts, big transactions. If you don't have one yet, it's quicker to get than most people think.",
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
  {
    slug: "trade-license",
    name: "Trade License",
    authority: "Municipal Corporation / Local Body",
    summary:
      "A trade license is a mandatory permission from the local municipal authority that lets you legally operate a shop, business or commercial establishment within a city or town.",
    whoNeeds:
      "Anyone running a shop, restaurant, hotel, factory, clinic, salon, coaching centre, warehouse, or any commercial establishment — including home-based businesses in many states.",
    processingTime: "Typically 7 to 30 working days depending on the municipal body and business type",
    requiredDocuments: [
      "Identity proof of the owner (Aadhaar Card, PAN Card)",
      "Address proof of the business premises",
      "Proof of possession of the premises (rent agreement or ownership deed)",
      "Passport-size photograph of the applicant",
      "PAN Card of the business or proprietor",
      "Bank account details",
      "For food businesses: FSSAI registration or licence",
      "For certain trades: NOC from fire department or pollution control board",
    ],
    steps: [
      "Visit your municipal corporation or local body portal (most cities now have one)",
      "Register as a new user and select the Trade Licence application service",
      "Fill in business details: name, type of trade, premises address, area in sq. ft.",
      "Upload the required documents as specified by your municipality",
      "Pay the prescribed fee based on your business category and floor area",
      "Receive the acknowledgement number and await inspection if required",
      "Download or collect the Trade Licence Certificate once approved",
      "Renew every year — most trade licences are valid for one financial year",
    ],
    officialUrl: "https://services.india.gov.in",
    faqs: [
      {
        q: "Is a trade licence mandatory even for a small shop?",
        a: "Yes, in most states any commercial establishment requires a trade licence from the local municipal authority, regardless of size. Operating without one can result in fines or closure notices.",
      },
      {
        q: "What is the difference between a trade licence and a Shop & Establishment licence?",
        a: "A trade licence is issued by the municipal body for the type of trade or business activity. A Shop & Establishment Act registration is a state-level registration for the employer-employee relationship, working hours, and conditions at the premises. Most businesses need both.",
      },
      {
        q: "How often does a trade licence need to be renewed?",
        a: "Most trade licences are valid for one financial year and must be renewed annually before 31 March. Some cities now allow two or three year licences for certain categories.",
      },
      {
        q: "Can I get a trade licence for a home-based business?",
        a: "Many states and municipalities do allow trade licences for home-based businesses, though there may be restrictions on the type of trade, the area of the home used, and the number of employees. Check with your local municipal body for the specific rules.",
      },
    ],
  },
  {
    slug: "shop-and-establishment-registration",
    name: "Shop & Establishment Registration",
    authority: "State Labour Department",
    summary:
      "A state-level registration that regulates working hours, wages, holidays, and employment conditions at shops and commercial establishments — required for almost every business employing one or more workers.",
    whoNeeds:
      "All commercial establishments including shops, offices, hotels, restaurants, theatres, and other places of business.",
    processingTime: "Usually 7 to 15 working days; some states issue it instantly online",
    requiredDocuments: [
      "Identity proof of the owner (Aadhaar Card, PAN Card)",
      "Address proof of the establishment",
      "Proof of possession of premises",
      "List of employees with their details",
      "Bank account details",
      "Photograph of the establishment",
    ],
    steps: [
      "Visit your state labour department's online portal or Shram Suvidha portal",
      "Select the Shop and Establishment Act registration for your state",
      "Fill in details about the establishment: name, address, nature of business, number of employees",
      "Upload the required documents",
      "Pay the prescribed registration fee (varies by state and number of employees)",
      "Receive the registration certificate — display it prominently at the establishment",
      "Renew as required by your state's rules (frequency varies)",
    ],
    officialUrl: "https://shramsuvidha.gov.in",
    faqs: [
      {
        q: "Do I need Shop & Establishment registration if I work alone from home?",
        a: "If you have no employees and are a sole proprietor working alone, some states exempt you from this registration. However, as soon as you hire even one person, registration is mandatory in most states.",
      },
      {
        q: "What happens if I operate without this registration?",
        a: "Operating without a valid Shop & Establishment registration can attract fines and penalties from the state labour department.",
      },
    ],
  },
  {
    slug: "import-export-code",
    name: "Import Export Code (IEC)",
    authority: "Directorate General of Foreign Trade (DGFT), Ministry of Commerce",
    summary:
      "The Import Export Code is a ten-digit unique number issued by DGFT that is mandatory for any business or individual looking to import goods into India or export goods and services out of India. Without an IEC, customs clearance is not possible for commercial shipments. It is a one-time registration with no renewal requirement and is used across all import and export transactions, GST filings related to foreign trade, and bank transactions involving foreign currency.",
    whoNeeds:
      "Any business, firm, company, or individual who wants to import or export goods or services commercially. Even freelancers and consultants exporting services — such as software, design, or consulting — need an IEC if they receive foreign currency payments and want to claim benefits under export promotion schemes.",
    processingTime: "Usually 2 to 3 working days after successful online submission; in many cases within 24 hours",
    requiredDocuments: [
      "PAN Card of the applicant (individual or entity)",
      "Aadhaar Card or Voter ID or Passport of the proprietor, partner, or director",
      "Cancelled cheque or bank certificate confirming current bank account details",
      "Passport-size photograph",
      "Certificate of Incorporation (for companies) or Partnership Deed (for firms) or any proof of business existence",
      "Digital Signature Certificate (DSC) for company or LLP applications; not required for proprietorships",
    ],
    steps: [
      "Visit the DGFT portal and register as a new user with your PAN and mobile number",
      "Log in and select the IEC application (ANF 2A form)",
      "Enter details of the business, branches, directors or partners, and bank account",
      "Upload scanned copies of the required documents",
      "Pay the government fee of Rs. 500 online through the portal",
      "Submit the application and note the application reference number",
      "Track the status on the portal; the IEC is typically issued and downloadable within days",
      "The IEC is also visible and downloadable permanently from the DGFT portal anytime after issuance",
    ],
    officialUrl: "https://www.dgft.gov.in",
    faqs: [
      {
        q: "Is the IEC required for small exporters or freelancers?",
        a: "Yes, if you receive payment in foreign currency for goods or services exported commercially, an IEC is required. Freelancers exporting software or digital services also need one to claim SEIS or other export promotion benefits.",
      },
      {
        q: "Does an IEC need to be renewed?",
        a: "The IEC itself does not expire and does not need to be renewed. However, it must be updated if your business details change — address, bank account, directors, or PAN — through an amendment application on the DGFT portal.",
      },
      {
        q: "Can an individual get an IEC or is it only for companies?",
        a: "Both individuals and all types of business entities — proprietorships, partnerships, LLPs, companies, trusts, and societies — can apply for and hold an IEC.",
      },
      {
        q: "Is IEC linked to GST registration?",
        a: "Yes, DGFT has integrated IEC with the GSTIN system. When you export goods or services, the IEC and GSTIN are both used in shipping bills and export documentation. If your business is GST-registered, linking the GSTIN with your IEC profile on the DGFT portal is recommended.",
      },
    ],
  },
  {
    slug: "gst-registration",
    name: "GST Registration (GSTIN)",
    authority: "Goods and Services Tax Network (GSTN), Government of India",
    summary:
      "GST registration is mandatory for businesses whose annual aggregate turnover crosses the prescribed threshold — currently Rs. 40 lakh for goods suppliers and Rs. 20 lakh for service providers in most states, with lower thresholds for special category states. Once registered, the business receives a 15-digit GSTIN and can legally collect GST from customers, claim input tax credit on purchases, and file GST returns. Voluntary registration is also available for businesses below the threshold who want to trade with GST-registered buyers or claim input tax credit.",
    whoNeeds:
      "All businesses and individuals making taxable supply of goods or services exceeding the turnover threshold. Also mandatory for e-commerce sellers regardless of turnover, businesses engaged in inter-state supply, agents, input service distributors, and anyone required to pay tax under reverse charge. Exporters benefit greatly from GST registration as it enables IGST refunds and access to the LUT mechanism for zero-rated exports.",
    processingTime: "Typically 7 working days; Aadhaar-authenticated applications can be approved faster",
    requiredDocuments: [
      "PAN Card of the business or proprietor",
      "Aadhaar Card of the proprietor, partners, or directors",
      "Proof of business address — rent agreement, utility bill, or property tax receipt",
      "Bank account proof — cancelled cheque or bank statement",
      "Photograph of the proprietor or authorised signatory",
      "Certificate of Incorporation and MoA/AoA for companies",
      "Partnership deed for partnership firms",
      "Digital Signature Certificate (DSC) for companies and LLPs",
    ],
    steps: [
      "Visit the GST portal and click on Register Now under Taxpayers",
      "Enter your PAN and complete the OTP-based mobile and email verification",
      "Fill Part A to get a Temporary Reference Number (TRN)",
      "Log in with the TRN and complete Part B with full business details, partners or directors, and business activity",
      "Upload the required documents and submit the form",
      "Choose between Aadhaar authentication (faster approval) or office visit for verification",
      "Track the application using the ARN (Application Reference Number)",
      "Receive your GSTIN and registration certificate once approved",
      "Display the GST certificate at all your business premises as required by law",
    ],
    officialUrl: "https://www.gst.gov.in",
    faqs: [
      {
        q: "What is the turnover threshold for mandatory GST registration?",
        a: "For suppliers of goods, the threshold is Rs. 40 lakh (Rs. 20 lakh in special category states). For service providers, it is Rs. 20 lakh (Rs. 10 lakh in special category states). E-commerce sellers and certain other categories must register regardless of turnover.",
      },
      {
        q: "What is input tax credit and why does it matter?",
        a: "Input tax credit (ITC) allows a registered business to deduct the GST it has paid on its purchases and business expenses from the GST it collects from customers. This avoids double taxation and is a major financial benefit of GST registration even for smaller businesses.",
      },
      {
        q: "Can I cancel my GST registration if my turnover falls below the threshold?",
        a: "Yes, a voluntary cancellation of GST registration is possible by filing an application on the GST portal. The tax officer will verify before granting the cancellation.",
      },
      {
        q: "How many GST returns does a registered business file?",
        a: "Under the regular scheme, businesses file GSTR-1 (outward supplies), GSTR-3B (monthly summary), and an annual return. Small businesses under the QRMP scheme file quarterly returns with monthly payment. Composition dealers file quarterly returns.",
      },
    ],
  },
  {
    slug: "fssai-license",
    name: "FSSAI License (Food Business Registration)",
    authority: "Food Safety and Standards Authority of India (FSSAI)",
    summary:
      "An FSSAI license or registration is mandatory for every person or entity engaged in any food business in India — manufacturing, processing, storing, distributing, transporting, or selling food. FSSAI is the apex food regulatory body of India and its registration ensures that food businesses meet the prescribed standards for safety and quality. There are three levels: basic registration for very small operators, state licence for medium businesses, and central licence for large-scale manufacturers and importers.",
    whoNeeds:
      "Every food business operator (FBO) in India — restaurants, hotels, dhabas, cloud kitchens, home bakers, tiffin services, sweet shops, grocery stores selling packaged food, manufacturers, food importers, exporters, distributors, and transporters of food. Even a home cook who sells food commercially needs FSSAI registration.",
    processingTime: "Basic registration: 7 working days; State licence: 30 working days; Central licence: 60 working days",
    requiredDocuments: [
      "Identity proof of the FBO — Aadhaar, PAN or Voter ID",
      "Proof of address of the business premises",
      "List of food products to be manufactured, stored, or sold",
      "Photograph of the applicant",
      "Bank account details",
      "Partnership deed or Certificate of Incorporation (for non-proprietorship entities)",
      "NOC from municipality or panchayat (for manufacturing units in some states)",
      "Water test report (for manufacturers using bore water)",
      "For state and central licence: food safety management plan",
    ],
    steps: [
      "Determine the correct licence category — basic, state, or central — based on your annual turnover and business type",
      "Visit the FSSAI FoSCos portal and register as a food business operator",
      "Fill in the application with details of the business, premises, and food products",
      "Upload the required documents",
      "Pay the prescribed fee, which varies by licence category and validity period",
      "Submit the application and note the application ID",
      "An inspector may visit the premises for state and central licence applications",
      "Receive the FSSAI licence or registration certificate on approval",
      "Display the FSSAI number and certificate at the business premises and on all food packaging",
    ],
    officialUrl: "https://foscos.fssai.gov.in",
    faqs: [
      {
        q: "What happens if I run a food business without an FSSAI licence?",
        a: "Operating a food business without valid FSSAI registration or licence is a punishable offence under the Food Safety and Standards Act, 2006. Penalties can include fines and imprisonment. Food safety officers conduct regular inspections.",
      },
      {
        q: "Which FSSAI category applies to me?",
        a: "Basic registration applies to businesses with annual turnover below Rs. 12 lakh. State licence applies to businesses with turnover between Rs. 12 lakh and Rs. 20 crore. Central licence is for businesses with turnover above Rs. 20 crore, and all importers, exporters, and large manufacturers.",
      },
      {
        q: "How long is an FSSAI licence valid?",
        a: "FSSAI licences are issued for a period of 1 to 5 years, chosen at the time of application. A longer validity means fewer renewal cycles. It must be renewed before expiry to avoid penalties.",
      },
      {
        q: "Does a home baker or home food business need FSSAI registration?",
        a: "Yes. If you are selling food commercially — even from your home — you need at least a basic FSSAI registration. The turnover threshold applies: if you earn less than Rs. 12 lakh a year from food sales, you get basic registration.",
      },
    ],
  },
  {
    slug: "msme-udyam-registration",
    name: "MSME / Udyam Registration",
    authority: "Ministry of Micro, Small & Medium Enterprises",
    summary:
      "Udyam Registration is the official government recognition for Micro, Small, and Medium Enterprises in India. It replaced the earlier Udyog Aadhaar system and is a self-declaration based, fully online, free-of-cost process. A registered MSME gets access to government schemes, priority lending, lower interest rates, protection against delayed payments from buyers, tender preferences, and subsidies across several ministries. It is one of the most impactful and underused registrations for small business owners.",
    whoNeeds:
      "Any enterprise — manufacturing or service sector — that qualifies as Micro, Small, or Medium based on annual turnover and investment in plant and machinery or equipment. Micro: investment up to Rs. 1 crore and turnover up to Rs. 5 crore. Small: investment up to Rs. 10 crore and turnover up to Rs. 50 crore. Medium: investment up to Rs. 50 crore and turnover up to Rs. 250 crore.",
    processingTime: "Usually instant or within 1 working day — the registration is self-declared and automated",
    requiredDocuments: [
      "Aadhaar Card of the proprietor, managing partner, or authorised signatory",
      "PAN Card of the business (for partnerships, companies, LLPs, and cooperative societies)",
      "GSTIN if applicable",
      "Bank account details",
      "NIC code of the business activity (from the National Industrial Classification list)",
    ],
    steps: [
      "Visit the official Udyam Registration portal",
      "Enter the Aadhaar number of the applicant and validate with OTP",
      "For companies, LLPs, and other entities, PAN and GSTIN are also required",
      "Fill in business details: name, type, address, bank details, NIC activity code, and turnover",
      "Submit the self-declaration — no document upload is required",
      "Receive the Udyam Registration Number and Udyam Certificate instantly or within a day",
      "Download and save the certificate — it is permanently available on the portal",
    ],
    officialUrl: "https://udyamregistration.gov.in",
    faqs: [
      {
        q: "Is Udyam Registration free?",
        a: "Yes, completely free. The registration is self-declaration based and done entirely online at no cost. Beware of third-party websites charging a fee for this service — the official portal charges nothing.",
      },
      {
        q: "What are the main benefits of MSME registration?",
        a: "Registered MSMEs get priority lending under government schemes, interest subvention on loans, protection under the MSMED Act against delayed payments, preference in government tenders up to a certain value, and access to technology and skill development subsidies.",
      },
      {
        q: "Can a service business register as an MSME?",
        a: "Yes. Both manufacturing and service sector enterprises qualify for Udyam Registration based on the turnover and investment criteria.",
      },
      {
        q: "What happens if my business grows beyond the MSME limit?",
        a: "If your turnover or investment exceeds the medium enterprise limit, you would no longer qualify as an MSME. The Udyam certificate should be updated or surrendered accordingly.",
      },
    ],
  },
];

export function getDocumentBySlug(slug: string): DocumentGuide | undefined {
  return documents.find((d) => d.slug === slug);
}
