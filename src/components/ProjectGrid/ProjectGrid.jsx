import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProjectCard from '../ProjectCard/ProjectCard.jsx';
import styles from './ProjectGrid.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectGrid({ projects = [], loading, error, onRetry }) {
  const [expandedProjectId, setExpandedProjectId] = useState(null);
  const containerRef = useRef(null);
  const rowsRef = useRef([]);

  const handleToggleExpand = (id) => {
    setExpandedProjectId((prev) => (prev === id ? null : id));
  };

  // Scroll scale-down animation without hiding cards initially
  useEffect(() => {
    if (loading || !projects.length || !containerRef.current) return;

    const rows = rowsRef.current.filter(Boolean);
    if (!rows.length) return;

    // Ensure all cards are 100% visible immediately on load (no initial hiding)
    gsap.set(rows, { opacity: 1, y: 0, scale: 1 });

    const ctx = gsap.context(() => {
      rows.forEach((row) => {
        // Smooth scale down as card scrolls toward top of screen
        gsap.to(row, {
          scale: 0.94,
          ease: 'none',
          scrollTrigger: {
            trigger: row,
            start: 'top 15%',   // starts scaling when card reaches top 15% of viewport
            end: 'bottom top',  // finishes scale down as card leaves screen
            scrub: true,        // smooth scroll-linked effect
          },
        });
      });
    }, containerRef);

    // Refresh ScrollTrigger calculations
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      ctx.revert();
    };
  }, [projects, loading]);

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
      <div className={styles.loadingContainer} aria-busy="true">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className={styles.skeletonRow}>
            <div className={styles.skeletonLeft}>
              <div className={styles.skeletonIcon} />
              <div className={styles.skeletonLine} style={{ width: '80%' }} />
              <div className={styles.skeletonLine} style={{ width: '50%' }} />
            </div>
            <div className={styles.skeletonRight} />
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
    <div ref={containerRef} className={styles.gridWrapper}>
      {projects.map((project, i) => (
        <div key={project.id} ref={(el) => (rowsRef.current[i] = el)}>
          <ProjectCard
            project={project}
            index={i}
            isExpanded={expandedProjectId === project.id}
            onToggleExpand={() => handleToggleExpand(project.id)}
          />
        </div>
      ))}
    </div>
  );
}
