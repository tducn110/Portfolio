import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { C, F } from "../tokens";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { TiltImage } from "./TiltImage";

const PORTRAIT =
  "https://images.unsplash.com/photo-1637563680361-3e7ee7599318?w=800&auto=format&fit=crop";

const introParas = [
  "I'm Nguyen Tam Duc, a Computer Science and Engineering student from Da Nang, Viet Nam.",
  "I started building software from small but real ideas: a landing page for a student event, an anonymous note wall for emotional support, a finance app for managing money, and a game prototype to explore interaction and shaders.",
];

const moreParas = [
  "At first, I thought building websites was mostly about making the screen look good. But after working on more projects, I realized that a real product needs much more than UI. It needs a clear problem, a simple user flow, a reliable data structure, readable code, useful features, and a reason for people to care.",
  "That is the kind of developer I am trying to become. I may not always start as the person who knows everything about one specific thing, but I know how to start, learn fast, adapt, and keep moving. When a project begins with uncertainty, I usually take the first step: asking what the problem is, breaking it down, creating a direction, and turning the idea into something real.",
];

const traits = [
  { label: "Starts moving first", desc: "When a project is unclear, I create direction instead of waiting for clarity." },
  { label: "Learns fast", desc: "I enter new technical areas by building in them, not just reading about them." },
  { label: "Takes responsibility", desc: "From idea to delivery — I own the full arc, not only my assigned slice." },
  { label: "Adapts quickly", desc: "My first version is not always right. Refactoring is part of the process." },
];

export function About() {
  const ref = useScrollReveal<HTMLElement>();
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="about" ref={ref} className="px-6 py-20">
      <div className="max-w-[1200px] mx-auto">
        {/* Section header */}
        <div className="gsap-reveal" style={{ marginBottom: 48 }}>
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
            About
          </p>
          <h2
            style={{
              fontFamily: F.ui,
              fontWeight: 300,
              fontSize: "clamp(28px, 4vw, 40px)",
              lineHeight: 1,
              letterSpacing: "-1px",
              color: C.graphite,
              maxWidth: 580,
            }}
          >
            Not only learning to code.
            <br />
            Learning to build complete products.
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1fr_420px] gap-12 items-start">
          {/* Left: story */}
          <div className="gsap-reveal">
            {introParas.map((p, i) => (
              <p
                key={i}
                style={{
                  fontFamily: F.ui,
                  fontSize: 15,
                  fontWeight: i === 0 ? 500 : 400,
                  color: i === 0 ? C.graphite : C.iron,
                  lineHeight: 1.7,
                  marginBottom: 16,
                }}
              >
                {p}
              </p>
            ))}

            {/* Read-more expand — CSS grid-rows transition (no layout jump) */}
            <div
              style={{
                display: "grid",
                gridTemplateRows: showMore ? "1fr" : "0fr",
                opacity: showMore ? 1 : 0,
                transition: "grid-template-rows 0.35s ease, opacity 0.35s ease",
              }}
            >
              <div style={{ overflow: "hidden", minHeight: 0 }}>
                {moreParas.map((p, i) => (
                  <p
                    key={i}
                    style={{
                      fontFamily: F.ui,
                      fontSize: 15,
                      fontWeight: 400,
                      color: C.iron,
                      lineHeight: 1.7,
                      marginBottom: 16,
                    }}
                  >
                    {p}
                  </p>
                ))}

                {/* Leadership note */}
                <div
                  style={{
                    marginTop: 12,
                    padding: "16px 20px",
                    backgroundColor: C.lavender,
                    borderRadius: 8,
                    borderLeft: `3px solid ${C.violet}`,
                  }}
                >
                  <p
                    style={{
                      fontFamily: F.ui,
                      fontSize: 14,
                      fontWeight: 400,
                      color: C.slate,
                      lineHeight: 1.65,
                      fontStyle: "italic",
                    }}
                  >
                    "I often become the person who starts moving when a project
                    is still unclear. I do not need everything to be perfect
                    before taking the first step. I can begin with a rough idea,
                    ask better questions, create a plan, and help the team move
                    forward."
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={() => setShowMore((v) => !v)}
              className="inline-flex items-center gap-1.5 cursor-pointer"
              style={{
                marginTop: 20,
                fontFamily: F.ui,
                fontSize: 13,
                fontWeight: 500,
                color: C.violet,
                background: "none",
                border: "none",
                padding: 0,
              }}
            >
              {showMore ? "Show less" : "Read more"}
              <span
                style={{
                  display: "inline-flex",
                  transform: showMore ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.2s ease",
                }}
              >
                <ChevronDown size={14} />
              </span>
            </button>
          </div>

          {/* Right: traits */}
          <div className="gsap-reveal flex flex-col gap-3">
            <TiltImage
              src={PORTRAIT}
              alt="Portrait of Nguyen Tam Duc"
              ratio="4 / 5"
            />

            <p
              style={{
                fontFamily: F.ui,
                fontSize: 12,
                fontWeight: 500,
                color: C.smoke,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                marginTop: 8,
                marginBottom: 8,
              }}
            >
              Working style
            </p>
            {traits.map((t) => (
              <div
                key={t.label}
                style={{
                  padding: "16px 20px",
                  backgroundColor: C.white,
                  border: `1px solid ${C.ash}`,
                  borderRadius: 8,
                }}
              >
                <div
                  style={{
                    fontFamily: F.ui,
                    fontSize: 13,
                    fontWeight: 600,
                    color: C.graphite,
                    marginBottom: 4,
                  }}
                >
                  {t.label}
                </div>
                <div
                  style={{
                    fontFamily: F.ui,
                    fontSize: 13,
                    fontWeight: 400,
                    color: C.steel,
                    lineHeight: 1.55,
                  }}
                >
                  {t.desc}
                </div>
              </div>
            ))}

            {/* AI note */}
            <div
              style={{
                marginTop: 4,
                padding: "14px 18px",
                backgroundColor: C.bone,
                border: `1px solid ${C.ash}`,
                borderRadius: 8,
              }}
            >
              <div
                style={{
                  fontFamily: F.mono,
                  fontSize: 10,
                  color: C.smoke,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  marginBottom: 6,
                }}
              >
                AI in my workflow
              </div>
              <p
                style={{
                  fontFamily: F.ui,
                  fontSize: 13,
                  color: C.iron,
                  lineHeight: 1.6,
                }}
              >
                I use AI to research faster, compare solutions, generate
                alternatives, review code, and refactor messy parts — but not
                to replace understanding. The final decisions are always mine.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
