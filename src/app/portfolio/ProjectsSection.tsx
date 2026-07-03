import { projectPipeline, Project, projects } from "../content/portfolioContent";
import { motionAttr, SectionHeader } from "./shared";

function ProjectAtlasStrip() {
  return (
    <div className="project-atlas-strip reveal" data-motion={motionAttr("atlas-strip", "reveal")}>
      <h3 className="atlas-title">Current Phase Pipeline</h3>
      <div className="pipeline-container">
        <div className="pipeline-line"></div>
        {projectPipeline.map((step, i) => (
          <div key={step.step} className={`pipeline-step ${step.active ? "active" : ""}`}>
            <div className="step-indicator">
              {step.status === "Completed" ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              ) : step.active ? (
                <div className="step-pulse"></div>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              )}
            </div>
            <div className="step-text">
              <p className="step-name">{step.step}</p>
              <p className="step-status">{step.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isCaseStudy = project.name === "Font of Intent";

  return (
    <article
      className={`project-card reveal ${isCaseStudy ? "case-study-card" : ""}`}
      data-motion={motionAttr("project-card", "reveal")}
      data-project-index={index}
      data-theme-color={project.themeColor}
    >
      <div className="project-index">{String(index + 1).padStart(2, "0")}</div>
      <div className="project-main">
        <div className="project-meta-top">
          {isCaseStudy ? (
            <span className="case-study-badge">CASE STUDY / {project.type}</span>
          ) : (
            <p>{project.type}</p>
          )}
          <span className="project-status-pill">{project.status}</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", marginTop: isCaseStudy ? "16px" : "0" }}>
          <h3 className={isCaseStudy ? "case-study-title" : ""}>{project.name}</h3>
          {project.link && (
            <a href={project.link} target="_blank" rel="noreferrer" className="project-link" style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', padding: '4px 8px', border: '1px solid var(--color-ink-black)', borderRadius: '999px', textDecoration: 'none', color: 'inherit' }}>
              View Source ↗
            </a>
          )}
        </div>
      </div>
      <div className="project-notes">
        <div>
          <span>Problem</span>
          <p>{project.problem}</p>
        </div>
        <div>
          <span>Solution</span>
          <p>{project.solution}</p>
        </div>
        <div>
          <span>Role</span>
          <p>{project.role}</p>
        </div>
        <div>
          <span>Stack</span>
          <p>{project.stack}</p>
        </div>
      </div>
    </article>
  );
}

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="section-shell projects-section"
      data-component="ProjectsSection"
      data-file="src/app/portfolio/ProjectsSection.tsx"
    >
      <SectionHeader
        eyebrow="Laboratory"
        title="Project Atlas."
        body="A catalog of technical experiments, architectural prototypes, and algorithmic investigations. Documenting the iterative process of computational design."
      />
      
      <ProjectAtlasStrip />

      <div className="project-stack" data-motion={motionAttr("project-stack")}>
        {projects.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
