import FadeSection from "@/components/ui/fade-section";
import { sectionSpacing, eyebrowStyles } from "@/lib/styles";
export function Process() {
  return (
    <FadeSection id="process" className={`${sectionSpacing} process-section`}>
      <div className="section-top flex items-end justify-between gap-[40px] mb-12.5 [&_h2]:mt-5 [&>p]:text-[16px] [&>p]:leading-[1.8] [&>p]:opacity-60 [&>p]:pb-2 max-md:block max-md:mb-7.5 max-md:[&>p]:mt-[25px] max-md:[&>p]:text-[15px] max-md:[&>p]:leading-[1.8]">
        <div>
          <div className={`${eyebrowStyles}`}>
            <span /> FROM AN IDEA TO YOUR EVERYDAY
          </div>
          <h2>
            A thoughtful journey.
            <br />
            <em>A beautiful destination.</em>
          </h2>
        </div>
        <p>
          Good design begins with a conversation.
          <br />
          Here’s how we bring yours to life.
        </p>
      </div>
      <div className="process-grid grid grid-cols-4 gap-[32px] mt-[65px] [&>div]:[border-top:1px_solid_#001e1930] [&>div]:pt-[25px] [&_h3]:font-medium [&_h3]:text-[28px] [&_h3]:mt-[23px] [&_h3]:mb-[15px] [&_h3]:mx-0 [&_h3]:tracking-[-0.015em] [&_h3]:leading-[1.3] [&_p]:text-[16px] [&_p]:leading-[1.8] [&_p]:opacity-65 max-md:grid-cols-2 max-md:gap-y-[30px] max-md:gap-x-[24px] max-md:mt-10 max-md:[&_h3]:text-[24px] max-md:[&_h3]:font-medium max-md:[&_h3]:leading-[1.3] max-md:[&_h3]:tracking-[-0.015em]">
        {[
          [
            "01",
            "We listen",
            "Your routines, your inspirations, your wish list. We start by getting to know you.",
          ],
          [
            "02",
            "We imagine",
            "Layouts, materials and a clear design direction turn your ideas into a shared vision.",
          ],
          [
            "03",
            "We create",
            "Our design comes to life through careful coordination and considered craftsmanship.",
          ],
          [
            "04",
            "You make it home",
            "The final details fall into place. Your space is ready for the stories still to come.",
          ],
        ].map(([number, title, copy]) => (
          <div key={number}>
            <span className="process-number font-heading text-[42px] text-[#989b7c]">
              {number}
            </span>
            <h3>{title}</h3>
            <p>{copy}</p>
          </div>
        ))}
      </div>
    </FadeSection>
  );
}
