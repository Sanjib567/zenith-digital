"use client";

import Link from "next/link";
import { ArrowRight, ChevronDown, Menu, X, type LucideIcon } from "lucide-react";
import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type MouseEvent as ReactMouseEvent,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
} from "react";
import { navMenus, type MegaMenu } from "@/data/site";
import { flagUrl, isExternalHref, itemHref } from "@/lib/menu";

type Accent = { from: string; to: string };

const ACCENTS: Record<string, Accent> = {
  "AI Solutions": { from: "#2563eb", to: "#7c3aed" },
  Services: { from: "#7c3aed", to: "#db2777" },
  Technologies: { from: "#0891b2", to: "#2563eb" },
  Company: { from: "#ea580c", to: "#e11d48" },
  Locations: { from: "#16a34a", to: "#0891b2" },
  Contact: { from: "#db2777", to: "#7c3aed" },
};

const accentOf = (label: string): Accent => ACCENTS[label] ?? { from: "#2563eb", to: "#e11d48" };
const gradient = (a: Accent) => `linear-gradient(135deg, ${a.from}, ${a.to})`;

const FADE_MS = 200;
const CLOSE_DELAY_MS = 80; // Snappier close response

function IconBadge({
  Icon,
  size,
  box,
  accent,
  solid = false,
}: {
  Icon: LucideIcon;
  size: number;
  box: string;
  accent: Accent;
  solid?: boolean;
}) {
  const style: CSSProperties = solid
    ? { background: gradient(accent), color: "#ffffff" }
    : { backgroundColor: `${accent.from}1f`, color: accent.from };
  return (
    <span className={`flex shrink-0 items-center justify-center rounded-lg ${box}`} style={style}>
      <Icon size={size} />
    </span>
  );
}

function ItemVisual({
  label,
  Icon,
  size,
  box,
  accent,
}: {
  label: string;
  Icon: LucideIcon;
  size: number;
  box: string;
  accent: Accent;
}) {
  const flag = flagUrl(label);
  if (flag) {
    return (
      <img
        src={flag}
        alt=""
        loading="lazy"
        className={`shrink-0 rounded-full object-cover shadow-sm ring-2 ring-white ${box}`}
      />
    );
  }
  return <IconBadge Icon={Icon} size={size} box={box} accent={accent} />;
}

function ItemLink({
  href,
  className,
  onNavigate,
  children,
}: {
  href: string;
  className: string;
  onNavigate: () => void;
  children: ReactNode;
}) {
  if (isExternalHref(href)) {
    const isWeb = href.startsWith("http");
    return (
      <a
        href={href}
        target={isWeb ? "_blank" : undefined}
        rel={isWeb ? "noopener noreferrer" : undefined}
        onClick={onNavigate}
        className={className}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} onClick={onNavigate} className={className}>
      {children}
    </Link>
  );
}

