import type { Metadata } from "next";
import { site } from "@/content";
import { External } from "@/components/Icons";
import { Container, PageBanner, SectionHeading } from "@/components/ui";

export const metadata: Metadata = { title: "Resources" };

export default function Resources() {
  return (
    <>
      <PageBanner title="Resources" intro="Useful links for members, volunteers and anyone curious about our field." />
      <Container className="space-y-14 py-14">
        {site.resources.map((r) => (
          <section key={r.category}>
            <SectionHeading title={r.category} />
            <ul className="mt-6 grid border-t border-rule sm:grid-cols-2 sm:gap-x-10">
              {r.items.map((i) => (
                <li key={i.url} className="border-b border-rule">
                  <a href={i.url} className="group block py-4">
                    <span className="inline-flex items-center gap-1.5 font-semibold text-brand group-hover:underline">{i.title}<External /></span>
                    <span className="mt-0.5 block text-sm leading-relaxed text-muted">{i.description}</span>
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
