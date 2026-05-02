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
    <article className="rounded-2xl bg-white p-6 shadow-soft">
      <Image
        src={photo}
        alt={alt}
        width={128}
        height={128}
        className="h-24 w-24 rounded-full object-cover"
      />
      <h3 className="mt-4 font-display text-2xl text-brand-darkGreen">{name}</h3>
      <p className="mt-1 text-sm font-semibold text-brand-midGreen">{title}</p>
      <div className="my-4 h-px bg-brand-darkGreen/15" />
      <p className="text-sm leading-relaxed text-brand-muted">{bio}</p>
      {website ? (
        <p className="mt-3 text-sm">
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
    </article>
  );
}
