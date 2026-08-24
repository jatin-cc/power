import { notFound } from 'next/navigation';
import { caseStudies } from '@/data/caseStudies';
import CTAButton from '@/components/CTAButton';
import Link from 'next/link';
import { CheckCircle2, ShieldCheck, ArrowLeft } from 'lucide-react';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) return { title: 'Case Study Not Found' };

  return {
    title: `${cs.title} | Vortex Case Studies`,
    description: cs.summary,
  };
}

export default async function CaseStudyDetailPage({ params }) {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);

  if (!cs) {
    notFound();
  }

  return (
    <main className="pt-32 pb-24 bg-white text-[#0f172a]">
      <div className="max-w-4xl mx-auto px-6 mb-8">
        <Link
          href="/case-studies"
          className="inline-flex items-center gap-2 text-xs font-bold text-[#0052cc] uppercase tracking-wider hover:gap-3 transition-all"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Case Studies
        </Link>
      </div>

      <article className="max-w-4xl mx-auto px-6 space-y-12">
        <div className="space-y-4 border-b border-slate-200 pb-8">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-[#0052cc] uppercase tracking-widest bg-[#0052cc]/10 px-3 py-1">
              {cs.industry}
            </span>
            <span className="text-xs font-semibold text-slate-500">{cs.year}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0f172a] leading-tight">
            {cs.title}
          </h1>

          <div className="pt-2 text-xs text-slate-500 font-medium">
            <span>Client: <strong className="text-[#0f172a]">{cs.client}</strong></span> • <span>Location: <strong className="text-[#0f172a]">{cs.location}</strong></span>
          </div>
        </div>

        <div className="border border-slate-200 bg-slate-100 p-2 shadow-sm">
          <img src={cs.image} alt={cs.title} className="w-full aspect-[16/9] object-cover" />
        </div>

        {/* Project Breakdown Cards */}
        <div className="space-y-8">
          <div className="p-8 bg-slate-50 border border-slate-200 space-y-2">
            <span className="text-[10px] font-bold text-[#0052cc] uppercase tracking-widest block">
              01 / PROJECT CHALLENGE
            </span>
            <h3 className="text-xl font-bold text-[#0f172a]">Operating Environment Constraints</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              {cs.challenge}
            </p>
          </div>

          <div className="p-8 bg-slate-50 border border-slate-200 space-y-2">
            <span className="text-[10px] font-bold text-[#0052cc] uppercase tracking-widest block">
              02 / VORTEX ENGINEERING SOLUTION
            </span>
            <h3 className="text-xl font-bold text-[#0f172a]">Bespoke Electromagnetic Design</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              {cs.solution}
            </p>
          </div>

          <div className="p-8 bg-emerald-50 border border-emerald-200 space-y-2">
            <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-widest block">
              03 / MEASURABLE OUTCOME
            </span>
            <h3 className="text-xl font-bold text-emerald-950">Verified Substation Performance</h3>
            <p className="text-xs sm:text-sm text-emerald-900 leading-relaxed font-semibold">
              {cs.outcome}
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex justify-between items-center">
          <CTAButton href="/contact" size="md" variant="primary">
            Request Similar Project Proposal
          </CTAButton>
        </div>
      </article>
    </main>
  );
}
