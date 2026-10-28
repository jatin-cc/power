'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { products } from '@/data/products';
import SectionHeading from '@/components/SectionHeading';
import CTAButton from '@/components/CTAButton';
import {
  Zap,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Layers,
  SlidersHorizontal,
  Flame,
  SunMedium,
  Box,
  Cpu,
  ArrowUpRight,
} from 'lucide-react';

const HIGHLIGHT_ITEMS = [
  {
    slug: 'oil-filled-power-and-distribution-transformers',
    badge: 'MOST POPULAR',
    tagline: 'Heavy Industrial & Grid Utility',
    categoryFilter: 'transformers',
    rating: 'Up to 5 MVA / 33 kV',
    accentColor: 'blue',
    icon: Zap,
    keySpecs: [
      { label: 'Rating', value: '200 kVA – 5 MVA' },
      { label: 'Voltage Class', value: 'Up to 33 kV' },
      { label: 'Cooling Method', value: 'ONAN / ONAF' },
    ],
    highlights: [
      'Low loss CRGO magnetic core with step-lap mitered joints',
      'Off-circuit tap switch or automated on-load tap changer (OLTC)',
      'Conservator tank with silica gel breather & Buchholz protection',
    ],
  },
  {
    slug: 'cast-resin-dry-type-transformers',
    badge: 'ZERO FIRE HAZARD',
    tagline: 'Commercial Complexes & Metro Stations',
    categoryFilter: 'dry-type',
    rating: 'Up to 33 kV Class',
    accentColor: 'emerald',
    icon: Flame,
    keySpecs: [
      { label: 'Insulation', value: 'Class F / H Resin' },
      { label: 'Environment', value: 'Indoor Substation' },
      { label: 'Enclosure', value: 'IP21 / IP23 / IP31' },
    ],
    highlights: [
      'Vacuum cast epoxy resin encapsulates HV windings securely',
      'Self-extinguishing, flame-retardant with zero toxic emissions',
      'Ideal for hospitals, data centers, airports, and high-rise towers',
    ],
  },
  {
    slug: 'inverter-duty-transformers',
    badge: 'SOLAR & RENEWABLE',
    tagline: 'Clean Energy & Grid Intertie',
    categoryFilter: 'solar',
    rating: 'Multi-Winding 33 kV',
    accentColor: 'amber',
    icon: SunMedium,
    keySpecs: [
      { label: 'Windings', value: 'Dual / Multi-Secondary' },
      { label: 'Protection', value: 'Harmonics Shielded' },
      { label: 'Efficiency', value: 'Star-1 / BIS Compliant' },
    ],
    highlights: [
      'Engineered for solar central & string inverter outputs',
      'Electrostatic shield prevents high-frequency carrier noise',
      'Withstands extreme harmonic heating & DC bias from inverters',
    ],
  },
  {
    slug: 'compact-substations-css',
    badge: 'PLUG & PLAY',
    tagline: 'Integrated Packaged Substation',
    categoryFilter: 'substations',
    rating: '11 kV / 33 kV Packaged',
    accentColor: 'indigo',
    icon: Box,
    keySpecs: [
      { label: 'Enclosure', value: 'IP54 Weatherproof' },
      { label: 'Architecture', value: 'HT + X’mer + LT' },
      { label: 'Installation', value: 'Outdoor Skid Base' },
    ],
    highlights: [
      'Factory-assembled unit with internal interlocks for total safety',
      'Eliminates need for civil building & reduces project turnaround',
      'Equipped with Ring Main Unit (RMU) & automated LT distribution',
    ],
  },
  {
    slug: 'ht-panels-indoor-outdoor',
    badge: 'HIGH VOLTAGE',
    tagline: 'Switchgear & Feeder Protection',
    categoryFilter: 'switchgear',
    rating: '11 kV / 33 kV VCB',
    accentColor: 'purple',
    icon: Cpu,
    keySpecs: [
      { label: 'Breaker', value: 'Vacuum Circuit Breaker' },
      { label: 'Testing', value: 'Internal Arc Tested' },
      { label: 'Busbar', value: 'High Conductivity ETP Cu' },
    ],
    highlights: [
      'Metal-clad compartmentalized design with fail-safe interlocks',
      'Short-circuit tested per IEC 62271 and national standards',
      'SCADA ready with numerical protection & remote metering',
    ],
  },
  {
    slug: 'pcc-panels-power-control-centres',
    badge: 'POWER DISTRIBUTION',
    tagline: 'Main Plant Power Reception',
    categoryFilter: 'switchgear',
    rating: 'Up to 6300A LT',
    accentColor: 'teal',
    icon: Layers,
    keySpecs: [
      { label: 'Execution', value: 'Form 4B Drawout/Fixed' },
      { label: 'Fault Level', value: '50 kA for 1 sec' },
      { label: 'Busbar System', value: 'Sleeved Modular Bus' },
    ],
    highlights: [
      'Centralized distribution for heavy industrial motor loads',
      'Heavy-duty copper/aluminum busbars with thermal sleeving',
      'Microprocessor motorized ACB feeders with transient suppression',
    ],
  },
];

