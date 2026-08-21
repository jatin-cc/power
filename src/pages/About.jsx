import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Footer from '../components/Footer/Footer.jsx';
import styles from './About.module.css';

const DISCIPLINES = [
  'Architecture',
  'Urban Design & Master Planning',
  'Engineering',
  'Landscape Design',
  'Interior Architecture',
  'Sustainability & Climate Resilient Design',
  'Research & Environmental Graphics',
];

export default function About() {
  const pageRef = useRef(null);

  useEffect(() => {
    const el = pageRef.current;
    if (!el) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    window.scrollTo(0, 0);

    const items = el.querySelectorAll('[data-reveal]');
    gsap.set(items, { opacity: 0, y: 40 });

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
        {/* Header */}
        <header className={styles.header}>
          <h1 className={styles.title} data-reveal>
            Studio Profile
          </h1>
          <p className={styles.subtitle} data-reveal>
            INI Design Studio — Integrated design solutions rooted in humanism, sustainability, and architectural innovation.
          </p>
        </header>

        {/* Statement Section */}
        <section className={styles.section} data-reveal>
          <div className={styles.sectionGrid}>
            <div className={styles.sectionLabel}>Philosophy</div>
            <div className={styles.sectionContent}>
              <p className={styles.leadText}>
                We believe architecture is not merely about creating built volumes, but about shaping environments where human life, culture, and nature coexist in balance.
              </p>
              <p className={styles.bodyText}>
                Our multi-disciplinary practice operates at the intersection of spatial intelligence, structural integrity, and environmental stewardship. From large-scale masterplans to intricate interior spaces, every project is conceived through deep contextual research and material rigor.
              </p>
            </div>
          </div>
        </section>

        {/* Disciplines Section */}
        <section className={styles.section} data-reveal>
          <div className={styles.sectionGrid}>
            <div className={styles.sectionLabel}>Disciplines</div>
            <div className={styles.sectionContent}>
              <ul className={styles.disciplineList}>
                {DISCIPLINES.map((discipline, idx) => (
                  <li key={idx} className={styles.disciplineItem}>
                    <span className={styles.disciplineNum}>0{idx + 1}</span>
                    <span className={styles.disciplineName}>{discipline}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
