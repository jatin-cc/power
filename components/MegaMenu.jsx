'use client';

import Link from 'next/link';
import { ArrowRight, Zap, Shield, Cpu, Factory, Globe } from 'lucide-react';
import { products } from '@/data/products';
import { services } from '@/data/services';
import { industries } from '@/data/industries';

export default function MegaMenu({ activeTab, onClose }) {
  if (!activeTab) return null;

  return (
    <div
      onMouseLeave={onClose}
      className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xl shadow-slate-900/5 transition-all duration-300 z-50 text-[#0f172a]"
    >
      <div className="max-w-7xl mx-auto px-6 py-8">
        {activeTab === 'products' && (
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-8 grid grid-cols-2 gap-6">
              {products.map((item) => (
                <Link
                  key={item.id}
                  href={`/products/${item.slug}`}
                  onClick={onClose}
                  className="group p-3 border border-transparent hover:border-[#0052cc]/20 hover:bg-[#0052cc]/5 transition-all duration-200"
                >
                  <div className="flex items-center gap-3 mb-1">
                    <div className="w-7 h-7 rounded bg-[#0052cc]/10 text-[#0052cc] flex items-center justify-center font-bold text-xs">
                      <Zap className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-semibold text-sm text-[#0f172a] group-hover:text-[#0052cc] transition-colors">
                      {item.name}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 line-clamp-2 pl-10">
                    {item.shortDesc}
                  </p>
                </Link>
              ))}
            </div>

            <div className="col-span-4 bg-slate-50 p-6 border border-slate-200 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold tracking-widest text-[#0052cc] uppercase block mb-2">
                  Featured Product
                </span>
                <h4 className="font-bold text-base text-[#0f172a] mb-2">
                  500 MVA EHV Power Transformer
                </h4>
                <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                  Ultra-high-voltage step-up transmission units engineered for grid resilience and sub-55 dB acoustic sound dampening.
                </p>
              </div>
              <Link
                href="/products-services"
                onClick={onClose}
                className="inline-flex items-center gap-2 text-xs font-bold text-[#0052cc] uppercase tracking-wider hover:gap-3 transition-all"
              >
                Explore Full Catalog <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        )}

        {activeTab === 'services' && (
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-8 grid grid-cols-2 gap-6">
              {services.map((item) => (
                <Link
                  key={item.id}
                  href={`/services/${item.slug}`}
                  onClick={onClose}
                  className="group p-3 border border-transparent hover:border-[#0052cc]/20 hover:bg-[#0052cc]/5 transition-all duration-200"
                >
                  <div className="flex items-center gap-3 mb-1">
                    <div className="w-7 h-7 rounded bg-[#0052cc]/10 text-[#0052cc] flex items-center justify-center font-bold text-xs">
                      <Shield className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-semibold text-sm text-[#0f172a] group-hover:text-[#0052cc] transition-colors">
                      {item.name}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 line-clamp-2 pl-10">
                    {item.shortDesc}
                  </p>
                </Link>
              ))}
            </div>

            <div className="col-span-4 bg-slate-50 p-6 border border-slate-200 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold tracking-widest text-[#0052cc] uppercase block mb-2">
                  24/7 Field Support
                </span>
                <h4 className="font-bold text-base text-[#0f172a] mb-2">
                  Emergency Diagnostic Response
                </h4>
                <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                  Mobile oil vacuum degasification and high-precision SFRA dielectric condition assessment available worldwide.
                </p>
              </div>
              <Link
                href="/contact"
                onClick={onClose}
                className="inline-flex items-center gap-2 text-xs font-bold text-[#0052cc] uppercase tracking-wider hover:gap-3 transition-all"
              >
                Request Immediate Support <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        )}

        {activeTab === 'industries' && (
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-8 grid grid-cols-2 gap-6">
              {industries.map((item) => (
                <Link
                  key={item.id}
                  href={`/industries#${item.slug}`}
                  onClick={onClose}
                  className="group p-3 border border-transparent hover:border-[#0052cc]/20 hover:bg-[#0052cc]/5 transition-all duration-200"
                >
                  <div className="flex items-center gap-3 mb-1">
                    <div className="w-7 h-7 rounded bg-[#0052cc]/10 text-[#0052cc] flex items-center justify-center font-bold text-xs">
                      <Factory className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-semibold text-sm text-[#0f172a] group-hover:text-[#0052cc] transition-colors">
                      {item.name}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 line-clamp-2 pl-10">
                    {item.desc}
                  </p>
                </Link>
              ))}
            </div>

            <div className="col-span-4 bg-slate-50 p-6 border border-slate-200 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold tracking-widest text-[#0052cc] uppercase block mb-2">
                  Sector Versatility
                </span>
                <h4 className="font-bold text-base text-[#0f172a] mb-2">
                  Tailored Grid Solutions
                </h4>
                <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                  Custom harmonic shielding for arc furnaces, traction substations, and green solar/wind offshore platforms.
                </p>
              </div>
              <Link
                href="/industries"
                onClick={onClose}
                className="inline-flex items-center gap-2 text-xs font-bold text-[#0052cc] uppercase tracking-wider hover:gap-3 transition-all"
              >
                View Industry Matrix <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        )}

        {activeTab === 'company' && (
          <div className="grid grid-cols-4 gap-6">
            <Link
              href="/about"
              onClick={onClose}
              className="p-4 border border-slate-200 hover:border-[#0052cc] hover:bg-[#0052cc]/5 transition-all"
            >
              <h4 className="font-bold text-sm text-[#0f172a] mb-1">About Vortex</h4>
              <p className="text-xs text-slate-500">Corporate story, mission, vision, and core engineering philosophy.</p>
            </Link>
            <Link
              href="/infrastructure"
              onClick={onClose}
              className="p-4 border border-slate-200 hover:border-[#0052cc] hover:bg-[#0052cc]/5 transition-all"
            >
              <h4 className="font-bold text-sm text-[#0f172a] mb-1">Infrastructure</h4>
              <p className="text-xs text-slate-500">ISO 17025 UHV Faraday labs, VPD dry chambers, and plant capacity.</p>
            </Link>
            <Link
              href="/leadership"
              onClick={onClose}
              className="p-4 border border-slate-200 hover:border-[#0052cc] hover:bg-[#0052cc]/5 transition-all"
            >
              <h4 className="font-bold text-sm text-[#0f172a] mb-1">Executive Leadership</h4>
              <p className="text-xs text-slate-500">Board members, engineering doctorate chairs, and executive team.</p>
            </Link>
            <Link
              href="/sustainability"
              onClick={onClose}
              className="p-4 border border-slate-200 hover:border-[#0052cc] hover:bg-[#0052cc]/5 transition-all"
            >
              <h4 className="font-bold text-sm text-[#0f172a] mb-1">Sustainability & ESG</h4>
              <p className="text-xs text-slate-500">Ester fluid eco-design, lower carbon footprint, and fire safety.</p>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
