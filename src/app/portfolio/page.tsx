import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/portfolio";

export const metadata = {
  title: "Portfolio | Zenith Digital Agency",
  description: "Web design and development projects delivered by Zenith Digital Agency.",
};

export default function PortfolioPage() {
  return (
    <main className="relative overflow-hidden bg-slate-50 px-6 py-20">
      {/* Animated background: slow colour wash and drifting glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="portfolio-wash absolute -inset-[30%]" />
        <div className="portfolio-orb-a absolute -left-24 top-24 h-80 w-80 rounded-full bg-brand-blue/20 blur-3xl" />
        <div className="portfolio-orb-b absolute -right-24 top-1/2 h-96 w-96 rounded-full bg-brand-purple/20 blur-3xl" />
        <div className="portfolio-orb-c absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-brand-orange/15 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <Link href="/" className="text-sm font-bold text-brand-blue hover:underline">
          ← Back to home
        </Link>

        <div className="mt-8 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-brand-blue">Our Work</p>
          <h1 className="mt-3 font-[var(--font-heading)] text-3xl font-extrabold md:text-5xl">
            <span className="text-brand-gradient">Web Design &amp; Development Portfolio</span>
          </h1>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.image} name={p.name} image={p.image} url={p.url} service={p.service} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes wash-shift {
          0%   { transform: translate3d(-4%, -2%, 0) scale(1); }
          50%  { transform: translate3d(3%, 3%, 0) scale(1.06); }
          100% { transform: translate3d(-2%, 4%, 0) scale(1.02); }
        }
        @keyframes orb-a {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50%      { transform: translate(50px, 30px) scale(1.2); }
        }
        @keyframes orb-b {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50%      { transform: translate(-40px, -30px) scale(1.15); }
        }
        @keyframes orb-c {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50%      { transform: translate(30px, -40px) scale(1.1); }
        }
        .portfolio-wash {
          background:
            radial-gradient(circle at 20% 30%, rgba(37, 99, 235, 0.12), transparent 45%),
            radial-gradient(circle at 80% 20%, rgba(124, 58, 237, 0.10), transparent 45%),
            radial-gradient(circle at 60% 85%, rgba(225, 29, 72, 0.07), transparent 50%);
          animation: wash-shift 22s ease-in-out infinite;
        }
        .portfolio-orb-a { animation: orb-a 16s ease-in-out infinite; }
        .portfolio-orb-b { animation: orb-b 19s ease-in-out infinite; }
        .portfolio-orb-c { animation: orb-c 21s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .portfolio-wash, .portfolio-orb-a, .portfolio-orb-b, .portfolio-orb-c { animation: none !important; }
        }
      `}</style>
    </main>
  );
}