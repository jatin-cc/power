'use client';

import { useState } from 'react';
import SectionHeading from '@/components/SectionHeading';
import { industries } from '@/data/industries';
import CTAButton from '@/components/CTAButton';
import { ArrowRight, Factory, Zap, Shield, CheckCircle2, ChevronRight } from 'lucide-react';

export default function IndustriesSelector() {
  const [selectedInd, setSelectedInd] = useState(industries[0]);

  return (
    <section id="industries" className="py-24 bg-white border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <SectionHeading
            eyebrow="APPLICATION EXPERTISE"
            title="Industries We Empower With Expertise"
            subtitle="From solar IPPs and high-rise commercial developments to heavy manufacturing and state power utilities, G Sons Power delivers tailor-engineered distribution solutions."
            className="mb-0 max-w-3xl"
          />
          <CTAButton href="/industries" size="md" variant="outline">
            Explore All Sectors
          </CTAButton>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Industry Navigation List */}
          <div className="lg:col-span-5 space-y-2.5">
            {industries.map((ind) => {
              const isSelected = selectedInd.id === ind.id;
              return (
                <button
                  key={ind.id}
                  onClick={() => setSelectedInd(ind)}
                  className={`w-full text-left p-4.5 border transition-all duration-200 flex items-center justify-between cursor-pointer rounded-sm ${
                    isSelected
                      ? 'border-[#0052cc] bg-slate-50/80 text-[#0052cc] font-bold shadow-xs border-l-4 border-l-[#0052cc]'
                      : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50/50'
                  }`}
                >
                  <div className="pr-4">
                    <span className="text-sm block font-bold leading-tight">{ind.name}</span>
                    <span className="text-[11px] text-slate-500 font-normal block mt-1">{ind.tagline}</span>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
                      isSelected ? 'translate-x-1 text-[#0052cc]' : 'text-slate-400'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Industry Content Showcase Card */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 p-8 sm:p-10 rounded-sm flex flex-col justify-between shadow-xs">
            <div className="space-y-6">
              {/* Header inside Showcase */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200/80 pb-5">
                <div>
                  <span className="text-[10px] font-bold tracking-widest text-[#0052cc] uppercase block mb-1">
                    SECTOR APPLICATION PROFILE
                  </span>
                  <h3 className="text-2xl font-extrabold text-[#0f172a]">{selectedInd.name}</h3>
                  <span className="text-xs text-slate-500 font-medium block mt-0.5">{selectedInd.tagline}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                {selectedInd.desc}
              </p>

              {/* Recommended Product Tags */}
              <div className="space-y-2.5">
                <span className="text-[11px] font-bold tracking-wider text-[#0f172a] uppercase block">
                  RECOMMENDED TRANSFORMER ARCHITECTURE
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedInd.keyProducts.map((p, pIdx) => (
                    <span
                      key={pIdx}
                      className="bg-white border border-[#0052cc]/20 text-[#0052cc] px-3 py-1.5 text-xs font-bold rounded-xs shadow-2xs"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>

              {/* Sector Metrics Grid */}
              <div className="pt-4 border-t border-slate-200/80 grid grid-cols-3 gap-4 text-xs">
                {Object.entries(selectedInd.stats).map(([k, v]) => (
                  <div key={k} className="p-3 bg-white border border-slate-200 rounded-xs">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-0.5">
                      {k.replace(/([A-Z])/g, ' $1')}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-[#0f172a] block">
                      {v}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Button inside Card */}
            <div className="pt-6 mt-8 border-t border-slate-200/80 flex items-center justify-between">
              <span className="text-xs text-slate-500">
                Custom engineering available for {selectedInd.name}
              </span>
              <CTAButton href="/contact" size="sm" variant="primary">
                Discuss Sector Specs
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
