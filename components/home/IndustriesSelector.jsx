'use client';

import { useState } from 'react';
import SectionHeading from '@/components/SectionHeading';
import { industries } from '@/data/industries';
import CTAButton from '@/components/CTAButton';
import { ArrowRight, Factory, Zap, Shield } from 'lucide-react';

export default function IndustriesSelector() {
  const [selectedInd, setSelectedInd] = useState(industries[0]);

  return (
    <section className="py-24 bg-slate-50/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow="TAILORED INDUSTRY APPLICATIONS"
          title="Engineered for Critical Sector Infrastructure."
          subtitle="From national power utilities to solar/wind microgrids and heavy steel melting shops, Vortex delivers specialized grid solutions."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Industry Navigation List */}
          <div className="lg:col-span-4 space-y-2">
            {industries.map((ind) => {
              const isSelected = selectedInd.id === ind.id;
              return (
                <button
                  key={ind.id}
                  onClick={() => setSelectedInd(ind)}
                  className={`w-full text-left p-4 border transition-all duration-200 flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? 'border-[#0052cc] bg-white text-[#0052cc] font-bold shadow-sm border-l-4 border-l-[#0052cc]'
                      : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                  }`}
                >
                  <span className="text-sm">{ind.name}</span>
                  <ArrowRight className={`w-4 h-4 transition-transform ${isSelected ? 'translate-x-1 text-[#0052cc]' : 'opacity-40'}`} />
                </button>
              );
            })}
          </div>

          {/* Industry Content Showcase */}
          <div className="lg:col-span-8 bg-white border border-slate-200 p-8 sm:p-10 flex flex-col justify-between shadow-sm">
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
                <div>
                  <span className="text-[10px] font-bold tracking-widest text-[#0052cc] uppercase block mb-1">
                    SECTOR PROFILE
                  </span>
                  <h3 className="text-2xl font-extrabold text-[#0f172a]">{selectedInd.name}</h3>
                  <span className="text-xs text-slate-500 font-medium block mt-0.5">{selectedInd.tagline}</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {selectedInd.desc}
              </p>

              {/* Recommended Product Tags */}
              <div className="space-y-2">
                <span className="text-[10px] font-bold tracking-widest text-[#0f172a] uppercase block">
                  RECOMMENDED TRANSFORMER ARCHITECTURE
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedInd.keyProducts.map((p, pIdx) => (
                    <span key={pIdx} className="bg-[#0052cc]/10 text-[#0052cc] px-3 py-1 text-xs font-bold uppercase tracking-wider">
                      {p}
                    </span>
                  ))}
                </div>
              </div>

              {/* Sector Metrics Grid */}
              <div className="pt-4 border-t border-slate-200 grid grid-cols-3 gap-4 text-xs">
                {Object.entries(selectedInd.stats).map(([k, v]) => (
                  <div key={k} className="p-3 bg-slate-50 border border-slate-200">
                    <span className="text-[10px] font-bold uppercase text-slate-500 block mb-0.5">{k}</span>
                    <span className="text-sm font-bold text-[#0f172a]">{v}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-200">
              <CTAButton href="/industries" size="sm" variant="primary">
                Explore Industry Matrix
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
