// Arrow animation adapted from Uiverse.io by Creatlydev.
export function ButtonIcon({ direction = "diagonal" }: { direction?: "diagonal" | "left" | "right" | "up" }) {
  return (
    <span className={`button__icon-wrapper button__icon-wrapper--${direction}`} aria-hidden="true">
      {[false, true].map((copy) => (
        <svg
          key={String(copy)}
          viewBox="0 0 14 15"
          fill="none"
          width="10"
          height="11"
          className={`button__icon-svg${copy ? " button__icon-svg--copy" : ""}`}
        >
          <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor" />
        </svg>
      ))}
    </span>
  );
}
