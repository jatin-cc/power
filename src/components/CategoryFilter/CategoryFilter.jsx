import { useState } from 'react';
import styles from './CategoryFilter.module.css';

export default function CategoryFilter({ categories, activeId, onChange }) {
  const [expandedId, setExpandedId] = useState(null);

  const handleParentClick = (cat) => {
    if (cat.children && cat.children.length > 0) {
      setExpandedId(expandedId === cat.id ? null : cat.id);
    }
    onChange(cat.id);
  };

  const handleChildClick = (child) => {
    onChange(child.id);
    setExpandedId(null);
  };

  return (
    <nav className={styles.filter} aria-label="Filter by category">
      <ul className={styles.list} role="list">
        {categories.map((cat) => (
          <li key={cat.id} className={styles.item}>
            <button
              className={`${styles.btn} ${activeId === cat.id ? styles.btnActive : ''}`}
              onClick={() => handleParentClick(cat)}
              aria-pressed={activeId === cat.id}
            >
              {cat.name}
              {cat.children && cat.children.length > 0 && (
                <span className={`${styles.arrow} ${expandedId === cat.id ? styles.arrowOpen : ''}`}>
                  +
                </span>
              )}
            </button>

            {cat.children && cat.children.length > 0 && expandedId === cat.id && (
              <ul className={styles.sublist} role="list">
                {cat.children.map((child) => (
                  <li key={child.id}>
                    <button
                      className={`${styles.subbtn} ${activeId === child.id ? styles.btnActive : ''}`}
                      onClick={() => handleChildClick(child)}
                      aria-pressed={activeId === child.id}
                    >
                      {child.name}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
