import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Footer from '../components/Footer/Footer.jsx';
import styles from './News.module.css';

export default function News() {
  const pageRef = useRef(null);

  useEffect(() => {
    const el = pageRef.current;
    if (!el) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    window.scrollTo(0, 0);

    const items = el.querySelectorAll('[data-reveal]');
    gsap.set(items, { opacity: 0, y: 35 });

    gsap.to(items, {
      opacity: 1,
      y: 0,
      duration: 0.9,
      stagger: 0.1,
      ease: 'power3.out',
      delay: 0.1,
    });
  }, []);

  return (
    <main ref={pageRef} className={styles.main}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title} data-reveal>
            News & Press
          </h1>
          <p className={styles.subtitle} data-reveal>
            Latest announcements, publications, and architectural insights from INI Design Studio.
          </p>
        </header>

        <section className={styles.content} data-reveal>
          <div className={styles.emptyCard}>
            <span className={styles.badge}>Archive</span>
            <h2 className={styles.emptyTitle}>Publications & Media Updates</h2>
            <p className={styles.emptyText}>
              Detailed press archives and project monographs are currently being cataloged. Please visit our projects portfolio to explore our latest completed works.
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
