import { C, F } from "../tokens";
import { useScrollReveal } from "../hooks/useScrollReveal";

const focus = [
  "Full-stack web applications",
  "Portfolio websites",
  "Student event landing pages",
  "Personal finance tools",
  "Anonymous and emotional web experiences",
  "AI-assisted development workflows",
  "Game-inspired interfaces and visual experiments",
];

export function WhatIDo() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="px-6 py-20" style={{ backgroundColor: C.bone }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: What I build */}
          <div className="gsap-reveal">
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
              What I'm doing
            </p>
            <h2
              style={{
                fontFamily: F.ui,
                fontWeight: 300,
                fontSize: "clamp(24px, 3vw, 32px)",
                lineHeight: 1.15,
                letterSpacing: "-0.5px",
                color: C.graphite,
                marginBottom: 16,
              }}
            >
              I build small but complete digital products.
            </h2>
            <p
              style={{
                fontFamily: F.ui,
                fontSize: 15,
                color: C.iron,
                lineHeight: 1.7,
                marginBottom: 24,
              }}
            >
              I enjoy projects where I can connect both sides of building: the
              human side and the technical side.
            </p>

            <ul className="flex flex-col gap-2" style={{ marginBottom: 24 }}>
              {focus.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3"
                  style={{
                    fontFamily: F.ui,
                    fontSize: 14,
                    color: C.iron,
                    lineHeight: 1.55,
                  }}
                >
                  <span
                    style={{
                      width: 4,
                      height: 4,
                      borderRadius: "50%",
                      backgroundColor: C.violet,
                      flexShrink: 0,
                      marginTop: 7,
                    }}
                  />
                  {item}
                </li>
              ))}
            </ul>

            {/* Human + Technical note */}
            <div
              className="grid grid-cols-2 gap-3"
              style={{ marginTop: 8 }}
            >
              {[
                {
                  label: "The human side",
                  desc: "The story, the user, the problem, and the feeling of the product.",
                  color: C.violet,
                },
                {
                  label: "The technical side",
                  desc: "The database, API, components, auth, deployment, and maintainable code.",
                  color: C.indigo,
                },
              ].map((s) => (
                <div
                  key={s.label}
                  style={{
                    padding: "14px 16px",
                    backgroundColor: C.white,
                    border: `1px solid ${C.ash}`,
                    borderRadius: 8,
                    borderTop: `3px solid ${s.color}`,
                  }}
                >
                  <div
                    style={{
                      fontFamily: F.ui,
                      fontSize: 12,
                      fontWeight: 600,
                      color: C.graphite,
                      marginBottom: 4,
                    }}
                  >
                    {s.label}
                  </div>
                  <div
                    style={{
                      fontFamily: F.ui,
                      fontSize: 12,
                      color: C.steel,
                      lineHeight: 1.55,
                    }}
                  >
                    {s.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: My Belief */}
          <div className="gsap-reveal">
            <div
              style={{
                padding: 32,
                backgroundColor: C.white,
                border: `1px solid ${C.ash}`,
                borderRadius: 8,
                marginBottom: 16,
              }}
            >
              <p
                style={{
                  fontFamily: F.ui,
                  fontSize: 12,
                  fontWeight: 500,
                  color: C.steel,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  marginBottom: 16,
                }}
              >
                My belief
              </p>
              <p
                style={{
                  fontFamily: F.display,
                  fontWeight: 300,
                  fontSize: 22,
                  lineHeight: 1.35,
                  color: C.graphite,
                  letterSpacing: "-0.01em",
                  marginBottom: 16,
                }}
              >
                I believe everyone has their own strengths, even when they do
                not always know how to show them clearly.
              </p>
              <p
                style={{
                  fontFamily: F.ui,
                  fontSize: 14,
                  color: C.iron,
                  lineHeight: 1.7,
                  marginBottom: 12,
                }}
              >
                That is also how I see my work. I build portfolio websites and
                digital products that help people express who they are, what
                they can do, and why their work matters.
              </p>
              <p
                style={{
                  fontFamily: F.ui,
                  fontSize: 14,
                  color: C.iron,
                  lineHeight: 1.7,
                }}
              >
                A good portfolio is not only a beautiful page. It should tell a
                clear story, highlight real strengths, and make people feel
                confident to reach out.
              </p>
            </div>

            {/* What I can help with */}
            <div
              style={{
                padding: 24,
                backgroundColor: C.lavender,
                border: `1px solid #d4c4ff`,
                borderRadius: 8,
              }}
            >
              <p
                style={{
                  fontFamily: F.ui,
                  fontSize: 12,
                  fontWeight: 500,
                  color: C.indigo,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  marginBottom: 12,
                }}
              >
                What I can help turn into a product
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  "A clear story",
                  "A website structure",
                  "A user flow",
                  "A project showcase",
                  "A frontend interface",
                  "A database/API plan",
                  "A portfolio direction",
                  "A deployable web product",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2"
                    style={{
                      fontFamily: F.ui,
                      fontSize: 12,
                      color: C.slate,
                    }}
                  >
                    <span
                      style={{
                        width: 3,
                        height: 3,
                        borderRadius: "50%",
                        backgroundColor: C.violet,
                        flexShrink: 0,
                      }}
                    />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
