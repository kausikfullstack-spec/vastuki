import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/page-intro";
import { Services } from "@/components/sections/services";
import { Process } from "@/components/sections/process";
import { ContactCta } from "@/components/sections/contact-cta";

export const metadata: Metadata = {
  title: "Our Expertise",
  description:
    "Residential interiors, architecture, renovation and turnkey execution from Vastuki Designs.",
};
export default function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Our expertise"
        title={
          <>
            Your vision.
            <br />
            <em>Our considered craft.</em>
          </>
        }
        description="Architecture, interiors and execution brought together, from a single room to a complete home."
      />
      <Services />
      <Process />
      <ContactCta />
    </>
  );
}
