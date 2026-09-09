"use client";

import { useEffect, useRef, type ComponentPropsWithoutRef } from "react";

/** Fade the whole section at the viewport edges, keeping its content readable. */
export default function FadeSection({
  children,
  className = "",
  ...props
}: ComponentPropsWithoutRef<"section">) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let active = true;
    const update = () => {
      frame = 0;
      if (!active) return;
      if (preference.matches || element.contains(document.activeElement)) {
        element.style.setProperty("--section-opacity", "1");
        return;
      }
      const { top, bottom } = element.getBoundingClientRect();
      const viewport = window.innerHeight;
      const fadeDistance = Math.min(180, viewport * 0.22);
      const entering = (viewport - top) / fadeDistance;
      const leaving = bottom / fadeDistance;
      const opacity = Math.max(0, Math.min(1, entering, leaving));
      element.style.setProperty("--section-opacity", String(opacity));
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const observer = new ResizeObserver(schedule);
    observer.observe(element);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    element.addEventListener("focusin", schedule);
    element.addEventListener("focusout", schedule);
    preference.addEventListener("change", schedule);
    void document.fonts.ready.then(() => {
      if (active) schedule();
    });
    update();
    return () => {
      active = false;
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      element.removeEventListener("focusin", schedule);
      element.removeEventListener("focusout", schedule);
      preference.removeEventListener("change", schedule);
      element.style.removeProperty("--section-opacity");
    };
  }, []);

  return (
    <section
      {...props}
      ref={ref}
      data-fade-section
      className={`opacity-[var(--section-opacity,1)] transition-opacity duration-300 ease-out motion-reduce:opacity-100! motion-reduce:transition-none ${className}`}
    >
      {children}
    </section>
  );
}
