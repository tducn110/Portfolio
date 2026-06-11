import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { C, F } from "../tokens";
import { WorkWithMeButton } from "./WorkWithMeButton";

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "Interests", href: "#interests" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      style={{
        backgroundColor: scrolled ? "rgba(255,255,255,0.95)" : C.white,
        borderBottom: `1px solid ${scrolled ? C.ash : "transparent"}`,
        backdropFilter: scrolled ? "blur(12px)" : "none",
        transition: "all 0.2s ease",
      }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <nav className="max-w-[1200px] mx-auto px-6 h-14 grid grid-cols-[auto_1fr_auto] md:grid-cols-[1fr_auto_1fr] items-center gap-4">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 cursor-pointer justify-self-start"
        >
          <span
            style={{
              fontFamily: F.ui,
              fontWeight: 600,
              fontSize: 15,
              color: C.graphite,
              letterSpacing: "-0.02em",
            }}
          >
            Nguyen Tam Duc
          </span>
          <span
            style={{
              fontFamily: F.ui,
              fontSize: 11,
              fontWeight: 500,
              color: C.indigo,
              backgroundColor: C.lavender,
              padding: "2px 8px",
              borderRadius: 9999,
            }}
          >
            open to work
          </span>
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6 justify-center justify-self-center">
          {links.map((l) => (
            <li key={l.href}>
              <button
                onClick={() => go(l.href)}
                style={{
                  fontFamily: F.ui,
                  fontSize: 14,
                  fontWeight: 500,
                  color: C.iron,
                  cursor: "pointer",
                  transition: "color 0.15s",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = C.graphite)
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = C.iron)
                }
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3 justify-self-end">
          <a
            href="https://github.com/tducn110"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: F.ui,
              fontSize: 14,
              fontWeight: 500,
              color: C.iron,
              transition: "color 0.15s",
            }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.color = C.graphite)
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.color = C.iron)
            }
          >
            GitHub
          </a>
          <WorkWithMeButton variant="primary" />
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden justify-self-end"
          onClick={() => setOpen((v) => !v)}
          style={{ color: C.iron }}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            style={{
              backgroundColor: C.white,
              borderBottom: `1px solid ${C.ash}`,
            }}
            className="md:hidden px-6 pb-5"
          >
            <ul className="flex flex-col gap-1 pt-1">
              {links.map((l) => (
                <li key={l.href}>
                  <button
                    onClick={() => go(l.href)}
                    className="w-full text-left py-2.5 cursor-pointer"
                    style={{
                      fontFamily: F.ui,
                      fontSize: 14,
                      fontWeight: 500,
                      color: C.iron,
                    }}
                  >
                    {l.label}
                  </button>
                </li>
              ))}
              <li className="pt-2">
                <WorkWithMeButton variant="primary" fullWidth />
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
