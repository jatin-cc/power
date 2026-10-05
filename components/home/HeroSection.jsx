'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CTAButton from '@/components/CTAButton';
import { Zap, Award, CheckCircle2 } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HeroSection() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const imageWrapperRef = useRef(null);
  const eyebrowRef = useRef(null);
  const titleLine1Ref = useRef(null);
  const titleLine2Ref = useRef(null);
  const subtitleRef = useRef(null);
  const ctaGroupRef = useRef(null);
  const metaBadgeRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // 1. Clip path reveal & image scale
      tl.fromTo(
        imageWrapperRef.current,
        { clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)' },
        { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', duration: 1.2 }
      )
        .fromTo(
          imageRef.current,
          { scale: 1.12 },
          { scale: 1, duration: 1.4 },
          '<='
        )
        // 2. Text reveals
        .fromTo(eyebrowRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.8')
        .fromTo(titleLine1Ref.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7 }, '-=0.5')
        .fromTo(titleLine2Ref.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7 }, '-=0.5')
        .fromTo(subtitleRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.4')
        .fromTo(ctaGroupRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.4')
        .fromTo(metaBadgeRef.current, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.5 }, '-=0.3');

      // Scroll-linked subtle parallax
      gsap.to(imageRef.current, {
        yPercent: 12,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[88vh] pt-28 pb-16 flex items-center justify-center bg-white overflow-hidden subtle-noise"
    >
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6">
            <div ref={eyebrowRef} className="inline-flex items-center gap-2">
              <span className="w-8 h-[2px] bg-gradient-to-r from-[#063772] to-[#23790a]" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#063772]">
                G SONS POWER TRANSFORMERS PVT. LTD.
              </span>
            </div>

            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0f172a] leading-[1.12]">
                <span ref={titleLine1Ref} className="block">
                  Engineering Reliable Power.
                </span>
                <span ref={titleLine2Ref} className="block text-[#063772]">
                  Building Electrical Infrastructure.
                </span>
              </h1>
            </div>

            <p
              ref={subtitleRef}
              className="text-base sm:text-lg text-slate-600 max-w-xl font-normal leading-relaxed"
            >
              Manufacturing Oil-Filled Distribution Transformers, Cast Resin Dry-Type Transformers, VPI Dry Type, and Compact Substations (CSS) up to 5 MVA in 11 kV & 33 kV voltage classes.
            </p>

            <div ref={ctaGroupRef} className="pt-2 flex flex-wrap items-center gap-4">
              <CTAButton href="/products-services" size="lg" variant="primary">
                Explore Products & Switchgear
              </CTAButton>
              <CTAButton href="/contact" size="lg" variant="outline">
                Request Engineering Quote
              </CTAButton>
            </div>

            {/* Technical Metadata Badges */}
            <div
              ref={metaBadgeRef}
              className="pt-6 border-t border-slate-200 grid grid-cols-3 gap-4 text-xs text-slate-600 font-medium"
            >
              <div>
                <span className="block font-bold text-sm sm:text-base text-[#063772]">Up to 5 MVA</span>
                <span className="text-slate-500">Manufacturing Capacity</span>
              </div>
              <div>
                <span className="block font-bold text-sm sm:text-base text-[#23790a]">11 kV & 33 kV</span>
                <span className="text-slate-500">Voltage Classes</span>
              </div>
              <div>
                <span className="block font-bold text-sm sm:text-base text-[#063772]">BIS & ZED Gold</span>
                <span className="text-slate-500">Licensed Quality</span>
              </div>
            </div>
          </div>

          {/* Right Visual Image Reveal */}
          <div className="lg:col-span-5 relative">
            <div
              ref={imageWrapperRef}
              className="relative w-full aspect-[4/5] border border-slate-200 shadow-2xl shadow-slate-900/10 overflow-hidden bg-slate-100"
              data-cursor="VIEW"
            >
              <img
                ref={imageRef}
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"
                alt="G Sons Power Distribution Transformer Manufacturing"
                className="w-full h-full object-cover"
              />

              {/* Floating Quality Overlay Card */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/95 backdrop-blur-md border border-slate-200 shadow-lg flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#063772]/10 text-[#063772] flex items-center justify-center font-bold">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#0f172a] block">
                      Cast Resin & Oil-Filled
                    </span>
                    <span className="text-[11px] text-slate-500 block">
                      CRGO & Electrolytic Copper Core
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
