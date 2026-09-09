import FadeSection from "@/components/ui/fade-section";
import { ParallaxImage } from "@/components/ui/parallax-image";
import Image from "next/image";

export function PhotoInterlude() {
  return (
    <FadeSection className="photo-interlude h-117.5 relative overflow-hidden flex flex-col items-center justify-center text-cream text-center [&_h2]:relative [&_h2]:text-[clamp(40px,_4.5vw,_64px)] [&_h2]:tracking-[-0.02em] [&_h2]:leading-[1.15] [&_h2]:font-heading [&_h2]:font-medium [&>span]:relative [&>span]:text-[9px] [&>span]:tracking-[0.25em] [&>span]:mt-7 max-md:h-90">
      <ParallaxImage className="interlude-image absolute top-[-80px] right-0 bottom-[-80px] left-0 will-change-transform motion-reduce:will-change-auto">
        <Image
          src="/image/_DSC8313-Edit.jpg"
          alt="Light-filled living space with cream seating and emerald ottomans"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </ParallaxImage>
      <div className="interlude-shade absolute top-0 right-0 bottom-0 left-0 bg-[#001e1980]" />
      <h2>
        Beautiful spaces.
        <br />
        <em>Meaningful living.</em>
      </h2>
      <span>THE VASTUKI WAY</span>
    </FadeSection>
  );
}
