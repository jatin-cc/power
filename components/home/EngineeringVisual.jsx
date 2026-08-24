'use client';

import { useEffect, useRef } from 'react';
import SectionHeading from '@/components/SectionHeading';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Cpu, ShieldCheck, Zap, Activity } from 'lucide-react';

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
    <section ref={containerRef} className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow="R&D & COMPUTATIONAL SIMULATION"
          title="Electromagnetic Blueprint & Thermal Finite Element Design."
          subtitle="Combining advanced 3D FEA stress modeling with high-permeability CRGO steel geometry for sub-0.5% losses and zero hotspots."
        />

        {/* Minimal Blueprint Technical Vector Canvas Panel */}
        <div className="relative bg-slate-50 border border-slate-200 p-8 sm:p-12 overflow-hidden bg-grid-pattern">
          <div className="absolute top-4 right-4 bg-[#0052cc]/10 text-[#0052cc] border border-[#0052cc]/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
            3D ANSYS ELECTROMAGNETIC FEA MODEL
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Diagram Graphic */}
            <div className="lg:col-span-7 relative h-72 sm:h-96 border border-slate-200 bg-white flex items-center justify-center p-6 shadow-inner">
              {/* Technical Drawing Vector Grid */}
              <svg className="w-full h-full text-[#0052cc]/80" viewBox="0 0 600 400" fill="none">
                {/* Transformer Core & Winding Technical Outlines */}
                <rect x="150" y="80" width="300" height="240" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                <rect x="200" y="110" width="70" height="180" fill="none" stroke="currentColor" strokeWidth="2" />
                <rect x="330" y="110" width="70" height="180" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="235" cy="200" r="45" stroke="#0052cc" strokeWidth="2" fill="rgba(0,82,204,0.05)" />
                <circle cx="365" cy="200" r="45" stroke="#0052cc" strokeWidth="2" fill="rgba(0,82,204,0.05)" />
                <path d="M 100 200 L 200 200" stroke="#0052cc" strokeWidth="2" />
                <path d="M 400 200 L 500 200" stroke="#0052cc" strokeWidth="2" />
              </svg>

              {/* Callout Markers */}
              <div className="blueprint-marker absolute top-12 left-16 bg-white border border-[#0052cc] px-2.5 py-1 shadow-sm text-[10px] font-bold text-[#0052cc] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#0052cc]" />
                CRGO Step-Lap Core
              </div>

              <div className="blueprint-marker absolute bottom-16 right-16 bg-white border border-[#0052cc] px-2.5 py-1 shadow-sm text-[10px] font-bold text-[#0052cc] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#0052cc]" />
                ETP Copper Winding
              </div>

              <div className="blueprint-marker absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0052cc] text-white px-3 py-1 shadow-md text-xs font-bold uppercase tracking-wider">
                Sub-2 pC PD Rating
              </div>
            </div>

            {/* Right Spec Specs List */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-[#0052cc]/10 text-[#0052cc] flex items-center justify-center font-bold">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#0f172a]">64-Node HPC Cluster</h4>
                    <p className="text-xs text-slate-500">Real-time thermal hotspot calculation</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-[#0052cc]/10 text-[#0052cc] flex items-center justify-center font-bold">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#0f172a]">42+ Global Patents</h4>
                    <p className="text-xs text-slate-500">Low loss lamination & dampening designs</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-[#0052cc]/10 text-[#0052cc] flex items-center justify-center font-bold">
                    <Activity className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#0f172a]">Sub-50 dB Noise Damping</h4>
                    <p className="text-xs text-slate-500">Acoustic resonance mitigation dampers</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-white border border-slate-200 text-xs text-slate-600 leading-relaxed">
                <strong className="text-[#0f172a] font-bold block mb-1">R&D Direct Mandate:</strong>
                Every transformer design is validated through 3D finite element stress modeling, ensuring compliance with strict short-circuit withstand standards.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
