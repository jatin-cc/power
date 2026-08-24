'use client';

import { useState } from 'react';
import SectionHeading from '@/components/SectionHeading';
import CTAButton from '@/components/CTAButton';
import { products } from '@/data/products';
import { services } from '@/data/services';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Zap, Shield } from 'lucide-react';

export default function ProductsServicesPage() {
  const [tab, setTab] = useState('products'); // 'products' | 'services'

  return (
    <main className="pt-32 pb-24 bg-white text-[#0f172a]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl space-y-4 mb-12">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#0052cc]">
            ENGINEERING CATALOG
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0f172a]">
            Transformers & Field Services Catalog
          </h1>
          <p className="text-base text-slate-600 leading-relaxed font-normal">
            Explore our complete range of high-voltage transmission transformers, distribution units, custom arc furnace transformers, ester fluid options, and specialized diagnostic services.
          </p>
        </div>

        {/* Filter Tab Switcher */}
        <div className="flex items-center gap-4 mb-12 border-b border-slate-200 pb-4">
          <button
            onClick={() => setTab('products')}
            className={`px-6 py-3 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              tab === 'products'
                ? 'bg-[#0052cc] text-white shadow-md shadow-[#0052cc]/15'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Transformer Products ({products.length})
          </button>
          <button
            onClick={() => setTab('services')}
            className={`px-6 py-3 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              tab === 'services'
                ? 'bg-[#0052cc] text-white shadow-md shadow-[#0052cc]/15'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Field & Diagnostic Services ({services.length})
          </button>
        </div>

        {/* Tab 1: Products Grid */}
        {tab === 'products' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((p) => (
              <div
                key={p.id}
                className="bg-slate-50 border border-slate-200 p-8 flex flex-col justify-between hover:border-[#0052cc] transition-all shadow-sm"
              >
                <div className="space-y-4">
                  <span className="text-[10px] font-bold text-[#0052cc] uppercase tracking-widest bg-[#0052cc]/10 px-2.5 py-0.5">
                    {p.category}
                  </span>
                  <h3 className="text-xl font-extrabold text-[#0f172a]">{p.name}</h3>
                  <div className="text-xs font-bold text-[#0052cc] flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5" />
                    <span>CAPACITY: {p.capacity}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {p.shortDesc}
                  </p>
                  <ul className="space-y-2 pt-3 border-t border-slate-200 text-xs text-slate-700 font-medium">
                    {p.features.slice(0, 3).map((f, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0052cc] shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200">
                  <CTAButton href={`/products/${p.slug}`} size="sm" variant="primary" className="w-full">
                    View Specifications & Specs
                  </CTAButton>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Services Grid */}
        {tab === 'services' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((s) => (
              <div
                key={s.id}
                className="bg-slate-50 border border-slate-200 p-8 flex flex-col justify-between hover:border-[#0052cc] transition-all shadow-sm"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-[#0052cc]/10 text-[#0052cc] flex items-center justify-center font-bold">
                      <Shield className="w-4 h-4" />
                    </div>
                    <h3 className="text-xl font-extrabold text-[#0f172a]">{s.name}</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {s.fullDesc}
                  </p>

                  <div className="pt-3 border-t border-slate-200 space-y-2">
                    <span className="text-[10px] font-bold tracking-widest text-[#0052cc] uppercase block">
                      KEY DELIVERABLES
                    </span>
                    {s.benefits.slice(0, 3).map((b, bIdx) => (
                      <div key={bIdx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0052cc] shrink-0" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200">
                  <CTAButton href={`/services/${s.slug}`} size="sm" variant="primary" className="w-full">
                    Service Process Breakdown
                  </CTAButton>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
