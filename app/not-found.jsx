import Link from 'next/link';
import CTAButton from '@/components/CTAButton';
import { Zap, AlertTriangle } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-[80vh] pt-32 pb-24 flex items-center justify-center bg-white text-[#0f172a]">
      <div className="max-w-md mx-auto px-6 text-center space-y-6">
        <div className="w-16 h-16 bg-[#063772]/10 text-[#063772] rounded-full mx-auto flex items-center justify-center font-bold">
          <AlertTriangle className="w-8 h-8" />
        </div>

        <span className="text-4xl font-extrabold text-[#063772] font-mono block">404</span>

        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0f172a]">
          Substation Route Not Found
        </h1>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          The grid page or technical resource you are looking for has been moved, re-indexed, or does not exist.
        </p>

        <div className="pt-4 flex justify-center gap-4">
          <CTAButton href="/" size="md" variant="primary">
            Return to Homepage
          </CTAButton>
          <CTAButton href="/products-services" size="md" variant="outline">
            Browse Products
          </CTAButton>
        </div>
      </div>
    </main>
  );
}
