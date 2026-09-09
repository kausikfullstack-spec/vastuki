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
      className="site-header"
      onKeyDown={(event) => {
        if (event.key === "Escape") setMenuOpen(false);
      }}
    >
      <Link
        href="/"
        className="brand"
        aria-label="Vastuki Designs home"
        onClick={() => setMenuOpen(false)}
      >
        <Image
          src="/image/vastuki_favicon.jpg"
          alt=""
          width={49}
          height={49}
          className="brand-mark"
        />
        <span>
          <span className="brand-name">VASTUKI</span>
          <span className="brand-caption">DESIGNING YOUR STORY</span>
        </span>
      </Link>
      <nav
        aria-label="Main navigation"
        className="hidden items-center gap-6 lg:flex"
      >
        {navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="nav-link"
            aria-current={active(item.href) ? "page" : undefined}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <Link
        className="header-cta hidden sm:flex"
        href="/contact"
        onClick={() => setMenuOpen(false)}
      >
        Let’s create together <Arrow diagonal />
      </Link>
      <button
        type="button"
        className="menu-button lg:hidden"
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
          className="mobile-menu lg:hidden"
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
