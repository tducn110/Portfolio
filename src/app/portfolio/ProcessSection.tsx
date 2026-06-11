import { processSteps } from "../content/portfolioContent";
import { motionAttr, SectionHeader } from "./shared";

export function ProcessSection() {
  return (
    <section id="process" className="section-shell process-section">
      <div className="process-layout">
        <div className="process-info">
          <SectionHeader
            eyebrow="Process"
            title="From unclear brief to working system."
            body="The workflow is simple on purpose: understand the problem, shape the flow, build the system, then improve it."
          />
          <div className="process-extra">
            <p>
              I do not start with code immediately. Before building, I try to understand the problem behind the request.
            </p>
            <p>
              After that, I turn the idea into structure: pages, components, data, API, validation, and deployment.
            </p>
          </div>
        </div>

        <div
          className="process-panel reveal"
          data-motion={motionAttr("process-panel", "reveal")}
        >
          <div className="process-line" aria-hidden>
            <span className="process-fill" data-motion={motionAttr("process-fill")} />
          </div>
          {processSteps.map((step, index) => (
            <article
              key={step.title}
              className="process-step"
              data-motion={motionAttr("process-step")}
              data-step-index={index}
            >
              <span />
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
