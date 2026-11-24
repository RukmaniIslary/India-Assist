import Link from "next/link";
import { Calculator, TrendingUp, Home, CreditCard, PiggyBank, IndianRupee, Car, GraduationCap, Briefcase, Percent, Landmark, Shield } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Finance Calculators 2025 - EMI, SIP, Loan, PPF, FD & More",
  description: "India's best free online calculators for EMI, SIP, home loan, PPF, FD, NPS, gratuity, loan eligibility, credit score and more. Plan your finances accurately.",
};

const calcs = [
  { title: "EMI Calculator", desc: "Calculate monthly EMI for any loan amount, rate, tenure", icon: Calculator, href: "/calculators/emi", color: "bg-blue-600", popular: true },
  { title: "SIP Calculator", desc: "Estimate mutual fund SIP returns with compounding", icon: TrendingUp, href: "/calculators/sip", color: "bg-green-600", popular: true },
  { title: "Home Loan EMI", desc: "Home loan EMI with bank rate comparison", icon: Home, href: "/calculators/home-loan-emi", color: "bg-amber-600", popular: true },
  { title: "PPF Calculator", desc: "Public Provident Fund maturity at 7.1% interest", icon: PiggyBank, href: "/calculators/ppf", color: "bg-teal-600", popular: true },
  { title: "FD Calculator", desc: "Fixed deposit interest and maturity amount", icon: IndianRupee, href: "/calculators/fd", color: "bg-violet-600", popular: true },
  { title: "Loan Eligibility", desc: "Check maximum loan amount based on your income", icon: CreditCard, href: "/calculators/loan-eligibility", color: "bg-rose-600", popular: true },
  { title: "Car Loan EMI", desc: "New and used car loan EMI calculator", icon: Car, href: "/calculators/car-loan-emi", color: "bg-indigo-600", popular: false },
  { title: "Education Loan EMI", desc: "Education loan repayment calculator", icon: GraduationCap, href: "/calculators/education-loan-emi", color: "bg-purple-600", popular: false },
  { title: "Personal Loan EMI", desc: "Personal loan EMI and interest calculator", icon: Briefcase, href: "/calculators/personal-loan-emi", color: "bg-orange-600", popular: false },
  { title: "NPS Calculator", desc: "National Pension System corpus estimation", icon: Shield, href: "/calculators/nps", color: "bg-cyan-600", popular: false },
  { title: "Gratuity Calculator", desc: "Calculate gratuity amount after 5+ years service", icon: Landmark, href: "/calculators/gratuity", color: "bg-emerald-600", popular: false },
  { title: "Simple Interest", desc: "Basic interest calculation on principal", icon: Percent, href: "/calculators/simple-interest", color: "bg-gray-600", popular: false },
  { title: "Compound Interest", desc: "Compound interest with different frequencies", icon: TrendingUp, href: "/calculators/compound-interest", color: "bg-sky-600", popular: false },
  { title: "Sukanya Samriddhi", desc: "SSY maturity calculator for girl child savings", icon: PiggyBank, href: "/calculators/sukanya-samriddhi", color: "bg-pink-600", popular: false },
  { title: "Lumpsum Calculator", desc: "One-time mutual fund investment returns", icon: IndianRupee, href: "/calculators/lumpsum", color: "bg-lime-600", popular: false },
  { title: "RD Calculator", desc: "Recurring deposit maturity amount", icon: PiggyBank, href: "/calculators/rd", color: "bg-fuchsia-600", popular: false },
];

export default function CalculatorsPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <nav className="text-sm text-gray-500 mb-3"><Link href="/" className="hover:text-blue-700">Home</Link><span className="mx-2">/</span><span className="text-gray-900 font-medium">Calculators</span></nav>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Finance Calculators</h1>
          <p className="text-gray-600 text-lg max-w-2xl">Free online tools to calculate EMI, SIP returns, loan eligibility, FD maturity and more. Accurate results for Indian financial products.</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-lg font-bold text-gray-900 mb-4">Popular</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {calcs.filter(c => c.popular).map((c) => (
            <Link key={c.href} href={c.href} className="group bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-blue-200 transition-all">
              <div className={`w-12 h-12 ${c.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform`}><c.icon className="w-6 h-6 text-white" /></div>
              <h3 className="font-semibold text-gray-900 text-lg group-hover:text-blue-700">{c.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{c.desc}</p>
            </Link>
          ))}
        </div>
        <h2 className="text-lg font-bold text-gray-900 mb-4">All Calculators</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {calcs.filter(c => !c.popular).map((c) => (
            <Link key={c.href} href={c.href} className="group bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md hover:border-blue-200 transition-all">
              <div className={`w-10 h-10 ${c.color} rounded-lg flex items-center justify-center mb-3 group-hover:scale-105 transition-transform`}><c.icon className="w-5 h-5 text-white" /></div>
              <h3 className="font-medium text-gray-900 group-hover:text-blue-700">{c.title}</h3>
              <p className="text-xs text-gray-600 mt-1">{c.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
