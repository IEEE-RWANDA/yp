"use client";
// Full-width photo slider (IEEE website-template style).
// IEEE rules for carousels: visitors can pause/advance it, and each slide stays up
// long enough to read (8 seconds). It does not auto-advance if the visitor prefers reduced motion.
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { site } from "@/content";
import { isExternal } from "@/lib/nav";
import { ChevronLeft, ChevronRight, Pause, Play } from "./Icons";

const INTERVAL = 8000;

export default function HeroSlider() {
  const slides = site.slides;
  const [i, setI] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [hover, setHover] = useState(false);

  const go = useCallback((n: number) => setI((n + slides.length) % slides.length), [slides.length]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) setPlaying(false);
  }, []);
  useEffect(() => {
    if (!playing || hover || slides.length < 2) return;
    const t = setTimeout(() => go(i + 1), INTERVAL);
    return () => clearTimeout(t);
  }, [i, playing, hover, go, slides.length]);

  if (slides.length === 0) return null;

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Highlights"
      className="relative h-[460px] overflow-hidden bg-ieee-navy text-white sm:h-[540px]"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setHover(true)}
      onBlur={() => setHover(false)}
    >
      <h1 className="sr-only">{site.fullName}</h1>

      {slides.map((s, n) => {
        const active = n === i;
        return (
          <div
            key={s.image}
            role="group"
            aria-roledescription="slide"
            aria-label={`${n + 1} of ${slides.length}`}
            aria-hidden={!active}
            className={`absolute inset-0 transition-opacity duration-700 ${active ? "opacity-100" : "pointer-events-none opacity-0"}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={s.image}
              alt={s.alt}
              className="h-full w-full object-cover"
              style={{ objectPosition: s.focus ?? "center" }}
              loading={n === 0 ? "eager" : "lazy"}
            />
            {/* Dark gradient so white text stays readable on any photo */}
            <div className="absolute inset-0 bg-gradient-to-r from-ieee-navy/85 via-ieee-navy/55 to-transparent" />
            <div className="absolute inset-0">
              <div className="mx-auto flex h-full max-w-7xl flex-col justify-center px-6 pb-10 sm:px-16 lg:px-20">
                <h2 className="max-w-2xl font-condensed text-4xl font-bold leading-[1.08] drop-shadow sm:text-6xl">{s.title}</h2>
                {s.subtitle && <p className="mt-4 max-w-xl text-lg font-semibold drop-shadow sm:text-2xl">{s.subtitle}</p>}
                {s.cta && (
                  <div className="mt-7">
                    {isExternal(s.cta.href) ? (
                      <a href={s.cta.href} tabIndex={active ? 0 : -1} className="inline-block border-2 border-white bg-white px-6 py-3 font-condensed text-lg font-bold uppercase tracking-wide text-brand hover:bg-transparent hover:text-white">
                        {s.cta.label}
                      </a>
                    ) : (
                      <Link href={s.cta.href} tabIndex={active ? 0 : -1} className="inline-block border-2 border-white bg-white px-6 py-3 font-condensed text-lg font-bold uppercase tracking-wide text-brand hover:bg-transparent hover:text-white">
                        {s.cta.label}
                      </Link>
                    )}
                  </div>
                )}
              </div>
            </div>
            {s.credit && (
              <p className="absolute bottom-2 right-3 text-[11px] text-white/75">
                Photo:{" "}
                {s.credit.url ? (
                  <a href={s.credit.url} tabIndex={active ? 0 : -1} className="underline-offset-2 hover:underline">{s.credit.name}</a>
                ) : (
                  s.credit.name
                )}
              </p>
            )}
          </div>
        );
      })}

      {slides.length > 1 && (
        <>
          <button type="button" onClick={() => go(i - 1)} className="absolute left-1 top-1/2 hidden -translate-y-1/2 p-2 text-white/80 hover:text-white sm:block" aria-label="Previous slide">
            <ChevronLeft className="h-10 w-10" />
          </button>
          <button type="button" onClick={() => go(i + 1)} className="absolute right-1 top-1/2 hidden -translate-y-1/2 p-2 text-white/80 hover:text-white sm:block" aria-label="Next slide">
            <ChevronRight className="h-10 w-10" />
          </button>
          <div className="absolute bottom-0 left-0 right-0">
            <div className="mx-auto flex max-w-7xl items-center gap-3 px-6 pb-5 sm:px-16 lg:px-20">
              <button type="button" onClick={() => setPlaying((p) => !p)} className="p-1 text-white hover:text-white/80" aria-label={playing ? "Pause slideshow" : "Play slideshow"}>
                {playing ? <Pause /> : <Play />}
              </button>
              {slides.map((s, n) => (
                <button
                  key={s.image}
                  type="button"
                  onClick={() => go(n)}
                  aria-label={`Show slide ${n + 1}: ${s.title}`}
                  aria-current={n === i}
                  className={`h-4 w-4 rounded-full border-2 border-white ${n === i ? "bg-white" : "bg-transparent hover:bg-white/40"}`}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </section>
  );
}
