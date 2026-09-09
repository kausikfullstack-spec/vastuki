import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/ui/arrow";

export function StudioIntro() {
  return (
    <section id="about" className="section-shell about-grid">
      <div className="about-image">
        <Image
          src="/image/_DSC8211-Edit.jpg"
          alt="Calm green bedroom with bespoke timber detailing"
          fill
          sizes="(max-width: 768px) 100vw, 43vw"
          className="object-cover"
        />
        <span className="image-note">A LITTLE OF YOU. IN EVERY DETAIL.</span>
        <div className="about-seal">
          V<span>Spaces with soul</span>
        </div>
      </div>
      <div className="about-copy">
        <div className="eyebrow">
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
        <Link className="text-link" href="/about#process">
          Discover our approach <Arrow diagonal />
        </Link>
      </div>
    </section>
  );
}
