'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CTAButton from '@/components/CTAButton';
import { ShieldCheck, Zap, Award, ArrowDown } from 'lucide-react';

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
      className="relative min-h-[92vh] pt-32 pb-20 flex items-center justify-center bg-white overflow-hidden subtle-noise"
    >
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6">
            <div ref={eyebrowRef} className="inline-flex items-center gap-2">
              <span className="w-8 h-[2px] bg-[#0052cc]" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#0052cc]">
                PRECISION POWER ENGINEERING
              </span>
            </div>

            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#0f172a] leading-[1.08]">
                <span ref={titleLine1Ref} className="block">
                  Next-Gen Power
                </span>
                <span ref={titleLine2Ref} className="block text-[#0052cc]">
                  Transformers.
                </span>
              </h1>
            </div>

            <p
              ref={subtitleRef}
              className="text-base sm:text-lg text-slate-600 max-w-xl font-normal leading-relaxed"
            >
              Engineered up to 500 MVA, 400 kV Class. Delivering high-efficiency power transformers, custom arc furnace units, ester fluid eco-designs, and 24/7 predictive diagnostics for global energy infrastructure.
            </p>

            <div ref={ctaGroupRef} className="pt-4 flex flex-wrap items-center gap-4">
              <CTAButton href="/products-services" size="lg" variant="primary">
                Explore Products & Services
              </CTAButton>
              <CTAButton href="/contact" size="lg" variant="outline">
                Request Engineering RFQ
              </CTAButton>
            </div>

            {/* Technical Metadata Badges */}
            <div
              ref={metaBadgeRef}
              className="pt-8 border-t border-slate-200 grid grid-cols-3 gap-6 text-xs text-slate-600 font-medium"
            >
              <div>
                <span className="block font-bold text-base text-[#0f172a]">500 MVA</span>
                <span className="text-slate-500">Max Capacity</span>
              </div>
              <div>
                <span className="block font-bold text-base text-[#0052cc]">400 kV Class</span>
                <span className="text-slate-500">EHV Transmission</span>
              </div>
              <div>
                <span className="block font-bold text-base text-[#0f172a]">ISO/IEC 17025</span>
                <span className="text-slate-500">Accredited Testing</span>
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
                alt="High-Voltage Power Transformer Manufacturing"
                className="w-full h-full object-cover"
              />

              {/* Floating Quality Overlay Card */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/95 backdrop-blur-md border border-slate-200 shadow-lg flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#0052cc]/10 text-[#0052cc] flex items-center justify-center font-bold">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#0f172a] block">
                      Sub-55 dB Low Noise
                    </span>
                    <span className="text-[11px] text-slate-500 block">
                      Resonance Damping Core Technology
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
