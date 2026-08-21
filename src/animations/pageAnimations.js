import gsap from 'gsap';

/**
 * Animate the hero section in on page load.
 * @param {object} refs - { image, title, meta, line }
 */
export function animateHeroIn({ image, title, meta, line } = {}) {
  const tl = gsap.timeline({ delay: 0.1 });

  if (image) {
    gsap.set(image.container, { clipPath: 'inset(100% 0 0 0)' });
    gsap.set(image.el, { scale: 1.12 });

    tl.to(image.container, {
      clipPath: 'inset(0% 0 0 0)',
      duration: 1.3,
      ease: 'power4.out',
    }, 0);

    tl.to(image.el, {
      scale: 1,
      duration: 1.6,
      ease: 'power4.out',
    }, 0);
  }

  if (title) {
    const els = Array.isArray(title) ? title : [title];
    gsap.set(els, { opacity: 0, y: 60 });
    tl.to(els, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.1,
      ease: 'power3.out',
    }, 0.4);
  }

  if (line) {
    gsap.set(line, { scaleX: 0, transformOrigin: 'left center' });
    tl.to(line, { scaleX: 1, duration: 1, ease: 'power3.out' }, 0.5);
  }

  if (meta) {
    const els = Array.isArray(meta) ? meta : [meta];
    gsap.set(els, { opacity: 0, y: 20 });
    tl.to(els, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      stagger: 0.07,
      ease: 'power3.out',
    }, 0.8);
  }

  return tl;
}

/**
 * Stagger animate project cards into view.
 * @param {HTMLElement[]} cards
 * @param {number} startDelay
 */
export function animateCardsIn(cards, startDelay = 0) {
  if (!cards || cards.length === 0) return;

  gsap.set(cards, { opacity: 0, y: 50 });

  return gsap.to(cards, {
    opacity: 1,
    y: 0,
    duration: 0.9,
    stagger: 0.1,
    delay: startDelay,
    ease: 'power3.out',
  });
}

/**
 * Exit animation for cards (filter change).
 * @param {HTMLElement[]} cards
 */
export function animateCardsOut(cards) {
  if (!cards || cards.length === 0) return Promise.resolve();

  return gsap.to(cards, {
    opacity: 0,
    y: -20,
    duration: 0.35,
    stagger: 0.04,
    ease: 'power2.in',
  });
}

/**
 * Page transition: overlay wipes in, then wipes out.
 */
export function pageTransitionOut(overlay) {
  return gsap.to(overlay, {
    clipPath: 'inset(0 0 0% 0)',
    duration: 0.5,
    ease: 'power3.inOut',
    onStart: () => {
      gsap.set(overlay, { clipPath: 'inset(0 0 100% 0)', display: 'block' });
    },
  });
}

export function pageTransitionIn(overlay) {
  return gsap.to(overlay, {
    clipPath: 'inset(100% 0 0 0)',
    duration: 0.5,
    ease: 'power3.inOut',
    onComplete: () => {
      gsap.set(overlay, { display: 'none' });
    },
  });
}

/**
 * Loading screen exit animation.
 */
export function animateLoadingOut(el) {
  return gsap.to(el, {
    clipPath: 'inset(0 0 100% 0)',
    duration: 0.8,
    ease: 'power3.inOut',
    delay: 0.2,
  });
}
