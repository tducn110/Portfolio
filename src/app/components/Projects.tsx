import { useState } from "react";
import { ArrowUpRight, ChevronDown, Github } from "lucide-react";
import { C, F, Sh } from "../tokens";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { ImageWithFallback } from "./figma/ImageWithFallback";

type Project = {
  num: string;
  title: string;
  tagline: string;
  status: "Shipped" | "In Progress" | "Prototype" | "Learning";
  statusColor: string;
  role: string[];
  problem: string;
  solution: string;
  challenge: string;
  learned: string;
  stack: string[];
  github: string;
  image: string;
};

const projects: Project[] = [
  {
    num: "01",
    title: "Finance Tracker V3",
    tagline:
      "A budget-first personal finance platform for managing wallets, budgets, recurring bills, savings goals, and spending analytics.",
    status: "Shipped",
    statusColor: C.green,
    role: ["Team Lead", "Backend", "Database", "Architecture"],
    problem:
      "Many expense trackers only record what users already spent. They help users look back, but they do not always help users decide what is safe to spend today.",
    solution:
      "Finance Tracker V3 was designed around a Budget-First mindset. The app puts budgets at the center and connects them with wallets, transactions, recurring bills, savings goals, and analytics — not just a transaction list.",
    challenge:
      "Understanding how finance data connects together. A transaction can affect wallet balance, budget progress, analytics, savings goals, and safe-to-spend calculations — this pushed careful thinking about data relationships.",
    learned:
      "A full-stack product needs more than a beautiful dashboard. It needs schema design, validation, API contracts, state management, and a structure that can grow.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind",
      "Hono",
      "Zod",
      "Firebase Auth",
      "Supabase PostgreSQL",
      "Drizzle ORM",
      "Turborepo",
      "pnpm",
      "Vercel",
    ],
    github: "https://github.com/tducn110",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
  },
  {
    num: "02",
    title: "Unsaid Words, Shared Hearts",
    tagline:
      "An anonymous note wall for emotional support, comfort replies, and supporter moderation.",
    status: "Shipped",
    statusColor: C.green,
    role: ["Creator", "Product flow", "Frontend", "Supabase data layer", "Moderation"],
    problem:
      "Some people have thoughts they want to express but cannot easily say out loud. The challenge was to create a quiet, anonymous, and safe digital space.",
    solution:
      "Users write an anonymous note → supporters review it → approved notes appear on the public wall → visitors can send comfort replies. This keeps the space open but controlled.",
    challenge:
      "Balancing openness and safety. Anonymous spaces can become risky if every message appears instantly — moderation became a core product feature, not just an admin tool.",
    learned:
      "Software can be emotional. The best solution was not to add more features, but to remove unnecessary flows and protect the core experience: write, read, comfort, moderate.",
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "React Router",
      "Tailwind",
      "Motion",
      "Supabase JS",
      "PostgreSQL",
      "SQL RPC",
      "Vitest",
      "Playwright",
      "Vercel",
    ],
    github: "https://github.com/tducn110",
    image:
      "https://images.unsplash.com/photo-1521931961826-fe48677230a5?w=800&auto=format&fit=crop",
  },
  {
    num: "03",
    title: "PingBall Landing Page",
    tagline:
      "A student event landing page designed to explain the tournament, guide visitors, and support registration.",
    status: "Shipped",
    statusColor: C.green,
    role: ["Frontend developer", "Landing page builder", "UI structure planner"],
    problem:
      "A student tournament needs more than a poster. Participants need to quickly understand what the event is, how it works, why they should join, and where to register.",
    solution:
      "A structured landing page that guides visitors through event information step by step — hero, tournament format, schedule, and registration with clear hierarchy.",
    challenge:
      "Communication. A landing page has to guide attention, reduce confusion, and help people understand the event quickly — the layout IS the message.",
    learned:
      "A good landing page should answer the visitor's questions before they need to ask. Layout thinking and information hierarchy matter as much as code quality.",
    stack: ["React", "TypeScript", "Vite", "Tailwind", "shadcn/ui", "Radix UI", "pnpm"],
    github: "https://github.com/tducn110",
    image:
      "https://images.unsplash.com/photo-1676827613262-5fba25cee5fd?w=800&auto=format&fit=crop",
  },
  {
    num: "04",
    title: "First Game Prototype",
    tagline:
      "An early experiment in shaders, interaction, and game-inspired development.",
    status: "Prototype",
    statusColor: C.steel,
    role: ["Game dev learner", "Shader experimenter", "Interaction explorer"],
    problem:
      "I wanted to explore interactive development beyond normal web pages. Games require a different way of thinking: timing, motion, feedback, input, visual effects, and player experience.",
    solution:
      "Instead of building a large game immediately, I started with a small prototype to understand the basics of game development — shaders, HLSL, C# scripting, and game-inspired systems.",
    challenge:
      "Entering a new technical area. Game development requires thinking about visuals, input, timing, and performance at the same time. That is also why I find it interesting.",
    learned:
      "I want to bring more game-like thinking into future web and product experiences: better motion, better feedback, more immersive interfaces, and stronger emotional interaction.",
    stack: ["ShaderLab", "HLSL", "C#"],
    github: "https://github.com/tducn110",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop",
  },
];

