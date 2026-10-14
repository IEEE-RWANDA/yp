// The site identifier (top-left of the header, and in the footer), built from the
// OFFICIAL logo files in /public exactly as the sub-brand guideline describes.
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

export default function Identifier({ tone = "light" }: { tone?: Tone }) {
  return <YP tone={tone} />;
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
