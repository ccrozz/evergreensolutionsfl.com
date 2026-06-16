type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  mobileDescription?: string;
  centered?: boolean;
  titleClassName?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  mobileDescription,
  centered = false,
  titleClassName = "",
}: SectionHeadingProps) {
  const resolvedMobileDescription = mobileDescription ?? description;

  return (
    <div className={centered ? "text-center" : ""}>
      {eyebrow ? (
        <p className="mb-2 text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-brand-midGreen sm:mb-3 sm:text-xs sm:tracking-[0.22em]">
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`text-balance font-display text-[1.625rem] leading-tight text-brand-darkGreen sm:text-3xl md:text-4xl ${titleClassName}`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-2 max-w-2xl text-sm leading-relaxed text-brand-muted sm:mt-4 sm:text-base ${
            centered ? "mx-auto" : ""
          }`}
        >
          {resolvedMobileDescription && resolvedMobileDescription !== description ? (
            <>
              <span className="sm:hidden">{resolvedMobileDescription}</span>
              <span className="hidden sm:inline">{description}</span>
            </>
          ) : (
            description
          )}
        </p>
      ) : null}
    </div>
  );
}
