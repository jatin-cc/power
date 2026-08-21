import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import CategoryFilter from '../components/CategoryFilter/CategoryFilter.jsx';
import ProjectGrid from '../components/ProjectGrid/ProjectGrid.jsx';
import Footer from '../components/Footer/Footer.jsx';
import { useProjects } from '../hooks/useProjects.js';
import { useCategories } from '../hooks/useCategories.js';
import styles from './Projects.module.css';

export default function Projects() {
  const { projects, loading, error, retry } = useProjects();
  const { categories } = useCategories();
  const [activeCategoryId, setActiveCategoryId] = useState(33); // "All" default
  const [viewMode, setViewMode] = useState('vertical'); // Default to Apple-style vertical carousel
  const [filtered, setFiltered] = useState([]);
  const gridRef = useRef(null);
  const titleRef = useRef(null);

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

  // Animate category change
  const handleCategoryChange = (id) => {
    if (id === activeCategoryId) return;

    const cards = gridRef.current?.querySelectorAll('[data-index]');
    if (cards && cards.length > 0) {
      gsap.to(Array.from(cards), {
        opacity: 0,
        y: -15,
        duration: 0.3,
        stagger: 0.03,
        ease: 'power2.in',
        onComplete: () => {
          setActiveCategoryId(id);
        },
      });
    } else {
      setActiveCategoryId(id);
    }
  };

  // Page title entrance
  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    gsap.fromTo(
      el,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', delay: 0.1 }
    );
  }, []);

  const activeCategoryName = activeCategoryId === 33
    ? 'All'
    : categories.find((c) => c.id === activeCategoryId)?.name ||
      categories.flatMap((c) => c.children || []).find((c) => c.id === activeCategoryId)?.name ||
      'All';

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {/* Page Header */}
        <div ref={titleRef} className={styles.pageHeader}>
          <div>
            <h1 className={styles.pageTitle}>Work</h1>
            <p className={styles.projectCount}>
              {!loading && (
                <span>
                  {filtered.length} {filtered.length === 1 ? 'Project' : 'Projects'}
                  {activeCategoryId !== 33 && (
                    <span className={styles.categoryBadge}> — {activeCategoryName}</span>
                  )}
                </span>
              )}
            </p>
          </div>

          <div className={styles.headerRight}>
            <div className={styles.viewToggle}>
              <button
                className={`${styles.toggleBtn} ${viewMode === 'vertical' ? styles.toggleBtnActive : ''}`}
                onClick={() => setViewMode('vertical')}
                title="Vertical Interactive Showcase"
                data-cursor="link"
              >
                Carousel
              </button>
              <button
                className={`${styles.toggleBtn} ${viewMode === 'grid' ? styles.toggleBtnActive : ''}`}
                onClick={() => setViewMode('grid')}
                title="Editorial Grid View"
                data-cursor="link"
              >
                Grid
              </button>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        {categories.length > 0 && (
          <CategoryFilter
            categories={categories}
            activeId={activeCategoryId}
            onChange={handleCategoryChange}
          />
        )}

        {/* Project Grid / Showcase */}
        <div ref={gridRef}>
          <ProjectGrid
            projects={filtered}
            loading={loading}
            error={error}
            onRetry={retry}
            viewMode={viewMode}
          />
        </div>
      </div>

      <Footer />
    </main>
  );
}

