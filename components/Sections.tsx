// Larger page sections shared by several pages.
import { site } from "@/content";
import { Container, SectionHeading, TextLink } from "./ui";

/** "About IEEE, PES, PELS & IAS" — what each parent organisation is, with a Join link and a link to its website. */
export function BodiesSection() {
  const b = site.bodies;
  if (!b) return null;
  return (
    <section className="border-t border-rule">
      <Container className="py-16 sm:py-20">
        <SectionHeading title={b.heading} intro={b.intro} />
        <div className="mt-12 grid gap-x-16 gap-y-14 md:grid-cols-2">
          {b.items.map((it) => (
            <article key={it.name} className="flex flex-col border-t border-rule pt-6">
              <div className="flex h-16 items-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={it.logo} alt={it.name} className={`${it.name === "IEEE" ? "h-10" : "h-16"} w-auto object-contain`} />
              </div>
              <h3 className="mt-5 text-xl font-bold text-ieee-navy">{it.question}</h3>
              <p className="mt-3 flex-1 leading-relaxed text-ink">{it.description}</p>
              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                <TextLink href={it.join.href}>{it.join.label}</TextLink>
                <TextLink href={it.home}>{new URL(it.home).hostname.replace(/^www\./, "")}</TextLink>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
