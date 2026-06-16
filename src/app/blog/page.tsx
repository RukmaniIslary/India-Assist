import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Breadcrumbs from "@/components/Breadcrumbs";
import AdUnit from "@/components/AdSense";
import { blogPosts } from "@/data/blog";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Blog — Guides, Comparisons & FAQs",
  description:
    "Practical guides on government schemes, personal finance, scholarships and document procedures for Indian citizens.",
  path: "/blog",
  keywords: ["finance guides", "scheme guides", "how to apply", "comparisons"],
});

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function BlogPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Blog" }]} />
      <PageHeader
        eyebrow="Content"
        title="Guides &amp; Articles"
        description="In-depth guides, comparisons and FAQs to help you make better decisions."
      />
      <div className="container-page py-10">
        <div className="grid gap-6 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="card group flex flex-col"
            >
              <span className="badge mb-3 w-fit">{post.category}</span>
              <h2 className="text-lg font-semibold text-ink-900 group-hover:text-brand-700">
                {post.title}
              </h2>
              <p className="mt-2 line-clamp-3 flex-1 text-sm text-ink-600">
                {post.excerpt}
              </p>
              <p className="mt-4 text-xs text-ink-500">
                {formatDate(post.date)} · {post.readingTime}
              </p>
            </Link>
          ))}
        </div>
        <AdUnit />
      </div>
    </>
  );
}
