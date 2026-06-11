import { ExternalLink, Github, Mail, MapPin, Send } from "lucide-react";
import { motionAttr } from "./shared";

export function ContactSection() {
  return (
    <section id="contact" className="section-shell contact-section">
      <div className="contact-grid">
        <div className="contact-copy reveal" data-motion={motionAttr("reveal")}>
          <p>Contact</p>
          <h2>Let’s build something that matters.</h2>
          <span>
            Bring a rough idea, a project that needs structure, or a portfolio
            story that’s hard to explain — I’ll help shape it into something
            clear and usable.
          </span>
        </div>

        <div className="contact-panel reveal" data-motion={motionAttr("reveal")}>
          <a href="mailto:nguyentamduc.dev@gmail.com">
            <Mail aria-hidden size={18} strokeWidth={1.5} />
            nguyentamduc.dev@gmail.com
            <Send aria-hidden size={15} strokeWidth={1.5} />
          </a>
          <a href="https://github.com/tducn110" target="_blank" rel="noreferrer">
            <Github aria-hidden size={18} strokeWidth={1.5} />
            github.com/tducn110
            <ExternalLink aria-hidden size={15} strokeWidth={1.5} />
          </a>
          <span>
            <MapPin aria-hidden size={18} strokeWidth={1.5} />
            Da Nang, Viet Nam
          </span>
        </div>
      </div>
    </section>
  );
}
