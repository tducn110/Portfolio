import { ShieldCheck } from "lucide-react";
import { serviceDetails, trustPoints } from "../content/portfolioContent";
import { portfolioMedia } from "../content/portfolioMedia";
import { MediaFrame } from "./MediaFrame";
import { ButtonArrow, motionAttr, scrollToTarget } from "./shared";

export function ServiceSection() {
  return (
    <section id="service" className="section-shell service-section">
      <div className="service-card reveal" data-motion={motionAttr("reveal")}>
        <div>
          <p className="service-kicker">Portfolio Website Service</p>
          <h2>Your strengths deserve to be seen clearly.</h2>
          <p>
            I build portfolio websites for students, developers, and creators
            who want their story, skills, and work to feel easier to understand,
            trust, and remember. Not decoration — structure.
          </p>
          <button
            type="button"
            className="button button-filled"
            onClick={() => scrollToTarget("#contact")}
          >
            Start a portfolio brief
            <ButtonArrow />
          </button>
          <div className="service-detail-grid" aria-label="Portfolio service details">
            {serviceDetails.map((detail) => (
              <article key={detail.title}>
                <h3>{detail.title}</h3>
                <p>{detail.body}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="service-proof-wrap">
          <MediaFrame media={portfolioMedia.service} className="service-media" />
          <div className="service-proof" aria-label="Service strengths">
            {trustPoints.map((point) => (
              <div key={point}>
                <ShieldCheck aria-hidden size={17} strokeWidth={1.5} />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
