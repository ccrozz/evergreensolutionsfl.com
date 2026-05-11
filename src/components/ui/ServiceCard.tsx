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
      <div className="relative h-56 overflow-hidden rounded-t-2xl">
        <Image src={image} alt={alt} fill sizes="(max-width: 1024px) 100vw, 25vw" className="object-cover" />
      </div>
      <div className="p-6">
        <Icon className="h-8 w-8 text-brand-darkGreen" weight="duotone" aria-hidden />
        <h3 className="mt-4 font-display text-xl text-brand-darkGreen">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-brand-muted">{body}</p>
      </div>
    </article>
  );
}
