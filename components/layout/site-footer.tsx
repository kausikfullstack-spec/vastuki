import Link from "next/link";
export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <Link href="/" className="footer-brand">
          VASTUKI<span>ARCHITECTURE · INTERIORS · DESIGN</span>
        </Link>
        <p>
          Rooted in culture.
          <br />
          Refined in craft.
        </p>
        <nav aria-label="Footer navigation">
          <Link href="/about">Our studio</Link>
          <Link href="/projects">Our work</Link>
          <Link href="/services">Our expertise</Link>
          <Link href="/contact">Let’s connect</Link>
        </nav>
        <Link className="back-top" href="#top" aria-label="Back to top">
          ↑
        </Link>
      </div>
      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} Vastuki Designs. All rights reserved.
        </span>
        <span>Thoughtfully designed. Beautifully lived.</span>
      </div>
    </footer>
  );
}
