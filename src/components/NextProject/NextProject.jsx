import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import SmartImage from '../SmartImage/SmartImage.jsx';
import styles from './NextProject.module.css';

export default function NextProject({ project }) {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);
  const tlRef = useRef(null);

  const handleMouseEnter = () => {
    if (tlRef.current) tlRef.current.kill();
    tlRef.current = gsap.to(imgRef.current, {
      scale: 1.04,
      duration: 0.7,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = () => {
    if (tlRef.current) tlRef.current.kill();
    tlRef.current = gsap.to(imgRef.current, {
      scale: 1,
      duration: 0.7,
      ease: 'power2.out',
    });
  };

  // Entrance animation on mount
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    gsap.from(el.querySelectorAll('[data-reveal]'), {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
        once: true,
      },
    });
  }, []);

  if (!project) return null;

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.label} data-reveal>
        <span className={styles.labelLine} />
        <span className={styles.labelText}>Next Project</span>
      </div>

      <Link
        to={`/project/${project.id}`}
        className={styles.link}
        data-cursor="view"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={styles.imgContainer} data-reveal>
          <div ref={imgRef} className={styles.imgInner}>
            <SmartImage
              src={project.featuredImage}
              alt={project.title}
              aspectRatio="21/9"
            />
          </div>
        </div>

        <div className={styles.info} data-reveal>
          <h3 className={styles.title}>{project.title}</h3>
          {project.location && (
            <p className={styles.location}>{project.location}</p>
          )}
        </div>
      </Link>
    </section>
  );
}
