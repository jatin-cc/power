import { notFound } from 'next/navigation';
import { services } from '@/data/services';
import SectionHeading from '@/components/SectionHeading';
import CTAButton from '@/components/CTAButton';
import { CheckCircle2, ShieldCheck, ArrowRight, Zap, Wrench } from 'lucide-react';
import Link from 'next/link';

export async function generateStaticParams() {
  return services.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: 'Service Not Found' };

  return {
    title: `${service.name} | G Sons Power Transformers`,
    description: service.shortDesc,
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const processSteps = service.process || [];
  const benefitsList = service.benefits || [];
  const scopeList = service.scope || [];

  return (
    <main className="pt-32 pb-24 bg-white text-[#0f172a]">
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <Link href="/products-services" className="text-xs font-bold text-[#063772] uppercase hover:underline">
                SERVICES
              </Link>
              <span className="text-xs text-slate-300">/</span>
              <span className="text-xs font-semibold text-slate-500 uppercase">ENGINEERING &amp; FIELD</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0f172a] leading-tight">
              {service.name}
            </h1>

            <p className="text-base text-slate-600 leading-relaxed font-normal">
              {service.fullDesc || service.shortDesc}
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <CTAButton href="/contact" size="lg" variant="primary">
                Request Service Proposal
              </CTAButton>
              <CTAButton href="/contact" size="lg" variant="outline">
                Contact Technical Desk
              </CTAButton>
            </div>
          </div>

          <div className="lg:col-span-5 border border-slate-200 bg-slate-100 p-2 rounded-2xl shadow-lg overflow-hidden">
            <img
              src={service.image}
              alt={service.name}
              className="w-full aspect-[4/3] object-cover rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* Scope of Work */}
      {scopeList.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 mb-16">
          <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200">
            <h3 className="text-xl font-bold text-[#0f172a] mb-4 flex items-center gap-2">
              <Wrench className="w-5 h-5 text-[#063772]" />
              <span>Scope of Work &amp; Engineering Deliverables</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {scopeList.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#23790a] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Step-by-Step Execution Protocol */}
      {processSteps.length > 0 && (
        <section className="bg-slate-50 border-y border-slate-200 py-20 mb-20">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeading
              eyebrow="EXECUTION FRAMEWORK"
              title="Step-by-Step Service Protocol"
              subtitle="Standardized engineering steps guaranteeing non-destructive diagnostics, continuous compliance, and rapid turnaround."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {processSteps.map((step) => (
                <div key={step.step} className="bg-white border border-slate-200 rounded-xl p-6 space-y-2 shadow-xs">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-extrabold text-[#23790a] bg-[#23790a]/10 px-2.5 py-0.5 rounded-sm">
                      STEP {step.step}
                    </span>
                    <h4 className="font-bold text-base text-[#0f172a]">{step.title}</h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Value Deliverables & SLA Guarantees */}
      {benefitsList.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 mb-20">
          <h3 className="text-2xl font-bold text-[#0f172a] border-b border-slate-200 pb-4 mb-6">
            Key Service Deliverables &amp; SLA Guarantees
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefitsList.map((b, bIdx) => (
              <div
                key={bIdx}
                className="p-5 bg-slate-50 border border-slate-200 rounded-xl flex items-center gap-3 text-xs sm:text-sm font-semibold text-[#0f172a]"
              >
                <CheckCircle2 className="w-5 h-5 text-[#23790a] shrink-0" />
                <span>{b}</span>
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
