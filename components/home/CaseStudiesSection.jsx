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
          {caseStudies.map((cs, idx) => {
            const isGreen = idx % 2 === 1;
            return (
              <Link
                key={cs.id}
                href={`/case-studies/${cs.slug}`}
                className={`group bg-white border border-slate-200 p-6 flex flex-col justify-between transition-all duration-300 shadow-sm ${
                  isGreen ? 'hover:border-[#23790a]' : 'hover:border-[#063772]'
                }`}
                data-cursor="OPEN"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 ${
                        isGreen
                          ? 'text-[#23790a] bg-[#23790a]/10'
                          : 'text-[#063772] bg-[#063772]/10'
                      }`}
                    >
                      {cs.industry}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">{cs.year}</span>
                  </div>

                  <h3
                    className={`text-lg font-bold text-[#0f172a] transition-colors leading-snug ${
                      isGreen ? 'group-hover:text-[#23790a]' : 'group-hover:text-[#063772]'
                    }`}
                  >
                    {cs.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed font-normal">
                    {cs.summary}
                  </p>
                </div>

                <div
                  className={`pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold uppercase tracking-wider transition-colors ${
                    isGreen ? 'text-[#23790a]' : 'text-[#063772]'
                  }`}
                >
                  <span>Read Case Study</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
