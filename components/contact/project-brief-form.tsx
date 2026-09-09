"use client";
import { useState } from "react";
import { Arrow } from "@/components/ui/arrow";
export function ProjectBriefForm() {
  const [downloaded, setDownloaded] = useState(false);
  return (
    <div className="consultation-dialog project-brief">
      <div className="eyebrow">A SPACE THAT STARTS WITH YOU</div>
      <h2>
        Tell us your <em>vision.</em>
      </h2>
      <p>
        Prepare a project brief to save and share with the studio. Your details
        stay in your browser; this form does not send an enquiry.
      </p>
      <form
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
        <label>
          Your name
          <input
            name="name"
            autoComplete="name"
            required
            placeholder="Full name"
          />
        </label>
        <label>
          Email address
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="you@example.com"
          />
        </label>
        <label>
          What are you planning?
          <select name="type">
            <option>Complete home interiors</option>
            <option>Room makeover</option>
            <option>Architecture & planning</option>
            <option>Renovation & restoration</option>
          </select>
        </label>
        <label>
          A little about your space
          <textarea
            name="vision"
            required
            rows={3}
            placeholder="Your location, space, ideas and timeline…"
          />
        </label>
        <button type="submit" className="button button-green">
          Download project brief <Arrow diagonal />
        </button>
        {downloaded && (
          <p role="status" className="download-status">
            Your brief is ready. Save it and share it with the studio when you
            connect.
          </p>
        )}
      </form>
    </div>
  );
}
