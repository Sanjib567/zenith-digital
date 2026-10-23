"use client";

import { useState } from "react";

// Tries each source in order. If one fails to load, it moves to the next.
// If all fail, it shows the initials.
export default function LogoImage({
  sources,
  name,
  fallback,
  from,
  to,
  size = 30,
}: {
  sources: string[];
  name: string;
  fallback: string;
  from: string;
  to: string;
  size?: number;
}) {
  const [index, setIndex] = useState(0);
  const src = sources[index];

  if (!src) {
    return (
      <span
        className={`flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br ${from} ${to} text-xs font-extrabold text-white`}
      >
        {fallback}
      </span>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={`${name} logo`}
      width={size}
      height={size}
      loading="lazy"
      onError={() => setIndex((i) => i + 1)}
      className="h-full w-full object-contain p-2"
    />
  );
}