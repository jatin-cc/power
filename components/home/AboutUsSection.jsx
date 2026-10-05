'use client';

import Link from 'next/link';
import SectionHeading from '@/components/SectionHeading';
import CTAButton from '@/components/CTAButton';
import { Award, ShieldCheck, Zap, Factory, CheckCircle2, HeartHandshake, ArrowRight } from 'lucide-react';

const pillars = [
  {
    title: 'BIS Licensed Manufacturer',
    desc: 'Manufactured strictly compliant with IS 1180, IS 2026 & IS 335 national specifications with multi-level Bureau of Indian Standards certification.',
    icon: Award,
    badge: 'IS 1180 / 2026'
  },
  {
    title: 'ZED Gold Certified',
    desc: 'Honored by the Government of India for Zero Defect manufacturing processes and Zero Effect environmental sustainability standards.',
    icon: ShieldCheck,
    badge: 'Zero Defect'
  },
  {
    title: 'Startup India Recognized',
    desc: 'An agile, forward-looking Indian electrical enterprise combining rapid execution with advanced high-voltage design engineering.',
    icon: Zap,
    badge: 'Govt. Recognized'
  },
  {
    title: 'Women-Led Enterprise',
    desc: 'Championing inclusive industrial growth, diverse technical leadership, and precision governance in heavy power manufacturing.',
    icon: HeartHandshake,
    badge: 'Inclusive Leadership'
  }
];

const stats = [
  { value: '5 MVA', label: 'Maximum Single Unit Capacity', detail: '11 kV & 33 kV Classes' },
  { value: '10,000+', label: 'Transformers Installed', detail: 'Across India & Global Grids' },
  { value: '100%', label: 'Routine Testing In-House', detail: 'Turn Ratio, Winding & Loss' },
  { value: '99.98%', label: 'Field Operating Reliability', detail: 'Verified by Utility Audits' }
];

export default function AboutUsSection() {
  return (
    <section id="about" className="py-24 bg-white border-b border-slate-200 relative overflow-hidden">
      {/* Subtle blueprint grid in background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Top Header & Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6 space-y-4">
            <SectionHeading
              eyebrow="ABOUT G SONS POWER TRANSFORMERS"
              title="Decades of Precision Engineering. Reliable Power Across the Nation."
              subtitle="At G Sons Power Transformers Pvt. Ltd., electrical equipment is the backbone of modern industry, critical infrastructure, and sustainable energy."
              className="mb-0"
            />
          </div>

          <div className="lg:col-span-6 space-y-5 text-sm text-slate-600 leading-relaxed font-normal">
            <p>
              Backed by decades of engineering expertise from the <strong className="text-[#0f172a] font-semibold">G Sons Group</strong>, our state-of-the-art facility integrates vacuum resin casting plants, automated coil winding lines, computerized testing bays, and precision fabrication.
            </p>
            <p>
              Today, our certified <strong className="text-[#0f172a] font-semibold">Oil-Filled Distribution Transformers, Cast Resin Dry Type (CRT), VPI Dry Type Transformers</strong>, and <strong className="text-[#0f172a] font-semibold">Compact Substations (CSS)</strong> power industrial complexes, smart cities, commercial towers, healthcare facilities, solar farms, and regional power utilities.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <CTAButton href="/about" size="md" variant="primary">
                Learn More About Us
              </CTAButton>
              <Link
                href="/infrastructure"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#063772] hover:text-[#23790a] hover:underline uppercase tracking-wider"
              >
                Inspect Factory Infrastructure <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            const isGreen = idx % 2 === 1;
            return (
              <div
                key={idx}
                className={`group relative bg-slate-50 border border-slate-200 p-6 rounded-sm hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between ${
                  isGreen ? 'hover:border-[#23790a]' : 'hover:border-[#063772]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-11 h-11 rounded-sm flex items-center justify-center font-bold transition-colors ${
                        isGreen
                          ? 'bg-[#23790a]/10 text-[#23790a] group-hover:bg-[#23790a] group-hover:text-white'
                          : 'bg-[#063772]/10 text-[#063772] group-hover:bg-[#063772] group-hover:text-white'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-xs ${
                        isGreen
                          ? 'text-[#23790a] bg-[#23790a]/10'
                          : 'text-[#063772] bg-[#063772]/10'
                      }`}
                    >
                      {item.badge}
                    </span>
                  </div>
                  <h3
                    className={`text-base font-bold text-[#0f172a] mb-2 transition-colors ${
                      isGreen ? 'group-hover:text-[#23790a]' : 'group-hover:text-[#063772]'
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Real-world Metrics Strip */}
        <div className="bg-[#0f172a] text-white p-8 sm:p-10 rounded-sm shadow-xl grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-slate-800">
          {stats.map((stat, idx) => {
            const isGreen = idx % 2 === 1;
            return (
              <div key={idx} className={`${idx !== 0 ? 'pt-6 lg:pt-0 lg:pl-8' : ''} space-y-1`}>
                <div
                  className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
                    isGreen ? 'text-[#23790a]' : 'text-[#38bdf8]'
                  }`}
                >
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-white">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-400">
                  {stat.detail}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
