import { useState, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCategories } from '../../hooks/useCategories.js';
import styles from './Header.module.css';

/**
 * Unified BIG (Bjarke Ingels Group — big.dk) Header & Category Navigation.
 * Top Row: Logo (Left) | Main Categories (Center) | COMPLETED / Search (Right)
 * Bottom Row: Subcategories (Center)
 */
export default function Header({ activeCategoryId, onCategoryChange }) {
  const { categories } = useCategories();
  const location = useLocation();
  const [internalActiveId, setInternalActiveId] = useState(33);

  const activeId = activeCategoryId !== undefined ? activeCategoryId : internalActiveId;

  const handleCategoryClick = (id) => {
    if (onCategoryChange) {
      onCategoryChange(id);
    } else {
      setInternalActiveId(id);
    }
  };

  // Find active parent category
  const activeParent = useMemo(() => {
    if (!categories.length) return null;
    const parentMatch = categories.find((cat) => cat.id === activeId);
    if (parentMatch) return parentMatch;

    for (const cat of categories) {
      if (cat.children && cat.children.some((child) => child.id === activeId)) {
        return cat;
      }
    }
    return categories.find((cat) => cat.id === 1) || categories[0];
  }, [categories, activeId]);

  const [selectedParentId, setSelectedParentId] = useState(() => activeParent?.id || 1);

  const currentParent = categories.find((c) => c.id === selectedParentId) || activeParent || categories[0];

  const handleParentClick = (cat) => {
    setSelectedParentId(cat.id);
    handleCategoryClick(cat.id);
  };

  // Main categories matching BIG: Architecture, Interiors, Landscape, Planning, Products/Engineering
  const mainCategories = categories.filter((c) => c.id !== 33);
  const subCategories = currentParent?.children || [];

  return (
    <header className={styles.header} role="banner">
      {/* Tier 1 Bar: Logo | Main Categories | COMPLETED Search */}
      <div className={styles.topRow}>
        {/* Far Left: BIG Logo */}
        <Link to="/" className={styles.logo} aria-label="BIG — Home">
          <span className={styles.logoBold}>BIG</span>
        </Link>

        {/* Center: Primary Categories */}
        <nav className={styles.mainNav} aria-label="Primary Categories">
          <ul className={styles.mainList}>
            {mainCategories.map((cat) => {
              const isActive = currentParent?.id === cat.id;
              return (
                <li key={cat.id} className={styles.mainItem}>
                  <button
                    className={`${styles.mainBtn} ${isActive ? styles.mainActive : ''}`}
                    onClick={() => handleParentClick(cat)}
                    data-cursor="link"
                  >
                    <span className={styles.squareMarker}>{isActive ? '■' : ''}</span>
                    <span className={styles.catLabel}>{cat.name.toUpperCase()}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Far Right: Search / COMPLETED */}
        <div className={styles.rightAction}>
          <button className={styles.searchBtn} aria-label="Search Completed Projects" data-cursor="link">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <span className={styles.completedText}>COMPLETED</span>
          </button>
        </div>
      </div>

      {/* Tier 2 Bar: Subcategories */}
      {subCategories.length > 0 && (
        <div className={styles.subRow}>
          <nav className={styles.subNav} aria-label="Subcategory Filters">
            <ul className={styles.subList}>
              {subCategories.map((child) => {
                const isChildActive = activeId === child.id;
                // Shorten labels to match BIG screenshot style cleanly
                let displayName = child.name;
                if (displayName.includes('Civic')) displayName = 'Culture';
                if (displayName.includes('Healthcare')) displayName = 'Health';
                if (displayName.includes('Sports')) displayName = 'Sports';
                if (displayName.includes('Industrial')) displayName = 'Infrastructure';
                if (displayName.includes('Mixed')) displayName = 'Space';

                return (
                  <li key={child.id} className={styles.subItem}>
                    <button
                      className={`${styles.subBtn} ${isChildActive ? styles.subActive : ''}`}
                      onClick={() => handleCategoryClick(child.id)}
                      data-cursor="link"
                    >
                      {displayName}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
