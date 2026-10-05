'use client';

import { useState, useRef } from 'react';
import SectionHeading from '@/components/SectionHeading';
import { services } from '@/data/services';
import CTAButton from '@/components/CTAButton';
import { Wrench, Activity, Droplets, Cpu, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import gsap from 'gsap';

export default function ServicesInteractive() {
  const [selectedService, setSelectedService] = useState(services[0]);
  const panelRef = useRef(null);

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Wrench': return <Wrench className="w-4 h-4" />;
      case 'Activity': return <Activity className="w-4 h-4" />;
      case 'Droplets': return <Droplets className="w-4 h-4" />;
      case 'Cpu': return <Cpu className="w-4 h-4" />;
      default: return <ShieldCheck className="w-4 h-4" />;
    }
  };

  const handleSelect = (service) => {
    if (selectedService.id === service.id) return;
    gsap.to(panelRef.current, {
      opacity: 0,
      x: 10,
      duration: 0.2,
      onComplete: () => {
        setSelectedService(service);
        gsap.to(panelRef.current, { opacity: 1, x: 0, duration: 0.35, ease: 'power2.out' });
      },
    });
  };

  return (
    <section className="py-24 bg-slate-50/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow="FIELD & FACTORY SERVICES"
          title="Lifecycle Engineering & Substation Diagnostics."
          subtitle="From emergency 24/7 on-site repair to online IoT multi-gas monitoring, Vortex protects high-voltage assets throughout their operating lifespan."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Service Selector Tabs */}
          <div className="lg:col-span-4 space-y-2">
            {services.map((item) => {
              const isSelected = selectedService.id === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleSelect(item)}
                  className={`w-full text-left p-4 border transition-all duration-200 flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? 'border-[#063772] bg-[#063772] text-white shadow-md shadow-[#063772]/15'
                      : 'border-slate-200 bg-white text-[#0f172a] hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 flex items-center justify-center font-bold text-xs ${
                        isSelected ? 'bg-white/20 text-white' : 'bg-[#063772]/10 text-[#063772]'
                      }`}
                    >
                      {getIcon(item.icon)}
                    </div>
                    <span className="font-bold text-sm">{item.name}</span>
                  </div>
                  <ArrowRight className={`w-4 h-4 transition-transform ${isSelected ? 'translate-x-1' : 'opacity-40'}`} />
                </button>
              );
            })}
          </div>

          {/* Right Detailed Service Panel */}
          <div className="lg:col-span-8 bg-white border border-slate-200 p-8 sm:p-10 flex flex-col justify-between shadow-sm">
            <div ref={panelRef} className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-6">
                <div>
                  <span className="text-[10px] font-bold tracking-widest text-[#063772] uppercase block mb-1">
                    SERVICE OVERVIEW
                  </span>
                  <h3 className="text-2xl font-extrabold text-[#0f172a]">{selectedService.name}</h3>
                </div>
                <CTAButton href={`/services/${selectedService.slug}`} size="sm" variant="primary">
                  Service Details
                </CTAButton>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {selectedService.fullDesc}
              </p>

              {/* Service Process Timeline */}
              <div className="pt-2 space-y-3">
                <h4 className="text-xs font-bold tracking-widest text-[#0f172a] uppercase">
                  EXECUTION PROTOCOL STEPS
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {selectedService.process.map((step) => (
                    <div key={step.step} className="p-4 bg-slate-50 border border-slate-200">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold text-[#063772]">{step.step}</span>
                        <span className="font-bold text-xs text-[#0f172a]">{step.title}</span>
                      </div>
                      <p className="text-[11px] text-slate-500 leading-relaxed">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Benefits List */}
              <div className="pt-4 border-t border-slate-200">
                <h4 className="text-xs font-bold tracking-widest text-[#0f172a] uppercase mb-3">
                  KEY VALUE DELIVERABLES
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedService.benefits.map((b, bIdx) => (
                    <div key={bIdx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#23790a] shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
