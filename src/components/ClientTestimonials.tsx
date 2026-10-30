"use client";

import { useState, useEffect } from "react";
import Reveal from "@/components/Reveal";
import { Star, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

const testimonials = [
  {
    name: "Sylvia Larrass",
    role: "Director",
    company: "Voice and Presentation Excellence, Canada",
    image: "/images/testimonials/firstClient.jpg",
    rating: 5,
    text: "It was a pleasure working with Zenith, as they treat the customer as a person, not as a number like so many other agencies. Their manner of communication is not only professional and timely, but also respectful and kind, which is of great importance to me. I recommend Zenith to anyone who wants the job done in a personal and customized fashion.",
  },
  {
    name: "Maria",
    role: "Director",
    company: "Nueve Sterling, Canada",
    image: "/images/testimonials/secondClient.jpg",
    rating: 5,
    text: "Zenith has done a great job by making my website rank on the first page of Google for some keywords. It has been a process that took some months to happen, but now the results are there. Thanks for the hard work!",
  },
  {
    name: "Freedom",
    role: "Director",
    company: "Better Filter, China",
    image: "/images/testimonials/thiredClient.jpg",
    rating: 5,
    text: "It was a pleasure working with Zenith Digital Agency. Your service is really great, good at listening to customers' ideas, strong execution, and you are doing very well. I can highly advise them to anyone looking to hire a trustworthy company for your business.",
  },
  {
    name: "Eran Eisen",
    role: "Director",
    company: "Gaia Retreat House, Germany",
    image: "/images/testimonials/fourthClient.jpg",
    rating: 5,
    text: "I have starting to work with Zenith about 9 month ago, feeling in the dark in all issues concerning SEO. I was asking them to achieve several goals for me: Fixing my website errors, website speed, and keyword research. Today, my business is first in organic search for 15 keywords! I highly recommend this company as your SEO provider.",
  },
];

export default function ClientTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section className="relative bg-gradient-to-b from-blue-50/40 via-purple-50/20 to-transparent px-6 py-20 overflow-hidden">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <div className="text-center">
            <span className="inline-block rounded-full border border-brand-blue/30 bg-brand-blue/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-blue shadow-sm">
              Happy Clients
            </span>
            <h2 className="mt-3 font-[var(--font-heading)] text-3xl font-extrabold text-brand-navy md:text-4xl">
              What Our <span className="text-brand-gradient">Clients Say</span>
            </h2>
            <p className="mt-2 text-brand-navy/70 max-w-lg mx-auto text-sm md:text-base font-medium">
              Real feedback from business owners and team leaders who grew their brand with Zenith Digital.
            </p>
          </div>
        </Reveal>

        {/* Testimonial Card with Smooth Flowing Brand Gradient Background */}
        <div className="mt-10">
          <Reveal>
            <div className="relative flex flex-col items-center rounded-3xl border border-white/40 bg-[linear-gradient(135deg,rgba(37,99,235,0.08),rgba(124,58,237,0.08),rgba(219,39,119,0.08))] p-8 md:p-10 shadow-xl backdrop-blur-md transition-all duration-700">
              
              {/* Larger Image on Top */}
              <div className="relative mb-5 p-1.5 rounded-2xl bg-gradient-to-tr from-brand-blue to-purple-600 shadow-lg">
                <img
                  src={current.image}
                  alt={current.name}
                  className="h-36 w-36 md:h-40 md:w-40 rounded-xl object-cover bg-white"
                />
              </div>

              {/* Star Rating */}
              <div className="flex items-center justify-center gap-1 text-amber-400 mb-3 relative z-10">
                {[...Array(current.rating)].map((_, index) => (
                  <Star key={index} size={18} fill="currentColor" />
                ))}
              </div>

              {/* Testimonial Quote Text */}
              <p className="text-sm md:text-base leading-relaxed text-slate-800 italic text-center font-medium max-w-xl relative z-10">
                &ldquo;{current.text}&rdquo;
              </p>

              {/* Bottom Details */}
              <div className="mt-6 pt-5 border-t border-brand-blue/20 text-center w-full relative z-10">
                <h4 className="font-extrabold text-brand-navy text-lg tracking-tight">
                  {current.name}
                </h4>
                <p className="text-xs font-bold uppercase tracking-wider text-brand-blue mt-0.5">
                  ({current.role})
                </p>
                <p className="text-xs font-semibold text-slate-700 mt-1">
                  {current.company}
                </p>
              </div>

              {/* Navigation Controls */}
              <div className="mt-6 flex w-full items-center justify-between border-t border-brand-blue/20 pt-5 relative z-10">
                <button
                  onClick={prevSlide}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-blue/30 bg-white/90 text-brand-navy shadow-sm transition hover:bg-brand-blue hover:text-white"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={20} />
                </button>

                {/* Dots indicator */}
                <div className="flex items-center gap-2">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        currentIndex === idx ? "w-8 bg-brand-blue" : "w-2.5 bg-slate-300 hover:bg-slate-400"
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextSlide}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-blue/30 bg-white/90 text-brand-navy shadow-sm transition hover:bg-brand-blue hover:text-white"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

            </div>
          </Reveal>
        </div>

        {/* View All Google Reviews Button */}
        <Reveal delay={0.3}>
          <div className="mt-12 text-center">
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-brand-gradient px-8 py-3.5 text-sm font-bold text-white shadow-xl shadow-blue-600/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <span>View All Google Reviews</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}