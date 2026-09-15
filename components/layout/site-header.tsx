"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ButtonIcon } from "@/components/ui/button-icon";
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
      className="site-header h-23.5 py-0 px-[4.5%] flex items-center justify-between gap-[20px] bg-green text-cream relative z-30 max-md:h-19.5 max-md:py-0 max-md:px-[5%] max-sm:h-auto max-sm:flex-wrap max-sm:gap-y-0 max-sm:pt-3"
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
      <a
        href="tel:+918777762469"
        className="header-phone inline-flex min-h-11 shrink-0 items-center justify-center gap-2 whitespace-nowrap text-[14px] font-medium hover:underline underline-offset-4 max-sm:order-last max-sm:w-full"
        aria-label="Call Vastuki at 87777 62469"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.35 1.91.69 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.69A2 2 0 0 1 22 16.92z" />
        </svg>
        <span>87777 62469</span>
      </a>
      <Link
        className="button button-cream header-cta hidden lg:inline-flex"
        href="/contact"
        onClick={() => setMenuOpen(false)}
      >
        <ButtonIcon /> Let’s create together
      </Link>
      <button
        type="button"
        className="button button-cream menu-button shrink-0 px-3 xl:hidden"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <ButtonIcon />
        {menuOpen ? "Close" : "Menu"}
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
