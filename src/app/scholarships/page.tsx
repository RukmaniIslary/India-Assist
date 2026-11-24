import Link from "next/link";
import type { Metadata } from "next";
import AdUnit from "@/components/AdUnit";

export const metadata: Metadata = {
  title: "Scholarships 2025 - National & State Scholarships India",
  description: "Complete list of scholarships in India 2025. NSP, Post Matric SC/ST, AICTE Pragati, PM Scholarship, minority scholarships with eligibility and application process.",
};

const scholarships = [
  { title: "National Scholarship Portal (NSP)", amount: "Varies by scheme", category: "Central", deadline: "October - November", description: "Single-window portal for all central and state government scholarships. Pre-matric, post-matric, and merit-based schemes for all categories.", slug: "nsp" },
  { title: "Post Matric Scholarship for SC/ST", amount: "Full tuition + maintenance", category: "SC/ST", deadline: "September - November", description: "Covers tuition fees, maintenance allowance, book grant and other expenses for SC/ST students in post-matriculation courses.", slug: "post-matric-sc-st" },
  { title: "AICTE Pragati Scholarship", amount: "Rs 50,000 per year", category: "Women in Tech", deadline: "December", description: "For girl students admitted to AICTE-approved technical institutions in 1st year. Rs 50,000 per year for up to 4 years. 5,000 seats per year.", slug: "aicte-pragati" },
  { title: "PM Scholarship Scheme (PMSS)", amount: "Rs 3,000/month (boys), Rs 3,600/month (girls)", category: "Defence", deadline: "May - June", description: "For wards and widows of ex-servicemen, para-military forces, and police officials. For professional degree courses.", slug: "pm-scholarship" },
  { title: "Minority Community Scholarship", amount: "Up to Rs 25,000 per year", category: "Minority", deadline: "September - October", description: "Pre-matric and post-matric scholarships for students belonging to minority communities (Muslim, Christian, Sikh, Buddhist, Jain, Parsi).", slug: "minority-scholarship" },
  { title: "KVPY Fellowship", amount: "Rs 5,000-7,000/month", category: "Science", deadline: "July - August", description: "Kishore Vaigyanik Protsahan Yojana for students pursuing basic science courses. Monthly fellowship and annual contingency grant for research.", slug: "kvpy" },
  { title: "Central Sector Scheme (CSSS)", amount: "Rs 10,000-20,000 per year", category: "Merit", deadline: "October", description: "Merit-based scholarship for students scoring above 80th percentile in Class 12. For undergraduate and postgraduate studies.", slug: "central-sector" },
  { title: "INSPIRE Scholarship", amount: "Rs 80,000 per year", category: "Science", deadline: "Varies", description: "Innovation in Science Pursuit for Inspired Research. For top 1% students in Class 12 pursuing natural and basic sciences at BSc/BS level.", slug: "inspire" },
];

export default function ScholarshipsPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="text-sm text-gray-500 mb-4">
          <Link href="/" className="hover:text-blue-700">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">Scholarships</span>
        </nav>

        <h1 className="text-3xl font-bold text-gray-900 mb-4">Scholarships in India 2025</h1>
        <p className="text-gray-600 text-lg mb-8 max-w-3xl">
          Explore national and state scholarships for students at all levels. Find scholarships based on merit, category, income, and field of study.
        </p>

        <div className="space-y-5 mb-8">
          {scholarships.slice(0, 4).map((scholarship) => (
            <Link key={scholarship.slug} href={`/scholarships/${scholarship.slug}`} className="group block bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-blue-200 transition-all">
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-medium text-blue-700 bg-blue-50 px-2 py-1 rounded">{scholarship.category}</span>
                    <span className="text-xs text-gray-500">Deadline: {scholarship.deadline}</span>
                  </div>
                  <h2 className="text-lg font-semibold text-gray-900 group-hover:text-blue-700 transition-colors mb-1">{scholarship.title}</h2>
                  <p className="text-sm text-gray-600 mb-2">{scholarship.description}</p>
                  <p className="text-sm font-medium text-green-700">Amount: {scholarship.amount}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <AdUnit />

        <div className="space-y-5 mt-8">
          {scholarships.slice(4).map((scholarship) => (
            <Link key={scholarship.slug} href={`/scholarships/${scholarship.slug}`} className="group block bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-blue-200 transition-all">
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-medium text-blue-700 bg-blue-50 px-2 py-1 rounded">{scholarship.category}</span>
                    <span className="text-xs text-gray-500">Deadline: {scholarship.deadline}</span>
                  </div>
                  <h2 className="text-lg font-semibold text-gray-900 group-hover:text-blue-700 transition-colors mb-1">{scholarship.title}</h2>
                  <p className="text-sm text-gray-600 mb-2">{scholarship.description}</p>
                  <p className="text-sm font-medium text-green-700">Amount: {scholarship.amount}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <AdUnit />
      </div>
    </div>
  );
}
