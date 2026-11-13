'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BarChart3, TrendingUp, ShieldCheck, Zap } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const metrics = [
  {
    value: '5 MVA',
    num: 5,
    unit: 'MVA',
    label: 'Maximum Single Unit Capacity',
    subtext: '11 kV & 33 kV Classes',
    barPercent: 100,
    accent: '#38bdf8', // Sky blue
    icon: Zap,
  },
  {
    value: '10,000+',
    num: 10000,
    unit: '+',
    label: 'Transformers Installed',
    subtext: 'Across India & Global Grids',
    barPercent: 95,
    accent: '#4ade80', // Green
    icon: TrendingUp,
  },
  {
    value: '100%',
    num: 100,
    unit: '%',
    label: 'Routine Testing In-House',
    subtext: 'Turn Ratio, Winding & Loss',
    barPercent: 100,
    accent: '#38bdf8', // Sky blue
    icon: ShieldCheck,
  },
  {
    value: '99.98%',
    num: 99.98,
    unit: '%',
    label: 'Field Operating Reliability',
    subtext: 'Verified by Utility Audits',
    barPercent: 99.98,
    accent: '#4ade80', // Green
    icon: BarChart3,
  },
];

export default function GraphSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate progress bars on scroll
      gsap.fromTo(
        '.metric-progress-bar',
        { width: '0%' },
        {
          width: (i, target) => target.getAttribute('data-width') || '100%',
          duration: 1.4,
          ease: 'power3.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Stagger metric cards
      gsap.fromTo(
        '.metric-card',
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-16 bg-white border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Flagship Dark Metric Graph Banner as seen in PDF Page 2 */}
        <div className="relative rounded-2xl bg-[#081736] text-white p-8 sm:p-12 shadow-2xl border border-blue-900/60 overflow-hidden">
          {/* Subtle Tech Blueprint Lines & Radial Background Glow */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
          <div className="absolute -top-24 left-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 right-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Section Sub-header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 mb-8 border-b border-blue-900/50 gap-4 relative z-10">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-300">
                G SONS OPERATIONAL METRICS &amp; RELIABILITY BENCHMARK
              </span>
            </div>
            <span className="text-xs font-mono text-blue-300/80">
              Audited Performance Across 11 kV &amp; 33 kV Classes
            </span>
          </div>

          {/* 4 Metrics Graph Grid matching PDF Page 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-blue-900/50 relative z-10">
            {metrics.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className={`metric-card ${idx !== 0 ? 'pt-6 sm:pt-0 sm:pl-8' : ''} space-y-4`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight" style={{ color: item.accent }}>
                      {item.value}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-slate-300">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Progress Graph Bar */}
                  <div className="space-y-1.5">
                    <div className="w-full h-1.5 bg-blue-950/80 rounded-full overflow-hidden border border-blue-800/40">
                      <div
                        className="metric-progress-bar h-full rounded-full transition-all"
                        data-width={`${item.barPercent}%`}
                        style={{
                          backgroundColor: item.accent,
                          boxShadow: `0 0 10px ${item.accent}80`,
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-white tracking-wide">
                      {item.label}
                    </h3>
                    <p className="text-xs text-slate-300 font-normal mt-0.5">
                      {item.subtext}
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

