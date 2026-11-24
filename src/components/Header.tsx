"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Search, ChevronDown } from "lucide-react";

const nav = [
  { label: "Schemes", href: "/schemes", sub: [
    { label: "PM Kisan", href: "/schemes/pm-kisan" },
    { label: "Ayushman Bharat", href: "/schemes/ayushman-bharat" },
    { label: "PM Awas Yojana", href: "/schemes/pmay" },
    { label: "E-Shram Card", href: "/schemes/e-shram" },
    { label: "All Schemes", href: "/schemes" },
  ]},
  { label: "Loans", href: "/loans", sub: [
    { label: "Home Loan", href: "/loans/home-loan" },
    { label: "Personal Loan", href: "/loans/personal-loan" },
    { label: "Education Loan", href: "/loans/education-loan" },
    { label: "Gold Loan", href: "/loans/gold-loan" },
    { label: "All Loans", href: "/loans" },
  ]},
  { label: "Calculators", href: "/calculators", sub: [
    { label: "EMI Calculator", href: "/calculators/emi" },
    { label: "SIP Calculator", href: "/calculators/sip" },
    { label: "Home Loan EMI", href: "/calculators/home-loan-emi" },
    { label: "PPF Calculator", href: "/calculators/ppf" },
    { label: "All Calculators", href: "/calculators" },
  ]},
  { label: "Documents", href: "/documents" },
  { label: "Scholarships", href: "/scholarships" },
  { label: "States", href: "/states" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">IA</span>
            </div>
            <span className="text-lg font-bold text-gray-900">India<span className="text-blue-700">Assist</span></span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {nav.map((item) => (
              <div key={item.label} className="relative" onMouseEnter={() => item.sub && setDropdown(item.label)} onMouseLeave={() => setDropdown(null)}>
                <Link href={item.href} className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-700 rounded-md hover:bg-blue-50 transition-colors">
                  {item.label}
                  {item.sub && <ChevronDown className="w-3.5 h-3.5" />}
                </Link>
                {item.sub && dropdown === item.label && (
                  <div className="absolute top-full left-0 mt-0.5 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-1.5 z-50">
                    {item.sub.map((s) => (
                      <Link key={s.href} href={s.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700">{s.label}</Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link href="/search" className="p-2 text-gray-500 hover:text-blue-700 rounded-full hover:bg-blue-50"><Search className="w-5 h-5" /></Link>
            <Link href="/eligibility" className="px-4 py-2 bg-blue-700 text-white text-sm font-medium rounded-lg hover:bg-blue-800 transition-colors">Check Eligibility</Link>
          </div>

          <button className="lg:hidden p-2 text-gray-700" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-1">
          {nav.map((item) => (
            <Link key={item.label} href={item.href} className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-blue-700 rounded-lg hover:bg-blue-50" onClick={() => setOpen(false)}>{item.label}</Link>
          ))}
          <Link href="/eligibility" className="block w-full text-center px-4 py-3 bg-blue-700 text-white font-medium rounded-lg mt-3" onClick={() => setOpen(false)}>Check Eligibility</Link>
        </div>
      )}
    </header>
  );
}
