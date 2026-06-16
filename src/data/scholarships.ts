export type Scholarship = {
  slug: string;
  name: string;
  provider: string;
  level: "Pre-Matric" | "Post-Matric" | "Undergraduate" | "Postgraduate" | "All Levels";
  amount: string;
  summary: string;
  eligibility: string[];
  documents: string[];
  deadlineNote: string;
  officialUrl: string;
};

export const scholarships: Scholarship[] = [
  {
    slug: "post-matric-scholarship-sc",
    name: "Post-Matric Scholarship for SC Students",
    provider: "Ministry of Social Justice & Empowerment",
    level: "Post-Matric",
    amount: "Tuition + maintenance allowance",
    summary:
      "Financial support for Scheduled Caste students pursuing post-matriculation or post-secondary courses in recognised institutions.",
    eligibility: [
      "Student should belong to the Scheduled Caste category",
      "Studying at post-matriculation level in a recognised institution",
      "Family income within the prescribed annual limit",
    ],
    documents: [
      "Caste certificate",
      "Income certificate",
      "Previous marksheet",
      "Aadhaar and bank details",
    ],
    deadlineNote: "Applications usually open after the academic session begins.",
    officialUrl: "https://scholarships.gov.in",
  },
  {
    slug: "pre-matric-scholarship-minorities",
    name: "Pre-Matric Scholarship for Minorities",
    provider: "Ministry of Minority Affairs",
    level: "Pre-Matric",
    amount: "Admission, tuition and maintenance allowance",
    summary:
      "Support for students from notified minority communities studying in classes up to Class 10 to reduce dropout rates.",
    eligibility: [
      "Belong to a notified minority community",
      "Studying in Class 1 to Class 10",
      "Secured the minimum qualifying marks in the previous year",
      "Family income within the prescribed limit",
    ],
    documents: [
      "Minority community declaration",
      "Income certificate",
      "Previous marksheet",
      "Bank account details",
    ],
    deadlineNote: "Verify dates on the National Scholarship Portal each year.",
    officialUrl: "https://scholarships.gov.in",
  },
  {
    slug: "central-sector-scholarship",
    name: "Central Sector Scheme of Scholarship for College Students",
    provider: "Ministry of Education",
    level: "Undergraduate",
    amount: "Annual scholarship for top performers",
    summary:
      "Merit-based scholarship for meritorious students from low-income families pursuing higher education at the undergraduate level.",
    eligibility: [
      "Scored above the cut-off percentile in the Class 12 board examination",
      "Pursuing a regular degree course",
      "Family income within the prescribed annual limit",
      "Not availing any other scholarship",
    ],
    documents: [
      "Class 12 marksheet",
      "Income certificate",
      "Admission proof",
      "Bank account details",
    ],
    deadlineNote: "Renewed annually subject to maintaining required marks.",
    officialUrl: "https://scholarships.gov.in",
  },
  {
    slug: "pragati-scholarship-girls",
    name: "AICTE Pragati Scholarship for Girls",
    provider: "All India Council for Technical Education",
    level: "Undergraduate",
    amount: "Tuition reimbursement and incidental allowance",
    summary:
      "Encourages girl students to pursue technical education by providing financial assistance for tuition and study materials.",
    eligibility: [
      "Girl student admitted to an AICTE-approved technical institution",
      "Family income within the prescribed limit",
      "Maximum of two girls per family",
    ],
    documents: [
      "Admission proof",
      "Income certificate",
      "Tuition fee receipt",
      "Bank account details",
    ],
    deadlineNote: "Apply through the National Scholarship Portal.",
    officialUrl: "https://scholarships.gov.in",
  },
  {
    slug: "national-means-cum-merit-scholarship",
    name: "National Means-cum-Merit Scholarship",
    provider: "Ministry of Education",
    level: "Pre-Matric",
    amount: "Fixed scholarship per year",
    summary:
      "Awarded to meritorious students from economically weaker sections to reduce dropouts at the secondary stage.",
    eligibility: [
      "Studying in Class 9 in a government, local body or aided school",
      "Cleared the NMMS selection test",
      "Parental income within the prescribed limit",
    ],
    documents: [
      "NMMS qualifying proof",
      "Income certificate",
      "School bonafide",
      "Bank account details",
    ],
    deadlineNote: "Selection test conducted at the state level annually.",
    officialUrl: "https://scholarships.gov.in",
  },
  {
    slug: "pm-yasasvi-scholarship",
    name: "PM YASASVI Scholarship",
    provider: "Ministry of Social Justice & Empowerment",
    level: "All Levels",
    amount: "Scholarship for OBC, EBC and DNT students",
    summary:
      "A consolidated scholarship for Other Backward Classes, Economically Backward Classes and Denotified Tribe students.",
    eligibility: [
      "Belong to OBC, EBC or DNT category",
      "Cleared the YASASVI entrance test where applicable",
      "Family income within the prescribed limit",
    ],
    documents: [
      "Category certificate",
      "Income certificate",
      "Marksheet",
      "Bank account details",
    ],
    deadlineNote: "Entrance test and application dates announced yearly.",
    officialUrl: "https://yet.nta.ac.in",
  },
];

export function getScholarshipBySlug(slug: string): Scholarship | undefined {
  return scholarships.find((s) => s.slug === slug);
}
