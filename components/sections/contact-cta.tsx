import FadeSection from "@/components/ui/fade-section";
import { sectionSpacing, eyebrowStyles, buttonStyles } from "@/lib/styles";
import Link from "next/link";
import { Arrow } from "@/components/ui/arrow";

export function ContactCta() {
  return (
    <FadeSection
      id="contact"
      className={`contact-section text-center bg-[linear-gradient(160deg,_#ffecba_0%,_#ffecba_50%,_#001e19_170%)] [&_h2]:my-[25px] [&_h2]:mx-0 [&_h2]:text-[clamp(40px,_3.8vw,_52px)] [&_p]:text-[16px] [&_p]:leading-[1.8] [&_p]:opacity-65 [&_.button]:mt-7.5 ${sectionSpacing}`}
    >
      <div className={`${eyebrowStyles} justify-center`}>
        <span /> YOUR NEXT CHAPTER STARTS HERE
      </div>
      <h2>
        Let’s make room
        <br />
        for <em>your story.</em>
      </h2>
      <p>
        A new home. A fresh start. A space you’ve been dreaming of.
        <br />
        Every beautiful transformation begins with an idea.
      </p>
      <Link
        className={`${buttonStyles} button-green bg-green text-cream`}
        href="/contact"
      >
        Start your project <Arrow diagonal />
      </Link>
    </FadeSection>
  );
}
