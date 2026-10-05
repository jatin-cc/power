import SectionHeading from '@/components/SectionHeading';
import CTAButton from '@/components/CTAButton';
import { Calendar } from 'lucide-react';

export const metadata = {
  title: 'Corporate News & Announcements | Vortex Power Systems',
  description: 'Official corporate announcements, technology disclosures, and global power grid partnerships.',
};

const newsList = [
  {
    date: "August 20, 2026",
    category: "TECHNOLOGY ANNOUNCEMENT",
    title: "Vortex Unveils Next-Gen Synthetic Ester Transformer Product Line",
    excerpt: "New K-class fire safety rating transformer line eliminates traditional deluge sprinkler costs while achieving 100% natural biodegradability."
  },
  {
    date: "July 14, 2026",
    category: "PLANT CAPACITY EXPANSION",
    title: "Plant 01 Inaugurates 250-Ton Overhead Crane Clearance Suite",
    excerpt: "Expanded manufacturing bay increases annual production capacity to 15,000 MVA of ultra-high-voltage power transformers."
  },
  {
    date: "June 02, 2026",
    category: "ISO ACCREDITATION",
    title: "UHV Faraday Laboratory Achieves ISO/IEC 17025 Re-Certification",
    excerpt: "Test station bay passes international audits for lightning impulse testing up to 2,400 kV and partial discharge noise suppression below 2 pC."
  }
];

export default function NewsPage() {
  return (
    <main className="pt-32 pb-24 bg-white text-[#0f172a]">
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#063772]">
            PRESS & MEDIA
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0f172a]">
            Corporate News & Press Releases
          </h1>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 space-y-8">
        {newsList.map((item, idx) => {
          const isGreen = idx === 1;
          const badgeBg = isGreen ? 'bg-[#23790a]/10 text-[#23790a]' : 'bg-[#063772]/10 text-[#063772]';
          return (
            <div key={idx} className="p-8 bg-slate-50 border border-slate-200 space-y-3 shadow-sm">
              <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
                <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 ${badgeBg}`}>
                  {item.category}
                </span>
                <div className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#23790a]" />
                  <span>{item.date}</span>
                </div>
              </div>
              <h2 className="text-xl font-bold text-[#0f172a]">{item.title}</h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {item.excerpt}
              </p>
            </div>
          );
        })}
      </section>
    </main>
  );
}
