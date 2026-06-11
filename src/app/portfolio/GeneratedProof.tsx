export type GeneratedProofVariant =
  | "hero-flow"
  | "system-map"
  | "story-structure"
  | "finance-dashboard"
  | "support-wall"
  | "event-landing"
  | "game-interface"
  | "service-proof";

type GeneratedProofProps = {
  variant: GeneratedProofVariant;
  label?: string;
};

const variantTitles = {
  "hero-flow": "Idea to shipped product",
  "system-map": "Flow / API / data / tests",
  "story-structure": "Before and after structure",
  "finance-dashboard": "Budget-first money system",
  "support-wall": "Anonymous support wall",
  "event-landing": "Event landing path",
  "game-interface": "Prototype interface loop",
  "service-proof": "Portfolio service proof",
} satisfies Record<GeneratedProofVariant, string>;

function FlowPill({ children, active = false }: { children: string; active?: boolean }) {
  return <span className={`proof-pill ${active ? "is-active" : ""}`}>{children}</span>;
}

function StatusDot({ delay = "0s" }: { delay?: string }) {
  return <span className="proof-moving-dot" style={{ animationDelay: delay }} aria-hidden />;
}

function HeroFlowProof() {
  return (
    <div className="proof-hero-flow">
      <div className="proof-flow-column">
        <FlowPill>rough idea</FlowPill>
        <FlowPill>user story</FlowPill>
        <FlowPill>schema</FlowPill>
      </div>
      <div className="proof-flow-rail" aria-hidden>
        <StatusDot />
        <StatusDot delay="1.2s" />
      </div>
      <div className="proof-processor-node">
        <span>normalize</span>
        <small>route / refactor</small>
      </div>
      <div className="proof-flow-rail" aria-hidden>
        <StatusDot delay=".6s" />
        <StatusDot delay="1.8s" />
      </div>
      <div className="proof-flow-column">
        <FlowPill active>full-stack app</FlowPill>
        <FlowPill>portfolio site</FlowPill>
        <FlowPill>event launch</FlowPill>
      </div>
    </div>
  );
}

function SystemMapProof() {
  const nodes = ["user flow", "API", "database", "validation", "tests", "deploy"];

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
  return (
    <div className="proof-story-structure">
      <div className="proof-wireframe proof-wireframe-before">
        <span>before</span>
        <i />
        <i />
        <i />
        <i />
      </div>
      <div className="proof-structure-arrow" aria-hidden />
      <div className="proof-wireframe proof-wireframe-after">
        <span>after</span>
        <i className="wide" />
        <i />
        <i className="wide" />
        <i />
      </div>
    </div>
  );
}

function FinanceDashboardProof() {
  return (
    <div className="proof-finance-dashboard">
      <div className="proof-finance-header">
        <span>available</span>
        <strong>$842</strong>
      </div>
      <div className="proof-budget-bars">
        {["rent", "food", "savings"].map((item, index) => (
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
      <div className="proof-finance-chip">AI quick add: coffee 4.50</div>
    </div>
  );
}

function SupportWallProof() {
  return (
    <div className="proof-support-wall">
      <div className="proof-note-card">I needed to say this somewhere.</div>
      <div className="proof-note-card is-muted">reply: you are not alone</div>
      <div className="proof-moderation-queue">
        <span>moderation</span>
        <i />
        <i />
        <i />
      </div>
    </div>
  );
}

function EventLandingProof() {
  return (
    <div className="proof-event-landing">
      <div className="proof-event-hero">
        <span>PingBall</span>
        <button type="button" tabIndex={-1}>register</button>
      </div>
      <div className="proof-event-grid">
        <i>rules</i>
        <i>schedule</i>
        <i>teams</i>
        <i>venue</i>
      </div>
    </div>
  );
}

function GameInterfaceProof() {
  return (
    <div className="proof-game-interface">
      <div className="proof-game-hud">
        <span>HP 82</span>
        <span>shader pass</span>
      </div>
      <div className="proof-game-stage">
        <i className="proof-game-player" />
        <i className="proof-game-target" />
      </div>
      <div className="proof-game-dialog">input - feedback - loop</div>
    </div>
  );
}

function ServiceProof() {
  return (
    <div className="proof-service">
      <div className="proof-service-column">
        <span>audit</span>
        <i />
        <i />
        <i />
      </div>
      <div className="proof-service-column is-after">
        <span>ship</span>
        <i />
        <i />
        <i />
      </div>
      <div className="proof-service-checklist">
        <b>clear story</b>
        <b>project proof</b>
        <b>responsive handoff</b>
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
import type { CSSProperties } from "react";
