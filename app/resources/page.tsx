import type { Metadata } from "next";
import { site } from "@/content";
import { External } from "@/components/Icons";
import { Container, PageBanner, SectionHeading } from "@/components/ui";

export const metadata: Metadata = { title: "Resources" };

export default function Resources() {
  return (
    <>
      <PageBanner title="Resources" intro="Useful links for members, volunteers and anyone curious about our field." />
      <Container className="space-y-14 py-16">
        {site.resources.map((r) => (
          <section key={r.category}>
            <SectionHeading title={r.category} />
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {r.items.map((i) => (
                <li key={i.url}>
                  <a href={i.url} className="group block h-full rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
                    <span className="flex items-center gap-2 font-condensed text-lg font-bold text-ieee-blue group-hover:underline">{i.title}<External /></span>
                    <span className="mt-1 block text-sm text-slate-600">{i.description}</span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </Container>
    </>
  );
}
