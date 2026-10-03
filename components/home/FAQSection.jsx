'use client';

import { useState } from 'react';
import SectionHeading from '@/components/SectionHeading';
import { ChevronDown, HelpCircle, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

const faqItems = [
  {
    question: "What manufacturing capacity and voltage classes are offered by G Sons Power?",
    answer: "G Sons Power Transformers Pvt. Ltd. manufactures Oil-Filled Distribution Transformers, Cast Resin Dry Type (CRT), VPI Dry Type, and Inverter Duty Transformers up to 5 MVA capacity in 11 kV and 33 kV voltage classes."
  },
  {
    question: "What is the key difference between Oil-Filled and Cast Resin Dry-Type (CRT) Transformers?",
    answer: "Oil-Filled transformers use mineral or synthetic ester oil for dielectric cooling, making them ideal for heavy outdoor sub-stations and high-power applications. Cast Resin Dry-Type (CRT) transformers encapsulate windings in epoxy resin with zero oil. They are 100% non-flammable, self-extinguishing, maintenance-free, and ideal for indoor locations such as commercial high-rises, hospitals, airports, and data centres."
  },
  {
    question: "Which national standards and energy efficiency levels do your transformers comply with?",
    answer: "Our transformers are manufactured strictly compliant with Bureau of Indian Standards (BIS) specifications IS 1180 (Part 1), IS 2026, and IS 335, as well as BEE Star Rating Energy Efficiency Levels 1, 2, and 3, and ECBC regulations. Our manufacturing facility is ZED Gold certified by the Ministry of MSME."
  },
  {
    question: "What equipment is integrated inside a G Sons Power Compact Substation (CSS)?",
    answer: "A Compact Substation (CSS) is a pre-fabricated, factory-assembled package comprising three segregated compartments: (1) High Voltage (HT) Switchgear containing an SF6 Ring Main Unit (RMU) or Vacuum Circuit Breaker (VCB), (2) a Step-Down Distribution Transformer (Oil-Filled or Dry-Type up to 5 MVA), and (3) a Low Voltage (LT) Switchgear panel with ACB/MCCB feeders, APFC capacitors, and digital metering inside an IP54/IP55 weatherproof kiosk."
  },
  {
    question: "Can G Sons Power customize voltage ratios, tapping configurations, and physical footprints?",
    answer: "Yes. Every unit can be engineered to project specifications, including custom primary/secondary voltage ratings (e.g. 11/0.433 kV, 33/0.433 kV, 33/11 kV), Off-Circuit Tap Changers (OCTC), On-Load Tap Changers (OLTC with RTCC and AVR), dual secondary windings for solar inverters, and customized dimensional footprints."
  },
  {
    question: "What in-house quality tests are conducted on every unit before dispatch?",
    answer: "100% of our transformers undergo mandatory in-house routine testing in our computerized test bay, including: Measurement of Winding Resistance, Voltage Ratio & Vector Group Verification, Separate Source AC Withstand Voltage Test, Induced Overvoltage Test, No-Load Loss and Current Measurement, and Load Loss & Impedance Voltage Measurement. Type tests (Impulse & Temperature Rise) are conducted and certified by CPRI and ERDA."
  }
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-white border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading
          eyebrow="TECHNICAL & COMMERCIAL QUESTIONS"
          title="Frequently Asked Questions (FAQ)"
          subtitle="Clear answers on manufacturing standards, testing protocols, custom tap changers, and transformer selection."
          align="center"
        />

        <div className="space-y-3.5 mt-12">
          {faqItems.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`border rounded-sm transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-[#0052cc] bg-slate-50/80 shadow-xs'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between font-bold text-sm sm:text-base text-[#0f172a] hover:text-[#0052cc] transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="pr-4 flex items-center gap-3">
                    <span className="text-xs font-black text-[#0052cc] shrink-0">
                      Q{idx + 1}.
                    </span>
                    <span>{faq.question}</span>
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'bg-[#0052cc] text-white rotate-180' : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/70">
                    <p className="pt-3 font-normal">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* FAQ Support Callout */}
        <div className="mt-12 text-center p-6 bg-slate-50 border border-slate-200 rounded-sm">
          <p className="text-xs text-slate-600">
            Have a technical query not listed here?{' '}
            <Link href="/contact" className="text-[#0052cc] font-bold hover:underline">
              Contact our transformer design engineers directly
            </Link>{' '}
            or call <span className="font-bold text-[#0f172a]">+91 800 555-POWER</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
