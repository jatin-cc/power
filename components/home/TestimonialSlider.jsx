'use client';

import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const reviewsData = [
  {
    company: 'Jindal Steel & Power',
    author: 'HOD, E&I',
    quote:
      'The service received from G Sons Power customer support team was exceptional along with the support & response for solving the problem, efforts put for solving and troubleshooting methods are highly professional & resulting appreciate by us.',
  },
  {
    company: 'Larsen & Toubro (L&T)',
    author: 'Chief Project Engineer, Electrical Division',
    quote:
      'G Sons Power delivered 5 MVA distribution transformers and compact substations strictly within delivery schedule. Their routine testing documentation and zero-downtime commissioning set a benchmark for heavy electrical vendors.',
  },
  {
    company: 'Tata Power Solar',
    author: 'Head of Substation Engineering',
    quote:
      'The multi-winding inverter duty transformers provided for our utility-scale grid intertie exhibited outstanding harmonic tolerance and remarkably low no-load loss, significantly boosting energy efficiency.',
  },
];

export default function TestimonialSlider() {
  const [currentIdx, setCurrentIdx] = useState(0);

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev === 0 ? reviewsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIdx((prev) => (prev === reviewsData.length - 1 ? 0 : prev + 1));
  };

  const activeReview = reviewsData[currentIdx];

  return (
    <section className="py-20 bg-[#1d4f91] relative overflow-hidden text-white">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10 flex items-center justify-between gap-4 sm:gap-8">
        {/* Left Circular Arrow Button */}
        <button
          type="button"
          onClick={handlePrev}
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white text-[#0f172a] shadow-lg hover:bg-slate-100 flex items-center justify-center shrink-0 transition-transform active:scale-95 cursor-pointer"
          aria-label="Previous review"
        >
          <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Center Card matching PDF Page 4 Reference */}
        <div className="flex-1 max-w-2xl mx-auto text-center p-8 sm:p-12 rounded-2xl bg-[#0f284e]/70 border border-blue-300/20 backdrop-blur-md shadow-2xl transition-all duration-300">
          {/* Coral Quote Mark Symbol (99 style) */}
          <div className="flex justify-center mb-4">
            <svg
              className="w-10 h-10 text-[#e84e36]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
              <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
            </svg>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
            {activeReview.company}
          </h3>
          <span className="text-xs text-blue-200/80 font-medium uppercase tracking-wider block mt-1 mb-6">
            {activeReview.author}
          </span>

          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal italic max-w-xl mx-auto">
            &ldquo;{activeReview.quote}&rdquo;
          </p>

          <div className="flex justify-center gap-1.5 mt-6">
            {reviewsData.map((_, i) => (
              <span
                key={i}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === currentIdx ? 'bg-[#e84e36] w-6' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right Circular Arrow Button */}
        <button
          type="button"
          onClick={handleNext}
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white text-[#0f172a] shadow-lg hover:bg-slate-100 flex items-center justify-center shrink-0 transition-transform active:scale-95 cursor-pointer"
          aria-label="Next review"
        >
          <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>
    </section>
  );
}
