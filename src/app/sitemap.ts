import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://indiaassist.online";
  const now = new Date();

  const staticPages = [
    { url: `${base}/`, priority: 1.0 },
    { url: `${base}/calculators`, priority: 0.9 },
    { url: `${base}/calculators/emi`, priority: 0.9 },
    { url: `${base}/calculators/sip`, priority: 0.9 },
    { url: `${base}/calculators/home-loan-emi`, priority: 0.9 },
    { url: `${base}/calculators/ppf`, priority: 0.9 },
    { url: `${base}/calculators/fd`, priority: 0.9 },
    { url: `${base}/calculators/loan-eligibility`, priority: 0.9 },
    { url: `${base}/loans`, priority: 0.9 },
    { url: `${base}/loans/home-loan`, priority: 0.9 },
    { url: `${base}/loans/personal-loan`, priority: 0.9 },
    { url: `${base}/loans/education-loan`, priority: 0.9 },
    { url: `${base}/loans/gold-loan`, priority: 0.8 },
    { url: `${base}/loans/car-loan`, priority: 0.8 },
    { url: `${base}/loans/business-loan`, priority: 0.8 },
    { url: `${base}/schemes`, priority: 0.9 },
    { url: `${base}/schemes/pm-kisan`, priority: 0.9 },
    { url: `${base}/schemes/ayushman-bharat`, priority: 0.9 },
    { url: `${base}/schemes/pmay`, priority: 0.8 },
    { url: `${base}/schemes/e-shram`, priority: 0.8 },
    { url: `${base}/schemes/mudra`, priority: 0.8 },
    { url: `${base}/schemes/sukanya-samriddhi`, priority: 0.8 },
    { url: `${base}/blog`, priority: 0.9 },
    { url: `${base}/blog/how-to-check-pm-kisan-status-2025`, priority: 0.85 },
    { url: `${base}/blog/home-loan-vs-rent-india-2025`, priority: 0.85 },
    { url: `${base}/blog/complete-guide-ppf-investment-2025`, priority: 0.85 },
    { url: `${base}/blog/how-to-improve-cibil-score-fast`, priority: 0.85 },
    { url: `${base}/blog/ayushman-bharat-card-download-guide`, priority: 0.85 },
    { url: `${base}/blog/top-government-schemes-women-india-2025`, priority: 0.85 },
    { url: `${base}/blog/sip-vs-lumpsum-investment-india`, priority: 0.85 },
    { url: `${base}/blog/how-to-apply-education-loan-india`, priority: 0.85 },
    { url: `${base}/eligibility`, priority: 0.9 },
    { url: `${base}/scholarships`, priority: 0.8 },
    { url: `${base}/documents`, priority: 0.8 },
    { url: `${base}/documents/aadhaar`, priority: 0.8 },
    { url: `${base}/documents/pan-card`, priority: 0.8 },
    { url: `${base}/documents/passport`, priority: 0.8 },
    { url: `${base}/documents/driving-licence`, priority: 0.8 },
    { url: `${base}/states`, priority: 0.7 },
    { url: `${base}/about`, priority: 0.6 },
    { url: `${base}/contact`, priority: 0.5 },
    { url: `${base}/privacy`, priority: 0.3 },
    { url: `${base}/terms`, priority: 0.3 },
    { url: `${base}/disclaimer`, priority: 0.3 },
  ];

  return staticPages.map(({ url, priority }) => ({
    url,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority,
  }));
}
