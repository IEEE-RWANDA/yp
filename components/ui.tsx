// Reusable building blocks used across the pages.
import Link from "next/link";
import type { Card, Officer } from "@/content/types";
import { isExternal } from "@/lib/nav";
import { ArrowRight, External, LinkedIn, Mail } from "./Icons";

export function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-6xl px-4 sm:px-6 ${className}`}>{children}</div>;
}

/** Link that picks <a> for other websites and <Link> for pages on this site. */
export function SmartLink({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
  return isExternal(href) ? <a href={href} className={className}>{children}</a> : <Link href={href} className={className}>{children}</Link>;
}

/** Title + breadcrumb at the top of inner pages. */
export function PageBanner({ title, intro }: { title: string; intro?: string }) {
  return (
    <section className="border-b border-rule bg-surface">
      <Container className="py-10 sm:py-14">
        <nav aria-label="Breadcrumb" className="text-sm text-muted">
          <Link href="/" className="hover:text-brand hover:underline">Home</Link>
          <span className="mx-2" aria-hidden="true">/</span>
          <span aria-current="page">{title}</span>
        </nav>
        <h1 className="mt-2 font-condensed text-4xl font-bold text-ieee-navy sm:text-5xl">{title}</h1>
        {intro && <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink">{intro}</p>}
      </Container>
    </section>
  );
}

export function SectionHeading({ title, intro, action }: { title: string; intro?: string; action?: { label: string; href: string } }) {
  return (
    <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
      <div className="max-w-2xl">
        <h2 className="text-2xl font-bold tracking-tight text-ieee-navy sm:text-3xl">{title}</h2>
        {intro && <p className="mt-3 text-lg leading-relaxed text-muted">{intro}</p>}
      </div>
      {action && <TextLink href={action.href}>{action.label}</TextLink>}
    </div>
  );
}

/** Blue text link with an arrow — for "see all" style links. */
export function TextLink({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <SmartLink href={href} className={`inline-flex items-center gap-1.5 font-semibold text-brand hover:underline ${className}`}>
      {children}
      {isExternal(href) ? <External /> : <ArrowRight />}
    </SmartLink>
  );
}

/** Visible warning on sample content that must be replaced before launch. */
export function PlaceholderBadge() {
  return (
    <span className="inline-block rounded-sm bg-ieee-orange px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide text-white">
      Placeholder — replace before launch
    </span>
  );
}

/** Buttons follow the IEEE templates: IEEE Blue on light backgrounds, white on photos. */
export function ButtonLink({ href, children, variant = "primary" }: { href: string; children: React.ReactNode; variant?: "primary" | "white" }) {
  const styles = {
    primary: "bg-brand text-white hover:bg-ieee-navy",
    white: "bg-white text-ieee-navy hover:bg-ieee-light",
  }[variant];
  return (
    <SmartLink href={href} className={`inline-flex items-center gap-2 rounded-sm px-5 py-3 font-semibold transition-colors ${styles}`}>
      {children}
      {isExternal(href) ? <External /> : <ArrowRight />}
    </SmartLink>
  );
}

/** A titled block of text separated by a hairline, used in grids. */
export function InfoCard({ card }: { card: Card }) {
  return (
    <article className={`flex h-full flex-col border-t-2 pt-5 ${card.placeholder ? "border-dashed border-ieee-orange" : "border-ieee-navy"}`}>
      {card.placeholder && <div className="mb-3"><PlaceholderBadge /></div>}
      {card.image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={card.image} alt="" className="mb-4 h-14 w-auto self-start" />
      )}
      {card.tag && <p className="text-sm font-semibold text-muted">{card.tag}</p>}
      <h3 className="text-lg font-bold text-ieee-navy">{card.title}</h3>
      <p className="mt-2 flex-1 leading-relaxed text-muted">{card.description}</p>
      {card.href && <TextLink href={card.href} className="mt-4 text-sm">{card.linkLabel ?? "Learn more"}</TextLink>}
    </article>
  );
}

function initials(name: string) {
  return name.split(/\s+/).filter(Boolean).slice(0, 2).map((p) => p[0]?.toUpperCase()).join("");
}

export function OfficerCard({ person }: { person: Officer }) {
  return (
    <article className="flex items-start gap-4">
      {person.photo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={person.photo} alt="" className="h-16 w-16 shrink-0 rounded-full object-cover" />
      ) : (
        <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-surface text-lg font-semibold text-ieee-navy" aria-hidden="true">
          {initials(person.name)}
        </span>
      )}
      <div className="min-w-0 pt-1">
        {person.placeholder && <div className="mb-1"><PlaceholderBadge /></div>}
        <h3 className="font-bold text-ieee-navy">{person.name}</h3>
        <p className="text-sm text-ink">{person.role}</p>
        {person.affiliation && <p className="text-sm text-muted">{person.affiliation}</p>}
        {(person.linkedin || person.email) && (
          <div className="mt-2 flex gap-3">
            {person.linkedin && (
              <a href={person.linkedin} className="text-brand hover:text-ieee-navy" aria-label={`${person.name} on LinkedIn`}><LinkedIn /></a>
            )}
            {person.email && (
              <a href={`mailto:${person.email}`} className="text-brand hover:text-ieee-navy" aria-label={`Email ${person.name}`}><Mail className="h-5 w-5" /></a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
