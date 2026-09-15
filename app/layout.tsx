import type { Metadata } from "next";
import { Lora, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ConsultationPopup } from "@/components/contact/consultation-popup";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Vastuki Designs | Spaces with Soul",
    template: "%s | Vastuki Designs",
  },
  description:
    "Thoughtful architecture, personal interiors and considered craftsmanship. Discover Vastuki Designs — rooted in culture, refined in craft.",
  icons: { icon: "/image/vastuki_favicon.jpg" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${playfair.variable}  ${lora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a
          className="skip-link fixed left-5 top-[-60px] z-100 p-3 bg-cream focus:top-2.5"
          href="#main"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <ConsultationPopup />
      </body>
    </html>
  );
}
