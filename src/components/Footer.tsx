import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig, services, navMenus } from "@/data/site";

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

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-navy text-white">
      <div className="h-1 w-full bg-brand-gradient" />

      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="inline-block rounded-xl bg-white p-2 shadow-lg">
            <img src="/images/zenith-logo.jpeg" alt="Zenith Digital Agency logo" className="h-20 w-auto" />
          </Link>
          <p className="mt-6 text-sm leading-relaxed text-white/70">
            {siteConfig.tagline}. We build fast websites, online stores and AI-driven SEO campaigns that bring real customers.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition hover:-translate-y-1 hover:border-transparent hover:bg-brand-gradient hover:text-white"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-[var(--font-heading)] text-lg font-bold">Services</h3>
          <div className="mt-2 h-0.5 w-10 rounded-full bg-brand-gradient" />
          <ul className="mt-6 space-y-3 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="group flex items-center gap-2 text-white/70 transition hover:text-white">
                  <ArrowRight size={14} className="text-brand-blue transition group-hover:translate-x-1" />
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-[var(--font-heading)] text-lg font-bold">Company</h3>
          <div className="mt-2 h-0.5 w-10 rounded-full bg-brand-gradient" />
          <ul className="mt-6 space-y-3 text-sm">
            {navMenus.map((m) => (
              <li key={m.label}>
                <Link href={m.href} className="group flex items-center gap-2 text-white/70 transition hover:text-white">
                  <ArrowRight size={14} className="text-brand-blue transition group-hover:translate-x-1" />
                  {m.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-[var(--font-heading)] text-lg font-bold">Contact</h3>
          <div className="mt-2 h-0.5 w-10 rounded-full bg-brand-gradient" />
          <ul className="mt-6 space-y-4 text-sm text-white/70">
            <li>
              <a href={`mailto:${siteConfig.email}`} className="flex items-start gap-3 hover:text-white">
                <Mail size={18} className="mt-0.5 shrink-0 text-brand-blue" />
                {siteConfig.email}
              </a>
            </li>
            <li>
              <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="flex items-start gap-3 hover:text-white">
                <Phone size={18} className="mt-0.5 shrink-0 text-brand-blue" />
                {siteConfig.phone}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-brand-blue" />
              {siteConfig.location}
            </li>
          </ul>
          <a
            href={`https://wa.me/${siteConfig.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:scale-105"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-white/50 md:flex-row">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p>Built for growth. Found by search. Trusted by clients.</p>
        </div>
      </div>
    </footer>
  );
}