'use client';

import { useState, useRef, useEffect } from 'react';
import SectionHeading from '@/components/SectionHeading';
import { locations } from '@/data/locations';
import { MapPin, Phone, Mail, CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';

export default function GlobalPresence() {
  const [selectedLoc, setSelectedLoc] = useState(locations[0]);
  const detailRef = useRef(null);

  const handleSelect = (loc) => {
    if (selectedLoc.id === loc.id) return;
    gsap.to(detailRef.current, {
      opacity: 0,
      y: 10,
      duration: 0.2,
      onComplete: () => {
        setSelectedLoc(loc);
        gsap.to(detailRef.current, { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' });
      },
    });
  };

  return (
    <section className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow="GLOBAL FOOTPRINT"
          title="Manufacturing Facilities & Regional Service Hubs."
          subtitle="Operating state-of-the-art production plants and rapid-response diagnostic hubs strategic to major industrial corridors."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Location List Buttons */}
          <div className="lg:col-span-5 space-y-3">
            {locations.map((loc) => {
              const isSelected = selectedLoc.id === loc.id;
              return (
                <button
                  key={loc.id}
                  onClick={() => handleSelect(loc)}
                  className={`w-full text-left p-5 border transition-all duration-200 flex items-start justify-between cursor-pointer ${
                    isSelected
                      ? 'border-[#0052cc] bg-[#0052cc]/5 shadow-sm'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-8 h-8 rounded-none flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 ${
                        isSelected ? 'bg-[#0052cc] text-white' : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-[#0f172a]">{loc.name}</h4>
                      <span className="text-xs text-slate-500 font-medium block mt-0.5">
                        {loc.type}
                      </span>
                    </div>
                  </div>
                  {isSelected && <CheckCircle2 className="w-5 h-5 text-[#0052cc] shrink-0" />}
                </button>
              );
            })}
          </div>

          {/* Location Details Display Panel */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 p-8 flex flex-col justify-between min-h-[380px]">
            <div ref={detailRef} className="space-y-6">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <div>
                  <span className="text-[10px] font-bold tracking-widest text-[#0052cc] uppercase block mb-1">
                    {selectedLoc.type}
                  </span>
                  <h3 className="text-2xl font-bold text-[#0f172a]">{selectedLoc.name}</h3>
                </div>
                <span className="bg-[#0052cc]/10 text-[#0052cc] px-3 py-1 text-xs font-bold uppercase tracking-wider">
                  {selectedLoc.stats}
                </span>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#0052cc] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{selectedLoc.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#0052cc] shrink-0" />
                  <span className="font-medium">{selectedLoc.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#0052cc] shrink-0" />
                  <span className="font-medium">{selectedLoc.email}</span>
                </div>
              </div>

              {/* Vector Blueprint Map Graphic */}
              <div className="pt-4 border-t border-slate-200">
                <div className="h-40 bg-white border border-slate-200 relative overflow-hidden flex items-center justify-center bg-grid-pattern">
                  <div className="text-center p-4">
                    <span className="text-xs font-bold text-[#0052cc] uppercase tracking-widest block mb-1">
                      GEOGRAPHIC COORDINATES
                    </span>
                    <span className="text-lg font-mono font-bold text-[#0f172a]">
                      LAT: {selectedLoc.coordinates.lat}° N | LNG: {selectedLoc.coordinates.lng}° W
                    </span>
                  </div>
                  <div className="absolute top-3 right-3 flex items-center gap-1 text-[10px] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 border border-emerald-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    LIVE FACILITY NODE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
