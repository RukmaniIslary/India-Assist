import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: { default: "IndiaAssist - Finance Tools, Loans, Government Schemes & Eligibility", template: "%s | IndiaAssist" },
  description: "India's #1 assistance engine for EMI calculators, loan comparison, government schemes, scholarships, documents and eligibility discovery.",
  keywords: "EMI calculator, SIP calculator, home loan, personal loan, government schemes India, PM Kisan, Ayushman Bharat, scholarships, PAN card, passport",
  metadataBase: new URL("https://indiaassist.online"),
  openGraph: { title: "IndiaAssist - Finance Tools & Government Benefits", description: "Calculate EMI, compare loans, discover government schemes and check eligibility. Free financial tools for every Indian.", url: "https://indiaassist.online", siteName: "IndiaAssist", locale: "en_IN", type: "website" },
  twitter: { card: "summary_large_image", title: "IndiaAssist - Finance Tools & Government Benefits", description: "Free EMI calculators, loan comparison, schemes eligibility checker." },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://indiaassist.online" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8685123310989975" crossOrigin="anonymous" />
        <meta name="google-adsense-account" content="ca-pub-8685123310989975" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased bg-white">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
