'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowUpRight, ShieldCheck, Zap, Globe, Phone, Mail, MapPin } from 'lucide-react';
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
      {/* Final Kinetic CTA Section */}
      <div className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-[0.2em] text-[#0052cc] uppercase block mb-3">
              POWER YOUR GRID INFRASTRUCTURE
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0f172a] leading-tight">
              Ready to engineer your next high-voltage power transformer solution?
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <CTAButton href="/contact" size="lg" variant="primary">
              Get Custom Proposal
            </CTAButton>
            <CTAButton href="/products-services" size="lg" variant="outline">
              Explore Products
            </CTAButton>
          </div>
        </div>
      </div>

      {/* Main Footer Directory Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Col 1: Brand Info */}
        <div className="lg:col-span-2 space-y-5">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#0052cc] flex items-center justify-center text-white font-bold text-lg">
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

          <p className="text-xs text-slate-600 leading-relaxed max-w-sm">
            Global pioneer in ultra-high-voltage power transformers, distribution units, arc furnace transformers, ester fluid eco-designs, and 24/7 predictive sub-station diagnostics.
          </p>

          <div className="pt-2 flex flex-col gap-2 text-xs text-slate-600 font-medium">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#0052cc]" />
              <span>Vortex Power Towers, Innovation Way, Power Tech District</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#0052cc]" />
              <span>+1 (800) 555-VOLT</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#0052cc]" />
              <span>corporate@vortexpowersystems.com</span>
            </div>
          </div>
        </div>

        {/* Col 2: Products */}
        <div>
          <h4 className="text-xs font-bold tracking-widest uppercase text-[#0f172a] mb-4">
            Products
          </h4>
          <ul className="space-y-2.5 text-xs font-medium text-slate-600">
            <li><Link href="/products/power-transformers" className="hover:text-[#0052cc] transition-colors">Power Transformers</Link></li>
            <li><Link href="/products/distribution-transformers" className="hover:text-[#0052cc] transition-colors">Distribution Transformers</Link></li>
            <li><Link href="/products/furnace-transformers" className="hover:text-[#0052cc] transition-colors">Furnace Transformers</Link></li>
            <li><Link href="/products/rectifier-transformers" className="hover:text-[#0052cc] transition-colors">Rectifier Transformers</Link></li>
            <li><Link href="/products/special-transformers" className="hover:text-[#0052cc] transition-colors">Special Purpose Units</Link></li>
            <li><Link href="/products/reactors" className="hover:text-[#0052cc] transition-colors">Shunt & Series Reactors</Link></li>
          </ul>
        </div>

        {/* Col 3: Services */}
        <div>
          <h4 className="text-xs font-bold tracking-widest uppercase text-[#0f172a] mb-4">
            Services
          </h4>
          <ul className="space-y-2.5 text-xs font-medium text-slate-600">
            <li><Link href="/services/repair-refurbishment" className="hover:text-[#0052cc] transition-colors">Repair & Overhaul</Link></li>
            <li><Link href="/services/diagnostics-testing" className="hover:text-[#0052cc] transition-colors">Diagnostics & Testing</Link></li>
            <li><Link href="/services/oil-analysis-reconditioning" className="hover:text-[#0052cc] transition-colors">Oil Testing & Reconditioning</Link></li>
            <li><Link href="/services/online-monitoring-iot" className="hover:text-[#0052cc] transition-colors">Online IoT Monitoring</Link></li>
            <li><Link href="/services/field-services-commissioning" className="hover:text-[#0052cc] transition-colors">Field Services & Commissioning</Link></li>
          </ul>
        </div>

        {/* Col 4: Corporate & Legal */}
        <div>
          <h4 className="text-xs font-bold tracking-widest uppercase text-[#0f172a] mb-4">
            Company
          </h4>
          <ul className="space-y-2.5 text-xs font-medium text-slate-600">
            <li><Link href="/about" className="hover:text-[#0052cc] transition-colors">About Vortex</Link></li>
            <li><Link href="/infrastructure" className="hover:text-[#0052cc] transition-colors">Infrastructure</Link></li>
            <li><Link href="/leadership" className="hover:text-[#0052cc] transition-colors">Leadership</Link></li>
            <li><Link href="/sustainability" className="hover:text-[#0052cc] transition-colors">Sustainability & ESG</Link></li>
            <li><Link href="/careers" className="hover:text-[#0052cc] transition-colors">Careers</Link></li>
            <li><Link href="/blog" className="hover:text-[#0052cc] transition-colors">Blog & Case Studies</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-[#0052cc] transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-200 py-6 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-medium text-slate-500">
          <div className="flex items-center gap-4">
            <span>© {new Date().getFullYear()} Vortex Power Systems Corp. All rights reserved.</span>
            <span className="hidden sm:inline text-slate-300">|</span>
            <span className="hidden sm:inline">ISO 9001, ISO 14001, ISO/IEC 17025 Certified</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 px-2.5 py-1 border border-emerald-200 rounded font-semibold text-[10px]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              GLOBAL GRID ONLINE {timeString && `(${timeString})`}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
