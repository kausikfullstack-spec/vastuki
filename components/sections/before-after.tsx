"use client";
import FadeSection from "@/components/ui/fade-section";

import { eyebrowStyles } from "@/lib/styles";

import Image from "next/image";
import { useState } from "react";
export function BeforeAfter() {
  const [comparison, setComparison] = useState(50);
  return (
    <FadeSection
      id="transformation"
      className="transformation-section py-25 px-[4.5%] bg-[linear-gradient(135deg,_#ffecba_0%,_#f0e8ce_45%,_#ced6bd_100%)] [&_h2]:mt-5.5 [&_h2]:text-[clamp(40px,_3.8vw,_52px)] max-md:py-[65px] max-md:px-[6%]"
    >
      <div className="text-center">
        <div className={`${eyebrowStyles} justify-center`}>
          <span /> THE BEAUTY OF TRANSFORMATION
        </div>
        <h2>
          Rooted in culture.
          <br className="sm:hidden" /> <em>Refined in craft.</em>
        </h2>
        <p className="opacity-65">Same space. A whole new feeling.</p>
      </div>
      <div className="comparison-layout grid grid-cols-[1fr_4fr_1fr] gap-[34px] items-center mt-14.5 max-[1101px]:grid-cols-[1fr_3fr_1fr] max-[1101px]:gap-[20px] max-md:grid-cols-2 max-md:gap-y-[28px] max-md:gap-x-[22px] max-md:mt-[35px] max-md:[&>div:nth-child(2)]:col-[1_/_-1] max-md:[&>div:nth-child(2)]:row-[1]">
        <div className="comparison-copy [&_h3]:text-[28px] [&_h3]:font-medium [&_h3]:leading-[1.3] [&_h3]:tracking-[-0.015em] [&_h3]:my-4.5 [&_h3]:mx-0 [&_p]:text-[16px] [&_p]:leading-[1.8] [&_p]:opacity-65 max-[1101px]:[&_h3]:text-[28px] max-[1101px]:[&_h3]:font-medium max-[1101px]:[&_h3]:leading-[1.3] max-[1101px]:[&_h3]:tracking-[-0.015em] max-[1101px]:[&_p]:text-[16px] max-[1101px]:[&_p]:leading-[1.8] max-md:[&_h3]:text-[24px] max-md:[&_h3]:font-medium max-md:[&_h3]:leading-[1.3] max-md:[&_h3]:tracking-[-0.015em] max-md:[&_p]:text-[15px] max-md:[&_p]:leading-[1.8]">
          {/* <span className="small-index text-[7px] tracking-[0.1em] opacity-60">
            01 — THE BEGINNING
          </span> */}
          <h3>
            A vision worth
            <br />
            bringing to life.
          </h3>
          <p>
            Every space holds possibility. We begin by understanding its
            character and imagining what it could become.
          </p>
        </div>
        <div>
          <div className="comparison [aspect-ratio:1.5] relative overflow-hidden bg-green focus-within:[outline:3px_solid_var(--green)] focus-within:outline-offset-[5px]">
            <Image
              src="/before_after/after1.jpeg"
              alt="Completed bedroom with blush upholstery and floral wallpaper"
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover"
            />
            <div
              className="comparison-before absolute top-0 right-0 bottom-0 left-0"
              style={{ clipPath: `inset(0 ${100 - comparison}% 0 0)` }}
            >
              <Image
                src="/before_after/before1.jpeg"
                alt="The same bedroom during construction with unfinished timber headboard"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
            </div>
            <span className="compare-label absolute top-4.5 py-[7px] px-2.5 bg-[#001e1999] text-cream text-[8px] tracking-[0.14em] max-md:text-[7px] left-4">
              BEFORE
            </span>
            <span className="compare-label absolute top-4.5 py-[7px] px-2.5 bg-[#001e1999] text-cream text-[8px] tracking-[0.14em] max-md:text-[7px] right-4">
              AFTER
            </span>
            <div
              className="comparison-divider absolute top-0 bottom-0 w-0.5 bg-white [transform:translateX(-50%)] pointer-events-none [&>span]:absolute [&>span]:top-[50%] [&>span]:left-[50%] [&>span]:[transform:translate(-50%,_-50%)] [&>span]:rounded-full [&>span]:[border:1px_solid_white] [&>span]:w-11.5 [&>span]:h-11.5 [&>span]:backdrop-filter-[blur(8px)] [&>span]:bg-[#ffffff26] [&>span]:text-white [&>span]:flex [&>span]:items-center [&>span]:justify-center [&>span]:gap-[8px] [&>span]:text-[27px] [&_span_span]:w-[1px] [&_span_span]:h-[13px] [&_span_span]:bg-white"
              style={{ left: `${comparison}%` }}
            >
              <span>
                ‹<span />›
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={comparison}
              onChange={(event) => setComparison(Number(event.target.value))}
              aria-label="Before and after image comparison"
              aria-valuetext={`${comparison}% before, ${100 - comparison}% after`}
              className="comparison-range absolute top-0 right-0 bottom-0 left-0 w-full h-full opacity-0 cursor-ew-resize m-0"
            />
          </div>
          {/* <p className="comparison-hint text-center text-[7px] tracking-[0.15em] mt-4.5 opacity-60 max-md:text-[6px]">
            ← &nbsp; DRAG TO REVEAL THE TRANSFORMATION &nbsp; →
          </p> */}
        </div>
        <div className="comparison-copy [&_h3]:text-[28px] [&_h3]:font-medium [&_h3]:leading-[1.3] [&_h3]:tracking-[-0.015em] [&_h3]:my-4.5 [&_h3]:mx-0 [&_p]:text-[16px] [&_p]:leading-[1.8] [&_p]:opacity-65 max-[1101px]:[&_h3]:text-[28px] max-[1101px]:[&_h3]:font-medium max-[1101px]:[&_h3]:leading-[1.3] max-[1101px]:[&_h3]:tracking-[-0.015em] max-[1101px]:[&_p]:text-[16px] max-[1101px]:[&_p]:leading-[1.8] max-md:[&_h3]:text-[24px] max-md:[&_h3]:font-medium max-md:[&_h3]:leading-[1.3] max-md:[&_h3]:tracking-[-0.015em] max-md:[&_p]:text-[15px] max-md:[&_p]:leading-[1.8] comparison-copy-right text-right max-md:text-left">
          {/* <span className="small-index text-[7px] tracking-[0.1em] opacity-60">
            02 — THE NEW CHAPTER
          </span> */}
          <h3>
            Designed for
            <br />
            every tomorrow.
          </h3>
          <p>
            Considered textures. Thoughtful details. A personal retreat where
            the original vision finds its fullest expression.
          </p>
        </div>
      </div>
    </FadeSection>
  );
}
