import Link from "next/link";
import {
  ArrowRight,
  ExternalLink,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Linkedin,
  Instagram,
  Facebook,
} from "lucide-react";
import { siteConfig, navMenus, type MegaMenu, type NavItem } from "@/data/site";
import { itemHref, slugify } from "@/lib/menu";
import { findAllSolution } from "@/data/solutionsAll";
import BackToTop from "@/components/BackToTop";

function TwitterBirdIcon({ size = 16 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path d="M23.953 4.57a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.06a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.936 4.936 0 0 0 4.604 3.417 9.867 9.867 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0 0 24 4.59z" />
    </svg>
  );
}

function XIcon({ size = 14 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
  );
}

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/zenithdigitalagency/home/",
    className: "bg-[#0A66C2] hover:bg-[#004182]",
    Icon: Linkedin,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/zenithdigitalagency/",
    className: "bg-[linear-gradient(135deg,#f9ce34_0%,#ee2a7b_50%,#6228d7_100%)] hover:brightness-110",
    Icon: Instagram,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/Zenithdigitalagencydelhi/",
    className: "bg-[#1877F2] hover:bg-[#0d65d9]",
    Icon: Facebook,
  },
  {
    label: "Twitter",
    href: "https://twitter.com/zenithdigitalag",
    className: "bg-[#1DA1F2] hover:bg-[#0d8bd9]",
    Icon: TwitterBirdIcon,
  },
  {
    label: "X",
    href: "https://x.com/zenithdigitalag",
    className: "bg-black ring-1 ring-white/25 hover:bg-neutral-900",
    Icon: XIcon,
  },
];

function menuLinkHref(menu: MegaMenu, item: NavItem) {
  const match = findAllSolution(slugify(item.label));
  if (match) return `/services/${match.slug}`;
  return itemHref(menu, item);
}

function menuGroups(label: string) {
  const menu = navMenus.find((m) => m.label === label);
  if (!menu?.sections) return [];
  return menu.sections.map((section) => ({
    title: section.title,
    links: section.items.map((item) => ({
      label: item.label,
      href: menuLinkHref(menu, item),
    })),
  }));
}

const aiGroups = menuGroups("AI Solutions");
const serviceGroups = menuGroups("Services");

const whatsappLink = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
  "Hello Zenith Digital, I would like a free consultation."
)}`;

const mapQuery = encodeURIComponent(siteConfig.address);
const mapEmbed = `https://www.google.com/maps?q=${mapQuery}&output=embed`;
const mapOpen = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

type LinkItem = { label: string; href: string };

function SocialRow() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {socials.map(({ label, href, className, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          title={label}
          className={`flex h-8 w-8 items-center justify-center rounded-full text-white shadow-md transition hover:-translate-y-0.5 sm:h-9 sm:w-9 ${className}`}
        >
          <Icon size={16} />
        </a>
      ))}
    </div>
  );
}

