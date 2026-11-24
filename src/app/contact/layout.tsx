import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | IndiaAssist",
  description: "Get in touch with the IndiaAssist team. Report errors, suggest new calculators or scheme guides, or send us general feedback. We respond within 2–3 business days.",
  alternates: { canonical: "https://indiaassist.online/contact" },
  robots: { index: true, follow: true },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
