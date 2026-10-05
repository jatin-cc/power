'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { useRef } from 'react';
import gsap from 'gsap';

export default function CTAButton({
  children,
  href,
  onClick,
  variant = 'primary', // 'primary' | 'secondary' | 'outline'
  size = 'md', // 'sm' | 'md' | 'lg'
  icon = true,
  className = '',
  ...props
}) {
  const btnRef = useRef(null);

  const handleMouseEnter = () => {
    if (!btnRef.current) return;
    gsap.to(btnRef.current, { scale: 1.03, duration: 0.25, ease: 'power2.out' });
  };

  const handleMouseLeave = () => {
    if (!btnRef.current) return;
    gsap.to(btnRef.current, { scale: 1, x: 0, y: 0, duration: 0.3, ease: 'power2.out' });
  };

  const baseStyles =
    'relative inline-flex items-center justify-center font-medium transition-all duration-300 group overflow-hidden cursor-pointer select-none rounded-none border';

  const variantStyles = {
    primary:
      'bg-[#063772] text-white border-[#063772] hover:bg-[#042956] hover:border-[#042956] shadow-md shadow-[#063772]/20',
    secondary:
      'bg-[#23790a] text-white border-[#23790a] hover:bg-[#1c6208] hover:border-[#1c6208] shadow-md shadow-[#23790a]/20',
    outline:
      'bg-transparent text-[#063772] border-slate-300 hover:border-[#063772] hover:text-[#063772]',
    'secondary-outline':
      'bg-[#23790a]/10 text-[#23790a] border-[#23790a]/20 hover:bg-[#23790a] hover:text-white hover:border-[#23790a]',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-xs tracking-wider uppercase gap-1.5',
    md: 'px-6 py-3 text-sm tracking-wider uppercase gap-2',
    lg: 'px-8 py-4 text-base tracking-wider uppercase gap-3',
  };

  const content = (
    <span
      ref={btnRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      <span className="relative z-10 font-semibold">{children}</span>
      {icon && (
        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 relative z-10" />
      )}
    </span>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return <button onClick={onClick}>{content}</button>;
}
