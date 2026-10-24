import { notFound } from 'next/navigation';
import { products, getProductBySlug } from '@/data/products';
import SectionHeading from '@/components/SectionHeading';
import CTAButton from '@/components/CTAButton';
import {
  CheckCircle2,
  ShieldCheck,
  Zap,
  ArrowRight,
  ChevronRight,
  FileText,
  Mail,
  Building2,
  Cpu,
  Layers,
  Sparkles
} from 'lucide-react';
import Link from 'next/link';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) return { title: 'Product Not Found | G Sons Power Transformers' };

  return {
    title: `${product.name} | G Sons Power Transformers Pvt. Ltd.`,
    description: product.shortDesc,
  };
}

export default async function ProductDetailPage({ params }) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  // Related products from same category
  const relatedProducts = products
    .filter((p) => p.categorySlug === product.categorySlug && p.id !== product.id)
    .slice(0, 3);

  return (
    <main className="pt-28 pb-24 bg-[#fafbfc] text-[#0f172a]">
      {/* Background Tech Pattern */}
      <div className="fixed inset-0 bg-grid-pattern opacity-30 pointer-events-none z-0" />

      <div className="relative z-10">
        {/* Breadcrumb Navigation */}
        <div className="max-w-7xl mx-auto px-6 py-4 border-b border-slate-200/80 mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
            <Link href="/" className="hover:text-[#063772] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
            <Link href="/products" className="hover:text-[#063772] transition-colors">
              Products
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
            <span className="text-[#063772] uppercase tracking-wider font-bold">
              {product.category}
            </span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
            <span className="text-slate-800 line-clamp-1">{product.name}</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#063772] text-xs font-bold uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-[#063772] animate-pulse" />
                <span>{product.category}</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0f172a] leading-tight">
                {product.name}
              </h1>

              <div className="inline-flex items-center gap-2 bg-[#063772]/10 text-[#063772] px-3.5 py-1.5 rounded-lg font-bold text-xs uppercase tracking-wider border border-[#063772]/20">
                <Zap className="w-4 h-4 text-[#063772]" />
                <span>RATING / CAPACITY: {product.capacity}</span>
              </div>

              {/* Exact Description Paragraphs from Document */}
              <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                {product.description.map((paragraph, pIdx) => (
                  <p key={pIdx}>{paragraph}</p>
                ))}
              </div>

              {/* CTA Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <CTAButton href="/contact" size="lg" variant="primary">
                  Request Technical Quote
                </CTAButton>
                <CTAButton href="mailto:sales@gsonspower.com" size="lg" variant="outline">
                  Consult Application Engineer
                </CTAButton>
              </div>
            </div>

            {/* Right Product Image Showcase */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-xl overflow-hidden relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full aspect-[4/3] object-cover rounded-xl"
                />
                <div className="absolute top-6 left-6 bg-[#0f172a]/90 backdrop-blur-xs text-white text-[10px] font-bold px-3 py-1 rounded-md uppercase tracking-wider">
                  {product.category}
                </div>
                <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-xs text-[#063772] text-[10px] font-bold px-3 py-1 rounded-md shadow-md">
                  G Sons Power Transformers
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specifications Matrix (Exact Document Table) */}
        <section className="bg-white border-y border-slate-200 py-16 mb-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#063772] block mb-2">
                ENGINEERING MATRIX
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight">
                Technical Specifications & Design Parameters
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 font-normal">
                Configured and engineered strictly in accordance with approved project single-line diagrams, load profiles, and national specifications.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-50 border-b border-slate-200 text-[#0f172a] uppercase font-bold tracking-wider">
                  <tr>
                    <th className="p-4 sm:p-5 w-2/5 border-r border-slate-200">
                      Parameter
                    </th>
                    <th className="p-4 sm:p-5 w-3/5">
                      Specification
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700">
                  {product.specifications.map((item, idx) => (
                    <tr
                      key={idx}
                      className={idx % 2 === 0 ? 'bg-white hover:bg-blue-50/40 transition-colors' : 'bg-slate-50/50 hover:bg-blue-50/40 transition-colors'}
                    >
                      <td className="p-4 sm:p-5 font-bold text-[#0f172a] border-r border-slate-200">
                        {item.parameter}
                      </td>
                      <td className="p-4 sm:p-5 leading-relaxed">
                        {item.specification}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Target Applications & Deployment */}
        <section className="max-w-7xl mx-auto px-6 mb-16">
          <div className="p-8 sm:p-10 rounded-2xl bg-white border border-slate-200 shadow-xs">
            <div className="max-w-3xl mb-6">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#23790a] block mb-1">
                FIELD DEPLOYMENTS
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0f172a]">
                Recommended Applications & Installations
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {product.applications.map((app, aIdx) => (
                <div
                  key={aIdx}
                  className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3 hover:border-[#063772] transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#23790a] shrink-0 mt-0.5" />
                  <span className="text-xs font-semibold text-slate-800 leading-snug">
                    {app}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Products within Category */}
        {relatedProducts.length > 0 && (
          <section className="max-w-7xl mx-auto px-6 mb-16">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#063772] block">
                  EXPLORE MORE
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0f172a]">
                  Related {product.category} Solutions
                </h3>
              </div>
              <Link
                href="/products"
                className="text-xs font-bold text-[#063772] hover:underline flex items-center gap-1"
              >
                View Full Catalog <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/products/${rel.slug}`}
                  className="group bg-white p-6 rounded-2xl border border-slate-200/90 shadow-xs hover:border-[#063772] hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <span className="text-[10px] font-bold text-[#063772] uppercase tracking-wider bg-blue-50 px-2 py-0.5 rounded">
                      {rel.category}
                    </span>
                    <h4 className="font-bold text-base text-[#0f172a] group-hover:text-[#063772] transition-colors leading-snug">
                      {rel.name}
                    </h4>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {rel.shortDesc}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#063772]">
                    <span>View Specifications</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Bottom RFQ Consultation Banner */}
        <section className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-br from-[#031f42] via-[#063772] to-[#0a2540] text-white p-8 sm:p-12 rounded-2xl shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                PROPOSAL & RFQ CONSULTATION
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold leading-tight">
                Submit Your Project Single-Line Diagram & Technical Scope
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                Our design engineering team will review your transformer or switchgear requirement, suggest optimal voltage tapping and impedance sizing, and prepare a detailed commercial proposal.
              </p>
            </div>
            <CTAButton href="/contact" size="lg" variant="primary" className="shrink-0 bg-emerald-500 hover:bg-emerald-400 text-[#031f42] font-bold border-none">
              Submit Technical RFQ
            </CTAButton>
          </div>
        </section>
      </div>
    </main>
  );
}
