"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import { isExternal } from "@/lib/nav";

export type Entry = { title: string; text: string; href: string; kind: string };

export default function SiteSearch({ entries }: { entries: Entry[] }) {
  const [q, setQ] = useState("");
  const results = useMemo(() => {
    const words = q.toLowerCase().split(/\s+/).filter(Boolean);
    if (!words.length) return [];
    return entries.filter((e) => {
      const hay = `${e.title} ${e.text} ${e.kind}`.toLowerCase();
      return words.every((w) => hay.includes(w));
    });
  }, [q, entries]);

  return (
    <div className="max-w-3xl">
      <form role="search" onSubmit={(e) => e.preventDefault()} className="flex gap-2">
        <label htmlFor="site-search" className="sr-only">Search terms</label>
        <input
          id="site-search"
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          autoFocus
          className="w-full rounded border-2 border-slate-300 px-4 py-3 text-lg focus:border-brand focus:outline-none"
        />
        <button type="submit" className="rounded bg-brand px-6 font-condensed text-lg font-bold uppercase text-white">Search</button>
      </form>
      {q && <p className="mt-4 text-sm text-slate-500">{results.length} result{results.length === 1 ? "" : "s"}</p>}
      <ul className="mt-4 divide-y divide-slate-200">
        {results.map((r, i) => (
          <li key={`${r.href}-${i}`} className="py-4">
            <span className="text-xs font-bold uppercase tracking-wide text-ieee-gray">{r.kind}</span>
            {isExternal(r.href) ? (
              <a href={r.href} className="block font-condensed text-xl font-bold text-brand hover:underline">{r.title}</a>
            ) : (
              <Link href={r.href} className="block font-condensed text-xl font-bold text-brand hover:underline">{r.title}</Link>
            )}
            <p className="mt-1 line-clamp-2 text-slate-600">{r.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
