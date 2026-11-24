import Link from "next/link";
import { Home, Briefcase, GraduationCap, Car, Gem, Store, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compare Loan Interest Rates 2025 - Home, Personal, Education, Gold",
  description: "Compare loan interest rates from SBI, HDFC, ICICI, Axis and other banks. Find lowest rates for home loan, personal loan, education loan, gold loan and car loan.",
};

const loanTypes = [
  { title: "Home Loan", rate: "8.35% - 9.65%", desc: "Purchase, construction, renovation or plot purchase. LTV up to 90%. Tenure up to 30 years.", icon: Home, href: "/loans/home-loan", banks: "SBI, HDFC, ICICI, LIC HFL, Bank of Baroda" },
  { title: "Personal Loan", rate: "10.5% - 24%", desc: "Unsecured loan for any personal need. No collateral required. Quick disbursement in 24-48 hours.", icon: Briefcase, href: "/loans/personal-loan", banks: "HDFC, ICICI, Axis, Kotak, Bajaj Finserv" },
  { title: "Education Loan", rate: "7.5% - 13.5%", desc: "Study in India or abroad. Covers tuition, living, travel expenses. Moratorium during study period.", icon: GraduationCap, href: "/loans/education-loan", banks: "SBI, Bank of Baroda, Canara Bank, HDFC Credila" },
  { title: "Gold Loan", rate: "7.0% - 17%", desc: "Secured against gold jewellery. Instant disbursement. Flexible repayment options including bullet payment.", icon: Gem, href: "/loans/gold-loan", banks: "Muthoot Finance, Manappuram, SBI, HDFC, IIFL" },
  { title: "Car Loan", rate: "8.7% - 14%", desc: "New car and used car financing. Up to 100% on-road funding for new cars. Tenure 1-7 years.", icon: Car, href: "/loans/car-loan", banks: "SBI, HDFC, ICICI, Axis, Kotak Mahindra" },
  { title: "Business Loan", rate: "14% - 30%", desc: "MSME loans, working capital, machinery purchase. Collateral-free up to Rs 50 lakh under CGTMSE.", icon: Store, href: "/loans/business-loan", banks: "SBI, ICICI, HDFC, Kotak, Lendingkart, Indifi" },
];

export default function LoansPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <nav className="text-sm text-gray-500 mb-3"><Link href="/" className="hover:text-blue-700">Home</Link><span className="mx-2">/</span><span className="text-gray-900 font-medium">Loans</span></nav>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Compare Loan Interest Rates 2025</h1>
          <p className="text-gray-600 text-lg max-w-2xl">Find the lowest interest rates from top Indian banks. Compare EMI, processing fees, eligibility and apply online.</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-5">
          {loanTypes.map((loan) => (
            <Link key={loan.href} href={loan.href} className="group block bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-blue-200 transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors">
                  <loan.icon className="w-7 h-7 text-blue-700" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">{loan.title}</h2>
                    <span className="text-lg font-bold text-green-700 bg-green-50 px-3 py-1 rounded-lg">{loan.rate}</span>
                  </div>
                  <p className="text-gray-600 mt-1">{loan.desc}</p>
                  <p className="text-xs text-gray-500 mt-2">Available at: {loan.banks}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-700 flex-shrink-0 hidden sm:block" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
