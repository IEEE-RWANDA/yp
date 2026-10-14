import type { Metadata } from "next";
import { site } from "@/content";
import { Check } from "@/components/Icons";
import { Container, PageBanner, SectionHeading } from "@/components/ui";
import { BodiesSection } from "@/components/Sections";

export const metadata: Metadata = { title: "About" };

export default function About() {
  const a = site.about;
  return (
    <>
      <PageBanner title="About" intro={site.description} />
      <Container className="grid gap-12 py-16 lg:grid-cols-[1.6fr_1fr]">
        <div>
          <SectionHeading title={a.heading} />
          {a.intro.map((p) => <p key={p.slice(0, 20)} className="mt-5 text-lg leading-relaxed text-slate-700">{p}</p>)}

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            <div className="rounded-lg border-l-4 border-ieee-blue bg-surface p-6">
              <h2 className="font-condensed text-[1.7rem] font-bold text-brand">Mission</h2>
              <p className="mt-2 leading-relaxed text-slate-700">{a.mission}</p>
            </div>
            <div className="rounded-lg border-l-4 border-accent bg-surface p-6">
              <h2 className="font-condensed text-[1.7rem] font-bold text-brand">Vision</h2>
              <p className="mt-2 leading-relaxed text-slate-700">{a.vision}</p>
            </div>
          </div>

          <div className="mt-12 grid gap-10 sm:grid-cols-2">
            {[{ t: "Goals", items: a.goals }, { t: "Objectives", items: a.objectives }].map((g) => (
              <div key={g.t}>
                <h2 className="font-condensed text-[1.7rem] font-bold text-brand">{g.t}</h2>
                <ul className="mt-4 space-y-3">
                  {g.items.map((i) => (
                    <li key={i} className="flex gap-3 text-slate-700"><Check className="mt-0.5 h-5 w-5 text-ieee-blue" />{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-lg border border-slate-200 p-6 shadow-sm">
            <h2 className="font-condensed text-xl font-bold text-brand">Where we sit in IEEE</h2>
            <ol className="mt-4 space-y-2">
              {a.parent.map((p, i) => (
                <li key={p} className="flex items-center gap-3" style={{ paddingLeft: `${i * 14}px` }}>
                  <span className={`h-2.5 w-2.5 rounded-full ${i === a.parent.length - 1 ? "bg-accent" : "bg-ieee-blue"}`} />
                  <span className={i === a.parent.length - 1 ? "font-bold text-ieee-navy" : "text-slate-700"}>{p}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="rounded-lg border border-slate-200 p-6 shadow-sm">
            <h2 className="font-condensed text-xl font-bold text-brand">What we do</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
              {site.whatWeDo.map((w) => <li key={w}>{w}</li>)}
            </ul>
          </div>
        </aside>
      </Container>
      <BodiesSection tinted />
    </>
  );
}
