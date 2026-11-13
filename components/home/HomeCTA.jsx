'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function HomeCTA() {
  return (
    <section className="py-20 bg-white border-y border-slate-200 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10 space-y-6">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f172a] tracking-tight">
          Merging Sustainability With High Voltage Expertise
        </h2>

        <p className="text-base sm:text-lg text-slate-500 font-normal">
          Step Into the Future of Sustainable Power
        </p>

        <div className="pt-2 flex justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#e84e36] hover:bg-[#d43d26] text-white font-bold text-sm tracking-wide shadow-md hover:shadow-lg transition-all duration-300 group cursor-pointer"
          >
            <span>Let&apos;s Connect</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
