// Shared Tailwind utility groups; component-specific styles stay with their markup.
export const sectionSpacing =
  "section-shell py-27.5 px-[7.5%] min-[1600px]:px-[max(7.5%,_calc((100%_-_1360px)_/_2))] max-md:py-17.5 max-md:px-[7%]";
export const eyebrowStyles =
  "eyebrow flex items-center gap-[10px] text-[11px] font-medium tracking-[0.18em] leading-[1.7] uppercase [&>span:empty]:inline-block [&>span:empty]:w-6 [&>span:empty]:h-[1px] [&>span:empty]:bg-current";
export const buttonStyles =
  "button inline-flex items-center justify-between gap-[38px] py-4.5 px-6 text-[14px] min-h-[54px] font-medium hover:[transform:translateY(-3px)]";
export const textLinkStyles =
  "text-link inline-flex items-center gap-[35px] text-[14px] pb-2.5 [border-bottom:1px_solid_currentColor] mt-5 font-medium [&:hover_svg]:[transform:translate(3px,_-3px)] [&_svg]:[transition:transform_0.2s]";
