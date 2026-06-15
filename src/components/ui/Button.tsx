import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "outline" | "outline-white" | "ghost";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-brand-darkGreen text-white hover:bg-[#2E7D32] focus-visible:ring-brand-leafGreen",
  outline:
    "border-2 border-brand-darkGreen text-brand-darkGreen hover:bg-brand-darkGreen hover:text-white focus-visible:ring-brand-darkGreen",
  "outline-white":
    "border-2 border-white text-white hover:bg-white/10 focus-visible:ring-white",
  ghost:
    "bg-white/10 text-white hover:bg-white/20 focus-visible:ring-white",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-[48px] cursor-pointer items-center justify-center rounded-full px-8 py-3 text-sm font-semibold transition-all duration-200 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${variantClasses[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
