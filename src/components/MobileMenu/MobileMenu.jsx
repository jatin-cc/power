import { useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import gsap from 'gsap';
import styles from './MobileMenu.module.css';

export default function MobileMenu({ isOpen, onClose, links }) {
  const overlayRef = useRef(null);
  const linksRef = useRef([]);
  const tlRef = useRef(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;

    if (tlRef.current) tlRef.current.kill();

    const tl = gsap.timeline();
    tlRef.current = tl;

    if (isOpen) {
      gsap.set(overlay, { display: 'flex', clipPath: 'inset(0 0 100% 0)' });
      tl.to(overlay, {
        clipPath: 'inset(0 0 0% 0)',
        duration: 0.6,
        ease: 'power4.out',
      });

      const linkEls = linksRef.current.filter(Boolean);
      gsap.set(linkEls, { opacity: 0, y: 40 });
      tl.to(linkEls, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.06,
        ease: 'power3.out',
      }, 0.2);
    } else {
      const linkEls = linksRef.current.filter(Boolean);
      tl.to(linkEls, {
        opacity: 0,
        y: -20,
        duration: 0.25,
        stagger: 0.04,
        ease: 'power2.in',
      });
      tl.to(overlay, {
        clipPath: 'inset(0 0 100% 0)',
        duration: 0.5,
        ease: 'power4.in',
        onComplete: () => {
          gsap.set(overlay, { display: 'none' });
        },
      }, 0.1);
    }
  }, [isOpen]);

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <div
      ref={overlayRef}
      className={styles.overlay}
      style={{ display: 'none' }}
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
    >
      <button className={styles.closeArea} onClick={onClose} aria-label="Close menu" />

      <nav className={styles.nav} aria-label="Mobile navigation">
        {links.map(({ to, label }, i) => (
          <NavLink
            key={to}
            to={to}
            ref={(el) => (linksRef.current[i] = el)}
            className={({ isActive }) =>
              `${styles.link} ${isActive ? styles.linkActive : ''}`
            }
            onClick={onClose}
          >
            <span className={styles.linkNum}>0{i + 1}</span>
            <span className={styles.linkLabel}>{label}</span>
          </NavLink>
        ))}
      </nav>

      <div className={styles.footer}>
        <p className={styles.footerText}>INI Design Studio</p>
      </div>
    </div>
  );
}
