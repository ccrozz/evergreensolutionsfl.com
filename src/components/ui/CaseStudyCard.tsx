import Image from "next/image";

export type CaseStudyCardProps = {
  tag: string;
  title: string;
  excerpt: string;
  image: string;
  alt: string;
  href?: string;
  compact?: boolean;
};

export default function CaseStudyCard({
  tag,
  title,
  excerpt,
  image,
  alt,
  href,
  compact = false,
}: CaseStudyCardProps) {
  const body = (
    <>
      <div className={`relative ${compact ? "h-44 sm:h-52" : "h-52"}`}>
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
          quality={80}
          loading="lazy"
        />
      </div>
      <div className={compact ? "p-4 sm:p-6" : "p-6"}>
        <span className="rounded-full bg-brand-leafGreen/20 px-2.5 py-0.5 text-[0.6875rem] font-semibold uppercase tracking-wide text-brand-leafGreen sm:px-3 sm:py-1 sm:text-xs">
          {tag}
        </span>
        <h3 className="mt-2 font-display text-lg text-brand-darkGreen sm:mt-3 sm:text-xl">
          {title}
        </h3>
        <p className="mt-1.5 line-clamp-3 text-sm text-brand-muted sm:mt-2">{excerpt}</p>
        <p className="mt-3 text-sm font-semibold text-brand-midGreen underline underline-offset-4 sm:mt-4">
          Read more →
        </p>
      </div>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block overflow-hidden rounded-2xl bg-white text-inherit no-underline shadow-sm transition-shadow duration-200 hover:shadow-xl"
      >
        <article>{body}</article>
      </a>
    );
  }

  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow duration-200 hover:shadow-xl">
      {body}
    </article>
  );
}
