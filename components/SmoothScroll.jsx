'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SmoothScroll({ children }) {
  useEffect(() => {
    // Respect user prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      prevent: (node) => {
        if (!node || typeof node.closest !== 'function') return false;
        return (
          node.closest('[data-lenis-prevent]') !== null ||
          node.closest('header') !== null ||
          node.closest('[data-subscroll]') !== null ||
          node.closest('.overflow-y-auto') !== null ||
          node.closest('.overflow-x-auto') !== null
        );
      },
    });

    function updateScroll(time) {
      lenis.raf(time * 1000);
    }

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add(updateScroll);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateScroll);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
