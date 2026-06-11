import { Github } from "lucide-react";
import { C, F } from "../tokens";

export function Footer() {
  const go = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      style={{
        borderTop: `1px solid ${C.ash}`,
        backgroundColor: C.white,
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:items-center">
          {/* Left: identity */}
          <div className="md:col-span-5">
            <p
              style={{
                fontFamily: F.ui,
                fontSize: 14,
                fontWeight: 600,
                color: C.graphite,
                letterSpacing: "-0.02em",
                marginBottom: 4,
              }}
            >
              Nguyen Tam Duc
            </p>
            <p
              style={{
                fontFamily: F.ui,
                fontSize: 12,
                color: C.steel,
                lineHeight: 1.55,
                maxWidth: 340,
              }}
            >
              CSE student, full-stack product builder, and AI-assisted developer
              from Da Nang, Viet Nam. Turning rough ideas into usable products.
            </p>
          </div>

          {/* Center: nav */}
          <nav className="md:col-span-4 flex flex-wrap gap-x-6 gap-y-2 md:justify-center">
            {["#about", "#projects", "#process", "#interests", "#contact"].map((href) => (
              <button
                key={href}
                onClick={() => go(href)}
                style={{
                  fontFamily: F.ui,
                  fontSize: 13,
                  fontWeight: 500,
                  color: C.steel,
                  cursor: "pointer",
                  transition: "color 0.15s",
                  textTransform: "capitalize",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = C.graphite)
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = C.steel)
                }
              >
                {href.replace("#", "")}
              </button>
            ))}
          </nav>

          {/* Right: GitHub + copyright */}
          <div className="md:col-span-3 flex flex-col sm:flex-row md:flex-col items-start md:items-end gap-2 sm:gap-4 md:gap-2">
            <a
              href="https://github.com/tducn110"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5"
              style={{
                fontFamily: F.mono,
                fontSize: 12,
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
              tducn110
            </a>
            <span
              style={{
                fontFamily: F.ui,
                fontSize: 12,
                color: C.smoke,
              }}
            >
              © 2025 Nguyen Tam Duc
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
