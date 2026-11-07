"use client";
import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Briefcase,
  CheckCircle2,
  Code2,
  Globe,
  Handshake,
  Headphones,
  Heart,
  Layers,
  Mail,
  Megaphone,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";
import { AboutWelcome, AboutGallery } from "@/components/Showcase";
import CountUp from "@/components/CountUp";
import Reveal from "@/components/Reveal";

type Tone = {
  from: string;
  to: string;
};

const BLUE_PINK: Tone = {
  from: "#2563eb",
  to: "#db2777",
};

const PINK_RED: Tone = {
  from: "#db2777",
  to: "#e11d48",
};

const PURPLE_BLUE: Tone = {
  from: "#7c3aed",
  to: "#2563eb",
};

const STATS = [
  { end: 15, suffix: "+", label: "Years of experience" },
  { end: 1076, suffix: "", label: "Projects completed" },
  { end: 1228, suffix: "", label: "Happy clients" },
  { end: 75, suffix: "", label: "Experienced employees" },
];

const SERVICES: {
  title: string;
  text: string;
  icon: LucideIcon;
  points: string[];
  tone: Tone;
}[] = [
  {
    title: "Web Design & Development",
    text: "Business websites with modern aesthetics and advanced features, built for every screen.",
    icon: Globe,
    points: [
      "eCommerce design",
      "Static and dynamic websites",
      "Responsive design",
      "Website redesign",
    ],
    tone: BLUE_PINK,
  },
  {
    title: "Platform Development",
    text: "Development across the platforms that power businesses of every size.",
    icon: Code2,
    points: [
      "WordPress",
      "PHP and .NET",
      "Shopify and Magento",
      "PrestaShop and Joomla",
    ],
    tone: PURPLE_BLUE,
  },
  {
    title: "Digital Marketing",
    text: "A full spectrum of marketing services to grow your online presence and revenue.",
    icon: Megaphone,
    points: [
      "SEO and eCommerce SEO",
      "Local SEO",
      "PPC management",
      "Email and social media marketing",
    ],
    tone: PINK_RED,
  },
];

const CLIENT_POINTS = [
  { title: "Advanced technical team", icon: Code2 },
  { title: "Professional advisers", icon: Briefcase },
  {
    title: "24/7 support with a dedicated project manager",
    icon: Headphones,
  },
  { title: "Client support and regular reports", icon: BarChart3 },
];

const TEAM_POINTS = [
  "Advanced advisory team",
  "Professional executors",
  "24/7 team assistance",
  "Direct conversation with the team leader",
];

const HISTORY_2019 = [
  {
    text: "Successfully satisfied 700+ clients while improving their ROI.",
    icon: TrendingUp,
  },
  {
    text: "Upgraded our technologies to match our clients' needs.",
    icon: Rocket,
  },
  {
    text: "Implemented new Google algorithms on client websites to keep them error free.",
    icon: Search,
  },
  {
    text: "Successfully added 550+ new clients alongside our existing 1300 subscribers.",
    icon: Users,
  },
];

const PROMISES = [
  {
    title: "Full co-operation",
    text: "A great team that works together, so every client gets the whole team's effort.",
    icon: Handshake,
  },
  {
    title: "Committed to our work",
    text: "We are committed to our work and accountable for the results we deliver.",
    icon: Heart,
  },
  {
    title: "Lifetime support",
    text: "Lifetime support and full assistance, long after the project launches.",
    icon: ShieldCheck,
  },
  {
    title: "Well organised",
    text: "A team structured around the work, so tasks move on time and nothing is lost.",
    icon: Layers,
  },
];

function Head({
  eyebrow,
  title,
  accent,
  lead,
}: {
  eyebrow: string;
  title: string;
  accent: string;
  lead: string;
}) {
  return (
    <div className="text-center">
      <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-blue-600">
        {eyebrow}
      </p>

      <h2 className="mt-3 text-3xl font-extrabold text-brand-navy md:text-5xl">
        {title} <span className="ab-gradient-text">{accent}</span>
      </h2>

      <p className="mx-auto mt-4 max-w-3xl text-base font-semibold leading-relaxed text-brand-navy/75 md:text-lg">
        {lead}
      </p>

      <span className="ab-bar mx-auto mt-5 block h-1.5 rounded-full" />
    </div>
  );
}

