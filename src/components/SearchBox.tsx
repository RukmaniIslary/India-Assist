"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBox({
  size = "lg",
  placeholder = "Try 'PM-KISAN', 'home loan EMI', or 'how to get a PAN card'...",
}: {
  size?: "lg" | "md";
  placeholder?: string;
}) {
  const [query, setQuery] = useState("");
  const router = useRouter();

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const q = query.trim();
    router.push(q ? `/search?q=${encodeURIComponent(q)}` : "/search");
  }

  return (
    <form onSubmit={onSubmit} className="w-full" role="search">
      <div className="flex items-stretch gap-2">
        <div className="relative flex-1">
          <svg
            className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-400"
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden="true"
          >
            <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.8" />
            <line x1="14" y1="14" x2="18" y2="18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={placeholder}
            aria-label="Search India Assist"
            className={`w-full rounded-xl border border-ink-200 bg-white pl-11 pr-3 shadow-sm outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 ${
              size === "lg" ? "py-4 text-base" : "py-3 text-sm"
            }`}
          />
        </div>
        <button type="submit" className="btn-primary px-6">
          Search
        </button>
      </div>
    </form>
  );
}
