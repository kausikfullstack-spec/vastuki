import Link from "next/link";
export function SiteFooter() {
  return (
    <footer className="footer pt-15 pb-[25px] px-[7.5%] bg-green text-cream [&_nav]:grid [&_nav]:grid-cols-2 [&_nav]:gap-y-[20px] [&_nav]:gap-x-[35px] [&_nav]:text-[14px] [&_nav_a:hover]:underline max-md:pt-[45px] max-md:pb-[25px] max-md:px-[7%] max-md:[&_nav]:w-[65%] max-md:[&_nav]:text-[14px]">
      <div className="footer-top flex justify-between items-start gap-[30px] pb-[55px] [&_p]:font-heading [&_p]:text-[20px] [&_p]:leading-[1.5] [&_p]:text-[#ffecbaaa] max-md:flex-wrap max-md:pb-[35px] max-md:[&_p]:text-[17px]">
        <Link
          href="/"
          className="footer-brand font-heading text-[40px] tracking-[0.08em] [&_span]:block [&_span]:tracking-[0.2em] [&_span]:mt-3 [&_span]:font-body [&_span]:text-[8px] [&_span]:leading-[1.5] max-md:text-[33px]"
        >
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
        <Link
          className="back-top w-[45px] h-[45px] [border:1px_solid_#ffecba60] rounded-full grid place-items-center"
          href="#top"
          aria-label="Back to top"
        >
          ↑
        </Link>
      </div>
      <div className="footer-bottom [border-top:1px_solid_#ffecba25] pt-[25px] flex justify-between gap-[15px] text-[12px] text-[#ffecba80] max-md:flex-col max-md:text-[11px]">
        <span>
          © {new Date().getFullYear()} Vastuki Designs. All rights reserved.
        </span>
        <span>Thoughtfully designed. Beautifully lived.</span>
      </div>
    </footer>
  );
}
