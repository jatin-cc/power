import { blogArticles } from '@/data/blog';
import Link from 'next/link';
import { ArrowUpRight, Clock, BookOpen } from 'lucide-react';
import CTAButton from '@/components/CTAButton';

export const metadata = {
  title: 'Engineering Blog & Technical Insights | Vortex Power Systems',
  description: 'In-depth electrical engineering papers, Dissolved Gas Analysis guides, ester fluid chemistry, and 400 kV short-circuit design insights.',
};

export default function BlogPage() {
  return (
    <main className="pt-32 pb-24 bg-white text-[#0f172a]">
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#063772]">
            KNOWLEDGE HUB & PAPERS
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0f172a]">
            Electrical Engineering & Technical Insights
          </h1>
          <p className="text-base text-slate-600 leading-relaxed font-normal">
            Written by Vortex senior electrical engineers, chemists, and power system researchers for utility operators and substation managers.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogArticles.map((art, idx) => {
          const isGreen = idx === 1;
          const badgeBg = isGreen ? 'bg-[#23790a]/10 text-[#23790a]' : 'bg-[#063772]/10 text-[#063772]';
          return (
            <Link
              key={art.id}
              href={`/blog/${art.slug}`}
              className="group bg-slate-50 border border-slate-200 p-8 flex flex-col justify-between hover:border-[#063772] transition-all shadow-sm"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                  <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 ${badgeBg}`}>
                    {art.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#23790a]" />
                    <span>{art.readTime}</span>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-[#0f172a] group-hover:text-[#063772] transition-colors leading-snug">
                  {art.title}
                </h2>

                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  {art.excerpt}
                </p>

                <div className="pt-3 border-t border-slate-200 text-xs text-slate-500 font-medium">
                  <span>By {art.author}</span>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200 flex items-center justify-between text-xs font-bold text-[#063772] uppercase tracking-wider">
                <span>Read Full Article</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </Link>
          );
        })}
      </section>
    </main>
  );
}
