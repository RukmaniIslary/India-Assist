import Link from "next/link";
import { siteConfig } from "@/lib/site";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2 ${className}`}
      aria-label={`${siteConfig.name} home`}
    >
      <svg
        width="34"
        height="34"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-hidden="true"
      >
        <rect width="48" height="48" rx="11" fill="#ea580c" />
        <path
          d="M24 9c8.284 0 15 6.716 15 15s-6.716 15-15 15S9 32.284 9 24"
          stroke="#fff"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx="24" cy="24" r="4.2" fill="#fff" />
        <g stroke="#ffedd5" strokeWidth="1.6" strokeLinecap="round">
          <line x1="24" y1="13" x2="24" y2="16" />
          <line x1="24" y1="32" x2="24" y2="35" />
          <line x1="13" y1="24" x2="16" y2="24" />
          <line x1="32" y1="24" x2="35" y2="24" />
          <line x1="16.2" y1="16.2" x2="18.3" y2="18.3" />
          <line x1="29.7" y1="29.7" x2="31.8" y2="31.8" />
          <line x1="31.8" y1="16.2" x2="29.7" y2="18.3" />
          <line x1="18.3" y1="29.7" x2="16.2" y2="31.8" />
        </g>
      </svg>
      <span className="text-lg font-extrabold tracking-tight text-ink-900">
        India<span className="text-brand-600">Assist</span>
      </span>
    </Link>
  );
}
