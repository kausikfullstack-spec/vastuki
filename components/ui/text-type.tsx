"use client";

import Typed from "typed.js";
import { useEffect, useRef, type CSSProperties } from "react";

type TextTypeProps = {
  text?: string | string[];
  /** Alternative to text. When both are supplied, text takes precedence. */
  texts?: string[];
  typingSpeed?: number;
  pauseDuration?: number;
  deletingSpeed?: number;
  showCursor?: boolean;
  cursorCharacter?: string;
  cursorBlinkDuration?: number;
  loop?: boolean;
  emphasis?: string;
  className?: string;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export default function TextType({
  text,
  texts,
  typingSpeed = 75,
  pauseDuration = 1500,
  deletingSpeed = 50,
  showCursor = true,
  cursorCharacter = "_",
  cursorBlinkDuration = 0.5,
  loop = true,
  emphasis,
  className = "",
}: TextTypeProps) {
  const supplied = text ?? texts ?? [];
  const phrases = (Array.isArray(supplied) ? supplied : [supplied]).filter(
    Boolean,
  );
  const phraseKey = JSON.stringify(phrases);
  const target = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = target.current;
    const sequence: string[] = JSON.parse(phraseKey);
    if (!element || !sequence.length) return;
    const strings = sequence.map((value) => {
      const start = emphasis ? value.indexOf(emphasis) : -1;
      const html =
        start < 0 || !emphasis
          ? escapeHtml(value)
          : `${escapeHtml(value.slice(0, start))}<em>${escapeHtml(emphasis)}</em>${escapeHtml(value.slice(start + emphasis.length))}`;
      return html.replace(/\n/g, "<br />");
    });
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let typed: Typed | undefined;
    const start = () => {
      typed?.destroy();
      typed = undefined;
      if (preference.matches) return;
      typed = new Typed(element, {
        strings,
        typeSpeed: typingSpeed,
        backSpeed: deletingSpeed,
        backDelay: pauseDuration,
        loop,
        smartBackspace: false,
        showCursor,
        cursorChar: escapeHtml(cursorCharacter),
        contentType: "html",
        autoInsertCss: false,
      });
    };
    start();
    preference.addEventListener("change", start);
    return () => {
      preference.removeEventListener("change", start);
      typed?.destroy();
    };
  }, [
    phraseKey,
    emphasis,
    typingSpeed,
    pauseDuration,
    deletingSpeed,
    loop,
    showCursor,
    cursorCharacter,
  ]);

  if (!phrases.length) return null;
  const styled = (value: string) => {
    const start = emphasis ? value.indexOf(emphasis) : -1;
    if (start < 0 || !emphasis) return value;
    return (
      <>
        {value.slice(0, start)}
        <em>{emphasis}</em>
        {value.slice(start + emphasis.length)}
      </>
    );
  };
  return (
    <span
      className={`text-type inline-grid max-w-full whitespace-pre-line [&_.typed-cursor]:inline-block [&_.typed-cursor]:w-[0.55em] [&_.typed-cursor]:ml-[0.04em] [&_.typed-cursor]:text-current [&_.typed-cursor]:not-italic [&_.typed-cursor]:font-medium [&_.typed-cursor]:text-center [&_.typed-cursor]:animate-[text-cursor-blink_calc(var(--cursor-duration,_0.5s)_*_2)_steps(1,_end)_infinite] ${className}`}
      style={
        {
          "--cursor-duration": `${Math.max(0.1, cursorBlinkDuration)}s`,
        } as CSSProperties
      }
    >
      <span className="sr-only">{phrases.join(" ")}</span>
      {/* Keep the complete layout reserved while Typed.js edits its own span. */}
      {phrases.map((value, index) => (
        <span
          key={index}
          className="text-type-size [grid-area:1_/_1] min-w-0 invisible pointer-events-none"
          aria-hidden="true"
        >
          {styled(value)}
          {showCursor && (
            <span className="text-type-cursor-space inline-block w-[0.55em] ml-[0.04em] text-current not-italic font-medium text-center">
              {cursorCharacter}
            </span>
          )}
        </span>
      ))}
      <span
        className="text-type-animated [grid-area:1_/_1] min-w-0 motion-reduce:hidden"
        aria-hidden="true"
      >
        <span ref={target} />
      </span>
      <span
        className="text-type-static [grid-area:1_/_1] min-w-0 hidden motion-reduce:block"
        aria-hidden="true"
      >
        {styled(phrases[0])}
      </span>
    </span>
  );
}
