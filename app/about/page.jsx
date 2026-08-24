import SectionHeading from '@/components/SectionHeading';
import CTAButton from '@/components/CTAButton';
import { milestones } from '@/data/milestones';
import { leadershipTeam } from '@/data/team';
import { ShieldCheck, Award, Zap, Globe, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'About Us | Vortex Power Systems',
  description: 'Learn about our 40-year engineering heritage, ISO 17025 UHV laboratories, executive leadership, and commitment to global power grid reliability.',
};

export default function AboutPage() {
  return (
    <main className="pt-32 pb-24 bg-white text-[#0f172a]">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2">
            <span className="w-8 h-[2px] bg-[#0052cc]" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#0052cc]">
              CORPORATE HERITAGE & VISION
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0f172a] leading-tight">
            Pioneering High-Voltage Power Engineering Since 1985.
          </h1>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Vortex Power Systems is an independent global corporation specializing in custom electromagnetic power transformers, high-current arc furnace units, ester fluid eco-designs, and 24/7 predictive diagnostics.
          </p>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="bg-slate-50 border-y border-slate-200 py-20 mb-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 border border-slate-200 shadow-sm space-y-4">
            <div className="w-10 h-10 bg-[#0052cc]/10 text-[#0052cc] flex items-center justify-center font-bold">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-2xl font-bold text-[#0f172a]">Our Vision</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              To empower the global energy transition by engineering the most thermally efficient, dielectric resilient, and environmentally safe high-voltage transformers for national transmission grids and critical industries.
            </p>
          </div>

          <div className="bg-white p-8 border border-slate-200 shadow-sm space-y-4">
            <div className="w-10 h-10 bg-[#0052cc]/10 text-[#0052cc] flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-2xl font-bold text-[#0f172a]">Our Mission</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              To deliver zero-defect electromagnetic power equipment backed by ISO/IEC 17025 accredited impulse testing, continuous IoT predictive health telemetry, and 24/7 mobile field service support worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Historical Milestones Timeline */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <SectionHeading
          eyebrow="HISTORICAL TIMELINE"
          title="Key Milestones in Our 40-Year Journey."
          subtitle="From a regional repair workshop in 1985 to a multi-plant global transformer corporation."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {milestones.map((m) => (
            <div key={m.year} className="p-6 bg-slate-50 border border-slate-200 relative">
              <span className="text-3xl font-extrabold text-[#0052cc] block mb-2 font-mono">
                {m.year}
              </span>
              <h4 className="font-bold text-base text-[#0f172a] mb-2">{m.title}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Executive Leadership Grid */}
      <section className="bg-slate-50 border-t border-slate-200 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            eyebrow="LEADERSHIP & GOVERNANCE"
            title="Executive Leadership Team."
            subtitle="Led by veteran electrical engineers, doctorate researchers, and high-voltage grid specialists."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {leadershipTeam.map((member) => (
              <div key={member.name} className="bg-white border border-slate-200 overflow-hidden shadow-sm">
                <div className="aspect-[4/5] bg-slate-200 overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 space-y-2">
                  <h4 className="font-bold text-base text-[#0f172a]">{member.name}</h4>
                  <span className="text-xs font-bold text-[#0052cc] uppercase tracking-wider block">
                    {member.role}
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
