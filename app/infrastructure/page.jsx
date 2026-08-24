import SectionHeading from '@/components/SectionHeading';
import CTAButton from '@/components/CTAButton';
import { facilities } from '@/data/facilities';
import { ShieldCheck, Factory, Zap, Cpu } from 'lucide-react';

export const metadata = {
  title: 'Manufacturing & Testing Infrastructure | Vortex Power Systems',
  description: 'Explore our 167,000+ m² manufacturing plants, ISO/IEC 17025 UHV Faraday test labs, vapor phase drying chambers, and cleanroom winding suites.',
};

export default function InfrastructurePage() {
  return (
    <main className="pt-32 pb-24 bg-white text-[#0f172a]">
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#0052cc]">
            GLOBAL MANUFACTURING FOOTPRINT
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0f172a]">
            High-Voltage Production & UHV Testing Infrastructure
          </h1>
          <p className="text-base text-slate-600 leading-relaxed font-normal">
            Equipped with 250-ton overhead crane clearances, cleanroom winding bays, kerosene vapor-phase drying chambers, and an ISO/IEC 17025 accredited impulse testing laboratory.
          </p>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="max-w-7xl mx-auto px-6 space-y-16">
        {facilities.map((fac, idx) => (
          <div
            key={fac.id}
            className="bg-slate-50 border border-slate-200 p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-sm"
          >
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-[#0052cc] uppercase tracking-widest bg-[#0052cc]/10 px-3 py-1">
                  FACILITY NODE 0{idx + 1}
                </span>
                <span className="text-xs font-bold text-slate-500 uppercase">{fac.area}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a]">{fac.name}</h2>
              <p className="text-xs text-slate-500 font-medium">{fac.location}</p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                <strong className="text-[#0f172a]">Primary Mission:</strong> {fac.focus}
              </p>

              <div className="space-y-2 pt-3 border-t border-slate-200">
                <h4 className="text-xs font-bold tracking-widest uppercase text-[#0f172a]">
                  KEY EQUIPMENT & CAPABILITIES
                </h4>
                {fac.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0052cc] shrink-0 mt-1.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Metrics Grid */}
              <div className="pt-4 grid grid-cols-3 gap-4 border-t border-slate-200 text-xs">
                {Object.entries(fac.metrics).map(([k, v]) => (
                  <div key={k} className="p-3 bg-white border border-slate-200">
                    <span className="text-[10px] font-bold text-slate-400 uppercase block mb-0.5">{k}</span>
                    <span className="font-bold text-[#0052cc] text-xs sm:text-sm">{v}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 border border-slate-200 bg-white p-2 shadow-md overflow-hidden">
              <img src={fac.image} alt={fac.name} className="w-full aspect-[4/3] object-cover" />
            </div>
          </div>
        ))}
      </section>

      {/* Lab Certification Banner */}
      <section className="max-w-7xl mx-auto px-6 mt-20">
        <div className="bg-slate-900 text-white p-10 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0052cc]">
              TESTING COMPLIANCE
            </span>
            <h3 className="text-2xl font-bold">Schedule an In-Person Factory Acceptance Test (FAT)</h3>
            <p className="text-xs text-slate-300">
              Witness full lightning impulse, partial discharge, and temperature rise thermal testing live from our Faraday Shielded lab viewing gallery.
            </p>
          </div>
          <CTAButton href="/contact" size="lg" variant="primary">
            Schedule Factory Visit
          </CTAButton>
        </div>
      </section>
    </main>
  );
}
