'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { X, ChevronDown, ArrowRight, Zap, Phone, Mail } from 'lucide-react';
import gsap from 'gsap';
import { products } from '@/data/products';
import { services } from '@/data/services';

export default function MobileMenu({ isOpen, onClose }) {
  const menuRef = useRef(null);
  const [expandedSection, setExpandedSection] = useState(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      gsap.fromTo(
        menuRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.35, ease: 'power3.out' }
      );
      gsap.fromTo(
        '.mobile-nav-item',
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.4, stagger: 0.05, ease: 'power2.out', delay: 0.1 }
      );
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div
      ref={menuRef}
      className="fixed inset-0 bg-white z-50 overflow-y-auto flex flex-col justify-between p-6 text-[#0f172a]"
    >
      {/* Header Bar */}
      <div className="flex items-center justify-between pb-6 border-b border-slate-200">
        <Link href="/" onClick={onClose} className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#0052cc] flex items-center justify-center text-white font-bold text-lg">
            V
          </div>
          <span className="font-bold text-lg tracking-wider uppercase text-[#0f172a]">
            VORTEX <span className="text-[#0052cc] text-xs font-semibold block">POWER SYSTEMS</span>
          </span>
        </Link>

        <button
          onClick={onClose}
          className="w-10 h-10 rounded border border-slate-200 flex items-center justify-center text-slate-700 hover:border-[#0052cc] hover:text-[#0052cc] transition-colors"
          aria-label="Close menu"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Links List */}
      <div className="py-8 flex-1 space-y-4">
        <div className="mobile-nav-item border-b border-slate-100 pb-3">
          <Link
            href="/"
            onClick={onClose}
            className="text-xl font-bold text-[#0f172a] hover:text-[#0052cc] transition-colors block"
          >
            Home
          </Link>
        </div>

        {/* Products Accordion */}
        <div className="mobile-nav-item border-b border-slate-100 pb-3">
          <button
            onClick={() => toggleSection('products')}
            className="w-full flex items-center justify-between text-xl font-bold text-[#0f172a] py-1"
          >
            <span>Products</span>
            <ChevronDown
              className={`w-5 h-5 text-[#0052cc] transition-transform duration-300 ${
                expandedSection === 'products' ? 'rotate-180' : ''
              }`}
            />
          </button>
          {expandedSection === 'products' && (
            <div className="mt-3 pl-4 space-y-2 border-l-2 border-[#0052cc]/20">
              {products.map((p) => (
                <Link
                  key={p.id}
                  href={`/products/${p.slug}`}
                  onClick={onClose}
                  className="block text-sm font-medium text-slate-700 hover:text-[#0052cc] py-1"
                >
                  {p.name}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Services Accordion */}
        <div className="mobile-nav-item border-b border-slate-100 pb-3">
          <button
            onClick={() => toggleSection('services')}
            className="w-full flex items-center justify-between text-xl font-bold text-[#0f172a] py-1"
          >
            <span>Services</span>
            <ChevronDown
              className={`w-5 h-5 text-[#0052cc] transition-transform duration-300 ${
                expandedSection === 'services' ? 'rotate-180' : ''
              }`}
            />
          </button>
          {expandedSection === 'services' && (
            <div className="mt-3 pl-4 space-y-2 border-l-2 border-[#0052cc]/20">
              {services.map((s) => (
                <Link
                  key={s.id}
                  href={`/services/${s.slug}`}
                  onClick={onClose}
                  className="block text-sm font-medium text-slate-700 hover:text-[#0052cc] py-1"
                >
                  {s.name}
                </Link>
              ))}
            </div>
          )}
        </div>

        <div className="mobile-nav-item border-b border-slate-100 pb-3">
          <Link
            href="/infrastructure"
            onClick={onClose}
            className="text-xl font-bold text-[#0f172a] hover:text-[#0052cc] transition-colors block"
          >
            Infrastructure
          </Link>
        </div>

        <div className="mobile-nav-item border-b border-slate-100 pb-3">
          <Link
            href="/industries"
            onClick={onClose}
            className="text-xl font-bold text-[#0f172a] hover:text-[#0052cc] transition-colors block"
          >
            Industries
          </Link>
        </div>

        <div className="mobile-nav-item border-b border-slate-100 pb-3">
          <Link
            href="/blog"
            onClick={onClose}
            className="text-xl font-bold text-[#0f172a] hover:text-[#0052cc] transition-colors block"
          >
            Blog & Insights
          </Link>
        </div>

        <div className="mobile-nav-item border-b border-slate-100 pb-3">
          <Link
            href="/about"
            onClick={onClose}
            className="text-xl font-bold text-[#0f172a] hover:text-[#0052cc] transition-colors block"
          >
            Company
          </Link>
        </div>

        <div className="mobile-nav-item pb-3">
          <Link
            href="/contact"
            onClick={onClose}
            className="text-xl font-bold text-[#0f172a] hover:text-[#0052cc] transition-colors block"
          >
            Contact & RFQ
          </Link>
        </div>
      </div>

      {/* Bottom Contact Shortcut & CTA */}
      <div className="mobile-nav-item pt-6 border-t border-slate-200 space-y-4">
        <div className="flex flex-col gap-2 text-xs text-slate-600 font-medium">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-[#0052cc]" />
            <span>+1 (800) 555-VOLT</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-[#0052cc]" />
            <span>corporate@vortexpowersystems.com</span>
          </div>
        </div>

        <Link
          href="/contact"
          onClick={onClose}
          className="w-full bg-[#0052cc] text-white font-bold text-sm tracking-wider uppercase py-3.5 px-6 flex items-center justify-center gap-2 hover:bg-[#0041a3] transition-colors"
        >
          <span>Request Quote</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
