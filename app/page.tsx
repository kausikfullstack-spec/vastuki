import { Hero } from "@/components/sections/hero";
import { ValuesStrip } from "@/components/sections/values-strip";
import { StudioIntro } from "@/components/sections/studio-intro";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { BeforeAfter } from "@/components/sections/before-after";
import { ContactCta } from "@/components/sections/contact-cta";
export default function Home() {
  return (
    <>
      <Hero />
      <ValuesStrip />
      <StudioIntro />
      <FeaturedProjects />
      <BeforeAfter />
      <ContactCta />
    </>
  );
}
