'use client';

import { useState } from 'react';
import Link from 'next/link';
import { products, productCategories } from '@/data/products';
import SectionHeading from '@/components/SectionHeading';
import CTAButton from '@/components/CTAButton';
import { Zap, ChevronRight, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(p => p.categorySlug === activeCategory);

  return (
    <section id="products" className="py-24 bg-slate-50/70 border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="ENGINEERED PRODUCT PORTFOLIO"
            title="Our Power Transformers & Substations"
            subtitle="Engineered up to 5 MVA in 11 kV & 33 kV voltage classes. Built to approved single-line diagrams, ambient constraints, and national specifications."
            className="mb-0 max-w-3xl"
          />
          <CTAButton href="/products" size="md" variant="primary">
            View All Products ({products.length})
          </CTAButton>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {productCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.slug)}
              className={`px-4 py-2 text-xs font-bold rounded-lg uppercase tracking-wider whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                activeCategory === cat.slug
                  ? 'bg-[#063772] text-white shadow-md'
                  : 'bg-white border border-slate-200 text-slate-700 hover:border-[#063772]/50 hover:text-[#063772]'
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  activeCategory === cat.slug
                    ? 'bg-white/20 text-white'
                    : 'bg-slate-100 text-slate-500'
                }`}
              >
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((prod) => (
            <div
              key={prod.id}
              className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-[#063772] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Product Image Container */}
                <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#0f172a]/90 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                    {prod.category}
                  </div>
                </div>

                {/* Product Details */}
                <div className="p-6 space-y-4">
                  {/* Capacity Pill */}
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#063772] bg-[#063772]/10 px-2.5 py-1 rounded-md">
                    <Zap className="w-3.5 h-3.5" />
                    <span>{prod.capacity}</span>
                  </div>

                  <h3 className="text-lg font-bold text-[#0f172a] group-hover:text-[#063772] transition-colors leading-snug">
                    {prod.name}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed font-normal">
                    {prod.shortDesc}
                  </p>

                  {/* Key Highlights from Exact Document Specs */}
                  <div className="space-y-1.5 pt-3 border-t border-slate-100 text-xs text-slate-600">
                    {prod.specifications.slice(0, 3).map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-start justify-between gap-2 text-[11px]">
                        <span className="text-slate-500 font-medium">{spec.parameter}:</span>
                        <span className="text-[#0f172a] font-semibold text-right line-clamp-1 max-w-[60%]">
                          {spec.specification}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="p-6 pt-0 mt-2">
                <Link
                  href={`/products/${prod.slug}`}
                  className="w-full py-2.5 px-4 bg-slate-50 group-hover:bg-[#063772] text-[#0f172a] group-hover:text-white border border-slate-200 group-hover:border-[#063772] font-bold text-xs uppercase tracking-wider rounded-xl flex items-center justify-between transition-all duration-200"
                >
                  <span>Explore Specifications</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 p-8 bg-white border border-slate-200 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-base font-bold text-[#0f172a]">
              Need a Custom Voltage Ratio or Special Physical Footprint?
            </h4>
            <p className="text-xs text-slate-500">
              Our engineering team designs custom OLTC/OCTC tapping, dual-secondary windings, and weather-proof IP enclosures to project specifications.
            </p>
          </div>
          <CTAButton href="/contact" size="sm" variant="primary">
            Request Custom Sizing
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
