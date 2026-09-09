import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/ui/arrow";
import type { Project } from "@/lib/content";

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`project-card project-${index}`}
    >
      <div className="project-image">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 45vw"
          className="object-cover"
        />
        <span className="project-open">
          <Arrow diagonal />
        </span>
      </div>
      <div className="project-meta">
        <div>
          <span className="eyebrow">{project.type}</span>
          <h3>{project.title}</h3>
        </div>
        <span className="project-number">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
    </Link>
  );
}
