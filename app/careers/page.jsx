import SectionHeading from '@/components/SectionHeading';
import CTAButton from '@/components/CTAButton';
import { Briefcase, MapPin, Zap } from 'lucide-react';

export const metadata = {
  title: 'Careers & Engineering Opportunities | Vortex Power Systems',
  description: 'Join our team of doctorate electrical engineers, high-voltage test researchers, and global commissioning specialists.',
};

const openPositions = [
  { title: "Senior Electromagnetic Finite Element Design Engineer", department: "R&D Computational Simulation", location: "Global HQ - Campus Alpha", type: "Full-Time" },
  { title: "Ultra-High-Voltage Test Station Manager (ISO 17025)", department: "Quality & Testing", location: "UHV Test Facility", type: "Full-Time" },
  { title: "Lead Chemical Chemist (Oil Analysis & Ester Fluids)", department: "Material Science Lab", location: "Innovation Center", type: "Full-Time" },
  { title: "Global High-Voltage Substation Field Commissioning Lead", department: "Field Engineering", location: "Deployable (Global SLA)", type: "Full-Time" }
];

export default function CareersPage() {
  return (
    <main className="pt-32 pb-24 bg-white text-[#0f172a]">
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#0052cc]">
            CAREERS & CULTURE
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0f172a]">
            Shape the Future of Global Power Grids.
          </h1>
          <p className="text-base text-slate-600 leading-relaxed font-normal">
            We are looking for passionate high-voltage electrical engineers, material scientists, computational modeling researchers, and field service specialists.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 space-y-6">
        <h2 className="text-2xl font-extrabold text-[#0f172a] border-b border-slate-200 pb-3">
          Open Engineering & Research Positions
        </h2>

        <div className="space-y-4">
          {openPositions.map((pos, idx) => (
            <div
              key={idx}
              className="p-6 bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-[#0052cc] transition-colors"
            >
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-[#0052cc] uppercase tracking-widest bg-[#0052cc]/10 px-2.5 py-0.5">
                  {pos.department}
                </span>
                <h3 className="font-bold text-base sm:text-lg text-[#0f172a]">{pos.title}</h3>
                <div className="flex items-center gap-4 text-xs text-slate-500 font-medium pt-1">
                  <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-[#0052cc]" /> {pos.location}</span>
                  <span>•</span>
                  <span>{pos.type}</span>
                </div>
              </div>
              <CTAButton href="/contact" size="sm" variant="primary">
                Apply for Position
              </CTAButton>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
