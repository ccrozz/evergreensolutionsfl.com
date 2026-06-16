import Image from "next/image";
import type { IconProps } from "@phosphor-icons/react";
import type { ForwardRefExoticComponent, RefAttributes } from "react";

type IconComponent = ForwardRefExoticComponent<
  IconProps & RefAttributes<SVGSVGElement>
>;

type ServiceCardProps = {
  icon: IconComponent;
  title: string;
  body: string;
  image: string;
  alt: string;
  compact?: boolean;
};

export default function ServiceCard({
  icon: Icon,
  title,
  body,
  image,
  alt,
  compact = false,
}: ServiceCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-200 sm:hover:-translate-y-1 sm:hover:shadow-lg">
      <div
        className={`relative overflow-hidden ${
          compact ? "h-36 sm:h-56" : "h-44 sm:h-56"
        }`}
      >
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover"
          quality={80}
          loading="lazy"
        />
      </div>
      <div className={`flex flex-1 flex-col ${compact ? "p-4 sm:p-6" : "p-5 sm:p-6"}`}>
        <Icon
          className="h-6 w-6 text-brand-darkGreen sm:h-8 sm:w-8"
          weight="duotone"
          aria-hidden
        />
        <h3 className="mt-2 font-display text-base text-brand-darkGreen sm:mt-4 sm:text-xl">
          {title}
        </h3>
        <p className="mt-1.5 flex-1 text-sm leading-relaxed text-brand-muted sm:mt-2">
          {body}
        </p>
      </div>
    </article>
  );
}
