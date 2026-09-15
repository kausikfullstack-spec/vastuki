"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ButtonIcon } from "@/components/ui/button-icon";

const fieldStyles =
  "min-h-11 w-full rounded-lg border border-green/20 bg-white px-3 py-2.5 text-sm text-green placeholder:text-green/50";

export function ConsultationPopup() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement;
    const restore = () => {
      // Ignore a queued close event if Strict Mode has already reopened it.
      if (dialog.open) return;
      document.body.style.overflow = previousOverflow;
      if (previousFocus instanceof HTMLElement) previousFocus.focus();
    };

    // The root layout persists across routes; a fresh visit opens it again.
    dialog.showModal();
    document.body.style.overflow = "hidden";
    dialog.addEventListener("close", restore);
    return () => {
      dialog.removeEventListener("close", restore);
      dialog.close();
      restore();
    };
  }, []);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="consultation-title"
      aria-describedby="consultation-description"
      className="fixed inset-0 m-auto max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-[860px] overflow-y-auto rounded-2xl border-0 bg-background p-0 text-green shadow-2xl backdrop:bg-black/60 backdrop:backdrop-blur-sm"
      onClick={(event) => {
        if (event.target !== event.currentTarget) return;
        const bounds = event.currentTarget.getBoundingClientRect();
        if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) {
          event.currentTarget.close();
        }
      }}
    >
      <div className="relative grid md:grid-cols-[0.85fr_1.15fr]">
        <button
          type="button"
          aria-label="Close consultation form"
          autoFocus
          onClick={() => dialogRef.current?.close()}
          className="absolute right-2 top-2 z-10 grid size-11 place-items-center rounded-full bg-background text-green hover:bg-cream"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <path d="m6 6 12 12M18 6 6 18" />
          </svg>
        </button>
        <div className="relative hidden min-h-[560px] overflow-hidden bg-green md:block">
          <Image
            src="/image/_DSC9698-Edit.jpg"
            alt="A thoughtfully designed Vastuki living room"
            fill
            sizes="(min-width: 768px) 395px, 0px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-green via-green/10 to-green/40" />
          <div className="relative p-7 text-cream">
            <p className="font-heading text-3xl tracking-[0.12em]">VASTUKI</p>
            <p className="mt-1 text-[10px] tracking-[0.2em]">DESIGNING YOUR STORY</p>
          </div>
          <div className="absolute inset-x-0 bottom-0 p-7 text-cream">
            <p className="font-heading text-4xl leading-tight">Your space.<br />Your story.</p>
            <p className="mt-4 text-sm leading-relaxed">Thoughtful interiors, shaped around the way you live.</p>
          </div>
        </div>
        <div className="p-6 pt-14 sm:p-8 sm:pt-14">
          <h2 id="consultation-title" className="text-[27px] leading-tight max-md:text-[25px]">Get a free design consultation</h2>
          <p id="consultation-description" className="mb-6 mt-2 text-sm text-green/65">Tell us a little about your home.</p>
          <form
            className="grid gap-4"
            onSubmit={(event) => {
              event.preventDefault();
              const data = new FormData(event.currentTarget);
              const message = [
                "Hi Vastuki, I'd like a free design consultation.",
                `Property type: ${data.get("propertyType")}`,
                `Location: ${String(data.get("location")).trim()}`,
                `Name: ${String(data.get("name")).trim()}`,
                `Mobile: +91 ${data.get("phone")}`,
                `WhatsApp updates: ${data.get("updates") ? "Yes, I opt in" : "No"}`,
              ].join("\n");
              window.open(`https://wa.me/918777762469?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
              setSubmitted(true);
            }}
          >
            <fieldset>
              <legend className="mb-2 text-sm text-green/70">Property type</legend>
              <div className="flex flex-wrap gap-2">
                {["1 BHK", "2 BHK", "3 BHK", "4+ BHK / Duplex"].map((type) => (
                  <label key={type} className="cursor-pointer">
                    <input type="radio" name="propertyType" value={type} required className="peer sr-only" />
                    <span className="inline-flex min-h-11 items-center rounded-lg border border-green/20 bg-white px-3 text-xs peer-checked:border-green peer-checked:bg-green peer-checked:text-cream peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-green">{type}</span>
                  </label>
                ))}
              </div>
            </fieldset>
            <label className="grid gap-1.5 text-sm">
              Property location
              <input name="location" autoComplete="address-level2" placeholder="City / locality" required maxLength={120} pattern=".*\S.*" className={fieldStyles} />
            </label>
            <label className="grid gap-1.5 text-sm">
              Your name
              <input name="name" autoComplete="name" placeholder="Full name" required maxLength={100} pattern=".*\S.*" className={fieldStyles} />
            </label>
            <label className="grid gap-1.5 text-sm">
              Mobile number
              <span className="flex items-center rounded-lg border border-green/20 bg-white focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-green">
                <span className="pl-3 text-sm text-green/60">+91</span>
                <input name="phone" type="tel" inputMode="numeric" autoComplete="tel-national" placeholder="10-digit mobile number" pattern="[6-9][0-9]{9}" title="Enter a 10-digit Indian mobile number starting with 6, 7, 8, or 9" required maxLength={10} className="min-h-11 min-w-0 flex-1 rounded-lg bg-transparent px-3 text-sm outline-none" />
              </span>
            </label>
            <label className="flex items-start gap-2 text-xs leading-relaxed">
              <input type="checkbox" name="updates" className="mt-0.5 size-4 shrink-0 accent-green" />
              Yes, send me updates via WhatsApp.
            </label>
            <button type="submit" className="button button-green w-full"><ButtonIcon /> Request a free consultation</button>
            <p className="text-center text-xs leading-relaxed text-green/65">Opens WhatsApp with your details. Send the message there to request your consultation.</p>
            {submitted && <p role="status" className="rounded-lg bg-cream p-3 text-sm">Complete your request in WhatsApp by sending the prefilled message.</p>}
          </form>
        </div>
      </div>
    </dialog>
  );
}
