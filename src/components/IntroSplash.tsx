"use client";

import { useEffect, useState } from "react";

// Full-screen intro shown when the website opens. Fades out after about 2.7 seconds.
export default function IntroSplash() {
  const [show, setShow] = useState(true);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const exitTimer = setTimeout(() => setExiting(true), 2100);
    const hideTimer = setTimeout(() => setShow(false), 2700);
    return () => {
      clearTimeout(exitTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!show) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white transition-all duration-500 ease-in-out ${
        exiting ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
      }`}
    >
      <div className="relative flex items-center justify-center">
        <span className="intro-ring absolute h-56 w-56 rounded-full bg-brand-gradient" />
        <img
          src="/images/zenith-logo.jpeg"
          alt=""
          className="intro-logo relative h-40 w-auto rounded-2xl object-contain"
        />
      </div>
      <div className="intro-bar mt-8 h-1 rounded-full bg-brand-gradient" />
      <p className="intro-text mt-5 text-sm font-semibold uppercase tracking-[0.35em] text-brand-navy/70">
        AI SEO Marketing Agency
      </p>
    </div>
  );
}