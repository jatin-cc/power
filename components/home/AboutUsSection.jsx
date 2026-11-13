'use client';

import Link from 'next/link';
import SectionHeading from '@/components/SectionHeading';
import CTAButton from '@/components/CTAButton';
import { ArrowRight, CheckCircle2, ShieldCheck, Award, Building2, Factory, Sparkles } from 'lucide-react';

export default function AboutUsSection() {
  return (
    <section id="about" className="py-24 bg-white border-b border-slate-200 relative overflow-hidden">
      {/* Blueprint Grid Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Story & Content from About Us Document */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80">
              <span className="w-2 h-2 rounded-full bg-[#063772] animate-pulse" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#063772]">
                ABOUT G SONS POWER TRANSFORMERS
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0f172a] leading-[1.15]">
              Two Decades of Electrical Heritage. Tailored For Mission-Critical Grids.
            </h2>

            <div className="space-y-4 text-base text-slate-600 leading-relaxed font-normal">
              <p>
                <strong className="text-[#0f172a] font-semibold">G Sons Power Transformers Pvt. Ltd.</strong> is a women-led manufacturer of transformers and compact substations based in Ahmedabad, Gujarat. A DPIIT-recognised startup and ZED Gold-certified enterprise, we combine dedicated manufacturing capabilities with more than two decades of electrical engineering and turnkey project experience across the G Sons Power Group.
              </p>
              <p>
                We engineer each unit around the application, site constraints, and customer’s technical single-line diagrams (SLD)—powering heavy industrial plants, public infrastructure, institutions, commercial complexes, and renewable energy farms.
              </p>
            </div>

            {/* Representative Client Track Record Pills */}
            <div className="pt-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-3">
                Proven Group Project Experience Includes:
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  'Hindustan Aeronautics Limited',
                  'Banas Dairy',
                  'GMM Pfaudler',
                  'Micron Semiconductors',
                  'Senapathy Whiteley',
                  'Sobha Limited'
                ].map((client) => (
                  <span
                    key={client}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-800"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    {client}
                  </span>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <CTAButton href="/about" size="md" variant="primary">
                Learn More About Us
              </CTAButton>
              <Link
                href="/infrastructure"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#063772] hover:text-[#23790a] hover:underline uppercase tracking-wider"
              >
                Inspect Factory Infrastructure <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Creative Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl bg-gradient-to-br from-slate-900 via-[#063772] to-[#042956] text-white p-8 sm:p-10 shadow-2xl overflow-hidden border border-slate-700">
              {/* Subtle Ambient Rings */}
              <div className="absolute -top-16 -right-16 w-64 h-64 border border-white/10 rounded-full pointer-events-none" />
              <div className="absolute -bottom-16 -left-16 w-64 h-64 border border-white/10 rounded-full pointer-events-none" />

              <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-emerald-400 mb-3">
                KEY CREDENTIALS
              </span>
              <h3 className="text-2xl font-bold text-white mb-6 leading-snug">
                Certified Manufacturing &amp; Quality Excellence
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/15">
                  <ShieldCheck className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-white">Women-Led &amp; DPIIT Recognized</h4>
                    <p className="text-xs text-slate-300 font-normal mt-0.5">
                      Empowering inclusive industrial growth as a registered next-gen startup.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/15">
                  <Award className="w-6 h-6 text-yellow-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-white">ZED Gold Enterprise</h4>
                    <p className="text-xs text-slate-300 font-normal mt-0.5">
                      Zero Defect, Zero Effect certified manufacturing process and controls.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/15">
                  <Factory className="w-6 h-6 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-white">BIS Licensed Manufacturer</h4>
                    <p className="text-xs text-slate-300 font-normal mt-0.5">
                      Compliant with IS 1180 &amp; IS 2026 standards with full in-house testing.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/15 flex items-center justify-between text-xs text-slate-300 font-medium">
                <span>Ahmedabad, Gujarat, India</span>
                <span className="text-emerald-400 font-bold">20+ Years Heritage</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
