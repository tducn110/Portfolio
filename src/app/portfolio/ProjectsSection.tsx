import { Project, projects } from "../content/portfolioContent";
import { portfolioMedia } from "../content/portfolioMedia";
import { MediaFrame } from "./MediaFrame";
import { motionAttr, SectionHeader } from "./shared";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article
      className="project-card reveal"
      data-motion={motionAttr("project-card", "reveal")}
      data-project-index={index}
    >
      <div className="project-index">{String(index + 1).padStart(2, "0")}</div>
      <div className="project-main">
        <p>{project.type}</p>
        <h3>{project.name}</h3>
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
      <MediaFrame
        media={portfolioMedia.projects[project.mediaKey]}
        className="project-media"
      />
    </article>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="section-shell projects-section">
      <SectionHeader
        eyebrow="Proof"
        title="Projects as evidence, not decoration."
        body="Each project taught a different layer of product building: architecture, emotional UX, landing page communication, and creative interaction."
      />
      <div className="project-stack" data-motion={motionAttr("project-stack")}>
        {projects.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
