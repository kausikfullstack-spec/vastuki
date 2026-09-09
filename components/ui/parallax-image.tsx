"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function ParallaxImage({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    const update = () => {
      frame = 0;
      const element = ref.current;
      if (!element?.parentElement) return;
      const bounds = element.parentElement.getBoundingClientRect();
      const offset = preference.matches
        ? 0
        : Math.max(-80, Math.min(80, -bounds.top * 0.16));
      element.style.transform = `translateY(${offset}px) scale(1.12)`;
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    preference.addEventListener("change", update);
    update();
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      preference.removeEventListener("change", update);
      cancelAnimationFrame(frame);
    };
  }, []);
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
