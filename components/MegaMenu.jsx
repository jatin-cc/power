'use client';

import Link from 'next/link';
import { ArrowRight, Zap, Shield, Factory } from 'lucide-react';
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
        {activeTab === 'products' && (
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-8 grid grid-cols-2 gap-6">
              {products.map((item) => (
                <Link
                  key={item.id}
                  href={`/products/${item.slug}`}
                  onClick={onClose}
                  className="group p-3 border border-transparent hover:border-[#063772]/20 hover:bg-[#063772]/5 transition-all duration-200"
                >
                  <div className="flex items-center gap-3 mb-1">
                    <div className="w-7 h-7 rounded bg-[#063772]/10 text-[#063772] flex items-center justify-center font-bold text-xs">
                      <Zap className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-semibold text-sm text-[#0f172a] group-hover:text-[#063772] transition-colors">
                      {item.name}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 line-clamp-2 pl-10 font-normal">
                    {item.shortDesc}
                  </p>
                </Link>
              ))}
            </div>

            <div className="col-span-4 bg-slate-50 p-6 border border-slate-200 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold tracking-widest text-[#063772] uppercase block mb-2">
                  FEATURED CAPABILITY
                </span>
                <h4 className="font-bold text-base text-[#0f172a] mb-2">
                  Cast Resin Dry-Type & Oil-Filled up to 5 MVA
                </h4>
                <p className="text-xs text-slate-600 mb-4 leading-relaxed font-normal">
                  BIS Licensed and ZED Gold Certified manufacturing in 11 kV and 33 kV voltage classes tailored for industrial and utility installations.
                </p>
              </div>
              <Link
                href="/products-services"
                onClick={onClose}
                className="inline-flex items-center gap-2 text-xs font-bold text-[#063772] uppercase tracking-wider hover:gap-3 transition-all"
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
                  className="group p-3 border border-transparent hover:border-[#23790a]/20 hover:bg-[#23790a]/5 transition-all duration-200"
                >
                  <div className="flex items-center gap-3 mb-1">
                    <div className="w-7 h-7 rounded bg-[#23790a]/10 text-[#23790a] flex items-center justify-center font-bold text-xs">
                      <Shield className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-semibold text-sm text-[#0f172a] group-hover:text-[#23790a] transition-colors">
                      {item.name}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 line-clamp-2 pl-10 font-normal">
                    {item.shortDesc}
                  </p>
                </Link>
              ))}
            </div>

            <div className="col-span-4 bg-slate-50 p-6 border border-slate-200 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold tracking-widest text-[#23790a] uppercase block mb-2">
                  PROJECT CUSTOMIZATION
                </span>
                <h4 className="font-bold text-base text-[#0f172a] mb-2">
                  Technical Support & Site Commissioning
                </h4>
                <p className="text-xs text-slate-600 mb-4 leading-relaxed font-normal">
                  Our engineering team provides project-specific customization, factory routine test documentation, and site energization guidance.
                </p>
              </div>
              <Link
                href="/contact"
                onClick={onClose}
                className="inline-flex items-center gap-2 text-xs font-bold text-[#23790a] uppercase tracking-wider hover:gap-3 transition-all"
              >
                Request Technical Quote <ArrowRight className="w-3.5 h-3.5" />
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
                  className="group p-3 border border-transparent hover:border-[#063772]/20 hover:bg-[#063772]/5 transition-all duration-200"
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

            <div className="col-span-4 bg-slate-50 p-6 border border-slate-200 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold tracking-widest text-[#063772] uppercase block mb-2">
                  SECTOR SOLUTIONS
                </span>
                <h4 className="font-bold text-base text-[#0f172a] mb-2">
                  Engineered Power Distribution
                </h4>
                <p className="text-xs text-slate-600 mb-4 leading-relaxed font-normal">
                  Serving data centres, commercial developments, solar projects, utilities, hospitals, and heavy industrial facilities across India and internationally.
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

        {activeTab === 'company' && (
          <div className="grid grid-cols-3 gap-6">
            <Link
              href="/about"
              onClick={onClose}
              className="p-4 border border-slate-200 hover:border-[#063772] hover:bg-[#063772]/5 transition-all"
            >
              <h4 className="font-bold text-sm text-[#0f172a] mb-1">About G Sons Power</h4>
              <p className="text-xs text-slate-500">Company story, mission, and G Sons Group heritage.</p>
            </Link>
            <Link
              href="/infrastructure"
              onClick={onClose}
              className="p-4 border border-slate-200 hover:border-[#063772] hover:bg-[#063772]/5 transition-all"
            >
              <h4 className="font-bold text-sm text-[#0f172a] mb-1">Infrastructure</h4>
              <p className="text-xs text-slate-500">Vacuum casting ovens, winding bays, and routine testing labs.</p>
            </Link>
            <Link
              href="/contact"
              onClick={onClose}
              className="p-4 border border-slate-200 hover:border-[#063772] hover:bg-[#063772]/5 transition-all"
            >
              <h4 className="font-bold text-sm text-[#0f172a] mb-1">Contact & RFQ</h4>
              <p className="text-xs text-slate-500">Technical quote inquiries and factory sales contacts.</p>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
