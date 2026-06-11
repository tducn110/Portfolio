import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ArrowRight, Github } from "lucide-react";
import { C, F, Sh } from "../tokens";
import { useParallax } from "../hooks/useParallax";
import { WorkWithMeButton } from "./WorkWithMeButton";

const facts = [
  { label: "GPA", value: "3.7 / 4.0" },
  { label: "Location", value: "Da Nang, Viet Nam" },
  { label: "Focus", value: "Full-stack · AI-assisted" },
  { label: "Stack", value: "TypeScript · React · Next.js · Supabase" },
];

// Floating layer tags — the "building in layers" stages, drifting behind the hero.
const layers: { label: string; top: string; left?: string; right?: string }[] = [
  { label: "Idea", top: "12%", left: "6%" },
  { label: "Flow", top: "22%", right: "9%" },
  { label: "UI", top: "44%", left: "4%" },
  { label: "Database", top: "58%", right: "5%" },
  { label: "API", top: "70%", left: "10%" },
  { label: "Test", top: "32%", left: "14%" },
  { label: "Deploy", top: "78%", right: "13%" },
  { label: "Refactor", top: "16%", right: "22%" },
];

const reduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function Hero() {
  const orbRef = useParallax<HTMLDivElement>(40, -40);
  const rootRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const markers = [
        ".hero-label",
        ".hero-title",
        ".hero-subtitle",
        ".hero-cta",
        ".hero-facts",
      ];

      if (reduced()) {
        gsap.set(markers, { opacity: 1, y: 0 });
        return;
      }

      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
      tl.from(".hero-label", { opacity: 0.72, y: 10, duration: 0.5 })
        .from(".hero-title", { opacity: 0.72, y: 12, duration: 0.6 }, "-=0.25")
        .from(".hero-subtitle", { opacity: 0.72, y: 10, duration: 0.5 }, "-=0.3")
        .from(
          ".hero-cta",
          { opacity: 0.72, y: 8, stagger: 0.08, duration: 0.45 },
          "-=0.25",
        )
        .from(".hero-facts", { opacity: 0.72, y: 8, duration: 0.45 }, "-=0.2");

      // Floating tech tags — desktop (fine pointer) only, gentle infinite bob.
      if (window.matchMedia("(pointer: fine)").matches) {
        gsap.fromTo(
          ".float-layer",
          { opacity: 0.72, scale: 0.96 },
          { opacity: 1, scale: 1, duration: 0.8, stagger: 0.06, delay: 0.3 },
        );
        gsap.to(".float-layer", {
          y: 12,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          duration: () => gsap.utils.random(5, 9),
          stagger: { each: 0.5, from: "random" },
        });
      }
    }, el);

    return () => ctx.revert();
  }, []);

  const go = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={rootRef}
      style={{
        position: "relative",
        background: `radial-gradient(ellipse 120% 60% at 50% -10%, rgba(186,217,249,0.55) 0%, rgba(234,234,255,0.65) 38%, rgba(255,255,255,0) 68%)`,
        backgroundColor: C.white,
        overflow: "hidden",
      }}
      className="pt-32 pb-20 px-6"
    >
      {/* Decorative parallax orb */}
      <div
        ref={orbRef}
        aria-hidden
        style={{
          position: "absolute",
          top: 80,
          right: "8%",
          width: 220,
          height: 220,
          borderRadius: "50%",
          background: `radial-gradient(circle at 30% 30%, ${C.iris}, ${C.lavender})`,
          filter: "blur(8px)",
          opacity: 0.45,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Floating layer tags — desktop only, hidden on mobile */}
      <div
        aria-hidden
        className="hidden lg:block"
        style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }}
      >
        {layers.map((l) => (
          <span
            key={l.label}
            className="float-layer"
            style={{
              position: "absolute",
              top: l.top,
              left: l.left,
              right: l.right,
              fontFamily: F.mono,
              fontSize: 11,
              fontWeight: 400,
              color: C.steel,
              backgroundColor: "rgba(255,255,255,0.7)",
              border: `1px solid ${C.ash}`,
              padding: "4px 12px",
              borderRadius: 9999,
              letterSpacing: "0.04em",
              backdropFilter: "blur(4px)",
              boxShadow: Sh.card,
              opacity: 0,
            }}
          >
            {l.label}
          </span>
        ))}
      </div>

      <div className="max-w-[1200px] mx-auto" style={{ position: "relative", zIndex: 1 }}>
        {/* Centered content */}
        <div className="max-w-3xl mx-auto text-center">
          {/* Eyebrow */}
          <p
            className="hero-label"
            style={{
              fontFamily: F.ui,
              fontSize: 12,
              fontWeight: 500,
              color: C.steel,
              letterSpacing: "0.04em",
              marginBottom: 24,
            }}
          >
            CSE Student · Full-stack Product Builder · AI-assisted Developer
          </p>

          {/* Display headline — serif only here */}
          <h1
            className="hero-title"
            style={{
              fontFamily: F.display,
              fontWeight: 300,
              fontSize: "clamp(38px, 6vw, 56px)",
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
              color: C.graphite,
              marginBottom: 24,
            }}
          >
            I turn rough ideas into usable
            <br />
            full-stack products.
          </h1>

          {/* Body paragraphs */}
          <div className="hero-subtitle" style={{ marginBottom: 32 }}>
            <p
              style={{
                fontFamily: F.ui,
                fontSize: 16,
                fontWeight: 400,
                color: C.iron,
                lineHeight: 1.63,
                marginBottom: 12,
              }}
            >
              Hi, I'm{" "}
              <span style={{ fontWeight: 600, color: C.graphite }}>
                Nguyen Tam Duc
              </span>
              , a Computer Science and Engineering student from Da Nang, Viet
              Nam. I build web products, portfolio websites, emotional digital
              experiences, and early game-inspired prototypes.
            </p>
            <p
              style={{
                fontFamily: F.ui,
                fontSize: 16,
                fontWeight: 400,
                color: C.steel,
                lineHeight: 1.63,
              }}
            >
              My work focuses on solving real problems: understanding the user,
              shaping the story, designing the flow, building the system,
              connecting the database, and shipping something people can
              actually use.
            </p>
          </div>

          {/* CTA row */}
          <div
            className="flex flex-wrap items-center justify-center gap-3"
            style={{ marginBottom: 52 }}
          >
            <button
              onClick={() => go("#projects")}
              className="hero-cta group inline-flex items-center gap-2 cursor-pointer"
              style={{
                fontFamily: F.ui,
                fontSize: 14,
                fontWeight: 500,
                color: C.white,
                backgroundColor: C.violet,
                padding: "10px 20px",
                borderRadius: 9999,
                border: "none",
                boxShadow: Sh.primaryCta,
                transition: "opacity 0.15s",
              }}
            >
              View My Projects
              <ArrowRight
                size={14}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </button>

            <WorkWithMeButton variant="outline" className="hero-cta" />

            <a
              href="https://github.com/tducn110"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-cta inline-flex items-center gap-1.5"
              style={{
                fontFamily: F.ui,
                fontSize: 14,
                fontWeight: 500,
                color: C.steel,
                transition: "color 0.15s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = C.graphite)
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = C.steel)
              }
            >
              <Github size={14} />
              Visit GitHub
            </a>
          </div>
        </div>

        {/* Quick facts strip */}
        <div
          className="hero-facts max-w-3xl mx-auto"
          style={{
            backgroundColor: C.white,
            border: `1px solid ${C.ash}`,
            borderRadius: 8,
            boxShadow: Sh.card,
          }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4">
            {facts.map((f, i) => (
              <div
                key={f.label}
                style={{
                  padding: "16px 20px",
                  borderRight:
                    i < facts.length - 1 ? `1px solid ${C.ash}` : "none",
                }}
                className={i >= 2 ? "col-span-1 md:col-span-1" : ""}
              >
                <div
                  style={{
                    fontFamily: F.mono,
                    fontSize: 10,
                    fontWeight: 400,
                    color: C.smoke,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    marginBottom: 4,
                  }}
                >
                  {f.label}
                </div>
                <div
                  style={{
                    fontFamily: F.ui,
                    fontSize: 13,
                    fontWeight: 500,
                    color: C.graphite,
                    lineHeight: 1.4,
                  }}
                >
                  {f.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
