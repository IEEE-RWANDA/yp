import type { Metadata } from "next";
import { site } from "@/content";
import { ButtonLink, Container, PageBanner } from "@/components/ui";

export const metadata: Metadata = { title: "Contact" };

export default function Contact() {
  const c = site.contact;
  return (
    <>
      <PageBanner title="Contact" intro="Questions, partnership ideas, speaker suggestions or volunteering — we'd like to hear from you." />
      <Container className="py-14">
        <dl className="grid gap-8 border-t border-rule pt-8 sm:grid-cols-3">
          <div>
            <dt className="font-bold text-ieee-navy">Email</dt>
            <dd className="mt-1"><a href={`mailto:${c.email}`} className="break-all text-brand hover:underline">{c.email}</a></dd>
          </div>
          <div>
            <dt className="font-bold text-ieee-navy">Location</dt>
            <dd className="mt-1 text-ink">{c.address}</dd>
          </div>
          <div>
            <dt className="font-bold text-ieee-navy">LinkedIn</dt>
            <dd className="mt-1">
              {site.social.linkedin ? <a href={site.social.linkedin} className="text-brand hover:underline">Follow {site.shortName}</a> : <span className="text-muted">Coming soon</span>}
            </dd>
          </div>
        </dl>
        {c.formUrl && <div className="mt-10"><ButtonLink href={c.formUrl}>Send us a message</ButtonLink></div>}
      </Container>
    </>
  );
}
