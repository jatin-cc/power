'use client';

import SectionHeading from '@/components/SectionHeading';
import CTAButton from '@/components/CTAButton';
import { blogArticles } from '@/data/blog';
import Link from 'next/link';
import { ArrowUpRight, Clock } from 'lucide-react';

export default function BlogSection() {
  return (
    <section className="py-24 bg-slate-50/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="TECHNICAL KNOWLEDGE HUB"
            title="Insights & Electrical Engineering Papers."
            subtitle="In-depth technical guides authored by Vortex principal engineers, chemists, and power system experts."
            className="mb-0"
          />
          <CTAButton href="/blog" size="md" variant="outline">
            Explore All Insights
          </CTAButton>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogArticles.map((art) => (
            <Link
              key={art.id}
              href={`/blog/${art.slug}`}
              className="group bg-white border border-slate-200 p-6 flex flex-col justify-between hover:border-[#0052cc] transition-all duration-300 shadow-sm"
              data-cursor="OPEN"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                  <span className="text-[10px] font-bold text-[#0052cc] uppercase tracking-widest bg-[#0052cc]/10 px-2 py-0.5">
                    {art.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#0052cc]" />
                    <span>{art.readTime}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-[#0f172a] group-hover:text-[#0052cc] transition-colors leading-snug">
                  {art.title}
                </h3>

                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed font-normal">
                  {art.excerpt}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0052cc] uppercase tracking-wider">
                <span>Read Technical Article</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