function FooterColumn({
  title,
  groups,
}: {
  title: string;
  groups: { title: string; links: LinkItem[] }[];
}) {
  return (
    <div>
      <h3 className="font-[var(--font-heading)] text-[11px] font-extrabold uppercase tracking-wider text-white sm:text-xs">
        {title}
      </h3>
      <span className="mt-1.5 block h-0.5 w-7 rounded-full bg-brand-gradient" />
      <div className="mt-3 columns-1 gap-x-5 sm:columns-2">
        {groups.map((group) => (
          <div key={group.title} className="mb-3 break-inside-avoid">
            {groups.length > 1 && (
              <p className="mb-1.5 text-[10px] font-extrabold uppercase tracking-[0.16em] text-blue-300/90">
                {group.title}
              </p>
            )}
            <ul className="space-y-1">
              {group.links.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="group inline-flex items-start gap-1.5 text-[12px] font-semibold leading-snug text-white/90 transition hover:text-blue-300 sm:text-[13px]"
                  >
                    <ArrowRight size={12} className="mt-0.5 shrink-0 text-blue-400 transition group-hover:translate-x-0.5" />
                    <span>{l.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer id="footer" className="relative overflow-hidden bg-[#07060f] text-white">
      <div className="relative mx-auto max-w-7xl px-4 pt-8 sm:px-6 sm:pt-10">
        <div className="flex flex-col items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center sm:flex-row sm:text-left">
          <div className="min-w-0">
            <p className="font-[var(--font-heading)] text-sm font-extrabold sm:text-base">
              Ready to grow your business online?
            </p>
            <p className="mt-0.5 text-[11px] text-white/65 sm:text-xs">
              Free consultation within one business day.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <SocialRow />
            <Link
              href="/contact/get-quote"
              className="group inline-flex items-center gap-1.5 rounded-full bg-brand-gradient px-4 py-2 text-xs font-bold text-white shadow-md transition hover:scale-105"
            >
              Get A Free Consultation
              <ArrowRight size={14} className="transition group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        <div className="mt-8 grid gap-7 sm:grid-cols-2 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.15fr)_minmax(0,1.15fr)_minmax(0,0.85fr)]">
          <div>
            <Link
              href="/"
              className="group inline-flex rounded-2xl bg-white p-3.5 shadow-xl ring-1 ring-white/20 transition hover:scale-105 sm:p-4"
            >
              <img
                src="/images/zenith-logo.jpeg"
                alt="Zenith Digital Agency logo"
                className="h-24 w-auto object-contain sm:h-28 lg:h-32"
              />
            </Link>
            <p className="mt-3 text-[12px] leading-relaxed text-white/75 sm:text-[13px]">
              {siteConfig.name} builds websites, AI search and digital marketing from {siteConfig.location}.
            </p>
            <p className="mt-3 text-[10px] font-extrabold uppercase tracking-[0.18em] text-blue-300">Follow us</p>
            <div className="mt-2">
              <SocialRow />
            </div>
          </div>

          <FooterColumn title="AI Solutions" groups={aiGroups} />
          <FooterColumn title="Services" groups={serviceGroups} />

          <div>
            <h3 className="font-[var(--font-heading)] text-[11px] font-extrabold uppercase tracking-wider text-white sm:text-xs">
              Contact
            </h3>
            <span className="mt-1.5 block h-0.5 w-7 rounded-full bg-brand-gradient" />
            <ul className="mt-3 space-y-1.5 text-[12px] font-semibold text-white sm:text-[13px]">
              <li>
                <Link href="/contact" className="transition hover:text-blue-300">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/contact/get-quote" className="transition hover:text-blue-300">
                  Get a Quote
                </Link>
              </li>
              <li>
                <Link href="/contact/schedule-meeting" className="transition hover:text-blue-300">
                  Schedule a Meeting
                </Link>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="flex items-start gap-2 transition hover:text-blue-300">
                  <Mail size={13} className="mt-0.5 shrink-0 text-blue-400" />
                  <span className="break-all">{siteConfig.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="flex items-start gap-2 transition hover:text-blue-300"
                >
                  <Phone size={13} className="mt-0.5 shrink-0 text-blue-400" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={mapOpen}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 leading-snug transition hover:text-blue-300"
                >
                  <MapPin size={13} className="mt-0.5 shrink-0 text-blue-400" />
                  <span>{siteConfig.address}</span>
                </a>
              </li>
            </ul>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-[#25D366] px-3.5 py-1.5 text-[12px] font-bold text-white shadow-md transition hover:scale-105"
            >
              <MessageCircle size={14} /> Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-7 overflow-hidden rounded-xl border border-white/10 bg-white/5">
          <div className="flex flex-col gap-2 px-3 py-2.5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-gradient text-white">
                <MapPin size={13} />
              </span>
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-blue-300">Our office</p>
                <p className="text-[12px] font-bold text-white">{siteConfig.address}</p>
              </div>
            </div>
            <a
              href={mapOpen}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-[11px] font-bold text-white ring-1 ring-white/20 transition hover:bg-white/20"
            >
              Open in Maps <ExternalLink size={12} />
            </a>
          </div>
          <iframe
            title={`Map showing ${siteConfig.name} office`}
            src={mapEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-36 w-full border-0 sm:h-40"
            allowFullScreen
          />
        </div>

        <div className="mt-6 flex flex-col items-center gap-3 border-t border-white/10 py-4 sm:flex-row sm:justify-between">
          <p className="text-center font-[var(--font-heading)] text-sm font-extrabold tracking-wide sm:text-base">
            <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">AI Driven</span>
            <span className="mx-1.5 text-white/30">-</span>
            <span className="text-white">Design</span>
            <span className="mx-1.5 text-white/30">-</span>
            <span className="bg-gradient-to-r from-rose-500 to-orange-400 bg-clip-text text-transparent">Deliver</span>
          </p>
          <div className="flex items-center gap-2.5">
            <div className="inline-flex items-center rounded-lg bg-white p-1.5 shadow-md">
              <img src="/images/adds.webp" alt="Accepted payment methods" className="h-6 w-auto object-contain sm:h-7" />
            </div>
            <BackToTop />
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-black/40">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-1 px-4 py-2.5 text-center text-[11px] text-white/55 sm:px-6 sm:flex-row sm:text-left">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p>{siteConfig.location} · AI SEO · Web Development · Digital Marketing</p>
        </div>
      </div>
    </footer>
  );
}
