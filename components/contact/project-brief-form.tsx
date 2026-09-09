"use client";
import { eyebrowStyles, buttonStyles } from "@/lib/styles";

import { useState } from "react";
import { Arrow } from "@/components/ui/arrow";
const fieldStyles =
  "w-full rounded-none border border-[#001e1935] bg-transparent p-3 text-base";

export function ProjectBriefForm() {
  const [downloaded, setDownloaded] = useState(false);
  return (
    <div className="project-brief w-full">
      <div className={`${eyebrowStyles}`}>A SPACE THAT STARTS WITH YOU</div>
      <h2 className="my-5 text-[clamp(40px,3.8vw,52px)] max-md:text-[clamp(34px,7.5vw,40px)]">
        Tell us your <em>vision.</em>
      </h2>
      <p className="text-base leading-[1.8] opacity-65">
        Prepare a project brief to save and share with the studio. Your details
        stay in your browser; this form does not send an enquiry.
      </p>
      <form
        className="mt-[25px] grid gap-[17px]"
        onSubmit={(event) => {
          event.preventDefault();
          const data = new FormData(event.currentTarget);
          const brief = `VASTUKI — PROJECT BRIEF\n\nName: ${data.get("name")}\nEmail: ${data.get("email")}\nProject: ${data.get("type")}\nVision: ${data.get("vision")}\n`;
          const url = URL.createObjectURL(
            new Blob([brief], { type: "text/plain;charset=utf-8" }),
          );
          const link = document.createElement("a");
          link.href = url;
          link.download = "vastuki-project-brief.txt";
          link.click();
          setTimeout(() => URL.revokeObjectURL(url), 1000);
          setDownloaded(true);
        }}
      >
        <label className="grid gap-2 text-sm">
          Your name
          <input
            className={fieldStyles}
            name="name"
            autoComplete="name"
            required
            placeholder="Full name"
          />
        </label>
        <label className="grid gap-2 text-sm">
          Email address
          <input
            className={fieldStyles}
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="you@example.com"
          />
        </label>
        <label className="grid gap-2 text-sm">
          What are you planning?
          <select className={fieldStyles} name="type">
            <option>Complete home interiors</option>
            <option>Room makeover</option>
            <option>Architecture & planning</option>
            <option>Renovation & restoration</option>
          </select>
        </label>
        <label className="grid gap-2 text-sm">
          A little about your space
          <textarea
            className={fieldStyles}
            name="vision"
            required
            rows={3}
            placeholder="Your location, space, ideas and timeline…"
          />
        </label>
        <button
          type="submit"
          className={`${buttonStyles} button-green bg-green text-cream`}
        >
          Download project brief <Arrow diagonal />
        </button>
        {downloaded && (
          <p
            role="status"
            className="download-status text-[16px] leading-[1.8]"
          >
            Your brief is ready. Save it and share it with the studio when you
            connect.
          </p>
        )}
      </form>
    </div>
  );
}
