import type { Metadata } from "next";
import { site } from "@/content";
import { BodiesSection } from "@/components/Sections";
import { Container, PageBanner, SmartLink } from "@/components/ui";

export const metadata: Metadata = { title: "About" };

export default function About() {
  const a = site.about;
  return (
    <>
      <PageBanner title="About" />
      <Container className="grid gap-14 py-14 lg:grid-cols-[1.7fr_1fr] lg:gap-20">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-ieee-navy sm:text-3xl">{a.heading}</h2>
          {a.intro.map((p) => <p key={p.slice(0, 20)} className="mt-4 text-lg leading-relaxed text-ink">{p}</p>)}

          <dl className="mt-12 grid gap-8 border-t border-rule pt-8 sm:grid-cols-2">
            <div>
              <dt className="text-lg font-bold text-ieee-navy">Mission</dt>
              <dd className="mt-2 leading-relaxed text-ink">{a.mission}</dd>
            </div>
            <div>
              <dt className="text-lg font-bold text-ieee-navy">Vision</dt>
              <dd className="mt-2 leading-relaxed text-ink">{a.vision}</dd>
            </div>
          </dl>

          <div className="mt-12 grid gap-10 border-t border-rule pt-8 sm:grid-cols-2">
            {[{ t: "Goals", items: a.goals }, { t: "Objectives", items: a.objectives }].map((g) => (
              <div key={g.t}>
                <h2 className="text-lg font-bold text-ieee-navy">{g.t}</h2>
                <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed text-ink marker:text-muted">
                  {g.items.map((i) => <li key={i}>{i}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <aside className="space-y-10">
          <div>
            <h2 className="text-lg font-bold text-ieee-navy">Where we sit in IEEE</h2>
            <ol className="mt-3 border-l border-rule">
              {a.parent.map((p, i) => (
                <li key={p} className={`py-1.5 pl-4 ${i === a.parent.length - 1 ? "-ml-px border-l-2 border-accent font-semibold text-ieee-navy" : "text-ink"}`}>{p}</li>
              ))}
            </ol>
          </div>
          <div>
            <h2 className="text-lg font-bold text-ieee-navy">What we do</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed text-ink marker:text-muted">
              {site.whatWeDo.map((w) => <li key={w}>{w}</li>)}
            </ul>
          </div>
          {site.partners.length > 0 && (
            <div>
              <h2 className="text-lg font-bold text-ieee-navy">Partners</h2>
              <ul className="mt-3 space-y-2 text-ink">
                {site.partners.map((p) => (
                  <li key={p.name}>{p.url ? <SmartLink href={p.url} className="text-brand hover:underline">{p.name}</SmartLink> : p.name}</li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </Container>
      <BodiesSection />
    </>
  );
}
