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
};

export default function ServiceCard({
  icon: Icon,
  title,
  body,
  image,
  alt,
}: ServiceCardProps) {
  return (
    <article className="h-full rounded-2xl bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-44 overflow-hidden rounded-t-2xl sm:h-56">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 100vw, 25vw"
          className="object-cover"
          quality={80}
          loading="lazy"
        />
      </div>
      <div className="p-5 sm:p-6">
        <Icon className="h-7 w-7 text-brand-darkGreen sm:h-8 sm:w-8" weight="duotone" aria-hidden />
        <h3 className="mt-3 font-display text-lg text-brand-darkGreen sm:mt-4 sm:text-xl">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-brand-muted">{body}</p>
      </div>
    </article>
  );
}
