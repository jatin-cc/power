import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';
import styles from './PageTransition.module.css';

export default function PageTransition({ children }) {
  const location = useLocation();
  const overlayRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    const content = contentRef.current;
    if (!overlay || !content) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    // Trigger transition animation on route change
    const tl = gsap.timeline();

    gsap.set(overlay, { display: 'block', clipPath: 'inset(0 0 100% 0)' });
    gsap.set(content, { opacity: 0, y: 15 });

    tl.to(overlay, {
      clipPath: 'inset(0 0 0% 0)',
      duration: 0.35,
      ease: 'power3.inOut',
    });

    tl.to(content, {
      opacity: 1,
      y: 0,
      duration: 0.45,
      ease: 'power3.out',
    });

    tl.to(
      overlay,
      {
        clipPath: 'inset(100% 0 0 0)',
        duration: 0.4,
        ease: 'power3.inOut',
        onComplete: () => {
          gsap.set(overlay, { display: 'none' });
        },
      },
      '-=0.2'
    );

    return () => tl.kill();
  }, [location.pathname]);

  return (
    <>
      <div ref={overlayRef} className={styles.transitionOverlay} aria-hidden="true" />
      <div ref={contentRef} className="page-content">
        {children}
      </div>
    </>
  );
}
