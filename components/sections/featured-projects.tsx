import FadeSection from "@/components/ui/fade-section";
import { sectionSpacing, eyebrowStyles } from "@/lib/styles";
import { ProjectGrid } from "@/components/projects/project-grid";

export function FeaturedProjects() {
  return (
    <FadeSection
      id="projects"
      className={`${sectionSpacing} projects-section bg-[#f4efdf]`}
    >
      <div className="section-top flex items-end justify-between gap-[40px] mb-12.5 [&_h2]:mt-5 [&>p]:text-[16px] [&>p]:leading-[1.8] [&>p]:opacity-60 [&>p]:pb-2 max-md:block max-md:mb-7.5 max-md:[&>p]:mt-[25px] max-md:[&>p]:text-[15px] max-md:[&>p]:leading-[1.8]">
        <div>
          <div className={`${eyebrowStyles}`}>
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
    </FadeSection>
  );
}
