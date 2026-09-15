import { FaChair } from "react-icons/fa";
import { PiArmchairBold } from "react-icons/pi";
import { LiaChairSolid } from "react-icons/lia";
import { MdTableBar } from "react-icons/md";
import { BiSolidBed } from "react-icons/bi";
import { GiTheaterCurtains } from "react-icons/gi";

const values = [
  { icon: PiArmchairBold, title: "Inspired by you", description: "Your routines, memories and ideas shape every space." },
  { icon: FaChair, title: "Grounded in craft", description: "Careful detailing brings character to everyday living." },
  { icon: BiSolidBed, title: "Made for living", description: "Comfort and function belong in every beautiful home." },
  { icon: LiaChairSolid, title: "Timeless by design", description: "Considered proportions and enduring materials." },
  { icon: MdTableBar, title: "Space to breathe", description: "Thoughtful layouts make room for what matters." },
  { icon: GiTheaterCurtains, title: "A personal touch", description: "Colours, textures and details that feel like you." },
  { icon: BiSolidBed, title: "Rooted in warmth", description: "Welcoming spaces for quiet days and shared moments." },
  { icon: LiaChairSolid, title: "Details with purpose", description: "Every corner has a role, every choice a reason." },
  { icon: GiTheaterCurtains, title: "Naturally connected", description: "Light, greenery and natural textures bring life indoors." },
  { icon: PiArmchairBold, title: "Room to grow", description: "Adaptable spaces that evolve with your story." },
  { icon: FaChair, title: "Beauty in balance", description: "A thoughtful mix of materials, colour and form." },
  { icon: MdTableBar, title: "Together by design", description: "Your vision and our craft, in conversation." },
];

const rows = [values.slice(0, 6), values.slice(6)];

export function ValuesStrip() {
  return (
    <section aria-label="Our design values" className="values-strip relative overflow-hidden bg-cream py-8 text-green max-md:py-6">
      <div className="relative flex flex-col gap-4">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="group overflow-hidden">
            <div className={`flex w-max animate-[values-marquee_40s_linear_infinite] group-hover:[animation-play-state:paused] motion-reduce:w-full motion-reduce:animate-none ${rowIndex === 1 ? "[animation-direction:reverse]" : ""}`}>
              {[0, 1].map((copy) => (
                <div
                  key={copy}
                  aria-hidden={copy === 1 ? true : undefined}
                  className={`flex shrink-0 gap-4 pr-4 motion-reduce:w-full motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:px-4 ${copy === 1 ? "motion-reduce:hidden" : ""}`}
                >
                  {row.map((value) => (
                    <article key={value.title} className="w-72 shrink-0 rounded-xl border border-green/15 bg-background/65 p-5 transition-colors hover:bg-background max-md:w-64 motion-reduce:w-full motion-reduce:max-w-80">
                      <div className="flex items-center gap-3">
                        <span aria-hidden="true" className="grid size-11 shrink-0 place-items-center rounded-full bg-green/5 text-[27px] font-light max-md:text-[22px]">
                          <value.icon />
                        </span>
                        <h3 className="font-body text-[15px] font-semibold tracking-normal">{value.title}</h3>
                      </div>
                      <p className="mt-3 text-[13px] leading-relaxed text-green/70">{value.description}</p>
                    </article>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-cream to-transparent md:w-28 motion-reduce:hidden" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-cream to-transparent md:w-28 motion-reduce:hidden" />
      </div>
    </section>
  );
}
