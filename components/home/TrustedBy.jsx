'use client';

const clientLogos = [
  { name: 'Tata Power', type: 'Utility & Grid Distribution', code: 'TATA' },
  { name: 'Larsen & Toubro', type: 'EPC & Heavy Infrastructure', code: 'L&T' },
  { name: 'Adani Energy', type: 'Transmission & Solar Grids', code: 'ADANI' },
  { name: 'NTPC Limited', type: 'Power Generation PSU', code: 'NTPC' },
  { name: 'BHEL', type: 'Bharat Heavy Electricals', code: 'BHEL' },
  { name: 'Torrent Power', type: 'Power Distribution Utility', code: 'TORRENT' },
  { name: 'Siemens Energy', type: 'Switchgear & High Voltage', code: 'SIEMENS' },
  { name: 'ABB Power', type: 'Substation Technologies', code: 'ABB' },
  { name: 'Schneider Electric', type: 'Energy Management Systems', code: 'SCHNEIDER' },
  { name: 'Jindal Steel & Power', type: 'Heavy Industrial Metallurgy', code: 'JSPL' },
  { name: 'Indian Railways', type: 'Traction & Electrification', code: 'RAILWAYS' },
  { name: 'JSW Energy', type: 'Thermal & Renewable Power', code: 'JSW' },
  { name: 'HAL', type: 'Aerospace & Defence Infrastructure', code: 'HAL' },
  { name: 'Micron Technology', type: 'Semiconductor Fabrication', code: 'MICRON' },
];

export default function TrustedBy() {
  // Duplicate array for seamless infinite marquee loop
  const marqueeClients = [...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <section className="bg-slate-50 border-y border-slate-200 overflow-hidden relative py-6">
      <div className="max-w-7xl mx-auto px-6 mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#063772] animate-ping" />
          <span className="text-[11px] font-bold uppercase tracking-widest text-slate-500">
            Trusted By Real Industry Leaders &amp; National Utilities
          </span>
        </div>
        <span className="text-[10px] font-mono font-medium text-slate-400 hidden sm:inline-block">
          Grid Partners &bull; EPCs &bull; Industrial Conglomerates
        </span>
      </div>

      {/* Infinite Logo Loop Ticker - Direction: Left to Right (animate-marquee-reverse) */}
      <div className="relative w-full overflow-hidden marquee-mask">
        <div className="animate-marquee-reverse flex items-center gap-4 sm:gap-6 py-2">
          {marqueeClients.map((client, idx) => (
            <div
              key={`${client.name}-${idx}`}
              className="group flex items-center gap-3.5 px-5 py-3 bg-white border border-slate-200 rounded-md shadow-xs hover:border-[#063772] hover:shadow-md transition-all duration-300 shrink-0 cursor-default"
            >
              <div className="w-10 h-10 rounded-sm bg-gradient-to-br from-slate-100 to-slate-200 border border-slate-300 flex items-center justify-center font-black text-xs tracking-wider text-[#063772] group-hover:bg-[#063772] group-hover:text-white transition-all duration-300 shadow-2xs">
                {client.code.slice(0, 4)}
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
