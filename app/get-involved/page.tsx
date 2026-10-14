import type { Metadata } from "next";
import { site } from "@/content";
import { ButtonLink, Container, PageBanner, SectionHeading, TextLink } from "@/components/ui";

export const metadata: Metadata = { title: "Get Involved" };

export default function GetInvolved() {
  const g = site.getInvolved;
  return (
    <>
      <PageBanner title="Get Involved" intro={g.intro} />
      <Container className="py-14">
        <SectionHeading title="How to join" intro={g.eligibility} />
        <ol className="mt-10 grid gap-x-8 gap-y-10 md:grid-cols-3">
          {g.steps.map((s, i) => (
            <li key={s.title} className="border-t-2 border-ieee-navy pt-5">
              <p className="text-sm font-semibold text-muted">Step {i + 1}</p>
              <h3 className="mt-1 text-lg font-bold text-ieee-navy">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-ink">{s.text}</p>
              {s.link && <TextLink href={s.link.href} className="mt-3 text-sm">{s.link.label}</TextLink>}
            </li>
          ))}
        </ol>

        <div className="mt-16 grid gap-12 border-t border-rule pt-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-ieee-navy">Member benefits</h2>
            <ul className="mt-5 list-disc space-y-2 pl-5 leading-relaxed text-ink marker:text-muted">
              {g.benefits.map((b) => <li key={b}>{b}</li>)}
            </ul>
          </div>
          <div className="bg-surface p-8">
            <h2 className="text-2xl font-bold tracking-tight text-ieee-navy">Volunteer with us</h2>
            <p className="mt-3 leading-relaxed text-ink">{g.volunteerText}</p>
            <div className="mt-6">
              <ButtonLink href={g.volunteerFormUrl ?? "/contact/"}>{g.volunteerFormUrl ? "Volunteer sign-up form" : "Contact the team"}</ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
