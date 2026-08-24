'use client';

import SectionHeading from '@/components/SectionHeading';
import CTAButton from '@/components/CTAButton';

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="ENGINEERING QUALITY"
              title="Dependable Power Systems. Built for Longevity."
              subtitle="We do not simply manufacture transformers. We engineer reliable power distribution solutions that keep industries running and infrastructure connected."
            />
            <CTAButton href="/contact" size="md" variant="primary">
              Consult Our Engineering Team
            </CTAButton>
          </div>

          <div className="lg:col-span-7 space-y-6 pl-0 lg:pl-8 border-l-0 lg:border-l border-slate-200">
            <div className="space-y-1">
              <span className="text-xs font-bold text-[#0052cc] tracking-widest uppercase">
                01 / CERTIFIED QUALITY
              </span>
              <h3 className="text-lg font-bold text-[#0f172a]">
                BIS Licensed & ZED Gold Certified
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Manufactured compliant with IS 1180, IS 2026, IS 335, and ECBC regulations with Zero Defect & Zero Effect quality standards.
              </p>
            </div>

            <div className="space-y-1 pt-4 border-t border-slate-100">
              <span className="text-xs font-bold text-[#0052cc] tracking-widest uppercase">
                02 / PREMIUM MATERIALS
              </span>
              <h3 className="text-lg font-bold text-[#0f172a]">
                Electrolytic Copper & High-Grade CRGO Core
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                100% precision copper windings and low-loss CRGO silicon steel laminations ensuring maximum thermal durability and energy efficiency.
              </p>
            </div>

            <div className="space-y-1 pt-4 border-t border-slate-100">
              <span className="text-xs font-bold text-[#0052cc] tracking-widest uppercase">
                03 / FULL CUSTOMIZATION
              </span>
              <h3 className="text-lg font-bold text-[#0f172a]">
                Project-Specific Custom Engineering
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Custom voltage ratios (11 kV & 33 kV), Off-Circuit Tap Links (OCTC), On-Load Tap Changers (OLTC), vector groups, and IP enclosures up to 5 MVA.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
