import { useState, useRef, useEffect, useCallback } from 'react';
import gsap from 'gsap';
import SmartImage from '../SmartImage/SmartImage.jsx';
import styles from './VerticalProjectCarousel.module.css';

export default function VerticalProjectCarousel({ projects = [], loading, error, onRetry }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [activeImageMap, setActiveImageMap] = useState({}); // { [projId]: imgUrl }

  const cardRefs = useRef([]);

  // Clear cardRefs when projects list changes
  useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, projects.length);
    setActiveIndex(0);
    setExpandedIndex(null);
  }, [projects]);

  // Update scale, opacity, and 3D depth blur effects relative to window viewport center
  const updateCardTransforms = useCallback(() => {
    const vh = window.innerHeight;
    const vhCenter = vh / 2;

    let closestIdx = 0;
    let minDistance = Infinity;

    cardRefs.current.forEach((card, idx) => {
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const cardCenter = rect.top + rect.height / 2;
      const dist = Math.abs(cardCenter - vhCenter);

      if (dist < minDistance) {
        minDistance = dist;
        closestIdx = idx;
      }

      // If a card is expanded, it stays full emphasis
      if (expandedIndex === idx) {
        card.style.transform = 'scale(1)';
        card.style.opacity = '1';
        card.style.filter = 'none';
        return;
      }

      // Distance-based scaling and fade relative to screen center
      const maxDist = vh * 0.55;
      const normalized = Math.min(1, dist / maxDist);

      const scale = 1 - normalized * 0.15; // Scales from 1.0 down to ~0.85
      const opacity = 1 - normalized * 0.4; // Opacity from 1.0 down to ~0.60
      const blur = normalized > 0.6 ? (normalized - 0.6) * 3 : 0;

      card.style.transform = `scale(${Math.max(0.85, scale)})`;
      card.style.opacity = Math.max(0.5, opacity);
      card.style.filter = blur > 0.5 ? `blur(${blur}px)` : 'none';
    });

    if (expandedIndex === null && closestIdx !== activeIndex) {
      setActiveIndex(closestIdx);
    }
  }, [activeIndex, expandedIndex]);

  // Listen to normal window scroll for butter-smooth natural page scrolling
  useEffect(() => {
    let rafId;
    const handleScroll = () => {
      rafId = requestAnimationFrame(updateCardTransforms);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateCardTransforms(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [updateCardTransforms]);

  // Scroll window smoothly to align target card
  const scrollToCard = useCallback((index) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const targetScroll = window.scrollY + rect.top - (window.innerHeight * 0.1);

    window.scrollTo({
      top: targetScroll,
      behavior: 'smooth',
    });
    setActiveIndex(index);
  }, []);

  // Handle card click (Expand / Collapse)
  const handleCardClick = (index, e) => {
    // If click originated from interactive elements inside expanded content, ignore toggle
    if (e.target.closest('a') || e.target.closest('button')) {
      return;
    }

    if (expandedIndex === index) {
      // Collapse
      setExpandedIndex(null);
    } else {
      // Expand this card
      setExpandedIndex(index);
      scrollToCard(index);

      // Staggered reveal animation inside expanded card
      setTimeout(() => {
        const cardEl = cardRefs.current[index];
        if (cardEl) {
          const elements = cardEl.querySelectorAll('[data-expanded-reveal]');
          gsap.fromTo(
            elements,
            { opacity: 0, y: 25 },
            { opacity: 1, y: 0, duration: 0.6, stagger: 0.06, ease: 'power3.out' }
          );
        }
      }, 50);
    }
  };

  // Keyboard navigation (Arrow keys)
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const next = Math.min(projects.length - 1, activeIndex + 1);
      scrollToCard(next);
      if (expandedIndex !== null) setExpandedIndex(next);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prev = Math.max(0, activeIndex - 1);
      scrollToCard(prev);
      if (expandedIndex !== null) setExpandedIndex(prev);
    } else if (e.key === 'Escape' && expandedIndex !== null) {
      setExpandedIndex(null);
    }
  };

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
      <div className={styles.carouselContainer} aria-busy="true">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className={styles.skeletonCard}>
            <div className={styles.skeletonImage} />
            <div className={styles.skeletonMeta}>
              <div className={styles.skeletonLine} style={{ width: '40%' }} />
              <div className={styles.skeletonLine} style={{ width: '70%', marginTop: '1rem' }} />
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
    <div
      className={styles.wrapper}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label="Vertical Projects Showcase"
    >
      {/* Fixed Side Progress Counter */}
      <div className={styles.sideControls}>
        <div className={styles.counterBadge}>
          <span className={styles.counterCurrent}>
            {String(activeIndex + 1).padStart(2, '0')}
          </span>
          <span className={styles.counterDivider}>/</span>
          <span className={styles.counterTotal}>
            {String(projects.length).padStart(2, '0')}
          </span>
        </div>
      </div>

      {/* Main Vertical Showcase List in Normal Webpage Flow */}
      <div className={styles.carouselTrack}>
        {projects.map((project, index) => {
          const isExpanded = expandedIndex === index;
          const isActive = activeIndex === index;
          const activeImage = activeImageMap[project.id] || project.featuredImage;

          const categoryNames = project.categories
            .filter((c) => c.id !== 33)
            .map((c) => c.name)
            .join(' · ');

          return (
            <article
              key={project.id}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`${styles.card} ${isExpanded ? styles.cardExpanded : ''} ${isActive ? styles.cardActive : ''}`}
              onClick={(e) => handleCardClick(index, e)}
              data-cursor={isExpanded ? 'default' : 'view'}
              style={{ cursor: isExpanded ? 'default' : 'pointer' }}
            >
              {/* Unexpanded Card Layout */}
              {!isExpanded ? (
                <div className={styles.cardCompact}>
                  <div className={styles.imageWrap}>
                    <SmartImage
                      src={project.featuredImage}
                      alt={project.title}
                      aspectRatio="16/9"
                      priority={index < 3}
                    />
                    <div className={styles.imageOverlay}>
                      <span className={styles.expandHint}>
                        Click to Expand details ↓
                      </span>
                    </div>
                  </div>

                  <div className={styles.compactMeta}>
                    <div className={styles.compactHeader}>
                      <span className={styles.projectNumber}>
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <h2 className={styles.projectTitle}>{project.title}</h2>
                    </div>
                    <div className={styles.compactSub}>
                      {project.location && (
                        <span className={styles.location}>{project.location}</span>
                      )}
                      {categoryNames && (
                        <span className={styles.category}>{categoryNames}</span>
                      )}
                      {project.year && (
                        <span className={styles.year}>{project.year}</span>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                /* Expanded Card Layout (70vh Height + Peek Effect) */
                <div className={styles.cardFull}>
                  {/* Expanded Header Bar */}
                  <div className={styles.expandedHeader} data-expanded-reveal>
                    <div className={styles.expandedTitleGroup}>
                      <span className={styles.projectNumberBadge}>
                        #{String(index + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <h2 className={styles.expandedTitle}>{project.title}</h2>
                        {categoryNames && (
                          <p className={styles.expandedCategory}>{categoryNames}</p>
                        )}
                      </div>
                    </div>
                    <button
                      className={styles.closeBtn}
                      onClick={(e) => {
                        e.stopPropagation();
                        setExpandedIndex(null);
                      }}
                      title="Close Project Details"
                      data-cursor="link"
                    >
                      ✕ Close
                    </button>
                  </div>

                  {/* Scrollable Expanded Details Area */}
                  <div className={styles.expandedBody}>
                    {/* Main Featured Image & Gallery Selector */}
                    <div className={styles.mediaContainer} data-expanded-reveal>
                      <div className={styles.mainMediaWrap}>
                        <SmartImage
                          src={activeImage}
                          alt={project.title}
                          aspectRatio="16/9"
                          priority
                        />
                      </div>

                      {/* Image Gallery Thumbnails */}
                      {project.images && project.images.length > 1 && (
                        <div className={styles.galleryThumbnails}>
                          {project.images.map((imgUrl, imgIdx) => (
                            <button
                              key={imgIdx}
                              className={`${styles.thumbBtn} ${activeImage === imgUrl ? styles.thumbActive : ''}`}
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveImageMap((prev) => ({
                                  ...prev,
                                  [project.id]: imgUrl,
                                }));
                              }}
                              data-cursor="link"
                            >
                              <img src={imgUrl} alt={`Thumbnail ${imgIdx + 1}`} loading="lazy" />
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Specs / Meta Grid */}
                    <div className={styles.specsGrid} data-expanded-reveal>
                      {project.location && (
                        <div className={styles.specItem}>
                          <span className={styles.specLabel}>Location</span>
                          <span className={styles.specValue}>{project.location}</span>
                        </div>
                      )}
                      {project.services && (
                        <div className={styles.specItem}>
                          <span className={styles.specLabel}>Services & Typology</span>
                          <span className={styles.specValue}>{project.services}</span>
                        </div>
                      )}
                      {project.siteArea && (
                        <div className={styles.specItem}>
                          <span className={styles.specLabel}>Site Area</span>
                          <span className={styles.specValue}>{project.siteArea}</span>
                        </div>
                      )}
                      {project.builtupArea && (
                        <div className={styles.specItem}>
                          <span className={styles.specLabel}>Built-up Area</span>
                          <span className={styles.specValue}>{project.builtupArea}</span>
                        </div>
                      )}
                    </div>

                    {/* Quote Block */}
                    {project.quote && (
                      <blockquote className={styles.quoteBlock} data-expanded-reveal>
                        "{project.quote}"
                      </blockquote>
                    )}

                    {/* Project Descriptions & Summaries */}
                    {project.summaries && project.summaries.length > 0 && (
                      <div className={styles.descriptionSection} data-expanded-reveal>
                        <h3 className={styles.sectionHeading}>About Project</h3>
                        {project.summaries.map((summaryHtml, sIdx) => (
                          <div
                            key={sIdx}
                            className={styles.summaryParagraph}
                            dangerouslySetInnerHTML={{ __html: summaryHtml }}
                          />
                        ))}
                      </div>
                    )}

                    {/* Live Link / Actions Footer */}
                    <div className={styles.expandedFooter} data-expanded-reveal>
                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.liveLink}
                          data-cursor="link"
                        >
                          Explore Project Case Study ↗
                        </a>
                      )}
                      <button
                        className={styles.collapseFooterBtn}
                        onClick={(e) => {
                          e.stopPropagation();
                          setExpandedIndex(null);
                        }}
                        data-cursor="link"
                      >
                        Collapse View ↑
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </div>
  );
}
