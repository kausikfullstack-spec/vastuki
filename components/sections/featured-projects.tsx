import { ProjectGrid } from "@/components/projects/project-grid";

export function FeaturedProjects() {
  return (
    <section id="projects" className="section-shell projects-section">
      <div className="section-top">
        <div>
          <div className="eyebrow">
            <span /> SELECTED SPACES
          </div>
          <h2>
            Every space,
            <br />
            <em>a different story.</em>
          </h2>
        </div>
        <p>
          A glimpse into homes shaped by individuality.
          <br />
          Thoughtfully imagined. Carefully brought to life.
        </p>
      </div>
      <ProjectGrid />
    </section>
  );
}
