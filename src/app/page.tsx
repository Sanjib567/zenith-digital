import Link from "next/link";
import Hero from "@/components/Hero";
import MarqueeBar from "@/components/MarqueeBar";
import AboutSection from "@/components/AboutSection";
import ToolsPlatforms from "@/components/ToolsPlatforms";
import ClientTestimonials from "@/components/ClientTestimonials";
import IndustriesAndTools from "@/components/IndustriesAndTools";
import EngagementModels from "@/components/EngagementModels";
import ToolsMarquee from "@/components/ToolsMarquee";
import Portfolio from "@/components/Portfolio";
import Reveal from "@/components/Reveal";
import FaqAccordion from "@/components/FaqAccordion";
import ServiceCard from "@/components/ServiceCard";
import { services, whyUs, faqs } from "@/data/site";

const badges = [
  "⭐ 100+ Delivered Projects",
  "🔥 99% Satisfaction Rate",
  "🚀 AI-Powered Growth",
  "⚡ 24/7 Support",
  "🌍 Global Reach from India",
];

const partners = ["Healthcare", "Real Estate", "Ecommerce Stacks", "FinTech Solutions", "SaaS Enterprises"];

const blogs = [
  { title: "Mastering AEO & GEO in 2026", cat: "AI SEO", date: "Oct 2026", seed: "blog1" },
  { title: "Why Next.js Outperforms Traditional CMS", cat: "Web Dev", date: "Oct 2026", seed: "blog2" },
  { title: "Scaling Local Businesses with Targeted Meta Ads", cat: "Marketing", date: "Sep 2026", seed: "blog3" },
];

export default function Home() {
  return (
    <div className="overflow-hidden bg-gradient-to-br from-white via-blue-50/50 to-rose-50/50">
      {/* 1. Hero Banner */}
      <Hero />

      {/* 2. Main Animated Ticker Bar */}
      <MarqueeBar />

      {/* 3. About Us */}
      <AboutSection />

      {/* 4. Our Expertise */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-blue">Our Expertise</p>

          <h2 className="mt-2 font-[var(--font-heading)] text-3xl font-bold text-brand-navy md:text-4xl">
            <span className="text-brand-gradient">Web Development, AI SEO and Digital Marketing Solutions</span>
          </h2>

          <p className="mt-4 max-w-3xl leading-relaxed text-brand-navy/70">
            From high-performing websites and custom applications to AI-powered search optimization and data-driven
            marketing, we help your business strengthen its online presence, attract the right audience, and turn
            digital opportunities into measurable growth.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.1}>
              <ServiceCard slug={s.slug} title={s.title} description={s.description} icon={s.icon} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* 5. Best Portfolio */}
      <Portfolio />

      {/* 6. AI & SEO Tools Platforms */}
      <ToolsPlatforms />

      {/* 7. Why Choose Zenith Digital */}
      <section className="relative overflow-hidden bg-brand-navy px-6 py-20 text-white shadow-inner">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-brand-blue/10 via-brand-purple/10 to-brand-orange/10" />

        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange">Why Zenith</p>
            <h2 className="mt-2 font-[var(--font-heading)] text-3xl font-bold md:text-4xl">
              <span className="text-brand-gradient">Why Choose Zenith Digital</span>
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whyUs.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:bg-white/10">
                  <p className="font-[var(--font-heading)] text-3xl font-extrabold text-brand-orange">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-white/70">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Animated Transition Bar */}
      <div className="relative z-10 overflow-hidden bg-brand-gradient py-3 text-white shadow-lg">
        <div className="flex w-full overflow-hidden whitespace-nowrap">
          {[0, 1].map((copy) => (
            <div
              key={copy}
              className="animate-marquee flex shrink-0 items-center gap-10 px-4"
              aria-hidden={copy === 1}
            >
              {badges.map((badge, idx) => (
                <span
                  key={`${copy}-${idx}`}
                  className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white md:text-base"
                >
                  {badge}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* 9. Client Testimonials */}
      <ClientTestimonials />

      {/* 10. Trusted by Industry Leaders */}
      <section className="mx-auto max-w-7xl px-6 py-16 text-center">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Proven Results</p>
          <h2 className="mt-2 font-[var(--font-heading)] text-2xl font-bold md:text-3xl">
            <span className="text-brand-gradient">Trusted by Industry Leaders</span>
          </h2>
        </Reveal>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-8 opacity-70 grayscale transition hover:grayscale-0 md:gap-14">
          {partners.map((partner) => (
            <span key={partner} className="text-lg font-extrabold tracking-wider text-slate-700 md:text-xl">
              {partner}
            </span>
          ))}
        </div>
      </section>

      {/* 11. Industries & Tools */}
      <IndustriesAndTools />

      {/* 12. Flexible Ways to Engage */}
      <EngagementModels />

      {/* 13. Blog & Insights */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange">Knowledge Hub</p>
          <h2 className="mt-2 font-[var(--font-heading)] text-3xl font-bold md:text-4xl">
            <span className="text-brand-gradient">Blog &amp; Insights</span>
          </h2>
          <p className="mt-2 text-brand-navy/70">
            Latest strategies on Web Development, AI Search, and Digital Marketing.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {blogs.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.1}>
              <article className="overflow-hidden rounded-2xl border border-brand-navy/5 bg-white shadow-md">
                <img
                  src={`https://picsum.photos/seed/${b.seed}/600/350`}
                  alt={b.title}
                  className="h-44 w-full object-cover"
                />
                <div className="p-5">
                  <span className="text-xs font-bold uppercase text-brand-blue">{b.cat}</span>
                  <span className="text-xs text-slate-500"> • {b.date}</span>
                  <h3 className="mt-2 text-base font-bold text-brand-navy">{b.title}</h3>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 14. AI & SEO Tools Marquee */}
      <ToolsMarquee />

      {/* 15. FAQ */}
      <section id="faq" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-blue">Got Questions?</span>

              <h2 className="mt-2 font-[var(--font-heading)] text-3xl font-extrabold text-brand-navy sm:text-4xl">
                Frequently Asked Questions About <span className="text-brand-gradient">Our Services</span>
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-brand-navy/70">
                Got questions about web development, AI search optimization (AEO/GEO), or digital marketing timelines?
                We&apos;ve answered the most common ones here.
              </p>

              <div className="relative mt-8 overflow-hidden rounded-3xl border border-brand-navy/10 bg-white p-2 shadow-xl ring-1 ring-black/5">
                <div className="relative h-64 w-full overflow-hidden rounded-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
                    alt="Team collaborating on a digital project"
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />

                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl border border-white/20 bg-white/10 p-3.5 text-white backdrop-blur-md">
                    <div>
                      <p className="text-xs font-extrabold uppercase tracking-wider text-amber-300">Need Immediate Help?</p>
                      <p className="text-sm font-semibold text-white">Chat with Our Tech Experts</p>
                    </div>
                    <Link
                      href="/contact"
                      className="rounded-lg bg-white px-3.5 py-1.5 text-xs font-bold text-brand-navy transition hover:bg-amber-300"
                    >
                      Ask Us
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.2}>
              <FaqAccordion items={faqs} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 16. Call to Action */}
      <section className="bg-brand-gradient px-6 py-20 text-center text-white shadow-xl">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-[var(--font-heading)] text-3xl font-extrabold md:text-4xl">
            Ready to grow your business?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/90">
            Tell us about your project and get a free consultation from our expert team.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-white px-8 py-3.5 font-bold text-brand-navy shadow-lg transition hover:bg-brand-navy hover:text-white"
          >
            Get A Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}