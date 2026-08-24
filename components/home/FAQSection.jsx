'use client';

import { useState } from 'react';
import SectionHeading from '@/components/SectionHeading';
import { faqs } from '@/data/faqs';
import { ChevronDown } from 'lucide-react';

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading
          eyebrow="TECHNICAL & COMMERCIAL FAQS"
          title="Frequently Asked Questions."
          subtitle="Clear answers on manufacturing standards, testing protocols, lead times, and field diagnostic capabilities."
          align="center"
        />

        <div className="space-y-4 mt-8">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="border border-slate-200 bg-slate-50/50 transition-colors duration-200"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 flex items-center justify-between font-bold text-sm text-[#0f172a] hover:text-[#0052cc] transition-colors cursor-pointer"
                >
                  <span className="pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#0052cc] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 mt-1">
                    <p className="pt-3">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
