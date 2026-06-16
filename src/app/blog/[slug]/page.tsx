import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import AdUnit from "@/components/AdSense";
import JsonLd from "@/components/JsonLd";
import WhatsAppShare from "@/components/WhatsAppShare";
import { blogPosts, getPostBySlug } from "@/data/blog";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return buildMetadata({ title: "Article not found" });
  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    keywords: [post.category, "guide"],
  });
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Organization", name: post.author },
    publisher: { "@type": "Organization", name: siteConfig.name },
    mainEntityOfPage: `${siteConfig.url}/blog/${post.slug}`,
  };

  return (
    <>
      <JsonLd data={articleJsonLd} />
      <Breadcrumbs
        items={[{ label: "Blog", href: "/blog" }, { label: post.title }]}
      />

      <article className="container-page grid gap-10 py-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <span className="badge">{post.category}</span>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-3 text-sm text-ink-500">
            By {post.author} · {formatDate(post.date)} · {post.readingTime}
          </p>

          <div className="prose-content mt-6">
            {post.content.map((block, i) => (
              <div key={i}>
                {block.heading && <h2>{block.heading}</h2>}
                {block.paragraphs.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
                {block.list && (
                  <ul>
                    {block.list.map((li, k) => (
                      <li key={k}>{li}</li>
                    ))}
                  </ul>
                )}
                {i === 0 && <AdUnit />}
              </div>
            ))}
          </div>
        </div>

        <aside className="lg:col-span-1">
          <div className="sticky top-20 space-y-5">
            <div className="card">
              <h2 className="text-base font-semibold text-ink-900">
                Try our tools
              </h2>
              <div className="mt-3 space-y-2">
                <Link href="/eligibility" className="btn-primary w-full">
                  Check eligibility
                </Link>
                <Link href="/calculators" className="btn-secondary w-full">
                  Open calculators
                </Link>
                <WhatsAppShare
                  url={`${siteConfig.url}/blog/${post.slug}`}
                  title={post.title}
                />
              </div>
            </div>
            <AdUnit label="Sponsored" />
          </div>
        </aside>
      </article>

      {related.length > 0 && (
        <section className="container-page py-10">
          <h2 className="mb-5 text-xl font-bold text-ink-900">
            Related articles
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="card group"
              >
                <span className="badge mb-2 w-fit">{p.category}</span>
                <h3 className="font-semibold text-ink-900 group-hover:text-brand-700">
                  {p.title}
                </h3>
                <p className="mt-1 line-clamp-2 text-sm text-ink-600">
                  {p.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
