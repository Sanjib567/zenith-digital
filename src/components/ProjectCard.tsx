"use client";

import { useState } from "react";

export default function ProjectCard({
  name,
  image,
  url,
  service,
}: {
  name: string;
  image: string;
  url: string;
  service: string;
}) {
  const [failed, setFailed] = useState(false);
  const isLive = url !== "#";

  return (
    <a
      href={isLive ? url : undefined}
      target={isLive ? "_blank" : undefined}
      rel={isLive ? "noopener noreferrer" : undefined}
      aria-label={`${name}${isLive ? " - visit website" : ""}`}
      className="group relative block overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-slate-200 transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
    >
      <div className="relative h-60 w-full overflow-hidden bg-slate-100">
        {!failed && (
          <img
            src={image}
            alt={name}
            loading="lazy"
            onError={() => setFailed(true)}
            className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105"
          />
        )}
        {isLive && (
          <span className="absolute right-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-brand-blue opacity-0 shadow transition duration-300 group-hover:opacity-100">
            Visit site ↗
          </span>
        )}
      </div>

      <div className="relative overflow-hidden bg-gradient-to-r from-brand-navy via-brand-purple to-brand-blue px-6 py-5 text-center text-white">
        {/* Light sweep on hover */}
        <span className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-1000 group-hover:translate-x-[300%]" />
        <h3 className="relative font-[var(--font-heading)] text-lg font-extrabold tracking-wide">{name}</h3>
        <p className="relative mt-1 text-sm font-semibold text-white/85">{service}</p>
      </div>
    </a>
  );
}