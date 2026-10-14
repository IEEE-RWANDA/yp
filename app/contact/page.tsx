import type { Metadata } from "next";
import { site } from "@/content";
import { LinkedIn, Mail, Pin } from "@/components/Icons";
import { ButtonLink, Container, PageBanner } from "@/components/ui";

export const metadata: Metadata = { title: "Contact" };

export default function Contact() {
  const c = site.contact;
  return (
    <>
      <PageBanner title="Contact" intro="Questions, partnership ideas, speaker suggestions or volunteering — we'd like to hear from you." />
      <Container className="grid gap-8 py-16 md:grid-cols-3">
        <div className="rounded-lg border border-slate-200 p-6 shadow-sm">
          <Mail className="h-7 w-7 text-ieee-blue" />
          <h2 className="mt-3 font-condensed text-xl font-bold text-brand">Email</h2>
          <a href={`mailto:${c.email}`} className="mt-1 block break-all font-semibold text-ieee-blue hover:underline">{c.email}</a>
        </div>
        <div className="rounded-lg border border-slate-200 p-6 shadow-sm">
          <Pin className="h-7 w-7 text-ieee-blue" />
          <h2 className="mt-3 font-condensed text-xl font-bold text-brand">Location</h2>
          <p className="mt-1 text-slate-700">{c.address}</p>
        </div>
        <div className="rounded-lg border border-slate-200 p-6 shadow-sm">
          <LinkedIn className="h-7 w-7 text-ieee-blue" />
          <h2 className="mt-3 font-condensed text-xl font-bold text-brand">Follow us</h2>
          {site.social.linkedin ? (
            <a href={site.social.linkedin} className="mt-1 block font-semibold text-ieee-blue hover:underline">LinkedIn page</a>
          ) : <p className="mt-1 text-slate-500">Coming soon</p>}
        </div>
        {c.formUrl && (
          <div className="md:col-span-3">
            <ButtonLink href={c.formUrl} variant="light">Send us a message</ButtonLink>
          </div>
        )}
      </Container>
    </>
  );
}
