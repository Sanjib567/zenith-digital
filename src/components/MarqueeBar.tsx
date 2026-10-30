"use client";

export default function MarqueeBar() {
  const items = [
    "🚀 AI Search Optimization (AEO/GEO)",
    "⚡ Next.js & React Development",
    "📈 Advanced SEO & Digital Marketing",
    "🛍️ Shopify & WooCommerce Ecommerce",
    "🌍 Serving Clients Worldwide from India",
    "🤖 Custom AI Chatbots & Automations",
  ];

  return (
    <div className="relative z-20 w-full overflow-hidden bg-[#14112b] py-4 text-white shadow-lg">
      {/* Inline styles ensure animation runs regardless of Tailwind config */}
      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-track {
          display: flex;
          width: max-content;
          animation: marqueeScroll 25s linear infinite;
        }
        .animate-marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Background Gradient Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-rose-600/20" />

      {/* Marquee Track Wrapper */}
      <div className="flex w-full overflow-hidden whitespace-nowrap">
        <div className="animate-marquee-track flex items-center gap-10 px-4">
          {/* First Loop */}
          {items.map((item, idx) => (
            <span key={`first-${idx}`} className="flex items-center gap-3 text-sm md:text-base font-semibold tracking-wide text-white">
              <span className="h-2 w-2 rounded-full bg-[#e11d48] animate-pulse shrink-0" />
              {item}
            </span>
          ))}
          {/* Duplicate Loop for Seamless Infinite Scroll */}
          {items.map((item, idx) => (
            <span key={`second-${idx}`} className="flex items-center gap-3 text-sm md:text-base font-semibold tracking-wide text-white">
              <span className="h-2 w-2 rounded-full bg-[#e11d48] animate-pulse shrink-0" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}