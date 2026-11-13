'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { products } from '@/data/products';
import { services } from '@/data/services';
import CTAButton from '@/components/CTAButton';
import {
  Zap,
  Wrench,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ShieldCheck,
  Flame,
  SunMedium,
  Boxes,
  Cpu,
  Layers,
  Sparkles,
} from 'lucide-react';

// Curated winning flagship products from data/products.js (14 total in catalog)
const WINNING_PRODUCTS = [
  {
    slug: 'oil-filled-power-and-distribution-transformers',
    badge: 'MOST POPULAR',
    tagline: 'Heavy Industrial & Grid Utility',
    rating: '200 kVA to 5 MVA / Up to 33 kV',
    accentColor: '#063772',
    icon: Zap,
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    keySpecs: [
      { label: 'Capacity', value: '200 kVA – 5 MVA' },
      { label: 'Voltage Class', value: 'Up to 33 kV' },
      { label: 'Cooling', value: 'ONAN / ONAF' },
      { label: 'Tap Changing', value: 'Off-Circuit / OLTC' },
    ],
    highlights: [
      'Low-loss Prime CRGO magnetic core with step-lap mitered joints',
      'Designed for severe ambient heat and continuous heavy industrial loading',
      'Tested to IS 1180, IS 2026, and international IEC 60076 standards',
    ],
  },
  {
    slug: 'cast-resin-dry-type-transformers',
    badge: 'ZERO FIRE HAZARD',
    tagline: 'Commercial Complexes & Metro Stations',
    rating: 'Up to 5 MVA / 33 kV Class',
    accentColor: '#23790a',
    icon: Flame,
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80',
    keySpecs: [
      { label: 'Insulation', value: 'Class F / H Resin' },
      { label: 'Enclosure', value: 'IP21 / IP23 / IP31' },
      { label: 'Environment', value: 'Indoor Substation' },
      { label: 'Safety', value: 'Flame-Retardant' },
    ],
    highlights: [
      'Vacuum cast epoxy resin encapsulates HV windings against moisture',
      'Self-extinguishing with zero toxic gas emission during fire',
      'Ideal for data centers, hospitals, commercial towers, and airports',
    ],
  },
  {
    slug: 'inverter-duty-transformers',
    badge: 'SOLAR & RENEWABLE',
    tagline: 'Clean Energy & Solar Park Intertie',
    rating: 'Multi-Winding Step-Up / 33 kV',
    accentColor: '#d97706',
    icon: SunMedium,
    image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80',
    keySpecs: [
      { label: 'Windings', value: 'Dual / Multi-Secondary' },
      { label: 'Shielding', value: 'Electrostatic Screen' },
      { label: 'Harmonics', value: 'K-Factor Rated' },
      { label: 'Application', value: 'Central Solar Inverters' },
    ],
    highlights: [
      'Specially engineered to withstand high inverter switching harmonics',
      'Electrostatic shield suppresses high-frequency carrier interference',
      'Guaranteed low no-load loss to maximize solar plant generation yield',
    ],
  },
  {
    slug: 'compact-substations-css',
    badge: 'PLUG & PLAY PACKAGED',
    tagline: 'Integrated Substation Skid',
    rating: '11 kV / 33 kV Distribution',
    accentColor: '#4f46e5',
    icon: Boxes,
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80',
    keySpecs: [
      { label: 'Enclosure', value: 'IP54 Weatherproof' },
      { label: 'HT Section', value: 'Ring Main Unit (RMU)' },
      { label: 'Transformer', value: 'Oil / Dry Type' },
      { label: 'LT Section', value: 'ACB / MCCB Feeders' },
    ],
    highlights: [
      'Factory-assembled integrated unit eliminates civil substation buildings',
      'Internal safety interlocks prevent unauthorized door opening while live',
      'Compact footprint saves valuable real estate in dense commercial zones',
    ],
  },
  {
    slug: 'ht-panels-indoor-outdoor',
    badge: 'HIGH VOLTAGE',
    tagline: 'Switchgear & Feeder Protection',
    rating: '11 kV / 33 kV VCB',
    accentColor: '#7c3aed',
    icon: Cpu,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    keySpecs: [
      { label: 'Breaker', value: 'Vacuum Circuit Breaker' },
      { label: 'Testing', value: 'Internal Arc Tested' },
      { label: 'Busbar', value: 'High Conductivity ETP Cu' },
      { label: 'Automation', value: 'Numerical Relays / SCADA' },
    ],
    highlights: [
      'Metal-clad compartmentalized design with fail-safe interlocks',
      'Short-circuit tested per IEC 62271 and national standards',
      'Full protection against overcurrent, earth fault, and undervoltage',
    ],
  },
  {
    slug: 'pcc-panels-power-control-centres',
    badge: 'LT SWITCHGEAR',
    tagline: 'Main Plant Power Reception & Control',
    rating: 'Up to 6300A LT',
    accentColor: '#0d9488',
    icon: Layers,
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80',
    keySpecs: [
      { label: 'Execution', value: 'Form 4B Drawout/Fixed' },
      { label: 'Fault Level', value: '50 kA for 1 sec' },
      { label: 'Busbar', value: 'Modular Insulated ETP' },
      { label: 'Metering', value: 'Multifunction Digital' },
    ],
    highlights: [
      'Centralized distribution for heavy industrial motor and auxiliary loads',
      'Heavy-duty copper/aluminum busbars with thermal heat-shrink sleeving',
      'Microprocessor motorized ACB feeders with transient surge protection',
    ],
  },
];

