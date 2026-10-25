// Site footer. The bottom bar (policy links, copyright, descriptor) is required by IEEE.
import Link from "next/link";
import { site } from "@/content";
import { SISTER_SITES } from "@/content/shared";
import { footerPolicyLinks, mainNav } from "@/lib/nav";
import CopyrightYear from "./CopyrightYear";
import Identifier, { MasterBrand } from "./Identifier";
import { Facebook, Instagram, LinkedIn, Mail, Pin, XLogo, YouTube } from "./Icons";
import { SmartLink } from "./ui";

const socialIcons = { linkedin: LinkedIn, instagram: Instagram, x: XLogo, facebook: Facebook, youtube: YouTube } as const;
const socialNames = { linkedin: "LinkedIn", instagram: "Instagram", x: "X", facebook: "Facebook", youtube: "YouTube" } as const;

export default function Footer() {
  const socials = Object.entries(site.social).filter(([, url]) => url) as [keyof typeof socialIcons, string][];
  const sisters = SISTER_SITES.filter((s) => !s.href.startsWith(site.siteUrl));

  return (
    <footer className="bg-ieee-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" aria-label={`${site.fullName} — home`} className="inline-block"><Identifier tone="dark" /></Link>
          <p className="mt-4 text-sm font-semibold text-white">{site.fullName}</p>
          {socials.length > 0 && (
            <ul className="mt-5 flex gap-3">
              {socials.map(([key, url]) => {
                const Icon = socialIcons[key];
                return (
                  <li key={key}>
                    <a href={url} className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 hover:bg-white hover:text-ieee-navy" aria-label={`${site.shortName} on ${socialNames[key]}`}>
                      <Icon />
                    </a>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <div>
          <h2 className="text-sm font-bold text-white">Pages</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {mainNav.map((n) => (
              <li key={n.href}><Link href={n.href} className="hover:text-white hover:underline">{n.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold text-white">IEEE Rwanda</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {sisters.map((s) => (
              <li key={s.href}><a href={s.href} className="hover:text-white hover:underline">{s.label}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold text-white">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm">
            {site.contact.email && (
              <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4" /><a href={`mailto:${site.contact.email}`} className="break-all hover:text-white hover:underline">{site.contact.email}</a></li>
            )}
            {site.social.linkedin && (
              <li className="flex items-start gap-2"><LinkedIn className="mt-0.5 h-4 w-4" /><a href={site.social.linkedin} className="hover:text-white hover:underline">Message us on LinkedIn</a></li>
            )}
            <li className="flex items-start gap-2"><Pin className="mt-0.5 h-4 w-4" />{site.contact.address}</li>
          </ul>
        </div>
      </div>

      {/* IEEE-required administrative footer */}
      <div className="border-t border-white/25">
        <div className="mx-auto max-w-6xl px-4 py-6 text-xs sm:px-6">
          <ul className="flex flex-wrap gap-x-5 gap-y-1.5 text-xs font-semibold">
            {footerPolicyLinks.map((l) => (
              <li key={l.label}>
                <SmartLink href={l.href} className="hover:text-white hover:underline">{l.label}</SmartLink>
              </li>
            ))}
          </ul>
          <MasterBrand tone="dark" className="mt-5 inline-block" />
          <p className="mt-4 text-white/80">
            © Copyright <CopyrightYear /> IEEE – All rights reserved. A public charity, IEEE is the world&apos;s largest technical
            professional organization dedicated to advancing technology for the benefit of humanity.
          </p>
        </div>
      </div>
    </footer>
  );
}
