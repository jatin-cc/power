'use client';

import { useEffect, useRef, useState } from 'react';
import SectionHeading from '@/components/SectionHeading';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const processSteps = [
  {
    step: '01',
    title: '3D Electromagnetic & Thermal Modeling',
    desc: 'Finite element calculations evaluate magnetic flux distribution, stray losses, and short-circuit mechanical forces before raw materials are assigned.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80',
  },
  {
    step: '02',
    title: 'High-Permeability CRGO Core Slitting',
    desc: 'Cold Rolled Grain Oriented (CRGO) silicon steel laminations are precision cut with step-lap joints to minimize no-load excitation losses.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80',
  },
  {
    step: '03',
    title: 'Cleanroom Winding & CTC Conductor Assembly',
    desc: 'Windings are manufactured inside ISO Class 7 dust-free cleanrooms using high-grade electrolytic copper and epoxy-bonded CTC conductors.',
    image: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=80',
  },
  {
    step: '04',
    title: 'Vapor Phase Drying (VPD) & Moisture Extraction',
    desc: 'Core and winding active parts undergo kerosene vapor phase processing under 0.1 Torr vacuum, extracting cellulose moisture to < 0.5%.',
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1000&q=80',
  },
  {
    step: '05',
    title: 'Tank Fabrication & C5-M Heavy Coating',
    desc: 'Structural steel tanks are shot-blasted to SA 2.5 purity, robot welded, and coated with multi-layer C5-M offshore protective epoxy.',
    image: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&w=1000&q=80',
  },
  {
    step: '06',
    title: 'UHV Impulse & Dielectric Routine Testing',
    desc: 'Completed units enter the Faraday-shielded lab for 2,400 kV impulse testing, partial discharge measurement (< 2 pC), and thermal runs.',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1000&q=80',
  },
];

export default function ManufacturingProcess() {
  const sectionRef = useRef(null);
  const contentWrapperRef = useRef(null);
  const leftVisualRef = useRef(null);
  const lineRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 1024;
      if (isMobile) return;

      const steps = gsap.utils.toArray('.process-step-item');

      steps.forEach((stepEl, idx) => {
        ScrollTrigger.create({
          trigger: stepEl,
          start: 'top 50%',
          end: 'bottom 50%',
          onEnter: () => setActiveStep(idx),
          onEnterBack: () => setActiveStep(idx),
        });
      });

      // Pin left visual right when Step 01 touches top of viewport (below navbar at 80px)
      ScrollTrigger.create({
        trigger: contentWrapperRef.current,
        start: 'top 80px',
        end: 'bottom 80%',
        pin: leftVisualRef.current,
        pinSpacing: false,
      });

      // Grow vertical line indicator as user scrolls steps
      gsap.to(lineRef.current, {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: contentWrapperRef.current,
          start: 'top 80px',
          end: 'bottom 80%',
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-slate-50 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header (Scrolls Up Naturally) */}
        <SectionHeading
          eyebrow="MANUFACTURING DOCUMENTARY"
          title="Step-by-Step Transformer Manufacturing Story."
          subtitle="Follow our continuous quality protocol from electromagnetic 3D modeling to UHV impulse testing and global dispatch."
        />

        {/* Content Wrapper: Pins left visual when Step 01 touches top */}
        <div ref={contentWrapperRef} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-12 relative">
          {/* Left Sticky Visual Box */}
          <div ref={leftVisualRef} className="lg:col-span-6 relative w-full hidden lg:block">
            <div className="relative aspect-[4/3] border border-slate-200 bg-white p-2 shadow-lg overflow-hidden">
              <img
                src={processSteps[activeStep].image}
                alt={processSteps[activeStep].title}
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute top-4 left-4 bg-[#0052cc] text-white px-3 py-1 text-xs font-bold uppercase tracking-wider">
                STEP {processSteps[activeStep].step} PROTOCOL
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 border border-slate-200">
                <span className="text-[10px] font-bold tracking-widest text-[#0052cc] uppercase block mb-1">
                  ACTIVE PHASE
                </span>
                <h4 className="font-bold text-sm text-[#0f172a]">
                  {processSteps[activeStep].title}
                </h4>
              </div>
            </div>
          </div>

          {/* Right Scroll Steps List */}
          <div className="lg:col-span-6 space-y-12 relative pl-8 border-l-2 border-slate-200">
            {/* Animated Active Line */}
            <div
              ref={lineRef}
              className="absolute left-[-2px] top-0 w-[2px] h-full bg-[#0052cc] origin-top scale-y-0 transition-transform duration-100 pointer-events-none"
            />

            {processSteps.map((item, idx) => {
              const isActive = activeStep === idx;
              return (
                <div
                  key={item.step}
                  className={`process-step-item relative transition-all duration-300 p-6 border ${
                    isActive
                      ? 'bg-white border-[#0052cc] shadow-md shadow-[#0052cc]/10'
                      : 'bg-white/60 border-slate-200 opacity-60'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className={`text-xs font-extrabold px-2.5 py-0.5 ${
                        isActive ? 'bg-[#0052cc] text-[#ffffff]' : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {item.step}
                    </span>
                    <h3 className="font-bold text-base text-[#0f172a]">{item.title}</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
