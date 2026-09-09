"use client";

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
    <section className="project-gallery" aria-label={`${title} gallery`}>
      <div className="gallery-image">
        <Image
          src={images[index]}
          alt={`${title}, view ${index + 1}`}
          fill
          sizes="(max-width: 768px) 100vw, 85vw"
          preload
          className="object-cover"
        />
      </div>
      <div className="gallery-controls">
        <button
          type="button"
          onClick={() => change(-1)}
          aria-label="Previous project photo"
        >
          ← Previous
        </button>
        <p aria-live="polite">
          {index + 1} / {images.length}
        </p>
        <button
          type="button"
          onClick={() => change(1)}
          aria-label="Next project photo"
        >
          Next →
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
            className="gallery-thumbnail"
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
    </section>
  );
}
