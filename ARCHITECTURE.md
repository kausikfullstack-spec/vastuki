# Vastuki website

## Routes

- `/`: home and selected work
- `/about`: studio philosophy and process
- `/projects`: project collection and before/after comparison
- `/projects/[slug]`: individual project with an image gallery
- `/services`: expertise and delivery process
- `/contact`: downloadable project brief

Each page exports its own metadata. Project routes are generated from `lib/content.ts`; unknown project slugs return the shared 404 page.

## Components

- `components/layout`: shared navigation and footer, mounted in `app/layout.tsx`
- `components/sections`: reusable page sections
- `components/projects`: project cards, grid, and interactive gallery
- `components/contact`: project brief form
- `components/ui`: arrow icon, page introduction, parallax wrapper
- `lib/content.ts`: project and service content; add projects here with a unique slug and local image paths

Pages and static sections are Server Components. Only the mobile navigation, parallax wrapper, comparison slider, gallery, and form use client-side state. Internal navigation uses Next.js Link.

Components use Tailwind utilities for layout, responsive styles, typography, and interaction states. `lib/styles.ts` contains reusable Tailwind class groups for section spacing, eyebrows, buttons, and text links. `app/globals.css` only defines Tailwind's theme, base element defaults, smooth anchor scrolling, and the cursor keyframes. `FadeSection` fades entire sections at the viewport edges in both scroll directions. Headings remain plain text; reduced-motion users see every section without fading. CircularText and the hero typing effect remain independent. Image assets are in `public/image` and `public/before_after`.

## Development

Run `npm run dev`, `npm run lint`, and `npm run build` from this directory.

The contact form creates a local text-file download. It does not submit an enquiry or store personal details on a server.
