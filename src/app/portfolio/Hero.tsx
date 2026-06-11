import { Code2, Github } from "lucide-react";
import { destinationTags, facts, sourceTags } from "../content/portfolioContent";
import { portfolioMedia } from "../content/portfolioMedia";
import { MediaFrame } from "./MediaFrame";
import { ButtonArrow, motionAttr, scrollToTarget } from "./shared";

function Tag({ label, side }: { label: string; side: "source" | "destination" }) {
  return (
    <div
      className={`flow-tag float-tag flow-tag-${side}`}
      data-motion={motionAttr("flow-tag", "float-tag")}
    >
      <span className="tag-icon" />
      <span>{label}</span>
    </div>
  );
}

function DataFlowDiagram() {
  return (
    <div
      className="data-flow reveal"
      data-motion={motionAttr("reveal")}
      aria-label="Product building flow diagram"
    >
      <div className="flow-lines" aria-hidden>
        <span data-motion={motionAttr("flow-line")} />
        <span data-motion={motionAttr("flow-line")} />
        <span data-motion={motionAttr("flow-line")} />
        <span data-motion={motionAttr("flow-line")} />
      </div>

      <div className="flow-column">
        {sourceTags.map((tag) => (
          <Tag key={tag} label={tag} side="source" />
        ))}
      </div>

      <div className="processor" data-motion={motionAttr("processor")}>
        <div
          className="processor-glow"
          data-motion={motionAttr("processor-glow")}
          aria-hidden
        />
        <div className="processor-core">
          <Code2 aria-hidden size={22} strokeWidth={1.5} />
          <span>Normalize</span>
        </div>
        <div className="processor-badges">
          {["Event", "Ingest", "Route", "Refactor"].map((item) => (
            <span key={item} data-motion={motionAttr("processor-status")}>
              <i aria-hidden />
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="flow-column">
        {destinationTags.map((tag) => (
          <Tag key={tag} label={tag} side="destination" />
        ))}
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="hero" className="hero-section section-shell">
      <div className="hero-content">
        <p className="hero-eyebrow" data-motion={motionAttr("hero-eyebrow")}>
          CSE student / full-stack builder / AI-assisted workflow
        </p>
        <h1 className="hero-title" data-motion={motionAttr("hero-title")}>
          <span className="line" data-motion={motionAttr("hero-title-line")}>
            I turn rough ideas into
          </span>
          <span className="line" data-motion={motionAttr("hero-title-line")}>
            usable full-stack products.
          </span>
        </h1>
        <p className="hero-copy" data-motion={motionAttr("hero-copy")}>
          I'm Nguyen Tam Duc, a Computer Science and Engineering student from Da
          Nang. I build web products, portfolio websites, emotional digital
          experiences, and early game-inspired prototypes.
        </p>
        <div className="hero-actions">
          <button
            type="button"
            className="button button-filled hero-cta"
            data-motion={motionAttr("hero-cta")}
            onClick={() => scrollToTarget("#projects")}
          >
            View Projects
            <ButtonArrow />
          </button>
          <button
            type="button"
            className="button button-ghost hero-cta"
            data-motion={motionAttr("hero-cta")}
            onClick={() => scrollToTarget("#service")}
          >
            Work With Me
          </button>
          <a
            className="button button-link hero-cta"
            data-motion={motionAttr("hero-cta")}
            href="https://github.com/tducn110"
            target="_blank"
            rel="noreferrer"
          >
            <Github aria-hidden size={16} strokeWidth={1.6} />
            GitHub
          </a>
        </div>
      </div>

      <MediaFrame media={portfolioMedia.hero} className="hero-media reveal" />
      <DataFlowDiagram />

      <div className="hero-facts reveal" data-motion={motionAttr("reveal")}>
        {facts.map((fact) => (
          <div key={fact.label}>
            <span>{fact.label}</span>
            <strong>{fact.value}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}
