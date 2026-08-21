import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import styles from './CustomCursor.module.css';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);
  const [isTouch, setIsTouch] = useState(false);
  const [mode, setMode] = useState('default'); // 'default' | 'view' | 'link'

  useEffect(() => {
    // Disable on touch devices
    const touch = window.matchMedia('(hover: none)').matches;
    setIsTouch(touch);
    if (touch) return;

    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;

    const xTo = gsap.quickTo(cursor, 'x', { duration: 0.5, ease: 'power3.out' });
    const yTo = gsap.quickTo(cursor, 'y', { duration: 0.5, ease: 'power3.out' });
    const xDot = gsap.quickTo(dot, 'x', { duration: 0.15, ease: 'power3.out' });
    const yDot = gsap.quickTo(dot, 'y', { duration: 0.15, ease: 'power3.out' });

    const onMove = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
      xDot(e.clientX);
      yDot(e.clientY);
    };

    const onProjectEnter = () => setMode('view');
    const onProjectLeave = () => setMode('default');
    const onLinkEnter = () => setMode('link');
    const onLinkLeave = () => setMode('default');

    window.addEventListener('mousemove', onMove);

    // Delegate event handling
    document.addEventListener('mouseover', (e) => {
      const target = e.target.closest('[data-cursor="view"]');
      const link = e.target.closest('a, button, [data-cursor="link"]');
      if (target) onProjectEnter();
      else if (link) onLinkEnter();
      else {
        onProjectLeave();
        onLinkLeave();
      }
    });

    return () => {
      window.removeEventListener('mousemove', onMove);
    };
  }, []);

  if (isTouch) return null;

  return (
    <>
      {/* Trailing circle */}
      <div
        ref={cursorRef}
        className={`${styles.cursor} ${styles[`cursor--${mode}`]}`}
        aria-hidden="true"
      >
        {mode === 'view' && <span className={styles.viewLabel}>VIEW</span>}
      </div>

      {/* Instant dot */}
      <div
        ref={dotRef}
        className={styles.dot}
        aria-hidden="true"
      />
    </>
  );
}
