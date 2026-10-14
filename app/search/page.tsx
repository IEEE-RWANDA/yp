import type { Metadata } from "next";
import { site } from "@/content";
import { COMMON_RESOURCES } from "@/content/shared";
import { Container, PageBanner } from "@/components/ui";
import SiteSearch, { type Entry } from "@/components/SiteSearch";

export const metadata: Metadata = { title: "Search" };

// Everything on the site that can be found by the search box, built from the content file.
function buildIndex(): Entry[] {
  const e: Entry[] = [
    { title: "About", text: [site.about.mission, site.about.vision, ...site.about.intro].join(" "), href: "/about/", kind: "Page" },
    { title: "Get involved", text: [site.getInvolved.intro, ...site.getInvolved.benefits].join(" "), href: "/get-involved/", kind: "Page" },
    { title: "Contact", text: `${site.contact.email} ${site.contact.address}`, href: "/contact/", kind: "Page" },
  ];
  if (site.extraPage) {
    e.push({ title: site.extraPage.title, text: site.extraPage.intro, href: `/${site.extraPage.slug}/`, kind: "Page" });
    site.extraPage.cards.forEach((c) => e.push({ title: c.title, text: c.description, href: `/${site.extraPage!.slug}/`, kind: site.extraPage!.title }));
  }
  site.bodies?.items.forEach((b) => e.push({ title: b.question, text: b.description, href: "/about/", kind: "About IEEE" }));
  site.events.forEach((ev) => e.push({ title: ev.title, text: `${ev.type} ${ev.location} ${ev.summary} ${ev.date ?? ""}`, href: "/events/", kind: "Event" }));
  site.officers.forEach((o) => e.push({ title: o.name, text: `${o.role} ${o.group} ${o.affiliation ?? ""}`, href: "/team/", kind: "Team" }));
  [...site.resources.flatMap((r) => r.items), ...COMMON_RESOURCES.items].forEach((r) =>
    e.push({ title: r.title, text: r.description, href: r.url, kind: "Resource" }),
  );
  return e;
}

export default function SearchPage() {
  return (
    <>
      <PageBanner title="Search" />
      <Container className="py-12">
        <SiteSearch entries={buildIndex()} />
      </Container>
    </>
  );
}
