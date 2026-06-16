"use client";

import { useEffect } from "react";
import { siteConfig } from "@/lib/site";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

type AdUnitProps = {
  slot?: string;
  format?: string;
  responsive?: boolean;
  className?: string;
  label?: string;
  style?: React.CSSProperties;
};

/**
 * Reusable Google AdSense ad unit.
 * Renders a labelled, reserved container to avoid layout shift, then
 * pushes the ad once mounted on the client.
 */
export default function AdUnit({
  slot = "0000000000",
  format = "auto",
  responsive = true,
  className = "",
  label = "Advertisement",
  style,
}: AdUnitProps) {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // AdSense not yet available — fails silently in development.
    }
  }, []);

  return (
    <div
      className={`my-6 overflow-hidden rounded-lg border border-dashed border-ink-200 bg-ink-50/60 ${className}`}
      aria-label={label}
    >
      <p className="px-3 pt-2 text-[11px] uppercase tracking-wide text-ink-400">
        {label}
      </p>
      <ins
        className="adsbygoogle"
        style={{ display: "block", minHeight: 90, ...style }}
        data-ad-client={siteConfig.adsenseClient}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? "true" : "false"}
      />
    </div>
  );
}
