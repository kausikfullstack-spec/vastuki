"use client";

import { useEffect, useRef, useState } from "react";
import "pannellum/build/pannellum.css";

export default function PanoramaViewer({ src, title }: { src: string; title: string }) {
  const container = useRef<HTMLDivElement>(null);
  const activeViewer = useRef<ReturnType<Window["pannellum"]["viewer"]> | null>(null);
  const lastPointer = useRef<{ x: number; y: number } | null>(null);
  const [mouseLook, setMouseLook] = useState(true);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    let cancelled = false;
    let viewer: ReturnType<Window["pannellum"]["viewer"]> | undefined;

    async function initialize() {
      try {
        await import("pannellum");
        if (cancelled || !container.current) return;
        viewer = window.pannellum.viewer(container.current, {
          type: "equirectangular",
          panorama: src,
          autoLoad: true,
          autoRotate: 0,
          mouseZoom: false,
          hfov: 100,
          showFullscreenCtrl: true,
          showZoomCtrl: true,
          escapeHTML: true,
        });
        activeViewer.current = viewer;
        viewer.on("load", () => { if (!cancelled) setStatus("ready"); });
        viewer.on("error", () => { if (!cancelled) setStatus("error"); });
      } catch {
        if (!cancelled) setStatus("error");
      }
    }

    void initialize();
    return () => {
      cancelled = true;
      activeViewer.current = null;
      viewer?.destroy();
    };
  }, [src]);

  return (
    <div className="relative h-full w-full">
      <div ref={container} tabIndex={0} aria-label={`Interactive 360° view of ${title}`}
        onPointerLeave={() => { lastPointer.current = null; }}
        onPointerMove={(event) => {
          const previous = lastPointer.current;
          lastPointer.current = { x: event.clientX, y: event.clientY };
          const viewer = activeViewer.current;
          if (!mouseLook || status !== "ready" || event.pointerType !== "mouse" || event.buttons || !previous || !viewer) return;
          if ((event.target as HTMLElement).closest(".pnlm-controls")) return;
          viewer.setYaw(viewer.getYaw() + (event.clientX - previous.x) * 0.15, false);
          viewer.setPitch(Math.max(-80, Math.min(80, viewer.getPitch() - (event.clientY - previous.y) * 0.12)), false);
        }}
        className="h-full w-full text-green focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-white" />
      {status === "ready" && <button type="button" aria-pressed={mouseLook}
        onClick={() => { setMouseLook(!mouseLook); lastPointer.current = null; }}
        className="absolute right-4 top-4 z-10 rounded-full bg-green px-4 py-3 text-sm text-cream shadow-lg">
        Mouse look: {mouseLook ? "on" : "off"}
      </button>}
      {status !== "ready" && (
        <div role="status" className="pointer-events-none absolute inset-0 flex items-center justify-center bg-green px-8 text-center text-cream">
          {status === "error" ? "This tour could not be loaded. Close the tour and try again, or explore the project gallery above." : "Loading your 360° view…"}
        </div>
      )}
    </div>
  );
}
