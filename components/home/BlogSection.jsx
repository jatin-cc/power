'use client';

import Link from 'next/link';
import { blogArticles } from '@/data/blog';
import { Calendar, Clock, ArrowUpRight } from 'lucide-react';

export default function BlogSection() {
  return (
    <section id="blog" className="py-20 bg-white border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading matching PDF Page 5 */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f172a] tracking-tight">
            What&apos;s Trending
          </h2>
          <p className="mt-2 text-sm text-slate-500 font-normal">
            Latest insights, technical whitepapers, and engineering updates from G Sons Power
          </p>
        </div>

        {/* 3 Blogs in 1 Line matching PDF Page 5 Reference */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {blogArticles.slice(0, 3).map((art) => (
            <div
              key={art.id}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-[#063772] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Blog Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />
                </div>

                {/* Metadata: Date & Reading Time */}
                <div className="p-6 pb-2 space-y-3">
                  <div className="flex items-center gap-4 text-[11px] text-slate-400 font-medium">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{art.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{art.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-[#0f172a] group-hover:text-[#063772] transition-colors leading-snug line-clamp-2">
                    {art.title}
                  </h3>
                </div>
              </div>

              {/* READ MORE ↗ Button */}
              <div className="p-6 pt-2">
                <Link
                  href={`/blog/${art.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0f172a] hover:text-[#063772] uppercase tracking-wider group/link"
                >
                  <span>READ MORE</span>
                  <ArrowUpRight className="w-4 h-4 text-[#e84e36] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Centered View More Button matching PDF Page 5 */}
        <div className="text-center pt-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#e84e36] hover:bg-[#d43d26] text-white text-xs sm:text-sm font-bold tracking-wide shadow-md transition-all duration-300 group cursor-pointer"
          >
            <span>View More</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
