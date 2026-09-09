import { projects } from "@/lib/content";
import { ProjectCard } from "./project-card";

export function ProjectGrid() {
  return (
    <div className="project-grid grid grid-cols-2 gap-y-[45px] gap-x-[35px] items-start max-md:grid-cols-1 max-md:gap-[32px]">
      {projects.map((project, index) => (
        <ProjectCard key={project.slug} project={project} index={index} />
      ))}
    </div>
  );
}
