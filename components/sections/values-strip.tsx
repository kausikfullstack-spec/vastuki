export function ValuesStrip() {
  return (
    <div className="values-strip flex items-center justify-around gap-[15px] py-[25px] px-[5%] bg-cream text-[15px] max-md:text-[11px] max-md:py-4.5 max-md:px-[5%] max-md:gap-[10px]">
      <span>Inspired by you</span>
      <span className="asterisk text-[27px] font-light max-md:text-[22px]">
        ✳
      </span>
      <span>Grounded in craft</span>
      <span className="asterisk text-[27px] font-light max-md:text-[22px]">
        ✳
      </span>
      <span>Made for living</span>
      <span className="asterisk text-[27px] font-light max-md:text-[22px] hidden sm:block">
        ✳
      </span>
      <span className="hidden sm:block">Timeless by design</span>
    </div>
  );
}