export default function AboutPage() {
  return (
    <main className="relative w-full overflow-hidden bg-gradient-to-br from-blue-50 via-pink-50 to-rose-50">

      {/* HERO SECTION */}

      <section className="ab-flow relative w-full overflow-hidden px-6 pb-32 pt-12 text-white md:px-12 md:pt-14 xl:px-20">

        <div className="ab-grid pointer-events-none absolute inset-0 opacity-25" />

        <div className="ab-blob pointer-events-none absolute -left-24 top-10 h-96 w-96 rounded-full bg-white/25 blur-3xl" />

        <div className="ab-blob ab-blob-b pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-amber-200/30 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">

          <div>
            <nav className="ab-rise flex flex-wrap items-center gap-2 text-xs font-bold text-white/85">
              <Link href="/">Home</Link>
              <span>/</span>
              <span>Company</span>
              <span>/</span>
              <span>About Us</span>
            </nav>

            <span className="ab-rise mt-7 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.25em] ring-1 ring-white/40 backdrop-blur">
              <Sparkles size={14} />
              Established 2005
            </span>

            <h1 className="ab-rise mt-5 text-4xl font-extrabold leading-tight md:text-6xl">
              A 360 degree digital marketing agency
            </h1>

            <p className="ab-rise mt-5 text-lg font-semibold text-white">
              Zenith Digital Agency is a comprehensive digital marketing firm
              with over 15 years of experience helping businesses grow online.
            </p>

            <div className="ab-rise mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-extrabold text-brand-navy shadow-xl transition hover:-translate-y-1"
              >
                Talk to our team
                <ArrowRight size={16} />
              </Link>

              <a
                href="#history"
                className="rounded-full border-2 border-white px-6 py-2.5 text-sm font-extrabold text-white transition hover:bg-white hover:text-brand-navy"
              >
                Our history
              </a>
            </div>
          </div>

          {/* STATS */}

          <div className="ab-rise relative mx-auto w-full max-w-md">
            <div className="ab-ring absolute -inset-2 rounded-[2rem] opacity-80 blur-xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/40 bg-white/15 p-7 shadow-2xl backdrop-blur-xl">

              <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-white">
                Zenith at a glance
              </p>

              <div className="mt-6 grid grid-cols-2 gap-4">
                {STATS.map((s, i) => (
                  <div
                    key={s.label}
                    className="ab-stat rounded-2xl bg-white p-4 text-center shadow-lg transition hover:-translate-y-1"
                    style={{ animationDelay: `${i * 120}ms` }}
                  >
                    <p className="text-3xl font-extrabold text-brand-gradient">
                      <CountUp
                        end={s.end}
                        suffix={s.suffix}
                        duration={1600 + i * 200}
                      />
                    </p>

                    <p className="mt-1 text-xs font-bold text-brand-navy/75">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SERVICES */}

      <section className="relative mx-auto max-w-6xl px-6 py-24">

        <Reveal>
          <Head
            eyebrow="What we offer"
            title="Services built for"
            accent="your growth"
            lead="Web design, development and digital marketing under one roof, with personalised strategies for each client's goals."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;

            return (
              <Reveal key={s.title} delay={i * 0.1}>
                <div className="ab-card group relative h-full overflow-hidden rounded-[2rem] p-[1.5px] transition duration-500 hover:-translate-y-2">

                  <span className="ab-border absolute inset-0 rounded-[2rem]" />

                  <div className="relative h-full rounded-[calc(2rem-1.5px)] bg-white p-7">

                    <span
                      className="ab-pulse flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg"
                      style={{
                        background: `linear-gradient(135deg, ${s.tone.from}, ${s.tone.to})`,
                      }}
                    >
                      <Icon size={26} />
                    </span>

                    <h3 className="mt-6 text-xl font-extrabold text-brand-navy">
                      {s.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-brand-navy/75">
                      {s.text}
                    </p>

                    <ul className="mt-5 space-y-2.5">
                      {s.points.map((p) => (
                        <li
                          key={p}
                          className="flex items-center gap-2.5 text-sm font-semibold text-brand-navy/85"
                        >
                          <CheckCircle2 size={16} className="shrink-0 text-blue-600" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* CLIENT CENTRIC APPROACH */}

      <section className="relative w-full px-6 py-24 md:px-12 xl:px-20">

        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">

          <Reveal>
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-pink-600">
                Client-centric approach
              </p>

              <h2 className="mt-3 text-3xl font-extrabold text-brand-navy md:text-4xl">
                Personal strategies,{" "}
                <span className="ab-gradient-text">
                  open communication
                </span>
              </h2>

              <p className="mt-5 text-base leading-relaxed text-brand-navy/80">
                We emphasise a client-focused methodology. Every strategy is
                tailored to the individual business objective, and our
                commitment to transparency shows in regular reporting and
                open channels of communication.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {CLIENT_POINTS.map((p, i) => {
              const Icon = p.icon;

              return (
                <Reveal key={p.title} delay={i * 0.1}>
                  <div className="ab-card group flex h-full items-center gap-4 rounded-3xl p-5 shadow-md ring-1 ring-white transition duration-500 hover:-translate-y-1 hover:shadow-xl">

                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-lg">
                      <Icon size={20} />
                    </span>

                    <p className="text-sm font-extrabold text-brand-navy">
                      {p.title}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>

        </div>
      </section>

      {/* TEAM SECTION - LARGE IMAGE + ANIMATIONS */}

      <section className="relative w-full overflow-hidden px-5 py-24 md:px-10 lg:px-16">

        <div className="mx-auto w-full max-w-7xl">

          <Reveal>
            <Head
              eyebrow="Our team"
              title="A great team with"
              accent="full co-operation"
              lead="Our experts are professional, knowledgeable and friendly, always ready to serve clients and assist with every aspect of their project."
            />
          </Reveal>

          <div className="mt-16 grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-5">

            {/* LARGE ANIMATED IMAGE */}

            <div className="w-full min-w-0 lg:col-span-3">
              <Reveal>
                <div className="ab-team-frame group relative w-full overflow-hidden rounded-[2rem] p-[3px]">

                  <div className="relative min-h-[350px] w-full overflow-hidden rounded-[calc(2rem-3px)] sm:aspect-[16/10] sm:min-h-0">

                    <Image
                      src="/images/team/group-photo.jpg"
                      alt="Zenith Digital Agency team"
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="ab-team-photo object-cover object-center"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                    <div className="ab-image-glow pointer-events-none absolute inset-0" />

                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-9">

                      <span className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/20 px-4 py-2 text-xs font-bold text-white backdrop-blur-lg">
                        <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
                        UNITED BY ONE VISION
                      </span>

                      <h3 className="mt-4 max-w-xl text-2xl font-extrabold text-white md:text-4xl">
                        The people behind your results.
                      </h3>

                      <p className="mt-2 text-sm font-medium text-white/90 md:text-base">
                        Creativity, technology and teamwork drive everything we do.
                      </p>

                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* INFORMATION CARD */}

            <div className="w-full min-w-0 lg:col-span-2">
              <Reveal delay={0.2}>
                <div className="ab-team-info relative h-full overflow-hidden rounded-[2rem] border border-blue-100 bg-white/80 p-7 shadow-xl backdrop-blur-xl md:p-9">

                  <div className="ab-info-orb absolute -right-12 -top-12 h-40 w-40 rounded-full bg-blue-400/15 blur-3xl" />

                  <div className="relative">

                    <span className="text-xs font-extrabold uppercase tracking-[0.3em] text-brand-blue">
                      How we work together
                    </span>

                    <h3 className="mt-4 text-2xl font-extrabold text-brand-navy md:text-3xl">
                      One Team.
                      <span className="ab-gradient-text block">
                        One Goal.
                      </span>
                    </h3>

                    <p className="mt-4 text-sm leading-relaxed text-brand-navy/75">
                      Our team works together to deliver reliable solutions,
                      creative ideas and exceptional client experiences.
                    </p>

                    <div className="mt-8 space-y-4">
                      {TEAM_POINTS.map((item, index) => (
                        <div
                          key={item}
                          className="ab-team-item flex items-center gap-4 rounded-2xl border border-blue-100 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-400 hover:shadow-lg"
                          style={{ animationDelay: `${index * 0.2}s` }}
                        >
                          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-md">
                            <CheckCircle2 size={22} />
                          </span>

                          <span className="text-sm font-bold text-brand-navy">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* HISTORY TIMELINE */}

      <section
        id="history"
        className="relative w-full px-6 py-24 md:px-12 xl:px-20"
      >
        <Reveal>
          <Head
            eyebrow="Our history"
            title="History of"
            accent="Zenith Digital Agency"
            lead="Since 2005 we have focused on delivering success with the latest skills and trending digital technologies."
          />
        </Reveal>

        <div className="relative mx-auto mt-16 max-w-4xl">

          <span className="ab-line absolute left-5 top-0 h-full w-1 rounded-full md:left-1/2 md:-translate-x-1/2" />

          <Reveal>
            <div className="relative mb-12 pl-16 md:pl-0">

              <span className="ab-node absolute left-0 top-2 flex h-10 w-10 items-center justify-center rounded-full bg-brand-gradient text-white shadow-lg md:left-1/2 md:-translate-x-1/2">
                <span className="text-[10px] font-extrabold">05</span>
              </span>

              <div className="ab-card rounded-3xl p-6 shadow-md ring-1 ring-slate-200 md:ml-auto md:mr-[calc(50%+2.5rem)] md:w-[calc(50%-3rem)] md:text-right">

                <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-brand-blue">
                  2005
                </p>

                <p className="mt-2 text-lg font-extrabold text-brand-navy">
                  Zenith Digital Agency is founded
                </p>

                <p className="mt-2 text-sm text-brand-navy/75">
                  Starting a journey that now spans more than 15 years of
                  digital marketing experience.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative pl-16 md:pl-0">

              <span className="ab-node absolute left-0 top-2 flex h-10 w-10 items-center justify-center rounded-full text-white shadow-lg md:left-1/2 md:-translate-x-1/2"
                style={{ background: `linear-gradient(135deg, ${PINK_RED.from}, ${PINK_RED.to})` }}
              >
                <Star size={18} />
              </span>

              <div className="ab-card rounded-3xl p-6 shadow-md ring-1 ring-slate-200 md:ml-[calc(50%+2.5rem)] md:w-[calc(50%-3rem)]">

                <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-pink-600">
                  2019
                </p>

                <p className="mt-2 text-lg font-extrabold text-brand-navy">
                  A year of big achievements
                </p>

                <ul className="mt-4 space-y-3">
                  {HISTORY_2019.map((h) => {
                    const Icon = h.icon;

                    return (
                      <li
                        key={h.text}
                        className="flex items-start gap-3 text-sm font-semibold text-brand-navy/85"
                      >
                        <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-gradient text-white">
                          <Icon size={14} />
                        </span>
                        {h.text}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </Reveal>

        </div>
      </section>

      {/* PROMISES */}

      <section className="relative w-full px-6 py-24 md:px-12 xl:px-20">

        <div className="ab-flow absolute inset-0 opacity-95" />

        <div className="relative mx-auto max-w-6xl">

          <Reveal>
            <div className="text-center text-white">
              <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-white/85">
                Our promise
              </p>

              <h2 className="mt-3 text-3xl font-extrabold md:text-5xl">
                We are committed to your success
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-base font-bold text-white/90">
                Full co-operation, dedicated work and support that lasts for life.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROMISES.map((p, i) => {
              const Icon = p.icon;

              return (
                <Reveal key={p.title} delay={i * 0.1}>
                  <div className="group h-full rounded-3xl bg-white/15 p-6 text-white ring-1 ring-white/25 backdrop-blur transition duration-500 hover:-translate-y-2 hover:bg-white/25">

                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-brand-blue shadow-lg">
                      <Icon size={22} />
                    </span>

                    <h3 className="mt-5 text-lg font-extrabold">
                      {p.title}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-white/90">
                      {p.text}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="relative w-full px-6 py-24 text-center md:px-12 xl:px-20">

        <Reveal>
          <div className="ab-card relative mx-auto max-w-3xl overflow-hidden rounded-[2.25rem] p-10 shadow-2xl ring-1 ring-white md:p-14">

            <span className="mx-auto mb-5 flex w-fit items-center gap-2 rounded-full bg-brand-gradient px-4 py-2 text-xs font-extrabold uppercase tracking-widest text-white shadow-md">
              <Rocket size={14} />
              Start your project
            </span>

            <h2 className="text-3xl font-extrabold text-brand-navy md:text-4xl">
              Ready to grow with a team that cares?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-base text-brand-navy/80">
              Tell us about your business and get a clear plan and a free
              quote within one business day.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-7 py-3.5 text-sm font-extrabold text-white shadow-xl transition hover:-translate-y-1"
              >
                Get A Free Consultation
                <ArrowRight size={16} />
              </Link>

              <a
                href="mailto:zenithdigitalagency@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border-2 border-brand-blue px-7 py-3 text-sm font-extrabold text-brand-blue transition hover:bg-brand-blue hover:text-white"
              >
                <Mail size={16} />
                Email us
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ANIMATION CSS */}

      <style jsx global>{`

        @keyframes abFlow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes abRise {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes abZoom {
          from { transform: scale(1); }
          to { transform: scale(1.12); }
        }

        @keyframes abShimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }

        @keyframes abFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes abTeamItem {
          from {
            opacity: 0;
            transform: translateX(25px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes abPulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(37,99,235,0.35);
          }
          50% {
            box-shadow: 0 0 0 10px rgba(37,99,235,0);
          }
        }

        .ab-flow {
          background: linear-gradient(
            120deg,
            #2563eb,
            #7c3aed,
            #db2777,
            #e11d48,
            #2563eb
          );
          background-size: 300% 300%;
          animation: abFlow 14s ease-in-out infinite;
        }

        .ab-grid {
          background-image:
            linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.12) 1px, transparent 1px);
          background-size: 40px 40px;
        }

        .ab-rise {
          animation: abRise 0.8s ease both;
        }

        .ab-stat {
          animation: abRise 0.8s ease both;
        }

        .ab-gradient-text {
          background: linear-gradient(
            90deg,
            #2563eb,
            #7c3aed,
            #db2777,
            #e11d48
          );
          background-size: 250% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: abFlow 6s linear infinite;
        }

        .ab-bar {
          width: 110px;
          background: linear-gradient(
            90deg,
            #2563eb,
            #db2777,
            #e11d48
          );
        }

        .ab-border {
          background: linear-gradient(
            90deg,
            #2563eb,
            #db2777,
            #e11d48,
            #7c3aed,
            #2563eb
          );
          background-size: 200% 200%;
          animation: abFlow 5s linear infinite;
        }

        .ab-ring {
          background: linear-gradient(
            135deg,
            #2563eb,
            #db2777,
            #e11d48,
            #7c3aed
          );
          background-size: 250% 250%;
          animation: abFlow 6s linear infinite;
        }

        .ab-pulse,
        .ab-node {
          animation: abPulse 2.6s ease-out infinite;
        }

        .ab-card {
          background: linear-gradient(
            120deg,
            #ffffff,
            #eff6ff,
            #fdf2f8,
            #ffffff
          );
          background-size: 300% 300%;
          animation: abFlow 12s ease-in-out infinite;
        }

        .ab-line {
          width: 4px;
          background: linear-gradient(
            180deg,
            #2563eb,
            #db2777,
            #e11d48
          );
        }

        /* TEAM IMAGE ANIMATIONS */

        .ab-team-frame {
          background: linear-gradient(
            120deg,
            #2563eb,
            #7c3aed,
            #db2777,
            #e11d48,
            #2563eb
          );
          background-size: 300% 300%;
          animation: abFlow 5s linear infinite;
          box-shadow: 0 25px 70px rgba(37,99,235,0.2);
        }

        .ab-team-photo {
          animation: abZoom 12s ease-in-out infinite alternate;
          transition: transform 1s ease;
        }

        .ab-team-frame:hover .ab-team-photo {
          transform: scale(1.15);
        }

        .ab-image-glow {
          background: linear-gradient(
            120deg,
            transparent 20%,
            rgba(255,255,255,0.25) 50%,
            transparent 80%
          );
          background-size: 200% 100%;
          animation: abShimmer 5s ease-in-out infinite;
        }

        .ab-team-info {
          animation: abFloat 6s ease-in-out infinite;
        }

        .ab-team-item {
          opacity: 0;
          animation: abTeamItem 0.8s ease forwards;
        }

        .ab-info-orb {
          animation: abFloat 7s ease-in-out infinite;
        }

        @media (max-width: 640px) {
          .ab-team-info {
            animation: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .ab-flow,
          .ab-rise,
          .ab-stat,
          .ab-gradient-text,
          .ab-border,
          .ab-ring,
          .ab-pulse,
          .ab-node,
          .ab-card,
          .ab-team-frame,
          .ab-team-photo,
          .ab-image-glow,
          .ab-team-info,
          .ab-team-item,
          .ab-info-orb {
            animation: none !important;
            transition: none !important;
          }
        }

      `}</style>

    </main>
  );
}
