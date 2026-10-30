import Link from "next/link";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/portfolio";

export default function Portfolio() {
  const featured = projects.slice(0, 9);

  return (
    <section className="bg-blue-50/60 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-brand-blue">Best Portfolio</p>
            <h2 className="mt-3 font-[var(--font-heading)] text-3xl font-extrabold text-brand-navy md:text-4xl">
              <span className="text-brand-gradient">Our Impressive Web Design &amp; Development Portfolio</span>
            </h2>
            <div className="mx-auto mt-5 flex items-center justify-center gap-2">
              <span className="h-2 w-2 rounded-full bg-brand-blue" />
              <span className="h-0.5 w-24 rounded-full bg-brand-blue" />
              <span className="h-2 w-2 rounded-full bg-brand-blue" />
            </div>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <Reveal key={p.image} delay={(i % 3) * 0.1}>
              <ProjectCard name={p.name} image={p.image} url={p.url} service={p.service} />
            </Reveal>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Link
            href="/portfolio"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-brand-navy via-brand-purple to-brand-blue px-10 py-4 text-base font-extrabold tracking-wide text-white shadow-xl transition duration-500 hover:-translate-y-1 hover:shadow-2xl"
          >
            {/* Shine that sweeps across on hover */}
            <span className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-1000 group-hover:translate-x-[420%]" />

            {/* Soft pulsing ring behind the button */}
            <span className="pointer-events-none absolute inset-0 rounded-full ring-2 ring-white/30 animate-pulse" />

            <span className="relative">View All Projects</span>

            {/* Arrow that slides forward on hover */}
            <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-white/20 transition duration-500 group-hover:translate-x-1 group-hover:bg-white/30">
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 fill-none stroke-current stroke-[2.5]"
                aria-hidden="true"
              >
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}