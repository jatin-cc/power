'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { products, productCategories } from '@/data/products';
import {
  Search,
  Zap,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  SlidersHorizontal,
  ArrowRight,
  Sparkles,
  Filter
} from 'lucide-react';

export default function ProductsCatalogView({ defaultCategory = 'all' }) {
  const [selectedCategory, setSelectedCategory] = useState(defaultCategory);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory =
        selectedCategory === 'all' || p.categorySlug === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.shortDesc.toLowerCase().includes(q) ||
        p.specifications.some(
          (s) =>
            s.parameter.toLowerCase().includes(q) ||
            s.specification.toLowerCase().includes(q)
        );

      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-[#fafbfc] text-[#0f172a] pt-28 pb-24">
      {/* Background Tech Grids */}
      <div className="fixed inset-0 bg-grid-pattern opacity-30 pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header Banner */}
        <div className="max-w-3xl space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80">
            <span className="w-2 h-2 rounded-full bg-[#063772] animate-pulse" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#063772]">
              Official Engineering Catalog
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0f172a] leading-tight">
            Power Transformers & Switchgear Systems
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Specializing in Oil-Filled & Dry-Type Transformers, Compact Substations, and engineered HT/LT panels up to 5 MVA in 11 kV & 33 kV voltage classes.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-sm mb-10 space-y-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by product name, specification, capacity, or voltage..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-[#0f172a] focus:outline-none focus:border-[#063772] focus:bg-white transition-all placeholder:text-slate-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Results Counter */}
            <div className="text-xs font-semibold text-slate-500 shrink-0 px-2">
              Showing <span className="text-[#063772] font-bold">{filteredProducts.length}</span> of {products.length} Products
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pt-2 border-t border-slate-100 no-scrollbar">
            {productCategories.map((cat) => {
              const isSelected = selectedCategory === cat.slug;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.slug)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 ${
                    isSelected
                      ? 'bg-[#063772] text-white shadow-xs'
                      : 'bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-[#063772]'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`px-1.5 py-0.5 rounded-full text-[10px] ${
                      isSelected
                        ? 'bg-white/20 text-white'
                        : 'bg-slate-200/70 text-slate-600'
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="p-16 text-center bg-white rounded-2xl border border-slate-200 shadow-xs">
            <Filter className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-[#0f172a]">No Products Found</h3>
            <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
              No matching products found for &quot;{searchQuery}&quot;. Try resetting your filters or search keywords.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 bg-[#063772] text-white text-xs font-bold rounded-lg cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((p) => (
              <div
                key={p.id}
                className="group bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:border-[#063772]/60 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Image Container with Badge */}
                  <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-[#0f172a]/90 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                      {p.category}
                    </div>

                    <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-xs text-[#063772] text-[10px] font-bold px-2.5 py-1 rounded-md shadow-xs flex items-center gap-1.5">
                      <Zap className="w-3 h-3 text-[#063772]" />
                      <span>{p.capacity}</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-3.5">
                    <h3 className="text-lg font-bold text-[#0f172a] group-hover:text-[#063772] transition-colors leading-snug">
                      {p.name}
                    </h3>

                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed font-normal">
                      {p.shortDesc}
                    </p>

                    {/* Top 3 Technical Specifications Preview */}
                    <div className="space-y-1.5 pt-3 border-t border-slate-100 text-[11px]">
                      {p.specifications.slice(0, 3).map((spec, sIdx) => (
                        <div key={sIdx} className="flex items-start justify-between gap-2 py-0.5">
                          <span className="text-slate-500 font-medium">{spec.parameter}:</span>
                          <span className="text-[#0f172a] font-semibold text-right line-clamp-1 max-w-[55%]">
                            {spec.specification}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="p-6 pt-0 mt-2">
                  <Link
                    href={`/products/${p.slug}`}
                    className="w-full py-2.5 px-4 bg-slate-50 group-hover:bg-[#063772] text-[#0f172a] group-hover:text-white border border-slate-200 group-hover:border-[#063772] font-bold text-xs uppercase tracking-wider rounded-xl flex items-center justify-between transition-all duration-200"
                  >
                    <span>View Specifications</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Technical Consultation Banner */}
        <div className="mt-16 p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-[#031f42] via-[#063772] to-[#0a2540] text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-xl">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-300">
              CUSTOM ENGINEERING CAPABILITIES
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold leading-tight">
              Require specific voltage taps, dual secondary windings, or custom foot-print?
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 font-normal leading-relaxed">
              Our engineering team configures transformers, compact substations, and HT/LT switchgear around site single-line diagrams, ambient constraints, and harmonic load cycles.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-[#031f42] font-bold text-xs uppercase tracking-wider transition-all shadow-md"
            >
              Get Technical Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
