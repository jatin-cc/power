'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Zap,
  Building2,
  FileText,
  Settings,
  Pickaxe,
  Train,
  Pill,
  Truck,
  Leaf,
  ArrowRight,
} from 'lucide-react';

const industryPills = [
  {
    name: 'Power Transmission',
    icon: Zap,
    slug: 'power-transmission',
    desc: 'Grid intertie and sub-transmission step-down transformers up to 33 kV for state utilities and private transmission networks.',
  },
  {
    name: 'Cement',
    icon: Building2,
    slug: 'cement',
    desc: 'Heavy-duty transformers engineered for extreme dust environments, rotary kiln drive motors, and high cyclical thermal shocks.',
  },
  {
    name: 'Paper & Pulp',
    icon: FileText,
    slug: 'paper-pulp',
    desc: 'Continuous-duty power units with special anti-corrosive chemical coatings and high harmonic tolerance for paper pulping lines.',
  },
  {
    name: 'Metal Processing',
    icon: Settings,
    slug: 'metal-processing',
    desc: 'Robust furnace step-down and induction heating transformers engineered to resist severe electromagnetic mechanical stress.',
  },
  {
    name: 'Mining',
    icon: Pickaxe,
    slug: 'mining',
    desc: 'Compact skid-mounted substations and flameproof dry-type transformers for underground and open-cast mining conveyor systems.',
  },
  {
    name: 'Railways',
    icon: Train,
    slug: 'railways',
    desc: 'Auxiliary substation distribution units and signaling power transformers complying with strict railway safety norms.',
  },
  {
    name: 'Pharmaceutical',
    icon: Pill,
    slug: 'pharmaceutical',
    desc: 'Zero-fire-risk Cast Resin Dry Type (CRT) transformers ensuring uninterrupted cleanroom power for bulk drug manufacturing.',
  },
  {
    name: 'Distribution',
    icon: Truck,
    slug: 'distribution',
    desc: 'BEE Star-labeled, low-loss oil-filled distribution transformers powering smart city grids, IT hubs, and commercial zones.',
  },
  {
    name: 'Green Energy',
    icon: Leaf,
    slug: 'green-energy',
    desc: 'Multi-winding solar inverter duty and wind farm step-up transformers engineered to maximize generation export to the grid.',
  },
];

export default function IndustriesSelector() {
  const [activePill, setActivePill] = useState(industryPills[0]);

  return (
    <section id="industries" className="py-20 bg-[#163f73] text-white relative overflow-hidden">
      {/* Background Subtle Tech Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10 text-center space-y-10">
        {/* Title matching PDF Page 4 Reference */}
        <div className="flex items-center justify-center gap-4">
          <span className="hidden sm:block w-16 h-[1.5px] bg-gradient-to-r from-transparent to-blue-300" />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Industries We Empower With Expertise
          </h2>
          <span className="hidden sm:block w-16 h-[1.5px] bg-gradient-to-l from-transparent to-blue-300" />
        </div>

        {/* Capsule Pills Grid matching PDF Page 4 Reference */}
        <div className="space-y-4">
          {/* Row 1: 6 pills */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {industryPills.slice(0, 6).map((item) => {
              const Icon = item.icon;
              const isActive = activePill.name === item.name;
              return (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setActivePill(item)}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full border text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-white text-[#163f73] border-white shadow-lg scale-105'
                      : 'bg-white/10 border-white/20 text-white hover:bg-white/20 hover:border-white/40'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#163f73]' : 'text-blue-200'}`} />
                  <span>{item.name}</span>
                </button>
              );
            })}
          </div>

          {/* Row 2: 3 pills */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {industryPills.slice(6, 9).map((item) => {
              const Icon = item.icon;
              const isActive = activePill.name === item.name;
              return (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setActivePill(item)}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full border text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-white text-[#163f73] border-white shadow-lg scale-105'
                      : 'bg-white/10 border-white/20 text-white hover:bg-white/20 hover:border-white/40'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#163f73]' : 'text-blue-200'}`} />
                  <span>{item.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Industry Detail Card */}
        <div className="max-w-2xl mx-auto p-6 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md text-left transition-all">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-300">
              Sector Overview &bull; {activePill.name}
            </span>
            <Link
              href="/industries"
              className="inline-flex items-center gap-1 text-xs font-bold text-white hover:text-emerald-300 transition-colors"
            >
              <span>Explore All Sectors</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <p className="text-xs sm:text-sm text-slate-100 font-normal leading-relaxed">
            {activePill.desc}
          </p>
        </div>
      </div>
    </section>
  );
}
