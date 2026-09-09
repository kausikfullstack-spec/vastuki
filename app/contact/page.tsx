import FadeSection from "@/components/ui/fade-section";
import { sectionSpacing } from "@/lib/styles";
import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/page-intro";
import { ProjectBriefForm } from "@/components/contact/project-brief-form";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Start Your Project",
  description:
    "Plan your next chapter with Vastuki. Prepare a personal project brief for your home or renovation.",
};
export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title={
          <>
            Let’s make room
            <br />
            for <em>your story.</em>
          </>
        }
        description="A new home. A fresh start. A space you’ve been dreaming of. Start by putting your ideas into words."
      />
      <FadeSection
        className={`${sectionSpacing} contact-page-grid grid grid-cols-2 gap-[7%] items-start max-md:grid-cols-1 max-md:gap-[40px]`}
        aria-label="Prepare your project"
      >
        <div className="contact-page-photo relative min-h-[690px] max-md:min-h-[330px]">
          <Image
            src="/image/_DSC8211-Edit.jpg"
            alt="A restful bedroom with natural timber and green tones"
            fill
            sizes="(max-width: 768px) 100vw, 43vw"
            className="object-cover"
          />
        </div>
        <ProjectBriefForm />
      </FadeSection>
    </>
  );
}
