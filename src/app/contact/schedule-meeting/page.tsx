"use client";

import { useEffect, useState, type FormEvent } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  Clock,
  Loader2,
  MessageCircle,
  Phone,
  Send,
  Sparkles,
  Video,
} from "lucide-react";
import { siteConfig } from "@/data/site";

type FormState = {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  mode: string;
  topic: string;
};

const empty: FormState = {
  name: "",
  email: "",
  phone: "",
  date: "",
  time: "",
  mode: "Google Meet",
  topic: "",
};

const times = ["10:00 IST", "11:00 IST", "12:00 IST", "14:00 IST", "15:00 IST", "16:00 IST", "17:00 IST"];
const modes = [
  { label: "Google Meet", Icon: Video },
  { label: "Phone call", Icon: Phone },
  { label: "WhatsApp", Icon: MessageCircle },
];
const topics = [
  "New website",
  "SEO & AI search",
  "Ecommerce store",
  "Google / Meta ads",
  "Existing site review",
  "Something else",
];
const agenda = [
  { title: "Your goals", text: "What you want from the website, search or campaigns in the next 90 days." },
  { title: "Current setup", text: "A quick look at your site, listings and any tools you already use." },
  { title: "Recommended path", text: "We outline a practical first step, timeline and how we would work together." },
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

export default function ScheduleMeetingPage() {
  const [form, setForm] = useState<FormState>(empty);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [minDate, setMinDate] = useState("");
  const update = (key: keyof FormState) => (value: string) => setForm((f) => ({ ...f, [key]: value }));

  useEffect(() => {
    setMinDate(new Date().toISOString().split("T")[0]);
  }, []);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    setTimeout(() => {
      const body = [
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        `Phone: ${form.phone || "Not provided"}`,
        `Preferred date: ${form.date}`,
        `Preferred time: ${form.time || "Flexible"}`,
        `Meeting type: ${form.mode}`,
        `Topic: ${form.topic || "Not specified"}`,
      ].join("\n");
      window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(`Meeting request from ${form.name}`)}&body=${encodeURIComponent(body)}`;
      setSending(false);
      setSent(true);
    }, 800);
  }

  return (
    <main className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/60 to-rose-50/50">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="mt-blob absolute -left-28 top-8 h-[26rem] w-[26rem] rounded-full bg-brand-blue/20 blur-3xl" />
        <div className="mt-blob-b absolute -right-20 top-1/3 h-[28rem] w-[28rem] rounded-full bg-pink-400/20 blur-3xl" />
      </div>

      <section className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 pb-8 pt-14 md:px-12 lg:grid-cols-2 lg:pt-20">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.25em] text-brand-blue shadow-md ring-1 ring-brand-blue/15">
            <Calendar size={14} /> Book a call
          </span>
          <h1 className="mt-5 font-[var(--font-heading)] text-4xl font-extrabold leading-tight text-brand-navy md:text-5xl">
            Schedule a meeting with <span className="text-brand-gradient">our specialists</span>
          </h1>
          <p className="mt-4 max-w-xl text-base text-brand-navy/70 md:text-lg">
            A focused 30-minute discovery call. We listen to your goals, review where you are today and suggest a clear first step. India time zone, with Google Meet, phone or WhatsApp.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="rounded-full bg-white px-4 py-2 text-sm font-bold text-brand-navy shadow-sm ring-1 ring-slate-200">30 minutes</span>
            <span className="rounded-full bg-white px-4 py-2 text-sm font-bold text-brand-navy shadow-sm ring-1 ring-slate-200">Free consultation</span>
            <span className="rounded-full bg-white px-4 py-2 text-sm font-bold text-brand-navy shadow-sm ring-1 ring-slate-200">Mon–Sat, IST</span>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-violet-500/30 to-pink-500/30 blur-xl" />
          <img
            src="/images/team/group-photo.jpg"
            alt="Zenith Digital Agency team available for a discovery meeting"
            className="relative h-64 w-full rounded-[2rem] object-cover shadow-2xl ring-1 ring-white/60 md:h-80"
          />
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 pb-10 md:px-12">
        <h2 className="font-[var(--font-heading)] text-2xl font-extrabold text-brand-navy">What we cover on the call</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {agenda.map((item, i) => (
            <div key={item.title} className="rounded-3xl bg-white p-6 shadow-md ring-1 ring-slate-200">
              <p className="font-[var(--font-heading)] text-3xl font-extrabold text-brand-blue/30">0{i + 1}</p>
              <h3 className="mt-2 font-extrabold text-brand-navy">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-navy/70">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 pb-24 md:px-12">
        <div className="overflow-hidden rounded-[2rem] bg-white p-6 shadow-2xl ring-1 ring-slate-200 md:p-10">
          {sent ? (
            <div className="flex flex-col items-center py-12 text-center">
              <CheckCircle2 size={56} className="text-emerald-500" />
              <h2 className="mt-5 font-[var(--font-heading)] text-3xl font-extrabold text-brand-navy">Meeting request ready</h2>
              <p className="mt-3 max-w-md text-brand-navy/70">
                Send the email that opened and we will confirm your slot, or suggest the next available time.
              </p>
              <Link href="/contact" className="mt-6 font-bold text-brand-blue">
                Back to contact →
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-brand-purple">Discovery call</p>
                  <h2 className="mt-2 font-[var(--font-heading)] text-3xl font-extrabold text-brand-navy">
                    Pick a time that <span className="text-brand-gradient">works for you</span>
                  </h2>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5 text-xs font-bold text-brand-blue ring-1 ring-blue-200">
                  <Clock size={14} /> India Standard Time
                </span>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <Field id="m-name" label="Your name" value={form.name} onChange={update("name")} required />
                <Field id="m-email" label="Email address" type="email" value={form.email} onChange={update("email")} required />
                <Field id="m-phone" label="Phone / WhatsApp" type="tel" value={form.phone} onChange={update("phone")} />
                <div className="relative">
                  <input
                    id="m-date"
                    type="date"
                    required
                    min={minDate}
                    value={form.date}
                    onChange={(e) => update("date")(e.target.value)}
                    className="w-full rounded-2xl border-2 border-slate-100 bg-slate-50/70 px-4 py-4 text-sm font-semibold text-brand-navy outline-none focus:border-brand-purple focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.2em] text-brand-navy/60">Preferred time</p>
                <div className="flex flex-wrap gap-2">
                  {times.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => update("time")(t)}
                      className={`rounded-full px-4 py-2 text-xs font-bold ${
                        form.time === t ? "bg-brand-gradient text-white shadow-md" : "bg-slate-100 text-brand-navy ring-1 ring-slate-200"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.2em] text-brand-navy/60">How should we meet?</p>
                <div className="grid gap-3 sm:grid-cols-3">
                  {modes.map(({ label, Icon }) => (
                    <button
                      key={label}
                      type="button"
                      onClick={() => update("mode")(label)}
                      className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm font-bold ring-1 transition ${
                        form.mode === label
                          ? "bg-brand-gradient text-white ring-transparent shadow-lg"
                          : "bg-slate-50 text-brand-navy ring-slate-200 hover:bg-white"
                      }`}
                    >
                      <Icon size={18} />
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.2em] text-brand-navy/60">What should we talk about?</p>
                <div className="flex flex-wrap gap-2">
                  {topics.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => update("topic")(t)}
                      className={`rounded-full px-4 py-2 text-xs font-bold ${
                        form.topic === t ? "bg-brand-gradient text-white" : "bg-slate-100 text-brand-navy ring-1 ring-slate-200"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-8 py-3.5 font-extrabold text-white shadow-xl transition hover:-translate-y-0.5 disabled:opacity-80"
                >
                  {sending ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
                  {sending ? "Preparing..." : "Request this meeting"}
                </button>
                <Link href="/contact/get-quote" className="inline-flex items-center gap-2 rounded-full border-2 border-brand-navy/15 px-6 py-3 font-bold text-brand-navy">
                  Want a written quote? <ArrowRight size={16} />
                </Link>
              </div>
            </form>
          )}
        </div>
      </section>

      <style>{`
        @keyframes mt-blob { 0%,100% { transform: translate(0,0); } 50% { transform: translate(36px,24px); } }
        .mt-blob { animation: mt-blob 16s ease-in-out infinite; }
        .mt-blob-b { animation: mt-blob 20s ease-in-out infinite reverse; }
      `}</style>
    </main>
  );
}
