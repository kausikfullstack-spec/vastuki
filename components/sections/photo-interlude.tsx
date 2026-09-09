import { ParallaxImage } from "@/components/ui/parallax-image";
import Image from "next/image";

export function PhotoInterlude() {
  return (
    <section className="photo-interlude">
      <ParallaxImage className="interlude-image">
        <Image
          src="/image/_DSC8313-Edit.jpg"
          alt="Light-filled living space with cream seating and emerald ottomans"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </ParallaxImage>
      <div className="interlude-shade" />
      <p>
        Beautiful spaces.
        <br />
        <em>Meaningful living.</em>
      </p>
      <span>THE VASTUKI WAY</span>
    </section>
  );
}
