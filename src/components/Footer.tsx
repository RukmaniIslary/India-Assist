import Link from "next/link";

const links = {
  "Finance Tools": [
    { label: "EMI Calculator", href: "/calculators/emi" },
    { label: "SIP Calculator", href: "/calculators/sip" },
    { label: "Home Loan EMI", href: "/calculators/home-loan-emi" },
    { label: "PPF Calculator", href: "/calculators/ppf" },
    { label: "FD Calculator", href: "/calculators/fd" },
    { label: "Loan Eligibility", href: "/calculators/loan-eligibility" },
  ],
  "Loans": [
    { label: "Home Loan", href: "/loans/home-loan" },
    { label: "Personal Loan", href: "/loans/personal-loan" },
    { label: "Education Loan", href: "/loans/education-loan" },
    { label: "Gold Loan", href: "/loans/gold-loan" },
    { label: "Car Loan", href: "/loans/car-loan" },
  ],
  "Schemes": [
    { label: "PM Kisan", href: "/schemes/pm-kisan" },
    { label: "Ayushman Bharat", href: "/schemes/ayushman-bharat" },
    { label: "PM Awas Yojana", href: "/schemes/pmay" },
    { label: "E-Shram Card", href: "/schemes/e-shram" },
    { label: "Atal Pension", href: "/schemes/atal-pension" },
  ],
  "Documents": [
    { label: "PAN Card", href: "/documents/pan-card" },
    { label: "Passport", href: "/documents/passport" },
    { label: "Driving Licence", href: "/documents/driving-licence" },
    { label: "Aadhaar Card", href: "/documents/aadhaar" },
    { label: "Income Certificate", href: "/documents/income-certificate" },
  ],
  "Company": [
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
    { label: "Disclaimer", href: "/disclaimer" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-10">
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">IA</span>
              </div>
              <span className="text-lg font-bold text-white">India<span className="text-blue-400">Assist</span></span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">India&apos;s assistance engine for government schemes, finance tools, loans and eligibility discovery.</p>
          </div>
          {Object.entries(links).map(([cat, items]) => (
            <div key={cat}>
              <h3 className="text-white font-semibold text-sm mb-3">{cat}</h3>
              <ul className="space-y-2">
                {items.map((l) => (<li key={l.href}><Link href={l.href} className="text-sm text-gray-400 hover:text-blue-400 transition-colors">{l.label}</Link></li>))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} IndiaAssist.online. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-sm text-gray-500 hover:text-gray-300">Privacy</Link>
            <Link href="/terms" className="text-sm text-gray-500 hover:text-gray-300">Terms</Link>
            <Link href="/disclaimer" className="text-sm text-gray-500 hover:text-gray-300">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
