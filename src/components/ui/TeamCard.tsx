import Image from "next/image";

type TeamCardProps = {
  name: string;
  title: string;
  bio: string;
  photo: string;
  alt: string;
  website?: string;
};

export default function TeamCard({ name, title, bio, photo, alt, website }: TeamCardProps) {
  return (
    <article className="flex gap-3 rounded-2xl bg-white p-4 shadow-soft sm:flex-col sm:p-6">
      <Image
        src={photo}
        alt={alt}
        width={128}
        height={128}
        className="h-16 w-16 shrink-0 rounded-full object-cover sm:h-24 sm:w-24"
      />
      <div className="min-w-0 flex-1">
        <h3 className="font-display text-xl text-brand-darkGreen sm:text-2xl">{name}</h3>
        <p className="mt-0.5 text-sm font-semibold text-brand-midGreen sm:mt-1">{title}</p>
        <div className="my-3 h-px bg-brand-darkGreen/15 sm:my-4" />
        <p className="text-sm leading-relaxed text-brand-muted">{bio}</p>
        {website ? (
          <p className="mt-2 text-sm sm:mt-3">
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand-midGreen underline underline-offset-4 hover:text-brand-darkGreen"
            >
              {website.replace(/^https?:\/\//, "").replace(/\/$/, "")}
            </a>
          </p>
        ) : null}
      </div>
    </article>
  );
}
