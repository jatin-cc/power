import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './LoadingScreen.module.css';

export default function LoadingScreen({ onComplete }) {
  const screenRef = useRef(null);
  const progressRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const screen = screenRef.current;
    const progress = progressRef.current;
    const text = textRef.current;
    if (!screen || !progress) return;

    const tl = gsap.timeline({
      onComplete: () => {
        onComplete?.();
      },
    });

    // Animate text in
    gsap.set(text, { opacity: 0, y: 20 });
    tl.to(text, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' });

    // Progress bar fills
    tl.fromTo(
      progress,
      { scaleX: 0 },
      { scaleX: 1, duration: 1.4, ease: 'power2.inOut' },
      0.2
    );

    // Exit: clip from bottom
    tl.to(screen, {
      clipPath: 'inset(0 0 100% 0)',
      duration: 0.7,
      ease: 'power4.inOut',
      delay: 0.1,
    });

    return () => tl.kill();
  }, [onComplete]);

  return (
    <div ref={screenRef} className={styles.screen} aria-hidden="true">
      <div className={styles.inner}>
        <p ref={textRef} className={styles.title}>
          <span className={styles.titleSerif}>INI</span>
          <span className={styles.titleSans}> Design Studio</span>
        </p>
        <div className={styles.progressTrack}>
          <div ref={progressRef} className={styles.progressBar} />
        </div>
      </div>
    </div>
  );
}
