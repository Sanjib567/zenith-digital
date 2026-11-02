"use client";

import { useState } from "react";
import { techLogos } from "@/data/techLogos";

// Builds short initials for small tiles, for example "Microsoft Azure" becomes "MA"
function initialsOf(name: string) {
  const words = name.replace(/[^A-Za-z0-9 ]/g, " ").trim().split(/\s+/);
  if (words.length > 1) {
    return words.slice(0, 2).map((w) => w[0]).join("").toUpperCase();
  }
  return words[0].slice(0, 3).toUpperCase();
}

// Shows the official brand logo on a white tile.
// If the logo can't load, it shows the full name (large tiles) or initials (compact tiles).
// The text is always kept inside the tile.
export default function TechLogo({
  slug,
  name,
  className = "",
  logoClassName = "h-2/3 w-2/3",
  compact = false,
}: {
  slug: string;
  name: string;
  className?: string;
  logoClassName?: string;
  compact?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  const logo = techLogos[slug];

  const fallbackText = compact ? initialsOf(name) : name;
  const fallbackSize = compact ? "text-lg" : "text-xl md:text-2xl";

  return (
    <div className={`flex items-center justify-center overflow-hidden bg-white ${className}`}>
      {logo && !failed ? (
        <img
          src={`https://cdn.simpleicons.org/${logo.icon}/${logo.hex}`}
          alt={`${name} logo`}
          onError={() => setFailed(true)}
          className={`object-contain ${logoClassName}`}
        />
      ) : (
        <span
          className={`block max-w-full overflow-hidden break-words px-2 text-center font-[var(--font-heading)] font-extrabold leading-tight text-brand-navy ${fallbackSize}`}
        >
          {fallbackText}
        </span>
      )}
    </div>
  );
}