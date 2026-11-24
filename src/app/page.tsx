import Link from "next/link";
import { Calculator, TrendingUp, Home, CreditCard, GraduationCap, Landmark, FileText, MapPin, ArrowRight, IndianRupee, Shield, PiggyBank } from "lucide-react";

const calculators = [
  { title: "EMI Calculator", desc: "Calculate monthly loan EMI for home, car, personal loans", href: "/calculators/emi", icon: Calculator, color: "bg-blue-600" },
  { title: "SIP Calculator", desc: "Plan mutual fund SIP returns with compounding", href: "/calculators/sip", icon: TrendingUp, color: "bg-green-600" },
  { title: "Home Loan EMI", desc: "Compare home loan rates from top banks", href: "/calculators/home-loan-emi", icon: Home, color: "bg-amber-600" },
  { title: "PPF Calculator", desc: "Public Provident Fund maturity with 7.1% rate", href: "/calculators/ppf", icon: PiggyBank, color: "bg-teal-600" },
  { title: "FD Calculator", desc: "Fixed deposit maturity amount and interest earned", href: "/calculators/fd", icon: IndianRupee, color: "bg-violet-600" },
  { title: "Loan Eligibility", desc: "Check how much loan you can get based on income", href: "/calculators/loan-eligibility", icon: CreditCard, color: "bg-rose-600" },
];

const loans = [
  { title: "Home Loan", rate: "8.35%", desc: "Compare rates from SBI, HDFC, ICICI", href: "/loans/home-loan" },
  { title: "Personal Loan", rate: "10.5%", desc: "Instant approval, minimal documents", href: "/loans/personal-loan" },
  { title: "Education Loan", rate: "7.5%", desc: "Study in India or abroad", href: "/loans/education-loan" },
  { title: "Gold Loan", rate: "7.0%", desc: "Quick disbursement against gold", href: "/loans/gold-loan" },
  { title: "Car Loan", rate: "8.7%", desc: "New and used car financing", href: "/loans/car-loan" },
  { title: "Business Loan", rate: "14%", desc: "MSME and startup financing", href: "/loans/business-loan" },
];

const schemes = [
  { title: "PM Kisan Samman Nidhi", benefit: "Rs 6,000/year", href: "/schemes/pm-kisan" },
  { title: "Ayushman Bharat", benefit: "Rs 5 Lakh health cover", href: "/schemes/ayushman-bharat" },
  { title: "PM Awas Yojana", benefit: "Up to Rs 2.67 Lakh subsidy", href: "/schemes/pmay" },
  { title: "E-Shram Card", benefit: "Rs 2 Lakh insurance", href: "/schemes/e-shram" },
  { title: "PM Mudra Yojana", benefit: "Up to Rs 10 Lakh loan", href: "/schemes/mudra" },
  { title: "Sukanya Samriddhi", benefit: "8.2% interest for girl child", href: "/schemes/sukanya-samriddhi" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Financial Tools &amp; Government Benefits<br className="hidden sm:block" /> for Every Indian
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Free EMI calculators, loan comparison, scheme eligibility checker and document guides. Trusted by lakhs of users every month.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/calculators/emi" className="w-full sm:w-auto px-6 py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors">Calculate EMI Now</Link>
            <Link href="/eligibility" className="w-full sm:w-auto px-6 py-3 bg-white text-blue-700 font-medium rounded-lg border border-blue-200 hover:bg-blue-50 transition-colors">Check Scheme Eligibility</Link>
          </div>
        </div>
      </section>

      {/* Finance Calculators - 70% focus */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Finance Calculators</h2>
              <p className="text-gray-600 mt-1">Free tools to plan your finances and compare options</p>
            </div>
            <Link href="/calculators" className="hidden sm:flex items-center gap-1 text-blue-700 font-medium text-sm hover:underline">All Calculators <ArrowRight className="w-4 h-4" /></Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {calculators.map((c) => (
              <Link key={c.href} href={c.href} className="group bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-blue-200 transition-all">
                <div className={`w-12 h-12 ${c.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform`}>
                  <c.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 text-lg group-hover:text-blue-700 transition-colors">{c.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{c.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Loans Comparison */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Compare Loan Rates</h2>
              <p className="text-gray-600 mt-1">Find the lowest interest rates from top Indian banks</p>
            </div>
            <Link href="/loans" className="hidden sm:flex items-center gap-1 text-blue-700 font-medium text-sm hover:underline">All Loans <ArrowRight className="w-4 h-4" /></Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {loans.map((l) => (
              <Link key={l.href} href={l.href} className="group bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md hover:border-blue-200 transition-all">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-700">{l.title}</h3>
                  <span className="text-sm font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded">from {l.rate}</span>
                </div>
                <p className="text-sm text-gray-600">{l.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Government Schemes - 20% */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Government Schemes</h2>
              <p className="text-gray-600 mt-1">Benefits you may qualify for</p>
            </div>
            <Link href="/schemes" className="hidden sm:flex items-center gap-1 text-blue-700 font-medium text-sm hover:underline">All Schemes <ArrowRight className="w-4 h-4" /></Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {schemes.map((s) => (
              <Link key={s.href} href={s.href} className="group flex items-center gap-4 bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md hover:border-blue-200 transition-all">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Landmark className="w-5 h-5 text-blue-700" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 group-hover:text-blue-700">{s.title}</h3>
                  <p className="text-sm text-green-700 font-medium">{s.benefit}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Access - Documents, Scholarships, States */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-6">
            <Link href="/documents" className="group bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md hover:border-blue-200 transition-all text-center">
              <FileText className="w-10 h-10 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 group-hover:text-blue-700">Document Guides</h3>
              <p className="text-sm text-gray-600 mt-1">PAN, Passport, Aadhaar, DL and more</p>
            </Link>
            <Link href="/scholarships" className="group bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md hover:border-blue-200 transition-all text-center">
              <GraduationCap className="w-10 h-10 text-purple-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 group-hover:text-blue-700">Scholarships</h3>
              <p className="text-sm text-gray-600 mt-1">National and state scholarships directory</p>
            </Link>
            <Link href="/states" className="group bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md hover:border-blue-200 transition-all text-center">
              <MapPin className="w-10 h-10 text-teal-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 group-hover:text-blue-700">State Guides</h3>
              <p className="text-sm text-gray-600 mt-1">Schemes and benefits by state</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            <div><p className="text-2xl font-bold text-gray-900">50+</p><p className="text-sm text-gray-500">Finance Tools</p></div>
            <div><p className="text-2xl font-bold text-gray-900">200+</p><p className="text-sm text-gray-500">Scheme Guides</p></div>
            <div><p className="text-2xl font-bold text-gray-900">36</p><p className="text-sm text-gray-500">State Pages</p></div>
            <div><p className="text-2xl font-bold text-gray-900">100%</p><p className="text-sm text-gray-500">Free to Use</p></div>
          </div>
        </div>
      </section>
    </>
  );
}
