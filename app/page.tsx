// HOME PAGE — the text comes from the unit's content file (content/*.ts).
import Link from "next/link";
import { site } from "@/content";
import { todayKigali } from "@/lib/dates";
import EventList from "@/components/EventList";
import { ArrowRight } from "@/components/Icons";
import HeroSlider from "@/components/HeroSlider";
import { ButtonLink, Container, InfoCard, OfficerCard, SectionHeading } from "@/components/ui";
import { BodiesSection, LinkedInBand } from "@/components/Sections";

const buildDate = todayKigali();

export default function Home() {
  const exec = site.officers.filter((o) => o.group === site.officers[0]?.group).slice(0, 4);

  return (
    <>
      <HeroSlider />

      {/* Key numbers — coloured tiles, as in the IEEE template */}
      <section>
        <Container className="grid grid-cols-2 gap-4 py-12 lg:grid-cols-4">
          {site.stats.map((s) => (
            <div key={s.label} className="rounded-md bg-brand px-4 py-6 text-center text-white shadow-sm">
              <p className="font-condensed text-4xl font-bold">{s.value}</p>
              <p className="mt-1 text-sm text-white/90">{s.label}</p>
            </div>
          ))}
        </Container>
      </section>

      {/* About the unit + What we do, in a centred card */}
      <section className="bg-surface">
        <Container className="py-16">
          <div className="mx-auto max-w-5xl rounded-xl bg-white px-6 py-12 text-center shadow-md sm:px-12">
            <h2 className="font-condensed text-3xl font-bold text-brand sm:text-4xl">{site.fullName}</h2>
            <div className="mx-auto mt-4 h-0.5 w-full max-w-4xl bg-brand" />
            {site.about.intro.map((p) => (
              <p key={p.slice(0, 20)} className="mx-auto mt-6 max-w-4xl text-lg leading-relaxed text-slate-700">{p}</p>
            ))}
            <h3 className="mt-12 font-condensed text-2xl font-bold text-brand">What We Do</h3>
            <ul className="mt-6 flex flex-wrap justify-center gap-3">
              {site.whatWeDo.map((w) => (
                <li key={w} className="w-full rounded-md border-b-4 border-accent bg-surface px-5 py-4 text-slate-800 sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.33%-0.75rem)]">
                  {w}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <ButtonLink href="/about/">More about us</ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      {/* Upcoming events */}
      <section>
        <Container className="py-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading title="Upcoming Events" />
            <Link href="/events/" className="inline-flex items-center gap-1 font-bold text-brand hover:underline">All events <ArrowRight /></Link>
          </div>
          <div className="mt-8">
            <EventList events={site.events} show="upcoming" buildDate={buildDate} limit={3} emptyText="New events will be announced soon — follow us on LinkedIn." />
          </div>
        </Container>
      </section>

      {/* Focus cards — or, for the joint chapter, the IEEE / PES / PELS / IAS section */}
      {site.bodies ? (
        <BodiesSection />
      ) : (
        <>
      <section className="bg-surface">
        <Container className="py-20">
          <SectionHeading eyebrow={site.focus.eyebrow} title={site.focus.heading} intro={site.focus.intro} />
          <div className={`mt-10 grid gap-6 sm:grid-cols-2 ${site.focus.cards.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"}`}>
            {site.focus.cards.map((c) => <InfoCard key={c.title} card={c} />)}
          </div>
        </Container>
      </section>

        </>
      )}

      {/* Recent events */}
      <section className="bg-surface">
        <Container className="py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading title="Recent Activities" />
            <Link href="/events/" className="inline-flex items-center gap-1 font-bold text-brand hover:underline">All events <ArrowRight /></Link>
          </div>
          <div className="mt-10">
            <EventList events={site.events} show="past" buildDate={buildDate} limit={3} emptyText="Our first event reports will appear here." />
          </div>
        </Container>
      </section>

      {/* Leadership */}
      <section>
        <Container className="py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading title="Meet the Team" />
            <Link href="/team/" className="inline-flex items-center gap-1 font-bold text-brand hover:underline">Full team <ArrowRight /></Link>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-5 lg:grid-cols-4">
            {exec.map((o, i) => <OfficerCard key={`${o.role}-${i}`} person={o} />)}
          </div>
        </Container>
      </section>

      {/* Partners */}
      {site.partners.length > 0 && (
        <section>
          <Container className="py-14">
            <p className="text-center text-sm font-bold uppercase tracking-wider text-slate-500">Part of and working with</p>
            <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
              {site.partners.map((p) => (
                <li key={p.name}>
                  {p.logo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={p.logo} alt={p.name} className="h-12 w-auto" />
                  ) : p.url ? (
                    <a href={p.url} className="font-condensed text-xl font-bold text-ieee-gray hover:text-ieee-blue">{p.name}</a>
                  ) : (
                    <span className="font-condensed text-xl font-bold text-ieee-gray">{p.name}</span>
                  )}
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      <LinkedInBand />

      {/* Call to action */}
      <section>
        <Container>
          <div className="circuit-bg flex flex-col items-start justify-between gap-6 rounded-2xl px-8 py-12 text-white md:flex-row md:items-center">
            <div>
              <h2 className="font-condensed text-4xl font-bold">Ready to get involved?</h2>
              <p className="mt-2 max-w-xl text-white/90">{site.getInvolved.eligibility}</p>
            </div>
            <ButtonLink href="/get-involved/" variant="white">Get involved</ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
