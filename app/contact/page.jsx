'use client';

import { useState } from 'react';
import SectionHeading from '@/components/SectionHeading';
import CTAButton from '@/components/CTAButton';
import { MapPin, Phone, Mail, Clock, CheckCircle2, ShieldCheck } from 'lucide-react';
import { products } from '@/data/products';
import { services } from '@/data/services';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    industry: 'Power & Utilities',
    enquiryType: 'Product Customization RFQ',
    productOrService: 'Power Transformers',
    message: '',
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <main className="pt-32 pb-24 bg-white text-[#0f172a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Contact Info & Offices */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#063772]">
                ENGINEERING CONSULTATION & RFQ
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0f172a] leading-tight">
                Request a Custom Technical Proposal.
              </h1>
              <p className="text-base text-slate-600 leading-relaxed font-normal">
                Our high-voltage design team typically responds to engineering inquiries and RFP specifications within 24 hours.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4 pt-4 border-t border-slate-200 text-xs sm:text-sm text-slate-700">
              <div className="p-5 bg-slate-50 border border-slate-200 flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#063772] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#0f172a] text-sm mb-0.5">Corporate Headquarters</h4>
                  <p className="text-slate-600 leading-relaxed">
                    Vortex Power Towers, Suite 1000, Innovation Way, Power Tech District
                  </p>
                </div>
              </div>

              <div className="p-5 bg-slate-50 border border-slate-200 flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#063772] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#0f172a] text-sm mb-0.5">Global Sales & Support Hotline</h4>
                  <p className="text-slate-600">+1 (800) 555-VOLT / +1 (800) 555-8658</p>
                </div>
              </div>

              <div className="p-5 bg-slate-50 border border-slate-200 flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#063772] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#0f172a] text-sm mb-0.5">RFQ & Technical Inbox</h4>
                  <p className="text-slate-600">corporate@vortexpowersystems.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right RFQ Form Panel */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 p-8 sm:p-10 shadow-sm">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-[#23790a] text-white rounded-full mx-auto flex items-center justify-center font-bold">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-extrabold text-[#0f172a]">Engineering Inquiry Received!</h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.fullName}</strong>. Your RFQ has been assigned to our principal high-voltage design team. Expect a response within 24 hours.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold text-[#063772] uppercase tracking-wider underline cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-xl font-extrabold text-[#0f172a] border-b border-slate-200 pb-3">
                  Technical RFQ & Specification Form
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-[#0f172a] uppercase block mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Dr. Robert Vance"
                      className="w-full bg-white border border-slate-300 p-3 text-xs text-[#0f172a] focus:border-[#063772] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-[#0f172a] uppercase block mb-1.5">
                      Company / Utility *
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. National Transmission Authority"
                      className="w-full bg-white border border-slate-300 p-3 text-xs text-[#0f172a] focus:border-[#063772] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-[#0f172a] uppercase block mb-1.5">
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="r.vance@utility.com"
                      className="w-full bg-white border border-slate-300 p-3 text-xs text-[#0f172a] focus:border-[#063772] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-[#0f172a] uppercase block mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 019-2834"
                      className="w-full bg-white border border-slate-300 p-3 text-xs text-[#0f172a] focus:border-[#063772] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-[#0f172a] uppercase block mb-1.5">
                      Country / Region *
                    </label>
                    <input
                      type="text"
                      name="country"
                      required
                      value={formData.country}
                      onChange={handleChange}
                      placeholder="e.g. United States, Germany, Japan"
                      className="w-full bg-white border border-slate-300 p-3 text-xs text-[#0f172a] focus:border-[#063772] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-[#0f172a] uppercase block mb-1.5">
                      Industry Sector
                    </label>
                    <select
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      className="w-full bg-white border border-slate-300 p-3 text-xs text-[#0f172a] focus:border-[#063772] focus:outline-none cursor-pointer"
                    >
                      <option>Power & Utilities</option>
                      <option>Renewable Energy (Solar/Wind)</option>
                      <option>Steel & Metallurgy</option>
                      <option>Railways & Transit</option>
                      <option>High-Density Data Centers</option>
                      <option>Oil, Gas & Deep Mining</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-[#0f172a] uppercase block mb-1.5">
                    Target Equipment / Service Category
                  </label>
                  <select
                    name="productOrService"
                    value={formData.productOrService}
                    onChange={handleChange}
                    className="w-full bg-white border border-slate-300 p-3 text-xs text-[#0f172a] focus:border-[#063772] focus:outline-none cursor-pointer"
                  >
                    <optgroup label="Transformer Products">
                      {products.map((p) => (
                        <option key={p.id} value={p.name}>{p.name}</option>
                      ))}
                    </optgroup>
                    <optgroup label="Field & Diagnostics">
                      {services.map((s) => (
                        <option key={s.id} value={s.name}>{s.name}</option>
                      ))}
                    </optgroup>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-[#0f172a] uppercase block mb-1.5">
                    Engineering Specifications & Scope *
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Specify MVA rating, voltage class, vector group, cooling type (ONAN/ONAF), or required field diagnostic protocol..."
                    className="w-full bg-white border border-slate-300 p-3 text-xs text-[#0f172a] focus:border-[#063772] focus:outline-none"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    required
                    checked={formData.consent}
                    onChange={handleChange}
                    className="cursor-pointer accent-[#063772]"
                  />
                  <label htmlFor="consent" className="text-[11px] text-slate-600 cursor-pointer">
                    I agree to allow Vortex Power Systems to process my information for engineering proposal generation.
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#063772] text-white font-bold text-xs uppercase tracking-wider py-4 hover:bg-[#042956] transition-colors cursor-pointer disabled:opacity-50"
                >
                  {loading ? 'Processing Specification Proposal...' : 'Submit Engineering RFQ Inquiry'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
