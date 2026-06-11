import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { C, F } from "../tokens";

gsap.registerPlugin(ScrollTrigger);

const reduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const steps = [
  {
    num: "01",
    title: "Understand the Problem",
    desc: "I start by asking what the product is trying to solve. A website is not only a screen — it has to answer a real need: presenting a person, explaining an event, managing data, supporting users, or turning a story into something clear.",
    questions: ["Who is this for?", "What should users understand?", "What action should they take?", "What features are actually necessary?"],
  },
  {
    num: "02",
    title: "Shape the Flow",
    desc: "I break the idea into user flows. This helps me design products that feel simple instead of random.",
    questions: ["What does the user see first?", "What do they click?", "What data do they create?", "Where can confusion happen?"],
  },
  {
    num: "03",
    title: "Build the System",
    desc: "I build the interface and connect it with the logic behind it. That can include frontend components, database tables, API routes, validation, authentication, moderation states, or deployment setup.",
    questions: [],
  },
  {
    num: "04",
    title: "Refactor and Improve",
    desc: "My first version is not always perfect, and I do not pretend it is. After the product works, I review the structure, remove unused code, improve reusable components, and make the system easier to maintain.",
    questions: [],
  },
  {
    num: "05",
    title: "Use AI Carefully",
    desc: "I use AI as part of my workflow to research faster, compare solutions, generate alternatives, review code, and refactor messy parts. But I do not want to blindly copy code. My goal is to understand the system, make my own decisions, and use AI as a tool to build better products.",
    questions: [],
  },
];

export function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".gsap-reveal");

      if (reduced()) {
        gsap.set(cards, { opacity: 1, x: 0 });
        return;
      }

      gsap.fromTo(
        cards,
        { opacity: 0, x: -12 },
        {
          opacity: 1,
          x: 0,
          duration: 0.55,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: { trigger: el, start: "top 75%" },
        },
      );

      // Vertical connector draws top→bottom while scrolling through the steps.
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0, transformOrigin: "top center" },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top 70%",
              end: "bottom 80%",
              scrub: 1,
            },
          },
        );
      }
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section id="process" ref={sectionRef} className="px-6 py-20" style={{ backgroundColor: C.bone }}>
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="gsap-reveal" style={{ marginBottom: 52 }}>
          <p
            style={{
              fontFamily: F.ui,
              fontSize: 12,
              fontWeight: 500,
              color: C.steel,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            Process
          </p>
          <h2
            style={{
              fontFamily: F.ui,
              fontWeight: 300,
              fontSize: "clamp(28px, 4vw, 40px)",
              lineHeight: 1,
              letterSpacing: "-1px",
              color: C.graphite,
              maxWidth: 480,
              marginBottom: 16,
            }}
          >
            I do not start with code immediately.
          </h2>
          <p
            style={{
              fontFamily: F.ui,
              fontSize: 15,
              color: C.iron,
              lineHeight: 1.65,
              maxWidth: 520,
            }}
          >
            Before building, I try to understand the problem behind the request.
            After that, I turn the idea into structure: pages, components, data,
            API, validation, and deployment.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical connector line — desktop only */}
          <div
            ref={lineRef}
            className="hidden lg:block absolute top-7 bottom-7"
            style={{
              left: 23,
              width: 1,
              backgroundColor: C.violet,
            }}
          />

          <div className="flex flex-col gap-6">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className="gsap-reveal flex gap-6 items-start"
              >
                {/* Circle indicator */}
                <div
                  className="hidden lg:flex flex-shrink-0 items-center justify-center"
                  style={{
                    width: 46,
                    height: 46,
                    borderRadius: "50%",
                    backgroundColor: C.white,
                    border: `1px solid ${C.ash}`,
                    zIndex: 1,
                  }}
                >
                  <span
                    style={{
                      fontFamily: F.mono,
                      fontSize: 10,
                      fontWeight: 400,
                      color: i === 4 ? C.violet : C.smoke,
                      letterSpacing: "0.04em",
                    }}
                  >
                    {step.num}
                  </span>
                </div>

                {/* Content card */}
                <div
                  style={{
                    flex: 1,
                    padding: 24,
                    backgroundColor: C.white,
                    border: `1px solid ${C.ash}`,
                    borderRadius: 8,
                    borderLeft: i === 4 ? `3px solid ${C.violet}` : undefined,
                  }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className="lg:hidden"
                      style={{
                        fontFamily: F.mono,
                        fontSize: 10,
                        color: C.smoke,
                        letterSpacing: "0.06em",
                      }}
                    >
                      {step.num}
                    </span>
                    <h3
                      style={{
                        fontFamily: F.ui,
                        fontSize: 16,
                        fontWeight: 600,
                        color: C.graphite,
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {step.title}
                    </h3>
                    {i === 4 && (
                      <span
                        style={{
                          fontFamily: F.ui,
                          fontSize: 11,
                          fontWeight: 500,
                          color: C.violet,
                          backgroundColor: C.iris + "33",
                          padding: "2px 8px",
                          borderRadius: 9999,
                        }}
                      >
                        AI-augmented
                      </span>
                    )}
                  </div>

                  <p
                    style={{
                      fontFamily: F.ui,
                      fontSize: 14,
                      color: C.iron,
                      lineHeight: 1.7,
                      marginBottom: step.questions.length ? 16 : 0,
                    }}
                  >
                    {step.desc}
                  </p>

                  {step.questions.length > 0 && (
                    <div
                      className="flex flex-wrap gap-2"
                    >
                      {step.questions.map((q) => (
                        <span
                          key={q}
                          style={{
                            fontFamily: F.ui,
                            fontSize: 12,
                            color: C.steel,
                            backgroundColor: C.bone,
                            border: `1px solid ${C.ash}`,
                            padding: "3px 10px",
                            borderRadius: 9999,
                          }}
                        >
                          {q}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
