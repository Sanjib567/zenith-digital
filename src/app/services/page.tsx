import Link from "next/link";
import { ArrowRight, Layers, Sparkles } from "lucide-react";
import Reveal from "@/components/Reveal";
import ServiceCard from "@/components/ServiceCard";
import { navMenus, services, type NavItem } from "@/data/site";
import { findAllSolution } from "@/data/solutionsAll";
import { itemHref, slugify } from "@/lib/menu";

export const metadata = {
  title: "Our Services | Zenith Digital Agency",
  description:
    "Web development, SEO, ecommerce and digital marketing services from Zenith Digital Agency.",
};

const WIDE = "relative w-full px-6 md:px-12 xl:px-20 2xl:px-28";

const GROUP_TONE = [
  { from: "#2563eb", to: "#7c3aed" },
  { from: "#db2777", to: "#e11d48" },
  { from: "#f97316", to: "#db2777" },
  { from: "#16a34a", to: "#0891b2" },
];

const CARD_TONES = [
  { from: "#2563eb", to: "#7c3aed" },
  { from: "#0891b2", to: "#2563eb" },
  { from: "#7c3aed", to: "#db2777" },
  { from: "#16a34a", to: "#0891b2" },
  { from: "#ea580c", to: "#e11d48" },
];

const servicesMenu = navMenus.find((m) => m.label === "Services");

function servicePath(item: NavItem) {
  const fromLabel = findAllSolution(slugify(item.label));
  if (fromLabel) return `/services/${fromLabel.slug}`;
  return servicesMenu ? itemHref(servicesMenu, item) : item.href;
}

