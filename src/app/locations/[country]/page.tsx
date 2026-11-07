import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  Atom,
  Bot,
  Cog,
  Code,
  Code2,
  MessageCircle,
  Monitor,
  Palette,
  Search,
  Smartphone,
  Target,
  Terminal,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { siteConfig } from "@/data/site";
import {
  countryPages,
  digitalServices,
  getCountry,
  type ServiceKey,
} from "@/data/locationPages";

const ICONS: Record<ServiceKey, LucideIcon> = {
  search: Search,
  target: Target,
  monitor: Monitor,
  palette: Palette,
  smartphone: Smartphone,
  bot: Bot,
  cog: Cog,
  atom: Atom,
  zap: Zap,
  code2: Code2,
  code: Code,
  terminal: Terminal,
};

// Each service card cycles through these colour themes
const tones = [
  { from: "from-blue-600", to: "to-violet-600", glow: "bg-blue-500" },
  { from: "from-cyan-500", to: "to-blue-600", glow: "bg-cyan-400" },
  { from: "from-violet-600", to: "to-fuchsia-600", glow: "bg-fuchsia-500" },
  { from: "from-orange-500", to: "to-rose-600", glow: "bg-orange-400" },
  { from: "from-emerald-500", to: "to-cyan-600", glow: "bg-emerald-400" },
  { from: "from-rose-500", to: "to-violet-600", glow: "bg-rose-400" },
];

// Country flag image from flagcdn.com. Available widths: 160, 320, 640, 1280.
const flag = (code: string, width: number) => `https://flagcdn.com/w${width}/${code.toLowerCase()}.png`;

export function generateStaticParams() {
  return countryPages.map((c) => ({ country: c.slug }));
}

