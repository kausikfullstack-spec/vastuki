"use client";
import FadeSection from "@/components/ui/fade-section";

import { ButtonIcon } from "@/components/ui/button-icon";
import Image from "next/image";
import { useState } from "react";

export function ProjectGallery({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  const [index, setIndex] = useState(0);
  const change = (direction: number) =>
    setIndex(
      (current) => (current + direction + images.length) % images.length,
    );
  return (
    <FadeSection className="project-gallery" aria-label={`${title} gallery`}>
      <div className="gallery-image relative h-[min(68vw,_720px)] min-h-[280px]">
        <Image
          src={images[index]}
          alt={`${title}, view ${index + 1}`}
          fill
          sizes="(max-width: 768px) 100vw, 85vw"
          preload
          className="object-cover"
        />
      </div>
      <div className="gallery-controls flex items-center justify-between gap-2 py-6 text-[14px] font-medium">
        <button
          type="button"
          className="button max-sm:px-3"
          onClick={() => change(-1)}
          aria-label="Previous project photo"
        >
          <ButtonIcon direction="left" /> Previous
        </button>
        <p aria-live="polite">
          {index + 1} / {images.length}
        </p>
        <button
          type="button"
          className="button max-sm:px-3"
          onClick={() => change(1)}
          aria-label="Next project photo"
        >
          <ButtonIcon direction="right" /> Next
        </button>
      </div>
      <div className="flex gap-3">
        {images.map((src, photoIndex) => (
          <button
            type="button"
            key={src}
            onClick={() => setIndex(photoIndex)}
            aria-label={`Show project photo ${photoIndex + 1}`}
            aria-pressed={index === photoIndex}
            className="gallery-thumbnail relative w-24 h-18 overflow-hidden rounded-full transition-opacity hover:opacity-80 [border:3px_solid_transparent] [&[aria-pressed=true]]:border-green"
          >
            <Image
              src={src}
              alt=""
              fill
              sizes="96px"
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </FadeSection>
  );
}
