"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, CheckCircle2, Loader2, Mail, MapPin, Phone, Send, Sparkles } from "lucide-react";
import { siteConfig, services } from "@/data/site";

type FormState = { name: string; email: string; phone: string; message: string };
const emptyForm: FormState = { name: "", email: "", phone: "", message: "" };

function WhatsAppLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

const contactCards = [
  {
    label: "Email us",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    from: "#2563eb",
    to: "#60a5fa",
    Icon: Mail,
    hint: "We reply within 24 hours",
  },
  {
    label: "Call us",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
    from: "#7c3aed",
    to: "#c084fc",
    Icon: Phone,
    hint: "Mon to Sat, business hours",
  },
  {
    label: "WhatsApp",
    value: "Chat with us instantly",
    href: `https://wa.me/${siteConfig.whatsapp}`,
    from: "#16a34a",
    to: "#4ade80",
    Icon: WhatsAppLogo,
    hint: "Fastest way to reach us",
  },
  {
    label: "Visit us",
    value: siteConfig.location,
    href: undefined,
    from: "#ea580c",
    to: "#fb7185",
    Icon: MapPin,
    hint: "First Floor, Ghitorni, New Delhi, Delhi 110030",
  },
] as const;

const serviceOptions = services.map((s) => s.title);

function Field({
  id,
  label,
  type = "text",
  value,
  onChange,
  required,
}: {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}) {
  return (
    <div className="group relative">
      <input
        id={id}
        type={type}
        value={value}
        required={required}
        placeholder=" "
        onChange={(e) => onChange(e.target.value)}
        className="peer w-full rounded-2xl border-2 border-slate-100 bg-slate-50/70 px-4 pb-2.5 pt-6 text-sm font-semibold text-brand-navy outline-none transition duration-300 focus:border-brand-purple focus:bg-white focus:shadow-[0_8px_30px_-10px_rgba(124,58,237,0.35)]"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-4 top-4 origin-left text-sm font-semibold text-slate-400 transition-all duration-300 peer-focus:-translate-y-2.5 peer-focus:scale-90 peer-focus:text-brand-purple peer-[:not(:placeholder-shown)]:-translate-y-2.5 peer-[:not(:placeholder-shown)]:scale-90"
      >
        {label}
        {required && <span className="text-brand-orange"> *</span>}
      </label>
    </div>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [picked, setPicked] = useState<string[]>([]);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const update = (key: keyof FormState) => (value: string) => setForm((f) => ({ ...f, [key]: value }));
  const toggle = (s: string) => setPicked((cur) => (cur.includes(s) ? cur.filter((x) => x !== s) : [...cur, s]));

  // Progress across the three required fields
  const filled = [form.name, form.email, form.message].filter((v) => v.trim()).length;
  const progress = Math.round((filled / 3) * 100);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (sending) return;
    setSending(true);

    // Opens the visitor's email app with the message filled in. No server needed.
    setTimeout(() => {
      const body = [
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        `Phone: ${form.phone || "Not provided"}`,
        `Interested in: ${picked.join(", ") || "Not specified"}`,
        "",
        form.message,
      ].join("\n");
      const subject = encodeURIComponent(`New enquiry from ${form.name}`);
      window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${encodeURIComponent(body)}`;
      setSending(false);
      setSent(true);
    }, 900);
  }

  function reset() {
    setForm(emptyForm);
    setPicked([]);
    setSent(false);
  }

  return (
    <main className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/60 to-purple-50/60">
      {/* Animated background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="ct-blob ct-blob-a absolute -left-32 top-16 h-[28rem] w-[28rem] rounded-full bg-brand-blue/25 blur-3xl" />
        <div className="ct-blob ct-blob-b absolute -right-32 top-1/3 h-[30rem] w-[30rem] rounded-full bg-brand-purple/25 blur-3xl" />
        <div className="ct-blob ct-blob-c absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-brand-orange/20 blur-3xl" />
        <div className="ct-grid absolute inset-0 opacity-60" />
        {[...Array(6)].map((_, i) => (
          <span
            key={i}
            className="ct-dot absolute h-2 w-2 rounded-full bg-brand-purple/40"
            style={{ left: `${10 + i * 15}%`, top: `${20 + ((i * 37) % 60)}%`, animationDelay: `${i * 0.7}s` }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
        {/* Heading */}
        <div className="ct-rise text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-brand-blue shadow-md ring-1 ring-brand-blue/15">
            <Sparkles size={14} /> Get in touch
          </span>
          <h1 className="mt-6 font-[var(--font-heading)] text-4xl font-extrabold leading-tight text-brand-navy md:text-6xl">
            Let&apos;s build something <span className="text-brand-gradient">great together</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-brand-navy/70 md:text-lg">
            Tell us about your project and we will reply within one business day with a clear plan and a free quote.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          {/* Contact cards, each with its own colour */}
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-1">
            {contactCards.map((c, i) => {
              const { Icon } = c;
              const inner = (
                <>
                  <span
                    className="ct-icon relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-white shadow-lg transition duration-500 group-hover:rotate-6 group-hover:scale-110"
                    style={{ background: `linear-gradient(135deg, ${c.from}, ${c.to})` }}
                  >
                    <span className="absolute inset-0 rounded-2xl ring-2 ring-white/40" />
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[11px] font-extrabold uppercase tracking-widest" style={{ color: c.from }}>
                      {c.label}
                    </span>
                    <span className="mt-1 block truncate text-sm font-bold text-brand-navy">{c.value}</span>
                    <span className="mt-0.5 block text-xs text-slate-500">{c.hint}</span>
                  </span>
                  {c.href && (
                    <ArrowUpRight
                      className="h-5 w-5 shrink-0 text-slate-300 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      style={{ color: undefined }}
                    />
                  )}
                </>
              );
              const cls =
                "ct-rise group relative flex items-center gap-4 overflow-hidden rounded-3xl bg-white/90 p-5 shadow-md ring-1 ring-slate-200/80 backdrop-blur transition duration-500 hover:-translate-y-1.5 hover:shadow-2xl";
              const style = { animationDelay: `${i * 100}ms`, boxShadow: undefined as string | undefined };

              return c.href ? (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={cls}
                  style={style}
                >
                  <span
                    className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full opacity-0 blur-2xl transition duration-500 group-hover:opacity-60"
                    style={{ background: c.from }}
                  />
                  {inner}
                </a>
              ) : (
                <div key={c.label} className={cls} style={style}>
                  {inner}
                </div>
              );
            })}
          </div>

          {/* Form card */}
          <div className="ct-rise relative overflow-hidden rounded-[2rem] bg-white p-6 shadow-2xl ring-1 ring-slate-200 md:p-10 lg:col-span-3" style={{ animationDelay: "150ms" }}>
            <div className="absolute inset-x-0 top-0 h-1.5 bg-brand-gradient" />
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-brand-purple/10 blur-3xl" />

            {sent ? (
              <div className="flex flex-col items-center py-12 text-center">
                <span className="ct-pop flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-emerald-100 to-emerald-200 text-emerald-600 shadow-lg">
                  <CheckCircle2 size={48} />
                </span>
                <h2 className="mt-6 font-[var(--font-heading)] text-3xl font-extrabold text-brand-navy">
                  Thank you, {form.name || "friend"}!
                </h2>
                <p className="mt-3 max-w-sm text-brand-navy/70">
                  Your email app should have opened with your message ready. Press send there, and we will reply soon.
                </p>
                <button
                  type="button"
                  onClick={reset}
                  className="mt-8 rounded-full bg-brand-gradient px-7 py-3 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="relative space-y-6">
                {/* Form heading */}
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-brand-purple">Free consultation</p>
                    <h2 className="mt-2 font-[var(--font-heading)] text-3xl font-extrabold text-brand-navy md:text-4xl">
                      Request a <span className="text-brand-gradient">free quote</span>
                    </h2>
                  </div>
                  <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-700 ring-1 ring-emerald-200">
                    Reply in 24h
                  </span>
                </div>

                {/* Progress bar */}
                <div>
                  <div className="mb-2 flex items-center justify-between text-xs font-bold text-slate-500">
                    <span>Form progress</span>
                    <span className="text-brand-purple">{progress}%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
                    <div
                      className="h-full rounded-full bg-brand-gradient transition-all duration-700 ease-out"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <Field id="name" label="Your name" value={form.name} onChange={update("name")} required />
                  <Field id="email" label="Email address" type="email" value={form.email} onChange={update("email")} required />
                </div>

                <Field id="phone" label="Phone (optional)" type="tel" value={form.phone} onChange={update("phone")} />

                <div>
                  <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.2em] text-brand-navy/60">
                    I am interested in
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {serviceOptions.map((s) => {
                      const active = picked.includes(s);
                      return (
                        <button
                          key={s}
                          type="button"
                          onClick={() => toggle(s)}
                          aria-pressed={active}
                          className={`rounded-full px-4 py-2 text-xs font-bold transition duration-300 ${
                            active
                              ? "bg-brand-gradient text-white shadow-lg scale-105"
                              : "bg-slate-100 text-brand-navy hover:-translate-y-0.5 hover:bg-white hover:shadow-md ring-1 ring-slate-200"
                          }`}
                        >
                          {s}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="group relative">
                  <textarea
                    id="message"
                    rows={5}
                    value={form.message}
                    required
                    placeholder=" "
                    onChange={(e) => update("message")(e.target.value)}
                    className="peer w-full resize-none rounded-2xl border-2 border-slate-100 bg-slate-50/70 px-4 pb-3 pt-6 text-sm font-semibold text-brand-navy outline-none transition duration-300 focus:border-brand-purple focus:bg-white focus:shadow-[0_8px_30px_-10px_rgba(124,58,237,0.35)]"
                  />
                  <label
                    htmlFor="message"
                    className="pointer-events-none absolute left-4 top-4 origin-left text-sm font-semibold text-slate-400 transition-all duration-300 peer-focus:-translate-y-2.5 peer-focus:scale-90 peer-focus:text-brand-purple peer-[:not(:placeholder-shown)]:-translate-y-2.5 peer-[:not(:placeholder-shown)]:scale-90"
                  >
                    Tell us about your project <span className="text-brand-orange">*</span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-brand-gradient px-8 py-4 text-base font-extrabold text-white shadow-xl transition duration-300 hover:-translate-y-0.5 hover:shadow-2xl disabled:opacity-80"
                >
                  <span className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-1000 group-hover:translate-x-[420%]" />
                  {sending ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send message
                      <Send size={18} className="transition group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes ct-blob-move {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50%      { transform: translate(60px, 40px) scale(1.2); }
        }
        @keyframes ct-blob-move-b {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50%      { transform: translate(-50px, -40px) scale(1.15); }
        }
        @keyframes ct-blob-move-c {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50%      { transform: translate(40px, -50px) scale(1.1); }
        }
        @keyframes ct-grid-drift {
          from { background-position: 0 0; }
          to   { background-position: 36px 36px; }
        }
        @keyframes ct-rise {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes ct-pop {
          0%   { opacity: 0; transform: scale(0.4); }
          60%  { opacity: 1; transform: scale(1.12); }
          100% { transform: scale(1); }
        }
        @keyframes ct-float {
          0%, 100% { transform: translateY(0); opacity: 0.4; }
          50%      { transform: translateY(-14px); opacity: 0.9; }
        }
        @keyframes ct-icon-bob {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-3px); }
        }
        .ct-blob-a { animation: ct-blob-move 16s ease-in-out infinite; }
        .ct-blob-b { animation: ct-blob-move-b 19s ease-in-out infinite; }
        .ct-blob-c { animation: ct-blob-move-c 21s ease-in-out infinite; }
        .ct-grid {
          background-image:
            linear-gradient(to right, rgba(124,58,237,0.07) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(124,58,237,0.07) 1px, transparent 1px);
          background-size: 36px 36px;
          animation: ct-grid-drift 14s linear infinite;
        }
        .ct-dot { animation: ct-float 6s ease-in-out infinite; }
        .ct-rise { animation: ct-rise 0.7s cubic-bezier(0.22,1,0.36,1) both; }
        .ct-pop { animation: ct-pop 0.6s cubic-bezier(0.34,1.56,0.64,1) both; }
        .ct-icon { animation: ct-icon-bob 3.2s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .ct-blob-a, .ct-blob-b, .ct-blob-c, .ct-grid, .ct-dot,
          .ct-rise, .ct-pop, .ct-icon { animation: none !important; }
        }
      `}</style>
    </main>
  );
}