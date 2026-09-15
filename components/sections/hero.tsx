import { ButtonIcon } from "@/components/ui/button-icon";
import FadeSection from "@/components/ui/fade-section";
import { buttonStyles } from "@/lib/styles";
import { ParallaxImage } from "@/components/ui/parallax-image";
import Image from "next/image";
import Link from "next/link";
import TextType from "@/components/ui/text-type";
import CircularText from "@/components/ui/circular-text";

export function Hero() {
  return (
    <FadeSection
      id="home"
      className="hero relative h-[min(760px,calc(100svh-94px))] min-h-[590px] overflow-hidden bg-green text-cream max-md:h-[calc(90svh-78px)] max-md:min-h-[620px] max-md:max-h-[800px]"
    >
      <ParallaxImage className="hero-photo absolute -inset-y-10 inset-x-0 will-change-transform motion-reduce:will-change-auto">
        <Image
          src="/image/_DSC9698-Edit.jpg"
          alt="Vastuki living room with terracotta sofa, sculptural coffee tables and warm lighting"
          fill
          sizes="100vw"
          preload
          className="object-cover object-[center_53%] max-md:object-[62%_center]"
        />
      </ParallaxImage>
      <div className="hero-shade absolute top-0 right-0 bottom-0 left-0 bg-[image:linear-gradient(90deg,_#001e19e6_0%,_#001e1980_43%,_#001e190b_78%),_linear-gradient(0deg,_#001e198c,_transparent_30%)] max-md:bg-[image:linear-gradient(90deg,_#001e19d9,_#001e1950),_linear-gradient(0deg,_#001e1970,_transparent)]" />
      <div className="hero-content relative pt-[10%] pb-25 px-[7.5%] max-[1101px]:pt-[13%] max-md:pt-22.5 max-md:pb-25 max-md:px-[7%]">
        <h1 className="my-[27px] text-[clamp(56px,5vw,72px)] font-semibold leading-[1.15] max-md:my-[25px] max-md:text-[clamp(36px,9vw,48px)]">
          <TextType
            text={["Spaces with soul.\nDesigned for you."]}
            emphasis="you."
            typingSpeed={75}
            pauseDuration={1500}
            deletingSpeed={50}
            showCursor
            cursorCharacter="|"
            cursorBlinkDuration={0.5}
          />
        </h1>
        <p className="text-[17px] leading-[1.8] text-[#fff3d6c7] max-md:text-base">
          Rooted in your story. Refined by our craft.
          <br className="hidden sm:block" /> Thoughtful spaces that feel
          unmistakably like home.
        </p>
        <Link
          className={`${buttonStyles} button-cream mt-[33px]`}
          href="/projects"
        >
          <ButtonIcon /> Explore our work
        </Link>
      </div>
      <div className="hero-circle absolute right-[8%] bottom-[305px] w-41 h-41 max-md:w-29 max-md:h-29 max-md:right-[7%] max-md:bottom-19.5">
        <CircularText
          text="ARCHITECTURE · INTERIORS · EXPERIENCES · "
          spinDuration={20}
          onHover="speedUp"
        />
        <div className="pointer-events-none absolute inset-[25%]">
          <Image
            src="/image/logo.png"
            alt="Vastuki logo"
            fill
            sizes="(max-width: 767px) 58px, 82px"
            className="object-contain"
          />
        </div>
      </div>
      <div className="hero-bottom absolute left-[7.5%] right-[5%] bottom-8 flex items-center justify-between text-[8px] tracking-[0.17em]">
        {/* <Link href="/about" className="scroll-link">
          <span className="scroll-line" /> SCROLL TO DISCOVER
        </Link> */}
        {/* <span className="hero-caption">
          THE ART OF EVERYDAY LIVING <span>VASTUKI DESIGNS</span>
        </span> */}
      </div>
      {/* <div className="hero-side absolute right-7 top-[40%] [writing-mode:vertical-rl] text-[8px] tracking-[0.2em] max-md:hidden">
        THOUGHTFULLY DESIGNED. BEAUTIFULLY LIVED.
      </div> */}
    </FadeSection>
  );
}
