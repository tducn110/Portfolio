import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const reduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Reusable section-level scroll reveal. Attach the returned ref to a container;
 * every descendant matching `childSelector` (default `.gsap-reveal`) fades and
 * rises gently into view, staggered, as the section scrolls past the threshold.
 *
 * Keeps motion calm (small `y`), animates only transform + opacity, and is a
 * no-op under `prefers-reduced-motion`. Cleanup is scoped via gsap.context.
 */
export function useScrollReveal<T extends HTMLElement = HTMLElement>(
  childSelector = ".gsap-reveal",
) {
  const ref = useRef<T>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const targets = gsap.utils.toArray<HTMLElement>(childSelector);
      if (!targets.length) return;

      if (reduced()) {
        gsap.set(targets, { opacity: 1, y: 0 });
        return;
      }

      gsap.fromTo(
        targets,
        { opacity: 0, y: 12 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
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
