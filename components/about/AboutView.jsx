'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Mail,
  ArrowRight,
  ShieldCheck,
  Award,
  Factory,
  Sparkles,
  Building2,
  Cpu,
  CheckCircle2,
  Copy,
  Check,
  ChevronRight,
  Zap,
  Layers,
  Sliders,
  Flame,
  Gauge
} from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const navSections = [
  { id: 'overview', label: 'Overview' },
  { id: 'experience', label: 'Experience' },
  { id: 'solutions', label: 'Power Solutions' },
  { id: 'manufacturing', label: 'Process Control' },
  { id: 'leadership', label: 'Women-Led' },
  { id: 'requirement', label: 'Requirement' },
];

export default function AboutView() {
  const containerRef = useRef(null);
  const [activeSection, setActiveSection] = useState('overview');
  const [copied, setCopied] = useState(false);
  const [hoveredStep, setHoveredStep] = useState(null);

  // GSAP Smooth ScrollTriggers & entrance animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance animation
      gsap.fromTo(
        '.gsap-hero-item',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
      );

      // Section cards reveal on scroll
      const cards = gsap.utils.toArray('.gsap-section-card');
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      // Update active nav based on scroll position
      navSections.forEach(({ id }) => {
        ScrollTrigger.create({
          trigger: `#${id}`,
          start: 'top 40%',
          end: 'bottom 40%',
          onEnter: () => setActiveSection(id),
          onEnterBack: () => setActiveSection(id),
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('transformers@gsonspower.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-[#fafbfc] text-[#0f172a] selection:bg-[#063772] selection:text-white">
      {/* Background Decorative Tech Grid */}
      <div className="fixed inset-0 bg-grid-pattern opacity-40 pointer-events-none z-0" />
      <div className="fixed top-20 right-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-100/40 via-emerald-50/20 to-transparent blur-3xl rounded-full pointer-events-none z-0" />
      <div className="fixed bottom-10 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-slate-200/50 to-transparent blur-3xl rounded-full pointer-events-none z-0" />

      {/* Floating Section Progress Navigator */}
      <div className="sticky top-20 z-30 max-w-5xl mx-auto px-6 pt-4 pointer-events-none hidden md:block">
        <div className="pointer-events-auto bg-white/80 backdrop-blur-md border border-slate-200/90 shadow-md rounded-full px-3 py-1.5 flex items-center justify-between gap-1 w-fit mx-auto transition-all">
          {navSections.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`px-3 py-1 text-xs font-semibold rounded-full transition-all cursor-pointer ${activeSection === id
                ? 'bg-[#063772] text-white shadow-xs'
                : 'text-slate-600 hover:text-[#063772] hover:bg-slate-100/80'
                }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-24 sm:pt-28 pb-24 space-y-16 sm:space-y-20">

        {/* 01. Hero & Company Introduction (Overview) */}
        <section id="overview" className="scroll-mt-28">
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/80 shadow-sm relative overflow-hidden">
            {/* Ambient corner glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-100/60 to-transparent rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10">
              <div className="gsap-hero-item inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#063772] animate-pulse" />
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#063772]">
                  About Us
                </span>
              </div>

              <h1 className="gsap-hero-item text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0f172a] leading-tight mb-6">
                G Sons Power Transformers Pvt. Ltd.
              </h1>

              <div className="gsap-hero-item space-y-5 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                <p>
                  G Sons Power Transformers Pvt. Ltd. is a women-led manufacturer of transformers and compact substations based in Ahmedabad, Gujarat. A DPIIT-recognised startup and ZED Gold-certified enterprise, we combine dedicated manufacturing capabilities with more than two decades of electrical engineering and project experience across the G Sons Power Group.
                </p>
                <p>
                  We develop equipment around the application, site conditions and customer’s technical requirements, serving industrial, infrastructure, institutional and renewable energy projects.
                </p>
              </div>

              {/* Verified Key Credentials Pills */}
              <div className="gsap-hero-item grid grid-cols-2 sm:grid-cols-4 gap-3 pt-8 border-t border-slate-100 mt-8">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-purple-300 hover:bg-purple-50/50 transition-all group">
                  <div className="flex items-center gap-2 mb-1">
                    <Sparkles className="w-4 h-4 text-purple-600 group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-bold text-[#0f172a]">Women-Led</span>
                  </div>
                  <span className="text-[11px] text-slate-500 font-medium">Enterprise</span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-emerald-300 hover:bg-emerald-50/50 transition-all group">
                  <div className="flex items-center gap-2 mb-1">
                    <ShieldCheck className="w-4 h-4 text-[#23790a] group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-bold text-[#0f172a]">ZED Gold</span>
                  </div>
                  <span className="text-[11px] text-slate-500 font-medium">Certified Enterprise</span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-blue-300 hover:bg-blue-50/50 transition-all group">
                  <div className="flex items-center gap-2 mb-1">
                    <Award className="w-4 h-4 text-[#063772] group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-bold text-[#0f172a]">DPIIT</span>
                  </div>
                  <span className="text-[11px] text-slate-500 font-medium">Recognised Startup</span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-blue-300 hover:bg-blue-50/50 transition-all group">
                  <div className="flex items-center gap-2 mb-1">
                    <Factory className="w-4 h-4 text-[#063772] group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-bold text-[#0f172a]">Ahmedabad</span>
                  </div>
                  <span className="text-[11px] text-slate-500 font-medium">Gujarat, India</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 02. Experience That Shapes Our Engineering */}
        <section id="experience" className="gsap-section-card scroll-mt-28">
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-200/70 flex items-center justify-center text-[#063772] shrink-0 shadow-xs">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold tracking-widest uppercase text-[#063772] block">
                    Proven Engineering Heritage
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0f172a]">
                    Experience That Shapes Our Engineering
                  </h2>
                </div>
              </div>
              <span className="text-xs font-mono font-bold text-slate-300 hidden sm:block">01</span>
            </div>

            <div className="space-y-5 text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
              <p>
                Our roots lie in electrical panels and turnkey power distribution projects through G Sons Power. Site experience has given the group a practical understanding of installation constraints, protection requirements and the interfaces between transformers, switchgear and downstream distribution.
              </p>
              <p>
                The group’s project experience includes Hindustan Aeronautics Limited, Banas Dairy, GMM Pfaudler, Micron Semiconductors, Senapathy Whiteley and Sobha Limited. That experience shapes how we engineer equipment to work within a complete electrical system.
              </p>
            </div>

            {/* Interactive Project Experience Grid */}
            <div className="mt-8 pt-8 border-t border-slate-100">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Representative Group Project Experience
                </span>
                <span className="text-[11px] font-medium text-slate-400">
                  Turnkey & Industrial Implementations
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  { name: 'Hindustan Aeronautics Limited', tag: 'Aerospace & Defence' },
                  { name: 'Banas Dairy', tag: 'Asia’s Largest Milk Union' },
                  { name: 'GMM Pfaudler', tag: 'Heavy Chemical & Glass-Lined' },
                  { name: 'Micron Semiconductors', tag: 'High-Tech Semiconductor' },
                  { name: 'Senapathy Whiteley', tag: 'Electrical Insulation' },
                  { name: 'Sobha Limited', tag: 'Premium Real Estate & Infra' },
                ].map((client) => (
                  <div
                    key={client.name}
                    className="p-4 rounded-xl bg-slate-50/90 border border-slate-200/80 hover:border-[#063772] hover:bg-white hover:shadow-xs transition-all duration-200 group flex items-start justify-between"
                  >
                    <div>
                      <h4 className="font-bold text-sm text-[#0f172a] group-hover:text-[#063772] transition-colors leading-snug">
                        {client.name}
                      </h4>
                      <span className="text-[11px] text-slate-500 block mt-0.5">
                        {client.tag}
                      </span>
                    </div>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 opacity-60 group-hover:opacity-100 shrink-0 ml-2 mt-0.5 transition-opacity" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 03. Transformers and Integrated Power Solutions */}
        <section id="solutions" className="gsap-section-card scroll-mt-28">
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-200/70 flex items-center justify-center text-[#23790a] shrink-0 shadow-xs">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold tracking-widest uppercase text-[#23790a] block">
                    Complete Power Portfolio
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0f172a]">
                    Transformers and Integrated Power Solutions
                  </h2>
                </div>
              </div>
              <span className="text-xs font-mono font-bold text-slate-300 hidden sm:block">02</span>
            </div>

            <div className="space-y-5 text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
              <p>
                Our transformer portfolio covers oil-filled power and distribution transformers, cast resin and VPI dry-type transformers, and inverter duty transformers. We also manufacture compact substations that bring HT equipment, a transformer and LT distribution together in a coordinated, factory-built package.
              </p>
              <p>
                Through G Sons Power, our group’s offering extends to HT panels and a comprehensive LT panel range, including PCC, MCC, APFC, PLC and automation, metering, solar distribution, fire fighting and ventilation control panels. Customers can coordinate interconnected equipment requirements within one group, helping address equipment interfaces early in the project.
              </p>
            </div>

            {/* Categorized Visual Tabs of Interconnected Equipment */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 pt-8 border-t border-slate-100">
              <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-50/50 to-slate-50 border border-blue-100">
                <div className="flex items-center gap-2 mb-3">
                  <Zap className="w-4 h-4 text-[#063772]" />
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#063772]">
                    Transformers & Compact Substations
                  </h4>
                </div>
                <ul className="space-y-2 text-xs font-semibold text-slate-700">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#063772]" />
                    Oil-Filled Power & Distribution Transformers
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#063772]" />
                    Cast Resin (CRT) & VPI Dry-Type Transformers
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#063772]" />
                    Inverter Duty Transformers (Solar / Renewables)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#063772]" />
                    Compact Substations (CSS) with HT, Transformer & LT Package
                  </li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-50/50 to-slate-50 border border-emerald-100">
                <div className="flex items-center gap-2 mb-3">
                  <Layers className="w-4 h-4 text-[#23790a]" />
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#23790a]">
                    HT & Comprehensive LT Panels Range
                  </h4>
                </div>
                <ul className="space-y-2 text-xs font-semibold text-slate-700">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#23790a]" />
                    HT Panels & PCC / MCC Power Control Centers
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#23790a]" />
                    APFC, PLC & Industrial Automation Panels
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#23790a]" />
                    Metering & Solar Power Distribution Panels
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#23790a]" />
                    Fire Fighting & Ventilation Control Panels
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 04. Manufacturing with Process Control */}
        <section id="manufacturing" className="gsap-section-card scroll-mt-28">
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-200/70 flex items-center justify-center text-[#063772] shrink-0 shadow-xs">
                  <Factory className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold tracking-widest uppercase text-[#063772] block">
                    Precision In-House Execution
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0f172a]">
                    Manufacturing with Process Control
                  </h2>
                </div>
              </div>
              <span className="text-xs font-mono font-bold text-slate-300 hidden sm:block">03</span>
            </div>

            <div className="space-y-5 text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
              <p>
                Our facility supports LV and HV winding, core and active-part assembly, vacuum resin casting, controlled oven processing, final assembly and testing. In-house involvement in these stages gives our team control over the processes that influence equipment quality and performance.
              </p>
              <p>
                Our quality credentials include ISO 9001:2015 certification and BIS-licensed manufacturing within the approved product scope. Selected transformer designs have been type-tested at NABL-accredited laboratories. Material checks, process inspections and final testing support delivery against agreed technical requirements.
              </p>
            </div>

            {/* Interactive Process Sequence Flow */}
            <div className="mt-8 pt-8 border-t border-slate-100">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-4">
                In-House Process Control Flow
              </span>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {[
                  { step: '01', title: 'LV & HV Winding', desc: 'Precision coil winding' },
                  { step: '02', title: 'Core & Active Assembly', desc: 'CRGO core stacking' },
                  { step: '03', title: 'Vacuum Resin Casting', desc: 'Void-free encapsulation' },
                  { step: '04', title: 'Oven Processing', desc: 'Controlled thermal curing' },
                  { step: '05', title: 'Final Testing', desc: 'Routine & type tests' },
                ].map((item, idx) => (
                  <div
                    key={item.step}
                    onMouseEnter={() => setHoveredStep(idx)}
                    onMouseLeave={() => setHoveredStep(null)}
                    className={`p-3.5 rounded-xl border text-center transition-all cursor-default ${hoveredStep === idx
                      ? 'border-[#063772] bg-blue-50/70 shadow-xs scale-105'
                      : 'border-slate-200/80 bg-slate-50'
                      }`}
                  >
                    <span className="inline-block px-2 py-0.5 rounded bg-white text-[10px] font-mono font-bold text-[#063772] border border-slate-200 mb-1.5">
                      STEP {item.step}
                    </span>
                    <h5 className="font-bold text-xs text-[#0f172a] leading-tight mb-1">
                      {item.title}
                    </h5>
                    <p className="text-[10px] text-slate-500 leading-tight">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quality Credentials Trust Bar */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200/60">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#23790a]" /> ISO 9001:2015 Certified
              </span>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-blue-50 text-blue-800 text-xs font-bold border border-blue-200/60">
                <Award className="w-3.5 h-3.5 text-[#063772]" /> BIS-Licensed Manufacturing Scope
              </span>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-100 text-slate-800 text-xs font-bold border border-slate-200">
                <ShieldCheck className="w-3.5 h-3.5 text-slate-700" /> NABL-Accredited Lab Type-Tested
              </span>
            </div>
          </div>
        </section>

        {/* 05. Women Led and Made in India */}
        <section id="leadership" className="gsap-section-card scroll-mt-28">
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-purple-100/50 via-pink-50/20 to-transparent rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-start justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-purple-50 border border-purple-200/70 flex items-center justify-center text-purple-700 shrink-0 shadow-xs">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold tracking-widest uppercase text-purple-700 block">
                      Visionary Governance
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0f172a]">
                      Women Led and Made in India
                    </h2>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-slate-300 hidden sm:block">04</span>
              </div>

              <div className="space-y-5 text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
                <p>
                  Led by our Founder and Managing Director, Geetha G Nambiar, we are expanding our transformer manufacturing capabilities while building on the group’s experience and customer relationships.
                </p>
                <p>
                  Our ZED Gold certification reinforces our focus on quality and responsible manufacturing. As a DPIIT-recognised startup manufacturing in Ahmedabad, we support the Make in India initiative and serve customers in India and export markets.
                </p>
              </div>

              {/* Leadership & Initiative Highlights Box */}
              <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-purple-50/60 via-slate-50 to-white border border-purple-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-purple-700 block">
                    Leadership Spotlight
                  </span>
                  <h4 className="text-lg font-extrabold text-[#0f172a]">
                    Geetha G Nambiar
                  </h4>
                  <p className="text-xs text-slate-600 font-medium">
                    Founder and Managing Director, G Sons Power Transformers Pvt. Ltd.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1.5 rounded-lg bg-white border border-purple-200 text-xs font-bold text-purple-900 shadow-xs">
                    Make in India
                  </span>
                  <span className="px-3 py-1.5 rounded-lg bg-white border border-emerald-200 text-xs font-bold text-emerald-900 shadow-xs">
                    ZED Gold Certified
                  </span>
                  <span className="px-3 py-1.5 rounded-lg bg-white border border-blue-200 text-xs font-bold text-blue-900 shadow-xs">
                    DPIIT Recognised
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 06. Discuss Your Power Requirement */}
        <section id="requirement" className="gsap-section-card scroll-mt-28">
          <div className="rounded-3xl bg-gradient-to-br from-[#031f42] via-[#063772] to-[#041a33] text-white p-8 sm:p-14 shadow-2xl relative overflow-hidden border border-blue-900/60">
            {/* Ambient background glows */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-emerald-400 block mb-3">
                LET&apos;S COLLABORATE
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-5 leading-tight">
                Discuss Your Power Requirement
              </h2>

              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal mb-8">
                Share your transformer, compact substation or HT and LT equipment requirement with our team. We will work with you to identify a suitable configuration and prepare a technical and commercial proposal.
              </p>

              {/* Interactive Email Bar with Copy to Clipboard */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/20 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 shadow-lg">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-white shrink-0 shadow-inner">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-0.5">
                      Direct Proposal Inquiry
                    </span>
                    <a
                      href="mailto:transformers@gsonspower.com"
                      className="text-base sm:text-xl font-extrabold text-white hover:text-emerald-300 transition-colors underline decoration-white/30 underline-offset-4"
                    >
                      transformers@gsonspower.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-semibold text-xs uppercase tracking-wider transition-all border border-white/20 cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span className="text-emerald-300">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>

                  <a
                    href="mailto:transformers@gsonspower.com"
                    className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-[#031f42] font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer"
                  >
                    Send Email <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Bottom Quick Action Link */}
              <div className="pt-6 flex items-center justify-between text-xs text-slate-300">
                <span>Fast Technical Turnaround & Specification Review</span>
                <Link
                  href="/contact"
                  className="font-semibold text-emerald-300 hover:text-emerald-200 hover:underline flex items-center gap-1"
                >
                  Go to Contact Page <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
