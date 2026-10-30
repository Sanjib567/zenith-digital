
import Link from "next/link";
import { siteConfig } from "@/data/site";
import Reveal from "@/components/Reveal";
import {
  ArrowLeft,
  ArrowRight,
  Code2,
  Search,
  Megaphone,
  Sparkles,
  Target,
  Globe,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web & App Development",
    description:
      "We build high-performance websites and custom applications tailored to your business needs.",
  },
  {
    icon: Search,
    title: "SEO & AI Search Optimization",
    description:
      "We improve online visibility across search engines and AI-powered platforms through SEO and AEO/GEO strategies.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing & PPC",
    description:
      "We use data-driven marketing, paid advertising, and lead-generation strategies to help businesses reach the right audience.",
  },
];

export default function CompanyPage() {
  return (
    <main className="overflow-hidden bg-white text-brand-navy">
      {/* Hero Section */}
      <section className="relative px-6 py-20 sm:py-28">
        <div className="pointer-events-none absolute -left-20 top-10 -z-10 h-72 w-72 rounded-full bg-brand-blue/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 top-20 -z-10 h-72 w-72 rounded-full bg-brand-purple/10 blur-3xl" />

        <div className="mx-auto max-w-5xl">
          <Reveal>
            <Link
              href="/"
              className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue transition hover:gap-3"
            >
              <ArrowLeft size={16} />
              Back to Home
            </Link>

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-blue/20 bg-brand-blue/5 px-4 py-2 text-xs font-bold uppercase tracking-widest text-brand-blue">
              <Sparkles size={15} />
              About Us
            </div>

            <h1 className="max-w-4xl font-[var(--font-heading)] text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              About{" "}
              <span className="text-brand-gradient">
                {siteConfig.name}
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-xl font-semibold leading-relaxed text-brand-navy/80 sm:text-2xl">
              Empowering Businesses Through Technology, AI & Digital
              Innovation
            </p>
          </Reveal>
        </div>
      </section>

      {/* About Our Agency */}
      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Reveal>
              <div className="space-y-5 text-base leading-8 text-slate-600 sm:text-lg">
                <p>
                  Zenith Digital Agency is a digital solutions company based
                  in India, helping businesses build a stronger online
                  presence, reach the right audience, and achieve sustainable
                  growth. We specialize in web development, app development,
                  SEO, AI-powered search optimization (AEO/GEO), PPC
                  advertising, and digital marketing.
                </p>

                <p>
                  Our approach combines creative design, modern technology,
                  and data-driven strategies to deliver digital experiences
                  that support real business goals. From building
                  high-performance websites to improving visibility across
                  search engines and AI-powered platforms, we help brands
                  connect with customers and unlock new growth opportunities.
                </p>

                <p>
                  At Zenith Digital Agency, we believe digital success goes
                  beyond having an online presence. It is about creating
                  meaningful customer experiences, strengthening brand
                  authority, generating qualified leads, and turning
                  opportunities into measurable results.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Mission Card */}
          <div className="lg:col-span-4">
            <Reveal delay={0.15}>
              <div className="rounded-3xl border border-brand-blue/10 bg-gradient-to-br from-blue-50 via-white to-purple-50 p-7 shadow-lg">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-md">
                  <Target size={28} />
                </div>

                <h2 className="text-xl font-extrabold">Our Mission</h2>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Our mission is simple: to help businesses grow smarter,
                  reach further, and succeed in the digital world.
                </p>

                <div className="mt-6 flex items-center gap-3 border-t border-slate-200 pt-5">
                  <Globe size={21} className="shrink-0 text-brand-blue" />
                  <span className="text-sm font-semibold">
                    Helping Businesses Worldwide
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-widest text-brand-blue">
              What We Do
            </p>

            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              Digital Solutions for Business Growth
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-slate-600">
              We combine technology, creativity, and digital strategy to
              strengthen your online presence and support sustainable growth.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <Reveal key={service.title} delay={index * 0.1}>
                  <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gradient text-white">
                      <Icon size={23} />
                    </div>

                    <h3 className="text-lg font-bold">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {service.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="px-6 py-20">
        <Reveal>
          <div className="mx-auto max-w-5xl rounded-3xl bg-brand-gradient px-7 py-12 text-center text-white shadow-xl sm:px-12 sm:py-16">
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              Ready to Grow Your Business?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/90">
              Let&apos;s build meaningful digital experiences that strengthen
              your online presence, connect you with the right audience, and
              support your business goals.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-brand-navy shadow-lg transition hover:scale-105"
            >
              Let&apos;s Talk
              <ArrowRight size={17} />
            </Link>
          </div>
        </Reveal>
      </section>

      {/* Footer Statement */}
      <footer className="border-t border-slate-100 px-6 py-8 text-center">
        <p className="text-sm font-semibold text-slate-600">
          {siteConfig.name} — Your Partner in Digital Transformation & Growth.
        </p>
      </footer>
    </main>
  );
}
