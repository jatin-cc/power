'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function StatisticsSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const counters = gsap.utils.toArray('.stat-number');

      counters.forEach((counter) => {
        const targetVal = parseFloat(counter.getAttribute('data-target'));
        const suffix = counter.getAttribute('data-suffix') || '';

        gsap.to(counter, {
          innerText: targetVal,
          duration: 2,
          ease: 'power2.out',
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            toggleActions: 'play none none reverse',
          },
          onUpdate: function () {
            counter.innerText = Math.floor(this.targets()[0].innerText).toLocaleString() + suffix;
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-200">
          {/* Stat 1 */}
          <div className="pt-6 md:pt-0 md:px-6 first:px-0">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0052cc] tracking-tight mb-2">
              <span className="stat-number" data-target="5" data-suffix=" MVA">
                0
              </span>
            </div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-[#0f172a] mb-1">
              Max Transformer Rating
            </h4>
            <p className="text-xs text-slate-500">11 kV & 33 kV Voltage Classes</p>
          </div>

          {/* Stat 2 */}
          <div className="pt-6 md:pt-0 md:px-6">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] tracking-tight mb-2">
              <span>BIS / ZED</span>
            </div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-[#0f172a] mb-1">
              Gold Certified
            </h4>
            <p className="text-xs text-slate-500">Zero Defect Manufacturing</p>
          </div>

          {/* Stat 3 */}
          <div className="pt-6 md:pt-0 md:px-6">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0052cc] tracking-tight mb-2">
              <span>100%</span>
            </div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-[#0f172a] mb-1">
              Copper Windings
            </h4>
            <p className="text-xs text-slate-500">Electrolytic Grade Conductor</p>
          </div>

          {/* Stat 4 */}
          <div className="pt-6 md:pt-0 md:px-6">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] tracking-tight mb-2">
              <span>IS 1180 / 2026</span>
            </div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-[#0f172a] mb-1">
              Compliant Standards
            </h4>
            <p className="text-xs text-slate-500">National & ECBC Efficiency</p>
          </div>
        </div>
      </div>
    </section>
  );
}
