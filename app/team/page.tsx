import type { Metadata } from "next";
import { site } from "@/content";
import { Container, OfficerCard, PageBanner, SectionHeading } from "@/components/ui";

export const metadata: Metadata = { title: "Team" };

export default function Team() {
  const groups = [...new Set(site.officers.map((o) => o.group))];
  return (
    <>
      <PageBanner title="Team" intro="The volunteers who lead and run the group. Officers serve on a volunteer basis for one-year terms." />
      <Container className="space-y-16 py-16">
        {groups.map((g) => (
          <section key={g}>
            <SectionHeading title={g} />
            <div className="mt-8 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
              {site.officers.filter((o) => o.group === g).map((o, i) => <OfficerCard key={`${o.role}-${i}`} person={o} />)}
            </div>
          </section>
        ))}
      </Container>
    </>
  );
}
