import Link from "next/link";
import type { Metadata } from "next";
import AdUnit from "@/components/AdUnit";

export const metadata: Metadata = {
  title: "Document Guides - PAN, Passport, Aadhaar & More",
  description: "Step-by-step guides for applying PAN Card, Passport, Driving Licence, Aadhaar, Voter ID, Income Certificate and more. Processing time, fees and status check.",
};

const documents = [
  { title: "PAN Card", processingTime: "7-15 days", fee: "Rs 107", status: "Available Online", slug: "pan-card", description: "Apply for new PAN or corrections through NSDL/UTIITSL portal. Required for tax filing and financial transactions." },
  { title: "Passport", processingTime: "30-45 days", fee: "Rs 1,500", status: "Available Online", slug: "passport", description: "Apply for fresh passport, renewal or re-issue. Normal and Tatkal processing available through Passport Seva portal." },
  { title: "Driving Licence", processingTime: "7-30 days", fee: "Rs 200-1,000", status: "Available Online", slug: "driving-licence", description: "Apply for learner licence and permanent driving licence through Parivahan portal. Online slot booking for test." },
  { title: "Aadhaar Card", processingTime: "15-90 days", fee: "Free / Rs 50", status: "Available Online", slug: "aadhaar", description: "Enrolment, update or correction in Aadhaar details. Download e-Aadhaar, check status, and book appointment online." },
  { title: "Voter ID (EPIC)", processingTime: "15-30 days", fee: "Free", status: "Available Online", slug: "voter-id", description: "Register as voter, apply for new voter ID card, corrections or transfer of constituency through NVSP portal." },
  { title: "Income Certificate", processingTime: "7-15 days", fee: "Rs 10-50", status: "Varies by State", slug: "income-certificate", description: "Apply through state e-District portal or Tehsil office. Required for scholarships, government schemes and fee concessions." },
  { title: "Caste Certificate", processingTime: "15-30 days", fee: "Rs 10-50", status: "Varies by State", slug: "caste-certificate", description: "SC/ST/OBC caste certificate for reservation benefits. Apply through e-District portal with required supporting documents." },
  { title: "Domicile Certificate", processingTime: "7-21 days", fee: "Rs 10-50", status: "Varies by State", slug: "domicile-certificate", description: "Proof of residence in a state. Required for state government jobs, educational admissions and state-specific schemes." },
];

export default function DocumentsPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="text-sm text-gray-500 mb-4">
          <Link href="/" className="hover:text-blue-700">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">Documents</span>
        </nav>

        <h1 className="text-3xl font-bold text-gray-900 mb-4">Document Application Guides</h1>
        <p className="text-gray-600 text-lg mb-8 max-w-3xl">
          Step-by-step guides for applying, renewing, and correcting important documents in India. Processing times, fees, and required documents explained.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {documents.slice(0, 4).map((doc) => (
            <Link key={doc.slug} href={`/documents/${doc.slug}`} className="group bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-blue-200 transition-all">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-medium text-green-700 bg-green-50 px-2 py-1 rounded">{doc.status}</span>
              </div>
              <h2 className="text-lg font-semibold text-gray-900 group-hover:text-blue-700 transition-colors mb-2">{doc.title}</h2>
              <p className="text-sm text-gray-600 mb-4">{doc.description}</p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Processing: {doc.processingTime}</span>
                <span className="text-gray-500">Fee: {doc.fee}</span>
              </div>
            </Link>
          ))}
        </div>

        <AdUnit />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
          {documents.slice(4).map((doc) => (
            <Link key={doc.slug} href={`/documents/${doc.slug}`} className="group bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-blue-200 transition-all">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-medium text-green-700 bg-green-50 px-2 py-1 rounded">{doc.status}</span>
              </div>
              <h2 className="text-lg font-semibold text-gray-900 group-hover:text-blue-700 transition-colors mb-2">{doc.title}</h2>
              <p className="text-sm text-gray-600 mb-4">{doc.description}</p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Processing: {doc.processingTime}</span>
                <span className="text-gray-500">Fee: {doc.fee}</span>
              </div>
            </Link>
          ))}
        </div>

        <AdUnit />
      </div>
    </div>
  );
}