export default function ServicesPage() {
  const sections = servicesMenu?.sections ?? [];

  return (
    <main className="relative w-full overflow-hidden bg-gradient-to-br from-white via-blue-50/70 to-rose-50/60">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="sv-wash absolute -inset-[20%]" />
        <div className="sv-blob absolute -left-32 top-16 h-[30rem] w-[30rem] rounded-full bg-brand-blue/20 blur-3xl" />
        <div className="sv-blob-b absolute -right-32 top-1/3 h-[32rem] w-[32rem] rounded-full bg-brand-purple/20 blur-3xl" />
      </div>

      <section className={`${WIDE} pb-10 pt-16 text-center`}>
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.3em] text-brand-blue shadow-md ring-1 ring-brand-blue/15">
            <Sparkles size={14} /> Services
          </span>
          <h1 className="mt-6 font-[var(--font-heading)] text-4xl font-extrabold text-brand-navy md:text-6xl">
            Our <span className="sv-gradient-text">Services</span>
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg font-semibold text-brand-navy/75 md:text-xl">
            Websites, search, ecommerce and ads — pick a core service below, then explore every specialist link.
          </p>
          <span className="sv-bar mx-auto mt-6 block h-1 rounded-full bg-gradient-to-r from-brand-blue via-brand-purple to-brand-orange" />
        </Reveal>
      </section>

      <section className={`${WIDE} pb-8`}>
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-blue">Core expertise</p>
          <h2 className="mt-2 font-[var(--font-heading)] text-3xl font-extrabold text-brand-navy">
            Four ways we grow your business
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.08}>
              <ServiceCard slug={s.slug} title={s.title} description={s.description} icon={s.icon} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className={`${WIDE} space-y-16 pb-28 pt-10`}>
        <Reveal>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-blue">All service links</p>
            <h2 className="mt-2 font-[var(--font-heading)] text-3xl font-extrabold text-brand-navy md:text-4xl">
              Explore every <span className="sv-gradient-text">service</span>
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-brand-navy/70">
              The same links from the Services menu, each in its own box so you can open the page you need.
            </p>
          </div>
        </Reveal>

        {sections.map((section, gi) => {
          const gTone = GROUP_TONE[gi % GROUP_TONE.length];
          return (
            <div key={section.title}>
              <Reveal>
                <div className="flex items-center gap-4">
                  <span
                    className="sv-badge flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-lg"
                    style={{ background: `linear-gradient(135deg, ${gTone.from}, ${gTone.to})` }}
                  >
                    <Layers size={22} />
                  </span>
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-[0.3em]" style={{ color: gTone.from }}>
                      {String(gi + 1).padStart(2, "0")}
                    </p>
                    <h3 className="font-[var(--font-heading)] text-2xl font-extrabold uppercase tracking-wide text-brand-navy md:text-3xl">
                      {section.title}
                    </h3>
                  </div>
                </div>
              </Reveal>

              <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                {section.items.map((item, i) => {
                  const Icon = item.icon;
                  const tone = CARD_TONES[i % CARD_TONES.length];
                  const detail = findAllSolution(slugify(item.label));
                  const href = servicePath(item);
                  return (
                    <Reveal key={item.label} delay={i * 0.06}>
                      <Link
                        href={href}
                        className="sv-card group relative flex h-full flex-col overflow-hidden rounded-3xl p-[1.5px] transition duration-500 hover:-translate-y-2"
                      >
                        <span
                          className="sv-border absolute inset-0 rounded-3xl opacity-60 transition duration-500 group-hover:opacity-100"
                          style={{ background: `linear-gradient(90deg, ${tone.from}, ${tone.to}, ${tone.from})` }}
                        />
                        <div className="relative flex h-full flex-col rounded-[calc(1.5rem-1.5px)] bg-white p-6">
                          <span
                            className="sv-badge relative flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-md transition duration-500 group-hover:rotate-6 group-hover:scale-110"
                            style={{ background: `linear-gradient(135deg, ${tone.from}, ${tone.to})` }}
                          >
                            <Icon size={24} />
                          </span>
                          <h4 className="mt-5 font-[var(--font-heading)] text-lg font-extrabold text-brand-navy">
                            {item.label}
                          </h4>
                          <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-navy/70">
                            {detail?.tagline ?? `Open ${item.label} and see how we deliver this service.`}
                          </p>
                          <span className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold" style={{ color: tone.from }}>
                            Explore <ArrowRight size={16} className="transition duration-300 group-hover:translate-x-1" />
                          </span>
                        </div>
                      </Link>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          );
        })}

        <div className="pt-4 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-7 py-3 font-extrabold text-white shadow-lg transition hover:scale-105"
          >
            Talk to us about your project <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <style>{`
        @keyframes sv-wash { 0%,100% { transform: translate3d(-3%,-2%,0) scale(1); } 50% { transform: translate3d(3%,3%,0) scale(1.06); } }
        @keyframes sv-blob { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(50px,30px) scale(1.15); } }
        @keyframes sv-blob-b { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(-40px,-30px) scale(1.12); } }
        @keyframes sv-border { 0% { background-position: 0% 50%; } 100% { background-position: 200% 50%; } }
        @keyframes sv-badge { 0%,100% { box-shadow: 0 0 0 0 rgba(124,58,237,0.3); } 50% { box-shadow: 0 0 0 8px rgba(124,58,237,0); } }
        @keyframes sv-bar { from { width: 0; opacity: 0; } to { width: 120px; opacity: 1; } }
        .sv-wash {
          background:
            radial-gradient(circle at 20% 30%, rgba(37,99,235,0.14), transparent 45%),
            radial-gradient(circle at 80% 20%, rgba(124,58,237,0.12), transparent 45%),
            radial-gradient(circle at 60% 85%, rgba(234,88,12,0.08), transparent 50%);
          animation: sv-wash 22s ease-in-out infinite;
        }
        .sv-blob { animation: sv-blob 16s ease-in-out infinite; }
        .sv-blob-b { animation: sv-blob-b 19s ease-in-out infinite; }
        .sv-gradient-text {
          background: linear-gradient(90deg, #2563eb, #7c3aed, #db2777);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          background-size: 200% 100%;
          animation: sv-border 6s linear infinite alternate;
        }
        .sv-border { background-size: 200% 100%; animation: sv-border 4s linear infinite; }
        .sv-badge { animation: sv-badge 2.6s ease-out infinite; }
        .sv-bar { width: 120px; animation: sv-bar 1.1s cubic-bezier(0.22,1,0.36,1) 0.4s both; }
        @media (prefers-reduced-motion: reduce) {
          .sv-wash, .sv-blob, .sv-blob-b, .sv-gradient-text, .sv-border, .sv-badge, .sv-bar { animation: none !important; }
        }
      `}</style>
    </main>
  );
}
