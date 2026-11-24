import Link from "next/link";
import type { Metadata } from "next";
import { Clock, Tag, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog – Finance Tips, Scheme Guides & Money Advice | IndiaAssist",
  description: "Read expert articles on personal finance, government schemes, loan guides, investment tips, and more. Free financial guidance written for every Indian.",
  alternates: { canonical: "https://indiaassist.online/blog" },
  openGraph: {
    title: "IndiaAssist Blog – Finance Tips & Government Scheme Guides",
    description: "Expert articles on EMI, SIP, PPF, home loans, government schemes, CIBIL score improvement, and more.",
    url: "https://indiaassist.online/blog",
  },
};

const posts = [
  {
    slug: "how-to-check-pm-kisan-status-2025",
    title: "How to Check PM Kisan Status 2025: Step-by-Step Guide",
    excerpt:
      "PM Kisan Samman Nidhi provides Rs 6,000 per year to eligible farmer families across India. If you are registered but have not received your installment, here is exactly how to check your PM Kisan beneficiary status online — including what to do if your name shows an error or if a payment has been held.",
    date: "November 2026",
    readTime: "6 min read",
    category: "Government Schemes",
    categoryColor: "bg-green-100 text-green-800",
    image: "🌾",
    tags: ["PM Kisan", "Farmer Schemes", "Status Check"],
  },
  {
    slug: "home-loan-vs-rent-india-2025",
    title: "Home Loan vs Rent: What Makes More Sense in India Right Now?",
    excerpt:
      "With home loan interest rates hovering around 8.5–9.5% and real estate prices at an all-time high in major cities, is buying a home still a smart financial move? We break down the mathematics of EMI vs rent for a Rs 60 lakh property across different Indian cities, factoring in appreciation, tax benefits, and opportunity cost.",
    date: "October 2026",
    readTime: "9 min read",
    category: "Home Loans",
    categoryColor: "bg-amber-100 text-amber-800",
    image: "🏠",
    tags: ["Home Loan", "Real Estate", "EMI vs Rent"],
  },
  {
    slug: "complete-guide-ppf-investment-2025",
    title: "Complete Guide to PPF Investment 2025: Rules, Returns & Strategy",
    excerpt:
      "The Public Provident Fund (PPF) remains one of India's safest long-term investment options, offering 7.1% guaranteed interest backed by the Government of India with complete EEE tax exemption. This guide covers everything — how to open a PPF account, contribution rules, partial withdrawal conditions, loan facility, and the best strategy to maximise your corpus over 15 years.",
    date: "October 2026",
    readTime: "11 min read",
    category: "Investments",
    categoryColor: "bg-teal-100 text-teal-800",
    image: "💰",
    tags: ["PPF", "Tax Saving", "Long Term Investment"],
  },
  {
    slug: "how-to-improve-cibil-score-fast",
    title: "How to Improve Your CIBIL Score Fast: 10 Proven Steps",
    excerpt:
      "A CIBIL score below 700 can get your loan application rejected or force you to pay higher interest rates. The good news: your credit score is not fixed. With the right actions — clearing overdue payments, maintaining a healthy credit utilisation ratio, disputing errors, and building a positive credit history — most people can see a meaningful improvement within 6–12 months.",
    date: "September 2026",
    readTime: "8 min read",
    category: "Credit Score",
    categoryColor: "bg-blue-100 text-blue-800",
    image: "📊",
    tags: ["CIBIL Score", "Credit Score", "Loan Eligibility"],
  },
  {
    slug: "ayushman-bharat-card-download-guide",
    title: "Ayushman Bharat Card: How to Download, Apply & Use in 2025",
    excerpt:
      "The Ayushman Bharat Pradhan Mantri Jan Arogya Yojana (AB PM-JAY) provides up to Rs 5 lakh per year health insurance to over 55 crore beneficiaries from poor and vulnerable families. This comprehensive guide explains how to check your eligibility on the official portal, how to download your Ayushman Card, which hospitals are empanelled, and how to use the card for cashless treatment.",
    date: "September 2026",
    readTime: "7 min read",
    category: "Health Schemes",
    categoryColor: "bg-red-100 text-red-800",
    image: "🏥",
    tags: ["Ayushman Bharat", "Health Insurance", "Government Scheme"],
  },
  {
    slug: "top-government-schemes-women-india-2025",
    title: "Top 5 Government Schemes for Women in India 2025",
    excerpt:
      "From Sukanya Samriddhi Yojana's 8.2% returns for your daughter's future to PM Ujjwala Yojana's free LPG connections, and from Mahila Samman Savings Certificates to state-level self-help group loan subsidies — the Indian government runs multiple welfare schemes exclusively designed to empower women financially and socially. Here are the five most impactful ones with full eligibility details.",
    date: "August 2026",
    readTime: "8 min read",
    category: "Government Schemes",
    categoryColor: "bg-green-100 text-green-800",
    image: "👩",
    tags: ["Women Schemes", "Sukanya Samriddhi", "PM Ujjwala"],
  },
  {
    slug: "sip-vs-lumpsum-investment-india",
    title: "SIP vs Lumpsum Investment: Which is Better for Indian Investors?",
    excerpt:
      "If you have Rs 1 lakh to invest in a mutual fund, should you invest it all at once (lumpsum) or spread it across 12 months via a Systematic Investment Plan (SIP)? The answer depends on market conditions, your risk tolerance, and your investment horizon. We compare both strategies with real data from Indian equity markets over the past 10 years so you can make an informed decision.",
    date: "August 2026",
    readTime: "10 min read",
    category: "Investments",
    categoryColor: "bg-teal-100 text-teal-800",
    image: "📈",
    tags: ["SIP", "Mutual Funds", "Investment Strategy"],
  },
  {
    slug: "how-to-apply-education-loan-india",
    title: "How to Apply for an Education Loan in India: Complete 2025 Guide",
    excerpt:
      "Education loans in India can be obtained at interest rates starting from 7.5% for study in India and 10% for abroad, with repayment typically starting 6–12 months after course completion. This guide walks you through the complete process: how to compare bank offers, what documents are required, the role of the Vidya Lakshmi Portal, how to claim tax deduction under Section 80E, and tips for getting your loan approved faster.",
    date: "July 2026",
    readTime: "12 min read",
    category: "Education Loans",
    categoryColor: "bg-violet-100 text-violet-800",
    image: "🎓",
    tags: ["Education Loan", "Student Finance", "Section 80E"],
  },
];

