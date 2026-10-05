import { notFound } from 'next/navigation';
import { products } from '@/data/products';
import SectionHeading from '@/components/SectionHeading';
import CTAButton from '@/components/CTAButton';
import { CheckCircle2, ShieldCheck, Zap, ArrowRight, Download } from 'lucide-react';
import Link from 'next/link';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return { title: 'Product Not Found' };

  return {
    title: `${product.name} | Vortex Power Systems`,
    description: product.shortDesc,
  };
}

export default async function ProductDetailPage({ params }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="pt-32 pb-24 bg-white text-[#0f172a]">
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <Link href="/products-services" className="text-xs font-bold text-[#063772] uppercase hover:underline">
                PRODUCTS
              </Link>
              <span className="text-xs text-slate-300">/</span>
              <span className="text-xs font-semibold text-slate-500 uppercase">{product.category}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0f172a] leading-tight">
              {product.name}
            </h1>

            <div className="inline-flex items-center gap-2 bg-[#23790a]/10 text-[#23790a] px-3.5 py-1.5 font-bold text-xs uppercase tracking-wider">
              <Zap className="w-4 h-4" />
              <span>CAPACITY RATING: {product.capacity}</span>
            </div>

            <p className="text-base text-slate-600 leading-relaxed font-normal">
              {product.fullDesc}
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <CTAButton href="/contact" size="lg" variant="primary">
                Request Engineering Spec Sheet
              </CTAButton>
              <CTAButton href="/contact" size="lg" variant="outline">
                Consult Application Specialist
              </CTAButton>
            </div>
          </div>

          <div className="lg:col-span-5 border border-slate-200 bg-slate-100 p-2 shadow-lg overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full aspect-[4/3] object-cover" />
          </div>
        </div>
      </section>

      {/* Technical Specifications Section */}
      <section className="bg-slate-50 border-y border-slate-200 py-20 mb-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            eyebrow="TECHNICAL MATRIX"
            title="Standard Technical Specifications."
            subtitle="Engineered strictly to IEC 60076, IEEE C57, and IS 1180 international standard mandates."
          />

          <div className="bg-white border border-slate-200 overflow-hidden mt-8 shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-100 border-b border-slate-200 text-[#0f172a] uppercase font-bold tracking-wider">
                <tr>
                  <th className="p-4 sm:p-5 w-1/2">SPECIFICATION PARAMETER</th>
                  <th className="p-4 sm:p-5 w-1/2">ENGINEERING VALUE</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                {product.specs.map((s, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 sm:p-5 font-bold text-[#0f172a]">{s.label}</td>
                    <td className="p-4 sm:p-5">{s.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Key Features & Applications */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Features */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#0f172a] border-b border-slate-200 pb-3">
              Design & Construction Highlights
            </h3>
            <div className="space-y-3">
              {product.features.map((feat, fIdx) => (
                <div key={fIdx} className="flex items-start gap-3 p-4 bg-slate-50 border border-slate-200 text-xs sm:text-sm font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#23790a] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Applications */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#0f172a] border-b border-slate-200 pb-3">
              Target Substation & Industry Deployments
            </h3>
            <div className="space-y-3">
              {product.applications.map((app, aIdx) => (
                <div key={aIdx} className="flex items-start gap-3 p-4 bg-slate-50 border border-slate-200 text-xs sm:text-sm font-medium text-slate-700">
                  <ShieldCheck className="w-4 h-4 text-[#063772] shrink-0 mt-0.5" />
                  <span>{app}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-r from-[#031f42] via-[#063772] to-[#144905] text-white p-10 sm:p-14 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="max-w-xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-white/80">
              CUSTOM CAPABILITY
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold">
              Need custom voltage ratios, dual secondary windings, or ester fluid options?
            </h3>
            <p className="text-xs sm:text-sm text-white/90">
              Our 3D finite element design team can tailor voltage taps, impedance levels, and tank dimensions to match your sub-station layout.
            </p>
          </div>
          <CTAButton href="/contact" size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#063772] shrink-0">
            Submit Customized RFQ
          </CTAButton>
        </div>
      </section>
    </main>
  );
}
