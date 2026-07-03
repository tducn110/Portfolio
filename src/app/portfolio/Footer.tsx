import { footerContent, navLinks } from "../content/portfolioContent";
import { scrollToTarget } from "./shared";

export function Footer() {
  return (
    <footer
      className="footer-shell"
      data-component="Footer"
      data-file="src/app/portfolio/Footer.tsx"
    >
      <div>
        <strong>{footerContent.name}</strong>
        <p>{footerContent.body}</p>
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
