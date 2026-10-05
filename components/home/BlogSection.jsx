'use client';

import SectionHeading from '@/components/SectionHeading';
import CTAButton from '@/components/CTAButton';
import { blogArticles } from '@/data/blog';
import Link from 'next/link';
import { ArrowUpRight, Clock, BookOpen } from 'lucide-react';

export default function BlogSection() {
  return (
    <section id="blog" className="py-24 bg-slate-50/70 border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <SectionHeading
            eyebrow="TECHNICAL KNOWLEDGE HUB"
            title="Blogs & Engineering Insights"
            subtitle="Authoritative technical guides, energy loss optimization research, and transformer selection whitepapers authored by power system specialists."
            className="mb-0 max-w-3xl"
          />
          <CTAButton href="/blog" size="md" variant="outline">
            Explore All Insights
          </CTAButton>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogArticles.map((art, idx) => {
            const isGreen = idx === 1;
            const badgeBg = isGreen ? 'bg-[#23790a]/10 text-[#23790a]' : 'bg-[#063772]/10 text-[#063772]';
            return (
              <Link
                key={art.id}
                href={`/blog/${art.slug}`}
                className="group bg-white border border-slate-200 rounded-sm p-7 flex flex-col justify-between hover:border-[#063772] hover:shadow-xl transition-all duration-300 shadow-2xs"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                    <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-xs ${badgeBg}`}>
                      {art.category}
                    </span>
                    <div className="flex items-center gap-1.5 text-slate-500">
                      <Clock className="w-3.5 h-3.5 text-[#23790a]" />
                      <span>{art.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[#0f172a] group-hover:text-[#063772] transition-colors leading-snug">
                    {art.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed font-normal">
                    {art.excerpt}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#063772] uppercase tracking-wider">
                  <span>Read Technical Paper</span>
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
