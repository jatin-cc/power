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
      {/* Final Pre-Footer CTA */}
      <div className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-[0.2em] text-[#0052cc] uppercase block mb-3">
              ENGINEERING RELIABLE POWER
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0f172a] leading-tight">
              Ready to power your next electrical infrastructure project?
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <CTAButton href="/contact" size="lg" variant="primary">
              Get Technical Quote
            </CTAButton>
            <CTAButton href="/products-services" size="lg" variant="outline">
              Explore Product Lineup
            </CTAButton>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Col 1: Brand Info & Logo */}
        <div className="lg:col-span-2 space-y-4">
          <Link href="/" className="inline-block">
            <img
              src="/logo.jpeg"
              alt="G Sons Power Transformers Pvt. Ltd."
              className="h-12 w-auto object-contain"
            />
          </Link>

          <p className="text-xs text-slate-600 leading-relaxed max-w-sm font-normal">
            G Sons Power Transformers Pvt. Ltd. manufactures Oil-Filled Distribution Transformers, Cast Resin Dry Type (CRT), Compact Substations (CSS), and HT/LT switchgear panels up to 5 MVA in 11 kV & 33 kV voltage classes.
          </p>

          <div className="pt-2 flex flex-col gap-2 text-xs text-slate-600 font-medium">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#0052cc] shrink-0" />
              <span>G Sons Power Transformers Pvt. Ltd., India</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#0052cc] shrink-0" />
              <span>+91 800 555-POWER</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#0052cc] shrink-0" />
              <span>sales@gsonspower.com</span>
            </div>
          </div>
        </div>

        {/* Col 2: Products */}
        <div>
          <h4 className="text-xs font-bold tracking-widest uppercase text-[#0f172a] mb-4">
            Products
          </h4>
          <ul className="space-y-2.5 text-xs font-medium text-slate-600">
            <li><Link href="/products/oil-filled-distribution-transformers" className="hover:text-[#0052cc] transition-colors">Oil-Filled Transformers</Link></li>
            <li><Link href="/products/cast-resin-dry-type-transformers" className="hover:text-[#0052cc] transition-colors">Cast Resin Dry Type (CRT)</Link></li>
            <li><Link href="/products/vpi-dry-type-transformers" className="hover:text-[#0052cc] transition-colors">VPI Dry Type Units</Link></li>
            <li><Link href="/products/inverter-duty-transformers" className="hover:text-[#0052cc] transition-colors">Inverter Duty Transformers</Link></li>
            <li><Link href="/products/compact-substations-css" className="hover:text-[#0052cc] transition-colors">Compact Substations (CSS)</Link></li>
            <li><Link href="/products/ht-lt-control-panels" className="hover:text-[#0052cc] transition-colors">HT & LT Switchgear Panels</Link></li>
          </ul>
        </div>

        {/* Col 3: Services */}
        <div>
          <h4 className="text-xs font-bold tracking-widest uppercase text-[#0f172a] mb-4">
            Services
          </h4>
          <ul className="space-y-2.5 text-xs font-medium text-slate-600">
            <li><Link href="/services/project-specific-custom-engineering" className="hover:text-[#0052cc] transition-colors">Custom Engineering</Link></li>
            <li><Link href="/services/factory-routine-type-testing" className="hover:text-[#0052cc] transition-colors">Routine & Type Testing</Link></li>
            <li><Link href="/services/site-commissioning-technical-support" className="hover:text-[#0052cc] transition-colors">Site Commissioning Support</Link></li>
          </ul>
        </div>

        {/* Col 4: Badges & Credentials */}
        <div>
          <h4 className="text-xs font-bold tracking-widest uppercase text-[#0f172a] mb-4">
            Credentials
          </h4>
          <ul className="space-y-2 text-xs font-semibold text-slate-700">
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#0052cc]" /> BIS Licensed Manufacturer</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#0052cc]" /> ZED Gold Certified</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#0052cc]" /> Startup India Recognized</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#0052cc]" /> Women-Led Enterprise</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#0052cc]" /> Up to 5 MVA Capacity</li>
          </ul>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="border-t border-slate-200 py-6 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-medium text-slate-500">
          <div>
            © {new Date().getFullYear()} G Sons Power Transformers Pvt. Ltd. All rights reserved.
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 px-2.5 py-1 border border-emerald-200 rounded font-semibold text-[10px]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              BIS & ZED GOLD CERTIFIED {timeString && `(${timeString})`}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
