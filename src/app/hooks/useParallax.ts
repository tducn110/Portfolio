import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const reduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Gentle vertical parallax tied to scroll position. Returns a ref to attach
 * to the element that should drift. Respects reduced-motion (no-op there).
 */
export function useParallax<T extends HTMLElement = HTMLDivElement>(
  from = 28,
  to = -28,
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced()) return;

    const tween = gsap.fromTo(
      el,
      { y: from },
      {
        y: to,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.6,
        },
      },
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [from, to]);

  return ref;
}

/**
 * Staggered reveal for story elements matching `childSelector` inside the
 * returned container ref. Each child rises and fades as it enters view.
 */
export function useStoryReveal<T extends HTMLElement = HTMLDivElement>(
  childSelector = "[data-story]",
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced()) return;

    const children = Array.from(
      el.querySelectorAll<HTMLElement>(childSelector),
    );
    if (!children.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        children,
        { y: 18, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: el,
            start: "top 78%",
          },
        },
      );
    }, el);

    return () => ctx.revert();
  }, [childSelector]);

  return ref;
}
