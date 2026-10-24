"use client";

import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="group relative flex h-14 w-14 items-center justify-center"
    >
      {/* Soft pulsing ring behind the button */}
      <span className="absolute inset-0 animate-ping rounded-full bg-brand-gradient opacity-40" />
      {/* Button itself bobs up and down */}
      <span className="animate-bounce-soft relative flex h-14 w-14 items-center justify-center rounded-full bg-brand-gradient text-white shadow-2xl ring-4 ring-white/10 transition group-hover:scale-110">
        <ArrowUp size={22} className="transition group-hover:-translate-y-0.5" />
      </span>
    </button>
  );
}