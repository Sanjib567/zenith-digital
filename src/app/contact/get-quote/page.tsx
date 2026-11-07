"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  Clock,
  FileText,
  Loader2,
  Send,
  Sparkles,
} from "lucide-react";
import { services, siteConfig } from "@/data/site";
import { photos } from "@/lib/images";

type FormState = {
  name: string;
  email: string;
  phone: string;
  company: string;
  budget: string;
  timeline: string;
  message: string;
};

const empty: FormState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  budget: "",
  timeline: "",
  message: "",
};

const budgets = ["Under ₹50,000", "₹50,000 – ₹2 lakh", "₹2 lakh – ₹5 lakh", "₹5 lakh+", "Not sure yet"];
const timelines = ["As soon as possible", "2–4 weeks", "1–3 months", "Just exploring"];
const includes = [
  { title: "Clear project scope", text: "Pages, features and platforms we recommend for your goals." },
  { title: "Timeline and milestones", text: "A realistic plan from kickoff to launch, with review points." },
  { title: "Investment range", text: "Transparent pricing so you can budget without surprises." },
  { title: "Recommended next step", text: "Build, retain, or a short audit — whichever fits you best." },
];

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

export default function GetQuotePage() {
  const [form, setForm] = useState<FormState>(empty);
  const [picked, setPicked] = useState<string[]>([]);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const update = (key: keyof FormState) => (value: string) => setForm((f) => ({ ...f, [key]: value }));
  const toggle = (s: string) => setPicked((cur) => (cur.includes(s) ? cur.filter((x) => x !== s) : [...cur, s]));

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    setTimeout(() => {
      const body = [
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        `Phone: ${form.phone || "Not provided"}`,
        `Company: ${form.company || "Not provided"}`,
        `Services: ${picked.join(", ") || "Not specified"}`,
        `Budget: ${form.budget || "Not specified"}`,
        `Timeline: ${form.timeline || "Not specified"}`,
        "",
        form.message,
      ].join("\n");
      window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(`Quote request from ${form.name}`)}&body=${encodeURIComponent(body)}`;
      setSending(false);
      setSent(true);
    }, 800);
  }

  return (
    <main className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/60 to-purple-50/60">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="gq-blob absolute -left-32 top-10 h-[28rem] w-[28rem] rounded-full bg-brand-blue/25 blur-3xl" />
        <div className="gq-blob-b absolute -right-24 top-1/4 h-[30rem] w-[30rem] rounded-full bg-brand-purple/20 blur-3xl" />
      </div>

      <section className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 pb-8 pt-14 md:px-12 lg:grid-cols-2 lg:pt-20">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.25em] text-brand-blue shadow-md ring-1 ring-brand-blue/15">
            <Sparkles size={14} /> Free quote
          </span>
          <h1 className="mt-5 font-[var(--font-heading)] text-4xl font-extrabold leading-tight text-brand-navy md:text-5xl">
            Get a clear quote for your <span className="text-brand-gradient">next project</span>
          </h1>
          <p className="mt-4 max-w-xl text-base text-brand-navy/70 md:text-lg">
            Share your goals, budget and timeline. Our team in New Delhi will send a written plan and price range within one business day — no lock-in, no pressure.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-3">
            {[
              { n: "24h", l: "Typical reply" },
              { n: "Free", l: "No-obligation quote" },
              { n: "1", l: "Dedicated specialist" },
            ].map((s) => (
              <li key={s.l} className="rounded-2xl bg-white/80 p-4 text-center shadow-sm ring-1 ring-slate-200">
                <p className="font-[var(--font-heading)] text-2xl font-extrabold text-brand-blue">{s.n}</p>
                <p className="mt-1 text-xs font-semibold text-slate-500">{s.l}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-blue-500/30 to-pink-500/30 blur-xl" />
          <img
            src={photos.webDevelopment}
            alt="Planning a custom website project with Zenith Digital Agency"
            className="relative h-64 w-full rounded-[2rem] object-cover shadow-2xl ring-1 ring-white/60 md:h-80"
          />
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 pb-10 md:px-12">
        <h2 className="font-[var(--font-heading)] text-2xl font-extrabold text-brand-navy">What your quote includes</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {includes.map((item) => (
            <div key={item.title} className="rounded-3xl bg-white p-5 shadow-md ring-1 ring-slate-200">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-gradient text-white">
                <ClipboardList size={18} />
              </span>
              <h3 className="mt-4 font-extrabold text-brand-navy">{item.title}</h3>
              <p className="mt-2 text-sm text-brand-navy/70">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 pb-24 md:px-12">
        <div className="overflow-hidden rounded-[2rem] bg-white p-6 shadow-2xl ring-1 ring-slate-200 md:p-10">
          <div className="absolute inset-x-0 top-0 h-1.5 bg-brand-gradient" />
          {sent ? (
            <div className="flex flex-col items-center py-12 text-center">
              <CheckCircle2 size={56} className="text-emerald-500" />
              <h2 className="mt-5 font-[var(--font-heading)] text-3xl font-extrabold text-brand-navy">Quote request ready</h2>
              <p className="mt-3 max-w-md text-brand-navy/70">
                Your email app should have opened. Send the message and we will reply with a written quote.
              </p>
              <Link href="/contact" className="mt-6 font-bold text-brand-blue">
                Back to contact →
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-brand-purple">Project brief</p>
                  <h2 className="mt-2 font-[var(--font-heading)] text-3xl font-extrabold text-brand-navy">
                    Request your <span className="text-brand-gradient">free quote</span>
                  </h2>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-700 ring-1 ring-emerald-200">
                  <Clock size={14} /> Reply in 24 hours
                </span>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <Field id="q-name" label="Your name" value={form.name} onChange={update("name")} required />
                <Field id="q-email" label="Email address" type="email" value={form.email} onChange={update("email")} required />
                <Field id="q-phone" label="Phone (optional)" type="tel" value={form.phone} onChange={update("phone")} />
                <Field id="q-company" label="Company / website" value={form.company} onChange={update("company")} />
              </div>

              <div>
                <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.2em] text-brand-navy/60">Services needed</p>
                <div className="flex flex-wrap gap-2">
                  {services.map((s) => {
                    const active = picked.includes(s.title);
                    return (
                      <button
                        key={s.slug}
                        type="button"
                        onClick={() => toggle(s.title)}
                        className={`rounded-full px-4 py-2 text-xs font-bold transition ${
                          active ? "bg-brand-gradient text-white shadow-lg" : "bg-slate-100 text-brand-navy ring-1 ring-slate-200 hover:bg-white"
                        }`}
                      >
                        {s.title}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.2em] text-brand-navy/60">Budget</p>
                  <div className="flex flex-wrap gap-2">
                    {budgets.map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => update("budget")(b)}
                        className={`rounded-full px-3 py-2 text-xs font-bold ${
                          form.budget === b ? "bg-brand-gradient text-white" : "bg-slate-100 text-brand-navy ring-1 ring-slate-200"
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.2em] text-brand-navy/60">Timeline</p>
                  <div className="flex flex-wrap gap-2">
                    {timelines.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => update("timeline")(t)}
                        className={`rounded-full px-3 py-2 text-xs font-bold ${
                          form.timeline === t ? "bg-brand-gradient text-white" : "bg-slate-100 text-brand-navy ring-1 ring-slate-200"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative">
                <textarea
                  rows={5}
                  required
                  placeholder=" "
                  value={form.message}
                  onChange={(e) => update("message")(e.target.value)}
                  className="peer w-full resize-none rounded-2xl border-2 border-slate-100 bg-slate-50/70 px-4 pb-3 pt-6 text-sm font-semibold text-brand-navy outline-none focus:border-brand-purple focus:bg-white"
                />
                <label className="pointer-events-none absolute left-4 top-4 text-sm font-semibold text-slate-400 peer-focus:-translate-y-2.5 peer-focus:scale-90 peer-[:not(:placeholder-shown)]:-translate-y-2.5 peer-[:not(:placeholder-shown)]:scale-90">
                  Project details <span className="text-brand-orange">*</span>
                </label>
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-8 py-3.5 font-extrabold text-white shadow-xl transition hover:-translate-y-0.5 disabled:opacity-80"
                >
                  {sending ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
                  {sending ? "Preparing..." : "Send quote request"}
                </button>
                <Link href="/contact/schedule-meeting" className="inline-flex items-center gap-2 rounded-full border-2 border-brand-navy/15 px-6 py-3 font-bold text-brand-navy">
                  Prefer a meeting? <ArrowRight size={16} />
                </Link>
              </div>
            </form>
          )}
        </div>
        <p className="mt-6 flex items-center gap-2 text-sm text-slate-500">
          <FileText size={16} /> Quotes are free and written in plain language. You decide if you want to go ahead.
        </p>
      </section>

      <style>{`
        @keyframes gq-blob { 0%,100% { transform: translate(0,0); } 50% { transform: translate(40px,30px); } }
        .gq-blob { animation: gq-blob 16s ease-in-out infinite; }
        .gq-blob-b { animation: gq-blob 19s ease-in-out infinite reverse; }
      `}</style>
    </main>
  );
}
