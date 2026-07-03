import { RefObject, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

function isNarrowViewport() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 980px)").matches
  );
}

const motion = (name: string) => `[data-motion~="${name}"]`;

function setReducedMotionState(root: HTMLElement) {
  gsap.set(
    [
      motion("reveal"),
      motion("flow-tag"),
      motion("hero-eyebrow"),
      motion("hero-title-line"),
      motion("hero-copy"),
      motion("hero-cta"),
      motion("processor"),
      motion("media-frame"),
      motion("project-card"),
      motion("parallax-h"),
    ].join(", "),
    {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
    },
  );

  gsap.set(motion("process-fill"), { scaleX: 1, scaleY: 1 });
  root.querySelectorAll(motion("process-step")).forEach((step) => {
    step.classList.add("is-active");
  });
}

function initHeroFlowMotion() {
  const heroTimeline = gsap.timeline({
    defaults: { ease: "power3.out", duration: 0.48 },
  });

  heroTimeline
    .from(motion("hero-eyebrow"), { y: 8 })
    .from(motion("hero-title-line"), { y: 18, stagger: 0.05 }, "-=0.32")
    .from(motion("hero-copy"), { y: 12 }, "-=0.28")
    .from(motion("hero-cta"), { y: 8, stagger: 0.05 }, "-=0.28")
    .from(motion("flow-tag"), { y: 10, stagger: 0.025 }, "-=0.18")
    .from(motion("processor"), { scale: 0.97 }, "-=0.32");

  gsap.to(motion("float-tag"), {
    y: -8,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    duration: 4.5,
    stagger: { each: 0.2, from: "random" },
  });

  gsap.fromTo(
    motion("flow-line"),
    { scaleX: 0.35, transformOrigin: "left center" },
    {
      scaleX: 1,
      repeat: -1,
      yoyo: true,
      stagger: 0.18,
      duration: 2.8,
      ease: "sine.inOut",
    },
  );

  gsap.to(motion("processor-glow"), {
    scale: 1.08,
    opacity: 0.85,
    repeat: -1,
    yoyo: true,
    duration: 3.8,
    ease: "sine.inOut",
  });

  const statuses = gsap.utils.toArray<HTMLElement>(motion("processor-status"));
  if (statuses.length) {
    const statusTimeline = gsap.timeline({ repeat: -1, repeatDelay: 0.4 });
    statuses.forEach((status, index) => {
      statusTimeline
        .to(
          status,
          {
            y: -2,
            backgroundColor: "rgba(207, 218, 245, 0.74)",
            borderColor: "rgba(0, 0, 0, 0.5)",
            duration: 0.28,
            ease: "power2.out",
          },
          index * 0.35,
        )
        .to(
          status,
          {
            y: 0,
            backgroundColor: "rgba(246, 243, 241, 0.72)",
            borderColor: "rgba(0, 0, 0, 0.22)",
            duration: 0.32,
            ease: "power2.out",
          },
          index * 0.35 + 0.32,
        );
    });
  }
}

function initRevealMotion() {
  gsap.utils.toArray<HTMLElement>(motion("reveal")).forEach((element) => {
    gsap.fromTo(
      element,
      { y: 24 },
      {
        y: 0,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 82%",
        },
      },
    );
  });
}

function initMediaParallax() {
  gsap.utils.toArray<HTMLElement>(motion("media-frame")).forEach((element) => {
    gsap.fromTo(
      element,
      { y: 10 },
      {
        y: -8,
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.8,
        },
      },
    );
  });
}

function initHorizontalParallax() {
  gsap.utils.toArray<HTMLElement>(motion("parallax-h")).forEach((element) => {
    const direction = element.dataset.parallaxDir === "right" ? 60 : -60;
    gsap.fromTo(
      element,
      { x: direction },
      {
        x: 0,
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "top 30%",
          scrub: 0.6,
        },
      },
    );
  });
}

function initSectionParallax() {
  const sections = gsap.utils.toArray<HTMLElement>(".section-shell");
  sections.forEach((section) => {
    const cards = section.querySelectorAll<HTMLElement>(
      ".feature-card, .service-card, .contact-copy, .contact-panel"
    );
    if (!cards.length) return;

    gsap.fromTo(
      cards,
      { y: 30 },
      {
        y: 0,
        stagger: 0.08,
        ease: "power2.out",
        duration: 0.8,
        scrollTrigger: {
          trigger: section,
          start: "top 78%",
        },
      },
    );
  });
}

function initHeroParallaxDepth() {
  const heroSection = document.querySelector(".hero-section");
  if (!heroSection) return;

  gsap.to(".hero-facts", {
    y: -14,
    ease: "none",
    scrollTrigger: {
      trigger: heroSection,
      start: "top top",
      end: "bottom top",
      scrub: 0.5,
    },
  });

  gsap.to(".data-flow", {
    y: -20,
    ease: "none",
    scrollTrigger: {
      trigger: heroSection,
      start: "top top",
      end: "bottom top",
      scrub: 0.4,
    },
  });
}