export default async function CountryPage({
  params,
}: {
  params: Promise<{ country: string }>;
}) {
  const { country } = await params;
  const c = getCountry(country);
  if (!c) notFound();

  const stats = [
    "5+ Years Experience",
    "100+ Projects Delivered",
    "25+ Team Members",
    `Serving ${c.name} Businesses`,
  ];
  const others = countryPages.filter((o) => o.slug !== c.slug);
  const whatsappLink = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    `Hello Zenith Digital, I need digital services in ${c.name}.`
  )}`;

  return (
    <>
      {/* Hero with country flag */}
      <section className="relative overflow-hidden bg-brand-gradient text-white">
        <img
          src={flag(c.code, 1280)}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full object-cover opacity-20"
        />
        <div className="pointer-events-none absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-white/10" />
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-white/10" />

        <div className="relative mx-auto max-w-4xl px-6 py-20 text-center">
          {/* Flag emblem with a pulsing ring */}
          <div className="relative mx-auto mb-6 h-32 w-32">
            <span className="absolute inset-0 animate-ping rounded-full bg-white/30" />
            <div className="relative h-32 w-32 overflow-hidden rounded-full shadow-2xl ring-4 ring-white/50">
              <img src={flag(c.code, 320)} alt={`${c.name} flag`} className="h-full w-full object-cover" />
            </div>
          </div>
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-white/80">{c.code}</p>
          <h1 className="mt-2 font-[var(--font-heading)] text-4xl font-extrabold md:text-6xl">{c.heroTitle}</h1>
          <p className="mt-4 text-lg font-bold md:text-xl">{c.subtitle}</p>
          <p className="mx-auto mt-4 max-w-2xl text-white/90">{c.heroText}</p>
        </div>
      </section>

      {/* Stats strip */}
      <div className="border-b border-slate-100 bg-slate-50">
        <ul className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-2 px-6 py-4 text-sm font-semibold text-slate-700">
          {stats.map((s, i) => (
            <li key={s} className="flex items-center gap-6">
              {i > 0 && <span className="text-slate-300">|</span>}
              {s}
            </li>
          ))}
        </ul>
      </div>

      {/* Intro with photo */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
        <div>
          <h2 className="font-[var(--font-heading)] text-3xl font-extrabold text-slate-900 md:text-4xl">
            {c.introTitle}
          </h2>
          {c.introParas.map((p) => (
            <p key={p} className="mt-5 text-lg leading-relaxed text-slate-600">
              {p}
            </p>
          ))}
          <p className="mt-5 text-sm text-slate-500">
            <strong className="text-slate-700">We serve clients in:</strong> {c.reach}.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 font-semibold text-white shadow-md transition hover:scale-105"
            >
              About {c.name} Services <ArrowRight size={16} />
            </Link>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 font-semibold text-white shadow-md transition hover:scale-105"
            >
              <MessageCircle size={18} /> WhatsApp Us
            </a>
          </div>
        </div>
        <img
          src={`https://picsum.photos/seed/${c.slug}-intro/900/600`}
          alt={`Digital services in ${c.name}`}
          className="w-full rounded-3xl object-cover shadow-2xl"
        />
      </section>

      {/* Services grid with glowing icon tiles */}
      <section className="relative overflow-hidden bg-slate-50 px-6 py-20">
        <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-rose-200/40 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-brand-blue">What we do</p>
            <h2 className="mt-2 font-[var(--font-heading)] text-3xl font-extrabold text-slate-900 md:text-4xl">
              Our Services in {c.name}
            </h2>
            <p className="mt-3 text-slate-600">{digitalServices.length} specialist services — click any to explore</p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {digitalServices.map((s, i) => {
              const Icon = ICONS[s.icon];
              const t = tones[i % tones.length];
              return (
                <Link key={s.title} href={s.href} className="group relative block h-full">
                  {/* Gradient border that appears on hover */}
                  <div
                    className={`absolute -inset-px rounded-3xl bg-gradient-to-br ${t.from} ${t.to} opacity-0 transition duration-500 group-hover:opacity-100`}
                  />

                  <div className="relative flex h-full items-start gap-5 overflow-hidden rounded-3xl bg-white p-6 shadow-sm transition duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl">
                    {/* Corner glow */}
                    <div
                      className={`absolute -right-12 -top-12 h-36 w-36 rounded-full ${t.glow} opacity-10 blur-2xl transition duration-500 group-hover:opacity-30`}
                    />

                    {/* Icon tile */}
                    <div className="relative shrink-0">
                      <div
                        className={`absolute inset-0 rounded-2xl ${t.glow} opacity-40 blur-lg transition duration-500 group-hover:opacity-80`}
                      />
                      <span
                        className={`relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br ${t.from} ${t.to} text-white shadow-lg transition duration-500 group-hover:rotate-6 group-hover:scale-110`}
                      >
                        {/* Shine sweep on hover */}
                        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition duration-700 group-hover:translate-x-full" />
                        <Icon size={28} className="relative" />
                      </span>
                    </div>

                    {/* Text */}
                    <div className="min-w-0 flex-1">
                      <h3 className="font-[var(--font-heading)] text-lg font-extrabold text-slate-900">{s.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600">{s.desc}</p>
                      <span
                        className={`mt-3 inline-flex items-center gap-1 bg-gradient-to-r ${t.from} ${t.to} bg-clip-text text-sm font-bold text-transparent`}
                      >
                        Explore
                        <ArrowRight size={14} className="text-current transition group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Other locations with flags */}
      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-[var(--font-heading)] text-3xl font-extrabold text-slate-900">Other Locations</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/locations/${o.slug}`}
                className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 font-semibold text-slate-900 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <img
                  src={flag(o.code, 160)}
                  alt={`${o.name} flag`}
                  className="h-12 w-12 rounded-full object-cover shadow ring-2 ring-white"
                />
                {o.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* Call to action with animated buttons */}
      <section className="bg-brand-gradient px-6 py-16 text-center text-white">
        <h2 className="font-[var(--font-heading)] text-3xl font-extrabold md:text-4xl">
          Ready to grow in {c.name}?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-white/85">
          Tell us about your project and get a free consultation from our team.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="group relative overflow-hidden rounded-full bg-white px-8 py-3 font-semibold text-brand-navy shadow-xl transition hover:scale-105"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-brand-blue/20 to-transparent transition duration-700 group-hover:translate-x-full" />
            <span className="relative">Get A Free Consultation</span>
          </Link>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border-2 border-white px-8 py-3 font-semibold text-white transition hover:scale-105 hover:bg-white/10"
          >
            <span className="relative flex h-3 w-3">
              <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]" />
              <span className="relative h-3 w-3 rounded-full bg-[#25D366]" />
            </span>
            <span className="relative">Chat on WhatsApp</span>
          </a>
        </div>
      </section>
    </>
  );
}