'use client';

import SectionHeading from '@/components/SectionHeading';
import CTAButton from '@/components/CTAButton';
import { Award, ShieldCheck, Zap, Factory, CheckCircle2, HeartHandshake } from 'lucide-react';

const valueCards = [
  { title: "BIS Licensed Manufacturing", desc: "Manufactured strictly compliant with IS 1180, IS 2026 & IS 335 specifications.", icon: Award },
  { title: "ZED Gold Certified", desc: "Recognized for Zero Defect & Zero Effect environmentally sustainable manufacturing.", icon: ShieldCheck },
  { title: "Startup India Recognized", desc: "Agile, next-generation Indian electrical engineering enterprise.", icon: Zap },
  { title: "Women-Led Enterprise", desc: "Promoting inclusive growth, innovation, and leadership in electrical manufacturing.", icon: HeartHandshake },
  { title: "Up to 5 MVA Capability", desc: "Engineering 11 kV & 33 kV Oil-Filled and Cast Resin Dry-Type transformers.", icon: Factory },
  { title: "Industrial & Utility Ready", desc: "Engineered for solar plants, data centres, commercial towers, and utility grids.", icon: CheckCircle2 }
];

export default function CompanyIntro() {
  return (
    <section className="py-20 bg-slate-50/70 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-12">
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="ABOUT G SONS POWER"
              title="At G Sons Power, electrical equipment is the backbone of modern industry."
              subtitle="Specializing in the design and manufacturing of Oil-Filled Distribution Transformers, Cast Resin Dry Type Transformers, VPI Dry Type Transformers, Compact Substations (CSS), and HT/LT Panels."
              className="mb-0"
            />
          </div>

          <div className="lg:col-span-6 space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            <p>
              Backed by decades of engineering expertise from the G Sons Group, our manufacturing combines modern production processes, vacuum resin casting, precision testing equipment, and comprehensive quality control.
            </p>
            <p>
              Today, our solutions power manufacturing facilities, commercial developments, data centres, healthcare institutions, solar projects, and utility networks across India with an expanding international footprint.
            </p>
            <div className="pt-2">
              <CTAButton href="/about" size="md" variant="primary">
                Discover Our Heritage
              </CTAButton>
            </div>
          </div>
        </div>

        {/* 6 Value Cards from G_Sons_Power.docx */}
        <div className="pt-8 border-t border-slate-200">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#0052cc] block mb-6 text-center">
            WHY CHOOSE G SONS POWER?
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {valueCards.map((card, idx) => {
              const IconComp = card.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-6 border border-slate-200 shadow-sm hover:border-[#0052cc]/40 transition-all flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded bg-[#0052cc]/10 text-[#0052cc] flex items-center justify-center font-bold shrink-0">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#0f172a] mb-1">{card.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed font-normal">
                      {card.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
