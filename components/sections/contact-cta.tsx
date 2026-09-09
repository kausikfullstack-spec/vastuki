import Link from "next/link";
import { Arrow } from "@/components/ui/arrow";

export function ContactCta() {
  return (
    <section id="contact" className="contact-section section-shell">
      <div className="eyebrow justify-center">
        <span /> YOUR NEXT CHAPTER STARTS HERE
      </div>
      <h2>
        Let’s make room
        <br />
        for <em>your story.</em>
      </h2>
      <p>
        A new home. A fresh start. A space you’ve been dreaming of.
        <br />
        Every beautiful transformation begins with an idea.
      </p>
      <Link className="button button-green" href="/contact">
        Start your project <Arrow diagonal />
      </Link>
    </section>
  );
}
