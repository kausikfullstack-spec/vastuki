import FadeSection from "@/components/ui/fade-section";
import { sectionSpacing, eyebrowStyles, textLinkStyles } from "@/lib/styles";
import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/ui/arrow";

export function StudioIntro() {
  return (
    <FadeSection
      id="about"
      className={`${sectionSpacing} about-grid grid grid-cols-2 items-center gap-[12%] max-[1101px]:gap-[9%] max-md:grid-cols-1 max-md:gap-[45px]`}
    >
      <div className="about-image relative h-140 [&_img]:object-[52%_center] max-[1101px]:h-125 max-md:h-105 max-md:mr-5">
        <Image
          src="/image/_DSC8211-Edit.jpg"
          alt="Calm green bedroom with bespoke timber detailing"
          fill
          sizes="(max-width: 768px) 100vw, 43vw"
          className="object-cover"
        />
        <span className="image-note absolute bottom-[21px] left-6 text-white tracking-[0.14em] text-[8px] [text-shadow:0_1px_8px_#000]">
          A LITTLE OF YOU. IN EVERY DETAIL.
        </span>
        <div className="about-seal w-29.5 h-29.5 absolute right-[-52px] bottom-12.5 bg-green text-cream rounded-full [border:6px_solid_var(--background)] flex flex-col items-center justify-center font-heading text-[49px] [&_span]:uppercase [&_span]:tracking-[0.12em] [&_span]:mt-[3px] [&_span]:font-body [&_span]:text-[8px] [&_span]:leading-[1.5] max-md:right-[-25px] max-md:w-25 max-md:h-25">
          V<span>Spaces with soul</span>
        </div>
      </div>
      <div className="about-copy [&_h2]:my-[25px] [&_h2]:mx-0 [&_p]:text-[16px] [&_p]:leading-[1.8] [&_p]:my-[15px] [&_p]:mx-0 [&_p]:opacity-65 [&_p]:max-w-[430px] max-md:[&_p]:max-w-[none] max-md:[&_p]:text-[15px] max-md:[&_p]:leading-[1.8]">
        <div className={`${eyebrowStyles}`}>
          <span /> THE VASTUKI PHILOSOPHY
        </div>
        <h2>
          A home is more
          <br />
          than a place.
          <br />
          <em>It’s a feeling.</em>
        </h2>
        <p>
          That quiet comfort when you walk through the door. The corner that
          catches the morning light. The details that tell your story.
        </p>
        <p>
          At Vastuki, we bring architecture, interiors and craftsmanship
          together to create spaces that are personal, purposeful and enduring.
          From the first conversation to the finishing touch, your way of living
          leads our design.
        </p>
        <Link className={`${textLinkStyles}`} href="/about#process">
          Discover our approach <Arrow diagonal />
        </Link>
      </div>
    </FadeSection>
  );
}
