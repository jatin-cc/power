'use client';

import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(() => {
    if (typeof window !== 'undefined') {
      return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    }
    return false;
  });

  useEffect(() => {
    if (isTouchDevice) return;

    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    if (!cursor || !cursorDot) return;

    const xTo = gsap.quickTo(cursor, 'x', { duration: 0.3, ease: 'power3.out' });
    const yTo = gsap.quickTo(cursor, 'y', { duration: 0.3, ease: 'power3.out' });
    const dotXTo = gsap.quickTo(cursorDot, 'x', { duration: 0.1, ease: 'power2.out' });
    const dotYTo = gsap.quickTo(cursorDot, 'y', { duration: 0.1, ease: 'power2.out' });

    const handleMouseMove = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
      dotXTo(e.clientX);
      dotYTo(e.clientY);
    };

    const handleMouseOver = (e) => {
      const target = e.target.closest('[data-cursor]');
      if (target) {
        const text = target.getAttribute('data-cursor');
        setCursorText(text || '');
        setIsHovered(true);
      } else {
        setIsHovered(false);
        setCursorText('');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isTouchDevice]);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Outer Cursor Circle */}
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 pointer-events-none z-50 rounded-full border border-[#063772] flex items-center justify-center -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ${
          isHovered
            ? 'w-16 h-16 bg-[#063772] text-white opacity-95 shadow-lg shadow-[#063772]/20'
            : 'w-8 h-8 bg-[#063772]/5 opacity-60'
        }`}
      >
        {isHovered && cursorText && (
          <span className="text-[10px] font-bold tracking-widest uppercase text-white animate-fade-in">
            {cursorText}
          </span>
        )}
      </div>

      {/* Inner Precision Dot */}
      <div
        ref={cursorDotRef}
        className={`fixed top-0 left-0 pointer-events-none z-50 w-2 h-2 bg-[#063772] rounded-full -translate-x-1/2 -translate-y-1/2 transition-opacity duration-200 ${
          isHovered ? 'opacity-0' : 'opacity-80'
        }`}
      />
    </>
  );
}
