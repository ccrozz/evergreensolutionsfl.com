"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Envelope,
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  Phone,
} from "@phosphor-icons/react";
import QuoteRequestForm from "@/components/ui/QuoteRequestForm";

export default function Footer() {
  return (
    <footer
      id="request-quote"
      className="border-t border-brand-darkGreen/10 bg-brand-sand py-14 text-brand-dark"
    >
      <div className="container">
        <QuoteRequestForm />
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="relative h-14 w-44">
              <Image
                src="/logo.png"
                alt="Evergreen Solutions FL"
                fill
                className="object-contain object-left"
                sizes="176px"
              />
            </div>
            <p className="mt-4 text-sm text-brand-muted">evergreensolutionsfl.com</p>
          </div>

          <div>
            <h3 className="font-display text-2xl text-brand-darkGreen">Contact Phones</h3>
            <ul className="mt-4 space-y-2 text-sm text-brand-muted">
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0 text-brand-midGreen" weight="duotone" aria-hidden />
                Coleman 954-774-9170
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0 text-brand-midGreen" weight="duotone" aria-hidden />
                Grayson 954-774-9169
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-2xl text-brand-darkGreen">Our Scope</h3>
            <ul className="mt-4 space-y-2 text-sm text-brand-muted">
              <li>Edible Gardens & Food Forests</li>
              <li>Native Restoration</li>
              <li>Commercial Restoration</li>
              <li>Invasive Species Clearing</li>
              <li>Case Studies</li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-2xl text-brand-darkGreen">Contact Us</h3>
            <p className="mt-4 flex items-center gap-2 text-sm text-brand-muted">
              <Envelope size={16} className="shrink-0 text-brand-midGreen" weight="duotone" aria-hidden />
              coleman@evergreensolutionsfl.com
            </p>
            <Link
              href="#quote-form"
              className="mt-3 inline-block text-sm font-semibold text-brand-darkGreen underline underline-offset-4 decoration-brand-darkGreen/40 hover:text-brand-leafGreen hover:decoration-brand-leafGreen/50"
            >
              Request a free quote now
            </Link>
            <div className="mt-5 flex items-center gap-3">
              <Link
                href="#"
                aria-label="Facebook"
                className="rounded-full bg-brand-darkGreen/10 p-2 text-brand-darkGreen hover:bg-brand-darkGreen/15"
              >
                <FacebookLogo size={16} weight="duotone" aria-hidden />
              </Link>
              <Link
                href="https://www.instagram.com/evergreensolutionsfl/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Evergreen Solutions FL on Instagram (opens in a new tab)"
                className="rounded-full bg-brand-darkGreen/10 p-2 text-brand-darkGreen hover:bg-brand-darkGreen/15"
              >
                <InstagramLogo size={16} weight="duotone" aria-hidden />
              </Link>
              <Link
                href="#"
                aria-label="LinkedIn"
                className="rounded-full bg-brand-darkGreen/10 p-2 text-brand-darkGreen hover:bg-brand-darkGreen/15"
              >
                <LinkedinLogo size={16} weight="duotone" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
        <p className="mt-12 border-t border-brand-darkGreen/15 pt-6 text-xs text-brand-muted">
          © 2026 Evergreen Solutions FL. All rights reserved. | UF Alumni Founded.
        </p>
      </div>
    </footer>
  );
}
