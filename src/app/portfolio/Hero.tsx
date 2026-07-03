import { Code2, Github } from "lucide-react";
import {
  destinationTags,
  facts,
  heroContent,
  sourceTags,
} from "../content/portfolioContent";
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
      aria-label={heroContent.flowAriaLabel}
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
          <span>{heroContent.processorLabel}</span>
        </div>
        <div className="processor-badges">
          {heroContent.processorStatuses.map((item) => (
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
    <section
      id="hero"
      className="hero-section section-shell"
      data-component="Hero"
      data-file="src/app/portfolio/Hero.tsx"
    >
      <div className="hero-content">
        <p className="hero-eyebrow" data-motion={motionAttr("hero-eyebrow")}>
          {heroContent.eyebrow}
        </p>
        <h1 className="hero-title" data-motion={motionAttr("hero-title")}>
          <span className="line" data-motion={motionAttr("hero-title-line")}>
            {heroContent.titleLines[0]}
          </span>
          <span className="line" data-motion={motionAttr("hero-title-line")}>
            {heroContent.titleLines[1]}
          </span>
        </h1>
        <p className="hero-copy" data-motion={motionAttr("hero-copy")}>
          {heroContent.body}
        </p>
        <div className="hero-actions">
          <button
            type="button"
            className="button button-filled hero-cta"
            data-motion={motionAttr("hero-cta")}
            onClick={() => scrollToTarget(heroContent.actions.projects.href)}
          >
            {heroContent.actions.projects.label}
            <ButtonArrow />
          </button>
          <button
            type="button"
            className="button button-ghost hero-cta"
            data-motion={motionAttr("hero-cta")}
            onClick={() => scrollToTarget(heroContent.actions.service.href)}
          >
            {heroContent.actions.service.label}
          </button>
          <a
            className="button button-link hero-cta"
            data-motion={motionAttr("hero-cta")}
            href={heroContent.actions.github.href}
            target="_blank"
            rel="noreferrer"
          >
            <Github aria-hidden size={16} strokeWidth={1.6} />
            {heroContent.actions.github.label}
          </a>
        </div>
      </div>

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
