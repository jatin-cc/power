import { notFound } from 'next/navigation';
import { blogArticles } from '@/data/blog';
import CTAButton from '@/components/CTAButton';
import Link from 'next/link';
import { Clock, User, Calendar, ArrowLeft } from 'lucide-react';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = blogArticles.find((a) => a.slug === slug);
  if (!article) return { title: 'Article Not Found' };

  return {
    title: `${article.title} | Vortex Technical Insights`,
    description: article.excerpt,
  };
}

export default async function BlogArticlePage({ params }) {
  const { slug } = await params;
  const article = blogArticles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="pt-32 pb-24 bg-white text-[#0f172a]">
      {/* Back Link */}
      <div className="max-w-4xl mx-auto px-6 mb-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-bold text-[#0052cc] uppercase tracking-wider hover:gap-3 transition-all"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Knowledge Hub
        </Link>
      </div>

      {/* Header */}
      <article className="max-w-4xl mx-auto px-6">
        <div className="space-y-4 border-b border-slate-200 pb-8 mb-8">
          <span className="text-xs font-bold text-[#0052cc] uppercase tracking-widest bg-[#0052cc]/10 px-3 py-1">
            {article.category}
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0f172a] leading-tight">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-xs text-slate-500 font-medium pt-2">
            <div className="flex items-center gap-1.5">
              <User className="w-4 h-4 text-[#0052cc]" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-[#0052cc]" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#0052cc]" />
              <span>{article.readTime}</span>
            </div>
          </div>
        </div>

        {/* Featured Visual */}
        <div className="border border-slate-200 bg-slate-100 p-2 mb-10 shadow-sm">
          <img src={article.image} alt={article.title} className="w-full aspect-[16/9] object-cover" />
        </div>

        {/* Article Body Content */}
        <div className="prose prose-slate max-w-none text-slate-700 text-sm sm:text-base leading-relaxed space-y-6">
          <div dangerouslySetInnerHTML={{ __html: article.content.replace(/\n/g, '<br/>') }} />
        </div>

        {/* Author Footer */}
        <div className="mt-16 p-6 bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-[10px] font-bold text-[#0052cc] uppercase tracking-widest block mb-1">
              AUTHOR PROFILE
            </span>
            <h4 className="font-bold text-base text-[#0f172a]">{article.author}</h4>
            <p className="text-xs text-slate-500 font-medium">Vortex High Voltage Engineering Division</p>
          </div>
          <CTAButton href="/contact" size="sm" variant="primary">
            Ask Author a Technical Question
          </CTAButton>
        </div>
      </article>
    </main>
  );
}
