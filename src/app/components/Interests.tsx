import { C, F } from "../tokens";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1542315192-1f61a1792f33?w=800&auto=format&fit=crop",
    alt: "Workspace and code",
  },
  {
    src: "https://images.unsplash.com/photo-1498736297812-3a08021f206f?w=800&auto=format&fit=crop",
    alt: "Game and interaction",
  },
  {
    src: "https://images.unsplash.com/photo-1576153192396-180ecef2a715?w=800&auto=format&fit=crop",
    alt: "Design and sketching",
  },
  {
    src: "https://images.unsplash.com/photo-1735348568927-7933a6952154?w=800&auto=format&fit=crop",
    alt: "Da Nang and exploring",
  },
];

const skillCategories = [
  {
    name: "Frontend",
    color: C.indigo,
    bg: C.lavender,
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Radix UI", "Motion", "Responsive UI", "Component architecture"],
  },
  {
    name: "Backend",
    color: "#0e6a3d",
    bg: "#f0fdf4",
    items: ["Hono", "Node.js", "API design", "Zod validation", "Authentication flow", "Firebase Auth", "Server-side logic"],
  },
  {
    name: "Database",
    color: "#7c3aed",
    bg: "#faf5ff",
    items: ["Supabase PostgreSQL", "Drizzle ORM", "Schema design", "Relational modeling", "RPC functions", "Migrations"],
  },
  {
    name: "Testing & Quality",
    color: "#b45309",
    bg: "#fffbeb",
    items: ["Vitest", "Testing Library", "Playwright", "Type-safe schemas", "Refactoring", "Folder organization", "Deployment checks"],
  },
  {
    name: "Product & Workflow",
    color: C.graphite,
    bg: C.bone,
    items: ["Product planning", "User flow design", "MVP simplification", "AI-assisted research", "AI-assisted refactoring", "Documentation", "Git / GitHub", "Vercel deployment"],
  },
  {
    name: "Creative Tech",
    color: "#9d174d",
    bg: "#fdf2f8",
    items: ["ShaderLab", "HLSL", "C#", "Game prototype", "Interactive systems", "Game-inspired UI"],
  },
];

const interests = [
  "Full-stack web development",
  "AI-assisted product building",
  "Clean architecture",
  "Database design",
  "API contracts",
  "Frontend systems",
  "Portfolio storytelling",
  "Emotional UX",
  "Finance tools",
  "Game development",
  "Shaders and interaction",
  "Motion and animation",
  "Product refactoring",
];

export function Interests() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="interests" ref={ref} className="px-6 py-20" style={{ backgroundColor: C.bone }}>
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
            Skills & Interests
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
            Tools I use.
            <br />
            Problems I care about.
          </h2>
          <p
            style={{
              fontFamily: F.ui,
              fontSize: 14,
              color: C.steel,
              lineHeight: 1.65,
              maxWidth: 500,
            }}
          >
            I am interested in products that combine practical value with
            meaningful user experience. I pick tools that help me ship real
            things fast.
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {skillCategories.map((cat) => (
            <div
              key={cat.name}
              className="gsap-reveal"
              style={{
                padding: 20,
                backgroundColor: C.white,
                border: `1px solid ${C.ash}`,
                borderRadius: 8,
              }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    backgroundColor: cat.color,
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontFamily: F.ui,
                    fontSize: 13,
                    fontWeight: 600,
                    color: C.graphite,
                  }}
                >
                  {cat.name}
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    style={{
                      fontFamily: F.mono,
                      fontSize: 10,
                      fontWeight: 400,
                      color: cat.color,
                      backgroundColor: cat.bg,
                      padding: "2px 8px",
                      borderRadius: 9999,
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Interests section */}
        <div className="gsap-reveal">
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
            What I'm exploring
          </p>
          <div className="flex flex-wrap gap-2">
            {interests.map((item) => (
              <span
                key={item}
                style={{
                  fontFamily: F.ui,
                  fontSize: 13,
                  fontWeight: 400,
                  color: C.slate,
                  backgroundColor: C.white,
                  border: `1px solid ${C.ash}`,
                  padding: "5px 14px",
                  borderRadius: 9999,
                }}
              >
                {item}
              </span>
            ))}
          </div>
          <p
            style={{
              fontFamily: F.ui,
              fontSize: 13,
              color: C.smoke,
              lineHeight: 1.65,
              maxWidth: 520,
              marginTop: 16,
            }}
          >
            I like projects where software is not only functional, but also has
            a clear story, a real context, and a reason to exist.
          </p>
        </div>

        {/* Beyond code — photo strip */}
        <div className="gsap-reveal" style={{ marginTop: 40 }}>
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
            Beyond code
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {photos.map((photo) => (
              <div
                key={photo.src}
                className="overflow-hidden"
                style={{
                  aspectRatio: "1 / 1",
                  borderRadius: 8,
                  border: `1px solid ${C.ash}`,
                }}
              >
                <ImageWithFallback
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
