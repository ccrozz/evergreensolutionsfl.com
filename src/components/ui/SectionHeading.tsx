type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  titleClassName?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
  titleClassName = "",
}: SectionHeadingProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-brand-midGreen">
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`font-display text-2xl text-brand-darkGreen sm:text-3xl md:text-4xl ${titleClassName}`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-3 max-w-2xl text-sm leading-relaxed text-brand-muted sm:mt-4 sm:text-base ${
            centered ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
