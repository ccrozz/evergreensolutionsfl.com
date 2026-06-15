import Image from "next/image";

export type CaseStudyCardProps = {
  tag: string;
  title: string;
  excerpt: string;
  image: string;
  alt: string;
  href?: string;
};

export default function CaseStudyCard({
  tag,
  title,
  excerpt,
  image,
  alt,
  href,
}: CaseStudyCardProps) {
  const body = (
    <>
      <div className="relative h-52">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 100vw, 33vw"
          className="object-cover"
          quality={80}
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <span className="rounded-full bg-brand-leafGreen/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-leafGreen">
          {tag}
        </span>
        <h3 className="mt-3 font-display text-xl text-brand-darkGreen">{title}</h3>
        <p className="mt-2 text-sm text-brand-muted">{excerpt}</p>
        <p className="mt-4 text-sm font-semibold text-brand-midGreen underline underline-offset-4">
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
