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
        className={`font-display text-3xl text-brand-darkGreen sm:text-4xl ${titleClassName}`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 max-w-2xl text-base leading-relaxed text-brand-muted ${
            centered ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
