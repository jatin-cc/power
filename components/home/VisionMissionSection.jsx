'use client';

import SectionHeading from '@/components/SectionHeading';
import { Target, Compass, Award, ShieldCheck, Leaf, Cpu } from 'lucide-react';

export default function VisionMissionSection() {
  return (
    <section id="vision-mission" className="py-24 bg-white border-b border-slate-200 relative overflow-hidden">
      {/* Decorative Blueprint Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#063772] animate-pulse" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#063772]">
              OUR VISION &amp; MISSION
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0f172a] leading-tight mb-4">
            Engineering Tomorrow’s Sustainable Power Grid
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Rooted in over two decades of electrical power experience, G Sons Power Transformers is guided by a commitment to zero-defect excellence, safety compliance, and energy-efficient infrastructure.
          </p>
        </div>

        {/* Vision & Mission Primary Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Card 1: Our Vision */}
          <div className="group relative bg-gradient-to-br from-slate-50 via-white to-blue-50/30 border border-slate-200 p-8 sm:p-10 rounded-2xl shadow-xs hover:border-[#063772] hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 rounded-xl bg-[#063772] text-white flex items-center justify-center mb-6 shadow-md shadow-[#063772]/20 group-hover:scale-110 transition-transform">
              <Compass className="w-7 h-7" />
            </div>

            <span className="text-xs font-bold tracking-widest uppercase text-[#063772] block mb-2">
              FORWARD DIRECTION
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] mb-4">
              Our Vision
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-6">
              To be a globally respected benchmark in power distribution, engineering cutting-edge, energy-efficient transformers and smart substations that accelerate the transition to reliable and sustainable industrial growth.
            </p>

            <ul className="space-y-3 pt-6 border-t border-slate-200 text-xs sm:text-sm font-medium text-slate-700">
              <li className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#063772] shrink-0" />
                <span>Pioneering low-loss eco-friendly transformer design</span>
              </li>
              <li className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#063772] shrink-0" />
                <span>Building resilient electrical backbone for smart cities &amp; utilities</span>
              </li>
            </ul>
          </div>

          {/* Card 2: Our Mission */}
          <div className="group relative bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 border border-slate-200 p-8 sm:p-10 rounded-2xl shadow-xs hover:border-[#23790a] hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 rounded-xl bg-[#23790a] text-white flex items-center justify-center mb-6 shadow-md shadow-[#23790a]/20 group-hover:scale-110 transition-transform">
              <Target className="w-7 h-7" />
            </div>

            <span className="text-xs font-bold tracking-widest uppercase text-[#23790a] block mb-2">
              PURPOSE &amp; COMMITMENT
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] mb-4">
              Our Mission
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-6">
              To manufacture certified Oil-Filled, Cast Resin Dry Type transformers, and Compact Substations up to 5 MVA with Zero-Defect quality, meeting strict BIS and international standards while prioritizing client reliability and safety.
            </p>

            <ul className="space-y-3 pt-6 border-t border-slate-200 text-xs sm:text-sm font-medium text-slate-700">
              <li className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#23790a] shrink-0" />
                <span>Zero-Defect manufacturing with ZED Gold &amp; BIS compliance</span>
              </li>
              <li className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#23790a] shrink-0" />
                <span>Tailored electromagnetic engineering for maximum plant uptime</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
          <div className="p-6 rounded-xl bg-slate-50 border border-slate-200/90 flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-blue-100 text-[#063772] flex items-center justify-center shrink-0">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-[#0f172a] mb-1">Precision Engineering</h4>
              <p className="text-xs text-slate-500 leading-relaxed font-normal">
                CRGO step-lap cores, vacuum epoxy casting, and 100% routine dielectric tests in-house.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-slate-50 border border-slate-200/90 flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-emerald-100 text-[#23790a] flex items-center justify-center shrink-0">
              <Leaf className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-[#0f172a] mb-1">Sustainable Performance</h4>
              <p className="text-xs text-slate-500 leading-relaxed font-normal">
                Minimizing total lifecycle losses to meet BEE Star efficiency and ECBC carbon guidelines.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-slate-50 border border-slate-200/90 flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-[#0f172a] mb-1">Customer Dedication</h4>
              <p className="text-xs text-slate-500 leading-relaxed font-normal">
                Bespoke design consultations, fast turnarounds, and lifetime technical support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

