"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";
import { siteConfig } from "@/data/site";

const PAYPAL_EMAIL = "zenithdigitalagency@gmail.com";

type Plan = {
  no: string;
  name: string;
  price: number;
  from: string;
  to: string;
  popular?: boolean;
  features: string[];
};

const plans: Plan[] = [
  {
    no: "01",
    name: "START UP",
    price: 499,
    from: "#2563eb",
    to: "#7c3aed",
    features: [
      "Responsive Website Design",
      "Upto 10 Pages",
      "Animated Slider",
      "Enquiry Form",
      "Google Map Integration",
      "Design Revisions",
      "Social Media Icon Links",
      "24/7 Tech Support",
    ],
  },
  {
    no: "02",
    name: "BUSINESS (CMS)",
    price: 699,
    from: "#ff4f6d",
    to: "#ec4899",
    popular: true,
    features: [
      "CMS Development (WordPress)",
      "Upto 30 Pages",
      "Admin Panel",
      "Plugins Integration",
      "Google Map Integration",
      "Design Revisions",
      "Social Media Icon Links",
      "24/7 Tech Support",
    ],
  },
  {
    no: "03",
    name: "ECOMMERCE",
    price: 899,
    from: "#7c3aed",
    to: "#ec4899",
    features: [
      "Ecommerce Development",
      "Unlimited Products",
      "Admin Panel",
      "Payment Gateway Integration",
      "Members Area",
      "Chat Facility",
      "Social Media Icon Links",
      "24/7 Tech Support",
    ],
  },
  {
    no: "04",
    name: "CUSTOM APP",
    price: 1199,
    from: "#2563eb",
    to: "#ff4f6d",
    features: [
      "Application Development",
      "Unlimited Pages",
      "Admin Panel",
      "Members Area",
      "Customer Area",
      "Hardcore Programming",
      "Traning Ducuments",
      "24/7 Tech Support",
    ],
  },
];

// Direct PayPal checkout link (does not go through the old Zenith website)
const payLink = (p: Plan) => {
  const params = new URLSearchParams({
    cmd: "_xclick",
    business: PAYPAL_EMAIL,
    item_name: `Web Development - ${p.name}`,
    amount: String(p.price),
    currency_code: "USD",
    no_shipping: "1",
    // Optional: change these when you deploy your new site
    return: "https://zenithdigitalagency.com/thank-you",
    cancel_return: "http://localhost:3000/company/pricing",
  });
  return `https://www.paypal.com/cgi-bin/webscr?${params.toString()}`;
};

const glance = [
  { prefix: "$", end: 499, suffix: "", label: "Starting price" },
  { prefix: "", end: 4, suffix: "", label: "Packages to choose" },
  { prefix: "", end: 24, suffix: "/7", label: "Tech support" },
  { prefix: "", end: 100, suffix: "%", label: "Transparent pricing" },
];

/* ───────── Count-up number ───────── */
function Counter({
  end,
  prefix,
  suffix,
  trigger,
}: {
  end: number;
  prefix: string;
  suffix: string;
  trigger: number;
}) {
  // Starts at the final value so the server render and no-JS view show real numbers
  const [val, setVal] = useState(end);

  useEffect(() => {
    if (trigger === 0) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setVal(end);
      return;
    }

    let raf = 0;
    const duration = 1600;
    const start = performance.now();

    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3); // ease-out
      setVal(Math.round(end * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };

    setVal(0);
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [trigger, end]);

  return (
    <>
      {prefix}
      {val}
      {suffix}
    </>
  );
}

function GlanceTile({
  item,
  run,
}: {
  item: (typeof glance)[number];
  run: number;
}) {
  const [hover, setHover] = useState(0);

  return (
    <div
      onMouseEnter={() => setHover((h) => h + 1)}
      className="cursor-default rounded-2xl bg-white px-2 py-5 text-center shadow-lg transition hover:-translate-y-1 sm:px-4 sm:py-7"
    >
      <p className="text-3xl font-extrabold tabular-nums text-[#5b3ee8] sm:text-4xl">
        <Counter
          end={item.end}
          prefix={item.prefix}
          suffix={item.suffix}
          trigger={run + hover}
        />
      </p>
      <p className="mt-1.5 text-xs font-semibold text-brand-navy sm:mt-2 sm:text-sm">
        {item.label}
      </p>
    </div>
  );
}

function GlanceStats() {
  const ref = useRef<HTMLDivElement>(null);
  const [run, setRun] = useState(0);

  // Every time the box enters the screen (scrolling down or back up), count again
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setRun((r) => r + 1);
      },
      { threshold: 0.4 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="mt-5 grid grid-cols-2 gap-3 sm:mt-6 sm:gap-5">
      {glance.map((g) => (
        <GlanceTile key={g.label} item={g} run={run} />
      ))}
    </div>
  );
}

