import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import { navMenus, siteConfig } from "@/data/site";
import { findItem, findMenu, isExternalHref, itemHref, menuSlug, slugify } from "@/lib/menu";
import ServiceDetail from "@/components/ServiceDetail";
import ServicePage from "@/components/ServicePage";
import TechPage from "@/components/TechPage";
import CompanyPage from "@/components/CompanyPage";
import AboutPage from "@/components/AboutPage";
import { VideoReviewsPage, ClientsPage } from "@/components/Showcase";
import { RecentWorkPage } from "@/components/RecentWork";
import { FaqPage, ContactUsPage, PrivacyPage, TermsPage } from "@/components/SupportPages";
import { findAiService } from "@/data/aiRegistry";
import { findAllSolution as findSolution } from "@/data/solutionsAll";
import { findTech } from "@/data/technologies";
import { findCompany } from "@/data/company";

export function generateStaticParams() {
  return navMenus
    .filter((m) => m.sections)
    .flatMap((m) =>
      (m.sections ?? []).flatMap((s) =>
        s.items
          .filter((i) => !isExternalHref(i.href))
          .map((i) => ({ menu: menuSlug(m), item: slugify(i.label) }))
      )
    );
}

export default async function MenuItemPage({
  params,
}: {
  params: Promise<{ menu: string; item: string }>;
}) {
  const { menu: menuParam, item: itemParam } = await params;

  if (menuParam === "ai-solutions") {
    const detail = findAiService(itemParam);
    if (detail) return <ServiceDetail service={detail} />;
  }

  if (menuParam === "services") {
    const solution = findSolution(itemParam);
    if (solution) return <ServicePage page={solution} />;
  }

  if (menuParam === "technologies") {
    const tech = findTech(itemParam);
    if (tech) return <TechPage tech={tech} />;
  }

  if (menuParam === "contact") {
    if (itemParam === "contact-us") redirect("/contact");
    if (itemParam === "get-a-quote") redirect("/contact/get-quote");
    if (itemParam === "schedule-a-meeting") redirect("/contact/schedule-meeting");
  }

  if (menuParam === "company") {
    if (itemParam === "our-pricing") redirect("/company/pricing");
    if (itemParam === "about-us") return <AboutPage />;
    if (itemParam === "faq") return <FaqPage />;
    if (itemParam === "contact-us") return <ContactUsPage />;
    if (itemParam === "privacy-policy") return <PrivacyPage />;
    if (itemParam === "terms-conditions") return <TermsPage />;
    const page = findCompany(itemParam);
    if (page?.label === "Video Client Reviews") return <VideoReviewsPage />;
    if (page?.label === "What Our Clients Say") return <ClientsPage />;
    if (page?.label === "Recent Work / Case Studies") return <RecentWorkPage />;
    if (page) return <CompanyPage page={page} />;
  }

  const menu = findMenu(menuParam);
  const found = menu ? findItem(menu, itemParam) : null;
  if (!menu || !found) notFound();

  const { item, section } = found;
  const Icon = item.icon;
  const related = section.items.filter((i) => i.label !== item.label);

  return (
    <>
      <section className="bg-gradient-to-br from-white via-blue-50 to-rose-50">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <Link href="/" className="text-sm font-semibold text-brand-blue hover:underline">
            ← Back to home
          </Link>
          <div className="mt-8 flex items-center gap-5">
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-lg">
              <Icon size={30} />
            </span>
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-blue">
                {menu.label} · {section.title}
              </p>
              <h1 className="mt-1 font-[var(--font-heading)] text-4xl font-extrabold text-brand-navy md:text-5xl">
                {item.label}
              </h1>
            </div>
          </div>
          <p className="mt-8 max-w-3xl text-lg text-brand-navy/70">
            {item.label} is part of our {menu.headerTitle ?? menu.label} services. {menu.headerText}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 font-semibold text-white shadow-md transition hover:scale-105"
            >
              Get A Free Consultation <ArrowRight size={16} />
            </Link>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 font-semibold text-white shadow-md transition hover:scale-105"
            >
              <MessageCircle size={18} /> WhatsApp Us
            </a>
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 rounded-full border-2 border-brand-orange px-6 py-3 font-semibold text-brand-navy transition hover:bg-brand-orange/10"
            >
              <Phone size={18} /> Call Us
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="font-[var(--font-heading)] text-3xl font-bold text-brand-navy">Related in {section.title}</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((r) => {
            const RIcon = r.icon;
            return (
              <Link
                key={r.label}
                href={itemHref(menu, r)}
                className="flex items-center gap-3 rounded-2xl border border-brand-navy/10 bg-white p-5 font-semibold text-brand-navy shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <RIcon size={20} className="shrink-0 text-brand-blue" />
                {r.label}
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}