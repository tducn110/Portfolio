import { navLinks } from "../content/portfolioContent";
import { scrollToTarget } from "./shared";

export function Footer() {
  return (
    <footer className="footer-shell">
      <div>
        <strong>Nguyen Tam Duc</strong>
        <p>CSE student and early-stage product builder. I start moving when projects begin.</p>
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
