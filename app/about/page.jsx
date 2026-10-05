import SectionHeading from '@/components/SectionHeading';
import CTAButton from '@/components/CTAButton';
import { ShieldCheck, Award, Zap, Factory, CheckCircle2, HeartHandshake } from 'lucide-react';

export const metadata = {
  title: 'About Us | G Sons Power Transformers Pvt. Ltd.',
  description: 'Learn about G Sons Power Transformers Pvt. Ltd. (GSTPL), our BIS Licensed manufacturing, ZED Gold Certification, and G Sons Group heritage.',
};

const valueCards = [
  { title: "BIS Licensed Manufacturing", desc: "Compliant with IS 1180, IS 2026 & IS 335 national standards.", icon: Award },
  { title: "ZED Gold Certified", desc: "Zero Defect, Zero Effect environmentally sustainable manufacturing.", icon: ShieldCheck },
  { title: "Startup India Recognized", desc: "Agile, innovative, next-generation Indian electrical manufacturing enterprise.", icon: Zap },
  { title: "Women-Led Enterprise", desc: "Empowering inclusive industrial growth and customer-focused engineering.", icon: HeartHandshake },
  { title: "Up to 5 MVA Capability", desc: "Engineering 11 kV & 33 kV Distribution Transformers and Compact Substations.", icon: Factory },
  { title: "Industrial & Utility Ready", desc: "Powering commercial developments, solar projects, data centres, and utilities.", icon: CheckCircle2 }
];

export default function AboutPage() {
  return (
    <main className="pt-32 pb-24 bg-white text-[#0f172a]">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#063772]">
            G SONS POWER TRANSFORMERS PVT. LTD.
          </span>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0f172a] leading-tight">
            Engineering Reliable Power. Building Tomorrow&apos;s Electrical Infrastructure.
          </h1>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            At G Sons Power Transformers Pvt. Ltd., we believe electrical equipment is the backbone of industries, cities, critical infrastructure, and the energy transition.
          </p>
        </div>
      </section>

      {/* Main Overview */}
      <section className="bg-slate-50 border-y border-slate-200 py-16 mb-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 text-xs sm:text-sm text-slate-600 leading-relaxed">
          <div className="bg-white p-8 border border-slate-200 shadow-sm space-y-3">
            <h3 className="text-xl font-bold text-[#0f172a]">World-Class Distribution Solutions</h3>
            <p>
              Founded with a vision to deliver world-class distribution solutions manufactured in India, we specialize in the design and manufacturing of Oil-Filled Distribution Transformers, Cast Resin Dry Type Transformers, VPI Dry Type Transformers, Compact Substations (CSS), and engineered power distribution switchgear.
            </p>
            <p>
              Backed by decades of engineering expertise from the G Sons Group, our manufacturing combines modern production processes, stringent quality control, and adherence to national and international standards.
            </p>
          </div>

          <div className="bg-white p-8 border border-slate-200 shadow-sm space-y-3">
            <h3 className="text-xl font-bold text-[#0f172a]">Future-Ready Technologies</h3>
            <p>
              Every product is engineered for reliability, efficiency, safety, and long service life. Today, our solutions power manufacturing facilities, commercial developments, educational institutions, renewable energy projects, utility networks, and mission-critical installations across India.
            </p>
            <p>
              As a Startup India Recognized Enterprise, ZED Gold Certified Manufacturer, BIS Licensed Manufacturer, and Women-Led Enterprise, we represent the next generation of Indian electrical manufacturing.
            </p>
          </div>
        </div>
      </section>

      {/* 6 Value Cards */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <SectionHeading
          eyebrow="WHY G SONS POWER?"
          title="Engineered for Reliability, Safety & Longevity."
          subtitle="Combining innovation, agility, and uncompromising quality with customer-focused engineering."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {valueCards.map((card, idx) => {
            const IconComp = card.icon;
            const isGreen = idx === 1 || idx === 3;
            const iconBg = isGreen ? 'bg-[#23790a]/10 text-[#23790a]' : 'bg-[#063772]/10 text-[#063772]';
            const hoverBorder = isGreen ? 'hover:border-[#23790a]/40' : 'hover:border-[#063772]/40';
            return (
              <div
                key={idx}
                className={`bg-slate-50 p-6 border border-slate-200 shadow-sm transition-all flex items-start gap-4 ${hoverBorder}`}
              >
                <div className={`w-10 h-10 rounded flex items-center justify-center font-bold shrink-0 ${iconBg}`}>
                  <IconComp className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#0f172a] mb-1">{card.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal">
                    {card.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-r from-[#031f42] via-[#063772] to-[#144905] text-white p-10 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-2xl font-bold">Consult G Sons Power Engineers</h3>
            <p className="text-xs text-white/90">
              Submit your project specifications or request a custom quotation for Oil-Filled / Dry-Type Transformers up to 5 MVA.
            </p>
          </div>
          <CTAButton href="/contact" size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#063772]">
            Request Technical Quote
          </CTAButton>
        </div>
      </section>
    </main>
  );
}
