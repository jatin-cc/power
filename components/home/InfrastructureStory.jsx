'use client';

import SectionHeading from '@/components/SectionHeading';
import CTAButton from '@/components/CTAButton';
import { facilities } from '@/data/facilities';
import { Factory, ShieldCheck, Cpu, Zap } from 'lucide-react';

export default function InfrastructureStory() {
  return (
    <section className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow="WORLD-CLASS INFRASTRUCTURE"
          title="High-Voltage Manufacturing & UHV Testing Labs."
          subtitle="Operating 167,000+ m² of specialized cleanroom winding suites, vapor phase drying vacuum chambers, and ISO/IEC 17025 impulse testing laboratories."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {facilities.map((fac) => (
            <div
              key={fac.id}
              className="bg-slate-50 border border-slate-200 p-8 flex flex-col justify-between hover:border-[#0052cc]/40 transition-colors shadow-sm"
              data-cursor="VIEW"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#0052cc] uppercase tracking-widest bg-[#0052cc]/10 px-3 py-1">
                    {fac.area}
                  </span>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    FACILITY NODE
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#0f172a]">{fac.name}</h3>
                <p className="text-xs text-slate-500 font-medium">{fac.location}</p>

                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  <strong className="text-[#0f172a]">Core Focus:</strong> {fac.focus}
                </p>

                <ul className="space-y-2 pt-3 border-t border-slate-200 text-xs text-slate-700">
                  {fac.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0052cc] shrink-0 mt-1.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200 flex items-center justify-between">
                <CTAButton href="/infrastructure" size="sm" variant="outline">
                  View Facility Details
                </CTAButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
