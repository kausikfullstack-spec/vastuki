import { projects } from "@/lib/content";
import { ProjectCard } from "./project-card";

export function ProjectGrid() {
  return (
    <div className="project-grid">
      {projects.map((project, index) => (
        <ProjectCard key={project.slug} project={project} index={index} />
      ))}
    </div>
  );
}
