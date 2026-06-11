import { navLinks } from "../content/portfolioContent";
import { scrollToTarget } from "./shared";

export function Footer() {
  return (
    <footer className="footer-shell">
      <div>
        <strong>Nguyen Tam Duc</strong>
        <p>CSE student, full-stack product builder, and AI-assisted developer.</p>
      </div>
      <div className="footer-links">
        {navLinks.map((link) => (
          <button key={link.href} type="button" onClick={() => scrollToTarget(link.href)}>
            {link.label}
          </button>
        ))}
      </div>
    </footer>
  );
}
