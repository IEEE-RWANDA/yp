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
  compact?: boolean;
};

export function splitEvents(events: EventItem[], today: string) {
  const upcoming = events
    .filter((e) => !e.date || e.date >= today)
    .sort((a, b) => (a.date ?? "9999").localeCompare(b.date ?? "9999"));
  const past = events.filter((e) => e.date && e.date < today).sort((a, b) => b.date!.localeCompare(a.date!));
  return { upcoming, past };
}

function EventCard({ e, isPast, compact }: { e: EventItem; isPast: boolean; compact?: boolean }) {
  const d = formatDate(e.date);
  return (
    <article className={`flex gap-5 rounded-lg border bg-white p-5 shadow-sm ${e.placeholder ? "border-dashed border-ieee-orange" : "border-slate-200"}`}>
      <div className={`flex w-20 shrink-0 flex-col items-center justify-center self-start rounded-md py-3 text-center ${isPast ? "bg-slate-100 text-slate-600" : "bg-ieee-blue text-white"}`}>
        {d ? (
          <>
            <span className="font-condensed text-4xl font-bold leading-none">{d.day}</span>
            <span className="mt-1 text-xs font-bold uppercase tracking-wider">{d.month}</span>
            <span className="text-xs opacity-80">{d.year}</span>
          </>
        ) : (
          <span className="px-1 text-xs font-bold uppercase leading-tight">Date<br />TBA</span>
        )}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded bg-surface px-2 py-0.5 text-xs font-bold uppercase tracking-wide text-ieee-blue">{e.type}</span>
          {!isPast && <span className="rounded bg-accent px-2 py-0.5 text-xs font-bold uppercase tracking-wide text-on-accent">Upcoming</span>}
          {e.placeholder && <PlaceholderBadge />}
        </div>
        <h3 className="mt-2 font-condensed text-xl font-bold text-brand">{e.title}</h3>
        <p className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-500">
          {e.time && <span className="inline-flex items-center gap-1"><Clock />{e.time}</span>}
          <span className="inline-flex items-center gap-1"><Pin />{e.location}</span>
        </p>
        {e.organiser && <p className="mt-1 text-sm text-slate-500">Organised by {e.organiser}</p>}
        {!compact && <p className="mt-3 leading-relaxed text-slate-600">{e.summary}</p>}
        <div className="mt-3 flex flex-wrap gap-4 text-sm font-bold">
          {!isPast && e.registerUrl && (
            <a href={e.registerUrl} className="inline-flex items-center gap-1 rounded bg-ieee-blue px-3 py-1.5 text-white hover:bg-ieee-navy">Register <External /></a>
          )}
          {e.photosUrl && <a href={e.photosUrl} className="inline-flex items-center gap-1 text-ieee-blue hover:underline">Photos <External /></a>}
          {e.reportUrl && <a href={e.reportUrl} className="inline-flex items-center gap-1 text-ieee-blue hover:underline">Event report <External /></a>}
        </div>
      </div>
    </article>
  );
}

export default function EventList({ events, show, buildDate, limit, emptyText, compact }: Props) {
  const [today, setToday] = useState(buildDate);
  useEffect(() => setToday(todayKigali()), []);

  const { upcoming, past } = splitEvents(events, today);
  const list = (show === "upcoming" ? upcoming : past).slice(0, limit);

  if (list.length === 0) {
    return <p className="rounded-lg border border-dashed border-slate-300 p-6 text-slate-500">{emptyText ?? "Nothing here yet."}</p>;
  }
  return (
    <div className="grid gap-5">
      {list.map((e) => (
        <EventCard key={`${e.title}-${e.date ?? "tba"}`} e={e} isPast={show === "past"} compact={compact} />
      ))}
    </div>
  );
}