export default function ProductsAndServicesSection() {
  const [activeTab, setActiveTab] = useState('products'); // 'products' or 'services'
  const productSliderRef = useRef(null);
  const serviceSliderRef = useRef(null);

  // Scroll function for products slider
  const scrollProducts = (direction) => {
    if (!productSliderRef.current) return;
    const container = productSliderRef.current;
    const card = container.querySelector('.slide-item');
    const scrollAmount = (card ? card.offsetWidth + 24 : 380) * (direction === 'left' ? -1 : 1);
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  // Scroll function for services slider
  const scrollServices = (direction) => {
    if (!serviceSliderRef.current) return;
    const container = serviceSliderRef.current;
    const card = container.querySelector('.slide-item');
    const scrollAmount = (card ? card.offsetWidth + 24 : 380) * (direction === 'left' ? -1 : 1);
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <section id="products-services" className="py-24 bg-[#f8fafc] border-b border-slate-200 relative overflow-hidden">
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Top Header & Reference Switcher as requested */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-[2px] bg-gradient-to-r from-[#063772] to-[#23790a]" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#063772]">
                MANUFACTURING &amp; ENGINEERING CAPABILITIES
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0f172a] leading-[1.15]">
              {activeTab === 'products' ? 'Flagship Transformer Manufacturing' : 'Comprehensive Field & Engineering Services'}
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl">
              {activeTab === 'products'
                ? 'High-performance Oil-Filled, Cast Resin Dry Type, and Packaged Substations up to 5 MVA in 11 kV & 33 kV voltage classes.'
                : 'Turnkey electrical project execution, HT/LT substation integration, testing, cabling, and transformer oil filtration services.'}
            </p>
          </div>

          {/* Interactive Toggle Switch (Products vs Services) */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 shrink-0">
            <div className="inline-flex p-1.5 bg-white border border-slate-300 rounded-xl shadow-xs">
              <button
                type="button"
                onClick={() => setActiveTab('products')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === 'products'
                    ? 'bg-[#063772] text-white shadow-sm'
                    : 'text-slate-600 hover:text-[#063772] hover:bg-slate-50'
                }`}
              >
                <Zap className="w-4 h-4" />
                <span>Our Products ({WINNING_PRODUCTS.length})</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('services')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === 'services'
                    ? 'bg-[#23790a] text-white shadow-sm'
                    : 'text-slate-600 hover:text-[#23790a] hover:bg-slate-50'
                }`}
              >
                <Wrench className="w-4 h-4" />
                <span>Our Services ({services.length})</span>
              </button>
            </div>

            {/* Carousel Arrow Controls */}
            <div className="hidden sm:flex items-center gap-2">
              <button
                type="button"
                onClick={() => (activeTab === 'products' ? scrollProducts('left') : scrollServices('left'))}
                className="w-10 h-10 rounded-lg border border-slate-300 bg-white flex items-center justify-center text-slate-700 hover:border-[#063772] hover:text-[#063772] hover:shadow-xs transition-colors cursor-pointer"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => (activeTab === 'products' ? scrollProducts('right') : scrollServices('right'))}
                className="w-10 h-10 rounded-lg border border-slate-300 bg-white flex items-center justify-center text-slate-700 hover:border-[#063772] hover:text-[#063772] hover:shadow-xs transition-colors cursor-pointer"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* ================= PRODUCTS SLIDING SHOWCASE ================= */}
        {activeTab === 'products' && (
          <div className="space-y-10">
            <div
              ref={productSliderRef}
              className="flex gap-6 overflow-x-auto scrollbar-none scroll-smooth pb-4 pt-1 snap-x snap-mandatory"
            >
              {WINNING_PRODUCTS.map((prod) => {
                const Icon = prod.icon;
                const found = products.find((p) => p.slug === prod.slug);
                const title = found?.name || prod.slug;
                const desc = found?.shortDesc || '';

                return (
                  <div
                    key={prod.slug}
                    className="slide-item snap-start shrink-0 w-[320px] sm:w-[380px] lg:w-[420px] bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-[#063772] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      {/* Image Header with Badge */}
                      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                        <img
                          src={prod.image}
                          alt={title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
                        <div className="absolute top-4 left-4">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[10px] font-black uppercase tracking-wider text-[#063772] shadow-sm">
                            <Sparkles className="w-3 h-3 text-amber-500" />
                            {prod.badge}
                          </span>
                        </div>
                        <div className="absolute bottom-3 left-4 right-4 text-white">
                          <span className="text-[11px] font-medium text-slate-200 block">
                            {prod.tagline}
                          </span>
                          <span className="text-xs font-bold text-white block mt-0.5">
                            {prod.rating}
                          </span>
                        </div>
                      </div>

                      {/* Content Body */}
                      <div className="p-6 space-y-4">
                        <h3 className="text-xl font-bold text-[#0f172a] group-hover:text-[#063772] transition-colors leading-snug">
                          {title}
                        </h3>

                        <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed font-normal">
                          {desc}
                        </p>

                        {/* Specs Matrix */}
                        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100 text-[11px]">
                          {prod.keySpecs.map((s, sIdx) => (
                            <div key={sIdx} className="p-2 rounded-md bg-slate-50 border border-slate-100">
                              <span className="text-slate-400 block text-[10px] font-medium">{s.label}</span>
                              <span className="font-bold text-slate-800 block truncate">{s.value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Bottom Action */}
                    <div className="p-6 pt-0 border-t border-slate-100">
                      <Link
                        href={`/products/${prod.slug}`}
                        className="w-full mt-4 py-2.5 px-4 rounded-lg bg-slate-50 hover:bg-[#063772] text-slate-700 hover:text-white text-xs font-bold uppercase tracking-wider flex items-center justify-between transition-colors group/btn"
                      >
                        <span>Product Specifications</span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom CTA for Products as requested in PDF */}
            <div className="text-center pt-4">
              <CTAButton href="/products" size="lg" variant="primary">
                View More Products (All 14 Flagships)
              </CTAButton>
            </div>
          </div>
        )}

        {/* ================= SERVICES SLIDING SHOWCASE ================= */}
        {activeTab === 'services' && (
          <div className="space-y-10">
            <div
              ref={serviceSliderRef}
              className="flex gap-6 overflow-x-auto scrollbar-none scroll-smooth pb-4 pt-1 snap-x snap-mandatory"
            >
              {services.map((serv, sIdx) => (
                <div
                  key={serv.id}
                  className="slide-item snap-start shrink-0 w-[320px] sm:w-[380px] lg:w-[420px] bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-[#23790a] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Service Image Header */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                      <img
                        src={serv.image}
                        alt={serv.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/90 text-white text-[10px] font-black uppercase tracking-wider shadow-sm">
                          Service 0{sIdx + 1}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-4">
                      <h3 className="text-xl font-bold text-[#0f172a] group-hover:text-[#23790a] transition-colors leading-snug">
                        {serv.name}
                      </h3>

                      <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed font-normal">
                        {serv.shortDesc}
                      </p>

                      {/* Scope bullets */}
                      <div className="space-y-2 pt-2 border-t border-slate-100">
                        {serv.scope?.slice(0, 3).map((item, i) => (
                          <div key={i} className="flex items-start gap-2 text-[11px] text-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#23790a] shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Action */}
                  <div className="p-6 pt-0 border-t border-slate-100">
                    <Link
                      href={`/services/${serv.slug}`}
                      className="w-full mt-4 py-2.5 px-4 rounded-lg bg-emerald-50 hover:bg-[#23790a] text-slate-700 hover:text-white text-xs font-bold uppercase tracking-wider flex items-center justify-between transition-colors group/btn"
                    >
                      <span>Explore Service Details</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA for Services as requested in PDF */}
            <div className="text-center pt-4">
              <CTAButton href="/services" size="lg" variant="primary">
                View More Services (All 7 Categories)
              </CTAButton>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

