// Optional announcement box under the home page photo (set "announcement" in the content file).
import Link from "next/link";
import { site } from "@/content";
import { isExternal } from "@/lib/nav";
import { ArrowRight, External } from "./Icons";
import { Container } from "./ui";

export default function Announcement() {
  const a = site.announcement;
  if (!a) return null;
  const cls = "mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:underline";
  return (
    <section aria-label={a.label} className="border-b border-rule bg-white">
      <Container className="py-8">
        <div className="border-l-4 border-accent pl-5">
          <p className="text-sm font-bold uppercase tracking-wider text-ieee-navy">{a.label}</p>
          <h2 className="mt-1 text-xl font-bold text-ieee-navy sm:text-2xl">{a.title}</h2>
          <p className="mt-2 max-w-3xl leading-relaxed text-ink">{a.text}</p>
          {a.link && (isExternal(a.link.href)
            ? <a href={a.link.href} className={cls}>{a.link.label} <External /></a>
            : <Link href={a.link.href} className={cls}>{a.link.label} <ArrowRight /></Link>)}
        </div>
      </Container>
    </section>
  );
}
