'use client';

import Link from 'next/link';
import { MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com',
    svg: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.3a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26z" />
      </svg>
    ),
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com',
    svg: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com',
    svg: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com',
    svg: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.376.55 9.376.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com',
    svg: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0b1e3b] text-white border-t border-blue-900/40 relative overflow-hidden">
      {/* Decorative Blueprint Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-6 py-14 lg:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Logo + Lines + Social Links (PDF Page 6 Requirement) */}
          <div className="lg:col-span-5 space-y-5">
            <Link href="/" className="inline-block group bg-white/95 p-2 rounded-lg">
              <img
                src="/logo.jpeg"
                alt="G Sons Power Transformers Pvt. Ltd."
                className="h-12 w-auto object-contain transition-opacity group-hover:opacity-90"
              />
            </Link>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal max-w-sm">
              G Sons Power Transformers Pvt. Ltd. is a women-led, ZED Gold certified manufacturer of Oil-Filled Distribution Transformers, Cast Resin Dry Type (CRT), Compact Substations (CSS), and HT/LT switchgear panels up to 5 MVA in 11 kV &amp; 33 kV voltage classes.
            </p>

            {/* Social Media Links below lines */}
            <div className="pt-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-3">
                Connect With Us
              </span>
              <div className="flex items-center gap-2.5">
                {socialLinks.map((s, idx) => (
                  <a
                    key={idx}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#e84e36] text-white flex items-center justify-center transition-all duration-200 hover:scale-110 border border-white/10"
                  >
                    {s.svg}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Middle Column: Useful Links (Career Removed as per PDF Page 6) */}
          <div className="lg:col-span-3 space-y-4">
            <div>
              <h4 className="text-sm font-bold tracking-wider text-white uppercase">
                Useful Links
              </h4>
              <div className="w-10 h-0.5 bg-blue-400 mt-1 mb-4" />
            </div>

            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <li>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1.5 hover:text-white hover:translate-x-1 transition-all"
                >
                  <ArrowUpRight className="w-3.5 h-3.5 text-blue-400" />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/products-services"
                  className="inline-flex items-center gap-1.5 hover:text-white hover:translate-x-1 transition-all"
                >
                  <ArrowUpRight className="w-3.5 h-3.5 text-blue-400" />
                  <span>Products &amp; Services</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-1.5 hover:text-white hover:translate-x-1 transition-all"
                >
                  <ArrowUpRight className="w-3.5 h-3.5 text-blue-400" />
                  <span>Blog</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 hover:text-white hover:translate-x-1 transition-all"
                >
                  <ArrowUpRight className="w-3.5 h-3.5 text-blue-400" />
                  <span>Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Column: Contact Us matching PDF Page 6 */}
          <div className="lg:col-span-4 space-y-4">
            <div>
              <h4 className="text-sm font-bold tracking-wider text-white uppercase">
                Contact Us
              </h4>
              <div className="w-10 h-0.5 bg-blue-400 mt-1 mb-4" />
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-300">
              {/* Address Location */}
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-sm bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5 border border-amber-500/30">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[11px] font-bold text-white uppercase tracking-wider mb-0.5">
                    Address Location
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    G Sons Power Transformers Pvt. Ltd., Survey No. 427 P/3-4, &amp; 431 P/1-2, Sarkhej-Bavla Highway, Village: Moraiya, Taluka: Sanand, Dist. Ahmedabad–382213 Gujarat, INDIA
                  </p>
                </div>
              </div>

              {/* Phone Number */}
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-sm bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5 border border-amber-500/30">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[11px] font-bold text-white uppercase tracking-wider mb-0.5">
                    Phone Number
                  </span>
                  <a
                    href="tel:+912717661500"
                    className="text-xs text-slate-300 hover:text-white transition-colors block"
                  >
                    +91 2717 661 500 / +91 800 555-POWER
                  </a>
                </div>
              </div>

              {/* Email Address */}
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-sm bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5 border border-amber-500/30">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[11px] font-bold text-white uppercase tracking-wider mb-0.5">
                    Email Address
                  </span>
                  <a
                    href="mailto:info@gsonspower.com"
                    className="text-xs text-slate-300 hover:text-white transition-colors block"
                  >
                    info@gsonspower.com / sales@gsonspower.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal Copyright Bar */}
      <div className="border-t border-blue-900/60 py-5 px-6 bg-[#07162c] text-center text-[11px] text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>
            © {new Date().getFullYear()} G Sons Power Transformers Pvt. Ltd. All rights reserved.
          </span>
          <div className="flex items-center gap-4 text-slate-400">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>&bull;</span>
            <Link href="/contact" className="hover:text-white transition-colors">
              Technical Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