export default function PricingPage() {
  return (
    <>
      {/* ───────── HERO ───────── */}
      <section className="zp-hero relative isolate overflow-hidden text-white">
        <div aria-hidden className="zp-grid absolute inset-0 -z-10" />
        <span aria-hidden className="zp-glow zp-glow-a" />
        <span aria-hidden className="zp-glow zp-glow-b" />

        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-12 sm:px-6 md:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          <div className="min-w-0">
            <nav className="text-xs font-bold text-white/90 sm:text-sm">
              <Link href="/" className="hover:underline">Home</Link>
              <span className="mx-1.5 text-white/60 sm:mx-2">/</span>
              <Link href="/menu/company/about-us" className="hover:underline">Company</Link>
              <span className="mx-1.5 text-white/60 sm:mx-2">/</span>
              <span>Our Pricing</span>
            </nav>

            <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.2em] backdrop-blur sm:mt-8 sm:px-5 sm:py-3 sm:text-sm sm:tracking-[0.3em]">
              <Sparkles size={14} /> Transparent Pricing
            </span>

            <h1 className="mt-5 font-[var(--font-heading)] text-[2rem] font-extrabold leading-[1.15] sm:mt-8 sm:text-5xl md:text-7xl md:leading-[1.1]">
              Web development packages that fit your budget
            </h1>

            <p className="mt-5 max-w-2xl text-base font-medium text-white/90 sm:mt-8 sm:text-xl">
              All our packages are 100% transparent and come with complete details on exactly what
              you get. Pick a plan and pay securely with PayPal.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href="#packages"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3 font-bold text-[#6d28d9] shadow-lg transition hover:scale-105"
              >
                View Packages <ArrowRight size={18} />
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/80 px-7 py-3 font-bold text-white transition hover:bg-white/15"
              >
                <MessageCircle size={18} /> Talk to Us
              </a>
            </div>
          </div>

          {/* Glass card */}
          <div className="min-w-0 rounded-3xl border border-white/25 bg-white/10 p-5 shadow-2xl backdrop-blur-md sm:rounded-[2.5rem] sm:p-8">
            <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-white/90 sm:text-sm sm:tracking-[0.3em]">
              Pricing at a glance
            </p>
            <GlanceStats />
          </div>
        </div>
      </section>

      {/* ───────── PRICING ───────── */}
      <section
        id="packages"
        className="zp-light relative isolate overflow-hidden pb-28 pt-12 sm:py-24"
      >
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <span className="zp-blob zp-b-blue" />
          <span className="zp-blob zp-b-red" />
          <span className="zp-blob zp-b-pink" />
        </div>

        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-brand-navy sm:text-sm sm:tracking-[0.4em]">
              Our Pricing
            </p>
            <h2 className="mt-3 bg-gradient-to-r from-[#2563eb] via-[#ff4f6d] to-[#ec4899] bg-clip-text font-[var(--font-heading)] text-3xl font-extrabold leading-tight text-transparent md:text-5xl">
              Web Development Packages
            </h2>
            <p className="mx-auto mt-4 max-w-4xl text-sm text-brand-navy/75 sm:mt-6 sm:text-lg">
              All our packages are 100% transparent and come with complete details on exactly what
              get with each package. To know exactly where you’re going to invest your money, find
              out our below-given packages with an exact quote! We serve you Web Development
              Pricing packages in categories, and they are mentioned below:
            </p>
          </div>

          <div className="mt-10 space-y-7 sm:mt-16 sm:space-y-8">
            {plans.map((p, i) => (
              <div
                key={p.name}
                style={{
                  backgroundImage: `linear-gradient(135deg, ${p.from}, ${p.to})`,
                  animationDelay: `${i * 140}ms`,
                }}
                className="zp-card relative rounded-3xl p-[2px] shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl sm:rounded-[2rem]"
              >
                {p.popular && (
                  <span
                    style={{ backgroundImage: `linear-gradient(135deg, ${p.from}, ${p.to})` }}
                    className="absolute -top-3 right-5 z-10 rounded-full px-4 py-1 text-[10px] font-extrabold uppercase tracking-widest text-white shadow-md sm:right-8 sm:px-5 sm:text-xs"
                  >
                    Most Popular
                  </span>
                )}

                <div className="grid overflow-hidden rounded-[calc(1.5rem-2px)] bg-white sm:rounded-[calc(2rem-2px)] md:grid-cols-[300px_1fr]">
                  {/* Price panel: compact row on mobile, tall column on desktop */}
                  <div
                    style={{ backgroundImage: `linear-gradient(135deg, ${p.from}, ${p.to})` }}
                    className="relative flex items-center justify-between gap-4 overflow-hidden px-5 py-5 text-white md:flex-col md:items-start md:justify-center md:p-8"
                  >
                    <span className="pointer-events-none absolute -right-2 -top-3 text-[5rem] font-black leading-none text-white/10 md:-right-4 md:-top-6 md:text-[8rem] md:text-white/15">
                      {p.no}
                    </span>

                    {/* Left: plan name + label */}
                    <div className="relative min-w-0">
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/90 md:text-sm md:tracking-[0.3em]">
                        {p.name}
                      </p>
                      <p className="mt-1.5 text-xs font-medium text-white/85 md:mt-5 md:text-sm">
                        Starts from
                      </p>
                    </div>

                    {/* Right: price + currency note */}
                   <div className="relative shrink-0 text-right md:text-left">
  <p className="flex items-baseline justify-end font-extrabold leading-none md:justify-start">
    <span className="mr-1 text-4xl md:mr-1.5 md:text-5xl">$</span>
    <span className="text-4xl md:text-6xl">{p.price}</span>
  </p>
  <p className="mt-2 text-[10px] font-semibold uppercase tracking-widest text-white/80 md:mt-3 md:text-xs">
    USD · one-time
  </p>
</div>
                  </div>

                  {/* Features + button */}
                  <div className="flex min-w-0 flex-col p-5 sm:p-8">
                    <ul className="grid flex-1 grid-cols-1 gap-x-8 gap-y-2.5 sm:grid-cols-2 sm:gap-y-3">
                      {p.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-start gap-3 text-sm font-medium text-brand-navy/85 sm:items-center sm:text-base"
                        >
                          <span
                            style={{ backgroundImage: `linear-gradient(135deg, ${p.from}, ${p.to})` }}
                            className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-white sm:mt-0 sm:h-6 sm:w-6"
                          >
                            <Check size={12} strokeWidth={3} />
                          </span>
                          <span className="min-w-0">{f}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex flex-col items-stretch gap-4 border-t border-brand-navy/10 pt-5 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:pt-6">
                      <p className="flex items-center justify-center gap-2 text-xs text-brand-navy/60 sm:justify-start sm:text-sm">
                        <ShieldCheck size={16} /> Secure payment via PayPal
                      </p>
                      <a
                        href={payLink(p)}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ backgroundImage: `linear-gradient(135deg, ${p.from}, ${p.to})` }}
                        className="inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-bold text-white shadow-lg transition hover:scale-105 sm:w-auto sm:px-8 sm:text-lg"
                      >
                        Subscribe · ${p.price} <ArrowRight size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .zp-hero {
          background: linear-gradient(120deg, #7c3aed, #a21caf, #e11d74, #f43f5e, #a21caf, #7c3aed);
          background-size: 300% 300%;
          animation: zpShift 16s ease infinite;
        }
        .zp-grid {
          background-image:
            linear-gradient(rgba(255,255,255,.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.06) 1px, transparent 1px);
          background-size: 48px 48px;
        }
        .zp-glow { position: absolute; border-radius: 9999px; filter: blur(80px); opacity: .45; pointer-events: none; }
        .zp-glow-a { width: 420px; height: 420px; background: #2563eb; top: -120px; left: -100px; animation: zpFloatA 18s ease-in-out infinite; }
        .zp-glow-b { width: 380px; height: 380px; background: #ff4f6d; bottom: -120px; right: 10%; animation: zpFloatB 20s ease-in-out infinite; }

        .zp-light {
          background: linear-gradient(120deg, #eef4ff, #fff1f4, #fdeaf5, #eef4ff);
          background-size: 300% 300%;
          animation: zpShift 18s ease infinite;
        }
        .zp-blob { position: absolute; border-radius: 9999px; filter: blur(80px); opacity: .4; }
        .zp-b-blue { width: 380px; height: 380px; background: #2563eb; top: 5%; left: -120px; animation: zpFloatA 20s ease-in-out infinite; }
        .zp-b-red  { width: 340px; height: 340px; background: #ff4f6d; top: 45%; right: -100px; animation: zpFloatB 22s ease-in-out infinite; }
        .zp-b-pink { width: 360px; height: 360px; background: #ec4899; bottom: -100px; left: 30%; animation: zpFloatA 24s ease-in-out infinite reverse; }

        .zp-card { opacity: 0; transform: translateY(30px); animation: zpIn .7s ease forwards; }

        @keyframes zpShift { 0%,100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
        @keyframes zpFloatA { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(120px,70px) scale(1.15); } }
        @keyframes zpFloatB { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(-100px,60px) scale(1.2); } }
        @keyframes zpIn { to { opacity: 1; transform: translateY(0); } }

        /* Smaller background glows on phones */
        @media (max-width: 640px) {
          .zp-glow-a, .zp-b-blue { width: 240px; height: 240px; }
          .zp-glow-b, .zp-b-red, .zp-b-pink { width: 220px; height: 220px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .zp-hero, .zp-light, .zp-glow, .zp-blob, .zp-card { animation: none; opacity: 1; transform: none; }
        }
      `}</style>
    </>
  );
}