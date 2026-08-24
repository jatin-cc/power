'use client';

import SectionHeading from '@/components/SectionHeading';
import Link from 'next/link';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';

const newsEvents = [
  {
    id: "e1",
    type: "GLOBAL EXHIBITION",
    title: "IEEE PES T&D Conference & Exposition 2026",
    date: "October 14–17, 2026",
    location: "Chicago, IL — Booth #4020",
    desc: "Demonstrating our synthetic ester-filled 500 MVA power transformer prototype and online fiber-optic DGA telemetry unit."
  },
  {
    id: "e2",
    type: "CORPORATE NEWS",
    title: "Vortex Commissions New ISO 17025 UHV Impulse Laboratory",
    date: "September 02, 2026",
    location: "Campus Alpha HQ",
    desc: "Inauguration of our 2,400 kV impulse test bay, expanding high-voltage dielectric testing capacity for international grid customers."
  },
  {
    id: "e3",
    type: "KEYNOTE PRESENTATION",
    title: "CIGRE International Substation Symposium",
    date: "November 05, 2026",
    location: "Paris, France",
    desc: "Chief Technology Officer Dr. Marcus Thorne delivers keynote on finite element electromagnetic modeling for ultra-high voltage grids."
  }
];

export default function EventsSection() {
  return (
    <section className="py-24 bg-slate-50/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="EVENTS & MEDIA"
            title="Global Conferences & Corporate Announcements."
            subtitle="Catch up with Vortex Power Systems engineers at international power conventions and technical symposiums."
            className="mb-0"
          />
          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#0052cc] uppercase tracking-wider hover:gap-3 transition-all shrink-0"
          >
            View All Events <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsEvents.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-slate-200 p-6 flex flex-col justify-between hover:border-[#0052cc]/40 transition-colors shadow-sm"
            >
              <div className="space-y-4">
                <span className="text-[10px] font-bold text-[#0052cc] uppercase tracking-widest bg-[#0052cc]/10 px-2.5 py-0.5">
                  {item.type}
                </span>

                <h3 className="text-lg font-bold text-[#0f172a] leading-snug">{item.title}</h3>

                <div className="space-y-1.5 text-xs text-slate-500 font-medium">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-[#0052cc]" />
                    <span>{item.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#0052cc]" />
                    <span>{item.location}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
