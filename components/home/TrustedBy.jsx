'use client';

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

export default function TrustedBy() {
  // Duplicate array for seamless infinite marquee loop
  const marqueeClients = [...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <section className="bg-slate-50/80 border-b border-slate-200 overflow-hidden relative py-4">
      {/* Infinite Logo Loop Ticker */}
      <div className="relative w-full overflow-hidden marquee-mask">
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
    </section>
  );
}
