import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/page-intro";
import { StudioIntro } from "@/components/sections/studio-intro";
import { Process } from "@/components/sections/process";
import { PhotoInterlude } from "@/components/sections/photo-interlude";
import { ContactCta } from "@/components/sections/contact-cta";

export const metadata: Metadata = {
  title: "Our Studio",
  description:
    "Get to know the Vastuki philosophy and our thoughtful journey from first conversation to finished home.",
};
export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="Our studio"
        title={
          <>
            Personal by nature.
            <br />
            <em>Thoughtful by design.</em>
          </>
        }
        description="We believe the most beautiful spaces begin with the people who live in them."
      />
      <StudioIntro />
      <Process />
      <PhotoInterlude />
      <ContactCta />
    </>
  );
}
