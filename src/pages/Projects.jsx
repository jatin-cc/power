import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import Header from '../components/Header/Header.jsx';
import ProjectGrid from '../components/ProjectGrid/ProjectGrid.jsx';
import Footer from '../components/Footer/Footer.jsx';
import { useProjects } from '../hooks/useProjects.js';
import styles from './Projects.module.css';

export default function Projects() {
  const { projects, loading, error, retry } = useProjects();
  const [activeCategoryId, setActiveCategoryId] = useState(33);
  const [filtered, setFiltered] = useState([]);
  const gridRef = useRef(null);

  // Filter projects when category or projects change
  useEffect(() => {
    if (activeCategoryId === 33 || !activeCategoryId) {
      setFiltered(projects);
      return;
    }

    const result = projects.filter((p) =>
      p.categories.some((c) => c.id === activeCategoryId)
    );
    setFiltered(result);
  }, [activeCategoryId, projects]);

  // Smooth category switch animation
  const handleCategoryChange = (id) => {
    if (id === activeCategoryId) return;

    if (gridRef.current) {
      gsap.to(gridRef.current, {
        opacity: 0,
        y: -10,
        duration: 0.2,
        ease: 'power2.in',
        onComplete: () => {
          setActiveCategoryId(id);
          gsap.to(gridRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.35,
            ease: 'power2.out',
          });
        },
      });
    } else {
      setActiveCategoryId(id);
    }
  };

  return (
    <main className={styles.mainContainer}>
      {/* BIG Header: Logo | Categories | Subcategories | COMPLETED */}
      <Header
        activeCategoryId={activeCategoryId}
        onCategoryChange={handleCategoryChange}
      />

      {/* Project Cards Section (Icon + Title + Location on Left | Image in Center) */}
      <div ref={gridRef} className={styles.gridSection}>
        <ProjectGrid
          projects={filtered}
          loading={loading}
          error={error}
          onRetry={retry}
        />
      </div>

      <Footer />
    </main>
  );
}
