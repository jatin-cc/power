import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SmartImage from '../components/SmartImage/SmartImage.jsx';
import ProjectCard from '../components/ProjectCard/ProjectCard.jsx';
import Footer from '../components/Footer/Footer.jsx';
import { useProjects } from '../hooks/useProjects.js';
import styles from './Home.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const { projects, loading } = useProjects();
  const heroRef = useRef(null);
  const heroImgContainerRef = useRef(null);
  const heroImgRef = useRef(null);
  const heroTitleRef = useRef(null);
  const heroSubRef = useRef(null);
  const heroMetaRef = useRef(null);

  const featuredProjects = projects.slice(0, 4);
  const heroProject = projects[0];

  // Hero entrance animation
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced || !heroProject) return;

    const container = heroImgContainerRef.current;
    const img = heroImgRef.current;
    const title = heroTitleRef.current;
    const sub = heroSubRef.current;
    const meta = heroMetaRef.current;

    const tl = gsap.timeline({ delay: 0.3 });

    if (container && img) {
      gsap.set(container, { clipPath: 'inset(100% 0 0 0)' });
      gsap.set(img, { scale: 1.12 });

      tl.to(container, {
        clipPath: 'inset(0% 0 0 0)',
        duration: 1.4,
        ease: 'power4.out',
      }, 0);

      tl.to(img, {
        scale: 1,
        duration: 1.7,
        ease: 'power4.out',
      }, 0);
    }

    if (title) {
      gsap.set(title, { opacity: 0, y: 60 });
      tl.to(title, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, 0.5);
    }

    if (sub) {
      gsap.set(sub, { opacity: 0, y: 30 });
      tl.to(sub, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, 0.65);
    }

    if (meta) {
      gsap.set(meta, { opacity: 0 });
      tl.to(meta, { opacity: 1, duration: 0.6, ease: 'power3.out' }, 0.9);
    }

    return () => tl.kill();
  }, [heroProject]);

  // Parallax on hero image
  useEffect(() => {
    const img = heroImgRef.current;
    if (!img) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    gsap.to(img, {
      yPercent: 12,
      ease: 'none',
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });
  }, [heroProject]);

  return (
    <main className={styles.main}>
      {/* Hero */}
      <section ref={heroRef} className={styles.hero}>
        {heroProject ? (
          <>
            <div className={styles.heroImgContainer} ref={heroImgContainerRef}>
              <div ref={heroImgRef} className={styles.heroImgInner}>
                <SmartImage
                  src={heroProject.featuredImage}
                  alt={heroProject.title}
                  aspectRatio="16/9"
                  objectPosition="center 30%"
                  priority
                />
              </div>
            </div>

            <div className={styles.heroContent}>
              <div className={styles.heroText}>
                <h1 ref={heroTitleRef} className={styles.heroTitle}>
                  {heroProject.title}
                </h1>
                {heroProject.location && (
                  <p ref={heroSubRef} className={styles.heroLocation}>
                    {heroProject.location}
                  </p>
                )}
              </div>
              <div ref={heroMetaRef} className={styles.heroMeta}>
                {heroProject.primaryCategory && (
                  <span className={styles.heroCategory}>{heroProject.primaryCategory}</span>
                )}
                <Link
                  to={`/project/${heroProject.id}`}
                  className={styles.heroViewLink}
                  data-cursor="link"
                >
                  View Project →
                </Link>
              </div>
            </div>
          </>
        ) : (
          <div className={styles.heroPlaceholder} />
        )}
      </section>

      {/* Studio intro */}
      <section className={styles.intro}>
        <div className={styles.introInner}>
          <p className={styles.introText}>
            An integrated design practice working across architecture, planning,
            engineering, landscape, and interior disciplines to create environments
            that endure.
          </p>
          <Link to="/projects" className={styles.introLink} data-cursor="link">
            Explore Work
          </Link>
        </div>
      </section>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <section className={styles.featured}>
          <div className={styles.container}>
            <div className={styles.featuredHeader}>
              <h2 className={styles.sectionLabel}>Selected Work</h2>
              <Link to="/projects" className={styles.seeAll} data-cursor="link">
                All Projects →
              </Link>
            </div>

            <div className={styles.featuredGrid}>
              {featuredProjects.map((project, i) => (
                <div
                  key={project.id}
                  className={`${styles.featuredCard} ${i === 0 ? styles.featuredCardLarge : ''}`}
                >
                  <ProjectCard project={project} index={i} featured={i === 0} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
