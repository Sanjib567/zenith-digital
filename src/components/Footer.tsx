import Link from "next/link";
import { ArrowRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { siteConfig, services, navMenus } from "@/data/site";
import { countryPages } from "@/data/locationPages";
import BackToTop from "@/components/BackToTop";

const SHOW_MSME_BADGE = true;
const SHOW_PAYMENTS = true;

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm5.5-3.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z"
      />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M23.953 4.57a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.06a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.936 4.936 0 0 0 4.604 3.417 9.867 9.867 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0 0 24 4.59z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
  );
}

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/zenithdigitalagency/home/", Icon: LinkedInIcon },
  { label: "Instagram", href: "https://www.instagram.com/zenithdigitalagency/", Icon: InstagramIcon },
  { label: "Facebook", href: "https://www.facebook.com/Zenithdigitalagencydelhi/", Icon: FacebookIcon },
  { label: "Twitter", href: "https://twitter.com/zenithdigitalag", Icon: TwitterIcon },
  { label: "X", href: "https://x.com/zenithdigitalag", Icon: XIcon },
];

const flag = (code: string, width: number) => `https://flagcdn.com/w${width}/${code.toLowerCase()}.png`;

const aiLinks = navMenus.find((m) => m.label === "AI Solutions")?.sections?.[0]?.items ?? [];
const companyLinks = navMenus.find((m) => m.label === "Company")?.sections?.[0]?.items ?? [];

const whatsappLink = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
  "Hello Zenith Digital, I would like a free consultation."
)}`;

type LinkItem = { label: string; href: string };

// Column heading with a gradient underline, then bold white links with a blue arrow
function FooterColumn({ title, links }: { title: string; links: LinkItem[] }) {
  return (
    <div>
      <h3 className="font-[var(--font-heading)] text-base font-extrabold uppercase tracking-wider text-white">
        {title}
      </h3>
      <span className="mt-2 block h-0.5 w-10 rounded-full bg-brand-gradient" />
      <ul className="mt-5 space-y-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <Link
              href={l.href}
              className="group flex items-start gap-2 text-sm font-bold text-white transition-all duration-300 hover:translate-x-1 hover:text-blue-300"
            >
              <ArrowRight
                size={14}
                className="mt-0.5 shrink-0 text-blue-400 transition duration-300 group-hover:translate-x-1 group-hover:text-white"
              />
              <span>{l.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#07060f] text-white">
      {/* Soft colour glows */}
      <div className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-blue-600/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-rose-600/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 pt-14">
        {/* Call-to-action strip */}
        <div className="flex flex-col items-center justify-between gap-5 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur md:flex-row md:p-8">
          <div className="text-center md:text-left">
            <p className="font-[var(--font-heading)] text-xl font-extrabold md:text-2xl">
              Ready to grow your business online?
            </p>
            <p className="mt-1 text-sm text-white/70">
              Get a free consultation from our team within one business day.
            </p>
          </div>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:scale-105"
          >
            Get A Free Consultation
            <ArrowRight size={16} className="transition group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Main columns */}
        <div className="mt-14 grid gap-12 lg:grid-cols-12">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block rounded-2xl bg-white p-3 shadow-xl">
              <img src="/images/zenith-logo.jpeg" alt="Zenith Digital Agency logo" className="h-24 w-auto" />
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/70">
              {siteConfig.name} is an {siteConfig.tagline.toLowerCase()} based in {siteConfig.location}. We build fast
              websites, online stores and AI-driven search campaigns that bring real customers.
            </p>

            <p className="mt-8 text-xs font-extrabold uppercase tracking-widest text-white/50">Global presence</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {countryPages.map((c) => (
                <Link
                  key={c.slug}
                  href={`/locations/${c.slug}`}
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-bold text-white transition hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10"
                >
                  <img src={flag(c.code, 40)} alt="" aria-hidden="true" className="h-3.5 w-5 rounded-sm object-cover" />
                  {c.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-4">
            <FooterColumn title="AI Solutions" links={aiLinks.map((i) => ({ label: i.label, href: i.href }))} />

            <FooterColumn
              title="Services"
              links={services.map((s) => ({ label: s.title, href: `/services/${s.slug}` }))}
            />

            <FooterColumn title="Company" links={companyLinks.map((i) => ({ label: i.label, href: i.href }))} />

            {/* Contact column */}
            <div>
              <h3 className="font-[var(--font-heading)] text-base font-extrabold uppercase tracking-wider text-white">
                Contact
              </h3>
              <span className="mt-2 block h-0.5 w-10 rounded-full bg-brand-gradient" />
              <ul className="mt-5 space-y-3 text-sm font-bold text-white">
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="group flex items-start gap-3 transition hover:translate-x-1 hover:text-blue-300"
                  >
                    <Mail size={16} className="mt-0.5 shrink-0 text-blue-400" />
                    <span className="break-all">{siteConfig.email}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                    className="group flex items-start gap-3 transition hover:translate-x-1 hover:text-blue-300"
                  >
                    <Phone size={16} className="mt-0.5 shrink-0 text-blue-400" />
                    {siteConfig.phone}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-blue-400" />
                  {siteConfig.location}
                </li>
              </ul>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:scale-105"
              >
                <MessageCircle size={16} /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom row: socials, tagline, badges and back-to-top */}
        <div className="mt-12 grid items-center gap-8 border-t border-white/10 py-10 lg:grid-cols-3">
          <div className="flex justify-center gap-3 lg:justify-start">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition hover:-translate-y-1 hover:border-transparent hover:bg-brand-gradient"
              >
                <Icon />
              </a>
            ))}
          </div>

          <p className="text-center font-[var(--font-heading)] text-xl font-extrabold tracking-wide md:text-2xl">
            <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">AI Driven</span>
            <span className="mx-3 text-white/30">-</span>
            <span className="text-white">Design</span>
            <span className="mx-3 text-white/30">-</span>
            <span className="bg-gradient-to-r from-rose-500 to-orange-400 bg-clip-text text-transparent">Deliver</span>
          </p>

          <div className="flex flex-col items-center gap-4">
            {SHOW_MSME_BADGE && (
              <div className="inline-flex items-center rounded-xl bg-white p-2 shadow-lg">
                <img src="/images/msme.webp" alt="MSME registered" className="h-20 w-auto object-contain" />
              </div>
            )}
            <div className="flex items-center gap-4">
              {SHOW_PAYMENTS && (
                <div className="inline-flex items-center rounded-xl bg-white p-2 shadow-lg">
                  <img src="/images/adds.webp" alt="Accepted payment methods" className="h-11 w-auto object-contain" />
                </div>
              )}
              <BackToTop />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 bg-black/40">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-4 text-xs text-white/60 md:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <span>{siteConfig.location}</span>
            <span className="text-white/20">·</span>
            <span>AI SEO · Web Development · Digital Marketing</span>
          </div>
        </div>
      </div>
    </footer>
  );
}