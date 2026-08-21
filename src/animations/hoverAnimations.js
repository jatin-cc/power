import gsap from 'gsap';

/**
 * Create a GSAP hover timeline for a project card.
 * Returns { onEnter, onLeave } handlers.
 */
export function createCardHover(card, img, overlay) {
  const tl = gsap.timeline({ paused: true });

  if (img) {
    tl.to(img, {
      scale: 1.05,
      duration: 0.7,
      ease: 'power2.out',
    }, 0);
  }

  if (overlay) {
    tl.to(overlay, {
      opacity: 1,
      duration: 0.4,
      ease: 'power2.out',
    }, 0);
  }

  return {
    onEnter: () => tl.play(),
    onLeave: () => tl.reverse(),
  };
}

/**
 * Create a subtle parallax effect on an element (yPercent).
 */
export function createParallax(el, options = {}) {
  const { strength = 15, trigger } = options;

  gsap.fromTo(
    el,
    { yPercent: -strength / 2 },
    {
      yPercent: strength / 2,
      ease: 'none',
      scrollTrigger: {
        trigger: trigger || el,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    }
  );
}

/**
 * Smoothly move an element towards a target position (for cursor).
 */
export function createQuickFollower(el) {
  const xTo = gsap.quickTo(el, 'x', { duration: 0.4, ease: 'power3.out' });
  const yTo = gsap.quickTo(el, 'y', { duration: 0.4, ease: 'power3.out' });

  return { xTo, yTo };
}
