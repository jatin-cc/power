'use client';

import { ShieldCheck, Award, CheckCircle2, Zap } from 'lucide-react';

const clientLogos = [
  { name: 'Tata Power', type: 'Utility & Grid', code: 'TATA' },
  { name: 'Larsen & Toubro', type: 'EPC & Infrastructure', code: 'L&T' },
  { name: 'Adani Energy', type: 'Transmission & Solar', code: 'ADANI' },
  { name: 'NTPC Limited', type: 'Power Generation', code: 'NTPC' },
  { name: 'BHEL', type: 'Heavy Electricals', code: 'BHEL' },
  { name: 'Torrent Power', type: 'Distribution Utility', code: 'TORRENT' },
  { name: 'Siemens Energy', type: 'Switchgear & Grid', code: 'SIEMENS' },
  { name: 'ABB Power', type: 'Substation Solutions', code: 'ABB' },
  { name: 'Schneider Electric', type: 'Energy Management', code: 'SCHNEIDER' },
  { name: 'Delhi Metro (DMRC)', type: 'Transit Infrastructure', code: 'DMRC' },
  { name: 'Indian Railways', type: 'Rail Electrification', code: 'RAILWAYS' },
  { name: 'JSW Energy', type: 'Industrial & Power', code: 'JSW' },
];

const credentials = [
  { label: 'BIS IS 1180 / 2026', desc: 'Bureau of Indian Standards Licensed' },
  { label: 'ZED Gold Certified', desc: 'Zero Defect & Zero Effect Manufacturing' },
  { label: 'CPRI & ERDA Tested', desc: 'Independently Type Tested Designs' },
  { label: 'Startup India Recognized', desc: 'Govt. of India Initiative' },
  { label: 'Women-Led Enterprise', desc: 'Inclusive Manufacturing Excellence' },
  { label: 'ISO 9001:2015 Quality', desc: 'Global Quality Management Standard' }
];

export default function TrustedBy() {
  // Duplicate array for seamless infinite marquee loop
  const marqueeClients = [...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <section className=" bg-slate-50/80 border-b border-slate-200 overflow-hidden relative">
      {/* <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <div className="inline-flex items-center gap-2 mb-2">
          <span className="w-6 h-[2px] bg-[#063772]" />
          <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#063772]">
            PROVEN TRACK RECORD & ACCREDITATIONS
          </span>
          <span className="w-6 h-[2px] bg-[#063772]" />
        </div>
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#0f172a] tracking-tight">
          Trusted By 500+ Utilities, EPCs & Industrial Leaders
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 max-w-2xl mx-auto mt-1.5 font-normal">
          Supplying certified distribution transformers and turnkey compact substations across critical national infrastructure.
        </p>
      </div> */}

      {/* Infinite Logo Loop Ticker */}
      <div className="relative w-full overflow-hidden marquee-mask py-3">
        <div className="animate-marquee flex items-center gap-4 sm:gap-6">
          {marqueeClients.map((client, idx) => (
            <div
              key={`${client.name}-${idx}`}
              className="group flex items-center gap-3.5 px-5 py-3 bg-white border border-slate-200 rounded-sm shadow-xs hover:border-[#063772] hover:shadow-md transition-all duration-300 shrink-0 cursor-default"
            >
              <div className="w-9 h-9 rounded bg-slate-100 flex items-center justify-center font-black text-xs tracking-wider text-slate-700 group-hover:bg-[#063772] group-hover:text-white transition-colors">
                {client.code.slice(0, 3)}
              </div>
              <div className="text-left">
                <span className="block font-bold text-xs sm:text-sm text-[#0f172a] group-hover:text-[#063772] transition-colors whitespace-nowrap">
                  {client.name}
                </span>
                <span className="block text-[10px] text-slate-400 uppercase tracking-wider whitespace-nowrap">
                  {client.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Accreditations & Certifications Strip */}
      <div className="max-w-7xl mx-auto px-6 mt-10 pt-8 border-t border-slate-200/80">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {credentials.map((cred, idx) => {
            const isGreen = idx % 2 === 1;
            const iconBg = isGreen ? 'bg-[#23790a]/10 text-[#23790a]' : 'bg-[#063772]/10 text-[#063772]';
            const hoverBorder = isGreen ? 'hover:border-[#23790a]/50' : 'hover:border-[#063772]/50';
            return (
              <div
                key={idx}
                className={`p-3 bg-white border border-slate-200/90 rounded-sm text-center transition-colors ${hoverBorder}`}
              >
                <div className={`inline-flex p-1.5 rounded-full mb-1.5 ${iconBg}`}>
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <span className="block font-bold text-xs text-[#0f172a] leading-tight">
                  {cred.label}
                </span>
                <span className="block text-[10px] text-slate-500 mt-0.5 leading-snug">
                  {cred.desc}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
