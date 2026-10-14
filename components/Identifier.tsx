// The site identifier (top-left of the header, and in the footer), built from the
// OFFICIAL logo files in /public exactly as each sub-brand guideline describes.
//   light = on the white header   ·   dark = on the IEEE Dark Blue footer
import { site } from "@/content";

type Tone = "light" | "dark";

/** IEEE Young Professionals logo + section identifier.
 *  YP guideline: add the Section name under the logo in IEEE Blue (Formata, Calibri or Verdana). */
function YP({ tone }: { tone: Tone }) {
  return (
    <span className="flex flex-col items-end">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={tone === "light" ? "/yp/yp-logo.png" : "/yp/yp-logo-white.png"}
        alt="IEEE Young Professionals"
        className="h-6 w-auto sm:h-11"
      />
      <span
        className={`-mt-0.5 font-bold tracking-wide sm:text-lg ${tone === "light" ? "text-ieee-blue" : "text-white"}`}
        style={{ fontFamily: "Calibri, Verdana, 'Open Sans', sans-serif" }}
      >
        {site.identifierLabel}
      </span>
    </span>
  );
}

/** PES | PELS | IAS joint-chapter lock-up.
 *  Large screens: the society wordmarks side by side, as on IEEE PES joint-chapter sites.
 *  Phones and the footer: the compact stacked logos with "IEEE Rwanda Joint Chapter" underneath. */
function Joint({ tone }: { tone: Tone }) {
  const sfx = tone === "light" ? "" : "-white";
  const rule = tone === "light" ? "bg-[#999]" : "bg-white/50";
  const h = tone === "light" ? "h-8 sm:h-12" : "h-10";
  const compact = (
    <span className="flex flex-col items-center">
      <span className="flex items-center gap-1.5 sm:gap-2.5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`/pes-ias-pels/pes-logo${sfx}.png`} alt="IEEE Power & Energy Society" className={`${h} w-auto`} />
        <span className={`${h} w-px ${rule}`} aria-hidden="true" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`/pes-ias-pels/ias-logo${sfx}.png`} alt="IEEE Industry Applications Society" className={`${h} w-auto`} />
        <span className={`${h} w-px ${rule}`} aria-hidden="true" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`/pes-ias-pels/pels-logo${sfx}.png`} alt="IEEE Power Electronics Society" className={`${h} w-auto`} />
      </span>
      <span className={`mt-1.5 w-full border-t pt-1 text-center text-xs font-bold sm:text-sm ${tone === "light" ? "border-ieee-navy text-ieee-navy" : "border-white/60 text-white"}`}>
        {site.identifierLabel}
      </span>
    </span>
  );
  if (tone === "dark") return compact;
  return (
    <>
      <span className="lg:hidden">{compact}</span>
      <span className="hidden items-center gap-4 lg:flex">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/pes-ias-pels/pes-logo.png" alt="IEEE Power & Energy Society" className="h-[4.25rem] w-auto" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/pes-ias-pels/pels-horizontal.png" alt="IEEE Power Electronics Society" className="h-11 w-auto" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/pes-ias-pels/ias-tagline.png" alt="IEEE Industry Applications Society" className="h-[3.6rem] w-auto" />
      </span>
    </>
  );
}

/** IEEE SIGHT logo + red "wedge" identifier box, recreated from the official
 *  SIGHT identifier template (HT guideline p. 8) with our group's name. */
function Sight({ tone }: { tone: Tone }) {
  return (
    <svg viewBox="0 0 290.3 181.3" className="h-14 w-auto sm:h-20" role="img" aria-label={`IEEE SIGHT ${site.identifierLabel}`}>
      <image href={tone === "light" ? "/sight/sight-logo.svg" : "/sight/sight-logo-white.svg"} x="0" y="0" width="290.3" height="132.5" />
      <path d="M289.34 163.02V149.96H17.85L.47 167.34v13H272.03Z" fill="#BA0C2F" />
      <text x="145" y="171.3" textAnchor="middle" fill="#FFFFFF" fontFamily="'Open Sans', Calibri, sans-serif" fontWeight="700" fontSize="19.5">
        {site.identifierLabel}
      </text>
    </svg>
  );
}

export default function Identifier({ tone = "light" }: { tone?: Tone }) {
  if (site.id === "yp") return <YP tone={tone} />;
  if (site.id === "pes-ias-pels") return <Joint tone={tone} />;
  return <Sight tone={tone} />;
}

/** Official IEEE Master Brand. Websites must use black or white (not blue). */
export function MasterBrand({ tone = "light", className = "" }: { tone?: Tone; className?: string }) {
  return (
    <a href="https://www.ieee.org" className={`shrink-0 ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={tone === "light" ? "/brand/ieee-mb-black.png" : "/brand/ieee-mb-white.png"}
        alt="IEEE"
        width={479}
        height={140}
        className="h-[34px] w-auto min-w-[116px]"
      />
    </a>
  );
}
