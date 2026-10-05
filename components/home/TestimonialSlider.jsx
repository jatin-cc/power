'use client';

import { useState, useRef } from 'react';
import SectionHeading from '@/components/SectionHeading';
import { testimonials } from '@/data/testimonials';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import gsap from 'gsap';

export default function TestimonialSlider() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const cardRef = useRef(null);

  const handleNext = () => {
    animateChange((currentIdx + 1) % testimonials.length);
  };

  const handlePrev = () => {
    animateChange((currentIdx - 1 + testimonials.length) % testimonials.length);
  };

  const animateChange = (newIdx) => {
    gsap.to(cardRef.current, {
      opacity: 0,
      y: -10,
      duration: 0.25,
      onComplete: () => {
        setCurrentIdx(newIdx);
        gsap.to(cardRef.current, { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' });
      },
    });
  };

  const activeT = testimonials[currentIdx];

  return (
    <section className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading
          eyebrow="CLIENT RECOGNITION"
          title="Endorsed by Global Grid Executives."
          align="center"
        />

        <div className="relative bg-slate-50 border border-slate-200 p-8 sm:p-14 shadow-sm mt-8">
          <Quote className="w-12 h-12 text-[#063772]/20 mb-6" />

          <div ref={cardRef} className="space-y-6">
            <p className="text-lg sm:text-2xl font-semibold text-[#0f172a] leading-relaxed italic">
              &ldquo;{activeT.quote}&rdquo;
            </p>

            <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h4 className="font-extrabold text-base text-[#0f172a]">{activeT.author}</h4>
                <span className="text-xs text-slate-500 font-medium block">
                  {activeT.role} — <strong className="text-[#063772]">{activeT.company}</strong>
                </span>
              </div>

              {/* Slider Controls */}
              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 border border-slate-300 flex items-center justify-center text-[#0f172a] hover:border-[#063772] hover:text-[#063772] transition-colors cursor-pointer"
                  aria-label="Previous quote"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-xs font-mono font-bold text-slate-500">
                  0{currentIdx + 1} / 0{testimonials.length}
                </span>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 border border-slate-300 flex items-center justify-center text-[#0f172a] hover:border-[#063772] hover:text-[#063772] transition-colors cursor-pointer"
                  aria-label="Next quote"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
