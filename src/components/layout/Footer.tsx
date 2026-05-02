import Image from "next/image";
import Link from "next/link";
import { BriefcaseBusiness, Camera, Globe, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer id="request-quote" className="bg-brand-darkGreen py-14 text-white">
      <div className="container">
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
            <p className="mt-4 text-sm text-white/70">evergreensolutionsfl.com</p>
          </div>

          <div>
            <h3 className="font-display text-2xl">Contact Phones</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li className="flex items-center gap-2">
                <Phone size={16} /> 954-774-9170
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} /> 954-774-9169
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-2xl">Our Scope</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li>Native Restoration</li>
              <li>Land Management</li>
              <li>Habitat Consulting</li>
              <li>Case Studies</li>
              <li>Species Assessment</li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-2xl">Contact Us</h3>
            <p className="mt-4 flex items-center gap-2 text-sm text-white/80">
              <Mail size={16} />
              coleman@evergreensolutionsfl.com
            </p>
            <Link href="#" className="mt-3 inline-block text-sm text-white underline">
              Contact form →
            </Link>
            <div className="mt-5 flex items-center gap-3">
              <Link href="#" aria-label="Facebook" className="rounded-full bg-white/15 p-2 hover:bg-white/25">
                <Globe size={16} />
              </Link>
              <Link href="#" aria-label="Instagram" className="rounded-full bg-white/15 p-2 hover:bg-white/25">
                <Camera size={16} />
              </Link>
              <Link href="#" aria-label="LinkedIn" className="rounded-full bg-white/15 p-2 hover:bg-white/25">
                <BriefcaseBusiness size={16} />
              </Link>
            </div>
          </div>
        </div>
        <p className="mt-12 border-t border-white/15 pt-6 text-xs text-white/70">
          © 2026 Evergreen Solutions FL. All rights reserved. | UF Alumni Founded.
        </p>
      </div>
    </footer>
  );
}
