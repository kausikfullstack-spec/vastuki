"use client";

import { useEffect } from "react";
import {
  motion,
  useAnimation,
  useMotionValue,
  type Transition,
} from "motion/react";

type CircularTextProps = {
  text: string;
  spinDuration?: number;
  onHover?: "slowDown" | "speedUp" | "pause" | "goBonkers";
  className?: string;
};

// Adapted from the supplied React Bits CircularText component.
const transition = (duration: number, from: number): Transition => ({
  rotate: {
    from,
    ease: "linear",
    duration: Math.max(0.1, duration),
    type: "tween",
    repeat: Infinity,
  },
  scale: { type: "spring", damping: 20, stiffness: 300 },
});

export default function CircularText({
  text,
  spinDuration = 20,
  onHover = "speedUp",
  className = "",
}: CircularTextProps) {
  const letters = Array.from(text);
  const controls = useAnimation();
  const rotation = useMotionValue(0);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      controls.stop();
      if (preference.matches) {
        controls.set({ rotate: 0, scale: 1 });
        return;
      }
      const start = rotation.get();
      void controls.start({
        rotate: start + 360,
        scale: 1,
        transition: transition(spinDuration, start),
      });
    };
    update();
    preference.addEventListener("change", update);
    return () => {
      controls.stop();
      preference.removeEventListener("change", update);
    };
  }, [spinDuration, text, controls, rotation]);

  const spin = (duration: number, scale = 1) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const start = rotation.get();
    void controls.start({
      rotate: start + 360,
      scale,
      transition: transition(duration, start),
    });
  };
  const hover = () => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    switch (onHover) {
      case "pause":
        controls.stop();
        break;
      case "slowDown":
        spin(spinDuration * 2);
        break;
      case "speedUp":
        spin(spinDuration / 4);
        break;
      case "goBonkers":
        spin(spinDuration / 20, 0.8);
        break;
    }
  };

  return (
    <motion.div
      role="img"
      aria-label={text.replace(/\s*·\s*$/, "")}
      className={`circular-text relative w-full h-full rounded-full text-[#001f1a] font-body font-medium text-center origin-center [&>span]:absolute [&>span]:top-0 [&>span]:right-0 [&>span]:bottom-0 [&>span]:left-0 [&>span]:block [&>span]:text-[18px] [&>span]:leading-[1] [&>span]:whitespace-pre [&>span]:origin-center max-md:[&>span]:text-[9px] ${className}`}
      style={{ rotate: rotation }}
      initial={{ rotate: 0 }}
      animate={controls}
      onMouseEnter={hover}
      onMouseLeave={() => spin(spinDuration)}
    >
      {letters.map((letter, index) => (
        <span
          aria-hidden="true"
          key={index}
          style={{ transform: `rotate(${(360 / letters.length) * index}deg)` }}
        >
          {letter}
        </span>
      ))}
    </motion.div>
  );
}
