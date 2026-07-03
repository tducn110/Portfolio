import type { CSSProperties } from "react";
import { generatedProofContent } from "../content/portfolioContent";

export type GeneratedProofVariant =
  | "hero-flow"
  | "system-map"
  | "story-structure"
  | "finance-dashboard"
  | "support-wall"
  | "event-landing"
  | "game-interface"
  | "service-proof"
  | "font-of-intent";

type GeneratedProofProps = {
  variant: GeneratedProofVariant;
  label?: string;
};

const variantTitles = generatedProofContent.variantTitles satisfies Record<
  GeneratedProofVariant,
  string
>;

function FlowPill({ children, active = false }: { children: string; active?: boolean }) {
  return <span className={`proof-pill ${active ? "is-active" : ""}`}>{children}</span>;
}

function StatusDot({ delay = "0s" }: { delay?: string }) {
  return <span className="proof-moving-dot" style={{ animationDelay: delay }} aria-hidden />;
}

function HeroFlowProof() {
  const content = generatedProofContent.heroFlow;

  return (
    <div className="proof-hero-flow">
      <div className="proof-flow-column">
        {content.sourcePills.map((pill) => (
          <FlowPill key={pill}>{pill}</FlowPill>
        ))}
      </div>
      <div className="proof-flow-rail" aria-hidden>
        <StatusDot />
        <StatusDot delay="1.2s" />
      </div>
      <div className="proof-processor-node">
        <span>{content.processorLabel}</span>
        <small>{content.processorMeta}</small>
      </div>
      <div className="proof-flow-rail" aria-hidden>
        <StatusDot delay=".6s" />
        <StatusDot delay="1.8s" />
      </div>
      <div className="proof-flow-column">
        {content.destinationPills.map((pill, index) => (
          <FlowPill key={pill} active={index === 0}>
            {pill}
          </FlowPill>
        ))}
      </div>
    </div>
  );
}

function SystemMapProof() {
  const { nodes } = generatedProofContent.systemMap;

  return (
    <div className="proof-system-map">
      {nodes.map((node, index) => (
        <div key={node} className={`proof-map-node proof-map-node-${index + 1}`}>
          <span>{node}</span>
          <i aria-hidden />
        </div>
      ))}
      <div className="proof-map-line proof-map-line-a" aria-hidden />
      <div className="proof-map-line proof-map-line-b" aria-hidden />
      <div className="proof-map-line proof-map-line-c" aria-hidden />
    </div>
  );
}

function StoryStructureProof() {
  const content = generatedProofContent.storyStructure;

  return (
    <div className="proof-story-structure">
      <div className="proof-wireframe proof-wireframe-before">
        <span>{content.beforeLabel}</span>
        <i />
        <i />
        <i />
        <i />
      </div>
      <div className="proof-structure-arrow" aria-hidden />
      <div className="proof-wireframe proof-wireframe-after">
        <span>{content.afterLabel}</span>
        <i className="wide" />
        <i />
        <i className="wide" />
        <i />
      </div>
    </div>
  );
}

function FinanceDashboardProof() {
  const content = generatedProofContent.financeDashboard;

  return (
    <div className="proof-finance-dashboard">
      <div className="proof-finance-header">
        <span>{content.availableLabel}</span>
        <strong>{content.amount}</strong>
      </div>
      <div className="proof-budget-bars">
        {content.bars.map((item, index) => (
          <div key={item}>
            <span>{item}</span>
            <i
              style={
                { "--proof-fill": `${62 + index * 10}%` } as CSSProperties &
                  Record<string, string>
              }
            />
          </div>
        ))}
      </div>
      <div className="proof-finance-chip">{content.chip}</div>
    </div>
  );
}

function SupportWallProof() {
  const content = generatedProofContent.supportWall;

  return (
    <div className="proof-support-wall">
      <div className="proof-note-card">{content.note}</div>
      <div className="proof-note-card is-muted">{content.reply}</div>
      <div className="proof-moderation-queue">
        <span>{content.queueLabel}</span>
        <i />
        <i />
        <i />
      </div>
    </div>
  );
}

function EventLandingProof() {
  const content = generatedProofContent.eventLanding;

  return (
    <div className="proof-event-landing">
      <div className="proof-event-hero">
        <span>{content.title}</span>
        <button type="button" tabIndex={-1}>
          {content.ctaLabel}
        </button>
      </div>
      <div className="proof-event-grid">
        {content.grid.map((item) => (
          <i key={item}>{item}</i>
        ))}
      </div>
    </div>
  );
}

function GameInterfaceProof() {
  const content = generatedProofContent.gameInterface;

  return (
    <div className="proof-game-interface">
      <div className="proof-game-hud">
        <span>{content.hpLabel}</span>
        <span>{content.shaderLabel}</span>
      </div>
      <div className="proof-game-stage">
        <i className="proof-game-player" />
        <i className="proof-game-target" />
      </div>
      <div className="proof-game-dialog">{content.dialog}</div>
    </div>
  );
}

function ServiceProof() {
  const content = generatedProofContent.serviceProof;

  return (
    <div className="proof-service">
      <div className="proof-service-column">
        <span>{content.beforeLabel}</span>
        <i />
        <i />
        <i />
      </div>
      <div className="proof-service-column is-after">
        <span>{content.afterLabel}</span>
        <i />
        <i />
        <i />
      </div>
      <div className="proof-service-checklist">
        {content.checklist.map((item) => (
          <b key={item}>{item}</b>
        ))}
      </div>
    </div>
  );
}

function FontOfIntentProof() {
  const content = generatedProofContent.fontOfIntent;

  return (
    <div className="proof-font-of-intent">
      <div className="foi-preview-wordmark">{content.wordmark}</div>
      <div className="foi-preview-body">
        <h4>
          {content.titleLines[0]}
          <br />
          {content.titleLines[1]}
        </h4>
        <p>
          {content.subtitleLines[0]}
          <br />
          {content.subtitleLines[1]}
        </p>
        <i aria-hidden />
        <div className="foi-preview-card">
          <span className="foi-burst foi-burst-strong">{content.cardStrong}</span>{" "}
          <span className="foi-burst foi-burst-mid">{content.cardMid}</span>
          <span className="foi-demo-cursor" aria-hidden />
        </div>
        <span className="foi-preview-cta">{content.ctaLabel}</span>
      </div>
    </div>
  );
}

function renderVariant(variant: GeneratedProofVariant) {
  switch (variant) {
    case "hero-flow":
      return <HeroFlowProof />;
    case "system-map":
      return <SystemMapProof />;
    case "story-structure":
      return <StoryStructureProof />;
    case "finance-dashboard":
      return <FinanceDashboardProof />;
    case "support-wall":
      return <SupportWallProof />;
    case "event-landing":
      return <EventLandingProof />;
    case "game-interface":
      return <GameInterfaceProof />;
    case "service-proof":
      return <ServiceProof />;
    case "font-of-intent":
      return <FontOfIntentProof />;
    default:
      return null;
  }
}

export function GeneratedProof({ variant, label }: GeneratedProofProps) {
  return (
    <div className={`generated-proof generated-proof-${variant}`} data-proof={variant}>
      <div className="generated-proof-label">
        <span>{label ?? variantTitles[variant]}</span>
        <i aria-hidden />
      </div>
      {renderVariant(variant)}
    </div>
  );
}
