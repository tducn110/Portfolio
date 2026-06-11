import { ArrowRight } from "lucide-react";
import { C, F, Sh } from "../tokens";
import { useScrollReveal } from "../hooks/useScrollReveal";

const expectations = [
  "Clear communication",
  "Product thinking, not only coding",
  "Fast learning and adaptation",
  "Responsibility from idea to delivery",
  "A balance between design, code, and story",
  "A website that shows your strengths clearly",
];

const canBuild = [
  "Personal developer portfolios",
  "Student portfolios",
  "Project showcase websites",
  "Event landing pages",
  "Simple business landing pages",
  "Case-study based project pages",
  "GitHub/project presentation pages",
];

const canClarify = [
  "Who you are",
  "What you are good at",
  "What projects matter most",
  "How to explain your work",
  "How to turn messy experience into a clear story",
  "How to make people trust your ability",
];

export function WhyMe() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="why" ref={ref} className="px-6 py-20">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
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
            Why work with me
          </p>
          <h2
            style={{
              fontFamily: F.ui,
              fontWeight: 300,
              fontSize: "clamp(28px, 4vw, 40px)",
              lineHeight: 1,
              letterSpacing: "-1px",
              color: C.graphite,
              maxWidth: 520,
              marginBottom: 16,
            }}
          >
            I am not only focused on making a page look good.
          </h2>
          <p
            style={{
              fontFamily: F.ui,
              fontSize: 15,
              color: C.iron,
              lineHeight: 1.7,
              maxWidth: 600,
            }}
          >
            I care about what the product is trying to say, what problem it
            solves, and how the system works behind the screen. I can move
            between product thinking, frontend, backend, database, deployment,
            and storytelling.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Why me statement */}
          <div className="gsap-reveal">
            <div
              style={{
                padding: 28,
                backgroundColor: C.white,
                border: `1px solid ${C.ash}`,
                borderRadius: 8,
                marginBottom: 16,
              }}
            >
              <p
                style={{
                  fontFamily: F.display,
                  fontWeight: 300,
                  fontSize: 20,
                  lineHeight: 1.4,
                  color: C.graphite,
                  letterSpacing: "-0.01em",
                  marginBottom: 16,
                  fontStyle: "italic",
                }}
              >
                "Because I do not only build pages. I help shape the story,
                structure the message, solve the real problem, and turn unclear
                ideas into something people can understand and trust."
              </p>
              <p
                style={{
                  fontFamily: F.ui,
                  fontSize: 13,
                  color: C.steel,
                  lineHeight: 1.65,
                }}
              >
                I may still be early in my career, but I learn fast, build
                consistently, and take responsibility when I work on something.
                When a project starts, I am usually the person who tries to
                move first.
              </p>
            </div>

            {/* What you can expect */}
            <div
              style={{
                padding: 24,
                backgroundColor: C.white,
                border: `1px solid ${C.ash}`,
                borderRadius: 8,
              }}
            >
              <p
                style={{
                  fontFamily: F.ui,
                  fontSize: 12,
                  fontWeight: 500,
                  color: C.smoke,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  marginBottom: 14,
                }}
              >
                What you can expect
              </p>
              <ul className="flex flex-col gap-2.5">
                {expectations.map((e) => (
                  <li
                    key={e}
                    className="flex items-start gap-3"
                    style={{ fontFamily: F.ui, fontSize: 14, color: C.iron }}
                  >
                    <span
                      style={{
                        width: 16,
                        height: 16,
                        borderRadius: "50%",
                        backgroundColor: C.lavender,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        marginTop: 1,
                      }}
                    >
                      <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                        <path
                          d="M1 3L3 5L7 1"
                          stroke={C.indigo}
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    {e}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Portfolio service */}
          <div className="gsap-reveal">
            <div
              style={{
                padding: 28,
                background: `radial-gradient(ellipse 100% 80% at 80% 10%, rgba(186,200,255,0.2) 0%, rgba(255,255,255,0) 60%)`,
                backgroundColor: C.white,
                border: `1px solid ${C.ash}`,
                borderRadius: 8,
                height: "100%",
              }}
            >
              <p
                style={{
                  fontFamily: F.ui,
                  fontSize: 12,
                  fontWeight: 500,
                  color: C.violet,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  marginBottom: 16,
                }}
              >
                Portfolio website service
              </p>
              <h3
                style={{
                  fontFamily: F.ui,
                  fontWeight: 600,
                  fontSize: 20,
                  color: C.graphite,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.25,
                  marginBottom: 14,
                }}
              >
                Your strengths deserve a website that shows them clearly.
              </h3>
              <p
                style={{
                  fontFamily: F.ui,
                  fontSize: 14,
                  color: C.iron,
                  lineHeight: 1.7,
                  marginBottom: 20,
                }}
              >
                I believe everyone has their own strengths. Sometimes the
                problem is not that people lack ability — it is that their story
                is not presented clearly enough. That is why I build portfolio
                websites.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-20">
                <div>
                  <p
                    style={{
                      fontFamily: F.ui,
                      fontSize: 11,
                      fontWeight: 500,
                      color: C.smoke,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      marginBottom: 8,
                    }}
                  >
                    I can build
                  </p>
                  <ul className="flex flex-col gap-1.5">
                    {canBuild.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2"
                        style={{ fontFamily: F.ui, fontSize: 12, color: C.steel }}
                      >
                        <span
                          style={{
                            width: 3,
                            height: 3,
                            borderRadius: "50%",
                            backgroundColor: C.violet,
                            flexShrink: 0,
                            marginTop: 5,
                          }}
                        />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: F.ui,
                      fontSize: 11,
                      fontWeight: 500,
                      color: C.smoke,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      marginBottom: 8,
                    }}
                  >
                    I help clarify
                  </p>
                  <ul className="flex flex-col gap-1.5">
                    {canClarify.map((c) => (
                      <li
                        key={c}
                        className="flex items-start gap-2"
                        style={{ fontFamily: F.ui, fontSize: 12, color: C.steel }}
                      >
                        <span
                          style={{
                            width: 3,
                            height: 3,
                            borderRadius: "50%",
                            backgroundColor: C.indigo,
                            flexShrink: 0,
                            marginTop: 5,
                          }}
                        />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div
                style={{
                  padding: "16px 20px",
                  backgroundColor: C.bone,
                  borderRadius: 8,
                  border: `1px solid ${C.ash}`,
                  marginBottom: 16,
                }}
              >
                <p
                  style={{
                    fontFamily: F.ui,
                    fontSize: 14,
                    color: C.graphite,
                    lineHeight: 1.6,
                    marginBottom: 4,
                    fontWeight: 500,
                  }}
                >
                  Want to make your strengths stand out?
                </p>
                <p
                  style={{
                    fontFamily: F.ui,
                    fontSize: 13,
                    color: C.steel,
                    lineHeight: 1.6,
                  }}
                >
                  Let's turn your story into a portfolio people can remember.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => {
                    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="group inline-flex items-center gap-2 cursor-pointer"
                  style={{
                    fontFamily: F.ui,
                    fontSize: 13,
                    fontWeight: 500,
                    color: C.white,
                    backgroundColor: C.violet,
                    padding: "9px 18px",
                    borderRadius: 9999,
                    border: "none",
                    boxShadow: Sh.primaryCta,
                  }}
                >
                  Start a Portfolio Project
                  <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
                <button
                  onClick={() => {
                    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  style={{
                    fontFamily: F.ui,
                    fontSize: 13,
                    fontWeight: 500,
                    color: C.graphite,
                    backgroundColor: C.white,
                    padding: "9px 18px",
                    borderRadius: 9999,
                    border: `1px solid ${C.ash}`,
                    cursor: "pointer",
                  }}
                >
                  Contact Me
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
