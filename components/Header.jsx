'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, Phone, ShieldCheck } from 'lucide-react';
import MegaMenu from './MegaMenu';
import MobileMenu from './MobileMenu';
import CTAButton from './CTAButton';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeMegaTab, setActiveMegaTab] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkHover = (tabName) => {
    setActiveMegaTab(tabName);
  };

  const handleHeaderMouseLeave = () => {
    setActiveMegaTab(null);
  };

  return (
    <header
      onMouseLeave={handleHeaderMouseLeave}
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm py-3'
          : 'bg-white/80 backdrop-blur-sm border-b border-slate-100 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 bg-[#0052cc] flex items-center justify-center text-white font-bold text-xl group-hover:scale-105 transition-transform">
            V
          </div>
          <div>
            <span className="font-extrabold text-base tracking-widest text-[#0f172a] uppercase block leading-none">
              VORTEX
            </span>
            <span className="text-[9px] font-bold tracking-wider text-[#0052cc] uppercase block mt-0.5">
              POWER SYSTEMS
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link
            href="/about"
            className={`text-xs font-semibold uppercase tracking-wider transition-colors hover:text-[#0052cc] ${
              pathname === '/about' ? 'text-[#0052cc]' : 'text-[#0f172a]'
            }`}
          >
            About
          </Link>

          <div
            onMouseEnter={() => handleLinkHover('products')}
            className="relative py-2 cursor-pointer flex items-center gap-1 group"
          >
            <span
              className={`text-xs font-semibold uppercase tracking-wider transition-colors group-hover:text-[#0052cc] ${
                pathname.startsWith('/products') ? 'text-[#0052cc]' : 'text-[#0f172a]'
              }`}
            >
              Products
            </span>
            <ChevronDown className="w-3.5 h-3.5 text-[#0052cc] group-hover:rotate-180 transition-transform duration-200" />
          </div>

          <div
            onMouseEnter={() => handleLinkHover('services')}
            className="relative py-2 cursor-pointer flex items-center gap-1 group"
          >
            <span
              className={`text-xs font-semibold uppercase tracking-wider transition-colors group-hover:text-[#0052cc] ${
                pathname.startsWith('/services') ? 'text-[#0052cc]' : 'text-[#0f172a]'
              }`}
            >
              Services
            </span>
            <ChevronDown className="w-3.5 h-3.5 text-[#0052cc] group-hover:rotate-180 transition-transform duration-200" />
          </div>

          <Link
            href="/infrastructure"
            className={`text-xs font-semibold uppercase tracking-wider transition-colors hover:text-[#0052cc] ${
              pathname === '/infrastructure' ? 'text-[#0052cc]' : 'text-[#0f172a]'
            }`}
          >
            Infrastructure
          </Link>

          <div
            onMouseEnter={() => handleLinkHover('industries')}
            className="relative py-2 cursor-pointer flex items-center gap-1 group"
          >
            <span
              className={`text-xs font-semibold uppercase tracking-wider transition-colors group-hover:text-[#0052cc] ${
                pathname === '/industries' ? 'text-[#0052cc]' : 'text-[#0f172a]'
              }`}
            >
              Industries
            </span>
            <ChevronDown className="w-3.5 h-3.5 text-[#0052cc] group-hover:rotate-180 transition-transform duration-200" />
          </div>

          <Link
            href="/blog"
            className={`text-xs font-semibold uppercase tracking-wider transition-colors hover:text-[#0052cc] ${
              pathname.startsWith('/blog') ? 'text-[#0052cc]' : 'text-[#0f172a]'
            }`}
          >
            Resources
          </Link>

          <div
            onMouseEnter={() => handleLinkHover('company')}
            className="relative py-2 cursor-pointer flex items-center gap-1 group"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0f172a] group-hover:text-[#0052cc] transition-colors">
              Company
            </span>
            <ChevronDown className="w-3.5 h-3.5 text-[#0052cc] group-hover:rotate-180 transition-transform duration-200" />
          </div>
        </nav>

        {/* Right Desktop CTA & Phone */}
        <div className="hidden lg:flex items-center gap-5">
          <div className="flex items-center gap-2 text-xs font-medium text-slate-600 border-r border-slate-200 pr-5">
            <Phone className="w-3.5 h-3.5 text-[#0052cc]" />
            <span>+1 (800) 555-VOLT</span>
          </div>

          <CTAButton href="/contact" size="sm" variant="primary">
            Request RFQ
          </CTAButton>
        </div>

        {/* Mobile Hamburger Trigger */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="lg:hidden w-10 h-10 border border-slate-200 flex items-center justify-center text-[#0f172a] hover:border-[#0052cc] hover:text-[#0052cc] transition-colors"
          aria-label="Open mobile menu"
        >
          <Menu className="w-5 h-5" />
        </button>
      </div>

      {/* Desktop Mega Menu Dropdown */}
      <MegaMenu activeTab={activeMegaTab} onClose={() => setActiveMegaTab(null)} />

      {/* Mobile Custom Drawer */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  );
}
