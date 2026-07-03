import { Database, Layers3, PenLine } from "lucide-react";
import {
  BuildCard,
  buildCards,
  capabilities,
} from "../content/portfolioContent";
import { motionAttr, SectionHeader } from "./shared";

const featureIcons = {
  layers: Layers3,
  database: Database,
  pen: PenLine,
} satisfies Record<BuildCard["icon"], typeof Layers3>;

function FeatureCard({ card, wide }: { card: BuildCard; wide?: boolean }) {
  const Icon = featureIcons[card.icon];

  return (
    <article
      className={`feature-card reveal ${wide ? "feature-card-wide" : ""}`}
      data-motion={motionAttr("reveal")}
    >
      <div className="feature-icon">
        <Icon aria-hidden size={22} strokeWidth={1.5} />
      </div>
      <div>
        <h3>{card.title}</h3>
        <p>{card.body}</p>
      </div>
    </article>
  );
}

export function OriginSection() {
  return (
    <section
      id="origin"
      className="section-shell origin-section"
      data-component="OriginSection"
      data-file="src/app/portfolio/OriginSection.tsx"
    >
      <SectionHeader
        eyebrow="Origin"
        title="Everyone has a strength. I help make it visible."
        body="I started with small, real projects — not to show off, but to learn how a rough idea becomes a shipped product. That mindset carries into everything I build."
      />

      <div className="origin-grid">
        {buildCards.map((card, index) => (
          <FeatureCard key={card.title} card={card} wide={index === 1} />
        ))}
      </div>

      <div
        className="capability-strip reveal"
        data-motion={motionAttr("reveal", "parallax-h")}
        data-parallax-dir="left"
        aria-label="Capabilities"
      >
        <div className="capability-track">
          {[0, 1].map((setIndex) => (
            <div
              className="capability-group"
              key={setIndex}
              aria-hidden={setIndex === 1}
            >
              {capabilities.map((capability) => (
                <span key={capability}>{capability}</span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
