"use client";
import Image from "next/image";
import { useState } from "react";
export function BeforeAfter() {
  const [comparison, setComparison] = useState(50);
  return (
    <section id="transformation" className="transformation-section">
      <div className="text-center">
        <div className="eyebrow justify-center">
          <span /> THE BEAUTY OF TRANSFORMATION
        </div>
        <h2>
          Rooted in culture.
          <br className="sm:hidden" /> <em>Refined in craft.</em>
        </h2>
        <p className="mt-5 opacity-65">Same space. A whole new feeling.</p>
      </div>
      <div className="comparison-layout">
        <div className="comparison-copy">
          <span className="small-index">01 — THE BEGINNING</span>
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
          <div className="comparison">
            <Image
              src="/before_after/after1.jpeg"
              alt="Completed bedroom with blush upholstery and floral wallpaper"
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover"
            />
            <div
              className="comparison-before"
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
            <span className="compare-label left-4">BEFORE</span>
            <span className="compare-label right-4">AFTER</span>
            <div
              className="comparison-divider"
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
              className="comparison-range"
            />
          </div>
          <p className="comparison-hint">
            ← &nbsp; DRAG TO REVEAL THE TRANSFORMATION &nbsp; →
          </p>
        </div>
        <div className="comparison-copy comparison-copy-right">
          <span className="small-index">02 — THE NEW CHAPTER</span>
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
    </section>
  );
}
