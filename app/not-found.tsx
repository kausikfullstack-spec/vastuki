import FadeSection from "@/components/ui/fade-section";
import { sectionSpacing, eyebrowStyles, buttonStyles } from "@/lib/styles";
import Link from "next/link";

export default function NotFound() {
  return (
    <FadeSection
      className={`${sectionSpacing} page-intro bg-[linear-gradient(135deg,_#ffecba,_#ebe7ce)] [&_h1]:text-[clamp(56px,_5vw,_72px)] [&_h1]:leading-[1.15] [&_h1]:my-[25px] [&_h1]:mx-0 [&_h1]:max-w-[1000px] [&_h1]:font-semibold [&>p]:max-w-[580px] [&>p]:text-[16px] [&>p]:leading-[1.8] [&>p]:opacity-70 max-md:[&_h1]:text-[clamp(40px,_10vw,_52px)]`}
    >
      <div className={`${eyebrowStyles}`}>404 — PAGE NOT FOUND</div>
      <h1>
        A different
        <br />
        <em>direction.</em>
      </h1>
      <p>
        We couldn’t find this page. Explore our work or return home to find your
        way.
      </p>
      <Link
        href="/"
        className={`${buttonStyles} button-green bg-green text-cream mt-8`}
      >
        Back to home
      </Link>
    </FadeSection>
  );
}
