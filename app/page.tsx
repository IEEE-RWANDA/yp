// HOME PAGE — the text comes from the unit's content file (content/*.ts).
import { site } from "@/content";
import { todayKigali } from "@/lib/dates";
import EventList from "@/components/EventList";
import Hero from "@/components/Hero";
import NextEvent from "@/components/NextEvent";
import { BodiesSection } from "@/components/Sections";
import { ButtonLink, Container, InfoCard, OfficerCard, SectionHeading, TextLink } from "@/components/ui";

const buildDate = todayKigali();

export default function Home() {
  const exec = site.officers.filter((o) => o.group === site.officers[0]?.group).slice(0, 4);
  const photo = site.aboutPhoto;

  return (
    <>
      <Hero />
      <NextEvent buildDate={buildDate} />

      <section>
        <Container className="py-16 sm:py-20">
          <div className={`grid gap-10 ${photo ? "lg:grid-cols-2 lg:items-center lg:gap-16" : "max-w-3xl"}`}>
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-ieee-navy sm:text-3xl">About us</h2>
              <p className="mt-4 text-lg leading-relaxed text-ink">{site.about.intro[0]}</p>
              <TextLink href="/about/" className="mt-6">More about us</TextLink>
            </div>
            {photo && (
              <figure>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={photo.image} alt={photo.alt} className="aspect-[4/3] w-full object-cover" style={{ objectPosition: photo.focus ?? "center" }} />
                {photo.credit && (
                  <figcaption className="mt-2 text-xs text-muted">
                    Photo: {photo.credit.url ? <a href={photo.credit.url} className="hover:underline">{photo.credit.name}</a> : photo.credit.name}
                  </figcaption>
                )}
              </figure>
            )}
          </div>

        </Container>
      </section>

      {site.bodies ? (
        <BodiesSection />
      ) : (
        <section className="border-t border-rule">
          <Container className="py-16 sm:py-20">
            <SectionHeading title={site.focus.heading} />
            <div className={`mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 ${site.focus.cards.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"}`}>
              {site.focus.cards.map((c) => <InfoCard key={c.title} card={c} />)}
            </div>
          </Container>
        </section>
      )}

      <section className="border-t border-rule">
        <Container className="py-16 sm:py-20">
          <SectionHeading title="Recent events" action={{ label: "All events", href: "/events/" }} />
          <div className="mt-8">
            <EventList events={site.events} show="past" buildDate={buildDate} limit={3} compact emptyText="Reports from our first events will appear here." />
          </div>
        </Container>
      </section>

      <section className="border-t border-rule">
        <Container className="py-16 sm:py-20">
          <SectionHeading title="Leadership" action={{ label: "Full team", href: "/team/" }} />
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {exec.map((o, i) => <OfficerCard key={`${o.role}-${i}`} person={o} />)}
          </div>
        </Container>
      </section>

      <section className="bg-surface">
        <Container className="flex flex-col gap-8 py-14 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-ieee-navy sm:text-3xl">Get involved</h2>
            <p className="mt-3 text-lg leading-relaxed text-ink">{site.getInvolved.eligibility}</p>
          </div>
          <div className="flex shrink-0 flex-wrap items-center gap-x-6 gap-y-3">
            <ButtonLink href="/get-involved/">How to join</ButtonLink>
            {site.social.linkedin && <TextLink href={site.social.linkedin}>Follow us on LinkedIn</TextLink>}
          </div>
        </Container>
      </section>
    </>
  );
}
