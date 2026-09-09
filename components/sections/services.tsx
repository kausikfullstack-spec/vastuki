import { services } from "@/lib/content";
import Link from "next/link";
import { Arrow } from "@/components/ui/arrow";

export function Services() {
  return (
    <section id="services" className="services-section section-shell">
      <div>
        <div className="eyebrow light">
          <span /> OUR EXPERTISE
        </div>
        <h2>
          One studio.
          <br />
          Endless <em>possibilities.</em>
        </h2>
        <p className="mt-7 max-w-sm leading-7 opacity-65">
          From a single room to a complete home, we connect the dots between
          your vision and the space you live in.
        </p>
        <Link className="text-link mt-10" href="/contact">
          Find your starting point <Arrow diagonal />
        </Link>
      </div>
      <div className="service-list">
        {services.map(([number, title, summary, detail]) => (
          <details key={number} className="service-item">
            <summary>
              <span className="service-number">{number}</span>
              <span>
                <h3>{title}</h3>
                <p>{summary}</p>
              </span>
              <span className="service-plus">+</span>
            </summary>
            <p className="service-detail">{detail}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