function MegaPanel({
  menu,
  visible,
  onNavigate,
  onMouseEnter,
  onMouseLeave,
}: {
  menu: MegaMenu;
  visible: boolean;
  onNavigate: () => void;
  onMouseEnter: () => void;
  onMouseLeave: (e?: ReactPointerEvent | ReactMouseEvent) => void;
}) {
  const accent = accentOf(menu.label);
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`absolute inset-x-0 top-full z-50 flex justify-center px-4 pt-3 transition-all duration-200 ease-out sm:px-6 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0"
      }`}
    >
      <div className="max-h-[75vh] w-full max-w-[1120px] overflow-y-auto rounded-b-3xl bg-white shadow-2xl ring-1 ring-black/5">
        {/* Header */}
        <div className="flex items-center gap-5 border-b border-slate-100 px-6 py-6 md:px-8">
          <IconBadge Icon={menu.icon} size={30} box="h-16 w-16 rounded-2xl" accent={accent} solid />
          <div>
            <p className="font-[var(--font-heading)] text-2xl font-extrabold" style={{ color: accent.from }}>
              {menu.headerTitle ?? menu.label}
            </p>
            <p className="text-sm text-slate-600">{menu.headerText}</p>
          </div>
        </div>

        <div className="flex">
          {/* Sections and links */}
          <div className="grid flex-1 gap-x-10 gap-y-8 p-6 md:grid-cols-2 md:p-8">
            {(menu.sections ?? []).map((section) => (
              <div key={section.title}>
                <p
                  className="flex items-center gap-3 text-sm font-extrabold uppercase tracking-wider"
                  style={{ color: accent.to }}
                >
                  <IconBadge Icon={section.items[0].icon} size={18} box="h-9 w-9" accent={accent} />
                  {section.title}
                </p>
                <ul className="mt-4 space-y-1">
                  {section.items.map((item, i) => (
                    <li key={item.label} className="animate-fade-up" style={{ animationDelay: `${i * 45}ms` }}>
                      <ItemLink
                        href={itemHref(menu, item)}
                        onNavigate={onNavigate}
                        className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-800 transition hover:bg-slate-50"
                      >
                        <ItemVisual
                          label={item.label}
                          Icon={item.icon}
                          size={16}
                          box="h-8 w-8"
                          accent={accent}
                        />
                        <span className="transition group-hover:translate-x-1">{item.label}</span>
                      </ItemLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Side panel */}
          {menu.panel && (
            <aside
              className="hidden w-80 flex-col justify-between p-6 xl:flex"
              style={{ background: `linear-gradient(180deg, ${accent.from}14, #ffffff)` }}
            >
              <div>
                <div className="flex items-center gap-3">
                  <IconBadge Icon={menu.icon} size={22} box="h-12 w-12 rounded-xl" accent={accent} solid />
                  <p className="text-xs font-extrabold uppercase tracking-widest" style={{ color: accent.from }}>
                    {menu.label}
                  </p>
                </div>
                <p className="mt-5 font-[var(--font-heading)] text-xl font-extrabold text-slate-900">
                  {menu.panel.title}
                </p>
                <p className="mt-2 text-sm text-slate-600">{menu.panel.text}</p>
                <ul className="mt-6 space-y-3">
                  {menu.panel.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-slate-800 shadow-sm"
                    >
                      <span className="h-6 w-1.5 shrink-0 rounded-full" style={{ background: gradient(accent) }} />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href={menu.panel.ctaHref}
                onClick={onNavigate}
                className="mt-6 flex items-center justify-between rounded-full px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:scale-105"
                style={{ background: gradient(accent) }}
              >
                {menu.panel.ctaLabel}
                <ArrowRight size={16} />
              </Link>
            </aside>
          )}
        </div>
      </div>
    </div>
  );
}

function MobileMenu({ onNavigate }: { onNavigate: () => void }) {
  const [openSection, setOpenSection] = useState<string | null>(null);

  return (
    <div className="absolute inset-x-0 top-full z-50 max-h-[80vh] overflow-y-auto border-t border-slate-100 bg-white shadow-2xl xl:hidden">
      <ul className="divide-y divide-slate-100">
        {navMenus.map((menu) => {
          const accent = accentOf(menu.label);

          if (!menu.sections) {
            return (
              <li key={menu.label}>
                <Link
                  href={menu.href}
                  onClick={onNavigate}
                  className="flex items-center gap-3 px-6 py-4 text-base font-semibold text-slate-900"
                >
                  <IconBadge Icon={menu.icon} size={18} box="h-9 w-9" accent={accent} />
                  {menu.label}
                </Link>
              </li>
            );
          }

          const isOpen = openSection === menu.label;
          return (
            <li key={menu.label}>
              <button
                type="button"
                onClick={() => setOpenSection(isOpen ? null : menu.label)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between px-6 py-4 text-base font-semibold text-slate-900"
              >
                <span className="flex items-center gap-3">
                  <IconBadge Icon={menu.icon} size={18} box="h-9 w-9" accent={accent} />
                  {menu.label}
                </span>
                <ChevronDown size={18} className={`transition ${isOpen ? "rotate-180" : ""}`} />
              </button>

              {isOpen && (
                <div className="space-y-5 bg-slate-50 px-6 pb-5">
                  {menu.sections.map((section) => (
                    <div key={section.title}>
                      <p
                        className="flex items-center gap-2 pt-2 text-xs font-extrabold uppercase tracking-wider"
                        style={{ color: accent.to }}
                      >
                        <IconBadge Icon={section.items[0].icon} size={14} box="h-7 w-7" accent={accent} />
                        {section.title}
                      </p>
                      <ul className="mt-2 space-y-1">
                        {section.items.map((item) => (
                          <li key={item.label}>
                            <ItemLink
                              href={itemHref(menu, item)}
                              onNavigate={onNavigate}
                              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-800"
                            >
                              <ItemVisual
                                label={item.label}
                                Icon={item.icon}
                                size={14}
                                box="h-7 w-7"
                                accent={accent}
                              />
                              {item.label}
                            </ItemLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </li>
          );
        })}
      </ul>

      <div className="p-6">
        <Link
          href="/contact"
          onClick={onNavigate}
          className="block rounded-full bg-brand-gradient px-6 py-3 text-center text-sm font-semibold text-white shadow-md"
        >
          Get A Free Consultation
        </Link>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [shownMenu, setShownMenu] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const headerRef = useRef<HTMLElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastPointerType = useRef<string>("mouse");

  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  useEffect(() => {
    if (openMenu) {
      setShownMenu(openMenu);
      const frame = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(frame);
    }
    setVisible(false);
    const remove = setTimeout(() => setShownMenu(null), FADE_MS);
    return () => clearTimeout(remove);
  }, [openMenu]);

  useEffect(() => {
    const onPointerDown = (e: PointerEvent) => {
      lastPointerType.current = e.pointerType;
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        cancelClose();
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        cancelClose();
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
      cancelClose();
    };
  }, []);

  const closeAll = () => {
    cancelClose();
    setOpenMenu(null);
    setMobileOpen(false);
  };

  const handleHeaderLeave = (e?: ReactPointerEvent | ReactMouseEvent) => {
    if (e && "pointerType" in e && e.pointerType !== "mouse") return;
    cancelClose();
    closeTimer.current = setTimeout(() => {
      closeTimer.current = null;
      setOpenMenu(null);
    }, CLOSE_DELAY_MS);
  };

  const handleHeaderEnter = (e: ReactPointerEvent) => {
    if (e.pointerType === "mouse") cancelClose();
  };

  const onMenuEnter = (label: string) => (e: ReactPointerEvent) => {
    if (e.pointerType !== "mouse") return;
    cancelClose();
    setOpenMenu(label);
  };

  const onMenuClick = (label: string) => (e: ReactMouseEvent) => {
    e.preventDefault();
    cancelClose();
    setMobileOpen(false);
    setOpenMenu((current) => (current === label && lastPointerType.current === "touch" ? null : label));
  };

  const toggleMobile = () => {
    cancelClose();
    setOpenMenu(null);
    setMobileOpen((open) => !open);
  };

  const shown = navMenus.find((m) => m.label === shownMenu);

  return (
    <>
      {/* Invisible full-screen backdrop: triggers immediate closure when cursor moves down/away into the page content */}
      {openMenu && (
        <div
          aria-hidden="true"
          onMouseEnter={closeAll}
          className="fixed inset-0 z-40 bg-transparent"
        />
      )}

      <header
        ref={headerRef}
        onPointerEnter={handleHeaderEnter}
        onPointerLeave={handleHeaderLeave}
        className="sticky top-0 z-50 bg-white shadow-sm"
      >
        <nav className="relative mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-6 py-3">
          {/* Logo */}
          <Link href="/" onClick={closeAll} className="flex shrink-0 items-center">
            <img
              src="/images/zenith-logo.jpeg"
              alt="Zenith Digital Agency logo"
              className="h-16 w-auto object-contain xl:h-24 2xl:h-28"
            />
          </Link>

          {/* Desktop menu */}
          <ul className="hidden items-center gap-0.5 xl:flex 2xl:gap-1">
            {navMenus.map((menu) => {
              const accent = accentOf(menu.label);
              const hasMega = !!menu.sections;
              const isOpen = openMenu === menu.label;
              const className = `flex items-center gap-1.5 whitespace-nowrap rounded-full px-2.5 py-2 text-xs font-semibold transition 2xl:gap-2 2xl:px-3 2xl:text-sm ${
                isOpen ? "" : "text-slate-800 hover:bg-slate-100"
              }`;
              const activeStyle: CSSProperties | undefined = isOpen
                ? { backgroundColor: `${accent.from}1a`, color: accent.from }
                : undefined;

              return (
                <li key={menu.label} onPointerEnter={hasMega ? onMenuEnter(menu.label) : undefined}>
                  {hasMega ? (
                    <button
                      type="button"
                      onClick={onMenuClick(menu.label)}
                      aria-expanded={isOpen}
                      className={className}
                      style={activeStyle}
                    >
                      <IconBadge Icon={menu.icon} size={13} box="h-6 w-6" accent={accent} />
                      <span>{menu.label}</span>
                      <ChevronDown size={13} className={`shrink-0 transition ${isOpen ? "rotate-180" : ""}`} />
                    </button>
                  ) : (
                    <Link href={menu.href} onClick={closeAll} className={className}>
                      <IconBadge Icon={menu.icon} size={13} box="h-6 w-6" accent={accent} />
                      <span>{menu.label}</span>
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Right side: button and mobile toggle */}
          <div className="flex shrink-0 items-center gap-3">
            <div className="hidden sm:block">
              <Link
                href="/contact"
                onClick={closeAll}
                className="inline-block whitespace-nowrap rounded-full bg-brand-gradient px-4 py-2.5 text-xs font-semibold text-white shadow-md transition hover:scale-105 2xl:px-6 2xl:text-sm"
              >
                Get A Free Consultation
              </Link>
            </div>

            <button
              type="button"
              onClick={toggleMobile}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-800 xl:hidden"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {shown && (
            <MegaPanel
              menu={shown}
              visible={visible}
              onNavigate={closeAll}
              onMouseEnter={cancelClose}
              onMouseLeave={handleHeaderLeave}
            />
          )}
          {mobileOpen && <MobileMenu onNavigate={closeAll} />}
        </nav>
      </header>
    </>
  );
}