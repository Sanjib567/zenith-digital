import { siteConfig } from "@/data/site";

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-24">
      <h1 className="font-[var(--font-heading)] text-4xl font-extrabold text-brand-navy">Get a Quote</h1>
      <p className="mt-4 text-brand-navy/70">
        Email us at {siteConfig.email} or call {siteConfig.phone}.
      </p>
      <form action={`mailto:${siteConfig.email}`} method="post" encType="text/plain" className="mt-10 space-y-4">
        <input name="name" placeholder="Your name" className="w-full rounded-lg border border-brand-navy/20 p-3" required />
        <input name="email" type="email" placeholder="Your email" className="w-full rounded-lg border border-brand-navy/20 p-3" required />
        <textarea name="message" placeholder="Tell us about your project" rows={5} className="w-full rounded-lg border border-brand-navy/20 p-3" />
        <button type="submit" className="rounded-full bg-brand-orange px-6 py-3 font-semibold text-brand-navy">
          Send
        </button>
      </form>
    </section>
  );
}
