import { useRef, useCallback, useEffect } from 'react';
import gsap from 'gsap';
import SmartImage from '../SmartImage/SmartImage.jsx';
import ProjectIcon from '../ProjectIcon/ProjectIcon.jsx';
import styles from './ProjectCard.module.css';

/**
 * Pixel-perfect Project Card matching BIG (Bjarke Ingels Group — big.dk) layout:
 * - Compact state: Left icon + title + location | Center 16:9 image
 * - Expanded state: In-place 3-column expansion with metadata, high-res banner image, paragraph description, and gallery peek
 */
export default function ProjectCard({
  project,
  index = 0,
  isExpanded = false,
  onToggleExpand,
}) {
  const cardRef = useRef(null);
  const imgRef = useRef(null);
  const titleRef = useRef(null);
  const tlRef = useRef(null);

  const handleMouseEnter = useCallback(() => {
    if (isExpanded) return;
    if (tlRef.current) tlRef.current.kill();
    const tl = gsap.timeline();
    tlRef.current = tl;

    if (imgRef.current) {
      tl.to(
        imgRef.current,
        {
          scale: 1.025,
          duration: 0.6,
          ease: 'power2.out',
        },
        0
      );
    }
    if (titleRef.current) {
      tl.to(
        titleRef.current,
        {
          color: '#000000',
          duration: 0.3,
        },
        0
      );
    }
  }, [isExpanded]);

  const handleMouseLeave = useCallback(() => {
    if (isExpanded) return;
    if (tlRef.current) tlRef.current.kill();
    const tl = gsap.timeline();
    tlRef.current = tl;

    if (imgRef.current) {
      tl.to(
        imgRef.current,
        {
          scale: 1,
          duration: 0.6,
          ease: 'power2.out',
        },
        0
      );
    }
  }, [isExpanded]);

  // Smooth auto-scroll when expanded
  useEffect(() => {
    if (isExpanded && cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      if (rect.top < 80 || rect.bottom > window.innerHeight) {
        cardRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }
  }, [isExpanded]);

  if (!project) return null;

  // Format location or fallback
  const locationText = project.location
    ? project.location.toUpperCase()
    : 'MADRID, SPAIN';

  const clientText = project.client || 'UNIVERSIDAD FRANCISCO DE VITORIA';
  const typologyText = project.typology || 'CULTURE';
  const sizeText = project.size || '4,300 / 46,285';
  const statusText = project.statusText || 'IN DESIGN';

  const descriptionParagraph = project.description || (
    `Forming part of the ongoing development of the ${project.title} campus outside ${project.location || 'Madrid'}, ` +
    `the Central Administrative Building will host leadership and administrative offices. Conceived as both ` +
    `a workplace and a meeting point, the building brings together offices, conference rooms, and shared spaces ` +
    `that support collaboration between faculty, staff, and visitors.`
  );

  const nextImage = project.images && project.images.length > 1
    ? project.images[1]
    : project.featuredImage;

  const handleClick = (e) => {
    e.preventDefault();
    if (onToggleExpand) {
      onToggleExpand();
    }
  };

  return (
    <article
      ref={cardRef}
      className={`${styles.projectRow} ${isExpanded ? styles.expandedRow : ''}`}
      data-index={index}
      data-project-id={project.id}
    >
      <div
        className={`${styles.cardLink} ${isExpanded ? styles.cardLinkExpanded : ''}`}
        onClick={handleClick}
        data-cursor={isExpanded ? 'close' : 'view'}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        role="button"
        tabIndex={0}
        aria-expanded={isExpanded}
        aria-label={`${isExpanded ? 'Collapse' : 'Expand'} project: ${project.title}`}
      >
        {/* Left Column: Icon + Title + Location + Extended Metadata */}
        <div className={`${styles.infoCol} ${isExpanded ? styles.infoColExpanded : ''}`}>
          {/* Architectural Icon */}
          <div className={styles.iconWrapper}>
            <ProjectIcon index={index} />
          </div>

          {/* Title */}
          <h2
            ref={titleRef}
            className={`${styles.projectTitle} ${isExpanded ? styles.projectTitleExpanded : ''}`}
          >
            {project.title}
          </h2>

          {/* Location */}
          <p className={styles.projectLocation}>{locationText}</p>

          {/* Extended Metadata Block (Visible when expanded) */}
          {isExpanded && (
            <div className={styles.metadataBlock}>
              <div className={styles.metaField}>
                <span className={styles.metaLabel}>CLIENT</span>
                <span className={styles.metaValue}>{clientText}</span>
              </div>

              <div className={styles.metaField}>
                <span className={styles.metaLabel}>TYPOLOGY</span>
                <span className={styles.metaValue}>{typologyText}</span>
              </div>

              <div className={styles.metaField}>
                <span className={styles.metaLabel}>SIZE M2/FT2</span>
                <span className={styles.metaValue}>{sizeText}</span>
              </div>

              <div className={styles.metaField}>
                <span className={styles.metaLabel}>STATUS</span>
                <span className={styles.metaValue}>{statusText}</span>
              </div>

              <div className={styles.shareField}>
                <span className={styles.metaLabel}>SHARE</span>
                <div className={styles.socialIcons}>
                  <span className={styles.socialIcon} title="Email">✉</span>
                  <span className={styles.socialIcon} title="Facebook">f</span>
                  <span className={styles.socialIcon} title="LinkedIn">in</span>
                  <span className={styles.socialIcon} title="X">𝕏</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Middle Column: Featured Image */}
        <div className={`${styles.mediaCol} ${isExpanded ? styles.mediaColExpanded : ''}`}>
          <div className={`${styles.imageClip} ${isExpanded ? styles.imageClipExpanded : ''}`}>
            <div ref={imgRef} className={styles.imageInner}>
              <SmartImage
                src={project.featuredImage}
                alt={project.title}
                aspectRatio={isExpanded ? '16/10' : '16/9'}
                priority={index < 3}
              />
            </div>
          </div>
        </div>

        {/* Right Column (Visible when expanded): Description + Next Image Gallery Peek */}
        {isExpanded && (
          <div className={styles.rightColExpanded}>
            <div className={styles.descBlock}>
              <p className={styles.descParagraph}>{descriptionParagraph}</p>
            </div>
            <div className={styles.galleryPeek}>
              <div className={styles.peekClip}>
                <SmartImage
                  src={nextImage}
                  alt={`${project.title} gallery preview`}
                  aspectRatio="4/5"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
