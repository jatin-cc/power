import { useState, useMemo } from 'react';
import styles from './CategoryFilter.module.css';

/**
 * BIG (Bjarke Ingels Group — big.dk) dual-tier category navigation bar.
 * Top tier: Main Categories (e.g. ARCHITECTURE with active square ■ prefix)
 * Bottom tier: Subcategories (e.g. Culture, Education, Work, Hospitality...)
 */
export default function CategoryFilter({ categories = [], activeId, onChange }) {
  // Find which main parent category is active or contains active child
  const activeParent = useMemo(() => {
    if (!categories.length) return null;
    // Check if activeId is a parent category
    const parentMatch = categories.find((cat) => cat.id === activeId);
    if (parentMatch) return parentMatch;

    // Check if activeId is a child category
    for (const cat of categories) {
      if (cat.children && cat.children.some((child) => child.id === activeId)) {
        return cat;
      }
    }

    // Default to Architecture or first category with children
    return categories.find((cat) => cat.id === 1) || categories[0];
  }, [categories, activeId]);

  const [selectedParentId, setSelectedParentId] = useState(() => activeParent?.id || 1);

  // Synchronize selectedParentId if activeId changes from outside
  const currentParent = categories.find((c) => c.id === selectedParentId) || activeParent || categories[0];

  const handleParentClick = (cat) => {
    setSelectedParentId(cat.id);
    onChange(cat.id);
  };

  const handleSubCategoryClick = (childId) => {
    onChange(childId);
  };

  // Extract main top categories for BIG navigation:
  // Architecture, Interior, Landscape, Planning, Engineering, Sustainability
  const mainCategories = categories.filter(
    (c) => c.id !== 33 // filter out 'All' if we want clean BIG tab layout, or keep 'ALL'
  );

  const subCategories = currentParent?.children || [];

  return (
    <div className={styles.bigNavContainer}>
      {/* Tier 1: Main Categories */}
      <nav className={styles.mainNav} aria-label="Main architectural categories">
        <ul className={styles.mainList}>
          {mainCategories.map((cat) => {
            const isActive = currentParent?.id === cat.id;
            return (
              <li key={cat.id} className={styles.mainItem}>
                <button
                  className={`${styles.mainBtn} ${isActive ? styles.mainBtnActive : ''}`}
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

      {/* Tier 2: Subcategories (Horizontal bar matching BIG screenshot) */}
      {subCategories.length > 0 && (
        <nav className={styles.subNav} aria-label="Subcategory filters">
          <ul className={styles.subList}>
            {subCategories.map((child) => {
              const isChildActive = activeId === child.id;
              return (
                <li key={child.id} className={styles.subItem}>
                  <button
                    className={`${styles.subBtn} ${isChildActive ? styles.subBtnActive : ''}`}
                    onClick={() => handleSubCategoryClick(child.id)}
                    data-cursor="link"
                  >
                    {child.name}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </div>
  );
}
