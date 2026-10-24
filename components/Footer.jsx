'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';
import CTAButton from './CTAButton';

export default function Footer() {
  const [timeString, setTimeString] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(now.toLocaleTimeString('en-US', { hour12: false, timeZoneName: 'short' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-white text-[#0f172a] border-t border-slate-200">

      {/* Main Footer Links & Info */}
      <div className="max-w-7xl mx-auto px-6 py-14 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Col 1: Brand Info & Logo */}
          <div className="lg:col-span-7 space-y-5">
            <Link href="/" className="inline-block group">
              <img
                src="/logo.jpeg"
                alt="G Sons Power Transformers Pvt. Ltd."
                className="h-12 sm:h-14 w-auto object-contain transition-opacity group-hover:opacity-90"
              />
            </Link>

            <p className="text-sm text-slate-600 leading-relaxed max-w-xl font-normal">
              G Sons Power Transformers Pvt. Ltd. manufactures Oil-Filled Distribution Transformers, Cast Resin Dry Type (CRT), Compact Substations (CSS), and HT/LT switchgear panels up to 5 MVA in 11 kV & 33 kV voltage classes.
            </p>

            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200">
                <span className="w-1.5 h-1.5 rounded-full bg-[#063772]" /> BIS Licensed Manufacturer
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#eff9ec] text-[#23790a] text-xs font-semibold border border-[#23790a]/25">
                <span className="w-1.5 h-1.5 rounded-full bg-[#23790a]" /> ZED Gold Certified
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200">
                Up to 5 MVA Capacity
              </span>
            </div>
          </div>

          {/* Col 2: Contact Details */}
          <div className="lg:col-span-5 space-y-5">
            <h4 className="text-xs font-bold tracking-widest uppercase text-[#063772] border-b border-slate-200/80 pb-3">
              Contact Information
            </h4>

            <div className="space-y-4">
              <div className="flex items-start gap-3.5 group">
                <div className="w-10 h-10 rounded-lg bg-slate-100 border border-slate-200/80 flex items-center justify-center text-[#063772] shrink-0 group-hover:bg-[#063772] group-hover:text-white transition-colors">
                  <MapPin className="w-4 h-4 shrink-0" />
                </div>
                <div className="pt-0.5">
                  <span className="block text-[11px] font-medium uppercase tracking-wider text-slate-400 mb-0.5">
                    Location
                  </span>
                  <p className="text-sm font-semibold text-[#0f172a] leading-snug">
                    G Sons Power Transformers Pvt. Ltd., India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 group">
                <div className="w-10 h-10 rounded-lg bg-slate-100 border border-slate-200/80 flex items-center justify-center text-[#063772] shrink-0 group-hover:bg-[#063772] group-hover:text-white transition-colors">
                  <Phone className="w-4 h-4 shrink-0" />
                </div>
                <div className="pt-0.5">
                  <span className="block text-[11px] font-medium uppercase tracking-wider text-slate-400 mb-0.5">
                    Phone
                  </span>
                  <a
                    href="tel:+91800555POWER"
                    className="text-sm font-semibold text-[#0f172a] hover:text-[#063772] transition-colors"
                  >
                    +91 800 555-POWER
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5 group">
                <div className="w-10 h-10 rounded-lg bg-slate-100 border border-slate-200/80 flex items-center justify-center text-[#063772] shrink-0 group-hover:bg-[#063772] group-hover:text-white transition-colors">
                  <Mail className="w-4 h-4 shrink-0" />
                </div>
                <div className="pt-0.5">
                  <span className="block text-[11px] font-medium uppercase tracking-wider text-slate-400 mb-0.5">
                    Email
                  </span>
                  <a
                    href="mailto:sales@gsonspower.com"
                    className="text-sm font-semibold text-[#0f172a] hover:text-[#063772] transition-colors"
                  >
                    sales@gsonspower.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="border-t border-slate-200 py-6 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto flex  sm:flex-row items-center justify-center gap-4 text-[11px] font-medium text-slate-500">
          <div>
            © {new Date().getFullYear()} G Sons Power Transformers Pvt. Ltd. All rights reserved.
          </div>


        </div>
      </div>
    </footer>
  );
}
