"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { eyebrowStyles, sectionSpacing } from "@/lib/styles";
import { demoPanoramas } from "@/lib/demo-panoramas";

const PanoramaViewer = dynamic(() => import("./panorama-viewer"), {
  ssr: false,
  loading: () => <p role="status" className="p-8">Opening your 360° view…</p>,
});

export function ProjectTour({ title, panorama }: {
  title: string;
  panorama: string | null;
}) {
  const [roomIndex, setRoomIndex] = useState(0);
  const demo = demoPanoramas[roomIndex];
  const source = panorama ?? demo.src;

  return (
    <section className={`${sectionSpacing} bg-green text-cream`} aria-labelledby="project-tour-heading">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className={eyebrowStyles}><span /> A NEW PERSPECTIVE</p>
          <h2 id="project-tour-heading" className="mt-5 text-[clamp(36px,4vw,56px)]">
            Step inside. <em>Look around.</em>
          </h2>
          <p className="mt-4 opacity-75">{title} · 360° tour</p>
        </div>
      </div>
      {/* {!panorama && (
        <p className="mb-6 text-sm opacity-80">Sample 360° rooms · Demo photography, not this project.</p>
      )} */}
      <div className="relative h-[min(65vw,650px)] min-h-[360px] overflow-hidden border border-cream/20">
        <PanoramaViewer key={source} src={source} title={panorama ? title : `${demo.label} demo`} />
        {!panorama && (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex justify-center bg-gradient-to-t from-black/60 to-transparent px-4 pb-5 pt-12 max-sm:px-3 max-sm:pb-3">
            <div className="pointer-events-auto grid grid-cols-4 gap-3 max-sm:grid-cols-2 max-sm:gap-2" role="group" aria-label="Choose a sample room">
              {demoPanoramas.map((room, index) => (
                <button key={room.src} type="button" aria-pressed={index === roomIndex}
                  onClick={() => setRoomIndex(index)}
                  className="min-h-11 rounded-full border border-white/50 bg-transparent px-5 py-3 text-sm text-white [text-shadow:0_1px_4px_rgb(0_0_0_/_70%)] transition-colors hover:border-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white aria-pressed:border-white aria-pressed:font-semibold aria-pressed:underline aria-pressed:underline-offset-4 max-sm:px-4 max-sm:py-2">
                  {room.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      {/* <p className="mt-5 text-sm opacity-75">Move your mouse across the room to look around, or drag / swipe. Use arrow keys to pan, + / − to zoom, or enter fullscreen.</p> */}
      {/* {!panorama && <p className="mt-4 text-xs opacity-70">Sample photography: <a href={demo.source} target="_blank" rel="noreferrer" className="underline">Poly Haven · {demo.label}</a> (CC0).</p>} */}
    </section>
  );
}
