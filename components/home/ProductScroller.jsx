'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { products } from '@/data/products';
import SectionHeading from '@/components/SectionHeading';
import CTAButton from '@/components/CTAButton';
import { ArrowRight, CheckCircle2, Zap } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ProductScroller() {
  const triggerRef = useRef(null);
  const cardsWrapperRef = useRef(null);
  const containerRef = useRef(null);
  const progressBarRef = useRef(null);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 768;
      if (isMobile) return; // Responsive: fallback to horizontal touch slider on mobile

      const displayProducts = products.filter(p => p.featured);
      const totalSections = displayProducts.length;
      const xPercent = -100 * (totalSections - 1) / totalSections;

      const animation = gsap.to(containerRef.current, {
        xPercent: xPercent,
        ease: 'none',
        scrollTrigger: {
          trigger: cardsWrapperRef.current,
          start: 'top 80px', // Pin right when CATEGORY 01 / 06 touches top under navbar
          pin: true,
          scrub: 0.8,
          end: () => `+=${containerRef.current.scrollWidth - window.innerWidth}`,
          onUpdate: (self) => {
            if (progressBarRef.current) {
              gsap.to(progressBarRef.current, { scaleX: self.progress, duration: 0.1 });
            }
            const index = Math.min(
              Math.floor(self.progress * totalSections),
              totalSections - 1
            );
            setActiveIdx(index);
          },
        },
      });
    }, triggerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={triggerRef} className="relative bg-white border-b border-slate-200 overflow-hidden py-16">
      {/* Header Container (Scrolls Up Naturally) */}
      <div className="max-w-7xl mx-auto px-6 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <SectionHeading
          eyebrow="PRODUCT ARCHITECTURE"
          title="Heavy Engineering Transformer Portfolio."
          subtitle="Scroll down to navigate horizontally through our complete power transformer categories."
          className="mb-0"
        />
      </div>

      {/* Pinned Wrapper: Pins when CATEGORY 01 / 06 touches top of screen */}
      <div ref={cardsWrapperRef} className="w-full bg-white pt-4 pb-12">
        <div className="max-w-7xl mx-auto px-6 mb-6 flex justify-between items-center">
          <span className="text-xs font-extrabold tracking-widest text-[#063772] uppercase">
            FLAGSHIP {String(activeIdx + 1).padStart(2, '0')} / {String(products.filter(p => p.featured).length).padStart(2, '0')}
          </span>
          <div className="w-48 h-1.5 bg-slate-100 border border-slate-200 relative overflow-hidden">
            <div
              ref={progressBarRef}
              className="h-full bg-gradient-to-r from-[#063772] to-[#23790a] origin-left transition-transform duration-75"
              style={{ transform: 'scaleX(0.16)' }}
            />
          </div>
        </div>

        {/* Desktop Horizontal Cards Container */}
        <div className="w-full overflow-x-auto md:overflow-hidden">
          <div
            ref={containerRef}
            className="flex flex-nowrap gap-8 px-6 md:px-12 w-full md:w-[600vw] transition-transform duration-75"
          >
            {products.filter(p => p.featured).map((product, idx) => (
              <div
                key={product.id}
                className="w-[85vw] sm:w-[550px] md:w-[80vw] lg:w-[70vw] max-w-5xl shrink-0 bg-slate-50 border border-slate-200 p-8 sm:p-10 flex flex-col lg:flex-row gap-8 items-center justify-between shadow-sm hover:border-[#063772]/40 transition-colors"
                data-cursor="VIEW"
              >
                {/* Left Details */}
                <div className="w-full lg:w-1/2 space-y-5">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-extrabold text-[#063772] tracking-widest uppercase bg-[#063772]/10 px-3 py-1">
                      PRODUCT {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                      {product.category}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] leading-tight">
                    {product.name}
                  </h3>

                  <div className="text-xs font-bold text-[#063772] uppercase tracking-wider flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    <span>RATED CAPACITY: {product.capacity}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {product.shortDesc}
                  </p>

                  {/* Highlights List */}
                  <div className="space-y-2 pt-2 border-t border-slate-200">
                    {product.features.slice(0, 3).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-[#23790a] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <CTAButton href={`/products/${product.slug}`} size="md" variant="primary">
                      View Specifications
                    </CTAButton>
                  </div>
                </div>

                {/* Right Image */}
                <div className="w-full lg:w-1/2 relative aspect-[4/3] border border-slate-200 overflow-hidden bg-slate-200">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/95 px-3 py-1 border border-slate-200 text-[11px] font-bold text-[#0f172a] uppercase">
                    CPRI / KEMA TESTED
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
