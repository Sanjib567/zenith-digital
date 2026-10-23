import Reveal from "@/components/Reveal";
import { Star, ExternalLink } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    company: "TechVentures India",
    rating: 5,
    text: "Zenith Digital Agency completely transformed our online presence. Their Next.js web development and AI SEO strategies increased our organic leads by 250% within 3 months!",
  },
  {
    name: "Sarah Jenkins",
    company: "Global Healthcare Solutions",
    rating: 5,
    text: "Outstanding service and unmatched expertise in modern web frameworks. The team delivered a flawless, ultra-fast website that our clients absolutely love.",
  },
  {
    name: "Anil Patnaik",
    company: "Real Estate Odisha",
    rating: 5,
    text: "Reliable, transparent, and results-driven. Their PPC campaigns and local SEO got us top Google rankings faster than any agency we've worked with before.",
  },
];

export default function ClientTestimonials() {
  return (
    <section className="bg-gradient-to-b from-blue-50/40 via-purple-50/20 to-transparent px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="text-center">
            <span className="inline-block rounded-full border border-brand-blue/20 bg-brand-blue/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-blue">
              Happy Clients
            </span>
            <h2 className="mt-3 font-[var(--font-heading)] text-3xl font-extrabold text-brand-navy md:text-4xl">
              What Our <span className="text-brand-gradient">Clients Say</span>
            </h2>
            <p className="mt-3 text-brand-navy/70 max-w-2xl mx-auto text-sm md:text-base">
              Real feedback from business owners and team leaders who grew their brand with Zenith Digital.
            </p>
          </div>
        </Reveal>

        {/* Testimonial Cards */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <div className="flex h-full flex-col justify-between rounded-3xl border border-brand-navy/10 bg-white/80 p-8 shadow-md backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl">
                <div>
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, index) => (
                      <Star key={index} size={18} fill="currentColor" />
                    ))}
                  </div>
                  <p className="mt-4 text-sm md:text-base leading-relaxed text-brand-navy/80 italic">
                    &ldquo;{t.text}&rdquo;
                  </p>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-100">
                  <h4 className="font-bold text-brand-navy text-base">{t.name}</h4>
                  <p className="text-xs font-medium text-brand-blue">{t.company}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* View All Google Reviews Button */}
        <Reveal delay={0.3}>
          <div className="mt-12 text-center">
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-brand-gradient px-8 py-3.5 text-sm font-bold text-white shadow-xl transition hover:scale-105"
            >
              <span>View All Google Reviews</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}