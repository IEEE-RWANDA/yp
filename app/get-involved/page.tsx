import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content";
import { isExternal } from "@/lib/nav";
import { Check } from "@/components/Icons";
import { ButtonLink, Container, PageBanner, SectionHeading } from "@/components/ui";

export const metadata: Metadata = { title: "Get Involved" };

export default function GetInvolved() {
  const g = site.getInvolved;
  return (
    <>
      <PageBanner title="Get Involved" intro={g.intro} />
      <Container className="py-16">
        <SectionHeading title="How to join" intro={g.eligibility} />
        <ol className="mt-10 grid gap-6 md:grid-cols-3">
          {g.steps.map((s, i) => (
            <li key={s.title} className="relative rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ieee-blue font-condensed text-xl font-bold text-white">{i + 1}</span>
              <h3 className="mt-4 font-condensed text-xl font-bold text-brand">{s.title}</h3>
              <p className="mt-2 text-slate-600">{s.text}</p>
              {s.link && (isExternal(s.link.href)
                ? <a href={s.link.href} className="mt-3 inline-block text-sm font-bold text-ieee-blue hover:underline">{s.link.label} ↗</a>
                : <Link href={s.link.href} className="mt-3 inline-block text-sm font-bold text-ieee-blue hover:underline">{s.link.label} →</Link>)}
            </li>
          ))}
        </ol>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading title="Member benefits" />
            <ul className="mt-6 space-y-3">
              {g.benefits.map((b) => (
                <li key={b} className="flex gap-3 text-slate-700">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-on-accent"><Check className="h-4 w-4" /></span>{b}
                </li>
              ))}
            </ul>
          </div>
          <div className="circuit-bg rounded-xl p-8 text-white">
            <h2 className="font-condensed text-4xl font-bold">Volunteer with us</h2>
            <p className="mt-3 leading-relaxed text-white/90">{g.volunteerText}</p>
            <div className="mt-6">
              <ButtonLink href={g.volunteerFormUrl ?? "/contact/"} variant="white">{g.volunteerFormUrl ? "Volunteer sign-up form" : "Contact the team"}</ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
