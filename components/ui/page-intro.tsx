import Link from "next/link";
import type { ReactNode } from "react";

export function PageIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: ReactNode;
  description: string;
}) {
  return (
    <section className="page-intro section-shell">
      <nav aria-label="Breadcrumb" className="mb-9 text-xs opacity-65">
        <Link href="/">Home</Link>
        <span aria-hidden="true"> / </span>
        <span>{eyebrow}</span>
      </nav>
      <div className="eyebrow">
        <span />
        {eyebrow}
      </div>
      <h1>{title}</h1>
      <p>{description}</p>
    </section>
  );
}