const CATEGORIES = [
  { id: 'all', label: 'All Flagships' },
  { id: 'transformers', label: 'Distribution Transformers' },
  { id: 'dry-type', label: 'Cast Resin & Dry Type' },
  { id: 'solar', label: 'Solar & Inverter Duty' },
  { id: 'substations', label: 'Compact Substations' },
  { id: 'switchgear', label: 'HT & LT Switchgear' },
];

export default function HighlightedProducts() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef(null);

  // Merge curated highlight data with base product records
  const highlightedList = HIGHLIGHT_ITEMS.map((item) => {
    const found = products.find((p) => p.slug === item.slug);
    return {
      ...item,
      ...found,
      name: found?.name || item.slug,
      image: found?.image || '',
      shortDesc: found?.shortDesc || '',
      category: found?.category || 'Transformers',
    };
  });

  const filteredItems =
    activeCategory === 'all'
      ? highlightedList
      : highlightedList.filter((item) => item.categoryFilter === activeCategory);

  // Handle category change: reset scroll
  const handleCategoryChange = (catId) => {
    setActiveCategory(catId);
    setActiveSlide(0);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  };

  // Scroll carousel
  const scroll = (direction) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const cardWidth = container.querySelector('.product-card')?.offsetWidth || 380;
    const scrollAmount = (cardWidth + 24) * (direction === 'left' ? -1 : 1);
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  // Track active slide on scroll
  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const cardWidth = container.querySelector('.product-card')?.offsetWidth || 380;
    const index = Math.round(container.scrollLeft / (cardWidth + 24));
    setActiveSlide(Math.max(0, Math.min(index, filteredItems.length - 1)));
  };

  // Optional subtle auto-scroll
  useEffect(() => {
    if (isPaused || filteredItems.length <= 1) return;
    const timer = setInterval(() => {
      if (!scrollContainerRef.current) return;
      const container = scrollContainerRef.current;
      const cardWidth = container.querySelector('.product-card')?.offsetWidth || 380;
      const maxScroll = container.scrollWidth - container.clientWidth;

      if (container.scrollLeft >= maxScroll - 10) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: cardWidth + 24, behavior: 'smooth' });
      }
    }, 6000);

    return () => clearInterval(timer);
  }, [isPaused, filteredItems.length]);

  return (
    <section
      id="highlighted-products"
      className="py-24 bg-gradient-to-b from-[#f8fafc] via-white to-[#f8fafc] border-b border-slate-200 relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Decorative ambient gradients & grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Top Header Row with Eyebrow, Title & View All Button */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-[2px] bg-gradient-to-r from-[#063772] to-[#23790a]" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#063772]">
                FLAGSHIP ENGINEERING SOLUTIONS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0f172a] leading-[1.15]">
              Power Transformers & Systems
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl">
              Engineered up to 5 MVA across 11 kV & 33 kV voltage classes. Built to meet approved single-line diagrams, ambient heat constraints, and zero-defect uptime requirements.
            </p>
          </div>

          {/* Action Row: View All Products CTA + Carousel Controls */}
          <div className="flex items-center gap-4 shrink-0">
            <CTAButton href="/products" size="md" variant="primary">
              View All Products ({products.length})
            </CTAButton>

            {/* Slider Navigation Arrows */}
            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={() => scroll('left')}
                aria-label="Previous products"
                className="w-11 h-11 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 hover:text-[#063772] hover:border-[#063772]/40 transition-all duration-200 flex items-center justify-center shadow-xs cursor-pointer active:scale-95"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll('right')}
                aria-label="Next products"
                className="w-11 h-11 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 hover:text-[#063772] hover:border-[#063772]/40 transition-all duration-200 flex items-center justify-center shadow-xs cursor-pointer active:scale-95"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {CATEGORIES.map((cat) => {
            const count =
              cat.id === 'all'
                ? highlightedList.length
                : highlightedList.filter((p) => p.categoryFilter === cat.id).length;

            if (count === 0 && cat.id !== 'all') return null;

            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-4 py-2 text-xs font-bold rounded-lg uppercase tracking-wider whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center gap-2.5 ${isActive
                  ? 'bg-[#063772] text-white shadow-md shadow-[#063772]/20'
                  : 'bg-white border border-slate-200 text-slate-700 hover:border-[#063772]/50 hover:text-[#063772]'
                  }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                    }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Smooth Scrolling Products Showcase Track */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory scroll-smooth no-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {filteredItems.map((prod, idx) => {
            const Icon = prod.icon || Zap;
            return (
              <div
                key={prod.slug || idx}
                className="product-card snap-start shrink-0 w-[90vw] sm:w-[420px] lg:w-[400px] bg-white border border-slate-200/90 rounded-2xl overflow-hidden hover:border-[#063772] hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Image Showcase */}
                  <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent pointer-events-none" />

                    {/* Top Status & Badge Pills */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                      <span className="bg-[#0f172a]/90 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider border border-white/10">
                        {prod.category}
                      </span>
                      <span className="bg-emerald-500/90 backdrop-blur-md text-white text-[10px] font-extrabold px-2.5 py-1 rounded-md uppercase tracking-wider shadow-xs">
                        {prod.badge}
                      </span>
                    </div>

                    {/* Bottom Overlay inside Image: Capacity / Rating */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                      <div className="inline-flex items-center gap-1.5 text-xs font-bold bg-white/15 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/20">
                        <Icon className="w-3.5 h-3.5 text-sky-300" />
                        <span>{prod.rating || prod.capacity}</span>
                      </div>
                      <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-200">
                        CPRI / ERDA TESTED
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 space-y-4">
                    {/* Tagline */}
                    <div className="text-[11px] font-bold text-[#063772] uppercase tracking-wider">
                      {prod.tagline}
                    </div>

                    {/* Product Title */}
                    <h3 className="text-xl font-bold text-[#0f172a] group-hover:text-[#063772] transition-colors leading-snug">
                      <Link href={`/products/${prod.slug}`}>
                        {prod.name}
                      </Link>
                    </h3>

                    {/* Short Description */}
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed font-normal">
                      {prod.shortDesc}
                    </p>

                    {/* Technical Specs Matrix */}
                    <div className="grid grid-cols-3 gap-2 py-3 border-y border-slate-100 bg-slate-50/60 rounded-xl px-3">
                      {prod.keySpecs.map((spec, sIdx) => (
                        <div key={sIdx} className="space-y-0.5">
                          <div className="text-[10px] text-slate-600 uppercase tracking-wider font-medium">
                            {spec.label}
                          </div>
                          <div className="text-[11px] font-bold text-[#0f172a] truncate">
                            {spec.value}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Engineering Highlights List */}
                    <div className="space-y-2 pt-1 text-xs text-slate-600">
                      {prod.highlights.map((item, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-[12px] leading-tight">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#23790a] shrink-0 mt-0.5" />
                          <span className="text-slate-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-6 pt-0 mt-2 flex items-center gap-3">
                  <Link
                    href={`/products/${prod.slug}`}
                    className="flex-1 py-3 px-4 bg-[#063772] text-white hover:bg-[#042956] font-bold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 transition-all duration-200 shadow-sm shadow-[#063772]/20 group/btn"
                  >
                    <span>Explore Specifications</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href={`/contact?product=${prod.slug}`}
                    title="Request technical quotation"
                    className="py-3 px-3.5 bg-slate-100 hover:bg-slate-200 text-[#063772] font-bold text-xs uppercase rounded-xl transition-all duration-200"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Pagination Dots & Mobile Prev/Next */}
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-200/80">
          {/* Progress / Active Dots */}
          <div className="flex items-center gap-2">
            {filteredItems.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  if (!scrollContainerRef.current) return;
                  const cardWidth = scrollContainerRef.current.querySelector('.product-card')?.offsetWidth || 380;
                  scrollContainerRef.current.scrollTo({ left: i * (cardWidth + 24), behavior: 'smooth' });
                  setActiveSlide(i);
                }}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${activeSlide === i
                  ? 'w-8 bg-[#063772]'
                  : 'w-2 bg-slate-300 hover:bg-slate-400'
                  }`}
              />
            ))}
          </div>

          {/* Quick Counter */}
          <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">
            <span>{String(activeSlide + 1).padStart(2, '0')}</span>
            <span className="mx-1 text-slate-300">/</span>
            <span>{String(filteredItems.length).padStart(2, '0')}</span>
          </div>
        </div>

        {/* Bottom Banner with Assurance Badges & View All Button */}
        <div className="mt-14 p-8 sm:p-10 bg-white border border-slate-200 rounded-2xl shadow-sm flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-extrabold text-[#23790a] uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Full Compliance & Custom Sizing Available</span>
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-[#0f172a]">
              Need a Custom Voltage Ratio, Dual Secondary Windings, or Packaged Outdoor CSS?
            </h4>
            <p className="text-xs sm:text-sm text-slate-500 max-w-2xl font-normal leading-relaxed">
              Our in-house R&D and engineering team designs custom OLTC/OCTC tapping, low-loss CRGO configurations, and weather-proof IP enclosures up to 5 MVA to project single-line diagrams.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <CTAButton href="/products" size="md" variant="primary" className="w-full sm:w-auto">
              View All Products ({products.length})
            </CTAButton>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 border border-slate-300 hover:border-[#063772] text-[#063772] font-bold text-xs uppercase tracking-wider rounded-none hover:bg-slate-50 transition-all duration-200"
            >
              <span>Consult Design Engineer</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
