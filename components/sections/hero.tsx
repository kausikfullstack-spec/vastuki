import { ParallaxImage } from "@/components/ui/parallax-image";
import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/ui/arrow";

export function Hero() {
  return (
    <section id="home" className="hero">
      <ParallaxImage className="hero-photo">
        <Image
          src="/image/RBM03176.JPG"
          alt="Vastuki living room with terracotta sofa, sculptural coffee tables and warm lighting"
          fill
          sizes="100vw"
          preload
          className="object-cover"
        />
      </ParallaxImage>
      <div className="hero-shade" />
      <div className="hero-content">
        <div className="eyebrow light">
          <span /> ARCHITECTURE · INTERIORS · EXPERIENCES
        </div>
        <h1>
          Spaces with soul.
          <br />
          Designed for <em>you.</em>
        </h1>
        <p>
          Rooted in your story. Refined by our craft.
          <br className="hidden sm:block" /> Thoughtful spaces that feel
          unmistakably like home.
        </p>
        <Link className="button button-cream" href="/projects">
          Explore our work <Arrow diagonal />
        </Link>
      </div>
      <div className="hero-bottom">
        <Link href="/about" className="scroll-link">
          <span className="scroll-line" /> SCROLL TO DISCOVER
        </Link>
        <span className="hero-caption">
          THE ART OF EVERYDAY LIVING <span>VASTUKI DESIGNS</span>
        </span>
      </div>
      <div className="hero-side">THOUGHTFULLY DESIGNED. BEAUTIFULLY LIVED.</div>
    </section>
  );
}
