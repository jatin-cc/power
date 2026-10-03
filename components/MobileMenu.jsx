'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X, ChevronDown, ArrowRight, Phone, Mail, Zap, Wrench, ShieldCheck } from 'lucide-react';
import { products } from '@/data/products';
import { services } from '@/data/services';

export default function MobileMenu({ isOpen, onClose }) {
  const [mounted, setMounted] = useState(false);
  const [expandedSection, setExpandedSection] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close menu on route change
  useEffect(() => {
    if (isOpen) {
      onClose();
    }
  }, [pathname]);

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
    setExpandedSection(prev => prev === section ? null : section);
  };

  const menuContent = (
    <div className="fixed inset-0 z-[99999] flex flex-col bg-white text-[#0f172a] animate-in fade-in duration-200">
      {/* Top Header Bar */}
      <div className="h-16 px-5 border-b border-slate-200 flex items-center justify-between bg-white shrink-0">
        <Link href="/" onClick={onClose} className="flex items-center gap-2">
          <img
            src="/logo.jpeg"
            alt="G Sons Power Transformers"
            className="h-10 w-auto object-contain"
          />
        </Link>

        <button
          onClick={onClose}
          className="w-10 h-10 rounded border border-slate-200 flex items-center justify-center text-slate-700 hover:border-[#0052cc] hover:text-[#0052cc] hover:bg-slate-50 transition-colors cursor-pointer"
          aria-label="Close menu"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Scrollable Navigation Body */}
      <div className="flex-1 overflow-y-auto px-5 py-6 space-y-2">
        {/* Home */}
        <div className="border-b border-slate-100 pb-2">
          <Link
            href="/"
            onClick={onClose}
            className={`block py-2.5 text-base font-bold transition-colors ${
              pathname === '/' ? 'text-[#0052cc]' : 'text-[#0f172a] hover:text-[#0052cc]'
            }`}
          >
            Home
          </Link>
        </div>

        {/* Products Dropdown Accordion */}
        <div className="border-b border-slate-100 pb-2">
          <button
            onClick={() => toggleSection('products')}
            className="w-full py-2.5 flex items-center justify-between text-base font-bold text-[#0f172a] hover:text-[#0052cc] transition-colors cursor-pointer text-left"
          >
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#0052cc]" />
              <span>Products</span>
            </div>
            <ChevronDown
              className={`w-4 h-4 text-[#0052cc] transition-transform duration-200 ${
                expandedSection === 'products' ? 'rotate-180' : ''
              }`}
            />
          </button>

          {expandedSection === 'products' && (
            <div className="mt-1 pl-4 pb-2 space-y-2 border-l-2 border-[#0052cc]/20">
              <Link
                href="/products-services"
                onClick={onClose}
                className="block text-xs font-bold uppercase tracking-wider text-[#0052cc] py-1"
              >
                → View All Products Catalog
              </Link>
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

        {/* Services Dropdown Accordion */}
        <div className="border-b border-slate-100 pb-2">
          <button
            onClick={() => toggleSection('services')}
            className="w-full py-2.5 flex items-center justify-between text-base font-bold text-[#0f172a] hover:text-[#0052cc] transition-colors cursor-pointer text-left"
          >
            <div className="flex items-center gap-2">
              <Wrench className="w-4 h-4 text-[#0052cc]" />
              <span>Services</span>
            </div>
            <ChevronDown
              className={`w-4 h-4 text-[#0052cc] transition-transform duration-200 ${
                expandedSection === 'services' ? 'rotate-180' : ''
              }`}
            />
          </button>

          {expandedSection === 'services' && (
            <div className="mt-1 pl-4 pb-2 space-y-2 border-l-2 border-[#0052cc]/20">
              <Link
                href="/services"
                onClick={onClose}
                className="block text-xs font-bold uppercase tracking-wider text-[#0052cc] py-1"
              >
                → All Engineering Services
              </Link>
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

        {/* Infrastructure */}
        <div className="border-b border-slate-100 pb-2">
          <Link
            href="/infrastructure"
            onClick={onClose}
            className={`block py-2.5 text-base font-bold transition-colors ${
              pathname === '/infrastructure' ? 'text-[#0052cc]' : 'text-[#0f172a] hover:text-[#0052cc]'
            }`}
          >
            Infrastructure
          </Link>
        </div>

        {/* Industries */}
        <div className="border-b border-slate-100 pb-2">
          <Link
            href="/industries"
            onClick={onClose}
            className={`block py-2.5 text-base font-bold transition-colors ${
              pathname === '/industries' ? 'text-[#0052cc]' : 'text-[#0f172a] hover:text-[#0052cc]'
            }`}
          >
            Industries
          </Link>
        </div>

        {/* About Us */}
        <div className="border-b border-slate-100 pb-2">
          <Link
            href="/about"
            onClick={onClose}
            className={`block py-2.5 text-base font-bold transition-colors ${
              pathname === '/about' ? 'text-[#0052cc]' : 'text-[#0f172a] hover:text-[#0052cc]'
            }`}
          >
            About Us
          </Link>
        </div>

        {/* Events */}
        <div className="border-b border-slate-100 pb-2">
          <Link
            href="/events"
            onClick={onClose}
            className={`block py-2.5 text-base font-bold transition-colors ${
              pathname === '/events' ? 'text-[#0052cc]' : 'text-[#0f172a] hover:text-[#0052cc]'
            }`}
          >
            Events & Expos
          </Link>
        </div>

        {/* Leadership */}
        <div className="border-b border-slate-100 pb-2">
          <Link
            href="/leadership"
            onClick={onClose}
            className={`block py-2.5 text-base font-bold transition-colors ${
              pathname === '/leadership' ? 'text-[#0052cc]' : 'text-[#0f172a] hover:text-[#0052cc]'
            }`}
          >
            Leadership
          </Link>
        </div>

        {/* Contact */}
        <div className="pb-2">
          <Link
            href="/contact"
            onClick={onClose}
            className={`block py-2.5 text-base font-bold transition-colors ${
              pathname === '/contact' ? 'text-[#0052cc]' : 'text-[#0f172a] hover:text-[#0052cc]'
            }`}
          >
            Contact & RFQ
          </Link>
        </div>
      </div>

      {/* Bottom Sticky Action Footer */}
      <div className="p-5 border-t border-slate-200 bg-slate-50 space-y-3 shrink-0">
        <div className="flex items-center justify-between text-xs text-slate-600 font-medium">
          <a
            href="tel:+918005557693"
            className="flex items-center gap-1.5 text-slate-700 hover:text-[#0052cc]"
          >
            <Phone className="w-3.5 h-3.5 text-[#0052cc]" />
            <span>+91 800 555-POWER</span>
          </a>
          <a
            href="mailto:sales@gsonspower.com"
            className="flex items-center gap-1.5 text-slate-700 hover:text-[#0052cc]"
          >
            <Mail className="w-3.5 h-3.5 text-[#0052cc]" />
            <span>sales@gsonspower.com</span>
          </a>
        </div>

        <Link
          href="/contact"
          onClick={onClose}
          className="w-full bg-[#0052cc] text-white font-bold text-xs tracking-wider uppercase py-3.5 px-4 rounded-xs flex items-center justify-center gap-2 hover:bg-[#0041a3] transition-colors shadow-xs"
        >
          <span>Request Engineering Quote</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );

  return createPortal(menuContent, document.body);
}
