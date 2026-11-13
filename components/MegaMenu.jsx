'use client';

import Link from 'next/link';
import {
  ArrowRight,
  Zap,
  Shield,
  Factory,
  BookOpen,
  Calendar,
  Users,
  Award,
  Wrench,
  Boxes,
  Cpu,
  Layers,
  Sparkles,
} from 'lucide-react';
import { products } from '@/data/products';
import { services } from '@/data/services';
import { industries } from '@/data/industries';

export default function MegaMenu({ activeTab, onClose }) {
  if (!activeTab) return null;

  return (
    <div
      onMouseLeave={onClose}
      className="hidden lg:block absolute top-full left-0 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xl shadow-slate-900/5 transition-all duration-300 z-50 text-[#0f172a]"
    >
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* TAB: Product & Service (Combined as requested) */}
        {activeTab === 'products-services' && (
          <div className="grid grid-cols-12 gap-8">
            {/* Col 1: Transformers */}
            <div className="col-span-3 space-y-3">
              <div className="flex items-center justify-between pb-1 border-b border-slate-200">
                <span className="text-[11px] font-bold tracking-widest text-[#063772] uppercase flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5" />
                  Transformers
                </span>
                <Link
                  href="/products?category=transformers"
                  onClick={onClose}
                  className="text-[10px] font-semibold text-slate-500 hover:text-[#063772] transition-colors"
                >
                  All ({products.filter((p) => p.categorySlug === 'transformers').length})
                </Link>
              </div>
              <div className="space-y-1">
                {products
                  .filter((p) => p.categorySlug === 'transformers')
                  .slice(0, 4)
                  .map((item) => (
                    <Link
                      key={item.id}
                      href={`/products/${item.slug}`}
                      onClick={onClose}
                      className="group block p-2 rounded-lg hover:bg-slate-50 transition-colors"
                    >
                      <span className="font-semibold text-xs text-[#0f172a] group-hover:text-[#063772] transition-colors block leading-snug">
                        {item.name}
                      </span>
                      <span className="text-[10px] text-slate-500 block mt-0.5">
                        {item.capacity}
                      </span>
                    </Link>
                  ))}
              </div>
            </div>

            {/* Col 2: Substations & Panels */}
            <div className="col-span-3 space-y-3">
              <div className="flex items-center justify-between pb-1 border-b border-slate-200">
                <span className="text-[11px] font-bold tracking-widest text-[#063772] uppercase flex items-center gap-1.5">
                  <Boxes className="w-3.5 h-3.5" />
                  Substations & Panels
                </span>
                <Link
                  href="/products"
                  onClick={onClose}
                  className="text-[10px] font-semibold text-slate-500 hover:text-[#063772] transition-colors"
                >
                  View All
                </Link>
              </div>
              <div className="space-y-1">
                {products
                  .filter(
                    (p) =>
                      p.categorySlug === 'compact-substations' ||
                      p.categorySlug === 'ht-panels' ||
                      p.categorySlug === 'lt-panels'
                  )
                  .slice(0, 4)
                  .map((item) => (
                    <Link
                      key={item.id}
                      href={`/products/${item.slug}`}
                      onClick={onClose}
                      className="group block p-2 rounded-lg hover:bg-slate-50 transition-colors"
                    >
                      <span className="font-semibold text-xs text-[#0f172a] group-hover:text-[#063772] transition-colors block leading-snug">
                        {item.name}
                      </span>
                      <span className="text-[10px] text-slate-500 block mt-0.5">
                        {item.category}
                      </span>
                    </Link>
                  ))}
              </div>
            </div>

            {/* Col 3: Engineering & Field Services */}
            <div className="col-span-3 space-y-3">
              <div className="flex items-center justify-between pb-1 border-b border-slate-200">
                <span className="text-[11px] font-bold tracking-widest text-[#23790a] uppercase flex items-center gap-1.5">
                  <Wrench className="w-3.5 h-3.5" />
                  Engineering Services
                </span>
                <Link
                  href="/services"
                  onClick={onClose}
                  className="text-[10px] font-semibold text-slate-500 hover:text-[#23790a] transition-colors"
                >
                  All ({services.length})
                </Link>
              </div>
              <div className="space-y-1 max-h-[340px] overflow-y-auto pr-1 scrollbar-thin">
                {services.map((item) => (
                  <Link
                    key={item.id}
                    href={`/services/${item.slug}`}
                    onClick={onClose}
                    className="group block p-2 rounded-lg hover:bg-[#23790a]/5 transition-colors"
                  >
                    <span className="font-semibold text-xs text-[#0f172a] group-hover:text-[#23790a] transition-colors block leading-snug">
                      {item.name}
                    </span>
                    <span className="text-[10px] text-slate-500 block mt-0.5 line-clamp-1">
                      {item.shortDesc}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Col 4: Featured Capability & Direct Links */}
            <div className="col-span-3 bg-slate-50 p-5 rounded-xl border border-slate-200 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold tracking-widest text-[#063772] uppercase block mb-1.5 flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-yellow-500" />
                  DIRECT OEM SOLUTIONS
                </span>
                <h4 className="font-bold text-sm text-[#0f172a] mb-2 leading-snug">
                  Transformers & Field Services
                </h4>
                <p className="text-xs text-slate-600 mb-4 leading-relaxed font-normal">
                  Custom voltage ratios, vacuum casting, routine loss testing, and site commissioning up to 5 MVA.
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-200">
                  <Link
                    href="/products-services"
                    onClick={onClose}
                    className="flex items-center justify-between text-xs font-bold text-[#063772] hover:underline"
                  >
                    <span>Combined Catalog</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    href="/products"
                    onClick={onClose}
                    className="flex items-center justify-between text-xs font-bold text-slate-700 hover:text-[#063772]"
                  >
                    <span>All 14 Products</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    href="/services"
                    onClick={onClose}
                    className="flex items-center justify-between text-xs font-bold text-slate-700 hover:text-[#23790a]"
                  >
                    <span>Field Services</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              <div className="pt-4 mt-2">
                <Link
                  href="/contact"
                  onClick={onClose}
                  className="w-full py-2 px-3 bg-[#063772] hover:bg-[#042956] text-white text-[11px] font-bold uppercase tracking-wider rounded-lg flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Request Custom Quote</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* TAB: Industries */}
        {activeTab === 'industries' && (
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-8 grid grid-cols-2 gap-6">
              {industries.map((item) => (
                <Link
                  key={item.id}
                  href={`/industries#${item.slug}`}
                  onClick={onClose}
                  className="group p-3 border border-transparent hover:border-[#063772]/20 hover:bg-[#063772]/5 transition-all duration-200 rounded-lg"
                >
                  <div className="flex items-center gap-3 mb-1">
                    <div className="w-7 h-7 rounded bg-[#063772]/10 text-[#063772] flex items-center justify-center font-bold text-xs">
                      <Factory className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-semibold text-sm text-[#0f172a] group-hover:text-[#063772] transition-colors">
                      {item.name}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 line-clamp-2 pl-10 font-normal">
                    {item.desc}
                  </p>
                </Link>
              ))}
            </div>

            <div className="col-span-4 bg-slate-50 p-6 border border-slate-200 rounded-xl flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold tracking-widest text-[#063772] uppercase block mb-2">
                  SECTOR SOLUTIONS
                </span>
                <h4 className="font-bold text-base text-[#0f172a] mb-2">
                  Engineered Power Distribution
                </h4>
                <p className="text-xs text-slate-600 mb-4 leading-relaxed font-normal">
                  Serving data centres, commercial towers, solar projects, utilities, hospitals, and heavy industrial facilities across India and internationally.
                </p>
              </div>
              <Link
                href="/industries"
                onClick={onClose}
                className="inline-flex items-center gap-2 text-xs font-bold text-[#063772] uppercase tracking-wider hover:gap-3 transition-all"
              >
                View Industry Matrix <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        )}

        {/* TAB: Our Resources (New dropdown: Blog, Event, Our Team, Case Studies) */}
        {activeTab === 'resources' && (
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-8 grid grid-cols-2 gap-4">
              {/* Resource 1: Blog */}
              <Link
                href="/blog"
                onClick={onClose}
                className="group p-4 border border-slate-200 hover:border-[#063772] hover:bg-slate-50 rounded-xl transition-all duration-200 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-[#063772]/10 text-[#063772] flex items-center justify-center shrink-0 group-hover:bg-[#063772] group-hover:text-white transition-colors">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-[#0f172a] group-hover:text-[#063772] transition-colors">
                      Blog & Insights
                    </span>
                    <span className="text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-blue-100 text-[#063772]">
                      Articles
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal">
                    Technical whitepapers, transformer loss guides, ECBC efficiency norms, and updates.
                  </p>
                </div>
              </Link>

              {/* Resource 2: Events */}
              <Link
                href="/events"
                onClick={onClose}
                className="group p-4 border border-slate-200 hover:border-[#063772] hover:bg-slate-50 rounded-xl transition-all duration-200 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-100 text-[#23790a] flex items-center justify-center shrink-0 group-hover:bg-[#23790a] group-hover:text-white transition-colors">
                  <Calendar className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-[#0f172a] group-hover:text-[#23790a] transition-colors">
                      Events & Expos
                    </span>
                    <span className="text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-emerald-100 text-[#23790a]">
                      Exhibitions
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal">
                    Elecrama showcase, international power trade summits, technical seminars, and client meets.
                  </p>
                </div>
              </Link>

              {/* Resource 3: Our Team */}
              <Link
                href="/leadership"
                onClick={onClose}
                className="group p-4 border border-slate-200 hover:border-[#063772] hover:bg-slate-50 rounded-xl transition-all duration-200 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0 group-hover:bg-indigo-700 group-hover:text-white transition-colors">
                  <Users className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-[#0f172a] group-hover:text-[#063772] transition-colors">
                      Our Team
                    </span>
                    <span className="text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-indigo-100 text-indigo-700">
                      Leadership
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal">
                    Meet visionary leaders, high-voltage transformer design engineers, and technical directors.
                  </p>
                </div>
              </Link>

              {/* Resource 4: Case Studies */}
              <Link
                href="/case-studies"
                onClick={onClose}
                className="group p-4 border border-slate-200 hover:border-[#063772] hover:bg-slate-50 rounded-xl transition-all duration-200 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 group-hover:bg-amber-700 group-hover:text-white transition-colors">
                  <Award className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-[#0f172a] group-hover:text-amber-700 transition-colors">
                      Case Studies
                    </span>
                    <span className="text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-amber-100 text-amber-800">
                      Projects
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal">
                    Field-proven grid installations, solar park feed-in substations, and industrial deployments.
                  </p>
                </div>
              </Link>
            </div>

            {/* Col 2: Resource Spotlight */}
            <div className="col-span-4 bg-slate-50 p-6 border border-slate-200 rounded-xl flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold tracking-widest text-[#063772] uppercase block mb-2">
                  KNOWLEDGE & COMPLIANCE
                </span>
                <h4 className="font-bold text-base text-[#0f172a] mb-2">
                  Technical Documentation
                </h4>
                <p className="text-xs text-slate-600 mb-4 leading-relaxed font-normal">
                  All equipment adheres to IS 1180, IS 2026, and IEC 60076 standards with CPRI / ERDA type testing and BIS marking certifications.
                </p>
              </div>

              <div className="pt-2 border-t border-slate-200 space-y-2">
                <Link
                  href="/infrastructure"
                  onClick={onClose}
                  className="flex items-center justify-between text-xs font-bold text-slate-700 hover:text-[#063772]"
                >
                  <span>Factory Infrastructure</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/contact"
                  onClick={onClose}
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#063772] uppercase tracking-wider hover:gap-3 transition-all pt-1"
                >
                  Technical Desk RFQ <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