export default function BlogPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-blue-700">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">Blog</span>
        </nav>

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">IndiaAssist Blog</h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Expert guides on personal finance, government schemes, loan comparisons, investment strategies, and more — written in plain language for every Indian.
          </p>
        </div>

        {/* Category Filter (visual only) */}
        <div className="flex flex-wrap gap-2 mb-8">
          {["All Articles", "Government Schemes", "Investments", "Home Loans", "Credit Score", "Health Schemes", "Education Loans"].map((cat) => (
            <span
              key={cat}
              className={`px-4 py-1.5 rounded-full text-sm font-medium cursor-pointer transition-colors ${
                cat === "All Articles"
                  ? "bg-blue-700 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-700"
              }`}
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Featured Post (first post) */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-all group">
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center text-4xl flex-shrink-0 shadow-sm">
                {posts[0].image}
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${posts[0].categoryColor}`}>
                    {posts[0].category}
                  </span>
                  <span className="text-xs text-gray-500 bg-blue-200 text-blue-800 px-2.5 py-1 rounded-full font-medium">Featured</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors leading-snug">
                  <Link href={`/blog/${posts[0].slug}`}>{posts[0].title}</Link>
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{posts[0].excerpt}</p>
                <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {posts[0].date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {posts[0].readTime}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Post Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {posts.slice(1).map((post) => (
            <article
              key={post.slug}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg hover:border-blue-200 transition-all group flex flex-col"
            >
              {/* Card top accent */}
              <div className="h-1.5 bg-gradient-to-r from-blue-500 to-blue-700" />

              <div className="p-5 flex flex-col flex-1">
                {/* Icon + Category */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl">{post.image}</span>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${post.categoryColor}`}>
                    {post.category}
                  </span>
                </div>

                {/* Title */}
                <h2 className="font-bold text-gray-900 text-base leading-snug mb-2 group-hover:text-blue-700 transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>

                {/* Excerpt */}
                <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full"
                    >
                      <Tag className="w-2.5 h-2.5" />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Meta */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-100 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 bg-blue-50 border border-blue-100 rounded-xl p-6 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Looking for a specific topic?</h2>
          <p className="text-gray-600 text-sm mb-4">
            Can't find what you're looking for? Browse our tools or suggest a topic you'd like us to cover.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/calculators"
              className="w-full sm:w-auto px-6 py-2.5 bg-blue-700 text-white font-medium text-sm rounded-lg hover:bg-blue-800 transition-colors"
            >
              Explore Calculators
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-6 py-2.5 bg-white text-blue-700 font-medium text-sm rounded-lg border border-blue-200 hover:bg-blue-50 transition-colors"
            >
              Suggest a Topic
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
