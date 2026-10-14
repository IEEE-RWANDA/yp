import type { Metadata } from "next";
import { site } from "@/content";
import { todayKigali } from "@/lib/dates";
import EventList from "@/components/EventList";
import { Container, PageBanner, SectionHeading } from "@/components/ui";

export const metadata: Metadata = { title: "Events" };
const buildDate = todayKigali();

export default function Events() {
  return (
    <>
      <PageBanner title="Events" intro="Talks, workshops, panels and visits. Registration for most events is through IEEE vTools." />
      <Container className="space-y-16 py-16">
        <section>
          <SectionHeading title="Upcoming events" />
          <div className="mt-8">
            <EventList events={site.events} show="upcoming" buildDate={buildDate} emptyText="No upcoming events right now — follow us on LinkedIn to hear about the next one." />
          </div>
        </section>
        <section>
          <SectionHeading title="Past events" />
          <div className="mt-8">
            <EventList events={site.events} show="past" buildDate={buildDate} emptyText="Event reports will appear here after our first events." />
          </div>
        </section>
      </Container>
    </>
  );
}
