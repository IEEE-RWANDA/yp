// Larger page sections shared by several pages.
import { site } from "@/content";
import { External, LinkedIn } from "./Icons";
import { Container } from "./ui";

/** "About IEEE, PES, PELS & IAS" — what each parent organisation is, with a Join button and a link to its website. */
export function BodiesSection({ tinted = false }: { tinted?: boolean }) {
  const b = site.bodies;
  if (!b) return null;
  return (
    <section className={tinted ? "bg-surface" : ""}>
      <Container className="py-20">
        <span className="inline-block border-2 border-accent bg-white px-4 py-2 text-sm font-bold uppercase tracking-wide text-ieee-navy">
          {b.eyebrow}
        </span>
        <h2 className="mt-6 font-condensed text-4xl font-bold text-brand sm:text-4xl">{b.heading}</h2>
        {b.intro && <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-600">{b.intro}</p>}

        <div className="mt-12 grid gap-x-16 gap-y-14 md:grid-cols-2">
          {b.items.map((it) => (
            <article key={it.name} className="flex flex-col">
              <div className="flex h-20 items-end">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={it.logo} alt={it.name} className={`${it.name === "IEEE" ? "h-12" : "h-20"} w-auto object-contain`} />
              </div>
              <h3 className="mt-5 font-condensed text-[1.7rem] font-bold text-brand">{it.question}</h3>
              <p className="mt-3 flex-1 text-lg leading-relaxed text-slate-700">{it.description}</p>
              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
                <a href={it.join.href} className="inline-flex items-center gap-2 rounded bg-ieee-blue px-5 py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-ieee-navy">
                  {it.join.label} <External />
                </a>
                <a href={it.home} className="inline-flex items-center gap-1 text-sm font-bold text-ieee-blue hover:underline">
                  Visit {new URL(it.home).hostname.replace(/^www\./, "")} <External />
                </a>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

/** "Follow us on LinkedIn" band. */
export function LinkedInBand() {
  const url = site.social.linkedin;
  if (!url) return null;
  return (
    <section>
      <Container className="py-14">
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm md:flex-row md:items-center">
          <div className="flex items-center gap-5">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-ieee-blue text-white">
              <LinkedIn className="h-7 w-7" />
            </span>
            <div>
              <h2 className="font-condensed text-[1.7rem] font-bold text-brand">Follow us on LinkedIn</h2>
              <p className="mt-1 text-slate-600">Event announcements, photos and opportunities from {site.shortName}.</p>
            </div>
          </div>
          <a href={url} className="inline-flex items-center gap-2 rounded bg-ieee-blue px-5 py-3 text-sm font-bold text-white hover:bg-ieee-navy">
            Follow {site.shortName} <External />
          </a>
        </div>
      </Container>
    </section>
  );
}
