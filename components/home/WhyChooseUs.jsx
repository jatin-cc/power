'use client';

import SectionHeading from '@/components/SectionHeading';
import CTAButton from '@/components/CTAButton';

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="WHY VORTEX POWER SYSTEMS"
              title="Built for Unforgiving Grid Demands."
              subtitle="We do not mass produce off-the-shelf equipment. Every transformer is custom-engineered to meet specific short-circuit ratings, acoustic limits, and thermal loss profiles."
            />
            <CTAButton href="/contact" size="md" variant="primary">
              Consult Our Engineers
            </CTAButton>
          </div>

          <div className="lg:col-span-7 space-y-8 pl-0 lg:pl-8 border-l-0 lg:border-l border-slate-200">
            <div className="space-y-2">
              <span className="text-xs font-bold text-[#0052cc] tracking-widest uppercase">
                01 / OEM CUSTOMIZATION
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#0f172a]">
                100% Tailored Electromagnetic Engineering
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Whether accommodating tight sub-station footprints, high harmonic content from solar inverters, or 100 kA furnace arcing, our engineering team tailors every winding, core lamination, and cooling channel.
              </p>
            </div>

            <div className="space-y-2 pt-6 border-t border-slate-100">
              <span className="text-xs font-bold text-[#0052cc] tracking-widest uppercase">
                02 / DIELECTRIC INTEGRITY
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#0f172a]">
                ISO/IEC 17025 Accredited Impulse Testing
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Our in-house 2,400 kV impulse generator lab verifies full lightning surge withstand capability, dielectric power factor, and sub-2 pC partial discharge background levels prior to dispatch.
              </p>
            </div>

            <div className="space-y-2 pt-6 border-t border-slate-100">
              <span className="text-xs font-bold text-[#0052cc] tracking-widest uppercase">
                03 / LIFECYCLE SLA
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#0f172a]">
                Zero Outage Commitment & 24/7 Field Support
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Backing every asset with mobile oil processing trailers, online DGA sensors, and 24-hour rapid emergency dispatch engineers to guarantee 99.99% substation uptime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
