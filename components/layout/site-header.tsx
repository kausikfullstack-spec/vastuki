"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Arrow } from "@/components/ui/arrow";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Our studio", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Our expertise", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  // Remount the menu when the route changes, including browser back/forward.
  return <HeaderNavigation key={pathname} pathname={pathname} />;
}

function HeaderNavigation({ pathname }: { pathname: string }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const active = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);
  return (
    <header
      id="top"
      className="site-header h-23.5 py-0 px-[4.5%] flex items-center justify-between gap-[20px] bg-green text-cream relative z-30 max-md:h-19.5 max-md:py-0 max-md:px-[5%]"
      onKeyDown={(event) => {
        if (event.key === "Escape") setMenuOpen(false);
      }}
    >
      <Link
        href="/"
        className="brand flex items-center gap-[12px]"
        aria-label="Vastuki Designs home"
        onClick={() => setMenuOpen(false)}
      >
        <Image
          src="/image/vastuki_favicon.jpg"
          alt=""
          width={49}
          height={49}
          className="brand-mark rounded-full max-md:w-10 max-md:h-10"
        />
        <span>
          <span className="brand-name font-heading text-[29px] tracking-[0.1em] block leading-[1.15] max-md:text-[24px]">
            VASTUKI
          </span>
          <span className="brand-caption block text-[8px] tracking-[0.22em] mt-[5px] font-body leading-[1.5] max-md:text-[7px] max-md:font-body max-md:leading-[1.5]">
            DESIGNING YOUR STORY
          </span>
        </span>
      </Link>
      <nav
        aria-label="Main navigation"
        className="hidden items-center gap-6 xl:flex"
      >
        {navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="nav-link [&[aria-current=page]]:text-cream [&[aria-current=page]::after]:w-full text-[14px] text-[#ffecbabb] py-3 px-0 relative hover:text-cream [&:after]:content-[''] [&:after]:absolute [&:after]:h-[1px] [&:after]:bg-cream [&:after]:left-0 [&:after]:bottom-[3px] [&:after]:w-0 [&:after]:[transition:width_0.3s] [&:hover:after]:w-full"
            aria-current={active(item.href) ? "page" : undefined}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <Link
        className="header-cta items-center justify-center gap-[26px] [border:1px_solid_#ffecba60] py-[13px] px-[19px] text-[14px] font-medium hover:text-green hover:bg-cream hidden sm:flex"
        href="/contact"
        onClick={() => setMenuOpen(false)}
      >
        Let’s create together <Arrow diagonal />
      </Link>
      <button
        type="button"
        className="menu-button w-[35px] h-[35px] content-center [&_span]:block [&_span]:w-[25px] [&_span]:h-[1px] [&_span]:my-[7px] [&_span]:mx-auto [&_span]:bg-cream xl:hidden"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? (
          "✕"
        ) : (
          <>
            <span />
            <span />
          </>
        )}
      </button>
      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile navigation"
          className="mobile-menu [&_[aria-current=page]]:underline [&_[aria-current=page]]:underline-offset-[6px] absolute top-[100%] left-0 w-full bg-green pt-[15px] pb-7.5 px-[6%] [&_a]:py-[15px] [&_a]:px-0 [&_a]:w-full [&_a]:flex [&_a]:justify-between [&_a]:[border-bottom:1px_solid_#ffecba30] [&_button]:py-[15px] [&_button]:px-0 [&_button]:w-full [&_button]:flex [&_button]:justify-between [&_button]:[border-bottom:1px_solid_#ffecba30] max-md:text-[15px] xl:hidden"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              aria-current={active(item.href) ? "page" : undefined}
            >
              {item.label}
              <Arrow diagonal />
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
