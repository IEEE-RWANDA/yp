// The unit-specific extra page: /programs (YP), /societies (joint chapter) or /projects (SIGHT).
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { site } from "@/content";
import { Container, InfoCard, PageBanner } from "@/components/ui";
import { BodiesSection } from "@/components/Sections";

export const dynamicParams = false;

export function generateStaticParams() {
  return site.extraPage ? [{ slug: site.extraPage.slug }] : [{ slug: "_none" }];
}

export const metadata: Metadata = { title: site.extraPage?.title ?? "Page" };

export default async function ExtraPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = site.extraPage;
  if (!page || page.slug !== slug) notFound();
  return (
    <>
      <PageBanner title={page.title} intro={page.intro} />
      {page.slug === "societies" && site.bodies ? (
        <BodiesSection />
      ) : (
        <Container className="py-14">
          <div className="grid gap-x-10 gap-y-12 md:grid-cols-2">
            {page.cards.map((c) => <InfoCard key={c.title} card={c} />)}
          </div>
        </Container>
      )}
    </>
  );
}
