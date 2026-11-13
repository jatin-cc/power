'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function MeetOurTeam() {
  return (
    <section id="team" className="py-20 bg-slate-50 border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Dark Navy Blueprint Card matching PDF Page 3 Reference */}
        <div className="relative rounded-2xl bg-[#0a1e3f] text-white p-8 sm:p-12 lg:p-14 shadow-2xl overflow-hidden border border-blue-900/50">
          {/* Subtle concentric circles overlay as shown in reference */}
          <div className="absolute top-0 left-0 w-80 h-80 rounded-full border border-blue-500/10 pointer-events-none -translate-x-1/3 -translate-y-1/3" />
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full border border-blue-500/10 pointer-events-none -translate-x-1/4 -translate-y-1/4" />
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full border border-blue-500/10 pointer-events-none translate-x-1/4 translate-y-1/4" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            {/* Left: Founder Photo in rounded frame */}
            <div className="lg:col-span-4 flex justify-center lg:justify-start">
              <div className="relative w-56 h-64 sm:w-64 sm:h-72 lg:w-72 lg:h-80 rounded-2xl overflow-hidden border-2 border-blue-400/30 shadow-2xl bg-slate-800">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
                  alt="Founder & Chairman - G Sons Power"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              </div>
            </div>

            {/* Right: Message & Attribution */}
            <div className="lg:col-span-8 flex flex-col justify-between space-y-6">
              <div className="p-6 sm:p-8 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <p className="text-xs sm:text-sm lg:text-[13px] text-slate-200 leading-relaxed font-normal">
                  The Fiscal Year has been an epoch period for G Sons Power Transformers. With record-high performance in production, delivery precision, and technical order inflow, we have consolidated our position as a trusted leader in power and distribution transformer solutions. Our relentless pursuit of innovation, zero-defect manufacturing, and customer satisfaction propels our long-term vision. As transformer manufacturers committed to India&apos;s future energy and global grid resilience, we remain committed to excellence in advancing national infrastructure objectives such as &ldquo;Viksit Bharat 2047&rdquo;. We are grateful to all our stakeholders for their trust and support in this change-making journey.
                </p>

                <div className="pt-6 mt-6 border-t border-white/10">
                  <h4 className="text-base sm:text-lg font-bold text-white tracking-wide">
                    Er. Rajesh Sharma / Sunita Goyal
                  </h4>
                  <span className="text-xs text-blue-300 font-medium block mt-0.5">
                    Founder &amp; Chairman / Managing Director
                  </span>
                </div>
              </div>

              {/* Right corner button as shown in reference */}
              <div className="flex justify-end pt-2">
                <Link
                  href="/leadership"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#e84e36] hover:bg-[#d43d26] text-white text-xs sm:text-sm font-bold tracking-wide shadow-lg transition-all duration-300 group cursor-pointer"
                >
                  <span>Meet Our Team</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
