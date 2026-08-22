import styles from './ProjectIcon.module.css';

/**
 * Geometric architectural SVG icons matching BIG (Bjarke Ingels Group) design style.
 * Renders minimalist white geometric shapes inside a dark square container.
 */
export default function ProjectIcon({ index = 0, className = '' }) {
  const iconType = index % 8;

  const renderSvgPattern = () => {
    switch (iconType) {
      case 0:
        // 4 dots / 2x2 grid (like Central Administrative Building)
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="none">
            <rect x="5" y="5" width="6" height="6" fill="#ffffff" rx="0.5" />
            <rect x="13" y="5" width="6" height="6" fill="#ffffff" rx="0.5" />
            <rect x="5" y="13" width="6" height="6" fill="#ffffff" rx="0.5" />
            <rect x="13" y="13" width="6" height="6" fill="#ffffff" rx="0.5" />
          </svg>
        );

      case 1:
        // Heart/Diamond facade geometry (like Academic Center)
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="none">
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              fill="#ffffff"
            />
          </svg>
        );

      case 2:
        // Oval / Stadium loop geometry (like Dymak HQ)
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="none">
            <ellipse cx="12" cy="12" rx="9" ry="6" stroke="#ffffff" strokeWidth="3" fill="none" />
            <ellipse cx="12" cy="12" rx="4" ry="2.5" fill="#ffffff" />
          </svg>
        );

      case 3:
        // Cantilever / Shifted blocks geometry
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="none">
            <rect x="3" y="4" width="14" height="4" fill="#ffffff" />
            <rect x="7" y="10" width="14" height="4" fill="#ffffff" />
            <rect x="3" y="16" width="14" height="4" fill="#ffffff" />
          </svg>
        );

      case 4:
        // Pyramid / Triangle grid geometry
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="none">
            <polygon points="12,3 21,19 3,19" fill="#ffffff" />
            <polygon points="12,8 17,17 7,17" fill="#000000" />
          </svg>
        );

      case 5:
        // Cross / Plus matrix geometry
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="none">
            <rect x="9" y="3" width="6" height="18" fill="#ffffff" />
            <rect x="3" y="9" width="18" height="6" fill="#ffffff" />
          </svg>
        );

      case 6:
        // Concentric Arch / Dome geometry
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="none">
            <path d="M4 20C4 13.3726 9.37258 8 16 8V12C11.5817 12 8 15.5817 8 20H4Z" fill="#ffffff" />
            <path d="M10 20C10 16.6863 12.6863 14 16 14V17C14.3431 17 13 18.3431 13 20H10Z" fill="#ffffff" />
          </svg>
        );

      case 7:
      default:
        // Grid 3x3 Matrix
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="none">
            <circle cx="6" cy="6" r="2" fill="#ffffff" />
            <circle cx="12" cy="6" r="2" fill="#ffffff" />
            <circle cx="18" cy="6" r="2" fill="#ffffff" />
            <circle cx="6" cy="12" r="2" fill="#ffffff" />
            <circle cx="12" cy="12" r="2" fill="#ffffff" />
            <circle cx="18" cy="12" r="2" fill="#ffffff" />
            <circle cx="6" cy="18" r="2" fill="#ffffff" />
            <circle cx="12" cy="18" r="2" fill="#ffffff" />
            <circle cx="18" cy="18" r="2" fill="#ffffff" />
          </svg>
        );
    }
  };

  return (
    <div className={`${styles.iconBox} ${className}`} aria-hidden="true">
      {renderSvgPattern()}
    </div>
  );
}
