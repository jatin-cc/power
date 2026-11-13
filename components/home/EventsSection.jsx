'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const eventCards = [
  {
    title: 'Diwali Celebration & Annual Team Gathering',
    category: 'Corporate Culture',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80',
    link: '/events',
  },
  {
    title: 'Team G Sons At Elecrama 2026 World Forum',
    category: 'Industry Exhibition',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
    link: '/events',
  },
  {
    title: 'G Sons Power Orderbook Outlook | National Infra Forum',
    category: 'Industry Summit',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80',
    link: '/events',
  },
];

export default function EventsSection() {
  return (
    <section id="events" className="py-20 bg-white border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading & Introductory Text matching PDF Page 5 */}
        <div className="max-w-4xl mx-auto text-center mb-12 space-y-3">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f172a] tracking-tight">
            Events &amp; Industry Interactions
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed max-w-3xl mx-auto">
            Join us at global exhibitions, conferences, and industry meet-ups where leading transformer suppliers showcase innovations, exchange ideas, and shape the future of power. Stay connected to witness our latest breakthroughs and collaborative energy solutions in action.
          </p>
        </div>

        {/* 3 Event Cards matching PDF Page 5 Reference */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {eventCards.map((card, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#063772] transition-all duration-300 flex flex-col justify-end min-h-[340px] sm:min-h-[380px] bg-slate-900"
            >
              {/* Image Background */}
              <img
                src={card.image}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1e3f] via-[#0a1e3f]/40 to-transparent" />

              {/* Bottom Card Overlay with Title and Circle Arrow Button */}
              <div className="relative z-10 p-6 flex items-end justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 block">
                    {card.category}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white leading-snug group-hover:text-sky-200 transition-colors">
                    {card.title}
                  </h3>
                </div>

                <Link
                  href={card.link}
                  className="w-10 h-10 rounded-full bg-white/20 hover:bg-[#e84e36] text-white flex items-center justify-center shrink-0 backdrop-blur-md border border-white/30 transition-all duration-200 group-hover:scale-110"
                  aria-label="View event details"
                >
                  <ArrowUpRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Centered View More Button matching PDF Page 5 */}
        <div className="text-center pt-10">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#e84e36] hover:bg-[#d43d26] text-white text-xs sm:text-sm font-bold tracking-wide shadow-md transition-all duration-300 group cursor-pointer"
          >
            <span>View More</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
