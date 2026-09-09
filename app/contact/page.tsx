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
      <section
        className="section-shell contact-page-grid"
        aria-label="Prepare your project"
      >
        <div className="contact-page-photo">
          <Image
            src="/image/_DSC8211-Edit.jpg"
            alt="A restful bedroom with natural timber and green tones"
            fill
            sizes="(max-width: 768px) 100vw, 43vw"
            className="object-cover"
          />
        </div>
        <ProjectBriefForm />
      </section>
    </>
  );
}
