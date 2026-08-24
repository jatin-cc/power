'use client';

import SectionHeading from '@/components/SectionHeading';
import CTAButton from '@/components/CTAButton';

export default function CompanyIntro() {
  return (
    <section className="py-24 bg-slate-50/70 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="ENGINEERING HERITAGE"
              title="Four Decades of High-Voltage Transformer Mastery."
              subtitle="Vortex Power Systems engineers custom power transmission and distribution transformers built to endure the world's most unforgiving grid environments."
            />
            <CTAButton href="/about" size="md" variant="primary">
              Discover Our Heritage
            </CTAButton>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white p-8 border border-slate-200 shadow-sm hover:border-[#0052cc]/40 transition-colors">
              <span className="text-[#0052cc] text-xs font-bold tracking-widest uppercase block mb-3">
                01 / DESIGN EXCELLENCE
              </span>
              <h3 className="text-xl font-bold text-[#0f172a] mb-2">
                3D Finite Element Modeling
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Advanced ANSYS electromagnetic thermal simulation predicting exact hot-spot dielectric stress and mechanical short-circuit forces.
              </p>
            </div>

            <div className="bg-white p-8 border border-slate-200 shadow-sm hover:border-[#0052cc]/40 transition-colors">
              <span className="text-[#0052cc] text-xs font-bold tracking-widest uppercase block mb-3">
                02 / ECO INNOVATION
              </span>
              <h3 className="text-xl font-bold text-[#0f172a] mb-2">
                Ester Fluid Eco-Design
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                100% biodegradable natural and synthetic ester fluids providing K-class fire safety (&gt;300°C fire point) for offshore and urban substations.
              </p>
            </div>

            <div className="bg-white p-8 border border-slate-200 shadow-sm hover:border-[#0052cc]/40 transition-colors">
              <span className="text-[#0052cc] text-xs font-bold tracking-widest uppercase block mb-3">
                03 / ADVANCED DIAGNOSTICS
              </span>
              <h3 className="text-xl font-bold text-[#0f172a] mb-2">
                IoT Predictive Health
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Continuous photo-acoustic spectroscopy DGA monitors and fiber-optic winding sensors feeding real-time SCADA telemetry.
              </p>
            </div>

            <div className="bg-white p-8 border border-slate-200 shadow-sm hover:border-[#0052cc]/40 transition-colors">
              <span className="text-[#0052cc] text-xs font-bold tracking-widest uppercase block mb-3">
                04 / GLOBAL SLA
              </span>
              <h3 className="text-xl font-bold text-[#0f172a] mb-2">
                24/7 Field Response
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                12,000 LPH mobile high-vacuum degasification units and emergency diagnostic crews deployed globally within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
