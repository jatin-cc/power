'use client';

import { useState, useEffect } from 'react';
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
} from 'lucide-react';
import { products } from '@/data/products';
import { services } from '@/data/services';

export default function MobileMenu({ isOpen, onClose }) {
  const [mounted, setMounted] = useState(false);
  const [expandedSection, setExpandedSection] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  // Close menu on route change
  useEffect(() => {
    if (isOpen) {
      onClose();
    }
  }, [pathname, isOpen, onClose]);

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
          className="w-10 h-10 rounded-lg border border-slate-200 flex items-center justify-center text-slate-700 hover:border-[#063772] hover:text-[#063772] hover:bg-slate-50 transition-colors cursor-pointer"
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
              pathname === '/' ? 'text-[#063772]' : 'text-[#0f172a] hover:text-[#063772]'
            }`}
          >
            Home
          </Link>
        </div>

        {/* 1. About */}
        <div className="border-b border-slate-100 pb-2">
          <Link
            href="/about"
            onClick={onClose}
            className={`block py-2.5 text-base font-bold transition-colors ${
              pathname === '/about' ? 'text-[#063772]' : 'text-[#0f172a] hover:text-[#063772]'
            }`}
          >
            About
          </Link>
        </div>

        {/* 2. Product & Service (Combined Dropdown Accordion) */}
        <div className="border-b border-slate-100 pb-2">
          <button
            onClick={() => toggleSection('products-services')}
            className="w-full py-2.5 flex items-center justify-between text-base font-bold text-[#0f172a] hover:text-[#063772] transition-colors cursor-pointer text-left"
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
            <div className="mt-1 pl-4 pb-2 space-y-3 border-l-2 border-[#063772]/20">
              <Link
                href="/products-services"
                onClick={onClose}
                className="block text-xs font-bold uppercase tracking-wider text-[#063772] py-1 hover:underline"
              >
                → View Combined Products & Services Catalog
              </Link>

              {/* Transformers */}
              <div className="space-y-1 pt-1">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">
                  Transformers
                </span>
                {products
                  .filter((p) => p.categorySlug === 'transformers')
                  .slice(0, 4)
                  .map((p) => (
                    <Link
                      key={p.id}
                      href={`/products/${p.slug}`}
                      onClick={onClose}
                      className="block text-sm font-medium text-slate-700 hover:text-[#063772] py-0.5"
                    >
                      {p.name}
                    </Link>
                  ))}
              </div>

              {/* Substations & Panels */}
              <div className="space-y-1 pt-1">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">
                  Substations & Switchgear
                </span>
                {products
                  .filter(
                    (p) =>
                      p.categorySlug === 'compact-substations' ||
                      p.categorySlug === 'ht-panels' ||
                      p.categorySlug === 'lt-panels'
                  )
                  .slice(0, 4)
                  .map((p) => (
                    <Link
                      key={p.id}
                      href={`/products/${p.slug}`}
                      onClick={onClose}
                      className="block text-sm font-medium text-slate-700 hover:text-[#063772] py-0.5"
                    >
                      {p.name}
                    </Link>
                  ))}
              </div>

              {/* Engineering Services */}
              <div className="space-y-1 pt-1">
                <span className="text-[10px] font-bold text-[#23790a] uppercase tracking-widest block">
                  Field & Engineering Services
                </span>
                {services.map((s) => (
                  <Link
                    key={s.id}
                    href={`/services/${s.slug}`}
                    onClick={onClose}
                    className="block text-sm font-medium text-slate-700 hover:text-[#23790a] py-0.5"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* 3. Infrastructure */}
        <div className="border-b border-slate-100 pb-2">
          <Link
            href="/infrastructure"
            onClick={onClose}
            className={`block py-2.5 text-base font-bold transition-colors ${
              pathname === '/infrastructure'
                ? 'text-[#063772]'
                : 'text-[#0f172a] hover:text-[#063772]'
            }`}
          >
            Infrastructure
          </Link>
        </div>

        {/* 4. Industries */}
        <div className="border-b border-slate-100 pb-2">
          <Link
            href="/industries"
            onClick={onClose}
            className={`block py-2.5 text-base font-bold transition-colors ${
              pathname === '/industries'
                ? 'text-[#063772]'
                : 'text-[#0f172a] hover:text-[#063772]'
            }`}
          >
            Industries
          </Link>
        </div>

        {/* 5. Our Resources (Dropdown Accordion: Blog, Event, Our Team, Case Studies) */}
        <div className="border-b border-slate-100 pb-2">
          <button
            onClick={() => toggleSection('resources')}
            className="w-full py-2.5 flex items-center justify-between text-base font-bold text-[#0f172a] hover:text-[#063772] transition-colors cursor-pointer text-left"
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
            <div className="mt-1 pl-4 pb-2 space-y-2.5 border-l-2 border-[#063772]/20">
              {/* Blog */}
              <Link
                href="/blog"
                onClick={onClose}
                className="flex items-center gap-2.5 text-sm font-medium text-slate-700 hover:text-[#063772] py-1"
              >
                <BookOpen className="w-4 h-4 text-[#063772] shrink-0" />
                <span>Blog & Insights</span>
              </Link>

              {/* Event */}
              <Link
                href="/events"
                onClick={onClose}
                className="flex items-center gap-2.5 text-sm font-medium text-slate-700 hover:text-[#23790a] py-1"
              >
                <Calendar className="w-4 h-4 text-[#23790a] shrink-0" />
                <span>Events & Expos</span>
              </Link>

              {/* Our Team */}
              <Link
                href="/leadership"
                onClick={onClose}
                className="flex items-center gap-2.5 text-sm font-medium text-slate-700 hover:text-indigo-600 py-1"
              >
                <Users className="w-4 h-4 text-indigo-600 shrink-0" />
                <span>Our Team & Leadership</span>
              </Link>

              {/* Case Studies */}
              <Link
                href="/case-studies"
                onClick={onClose}
                className="flex items-center gap-2.5 text-sm font-medium text-slate-700 hover:text-amber-700 py-1"
              >
                <Award className="w-4 h-4 text-amber-700 shrink-0" />
                <span>Case Studies & Projects</span>
              </Link>
            </div>
          )}
        </div>

        {/* 6. Contact */}
        <div className="pb-2">
          <Link
            href="/contact"
            onClick={onClose}
            className={`block py-2.5 text-base font-bold transition-colors ${
              pathname === '/contact' ? 'text-[#063772]' : 'text-[#0f172a] hover:text-[#063772]'
            }`}
          >
            Contact
          </Link>
        </div>
      </div>

      {/* Bottom Sticky Action Footer */}
      <div className="p-5 border-t border-slate-200 bg-slate-50 space-y-3 shrink-0">
        <div className="flex items-center justify-between text-xs text-slate-600 font-medium">
          <a
            href="tel:+918005557693"
            className="flex items-center gap-1.5 text-slate-700 hover:text-[#063772]"
          >
            <Phone className="w-3.5 h-3.5 text-[#063772]" />
            <span>+91 800 555-POWER</span>
          </a>
          <a
            href="mailto:sales@gsonspower.com"
            className="flex items-center gap-1.5 text-slate-700 hover:text-[#063772]"
          >
            <Mail className="w-3.5 h-3.5 text-[#063772]" />
            <span>sales@gsonspower.com</span>
          </a>
        </div>

        <Link
          href="/contact"
          onClick={onClose}
          className="w-full bg-[#063772] text-white font-bold text-xs tracking-wider uppercase py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 hover:bg-[#042956] transition-colors shadow-xs"
        >
          <span>Request Engineering Quote</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );

  return createPortal(menuContent, document.body);
}
