import { BrainCircuit, LayoutTemplate, Code2, RefreshCcw, Check } from "lucide-react";
import { ProcessStep, processSteps } from "../content/portfolioContent";
import { motionAttr, SectionHeader } from "./shared";

const phaseIcons = {
  brain: BrainCircuit,
  layout: LayoutTemplate,
  code: Code2,
  refresh: RefreshCcw,
} satisfies Record<ProcessStep["icon"], any>;

function ProcessCard({ step, index }: { step: ProcessStep; index: number }) {
  const Icon = phaseIcons[step.icon];
  const isEven = index % 2 === 0;

  return (
    <div className={`process-timeline-item ${isEven ? "item-left" : "item-right"} reveal`} data-motion={motionAttr("reveal")}>
      <div className="timeline-content text-block">
        <span className="phase-label">{step.label}</span>
        <h3>{step.title}</h3>
        <p>{step.body}</p>
      </div>

      <div className="timeline-center" aria-hidden>
        <div className="timeline-dot" />
      </div>

      <div className="timeline-content card-block">
        <div className="process-detail-card" data-step-index={index}>
          <div className="card-bg-wash" />
          <div className="card-icon-bg">
            <Icon size={64} strokeWidth={1} />
          </div>
          <ul className="card-points">
            {step.points.map((point) => (
              <li key={point}>
                <Check size={18} strokeWidth={2} />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function ProcessSection() {
  return (
    <section
      id="process"
      className="section-shell process-section"
      data-component="ProcessSection"
      data-file="src/app/portfolio/ProcessSection.tsx"
    >
      <div className="process-header reveal" data-motion={motionAttr("reveal")}>
        <SectionHeader
          eyebrow="The Monad Way"
          title="From abstract thought to working system."
          body="I prioritize deep understanding over rapid iteration, shaping structural integrity before rendering surface details."
        />
      </div>

      <div className="process-timeline">
        <div className="timeline-line-vertical" aria-hidden />
        {processSteps.map((step, index) => (
          <ProcessCard key={step.title} step={step} index={index} />
        ))}
      </div>
    </section>
  );
}
