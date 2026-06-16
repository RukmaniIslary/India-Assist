"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Logo from "./Logo";
import { mainNav } from "@/lib/site";
import { useLanguage, useT } from "@/lib/i18n";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();
  const { lang, toggle } = useLanguage();
  const t = useT();

  function onSearch(e: React.FormEvent) {
    e.preventDefault();
    const q = query.trim();
    router.push(q ? `/search?q=${encodeURIComponent(q)}` : "/search");
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-ink-200 bg-white/90 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-ink-600 transition hover:bg-ink-50 hover:text-brand-700"
            >
              {t(item.label)}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <form onSubmit={onSearch} className="relative">
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t("Search schemes, tools...")}
              aria-label="Search"
              className="w-56 rounded-lg border border-ink-200 bg-ink-50 py-2 pl-9 pr-3 text-sm outline-none focus:border-brand-400 focus:bg-white"
            />
            <SearchIcon className="pointer-events-none absolute left-2.5 top-2.5 h-4 w-4 text-ink-400" />
          </form>
          <LangToggle lang={lang} onToggle={toggle} />
          <Link href="/eligibility" className="btn-primary">
            {t("Check Eligibility")}
          </Link>
        </div>

        <div className="flex items-center gap-1.5 lg:hidden">
          <LangToggle lang={lang} onToggle={toggle} />
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-ink-700"
            aria-label={t("Toggle menu")}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-ink-200 bg-white lg:hidden">
          <div className="container-page space-y-3 py-4">
            <form onSubmit={onSearch} className="relative">
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search schemes, scholarships, tools..."
                aria-label="Search"
                className="w-full rounded-lg border border-ink-200 bg-ink-50 py-2.5 pl-9 pr-3 text-sm outline-none focus:border-brand-400 focus:bg-white"
              />
              <SearchIcon className="pointer-events-none absolute left-2.5 top-3 h-4 w-4 text-ink-400" />
            </form>
            <nav className="grid grid-cols-2 gap-1" aria-label="Mobile">
              {mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2 text-sm font-medium text-ink-700 hover:bg-ink-50"
                >
                  {t(item.label)}
                </Link>
              ))}
            </nav>
            <Link
              href="/eligibility"
              onClick={() => setOpen(false)}
              className="btn-primary w-full"
            >
              {t("Check Eligibility")}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function LangToggle({
  lang,
  onToggle,
}: {
  lang: "en" | "hi";
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="inline-flex items-center gap-1 rounded-lg border border-ink-200 bg-white px-2.5 py-1.5 text-xs font-semibold text-ink-700 transition hover:border-brand-300 hover:text-brand-700"
      aria-label={
        lang === "en" ? "हिंदी में बदलें" : "Switch to English"
      }
      title={lang === "en" ? "हिंदी में बदलें" : "Switch to English"}
    >
      <GlobeIcon />
      <span className={lang === "en" ? "text-brand-700" : "text-ink-400"}>
        EN
      </span>
      <span aria-hidden="true" className="text-ink-300">
        |
      </span>
      <span className={lang === "hi" ? "text-brand-700" : "text-ink-400"}>
        हिं
      </span>
    </button>
  );
}

function GlobeIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18"
        stroke="currentColor"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function SearchIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.8" />
      <line x1="14" y1="14" x2="18" y2="18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
