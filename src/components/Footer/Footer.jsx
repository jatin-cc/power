import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <p className={styles.brandName}>INI Design Studio</p>
            <p className={styles.brandTagline}>Architecture · Planning · Engineering · Landscape · Interior</p>
          </div>
          <nav className={styles.nav} aria-label="Footer navigation">
            <div className={styles.navCol}>
              <p className={styles.navHeading}>Studio</p>
              <Link to="/about" className={styles.navLink}>About</Link>
              <Link to="/news" className={styles.navLink}>News</Link>
            </div>
            <div className={styles.navCol}>
              <p className={styles.navHeading}>Work</p>
              <Link to="/projects" className={styles.navLink}>All Projects</Link>
              <Link to="/projects" className={styles.navLink}>Architecture</Link>
              <Link to="/projects" className={styles.navLink}>Planning</Link>
            </div>
          </nav>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>© {year} INI Design Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
