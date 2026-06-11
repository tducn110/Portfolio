import { useState } from "react";
import { Github, Menu, X } from "lucide-react";
import { navLinks } from "../content/portfolioContent";
import { ButtonArrow, scrollToTarget } from "./shared";

function Announcement() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="announcement-bar">
      <p>Open to internships, portfolio builds, and product-minded web work.</p>
      <button type="button" onClick={() => scrollToTarget("#contact")}>
        Start a brief
        <ButtonArrow />
      </button>
      <button
        type="button"
        aria-label="Dismiss announcement"
        className="announcement-close"
        onClick={() => setVisible(false)}
      >
        <X aria-hidden size={15} strokeWidth={1.8} />
      </button>
    </div>
  );
}

export function Nav() {
  const [open, setOpen] = useState(false);

  const go = (href: string) => {
    setOpen(false);
    scrollToTarget(href);
  };

  return (
    <header className="site-header">
      <Announcement />
      <nav className="nav-shell" aria-label="Primary navigation">
        <button type="button" className="brand-mark" onClick={() => go("#hero")}>
          <span className="brand-symbol">NTD</span>
          <span>Nguyen Tam Duc</span>
        </button>

        <div className="nav-links" aria-label="Page sections">
          {navLinks.map((link) => (
            <button key={link.href} type="button" onClick={() => go(link.href)}>
              {link.label}
            </button>
          ))}
        </div>

        <div className="nav-actions">
          <a
            className="button button-ghost"
            href="https://github.com/tducn110"
            target="_blank"
            rel="noreferrer"
          >
            <Github aria-hidden size={16} strokeWidth={1.6} />
            GitHub
          </a>
          <button
            type="button"
            className="button button-filled"
            onClick={() => go("#contact")}
          >
            Work With Me
            <ButtonArrow />
          </button>
        </div>

        <button
          type="button"
          className="mobile-toggle"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? (
            <X aria-hidden size={20} strokeWidth={1.7} />
          ) : (
            <Menu aria-hidden size={20} strokeWidth={1.7} />
          )}
        </button>
      </nav>

      {open && (
        <div className="mobile-menu">
          {navLinks.map((link) => (
            <button key={link.href} type="button" onClick={() => go(link.href)}>
              {link.label}
            </button>
          ))}
          <a
            href="https://github.com/tducn110"
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
          >
            GitHub
          </a>
        </div>
      )}
    </header>
  );
}
