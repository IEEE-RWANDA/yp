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
      <Container className="space-y-14 py-14">
        <section>
          <SectionHeading title="Upcoming events" />
          <div className="mt-6">
            <EventList events={site.events} show="upcoming" buildDate={buildDate} emptyText="No events are scheduled right now. Follow us on LinkedIn to hear about the next one." />
          </div>
        </section>
        <section>
          <SectionHeading title="Past events" />
          <div className="mt-6">
            <EventList events={site.events} show="past" buildDate={buildDate} emptyText="Reports from our first events will appear here." />
          </div>
        </section>
      </Container>
    </>
  );
}
