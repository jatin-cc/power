'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, Phone } from 'lucide-react';
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
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${scrolled
        ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm py-2.5'
        : 'bg-white/90 backdrop-blur-sm border-b border-slate-100 py-3.5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo from logo.jpeg */}
        <Link href="/" className="flex items-center gap-3 group">
          <img
            src="/logo.jpeg"
            alt="G Sons Power Transformers Pvt. Ltd."
            className="h-10 sm:h-11 w-auto object-contain group-hover:opacity-95 transition-opacity"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link
            href="/about"
            className={`text-xs font-semibold uppercase tracking-wider transition-colors hover:text-[#063772] ${pathname === '/about' ? 'text-[#063772]' : 'text-[#0f172a]'
              }`}
          >
            About
          </Link>

          <div
            onMouseEnter={() => handleLinkHover('products')}
            className="relative py-2 cursor-pointer flex items-center gap-1 group"
          >
            <Link
              href="/products"
              className={`text-xs font-semibold uppercase tracking-wider transition-colors group-hover:text-[#063772] ${pathname.startsWith('/products') ? 'text-[#063772]' : 'text-[#0f172a]'
                }`}
            >
              Products
            </Link>
            <ChevronDown className="w-3.5 h-3.5 text-[#063772] group-hover:rotate-180 transition-transform duration-200" />
          </div>

          <div
            onMouseEnter={() => handleLinkHover('services')}
            className="relative py-2 cursor-pointer flex items-center gap-1 group"
          >
            <span
              className={`text-xs font-semibold uppercase tracking-wider transition-colors group-hover:text-[#063772] ${pathname.startsWith('/services') ? 'text-[#063772]' : 'text-[#0f172a]'
                }`}
            >
              Services
            </span>
            <ChevronDown className="w-3.5 h-3.5 text-[#063772] group-hover:rotate-180 transition-transform duration-200" />
          </div>

          <Link
            href="/infrastructure"
            className={`text-xs font-semibold uppercase tracking-wider transition-colors hover:text-[#063772] ${pathname === '/infrastructure' ? 'text-[#063772]' : 'text-[#0f172a]'
              }`}
          >
            Infrastructure
          </Link>

          <div
            onMouseEnter={() => handleLinkHover('industries')}
            className="relative py-2 cursor-pointer flex items-center gap-1 group"
          >
            <span
              className={`text-xs font-semibold uppercase tracking-wider transition-colors group-hover:text-[#063772] ${pathname === '/industries' ? 'text-[#063772]' : 'text-[#0f172a]'
                }`}
            >
              Industries
            </span>
            <ChevronDown className="w-3.5 h-3.5 text-[#063772] group-hover:rotate-180 transition-transform duration-200" />
          </div>

          <Link
            href="/contact"
            className={`text-xs font-semibold uppercase tracking-wider transition-colors hover:text-[#063772] ${pathname === '/contact' ? 'text-[#063772]' : 'text-[#0f172a]'
              }`}
          >
            Contact
          </Link>
        </nav>

        {/* Right Desktop CTA */}
        <div className="hidden lg:flex items-center gap-5">
          {/* <div className="flex items-center gap-2 text-xs font-medium text-slate-600 border-r border-slate-200 pr-5">
            <Phone className="w-3.5 h-3.5 text-[#063772]" />
            <span>+91 800 555-POWER</span>
          </div> */}

          <CTAButton href="/contact" size="sm" variant="primary">
            Get Technical Quote
          </CTAButton>
        </div>

        {/* Mobile Hamburger Trigger */}
        <button
          type="button"
          onClick={() => {
            setActiveMegaTab(null);
            setMobileMenuOpen(true);
          }}
          className="lg:hidden w-10 h-10 border border-slate-200 flex items-center justify-center text-[#0f172a] hover:border-[#063772] hover:text-[#063772] transition-colors cursor-pointer bg-white"
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
