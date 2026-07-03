import { Layers, Database, Server, ArrowRight } from "lucide-react";
import {
  stackLayers,
  collaborationProtocol,
  serviceSectionContent,
  serviceCta,
  StackLayer,
} from "../content/portfolioContent";
import { motionAttr, scrollToTarget } from "./shared";

const stackIcons = {
  layers: Layers,
  database: Database,
  server: Server,
} satisfies Record<StackLayer["icon"], any>;

export function ServiceSection() {
  return (
    <section
      id="service"
      className="section-shell service-section"
      data-component="ServiceSection"
      data-file="src/app/portfolio/ServiceSection.tsx"
    >
      <div className="reveal" data-motion={motionAttr("reveal")}>
        {/* Stack Architecture */}
        <div className="stack-header">
          <h2>{serviceSectionContent.stackTitle}</h2>
          <span className="stack-kicker">{serviceSectionContent.stackKicker}</span>
        </div>
        
        <div className="stack-grid">
          {stackLayers.map((layer) => {
            const Icon = stackIcons[layer.icon];
            return (
              <div key={layer.title} className="stack-card">
                <div className="stack-icon-bg">
                  <Icon size={48} strokeWidth={1} />
                </div>
                <span className="layer-label">{layer.label}</span>
                <h3>{layer.title}</h3>
                <p>{layer.body}</p>
                <div className="tech-pills">
                  {layer.techs.map((tech) => (
                    <span key={tech} className="tech-pill">{tech}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Collaboration Protocol */}
        <div className="protocol-container">
          <div className="protocol-intro">
            <h2>{serviceSectionContent.protocolTitle}</h2>
            <p>{serviceSectionContent.protocolBody}</p>
          </div>
          <div className="protocol-steps">
            {collaborationProtocol.map((step) => (
              <div key={step.step} className="protocol-step-item">
                <div className="step-number">
                  <span>{step.step}</span>
                </div>
                <div className="step-content">
                  <h4>{step.title}</h4>
                  <p>{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dark CTA Panel */}
        <div className="service-cta-panel">
          <div className="cta-kicker-wrap">
            <span className="cta-kicker">{serviceCta.kicker}</span>
            <span className="cta-subkicker">BUILD INQUIRY</span>
          </div>
          <div className="cta-content">
            <h2>{serviceCta.title}</h2>
            <p>{serviceCta.body}</p>
            <button
              type="button"
              className="cta-button"
              onClick={() => scrollToTarget(serviceCta.buttonHref)}
            >
              {serviceCta.buttonLabel}
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