function initProcessMotion() {
  const processPanel = document.querySelector<HTMLElement>(motion("process-panel"));
  const processSteps = gsap.utils.toArray<HTMLElement>(motion("process-step"));
  if (!processPanel || !processSteps.length) return;

  gsap.fromTo(
    motion("process-fill"),
    { scaleX: 1, scaleY: 0 },
    {
      scaleX: 1,
      scaleY: 1,
      ease: "none",
      scrollTrigger: {
        trigger: processPanel,
        start: "top 72%",
        end: "bottom 58%",
        scrub: 0.6,
        onUpdate: (self) => {
          const activeIndex = Math.min(
            processSteps.length - 1,
            Math.floor(self.progress * processSteps.length),
          );

          processSteps.forEach((step, index) => {
            step.classList.toggle("is-active", index <= activeIndex);
          });
        },
      },
    },
  );
}

function initProjectMotion() {
  gsap.fromTo(
    motion("project-card"),
    { y: 40, scale: 0.985 },
    {
      y: 0,
      scale: 1,
      stagger: 0.12,
      duration: 0.75,
      ease: "power2.out",
      scrollTrigger: {
        trigger: motion("project-stack"),
        start: "top 75%",
      },
    },
  );

  gsap.utils.toArray<HTMLElement>(motion("project-card")).forEach((card) => {
    ScrollTrigger.create({
      trigger: card,
      start: "top 70%",
      end: "bottom 38%",
      toggleClass: { targets: card, className: "is-active" },
    });
  });
}

function initNavScrollShadow() {
  const header = document.querySelector<HTMLElement>(".site-header");
  if (!header) return;

  const handleScroll = () => {
    header.classList.toggle("has-scrolled", window.scrollY > 10);
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  return () => window.removeEventListener("scroll", handleScroll);
}

function initCursorDot() {
  if (
    isNarrowViewport() ||
    window.matchMedia("(hover: none)").matches ||
    window.matchMedia("(pointer: coarse)").matches ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    return;
  }

  const dot = document.createElement("div");
  dot.className = "cursor-dot";
  document.body.appendChild(dot);

  let mouseX = 0;
  let mouseY = 0;
  let dotX = 0;
  let dotY = 0;
  let animationFrameId = 0;

  const handleMove = (event: MouseEvent) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
  };

  window.addEventListener("mousemove", handleMove, { passive: true });

  const tick = () => {
    dotX += (mouseX - dotX) * 0.15;
    dotY += (mouseY - dotY) * 0.15;
    dot.style.transform = `translate(${dotX - 4}px, ${dotY - 4}px)`;
    animationFrameId = requestAnimationFrame(tick);
  };

  animationFrameId = requestAnimationFrame(tick);

  return () => {
    cancelAnimationFrame(animationFrameId);
    window.removeEventListener("mousemove", handleMove);
    dot.remove();
  };
}

function initCapabilityStripScroll() {
  const strip = document.querySelector<HTMLElement>(".capability-strip");
  if (!strip || isNarrowViewport()) return;

  gsap.fromTo(
    strip.children,
    { x: 30, opacity: 0.72 },
    {
      x: 0,
      opacity: 1,
      stagger: 0.06,
      duration: 0.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: strip,
        start: "top 85%",
      },
    },
  );
}
function initDynamicThemeMotion() {
  const cards = gsap.utils.toArray<HTMLElement>(".project-card");
  if (!cards.length) return;

  cards.forEach((card) => {
    const themeColor = card.dataset.themeColor;
    if (!themeColor) return;

    ScrollTrigger.create({
      trigger: card,
      start: "top 60%",
      end: "bottom 40%",
      onEnter: () => applyTheme(themeColor),
      onEnterBack: () => applyTheme(themeColor),
    });
  });

  const projectsSection = document.querySelector(".projects-section");
  if (projectsSection) {
    ScrollTrigger.create({
      trigger: projectsSection,
      start: "top bottom",
      end: "top 60%",
      onLeaveBack: () => resetTheme(),
    });
    ScrollTrigger.create({
      trigger: projectsSection,
      start: "bottom 40%",
      end: "bottom top",
      onLeave: () => resetTheme(),
    });
  }

  function applyTheme(hsl: string) {
    gsap.to(document.documentElement, {
      "--color-lavender-mist": `hsl(${hsl})`,
      duration: 0.8,
      ease: "power2.out",
    });
    document.documentElement.classList.add("has-dynamic-theme");
  }

  function resetTheme() {
    gsap.to(document.documentElement, {
      "--color-lavender-mist": "#cfdaf5", // Original lavender mist
      duration: 0.8,
      ease: "power2.out",
    });
    document.documentElement.classList.remove("has-dynamic-theme");
  }
}

export function usePortfolioMotion(rootRef: RefObject<HTMLElement>) {
  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const cleanups: Array<(() => void) | undefined> = [];

    const ctx = gsap.context(() => {
      if (prefersReducedMotion()) {
        setReducedMotionState(root);
        return;
      }

      initHeroFlowMotion();
      initRevealMotion();
      initMediaParallax();
      initHorizontalParallax();
      initSectionParallax();
      initHeroParallaxDepth();
      initProcessMotion();
      initProjectMotion();
      initCapabilityStripScroll();
      initDynamicThemeMotion();
      cleanups.push(initNavScrollShadow());
      cleanups.push(initCursorDot());
    }, root);

    return () => {
      ctx.revert();
      cleanups.forEach((fn) => fn?.());
    };
  }, [rootRef]);
}
