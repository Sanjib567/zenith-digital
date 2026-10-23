import Link from "next/link";
import Hero from "@/components/Hero";
import MarqueeBar from "@/components/MarqueeBar";
import AboutSection from "@/components/AboutSection";
import ToolsPlatforms from "@/components/ToolsPlatforms";
import ClientTestimonials from "@/components/ClientTestimonials";
import RecentWork from "@/components/RecentWork";
import IndustriesAndTools from "@/components/IndustriesAndTools";
import EngagementModels from "@/components/EngagementModels";
import ToolsMarquee from "@/components/ToolsMarquee";
import Reveal from "@/components/Reveal";
import FaqAccordion from "@/components/FaqAccordion";
import ServiceCard from "@/components/ServiceCard";
import { services, whyUs, faqs } from "@/data/site";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-white via-blue-50/50 to-rose-50/50 overflow-hidden">

      {/* 1. Hero Banner */}
      <Hero />

      {/* 2. Main Animated Ticker Bar */}
      <MarqueeBar />

      {/* 3. Modern About Us Section */}
      <AboutSection />

      {/* 4. Our Expertise / Web, App & Digital Marketing Services */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-blue">Our Expertise</p>
          <h2 className="mt-2 font-[var(--font-heading)] text-3xl font-bold md:text-4xl text-brand-navy">
            <span className="text-brand-gradient">Web Development, Digital Marketing &amp; AI SEO</span>
          </h2>
          <p className="mt-4 max-w-2xl text-brand-navy/70">
            Everything your business needs to look professional online, get found, and turn visitors into customers.
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

      {/* 5. Video Client Reviews Section */}
      <section className="bg-gradient-to-b from-blue-50/40 via-purple-50/20 to-transparent px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-purple">Client Feedback</p>
            <h2 className="mt-2 font-[var(--font-heading)] text-3xl font-bold md:text-4xl">
              <span className="text-brand-gradient">Video Client Reviews</span>
            </h2>
            <p className="mt-2 text-brand-navy/70">Hear directly from the businesses we&apos;ve helped scale online.</p>
          </Reveal>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              { name: "Global E-Commerce Brand", role: "CEO", thumbnail: "https://picsum.photos/seed/review1/600/400" },
              { name: "Tech Startup Founder", role: "Founder", thumbnail: "https://picsum.photos/seed/review2/600/400" },
              { name: "Healthcare Practice", role: "Marketing Director", thumbnail: "https://picsum.photos/seed/review3/600/400" },
            ].map((v, i) => (
              <Reveal key={v.name} delay={i * 0.1}>
                <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg border border-brand-navy/5 transition hover:-translate-y-1 hover:shadow-2xl">
                  <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                    <img src={v.thumbnail} alt={v.name} className="h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-gradient text-white shadow-xl transition group-hover:scale-110">
                        <span className="ml-1 text-xl">▶</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-brand-navy">{v.name}</h3>
                    <p className="text-xs font-semibold text-brand-blue">{v.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. AI & SEO Tools Platforms Section */}
      <ToolsPlatforms />

      {/* 7. Why Choose Zenith Digital */}
      <section className="relative overflow-hidden bg-brand-navy px-6 py-20 text-white shadow-inner">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/10 via-brand-purple/10 to-brand-orange/10 pointer-events-none" />
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

      {/* ⚡ Animated Transition Bar ⚡ */}
      <div className="relative z-10 bg-brand-gradient py-3 text-white shadow-lg overflow-hidden">
        <div className="flex w-full overflow-hidden whitespace-nowrap">
          <div className="animate-marquee flex items-center shrink-0 gap-10 px-4">
            {["⭐ 100+ Delivered Projects", "🔥 99% Satisfaction Rate", "🚀 AI-Powered Growth", "⚡ 24/7 Support", "🌍 Global Reach from India"].map((badge, idx) => (
              <span key={idx} className="flex items-center gap-2 text-sm md:text-base font-bold tracking-wider uppercase text-white">
                {badge}
              </span>
            ))}
          </div>
          <div className="animate-marquee flex items-center shrink-0 gap-10 px-4" aria-hidden="true">
            {["⭐ 100+ Delivered Projects", "🔥 99% Satisfaction Rate", "🚀 AI-Powered Growth", "⚡ 24/7 Support", "🌍 Global Reach from India"].map((badge, idx) => (
              <span key={`dup-${idx}`} className="flex items-center gap-2 text-sm md:text-base font-bold tracking-wider uppercase text-white">
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 8. Happy Clients / What Our Clients Say & Google Reviews CTA */}
      <ClientTestimonials />

      {/* 9. Trusted by Industry Leaders Section */}
      <section className="mx-auto max-w-7xl px-6 py-16 text-center">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Proven Results</p>
          <h2 className="mt-2 font-[var(--font-heading)] text-2xl font-bold md:text-3xl">
            <span className="text-brand-gradient">Trusted by Industry Leaders</span>
          </h2>
        </Reveal>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-8 md:gap-14 opacity-70 grayscale transition hover:grayscale-0">
          {["Healthcare", "Real Estate", "Ecommerce Stacks", "FinTech Solutions", "SaaS Enterprises"].map((partner) => (
            <span key={partner} className="text-lg md:text-xl font-extrabold text-slate-700 tracking-wider">
              {partner}
            </span>
          ))}
        </div>
      </section>

      {/* 10 + 11. Industries & Tools (combined) */}
      <IndustriesAndTools />

      {/* 12. Flexible Ways to Engage (dark glowing section) */}
      <EngagementModels />

      {/* 13. High-Performance Recent Work Showcase */}
      <RecentWork />

      {/* 14. Blog & Insights Section */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange">Knowledge Hub</p>
          <h2 className="mt-2 font-[var(--font-heading)] text-3xl font-bold md:text-4xl">
            <span className="text-brand-gradient">Blog &amp; Insights</span>
          </h2>
          <p className="mt-2 text-brand-navy/70">Latest strategies on Web Development, AI Search, and Digital Marketing.</p>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { title: "Mastering AEO & GEO in 2026", cat: "AI SEO", date: "Oct 2026", seed: "blog1" },
            { title: "Why Next.js Outperforms Traditional CMS", cat: "Web Dev", date: "Oct 2026", seed: "blog2" },
            { title: "Scaling Local Businesses with Targeted Meta Ads", cat: "Marketing", date: "Sep 2026", seed: "blog3" },
          ].map((b, i) => (
            <Reveal key={b.title} delay={i * 0.1}>
              <div className="overflow-hidden rounded-2xl bg-white shadow-md border border-brand-navy/5">
                <img src={`https://picsum.photos/seed/${b.seed}/600/350`} alt={b.title} className="h-44 w-full object-cover" />
                <div className="p-5">
                  <span className="text-xs font-bold text-brand-blue uppercase">{b.cat}</span> • <span className="text-xs text-slate-500">{b.date}</span>
                  <h3 className="mt-2 text-base font-bold text-brand-navy">{b.title}</h3>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 15. AI & SEO Tools Marquee (dark, scrolling rows) */}
      <ToolsMarquee />

      {/* 16. Split FAQ Accordion Section (With Professional Team Image & Badge) */}
      <section id="faq" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">

          {/* Left Column: Heading + Styled Agency Image */}
          <div className="lg:col-span-5">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-blue">Got Questions?</span>
              <h2 className="mt-2 font-[var(--font-heading)] text-3xl font-extrabold text-brand-navy sm:text-4xl">
                Frequently Asked Questions About <span className="text-brand-gradient">Our Services</span>
              </h2>
              <p className="mt-4 text-sm text-brand-navy/70 leading-relaxed">
                Got questions about web development, AI search optimization (AEO/GEO), or digital marketing timelines? We&apos;ve answered the most common ones here.
              </p>

              {/* Agency image card */}
              <div className="relative mt-8 overflow-hidden rounded-3xl border border-brand-navy/10 bg-white p-2 shadow-xl ring-1 ring-black/5">
                <div className="relative h-64 w-full overflow-hidden rounded-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
                    alt="Zenith Digital Team Collaboration"
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />

                  {/* Floating Glassmorphism Badge */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl bg-white/10 p-3.5 backdrop-blur-md border border-white/20 text-white">
                    <div>
                      <p className="text-xs font-extrabold tracking-wider uppercase text-amber-300">Need Immediate Help?</p>
                      <p className="text-sm font-semibold text-white">Chat with Our Tech Experts</p>
                    </div>
                    <a
                      href="/contact"
                      className="rounded-lg bg-white px-3.5 py-1.5 text-xs font-bold text-brand-navy transition hover:bg-amber-300"
                    >
                      Ask Us
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: FAQ Accordion */}
          <div className="lg:col-span-7">
            <Reveal delay={0.2}>
              <FaqAccordion items={faqs} />
            </Reveal>
          </div>

        </div>
      </section>

      {/* 17. Call to Action Banner */}
      <section className="bg-brand-gradient px-6 py-20 text-center text-white shadow-xl">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-[var(--font-heading)] text-3xl font-extrabold md:text-4xl">Ready to grow your business?</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/90 text-lg">Tell us about your project and get a free consultation from our expert team.</p>
          <Link href="/contact" className="mt-8 inline-block rounded-full bg-white px-8 py-3.5 font-bold text-brand-navy shadow-lg transition hover:bg-brand-navy hover:text-white">
            Get A Free Consultation
          </Link>
        </div>
      </section>

    </div>
  );
}