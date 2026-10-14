import type { Metadata } from "next";
import { site } from "@/content";
import { Container, OfficerCard, PageBanner, SectionHeading } from "@/components/ui";

export const metadata: Metadata = { title: "Team" };

export default function Team() {
  const groups = [...new Set(site.officers.map((o) => o.group))];
  return (
    <>
      <PageBanner title="Team" intro={`The volunteers who lead ${site.shortName}. Officers serve one-year terms.`} />
      <Container className="space-y-14 py-14">
        {groups.map((g) => (
          <section key={g}>
            <SectionHeading title={g} />
            <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {site.officers.filter((o) => o.group === g).map((o, i) => <OfficerCard key={`${o.role}-${i}`} person={o} />)}
            </div>
          </section>
        ))}
      </Container>
    </>
  );
}
