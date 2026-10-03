'use client';

import SectionHeading from '@/components/SectionHeading';
import Link from 'next/link';
import { Calendar, MapPin, ArrowRight, Sparkles, Building2 } from 'lucide-react';

const industryEvents = [
  {
    id: "e1",
    type: "PREMIER ELECTRICAL EXPO",
    title: "ELECRAMA 2026 – World Electricity Forum",
    date: "February 14–18, 2026",
    location: "India Expo Mart, Greater Noida — Hall 12, Stall C-18",
    desc: "Live demonstration of G Sons Power Cast Resin Dry-Type (CRT) Class-H transformers, energy-efficient IS 1180 distribution units, and vacuum resin casting technology."
  },
  {
    id: "e2",
    type: "RENEWABLE ENERGY SUMMIT",
    title: "Renewable Energy India Expo (REI)",
    date: "October 08–10, 2026",
    location: "India Expo Centre, Delhi NCR — Pavilion 4",
    desc: "Showcasing specialized multi-winding Solar Inverter Duty Transformers, high-voltage step-up units, and turnkey package Compact Substations (CSS) for solar IPPs."
  },
  {
    id: "e3",
    type: "TECHNICAL WORKSHOP & EXPO",
    title: "DistribuELEC Power Distribution Convention",
    date: "November 22–24, 2026",
    location: "Bombay Exhibition Centre, Mumbai",
    desc: "Technical presentation by G Sons Power engineering team on minimizing no-load core losses with Prime CRGO steel and meeting Bureau of Energy Efficiency norms."
  }
];

export default function EventsSection() {
  return (
    <section id="events" className="py-24 bg-slate-50/70 border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <SectionHeading
            eyebrow="CONVENTIONS & EXHIBITIONS"
            title="Events & Industry Interactions"
            subtitle="Connect directly with G Sons Power technical directors and design engineers at premier power expos and engineering summits."
            className="mb-0 max-w-3xl"
          />
          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#0052cc] uppercase tracking-wider hover:gap-3 transition-all shrink-0"
          >
            All Upcoming Events <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {industryEvents.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-slate-200 rounded-sm p-7 flex flex-col justify-between hover:border-[#0052cc] hover:shadow-xl transition-all duration-300 shadow-2xs group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-[#0052cc] uppercase tracking-widest bg-[#0052cc]/10 px-2.5 py-1 rounded-xs">
                    {item.type}
                  </span>
                  <Building2 className="w-4 h-4 text-slate-400 group-hover:text-[#0052cc] transition-colors" />
                </div>

                <h3 className="text-lg font-bold text-[#0f172a] group-hover:text-[#0052cc] transition-colors leading-snug">
                  {item.title}
                </h3>

                <div className="space-y-2 text-xs text-slate-500 font-medium pt-2 border-t border-slate-100">
                  <div className="flex items-center gap-2 text-slate-700">
                    <Calendar className="w-4 h-4 text-[#0052cc] shrink-0" />
                    <span>{item.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-500">
                    <MapPin className="w-4 h-4 text-[#0052cc] shrink-0" />
                    <span>{item.location}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed font-normal pt-1">
                  {item.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0052cc]">
                <span className="uppercase tracking-wider text-[11px]">Schedule Booth Meeting</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
