'use client';

import Link from 'next/link';
import { ArrowRight, PhoneCall, FileText, CheckCircle2, ShieldAlert, Sparkles } from 'lucide-react';
import CTAButton from '@/components/CTAButton';

export default function HomeCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#031f42] via-[#063772] to-[#144905] text-white relative overflow-hidden border-b border-slate-200">
      {/* Decorative Grid Overlay & Ambient Glow */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#23790a]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 text-xs font-semibold uppercase tracking-widest text-emerald-200">
            <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
            DIRECT OEM TRANSFORMER MANUFACTURING
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Power Your Next Infrastructure Project With Certified Engineering
          </h2>

          <p className="text-sm sm:text-base text-slate-200 font-normal leading-relaxed max-w-2xl mx-auto">
            Need tailored Cast Resin Dry Type transformers, Oil-Filled units up to 5 MVA, or an integrated Compact Substation (CSS)? Consult directly with G Sons Power design engineers today.
          </p>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white text-[#063772] hover:bg-slate-100 font-bold text-sm tracking-wide rounded-sm shadow-xl transition-all duration-200 group"
            >
              <span>Request Engineering Quote</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="tel:+918005557693"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold text-sm tracking-wide rounded-sm transition-all duration-200"
            >
              <PhoneCall className="w-4 h-4 text-sky-300" />
              <span>Call Technical Desk (+91 800 555-POWER)</span>
            </Link>
          </div>

          {/* Trust Guarantees */}
          <div className="pt-8 mt-8 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-200">
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Custom Quotation in 24 Hours</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Direct Manufacturer Pricing</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>CPRI / ERDA Type Tested Designs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
