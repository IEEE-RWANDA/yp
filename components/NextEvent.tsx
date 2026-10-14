"use client";
// The band under the home page photo: the next event, or the latest one if nothing is scheduled.
// Worked out in the visitor's browser, so it moves on by itself once an event's date has passed.
import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/content";
import { formatDate, todayKigali } from "@/lib/dates";
import { ArrowRight, External } from "./Icons";
import { Container } from "./ui";
import { splitEvents } from "./EventList";

export default function NextEvent({ buildDate }: { buildDate: string }) {
  const [today, setToday] = useState(buildDate);
  useEffect(() => setToday(todayKigali()), []);

  const { upcoming, past } = splitEvents(site.events, today);
  const e = upcoming[0] ?? past[0];
  if (!e) return null;
  const isNext = e === upcoming[0];
  const date = formatDate(e.date)?.long ?? "Date to be announced";

  return (
    <section aria-label={isNext ? "Next event" : "Latest event"} className="border-b border-rule bg-surface">
      <Container className="flex flex-col gap-3 py-5 md:flex-row md:items-center md:gap-8">
        <p className="shrink-0 border-l-4 border-accent pl-3 text-sm font-bold uppercase tracking-wider text-ieee-navy">
          {isNext ? "Next event" : "Latest event"}
        </p>
        <div className="min-w-0 flex-1">
          <p className="font-semibold text-ieee-navy">{e.title}</p>
          <p className="text-sm text-muted">{date} · {e.location}</p>
        </div>
        <div className="flex shrink-0 gap-5 text-sm font-semibold">
          {isNext && e.registerUrl && (
            <a href={e.registerUrl} className="inline-flex items-center gap-1.5 text-brand hover:underline">Register <External /></a>
          )}
          {!isNext && e.photosUrl && (
            <a href={e.photosUrl} className="inline-flex items-center gap-1.5 text-brand hover:underline">Photos <External /></a>
          )}
          <Link href="/events/" className="inline-flex items-center gap-1.5 text-brand hover:underline">All events <ArrowRight /></Link>
        </div>
      </Container>
    </section>
  );
}