function StatusBadge({ status, color }: { status: string; color: string }) {
  const bgMap: Record<string, string> = {
    Shipped: "#f0fdf0",
    "In Progress": C.lavender,
    Prototype: C.bone,
    Learning: C.marble,
  };
  return (
    <span
      style={{
        fontFamily: F.ui,
        fontSize: 11,
        fontWeight: 500,
        color,
        backgroundColor: bgMap[status] ?? C.bone,
        padding: "2px 10px",
        borderRadius: 9999,
      }}
    >
      {status}
    </span>
  );
}

function ProjectCard({ p }: { p: Project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="gsap-reveal"
      style={{
        backgroundColor: C.white,
        border: `1px solid ${C.ash}`,
        borderRadius: 8,
        overflow: "hidden",
      }}
    >
      {/* Card header */}
      <div style={{ padding: 24 }}>
        <div
          className="flex items-start justify-between gap-4"
          style={{ marginBottom: 12 }}
        >
          <div className="flex items-center gap-3 flex-wrap">
            <span
              style={{
                fontFamily: F.mono,
                fontSize: 10,
                color: C.smoke,
                letterSpacing: "0.06em",
              }}
            >
              {p.num}
            </span>
            <StatusBadge status={p.status} color={p.statusColor} />
          </div>
          <a
            href={p.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1"
            style={{
              fontFamily: F.ui,
              fontSize: 12,
              color: C.steel,
              flexShrink: 0,
              transition: "color 0.15s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color = C.graphite)
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color = C.steel)
            }
          >
            <Github size={13} />
            <span style={{ marginLeft: 4 }}>Code</span>
            <ArrowUpRight size={11} style={{ marginLeft: 2 }} />
          </a>
        </div>

        <h3
          style={{
            fontFamily: F.ui,
            fontSize: 20,
            fontWeight: 600,
            color: C.graphite,
            letterSpacing: "-0.02em",
            marginBottom: 6,
          }}
        >
          {p.title}
        </h3>
        <p
          style={{
            fontFamily: F.ui,
            fontSize: 14,
            color: C.iron,
            lineHeight: 1.65,
            marginBottom: 16,
          }}
        >
          {p.tagline}
        </p>

        {/* Role badges */}
        <div className="flex flex-wrap gap-2" style={{ marginBottom: 16 }}>
          {p.role.map((r) => (
            <span
              key={r}
              style={{
                fontFamily: F.ui,
                fontSize: 11,
                fontWeight: 500,
                color: C.indigo,
                backgroundColor: C.lavender,
                padding: "3px 10px",
                borderRadius: 9999,
              }}
            >
              {r}
            </span>
          ))}
        </div>

        {/* Stack tags */}
        <div className="flex flex-wrap gap-1.5">
          {p.stack.map((s) => (
            <span
              key={s}
              style={{
                fontFamily: F.mono,
                fontSize: 10,
                fontWeight: 400,
                color: C.steel,
                backgroundColor: C.bone,
                border: `1px solid ${C.ash}`,
                padding: "2px 8px",
                borderRadius: 9999,
              }}
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Expand toggle */}
      <button
        onClick={() => setExpanded((v) => !v)}
        className="w-full flex items-center justify-between cursor-pointer"
        style={{
          padding: "12px 24px",
          backgroundColor: C.bone,
          borderTop: `1px solid ${C.ash}`,
          fontFamily: F.ui,
          fontSize: 12,
          fontWeight: 500,
          color: C.steel,
          transition: "background 0.15s",
        }}
        onMouseEnter={(e) =>
          ((e.currentTarget as HTMLElement).style.backgroundColor = C.fog)
        }
        onMouseLeave={(e) =>
          ((e.currentTarget as HTMLElement).style.backgroundColor = C.bone)
        }
      >
        <span>{expanded ? "Hide case study" : "Read case study"}</span>
        <span
          style={{
            display: "inline-flex",
            transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s ease",
          }}
        >
          <ChevronDown size={14} />
        </span>
      </button>

      {/* Expanded case study — CSS grid-rows expand */}
      <div
        style={{
          display: "grid",
          gridTemplateRows: expanded ? "1fr" : "0fr",
          opacity: expanded ? 1 : 0,
          transition: "grid-template-rows 0.3s ease, opacity 0.3s ease",
        }}
      >
        <div style={{ overflow: "hidden", minHeight: 0 }}>
            <div
              style={{
                borderTop: `1px solid ${C.ash}`,
                padding: 24,
                paddingBottom: 0,
              }}
            >
              <div
                className="overflow-hidden"
                style={{
                  aspectRatio: "16 / 9",
                  borderRadius: 8,
                  border: `1px solid ${C.ash}`,
                  boxShadow: Sh.screenshot,
                }}
              >
                <ImageWithFallback
                  src={p.image}
                  alt={`${p.title} preview`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div
              className="grid sm:grid-cols-2 gap-0"
              style={{ marginTop: 24, borderTop: `1px solid ${C.ash}` }}
            >
              {[
                { label: "Problem", text: p.problem },
                { label: "Solution", text: p.solution },
                { label: "Hardest part", text: p.challenge },
                { label: "What I learned", text: p.learned },
              ].map((item, i) => (
                <div
                  key={item.label}
                  style={{
                    padding: 24,
                    borderRight: i % 2 === 0 ? `1px solid ${C.ash}` : "none",
                    borderBottom: i < 2 ? `1px solid ${C.ash}` : "none",
                  }}
                >
                  <div
                    style={{
                      fontFamily: F.mono,
                      fontSize: 10,
                      fontWeight: 400,
                      color: C.smoke,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      marginBottom: 8,
                    }}
                  >
                    {item.label}
                  </div>
                  <p
                    style={{
                      fontFamily: F.ui,
                      fontSize: 13,
                      color: C.iron,
                      lineHeight: 1.7,
                    }}
                  >
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="projects" ref={ref} className="px-6 py-20">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="gsap-reveal" style={{ marginBottom: 16 }}>
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
            Projects
          </p>
          <h2
            style={{
              fontFamily: F.ui,
              fontWeight: 300,
              fontSize: "clamp(28px, 4vw, 40px)",
              lineHeight: 1,
              letterSpacing: "-1px",
              color: C.graphite,
              maxWidth: 540,
            }}
          >
            Not only the technologies.
            <br />
            The problems I tried to solve.
          </h2>
        </div>

        <p
          className="gsap-reveal"
          style={{
            fontFamily: F.ui,
            fontSize: 14,
            color: C.steel,
            lineHeight: 1.65,
            maxWidth: 560,
            marginBottom: 40,
          }}
        >
          Each project helped me learn a different part of building products:
          system architecture, emotional UX, landing page communication,
          database design, AI workflows, and creative interaction. Click "Read
          case study" to expand the full story.
        </p>

        <div className="flex flex-col gap-4">
          {projects.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>

        <div
          className="gsap-reveal"
          style={{ marginTop: 32, textAlign: "center" }}
        >
          <a
            href="https://github.com/tducn110"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2"
            style={{
              fontFamily: F.ui,
              fontSize: 13,
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
            See all repositories on GitHub
            <ArrowUpRight size={13} />
          </a>
        </div>
      </div>
    </section>
  );
}
