import { ExternalLink, Github, Mail, MapPin, Send } from "lucide-react";
import { contactSectionContent } from "../content/portfolioContent";
import { motionAttr } from "./shared";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="section-shell contact-section"
      data-component="ContactSection"
      data-file="src/app/portfolio/ContactSection.tsx"
    >
      <div className="contact-grid">
        <div className="contact-copy reveal" data-motion={motionAttr("reveal")}>
          <p>{contactSectionContent.eyebrow}</p>
          <h2>{contactSectionContent.title}</h2>
          <span>{contactSectionContent.body}</span>
        </div>

        <div className="contact-panel reveal" data-motion={motionAttr("reveal")}>
          <a href={contactSectionContent.links.email.href}>
            <Mail aria-hidden size={18} strokeWidth={1.5} />
            {contactSectionContent.links.email.label}
            <Send aria-hidden size={15} strokeWidth={1.5} />
          </a>
          <a href={contactSectionContent.links.github.href} target="_blank" rel="noreferrer">
            <Github aria-hidden size={18} strokeWidth={1.5} />
            {contactSectionContent.links.github.label}
            <ExternalLink aria-hidden size={15} strokeWidth={1.5} />
          </a>
          <span>
            <MapPin aria-hidden size={18} strokeWidth={1.5} />
            {contactSectionContent.links.location.label}
          </span>
        </div>
      </div>
    </section>
  );
}
