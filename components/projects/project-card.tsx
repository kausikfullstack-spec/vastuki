import { eyebrowStyles } from "@/lib/styles";
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
      className={`project-card block text-left min-w-0 [&:hover_.project-image_img]:[transform:scale(1.04)] ${index === 0 ? "project-0 row-[span_2] [&_.project-image]:h-[645px] max-[1101px]:[&_.project-image]:h-[585px] max-md:row-[auto] max-md:[&_.project-image]:h-102.5" : index === 1 ? "project-1 [&_.project-image]:h-67.5 max-[1101px]:[&_.project-image]:h-60 max-md:[&_.project-image]:h-77.5" : "project-2 [&_.project-image]:h-67.5 max-[1101px]:[&_.project-image]:h-60 max-md:[&_.project-image]:h-77.5"}`}
    >
      <div className="project-image relative overflow-hidden [&_img]:[transition:transform_0.7s]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 45vw"
          className="object-cover"
        />
        <span className="project-open absolute right-4.5 bottom-4.5 rounded-full w-11 h-11 grid place-items-center bg-cream">
          <Arrow diagonal />
        </span>
      </div>
      <div className="project-meta flex items-center justify-between mt-5 [&_.eyebrow]:text-[10px] [&_.eyebrow]:opacity-60 [&_h3]:text-[clamp(28px,_2.4vw,_36px)] [&_h3]:font-medium [&_h3]:tracking-[-0.015em] [&_h3]:mt-2 [&_h3]:leading-[1.25] max-md:[&_h3]:text-[28px] max-md:[&_h3]:font-medium max-md:[&_h3]:leading-[1.25] max-md:[&_h3]:tracking-[-0.015em]">
        <div>
          <span className={`${eyebrowStyles}`}>{project.type}</span>
          <h3>{project.title}</h3>
        </div>
        <span className="project-number font-heading text-[20px] opacity-35">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
    </Link>
  );
}
