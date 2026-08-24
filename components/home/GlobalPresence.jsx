'use client';

import { useState } from 'react';
import SectionHeading from '@/components/SectionHeading';
import { MapPin, Phone, Mail, CheckCircle2 } from 'lucide-react';

const gstplLocations = [
  {
    id: "loc-main",
    name: "G Sons Power Corporate & Manufacturing Complex",
    type: "Headquarters & Plant Facility",
    address: "G Sons Power Transformers Pvt. Ltd., State-of-the-Art Electrical Industrial Zone, India",
    phone: "+91 800 555-POWER",
    email: "sales@gsonspower.com",
    stats: "Up to 5 MVA Manufacturing Hub"
  },
  {
    id: "loc-testing",
    name: "GSTPL Precision Routine Testing Lab",
    type: "ISO Compliant Test Bay",
    address: "G Sons Quality Control Station, India",
    phone: "+91 800 555-TEST",
    email: "quality@gsonspower.com",
    stats: "100% Factory Routine Tested"
  }
];

export default function GlobalPresence() {
  const [selectedLoc, setSelectedLoc] = useState(gstplLocations[0]);

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow="MANUFACTURING & QUALITY HUB"
          title="Modern Production Facility & Quality Test Bay."
          subtitle="Our manufacturing facility is equipped with advanced winding machines, vacuum resin casting systems, curing ovens, and precision testing equipment."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Location List Buttons */}
          <div className="lg:col-span-5 space-y-3">
            {gstplLocations.map((loc) => {
              const isSelected = selectedLoc.id === loc.id;
              return (
                <button
                  key={loc.id}
                  onClick={() => setSelectedLoc(loc)}
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
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 p-8 flex flex-col justify-between min-h-[320px]">
            <div className="space-y-6">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
