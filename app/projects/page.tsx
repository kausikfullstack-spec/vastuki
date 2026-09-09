import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/page-intro";
import { ProjectGrid } from "@/components/projects/project-grid";
import { BeforeAfter } from "@/components/sections/before-after";
import { ContactCta } from "@/components/sections/contact-cta";

export const metadata: Metadata = {
  title: "Our Projects",
  description:
    "Explore Vastuki living spaces, private retreats and contemporary homes, including before-and-after transformations.",
};
export default function ProjectsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Our projects"
        title={
          <>
            Every space,
            <br />
            <em>a different story.</em>
          </>
        }
        description="Explore homes shaped by individuality, thoughtful materials and the art of everyday living."
      />
      <section
        aria-label="Selected projects"
        className="section-shell projects-section"
      >
        <ProjectGrid />
      </section>
      <BeforeAfter />
      <ContactCta />
    </>
  );
}
