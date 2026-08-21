import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Create a clip-path image reveal triggered by ScrollTrigger.
 * @param {HTMLElement} container - The overflow:hidden wrapper
 * @param {HTMLElement} img - The image element inside
 * @param {object} options
 */
export function createImageReveal(container, img, options = {}) {
  const {
    delay = 0,
    duration = 1.1,
    ease = 'power3.out',
    trigger = container,
    start = 'top 88%',
  } = options;

  // Set initial states
  gsap.set(container, { clipPath: 'inset(100% 0 0 0)' });
  gsap.set(img, { scale: 1.1, transformOrigin: 'center center' });

  return ScrollTrigger.create({
    trigger,
    start,
    onEnter: () => {
      gsap.to(container, {
        clipPath: 'inset(0% 0 0 0)',
        duration,
        delay,
        ease,
      });
      gsap.to(img, {
        scale: 1,
        duration: duration + 0.2,
        delay,
        ease,
      });
    },
    once: true,
  });
}

/**
 * Create a text/element fade+slide reveal triggered by ScrollTrigger.
 * @param {HTMLElement|HTMLElement[]} elements
 * @param {object} options
 */
export function createTextReveal(elements, options = {}) {
  const {
    delay = 0,
    stagger = 0.08,
    duration = 0.8,
    y = 30,
    ease = 'power3.out',
    trigger,
    start = 'top 90%',
  } = options;

  const els = Array.isArray(elements) ? elements : [elements];
  gsap.set(els, { opacity: 0, y });

  return ScrollTrigger.create({
    trigger: trigger || els[0],
    start,
    onEnter: () => {
      gsap.to(els, {
        opacity: 1,
        y: 0,
        duration,
        delay,
        stagger,
        ease,
      });
    },
    once: true,
  });
}

/**
 * Create a horizontal line reveal (width: 0 → 100%).
 */
export function createLineReveal(el, options = {}) {
  const { delay = 0, duration = 1, ease = 'power3.out', trigger } = options;

  gsap.set(el, { scaleX: 0, transformOrigin: 'left center' });

  return ScrollTrigger.create({
    trigger: trigger || el,
    start: 'top 90%',
    onEnter: () => {
      gsap.to(el, { scaleX: 1, duration, delay, ease });
    },
    once: true,
  });
}
