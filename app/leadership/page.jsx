import SectionHeading from '@/components/SectionHeading';
import { leadershipTeam } from '@/data/team';

export const metadata = {
  title: 'Executive Leadership | Vortex Power Systems',
  description: 'Meet our executive leadership team driving high-voltage transformer technology and global power grid reliability.',
};

export default function LeadershipPage() {
  return (
    <main className="pt-32 pb-24 bg-white text-[#0f172a]">
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#0052cc]">
            EXECUTIVE GOVERNANCE
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0f172a]">
            Executive Leadership Team
          </h1>
          <p className="text-base text-slate-600 leading-relaxed font-normal">
            Guided by veteran high-voltage electrical doctorate researchers, grid utility operations directors, and dielectric materials scientists.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {leadershipTeam.map((m) => (
          <div key={m.name} className="bg-slate-50 border border-slate-200 overflow-hidden shadow-sm">
            <div className="aspect-[4/5] bg-slate-200 overflow-hidden">
              <img src={m.image} alt={m.name} className="w-full h-full object-cover" />
            </div>
            <div className="p-6 space-y-2">
              <h3 className="font-extrabold text-lg text-[#0f172a]">{m.name}</h3>
              <span className="text-xs font-bold text-[#0052cc] uppercase block tracking-wider">
                {m.role}
              </span>
              <p className="text-xs text-slate-600 leading-relaxed pt-2 border-t border-slate-200">
                {m.bio}
              </p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
