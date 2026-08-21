import { useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import SmartImage from '../SmartImage/SmartImage.jsx';
import styles from './ProjectCard.module.css';

export default function ProjectCard({ project, index = 0, featured = false }) {
  const cardRef = useRef(null);
  const imgRef = useRef(null);
  const overlayRef = useRef(null);
  const metaRef = useRef(null);
  const tlRef = useRef(null);

  const handleMouseEnter = useCallback(() => {
    if (tlRef.current) tlRef.current.kill();
    const tl = gsap.timeline();
    tlRef.current = tl;

    if (imgRef.current) {
      tl.to(imgRef.current, {
        scale: 1.05,
        duration: 0.7,
        ease: 'power2.out',
      }, 0);
    }
    if (overlayRef.current) {
      tl.to(overlayRef.current, {
        opacity: 1,
        duration: 0.4,
        ease: 'power2.out',
      }, 0);
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (tlRef.current) tlRef.current.kill();
    const tl = gsap.timeline();
    tlRef.current = tl;

    if (imgRef.current) {
      tl.to(imgRef.current, {
        scale: 1,
        duration: 0.7,
        ease: 'power2.out',
      }, 0);
    }
    if (overlayRef.current) {
      tl.to(overlayRef.current, {
        opacity: 0,
        duration: 0.4,
        ease: 'power2.out',
      }, 0);
    }
  }, []);

  if (!project) return null;

  const aspectRatio = featured ? '16/10' : index % 3 === 0 ? '3/4' : '4/3';
  const displayCategories = project.categories
    .filter((c) => c.id !== 33)
    .slice(0, 2)
    .map((c) => c.name)
    .join(' / ');

  return (
    <article
      ref={cardRef}
      className={`${styles.card} ${featured ? styles.featured : ''}`}
      data-index={index}
    >
      <Link
        to={`/project/${project.id}`}
        className={styles.link}
        data-cursor="view"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        aria-label={`View project: ${project.title}`}
      >
        {/* Image container with overflow hidden for reveal animation */}
        <div className={styles.imgContainer}>
          <div ref={imgRef} className={styles.imgInner}>
            <SmartImage
              src={project.featuredImage}
              alt={project.title}
              aspectRatio={aspectRatio}
              priority={index < 3}
            />
          </div>
          {/* Hover overlay */}
          <div ref={overlayRef} className={styles.overlay} aria-hidden="true">
            <span className={styles.overlayArrow}>→</span>
          </div>
        </div>

        {/* Meta */}
        <div ref={metaRef} className={styles.meta}>
          <div className={styles.metaLeft}>
            <h2 className={styles.title}>{project.title}</h2>
            {project.location && (
              <p className={styles.location}>{project.location}</p>
            )}
          </div>
          <div className={styles.metaRight}>
            {displayCategories && (
              <p className={styles.category}>{displayCategories}</p>
            )}
            {project.year && (
              <p className={styles.year}>{project.year}</p>
            )}
          </div>
        </div>
      </Link>
    </article>
  );
}
