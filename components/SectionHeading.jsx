'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left', // 'left' | 'center'
  dark = false, // Always light theme, but optional high contrast variant
  className = '',
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.heading-anim',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 60%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const alignmentClasses = align === 'center' ? 'text-center mx-auto items-center' : 'text-left';

  return (
    <div ref={containerRef} className={`flex flex-col max-w-3xl mb-12 ${alignmentClasses} ${className}`}>
      {eyebrow && (
        <div className="heading-anim inline-flex items-center gap-2 mb-3">
          <span className="w-6 h-[2px] bg-[#0052cc]" />
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#0052cc]">
            {eyebrow}
          </span>
        </div>
      )}

      {title && (
        <h2 className="heading-anim text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0f172a] leading-[1.15]">
          {title}
        </h2>
      )}

      {subtitle && (
        <p className="heading-anim mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
