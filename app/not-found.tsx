import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section-shell page-intro">
      <div className="eyebrow">404 — PAGE NOT FOUND</div>
      <h1>
        A different
        <br />
        <em>direction.</em>
      </h1>
      <p>
        We couldn’t find this page. Explore our work or return home to find your
        way.
      </p>
      <Link href="/" className="button button-green mt-8">
        Back to home
      </Link>
    </section>
  );
}
