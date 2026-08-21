import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ProjectCard from '../ProjectCard/ProjectCard.jsx';
import VerticalProjectCarousel from '../VerticalProjectCarousel/VerticalProjectCarousel.jsx';
import styles from './ProjectGrid.module.css';

/**
 * Returns layout class based on position in grid for editorial variation.
 */
function getCardSpan(index) {
  const pattern = index % 7;
  if (pattern === 0) return 'full';
  if (pattern === 3) return 'wide';
  return 'normal';
}

export default function ProjectGrid({ projects, loading, error, onRetry, viewMode = 'vertical' }) {
  const gridRef = useRef(null);
  const cardRefs = useRef([]);

  // Animate cards in grid mode when projects change
  useEffect(() => {
    if (viewMode !== 'grid') return;
    const cards = cardRefs.current.filter(Boolean);
    if (cards.length === 0) return;

    gsap.set(cards, { opacity: 0, y: 50 });
    gsap.to(cards, {
      opacity: 1,
      y: 0,
      duration: 0.85,
      stagger: 0.08,
      ease: 'power3.out',
      delay: 0.1,
    });
  }, [projects, viewMode]);

  // Default to Vertical Apple-Style Showcase Experience
  if (viewMode === 'vertical') {
    return (
      <VerticalProjectCarousel
        projects={projects}
        loading={loading}
        error={error}
        onRetry={onRetry}
      />
    );
  }

  if (error) {
    return (
      <div className={styles.errorState}>
        <p className={styles.errorMsg}>Unable to load projects.</p>
        <button className={styles.retryBtn} onClick={onRetry} data-cursor="link">
          Retry
        </button>
      </div>
    );
  }

  if (loading) {
    return (
      <div className={styles.grid} aria-busy="true">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className={`${styles.cardWrap} ${styles[getCardSpan(i)]}`}>
            <div
              className={styles.skeleton}
              style={{ aspectRatio: i === 0 ? '16/10' : i % 3 === 1 ? '3/4' : '4/3' }}
            />
            <div className={styles.skeletonMeta}>
              <div className={styles.skeletonLine} style={{ width: '60%' }} />
              <div className={styles.skeletonLine} style={{ width: '40%', marginTop: '0.5rem' }} />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (!projects || projects.length === 0) {
    return (
      <div className={styles.emptyState}>
        <p>No projects found in this category.</p>
      </div>
    );
  }

  return (
    <div ref={gridRef} className={styles.grid}>
      {projects.map((project, i) => {
        const span = getCardSpan(i);
        return (
          <div
            key={project.id}
            ref={(el) => (cardRefs.current[i] = el)}
            className={`${styles.cardWrap} ${styles[span]}`}
          >
            <ProjectCard
              project={project}
              index={i}
              featured={span === 'full'}
            />
          </div>
        );
      })}
    </div>
  );
}

