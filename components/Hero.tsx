// Home page photo with the unit's headline and main button.
import { site } from "@/content";
import { ButtonLink } from "./ui";

export default function Hero() {
  const h = site.hero;
  return (
    <section className="relative isolate overflow-hidden bg-ieee-navy text-white">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={h.image}
        alt={h.alt}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        style={{ objectPosition: h.focus ?? "center" }}
      />
      {/* Darkens the left side so white text stays readable on any photo */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ieee-navy/90 via-ieee-navy/60 to-ieee-navy/10" aria-hidden="true" />
      <div className="mx-auto flex min-h-[420px] max-w-6xl flex-col justify-center px-4 py-16 sm:min-h-[500px] sm:px-6">
        <h1 className="max-w-2xl font-condensed text-5xl font-bold leading-[1.02] sm:text-7xl">{h.title}</h1>
        {h.subtitle && <p className="mt-5 max-w-xl text-lg text-white/90 sm:text-xl">{h.subtitle}</p>}
        {h.cta && <div className="mt-8"><ButtonLink href={h.cta.href} variant="white">{h.cta.label}</ButtonLink></div>}
      </div>
      {h.credit && (
        <p className="absolute bottom-2 right-3 text-[11px] text-white/70">
          Photo: {h.credit.url ? <a href={h.credit.url} className="hover:underline">{h.credit.name}</a> : h.credit.name}
        </p>
      )}
    </section>
  );
}
