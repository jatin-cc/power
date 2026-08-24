'use client';

import SectionHeading from '@/components/SectionHeading';
import CTAButton from '@/components/CTAButton';
import { caseStudies } from '@/data/caseStudies';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function CaseStudiesSection() {
  return (
    <section className="py-24 bg-slate-50/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="ENGINEERING CASE STUDIES"
            title="Proven Turnkey Substation Success Stories."
            subtitle="Explore how Vortex engineered, tested, and commissioned high-voltage power assets for major utilities and industrial plants."
            className="mb-0"
          />
          <CTAButton href="/case-studies" size="md" variant="outline">
            View All Projects
          </CTAButton>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((cs) => (
            <Link
              key={cs.id}
              href={`/case-studies/${cs.slug}`}
              className="group bg-white border border-slate-200 p-6 flex flex-col justify-between hover:border-[#0052cc] transition-all duration-300 shadow-sm"
              data-cursor="OPEN"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-[#0052cc] uppercase tracking-widest bg-[#0052cc]/10 px-2.5 py-0.5">
                    {cs.industry}
                  </span>
                  <span className="text-xs font-semibold text-slate-500">{cs.year}</span>
                </div>

                <h3 className="text-lg font-bold text-[#0f172a] group-hover:text-[#0052cc] transition-colors leading-snug">
                  {cs.title}
                </h3>

                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed font-normal">
                  {cs.summary}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0052cc] uppercase tracking-wider">
                <span>Read Case Study</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
