import FadeSection from "@/components/ui/fade-section";
import { sectionSpacing, eyebrowStyles } from "@/lib/styles";
import Link from "next/link";
import type { ReactNode } from "react";

export function PageIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: ReactNode;
  description: string;
}) {
  return (
    <FadeSection
      className={`page-intro bg-[linear-gradient(135deg,_#ffecba,_#ebe7ce)] [&_h1]:text-[clamp(56px,_5vw,_72px)] [&_h1]:leading-[1.15] [&_h1]:my-[25px] [&_h1]:mx-0 [&_h1]:max-w-[1000px] [&_h1]:font-semibold [&>p]:max-w-[580px] [&>p]:text-[16px] [&>p]:leading-[1.8] [&>p]:opacity-70 max-md:[&_h1]:text-[clamp(40px,_10vw,_52px)] ${sectionSpacing}`}
    >
      <nav aria-label="Breadcrumb" className="mb-9 text-xs opacity-65">
        <Link href="/">Home</Link>
        <span aria-hidden="true"> / </span>
        <span>{eyebrow}</span>
      </nav>
      <div className={`${eyebrowStyles}`}>
        <span />
        {eyebrow}
      </div>
      <h1>{title}</h1>
      <p>{description}</p>
    </FadeSection>
  );
}
