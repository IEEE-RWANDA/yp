"use client";
// Lists events. Upcoming vs past is worked out in the visitor's browser,
// so events move to "Past" automatically once their date has passed.
import { useEffect, useState } from "react";
import type { EventItem } from "@/content/types";
import { formatDate, todayKigali } from "@/lib/dates";
import { Clock, External, Pin } from "./Icons";
import { PlaceholderBadge } from "./ui";

type Props = {
  events: EventItem[];
  show: "upcoming" | "past";
  buildDate: string;
  limit?: number;
  emptyText?: string;
  /** Leave out the summary (home page). */
  compact?: boolean;
};

export function splitEvents(events: EventItem[], today: string) {
  const upcoming = events
    .filter((e) => !e.date || e.date >= today)
    .sort((a, b) => (a.date ?? "9999").localeCompare(b.date ?? "9999"));
  const past = events.filter((e) => e.date && e.date < today).sort((a, b) => b.date!.localeCompare(a.date!));
  return { upcoming, past };
}

function EventRow({ e, isPast, compact }: { e: EventItem; isPast: boolean; compact?: boolean }) {
  const d = formatDate(e.date);
  return (
    <li className="grid gap-x-8 gap-y-2 py-6 sm:grid-cols-[7rem_1fr]">
      <p className="text-ieee-navy">
        {d ? (
          <>
            <span className="block text-3xl font-bold leading-none">{d.day}</span>
            <span className="text-sm font-semibold">{d.month} {d.year}</span>
          </>
        ) : (
          <span className="text-sm font-semibold">Date to be announced</span>
        )}
      </p>
      <div className="min-w-0">
        {e.placeholder && <div className="mb-2"><PlaceholderBadge /></div>}
        <p className="text-sm font-semibold text-muted">{e.type}</p>
        <h3 className="mt-0.5 text-lg font-bold leading-snug text-ieee-navy">{e.title}</h3>
        <p className="mt-1.5 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted">
          {e.time && <span className="inline-flex items-center gap-1"><Clock />{e.time}</span>}
          <span className="inline-flex items-center gap-1"><Pin />{e.location}</span>
          {e.organiser && <span>Organised by {e.organiser}</span>}
        </p>
        {!compact && <p className="mt-3 max-w-3xl leading-relaxed text-ink">{e.summary}</p>}
        {((!isPast && e.registerUrl) || e.photosUrl || e.reportUrl) && (
          <div className="mt-3 flex flex-wrap gap-5 text-sm font-semibold">
            {!isPast && e.registerUrl && (
              <a href={e.registerUrl} className="inline-flex items-center gap-1.5 rounded-sm bg-brand px-3 py-1.5 text-white hover:bg-ieee-navy">Register <External /></a>
            )}
            {e.photosUrl && <a href={e.photosUrl} className="inline-flex items-center gap-1.5 text-brand hover:underline">Photos <External /></a>}
            {e.reportUrl && <a href={e.reportUrl} className="inline-flex items-center gap-1.5 text-brand hover:underline">Event report <External /></a>}
          </div>
        )}
      </div>
    </li>
  );
}

export default function EventList({ events, show, buildDate, limit, emptyText, compact }: Props) {
  const [today, setToday] = useState(buildDate);
  useEffect(() => setToday(todayKigali()), []);

  const { upcoming, past } = splitEvents(events, today);
  const list = (show === "upcoming" ? upcoming : past).slice(0, limit);

  if (list.length === 0) {
    return <p className="border-y border-rule py-6 text-muted">{emptyText ?? "Nothing here yet."}</p>;
  }
  return (
    <ul className="divide-y divide-rule border-y border-rule">
      {list.map((e) => (
        <EventRow key={`${e.title}-${e.date ?? "tba"}`} e={e} isPast={show === "past"} compact={compact} />
      ))}
    </ul>
  );
}
