import { Database, Layers3, PenLine } from "lucide-react";
import {
  BuildCard,
  buildCards,
  capabilities,
} from "../content/portfolioContent";
import { portfolioMedia } from "../content/portfolioMedia";
import { MediaFrame } from "./MediaFrame";
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
      <MediaFrame media={portfolioMedia[card.mediaKey]} className="feature-media" />
    </article>
  );
}

export function OriginSection() {
  return (
    <section id="origin" className="section-shell origin-section">
      <SectionHeader
        eyebrow="Origin"
        title="A portfolio built like a technical journal."
        body="Quiet typography, clear proof, and enough motion to show how a rough idea becomes a shipped product."
      />

      <div className="origin-grid">
        {buildCards.map((card, index) => (
          <FeatureCard key={card.title} card={card} wide={index === 1} />
        ))}
      </div>

      <div className="capability-strip reveal" data-motion={motionAttr("reveal")}>
        {capabilities.map((capability) => (
          <span key={capability}>{capability}</span>
        ))}
      </div>
    </section>
  );
}
