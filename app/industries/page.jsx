import SectionHeading from '@/components/SectionHeading';
import CTAButton from '@/components/CTAButton';
import { industries } from '@/data/industries';
import { CheckCircle2, Factory, Zap, Shield } from 'lucide-react';

export const metadata = {
  title: 'Industries Served | Vortex Power Systems',
  description: 'High-voltage grid transformers tailored for power utilities, renewable energy, steel melt shops, traction railways, and mission-critical data centers.',
};

export default function IndustriesPage() {
  return (
    <main className="pt-32 pb-24 bg-white text-[#0f172a]">
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#0052cc]">
            SECTOR MATRIX
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0f172a]">
            Industry Application Solutions
          </h1>
          <p className="text-base text-slate-600 leading-relaxed font-normal">
            Custom magnetic design solutions engineered to withstand sector-specific grid stresses, harmonic distortion, short-circuit duty, and extreme offshore marine environments.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 space-y-12">
        {industries.map((ind) => (
          <div
            id={ind.slug}
            key={ind.id}
            className="bg-slate-50 border border-slate-200 p-8 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-sm"
          >
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold text-[#0052cc] uppercase tracking-widest bg-[#0052cc]/10 px-3 py-1">
                {ind.tagline}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a]">{ind.name}</h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{ind.desc}</p>

              <div className="pt-3 border-t border-slate-200 space-y-2">
                <span className="text-[10px] font-bold tracking-widest text-[#0f172a] uppercase block">
                  DEPLOYED TRANSFORMER CATEGORIES
                </span>
                <div className="flex flex-wrap gap-2">
                  {ind.keyProducts.map((kp, kpIdx) => (
                    <span key={kpIdx} className="bg-white border border-slate-200 text-[#0052cc] text-xs font-bold px-3 py-1">
                      {kp}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 border border-slate-200 bg-white p-2 shadow-sm">
              <img src={ind.image} alt={ind.name} className="w-full aspect-[4/3] object-cover" />
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
