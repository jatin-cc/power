'use client';

import Link from 'next/link';
import { leadershipTeam } from '@/data/team';
import SectionHeading from '@/components/SectionHeading';
import { ArrowRight, Linkedin, Mail, Award, CheckCircle } from 'lucide-react';

export default function MeetOurTeam() {
  return (
    <section id="team" className="py-24 bg-white border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <SectionHeading
            eyebrow="LEADERSHIP & ENGINEERING EXPERTISE"
            title="Meet Our Leadership & Technical Team"
            subtitle="Led by visionary industrial leaders, high-voltage design engineers, and certified testing specialists dedicated to Zero-Defect excellence."
            className="mb-0 max-w-3xl"
          />
          <Link
            href="/leadership"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#0052cc] hover:underline uppercase tracking-wider shrink-0"
          >
            Executive Governance <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {leadershipTeam.map((member, idx) => (
            <div
              key={idx}
              className="group bg-slate-50 border border-slate-200 rounded-sm overflow-hidden hover:border-[#0052cc] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Photo with subtle hover zoom */}
                <div className="relative aspect-[4/5] bg-slate-200 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Info Container */}
                <div className="p-6 space-y-3">
                  <span className="text-[10px] font-bold text-[#0052cc] uppercase tracking-wider bg-[#0052cc]/10 px-2 py-0.5 rounded-xs inline-block">
                    {member.role}
                  </span>

                  <h3 className="text-lg font-bold text-[#0f172a] group-hover:text-[#0052cc] transition-colors leading-snug">
                    {member.name}
                  </h3>

                  {member.credentials && (
                    <div className="text-[11px] font-semibold text-slate-500 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-[#0052cc] shrink-0" />
                      <span>{member.credentials}</span>
                    </div>
                  )}

                  <p className="text-xs text-slate-600 leading-relaxed font-normal pt-2 border-t border-slate-200/80">
                    {member.bio}
                  </p>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="px-6 pb-5 pt-0 flex items-center justify-between text-xs text-slate-400">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                  G Sons Power Team
                </span>
                <div className="w-7 h-7 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 group-hover:bg-[#0052cc] group-hover:text-white transition-colors">
                  <CheckCircle className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
