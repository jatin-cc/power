import SectionHeading from '@/components/SectionHeading';
import CTAButton from '@/components/CTAButton';
import { Leaf, ShieldCheck, Flame, Droplets } from 'lucide-react';

export const metadata = {
  title: 'Sustainability & ESG | Vortex Power Systems',
  description: 'Discover our biodegradable natural & synthetic ester fluid transformers, energy-efficient CRGO core lamination designs, and carbon reduction goals.',
};

export default function SustainabilityPage() {
  return (
    <main className="pt-32 pb-24 bg-white text-[#0f172a]">
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#063772]">
            ENVIRONMENTAL, SOCIAL & GOVERNANCE (ESG)
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0f172a]">
            Sustainable High-Voltage Power Infrastructure
          </h1>
          <p className="text-base text-slate-600 leading-relaxed font-normal">
            Transitioning global substations to biodegradable ester insulating fluids, low-loss CRGO cores, and zero-leakage sealed tank systems.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="p-8 bg-[#23790a]/5 border border-[#23790a]/20 space-y-4 shadow-sm">
          <div className="w-10 h-10 bg-[#23790a] text-white flex items-center justify-center font-bold">
            <Flame className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-bold text-[#0f172a]">K-Class Fire Safety</h3>
          <p className="text-xs text-slate-700 leading-relaxed">
            Ester fluids achieve a fire point exceeding 300°C (Fire Class K2/K3), eliminating the need for deluge sprinkler systems and blast fire walls in urban substations.
          </p>
        </div>

        <div className="p-8 bg-[#23790a]/5 border border-[#23790a]/20 space-y-4 shadow-sm">
          <div className="w-10 h-10 bg-[#23790a] text-white flex items-center justify-center font-bold">
            <Droplets className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-bold text-[#0f172a]">100% Biodegradable</h3>
          <p className="text-xs text-slate-700 leading-relaxed">
            Natural ester dielectric fluids break down fully in soil and aquatic environments within 28 days under OECD 301 testing, eliminating environmental spill liability.
          </p>
        </div>

        <div className="p-8 bg-[#23790a]/5 border border-[#23790a]/20 space-y-4 shadow-sm">
          <div className="w-10 h-10 bg-[#23790a] text-white flex items-center justify-center font-bold">
            <Leaf className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-bold text-[#0f172a]">Eco-Design Loss Rules</h3>
          <p className="text-xs text-slate-700 leading-relaxed">
            Our step-lap CRGO core laminations exceed EU Eco-Design Tier 2 and US DOE efficiency standards, cutting lifetime CO2 operational loss emissions by up to 35%.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-slate-50 border border-slate-200 p-10 sm:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-2xl font-bold text-[#0f172a]">Ready to retrofill mineral oil units with ester fluids?</h3>
            <p className="text-xs text-slate-600">
              Our mobile oil reconditioning rigs can drain, clean, and retrofill live substation assets with high-flashpoint ester fluids.
            </p>
          </div>
          <CTAButton href="/contact" size="lg" variant="primary">
            Request Ester Fluid Proposal
          </CTAButton>
        </div>
      </section>
    </main>
  );
}
