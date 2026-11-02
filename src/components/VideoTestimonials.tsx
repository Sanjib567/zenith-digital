"use client";

import Reveal from "@/components/Reveal";

// Paste the YouTube video ID (the part after v= or /shorts/) for each client
const videos = [
  {
    id: "r9H4gbEdmfs",
    title: "Client testimonial @ Victor De Clermont",
  },
  {
    id: "Aieu9-zq4Ao",
    title: "Client testimonial @ Rob (Kastking.com.au)",
  },
];

export default function VideoTestimonials() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-24">
      <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-brand-blue/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-brand-purple/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <div className="text-center">
            <span className="inline-flex rounded-full border border-brand-blue/20 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-brand-blue shadow-sm">
              Video Testimonials
            </span>
            <h2 className="mt-5 font-[var(--font-heading)] text-3xl font-extrabold text-brand-navy md:text-4xl">
              What Our <span className="text-brand-gradient">Clients Say</span>
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-brand-navy/70">
              Hear directly from the businesses we have helped grow online.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {videos.map((v) => (
            <Reveal key={v.id}>
              <div className="overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-slate-200 transition duration-500 hover:-translate-y-1 hover:shadow-2xl">
                <div className="aspect-video w-full bg-brand-navy">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${v.id}`}
                    title={v.title}
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}