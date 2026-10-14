// Site footer. The bottom bar (policy links, copyright, descriptor) is required by IEEE.
import Link from "next/link";
import { site } from "@/content";
import { SISTER_SITES } from "@/content/shared";
import { footerPolicyLinks, isExternal, mainNav } from "@/lib/nav";
import CopyrightYear from "./CopyrightYear";
import Identifier, { MasterBrand } from "./Identifier";
import { Facebook, Instagram, LinkedIn, Mail, Pin, XLogo, YouTube } from "./Icons";

const socialIcons = { linkedin: LinkedIn, instagram: Instagram, x: XLogo, facebook: Facebook, youtube: YouTube } as const;
const socialNames = { linkedin: "LinkedIn", instagram: "Instagram", x: "X", facebook: "Facebook", youtube: "YouTube" } as const;

function SmartLink({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
  return isExternal(href) ? <a href={href} className={className}>{children}</a> : <Link href={href} className={className}>{children}</Link>;
}

export default function Footer() {
  const socials = Object.entries(site.social).filter(([, url]) => url) as [keyof typeof socialIcons, string][];
  const sisters = SISTER_SITES.filter((s) => !s.href.startsWith(site.siteUrl));

  return (
    <footer className="mt-20 bg-brand text-white">
      <div className="h-1.5 bg-accent" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" aria-label={`${site.fullName} — home`} className="inline-block"><Identifier tone="dark" /></Link>
          <p className="mt-4 font-bold text-white">{site.fullName}</p>
          <p className="mt-2 text-sm leading-relaxed text-white/85">{site.description}</p>
          {socials.length > 0 && (
            <ul className="mt-5 flex gap-3">
              {socials.map(([key, url]) => {
                const Icon = socialIcons[key];
                return (
                  <li key={key}>
                    <a href={url} className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white hover:text-ieee-navy" aria-label={`${site.shortName} on ${socialNames[key]}`}>
                      <Icon />
                    </a>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-white">Navigate</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {mainNav.map((n) => (
              <li key={n.href}><Link href={n.href} className="hover:text-white hover:underline">{n.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-white">IEEE Rwanda</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {sisters.map((s) => (
              <li key={s.href}><a href={s.href} className="hover:text-white hover:underline">{s.label}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-white">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4" /><a href={`mailto:${site.contact.email}`} className="break-all hover:text-white hover:underline">{site.contact.email}</a></li>
            <li className="flex items-start gap-2"><Pin className="mt-0.5 h-4 w-4" />{site.contact.address}</li>
          </ul>
          <a href="https://www.ieee.org/membership/join/index.html" className="mt-6 inline-block rounded bg-white px-4 py-2 text-sm font-bold text-ieee-blue hover:bg-ieee-light">
            Join IEEE
          </a>
        </div>
      </div>

      {/* IEEE-required administrative footer */}
      <div className="border-t border-white/25">
        <div className="mx-auto max-w-7xl px-4 py-6 text-xs sm:px-6">
          <ul className="flex flex-wrap gap-y-1 font-condensed text-sm font-bold uppercase tracking-wide">
            {footerPolicyLinks.map((l, i) => (
              <li key={l.label} className="flex items-center">
                {i > 0 && <span className="mx-2 opacity-40" aria-hidden="true">|</span>}
                <SmartLink href={l.href} className="hover:text-white hover:underline">{l.label}</SmartLink>
              </li>
            ))}
          </ul>
          <MasterBrand tone="dark" className="mt-5 inline-block" />
          <p className="mt-4 text-white/85">
            © Copyright <CopyrightYear /> IEEE – All rights reserved. A public charity, IEEE is the world&apos;s largest technical
            professional organization dedicated to advancing technology for the benefit of humanity.
          </p>
        </div>
      </div>
    </footer>
  );
}
