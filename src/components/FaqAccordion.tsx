"use client";
import { useState } from "react";

export default function FaqAccordion({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.question} className="rounded-xl border border-brand-navy/10 bg-white">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between px-5 py-4 text-left font-semibold text-brand-navy"
              aria-expanded={isOpen}
            >
              <span>
                {String(i + 1).padStart(2, "0")}. {item.question}
              </span>
              <span className="ml-4 text-xl text-brand-orange">{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen && <p className="px-5 pb-5 text-brand-navy/70">{item.answer}</p>}
          </div>
        );
      })}
    </div>
  );
}
