// Reusable building blocks used across the pages.
import Link from "next/link";
import { site } from "@/content";
import type { Card, Officer } from "@/content/types";
import { isExternal } from "@/lib/nav";
import { ArrowRight, External, LinkedIn, Mail } from "./Icons";

export function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-7xl px-4 sm:px-6 ${className}`}>{children}</div>;
}

/** Blue banner with title + breadcrumb at the top of inner pages. */
export function PageBanner({ title, intro }: { title: string; intro?: string }) {
  return (
    <section className="relative overflow-hidden bg-ieee-navy text-white">
      {/* The first home-page photo, darkened, gives every inner page a banner in the template style. */}
      {site.slides[0] && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={site.slides[0].image} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover opacity-35" style={{ objectPosition: site.slides[0].focus ?? "center" }} />
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-ieee-navy/90 to-ieee-navy/40" aria-hidden="true" />
      <Container className="relative py-14 sm:py-20">
        <nav aria-label="Breadcrumb" className="text-sm text-white/80">
          <Link href="/" className="hover:underline">Home</Link>
          <span className="mx-2" aria-hidden="true">/</span>
          <span aria-current="page">{title}</span>
        </nav>
        <h1 className="mt-3 font-condensed text-4xl font-bold sm:text-5xl">{title}</h1>
        <div className="mt-4 h-1 w-16 bg-accent" />
        {intro && <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/90">{intro}</p>}
      </Container>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, intro, center }: { eyebrow?: string; title: string; intro?: string; center?: boolean }) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && <p className="text-sm font-bold uppercase tracking-wider text-ieee-gray">{eyebrow}</p>}
      <h2 className="mt-2 font-condensed text-4xl font-bold text-brand sm:text-4xl">{title}</h2>
      <div className={`mt-3 h-1 w-14 bg-accent ${center ? "mx-auto" : ""}`} />
      {intro && <p className="mt-4 text-lg leading-relaxed text-slate-600">{intro}</p>}
    </div>
  );
}

/** Visible warning on sample content that must be replaced before launch. */
export function PlaceholderBadge() {
  return (
    <span className="inline-block rounded bg-ieee-orange px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide text-white">
      Placeholder — replace before launch
    </span>
  );
}

/** Buttons follow the IEEE templates: IEEE Blue on light backgrounds,
 *  white on IEEE Blue backgrounds. Accent colours are never used for buttons. */
export function ButtonLink({ href, children, variant = "primary" }: { href: string; children: React.ReactNode; variant?: "primary" | "white" | "outline" | "light" }) {
  const styles = {
    primary: "bg-brand text-white hover:bg-ieee-navy",
    white: "bg-white text-ieee-blue hover:bg-ieee-light",
    outline: "border-2 border-white text-white hover:bg-white hover:text-ieee-blue",
    light: "border-2 border-brand text-brand hover:bg-brand hover:text-white",
  }[variant];
  const cls = `inline-flex items-center gap-2 rounded px-6 py-3 font-condensed text-lg font-bold uppercase tracking-wide transition-colors ${styles}`;
  return isExternal(href) ? (
    <a href={href} className={cls}>{children}<External /></a>
  ) : (
    <Link href={href} className={cls}>{children}<ArrowRight /></Link>
  );
}

export function InfoCard({ card }: { card: Card }) {
  const linkInner = (
    <>
      {card.linkLabel ?? "Learn more"} {card.href && isExternal(card.href) ? <External /> : <ArrowRight />}
    </>
  );
  return (
    <article className={`flex h-full flex-col rounded-lg border bg-white p-6 shadow-sm transition-shadow hover:shadow-md ${card.placeholder ? "border-dashed border-ieee-orange" : "border-slate-200"}`}>
      {card.placeholder && <div className="mb-3"><PlaceholderBadge /></div>}
      {card.image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={card.image} alt="" className="mb-4 h-16 w-auto self-start" />
      )}
      {card.tag && (
        <span className="self-start rounded bg-surface px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-ieee-blue">{card.tag}</span>
      )}
      <h3 className="mt-3 font-condensed text-xl font-bold text-brand">{card.title}</h3>
      <p className="mt-2 flex-1 leading-relaxed text-slate-600">{card.description}</p>
      {card.href && (
        isExternal(card.href) ? (
          <a href={card.href} className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-ieee-blue hover:underline">{linkInner}</a>
        ) : (
          <Link href={card.href} className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-ieee-blue hover:underline">{linkInner}</Link>
        )
      )}
    </article>
  );
}

function initials(name: string) {
  return name.split(/\s+/).filter(Boolean).slice(0, 2).map((p) => p[0]?.toUpperCase()).join("");
}

export function OfficerCard({ person }: { person: Officer }) {
  return (
    <article className={`overflow-hidden rounded-lg border bg-white text-center shadow-sm ${person.placeholder ? "border-dashed border-ieee-orange" : "border-slate-200"}`}>
      <div className="flex aspect-square items-center justify-center bg-surface">
        {person.photo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={person.photo} alt={person.name} className="h-full w-full object-cover" />
        ) : (
          <span className="flex h-24 w-24 items-center justify-center rounded-full bg-ieee-blue font-condensed text-4xl font-bold text-white" aria-hidden="true">
            {initials(person.name)}
          </span>
        )}
      </div>
      <div className="p-4">
        {person.placeholder && <div className="mb-2"><PlaceholderBadge /></div>}
        <h3 className="font-condensed text-lg font-bold text-brand">{person.name}</h3>
        <p className="text-sm font-semibold text-ieee-blue">{person.role}</p>
        {person.affiliation && <p className="mt-1 text-sm text-slate-500">{person.affiliation}</p>}
        {(person.linkedin || person.email) && (
          <div className="mt-3 flex justify-center gap-2">
            {person.linkedin && (
              <a href={person.linkedin} className="text-ieee-blue hover:text-ieee-navy" aria-label={`${person.name} on LinkedIn`}><LinkedIn /></a>
            )}
            {person.email && (
              <a href={`mailto:${person.email}`} className="text-ieee-blue hover:text-ieee-navy" aria-label={`Email ${person.name}`}><Mail className="h-5 w-5" /></a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
