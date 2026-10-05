'use client';

import { useEffect, useRef } from 'react';
import SectionHeading from '@/components/SectionHeading';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Cpu, ShieldCheck, Zap } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function EngineeringVisual() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.blueprint-marker',
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 55%',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow="ENGINEERING EXCELLENCE"
          title="Precision Electromagnetic Core & Winding Design."
          subtitle="Combining high-permeability CRGO steel geometry with electrolytic copper windings for maximum efficiency and dielectric strength."
        />

        {/* Blueprint Vector Panel */}
        <div className="relative bg-slate-50 border border-slate-200 p-8 sm:p-12 overflow-hidden bg-grid-pattern">
          <div className="absolute top-4 right-4 bg-[#063772]/10 text-[#063772] border border-[#063772]/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
            GSTPL CAD TRANSFORMER MODEL
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Graphic */}
            <div className="lg:col-span-7 relative h-72 sm:h-96 border border-slate-200 bg-white flex items-center justify-center p-6 shadow-inner">
              <svg className="w-full h-full text-[#063772]/80" viewBox="0 0 600 400" fill="none">
                <rect x="150" y="80" width="300" height="240" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                <rect x="200" y="110" width="70" height="180" fill="none" stroke="currentColor" strokeWidth="2" />
                <rect x="330" y="110" width="70" height="180" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="235" cy="200" r="45" stroke="#063772" strokeWidth="2" fill="rgba(6,55,114,0.05)" />
                <circle cx="365" cy="200" r="45" stroke="#063772" strokeWidth="2" fill="rgba(6,55,114,0.05)" />
                <path d="M 100 200 L 200 200" stroke="#063772" strokeWidth="2" />
                <path d="M 400 200 L 500 200" stroke="#063772" strokeWidth="2" />
              </svg>

              {/* Callouts */}
              <div className="blueprint-marker absolute top-12 left-16 bg-white border border-[#063772] px-2.5 py-1 shadow-sm text-[10px] font-bold text-[#063772] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#063772]" />
                CRGO Step-Lap Core
              </div>

              <div className="blueprint-marker absolute bottom-16 right-16 bg-white border border-[#23790a] px-2.5 py-1 shadow-sm text-[10px] font-bold text-[#23790a] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#23790a]" />
                Electrolytic Copper Windings
              </div>

              <div className="blueprint-marker absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#063772] text-white px-3 py-1 shadow-md text-xs font-bold uppercase tracking-wider">
                11 kV / 33 kV Class
              </div>
            </div>

            {/* Right List */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-[#063772]/10 text-[#063772] flex items-center justify-center font-bold">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#0f172a]">Vacuum Cast Resin (CRT)</h4>
                    <p className="text-xs text-slate-500">Fire-safe epoxy resin encapsulation</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-[#23790a]/10 text-[#23790a] flex items-center justify-center font-bold">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#0f172a]">IS 1180 & IS 2026 Compliant</h4>
                    <p className="text-xs text-slate-500">BIS licensed quality standards</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-[#063772]/10 text-[#063772] flex items-center justify-center font-bold">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#0f172a]">ONAN & ANAN Cooling</h4>
                    <p className="text-xs text-slate-500">Dependable thermal performance</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-white border border-slate-200 text-xs text-slate-600 leading-relaxed">
                <strong className="text-[#0f172a] font-bold block mb-1">Quality Commitment:</strong>
                Every G Sons Power transformer is factory routine tested before dispatch to guarantee zero defects and long service life.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
