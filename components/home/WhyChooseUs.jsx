'use client';

import SectionHeading from '@/components/SectionHeading';
import CTAButton from '@/components/CTAButton';
import { 
  Zap, 
  Layers, 
  Cpu, 
  ShieldCheck, 
  Settings2, 
  ClockCheck, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

const reasons = [
  {
    num: '01',
    title: '100% Electrolytic Grade Copper',
    desc: 'High-purity electrolytic copper conductors with Class-F / Class-H insulation deliver superior short-circuit withstand capability, minimal I²R losses, and thermal longevity.',
    icon: Zap,
    tag: 'Highest Electrical Conductivity'
  },
  {
    num: '02',
    title: 'Prime Grade CRGO Magnetic Cores',
    desc: 'Precision step-lap mitered core laminations cut from low-loss Cold-Rolled Grain Oriented (CRGO) silicon steel dramatically reduce core losses and acoustic humming.',
    icon: Layers,
    tag: 'Ultra-Low No-Load Loss'
  },
  {
    num: '03',
    title: 'Dual Technology Expertise (CRT & Oil)',
    desc: 'Specialized manufacturing across both Cast Resin Dry Type (100% fire-safe, maintenance-free for indoor buildings) and Hermetically Sealed / Conservator Oil-Filled units.',
    icon: Cpu,
    tag: 'Complete Transformer Spectrum'
  },
  {
    num: '04',
    title: 'Rigorous 100% In-House Testing',
    desc: 'Every transformer undergoes comprehensive routine and dielectric testing including turns ratio, vector group, winding resistance, insulation resistance, and dielectric loss.',
    icon: ShieldCheck,
    tag: 'IS 1180 & IS 2026 Compliant'
  },
  {
    num: '05',
    title: 'Custom Engineering & Tapping',
    desc: 'Engineered for project-specific voltage classes (11 kV & 33 kV), Off-Circuit Tap Changers (OCTC), On-Load Tap Changers (OLTC with RTCC), and tailor-made physical dimensions.',
    icon: Settings2,
    tag: 'Bespoke Sizing & Controls'
  },
  {
    num: '06',
    title: 'ZED Gold Quality & Rapid Delivery',
    desc: 'Zero Defect certified manufacturing ensures strict quality audits, rapid manufacturing lead times, seaworthy/roadworthy packaging, and turnkey commissioning assistance.',
    icon: ClockCheck,
    tag: 'Zero Defect Manufacturing'
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-24 bg-slate-50/70 border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <SectionHeading
            eyebrow="ENGINEERING EXCELLENCE"
            title="Why Choose G Sons Power Transformers?"
            subtitle="We do not just build transformers — we engineer reliable power distribution solutions designed to keep industrial operations running without interruption."
            className="mb-0 max-w-3xl"
          />
          <CTAButton href="/contact" size="md" variant="primary">
            Speak With an Engineer
          </CTAButton>
        </div>

        {/* 6 Feature Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            const isGreen = idx % 2 === 1;
            return (
              <div
                key={idx}
                className={`group bg-white border border-slate-200 p-8 rounded-sm shadow-xs transition-all duration-300 flex flex-col justify-between relative overflow-hidden ${
                  isGreen ? 'hover:border-[#23790a] hover:shadow-xl' : 'hover:border-[#063772] hover:shadow-xl'
                }`}
              >
                {/* Top Corner Number */}
                <div
                  className={`absolute top-6 right-6 text-2xl font-black text-slate-100 transition-colors pointer-events-none ${
                    isGreen ? 'group-hover:text-[#23790a]/10' : 'group-hover:text-[#063772]/10'
                  }`}
                >
                  {item.num}
                </div>

                <div>
                  {/* Icon and Tag */}
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className={`w-12 h-12 rounded-sm flex items-center justify-center font-bold transition-colors duration-300 ${
                        isGreen
                          ? 'bg-[#23790a]/10 text-[#23790a] group-hover:bg-[#23790a] group-hover:text-white'
                          : 'bg-[#063772]/10 text-[#063772] group-hover:bg-[#063772] group-hover:text-white'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-xs ${
                        isGreen ? 'text-[#23790a] bg-[#23790a]/10' : 'text-[#063772] bg-[#063772]/10'
                      }`}
                    >
                      {item.tag}
                    </span>
                  </div>

                  <h3
                    className={`text-lg font-bold text-[#0f172a] mb-2.5 transition-colors ${
                      isGreen ? 'group-hover:text-[#23790a]' : 'group-hover:text-[#063772]'
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div
                  className={`pt-6 mt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-slate-400 transition-colors ${
                    isGreen ? 'group-hover:text-[#23790a]' : 'group-hover:text-[#063772]'
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4 text-[#23790a]" />
                  <span>Certified Performance Guarantee</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
