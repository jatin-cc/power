'use client';

import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  X,
  ChevronDown,
  ArrowRight,
  Phone,
  Mail,
  Zap,
  Wrench,
  Boxes,
  BookOpen,
  Calendar,
  Users,
  Award,
  Layers,
  Building2,
  Cpu,
  ShieldCheck,
  Flame,
  SunMedium,
  CheckCircle2,
} from 'lucide-react';
import { products } from '@/data/products';
import { services } from '@/data/services';

export default function MobileMenu({ isOpen, onClose }) {
  const [mounted, setMounted] = useState(false);
  const [expandedSection, setExpandedSection] = useState(null);
  const [activeCatalogSubtab, setActiveCatalogSubtab] = useState('products');
  const pathname = usePathname();
  const prevPathnameRef = useRef(pathname);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close menu ONLY when pathname actually changes (route navigation)
  useEffect(() => {
    if (prevPathnameRef.current !== pathname) {
      prevPathnameRef.current = pathname;
      onClose();
    }
  }, [pathname, onClose]);

  // Lock body scroll and listen for ESC key
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!mounted || !isOpen) return null;

  const toggleSection = (section) => {
    setExpandedSection((prev) => (prev === section ? null : section));
  };

  const menuContent = (
    <div className="fixed inset-0 z-[99999] flex justify-end">
      {/* Backdrop Overlay with blur */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity duration-300 animate-in fade-in"
        aria-hidden="true"
      />

      {/* Slide-over Drawer Panel */}
      <div
        data-lenis-prevent="true"
        onClick={(e) => e.stopPropagation()}
        onWheel={(e) => e.stopPropagation()}
        className="relative w-full max-w-md h-full bg-white text-[#0f172a] shadow-2xl flex flex-col z-10 transition-transform duration-300 animate-in slide-in-from-right"
      >
        {/* Top Header Bar */}
        <div className="h-16 px-5 border-b border-slate-200 flex items-center justify-between bg-white shrink-0">
          <Link href="/" onClick={onClose} className="flex items-center gap-2.5">
            <img
              src="/logo.jpeg"
              alt="G Sons Power Transformers"
              className="h-9 w-auto object-contain"
            />
          </Link>

          <button
            type="button"
            onClick={onClose}
            className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-slate-100 hover:text-[#063772] transition-colors cursor-pointer"
            aria-label="Close navigation drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Navigation Body */}
        <div
          data-lenis-prevent="true"
          onWheel={(e) => e.stopPropagation()}
          className="flex-1 overflow-y-auto px-5 py-5 space-y-1.5 overscroll-contain"
        >
          {/* 1. About */}
          <div className="border-b border-slate-100 pb-1">
            <Link
              href="/about"
              onClick={onClose}
              className={`flex items-center justify-between py-3 px-2 rounded-lg text-sm font-bold uppercase tracking-wider transition-colors ${
                pathname === '/about'
                  ? 'bg-blue-50 text-[#063772]'
                  : 'text-[#0f172a] hover:bg-slate-50 hover:text-[#063772]'
              }`}
            >
              <span>About Us</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </Link>
          </div>

          {/* 2. Product & Service* (Interactive Accordion) */}
          <div className="border-b border-slate-100 pb-1">
            <button
              type="button"
              onClick={() => toggleSection('products-services')}
              className={`w-full py-3 px-2 rounded-lg flex items-center justify-between text-sm font-bold uppercase tracking-wider transition-colors cursor-pointer text-left ${
                expandedSection === 'products-services' ||
                pathname.startsWith('/products') ||
                pathname.startsWith('/services')
                  ? 'bg-blue-50 text-[#063772]'
                  : 'text-[#0f172a] hover:bg-slate-50 hover:text-[#063772]'
              }`}
            >
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#063772]" />
                <span>Product &amp; Service*</span>
              </div>
              <ChevronDown
                className={`w-4 h-4 text-[#063772] transition-transform duration-200 ${
                  expandedSection === 'products-services' ? 'rotate-180' : ''
                }`}
              />
            </button>

            {expandedSection === 'products-services' && (
              <div className="mt-2 mb-2 p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
                {/* Mini Subtab Switcher */}
                <div className="grid grid-cols-2 p-1 bg-white rounded-lg border border-slate-200 text-xs font-bold">
                  <button
                    type="button"
                    onClick={() => setActiveCatalogSubtab('products')}
                    className={`py-1.5 rounded-md transition-colors ${
                      activeCatalogSubtab === 'products'
                        ? 'bg-[#063772] text-white shadow-2xs'
                        : 'text-slate-600 hover:text-[#063772]'
                    }`}
                  >
                    Products (14)
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveCatalogSubtab('services')}
                    className={`py-1.5 rounded-md transition-colors ${
                      activeCatalogSubtab === 'services'
                        ? 'bg-[#23790a] text-white shadow-2xs'
                        : 'text-slate-600 hover:text-[#23790a]'
                    }`}
                  >
                    Services (7)
                  </button>
                </div>

                {/* Subtab Content: Products */}
                {activeCatalogSubtab === 'products' && (
                  <div
                    data-lenis-prevent="true"
                    onWheel={(e) => e.stopPropagation()}
                    className="space-y-3 max-h-[320px] overflow-y-auto pr-1 overscroll-contain"
                  >
                    {/* Category: Transformers */}
                    <div>
                      <span className="text-[10px] font-extrabold text-[#063772] uppercase tracking-wider block mb-1">
                        Transformers
                      </span>
                      <div className="space-y-1">
                        {products
                          .filter((p) => p.categorySlug === 'transformers')
                          .map((p) => (
                            <Link
                              key={p.id}
                              href={`/products/${p.slug}`}
                              onClick={onClose}
                              className="block p-2 rounded-md bg-white border border-slate-200/80 hover:border-[#063772] transition-all"
                            >
                              <span className="block text-xs font-bold text-[#0f172a] leading-tight">
                                {p.name}
                              </span>
                              <span className="block text-[10px] text-slate-500 mt-0.5">
                                {p.capacity || 'Up to 33 kV'}
                              </span>
                            </Link>
                          ))}
                      </div>
                    </div>

                    {/* Category: Compact Substations & Panels */}
                    <div>
                      <span className="text-[10px] font-extrabold text-[#063772] uppercase tracking-wider block mb-1">
                        Substations &amp; Panels
                      </span>
                      <div className="space-y-1">
                        {products
                          .filter(
                            (p) =>
                              p.categorySlug === 'compact-substations' ||
                              p.categorySlug === 'ht-panels' ||
                              p.categorySlug === 'lt-panels'
                          )
                          .map((p) => (
                            <Link
                              key={p.id}
                              href={`/products/${p.slug}`}
                              onClick={onClose}
                              className="block p-2 rounded-md bg-white border border-slate-200/80 hover:border-[#063772] transition-all"
                            >
                              <span className="block text-xs font-bold text-[#0f172a] leading-tight">
                                {p.name}
                              </span>
                              <span className="block text-[10px] text-slate-500 mt-0.5">
                                {p.category}
                              </span>
                            </Link>
                          ))}
                      </div>
                    </div>

                    <Link
                      href="/products"
                      onClick={onClose}
                      className="block text-center py-2 px-3 bg-[#063772] text-white text-[11px] font-bold uppercase tracking-wider rounded-lg shadow-2xs hover:bg-[#042956]"
                    >
                      View All 14 Products Catalog &rarr;
                    </Link>
                  </div>
                )}

                {/* Subtab Content: Services */}
                {activeCatalogSubtab === 'services' && (
                  <div
                    data-lenis-prevent="true"
                    onWheel={(e) => e.stopPropagation()}
                    className="space-y-1.5 max-h-[320px] overflow-y-auto pr-1 overscroll-contain"
                  >
                    {services.map((s, idx) => (
                      <Link
                        key={s.id}
                        href={`/services/${s.slug}`}
                        onClick={onClose}
                        className="block p-2 rounded-md bg-white border border-slate-200/80 hover:border-[#23790a] transition-all"
                      >
                        <div className="flex items-center gap-1.5">
                          <span className="w-4 h-4 rounded-full bg-emerald-100 text-[#23790a] text-[9px] font-bold flex items-center justify-center shrink-0">
                            0{idx + 1}
                          </span>
                          <span className="block text-xs font-bold text-[#0f172a] leading-tight">
                            {s.name}
                          </span>
                        </div>
                        <span className="block text-[10px] text-slate-500 mt-1 line-clamp-1">
                          {s.shortDesc}
                        </span>
                      </Link>
                    ))}

                    <Link
                      href="/products-services"
                      onClick={onClose}
                      className="block text-center py-2 px-3 bg-[#23790a] text-white text-[11px] font-bold uppercase tracking-wider rounded-lg shadow-2xs hover:bg-[#1c6208]"
                    >
                      View All 7 Services Catalog &rarr;
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* 3. Infrastructure */}
          <div className="border-b border-slate-100 pb-1">
            <Link
              href="/infrastructure"
              onClick={onClose}
              className={`flex items-center justify-between py-3 px-2 rounded-lg text-sm font-bold uppercase tracking-wider transition-colors ${
                pathname === '/infrastructure'
                  ? 'bg-blue-50 text-[#063772]'
                  : 'text-[#0f172a] hover:bg-slate-50 hover:text-[#063772]'
              }`}
            >
              <span>Infrastructure</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </Link>
          </div>

          {/* 4. Industries */}
          <div className="border-b border-slate-100 pb-1">
            <Link
              href="/industries"
              onClick={onClose}
              className={`flex items-center justify-between py-3 px-2 rounded-lg text-sm font-bold uppercase tracking-wider transition-colors ${
                pathname === '/industries'
                  ? 'bg-blue-50 text-[#063772]'
                  : 'text-[#0f172a] hover:bg-slate-50 hover:text-[#063772]'
              }`}
            >
              <span>Industries</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </Link>
          </div>

          {/* 5. Our Resources* (Interactive Accordion) */}
          <div className="border-b border-slate-100 pb-1">
            <button
              type="button"
              onClick={() => toggleSection('resources')}
              className={`w-full py-3 px-2 rounded-lg flex items-center justify-between text-sm font-bold uppercase tracking-wider transition-colors cursor-pointer text-left ${
                expandedSection === 'resources' ||
                pathname === '/blog' ||
                pathname === '/events' ||
                pathname === '/leadership' ||
                pathname === '/case-studies'
                  ? 'bg-blue-50 text-[#063772]'
                  : 'text-[#0f172a] hover:bg-slate-50 hover:text-[#063772]'
              }`}
            >
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#063772]" />
                <span>Our Resources*</span>
              </div>
              <ChevronDown
                className={`w-4 h-4 text-[#063772] transition-transform duration-200 ${
                  expandedSection === 'resources' ? 'rotate-180' : ''
                }`}
              />
            </button>

            {expandedSection === 'resources' && (
              <div className="mt-2 mb-2 p-2 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                <Link
                  href="/blog"
                  onClick={onClose}
                  className="flex items-center justify-between p-2.5 rounded-lg bg-white border border-slate-200 hover:border-[#063772] transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded bg-blue-100 text-[#063772] flex items-center justify-center">
                      <BookOpen className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-[#0f172a]">Blog &amp; Insights</span>
                      <span className="block text-[10px] text-slate-500">Technical papers &amp; updates</span>
                    </div>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                </Link>

                <Link
                  href="/events"
                  onClick={onClose}
                  className="flex items-center justify-between p-2.5 rounded-lg bg-white border border-slate-200 hover:border-[#23790a] transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded bg-emerald-100 text-[#23790a] flex items-center justify-center">
                      <Calendar className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-[#0f172a]">Events &amp; Expos</span>
                      <span className="block text-[10px] text-slate-500">Conventions &amp; trade meets</span>
                    </div>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                </Link>

                <Link
                  href="/leadership"
                  onClick={onClose}
                  className="flex items-center justify-between p-2.5 rounded-lg bg-white border border-slate-200 hover:border-indigo-600 transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded bg-indigo-100 text-indigo-700 flex items-center justify-center">
                      <Users className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-[#0f172a]">Our Team</span>
                      <span className="block text-[10px] text-slate-500">Executive &amp; technical leadership</span>
                    </div>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                </Link>

                <Link
                  href="/case-studies"
                  onClick={onClose}
                  className="flex items-center justify-between p-2.5 rounded-lg bg-white border border-slate-200 hover:border-amber-600 transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded bg-amber-100 text-amber-800 flex items-center justify-center">
                      <Award className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-[#0f172a]">Case Studies</span>
                      <span className="block text-[10px] text-slate-500">Utility &amp; industrial installations</span>
                    </div>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                </Link>
              </div>
            )}
          </div>

          {/* 6. Contact */}
          <div className="pb-1">
            <Link
              href="/contact"
              onClick={onClose}
              className={`flex items-center justify-between py-3 px-2 rounded-lg text-sm font-bold uppercase tracking-wider transition-colors ${
                pathname === '/contact'
                  ? 'bg-blue-50 text-[#063772]'
                  : 'text-[#0f172a] hover:bg-slate-50 hover:text-[#063772]'
              }`}
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </Link>
          </div>
        </div>

        {/* Bottom Drawer Actions & Direct Contacts */}
        <div className="p-5 border-t border-slate-200 bg-slate-50 space-y-3.5 shrink-0">
          <div className="grid grid-cols-2 gap-2 text-xs">
            <a
              href="tel:+912717661500"
              className="flex items-center gap-1.5 p-2 bg-white rounded-lg border border-slate-200 text-slate-700 hover:text-[#063772] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#063772] shrink-0" />
              <span className="truncate font-semibold">+91 2717 661 500</span>
            </a>
            <a
              href="mailto:info@gsonspower.com"
              className="flex items-center gap-1.5 p-2 bg-white rounded-lg border border-slate-200 text-slate-700 hover:text-[#063772] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#063772] shrink-0" />
              <span className="truncate font-semibold">info@gsonspower.com</span>
            </a>
          </div>

          <Link
            href="/contact"
            onClick={onClose}
            className="w-full bg-[#063772] hover:bg-[#042956] text-white font-bold text-xs tracking-wider uppercase py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md active:scale-[0.98]"
          >
            <span>Get Technical Quote</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );

  return createPortal(menuContent, document.body);
}
