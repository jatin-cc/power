import { useState, useRef, useEffect } from 'react';
import styles from './SmartImage.module.css';

export default function SmartImage({
  src,
  alt = '',
  aspectRatio = '4/3',
  objectFit = 'cover',
  objectPosition = 'center',
  className = '',
  onLoad,
  priority = false,
}) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    // If image is already cached (complete), mark as loaded
    if (imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth > 0) {
      setLoaded(true);
    }
  }, [src]);

  const handleLoad = () => {
    setLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setError(true);
    setLoaded(true);
  };

  return (
    <div
      className={`${styles.wrapper} ${className}`}
      style={{ aspectRatio }}
    >
      {/* Skeleton placeholder */}
      {!loaded && <div className={styles.skeleton} aria-hidden="true" />}

      {error ? (
        <div className={styles.error} aria-label="Image unavailable">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
        </div>
      ) : (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
          className={`${styles.img} ${loaded ? styles.imgLoaded : ''}`}
          style={{ objectFit, objectPosition }}
          onLoad={handleLoad}
          onError={handleError}
        />
      )}
    </div>
  );
}
