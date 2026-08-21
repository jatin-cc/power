import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { getProjectById, getAllProjects } from '../api/projectsApi.js';
import SmartImage from '../components/SmartImage/SmartImage.jsx';
import NextProject from '../components/NextProject/NextProject.jsx';
import Footer from '../components/Footer/Footer.jsx';
import styles from './ProjectDetail.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectDetail() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [nextProject, setNextProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const heroRef = useRef(null);
  const heroImgContainerRef = useRef(null);
  const heroImgRef = useRef(null);
  const headerRef = useRef(null);
  const galleryRef = useRef(null);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    async function loadData() {
      setLoading(true);
      setError(null);
      try {
        const [proj, allProjs] = await Promise.all([
          getProjectById(id, controller.signal),
          getAllProjects(controller.signal).catch(() => []),
        ]);

        if (!isMounted) return;
        setProject(proj);

        if (allProjs && allProjs.length > 0) {
          const currentIndex = allProjs.findIndex((p) => String(p.id) === String(id));
          const nextIndex = currentIndex !== -1 ? (currentIndex + 1) % allProjs.length : 0;
          setNextProject(allProjs[nextIndex]);
        }
      } catch (err) {
        if (err.name !== 'AbortError' && isMounted) {
          setError(err.message || 'Failed to load project details');
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    loadData();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [id]);

  // Entrance & scroll animations
  useEffect(() => {
    if (!project || loading) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    // Scroll to top when project loads
    window.scrollTo(0, 0);

    const container = heroImgContainerRef.current;
    const img = heroImgRef.current;

    const tl = gsap.timeline({ delay: 0.1 });

    if (container && img) {
      gsap.set(container, { clipPath: 'inset(100% 0 0 0)' });
      gsap.set(img, { scale: 1.12 });

      tl.to(container, {
        clipPath: 'inset(0% 0 0 0)',
        duration: 1.3,
        ease: 'power4.out',
      }, 0);

      tl.to(img, {
        scale: 1,
        duration: 1.6,
        ease: 'power4.out',
      }, 0);
    }

    if (headerRef.current) {
      const elements = headerRef.current.querySelectorAll('[data-reveal]');
      gsap.set(elements, { opacity: 0, y: 40 });
      tl.to(elements, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: 'power3.out',
      }, 0.4);
    }

    // ScrollTrigger Parallax on Hero Image
    if (img && heroRef.current) {
      gsap.to(img, {
        yPercent: 15,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }

    // Gallery entrance animations
    if (galleryRef.current) {
      const items = galleryRef.current.querySelectorAll('[data-gallery-item]');
      items.forEach((item) => {
        const itemImg = item.querySelector('img');
        gsap.fromTo(
          item,
          { clipPath: 'inset(100% 0 0 0)' },
          {
            clipPath: 'inset(0% 0 0 0)',
            duration: 1.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
              once: true,
            },
          }
        );

        if (itemImg) {
          gsap.fromTo(
            itemImg,
            { scale: 1.1 },
            {
              scale: 1,
              duration: 1.3,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: item,
                start: 'top 85%',
                once: true,
              },
            }
          );
        }
      });
    }

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [project, loading]);

  if (loading) {
    return (
      <main className={styles.main}>
        <div className={styles.loadingContainer}>
          <div className={styles.skeletonHero} />
          <div className={styles.container}>
            <div className={styles.skeletonTitle} />
            <div className={styles.skeletonMeta} />
          </div>
        </div>
      </main>
    );
  }

  if (error || !project) {
    return (
      <main className={styles.main}>
        <div className={styles.errorContainer}>
          <h1 className={styles.errorTitle}>Project Not Found</h1>
          <p className={styles.errorText}>{error || 'The requested project could not be found.'}</p>
          <Link to="/projects" className={styles.backBtn} data-cursor="link">
            ← Back to All Projects
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  // Filter hero featured image out of gallery if desired, or show all remaining images
  const galleryImages = project.images.filter(
    (imgUrl, idx) => imgUrl !== project.featuredImage || idx > 0
  );

  return (
    <main className={styles.main}>
      {/* Hero Image */}
      <section ref={heroRef} className={styles.hero}>
        <div ref={heroImgContainerRef} className={styles.heroImgContainer}>
          <div ref={heroImgRef} className={styles.heroImgInner}>
            <SmartImage
              src={project.featuredImage}
              alt={project.title}
              aspectRatio="16/9"
              priority
            />
          </div>
        </div>
      </section>

      <div className={styles.container}>
        {/* Navigation Breadcrumb */}
        <div className={styles.topBar}>
          <Link to="/projects" className={styles.backLink} data-cursor="link">
            ← All Projects
          </Link>
          {project.primaryCategory && (
            <span className={styles.topCategory}>{project.primaryCategory}</span>
          )}
        </div>

        {/* Project Header */}
        <header ref={headerRef} className={styles.header}>
          <h1 className={styles.title} data-reveal>
            {project.title}
          </h1>

          {project.quote && (
            <blockquote className={styles.quote} data-reveal>
              "{project.quote}"
            </blockquote>
          )}

          {/* Project Metadata Grid */}
          <div className={styles.metaGrid} data-reveal>
            {project.location && (
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Location</span>
                <span className={styles.metaValue}>{project.location}</span>
              </div>
            )}
            {project.primaryCategory && (
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Typology / Services</span>
                <span className={styles.metaValue}>
                  {project.services || project.primaryCategory}
                </span>
              </div>
            )}
            {project.siteArea && (
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Site Area</span>
                <span className={styles.metaValue}>{project.siteArea}</span>
              </div>
            )}
            {project.builtupArea && (
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Built-up Area</span>
                <span className={styles.metaValue}>{project.builtupArea}</span>
              </div>
            )}
          </div>
        </header>

        {/* Project Description Summaries */}
        {project.summaries && project.summaries.length > 0 && (
          <section className={styles.descriptionSection}>
            {project.summaries.map((summaryHtml, idx) => (
              <div
                key={idx}
                className={styles.summaryBlock}
                dangerouslySetInnerHTML={{ __html: summaryHtml }}
              />
            ))}
          </section>
        )}

        {/* Image Gallery */}
        {galleryImages.length > 0 && (
          <section ref={galleryRef} className={styles.gallerySection}>
            <h2 className={styles.galleryHeading}>Gallery</h2>
            <div className={styles.galleryGrid}>
              {galleryImages.map((imgUrl, idx) => {
                // Layout variation for editorial presentation
                const isFull = idx % 3 === 0;
                const aspectRatio = isFull ? '16/9' : '4/3';
                return (
                  <div
                    key={idx}
                    className={`${styles.galleryItem} ${isFull ? styles.galleryItemFull : ''}`}
                    data-gallery-item
                  >
                    <SmartImage
                      src={imgUrl}
                      alt={`${project.title} - View ${idx + 1}`}
                      aspectRatio={aspectRatio}
                    />
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Next Project */}
        {nextProject && <NextProject project={nextProject} />}
      </div>

      <Footer />
    </main>
  );
}
