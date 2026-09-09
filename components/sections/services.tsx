import FadeSection from "@/components/ui/fade-section";
import { sectionSpacing, eyebrowStyles, textLinkStyles } from "@/lib/styles";
import { services } from "@/lib/content";
import Link from "next/link";
import { Arrow } from "@/components/ui/arrow";

export function Services() {
  return (
    <FadeSection
      id="services"
      className={`services-section bg-green text-cream grid grid-cols-[1fr_1.2fr] gap-[10%] [&_h2]:mt-[25px] max-md:grid-cols-1 max-md:gap-[40px] ${sectionSpacing}`}
    >
      <div>
        <div className={`${eyebrowStyles} light`}>
          <span /> OUR EXPERTISE
        </div>
        <h2>
          One studio.
          <br />
          Endless <em>possibilities.</em>
        </h2>
        <p className="mt-7 max-w-sm leading-7 opacity-65">
          From a single room to a complete home, we connect the dots between
          your vision and the space you live in.
        </p>
        <Link className={`${textLinkStyles} mt-10`} href="/contact">
          Find your starting point <Arrow diagonal />
        </Link>
      </div>
      <div className="service-list">
        {services.map(([number, title, summary, detail]) => (
          <details
            key={number}
            className="service-item [border-bottom:1px_solid_#ffecba30] [&:first-child]:[border-top:1px_solid_#ffecba30] [&_summary]:py-7 [&_summary]:px-0 [&_summary]:flex [&_summary]:items-center [&_summary]:gap-[22px] [&_summary]:list-none [&_summary::-webkit-details-marker]:hidden [&_h3]:text-[28px] [&_h3]:tracking-[-0.015em] [&_h3]:font-medium [&_h3]:leading-[1.3] [&_summary_p]:text-[16px] [&_summary_p]:opacity-50 [&_summary_p]:mt-2 [&_summary_p]:leading-[1.8] [&[open]_.service-plus]:[transform:rotate(45deg)] max-[1101px]:[&_h3]:text-[28px] max-[1101px]:[&_h3]:font-medium max-[1101px]:[&_h3]:leading-[1.3] max-[1101px]:[&_h3]:tracking-[-0.015em] max-md:[&_summary]:py-6 max-md:[&_summary]:px-0"
          >
            <summary>
              <span className="service-number text-[9px] opacity-50 self-start pt-[5px]">
                {number}
              </span>
              <span>
                <h3>{title}</h3>
                <p>{summary}</p>
              </span>
              <span className="service-plus ml-auto text-[25px] font-extralight [transition:transform_0.2s]">
                +
              </span>
            </summary>
            <p className="service-detail text-[16px] leading-[1.8] opacity-70 pt-0 pr-[25px] pb-[25px] pl-9">
              {detail}
            </p>
          </details>
        ))}
      </div>
    </FadeSection>
  );
}
