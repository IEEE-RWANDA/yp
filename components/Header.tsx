"use client";
// Site header in the IEEE website-template layout (as used by IEEE R10 / PES chapter sites):
//   1. light meta-navigation bar with the IEEE-wide links
//   2. white bar: unit logos + unit name on the left, search + IEEE Master Brand on the right
//   3. full-width coloured menu bar
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/content";
import { mainNav, metaNavLeft, metaNavRight } from "@/lib/nav";
import { Close, Menu, Search } from "./Icons";
import Identifier, { MasterBrand } from "./Identifier";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href.replace(/\/$/, "")));

  return (
    <header>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-50 focus:bg-white focus:px-3 focus:py-2">
        Skip to content
      </a>

      {/* 1 · IEEE meta navigation — required on every IEEE site */}
      <nav aria-label="IEEE sites" className="border-b-2 border-brand bg-brand-tint text-brand">
        <div className="mx-auto flex min-h-8 max-w-6xl items-center justify-between gap-x-4 px-4 py-1 text-xs font-semibold sm:px-6">
          <ul className="flex min-w-0 items-center overflow-x-auto whitespace-nowrap [scrollbar-width:none]">
            {metaNavLeft.map((l, i) => (
              <li key={l.href} className="flex items-center">
                {i > 0 && <span className="mx-3 h-3.5 w-px bg-brand/40" aria-hidden="true" />}
                <a href={l.href} className="hover:underline">
                  {l.italic ? (<>IEEE <em>Xplore</em>® Digital Library</>) : l.label}
                </a>
              </li>
            ))}
          </ul>
          <ul className="flex shrink-0 items-center whitespace-nowrap">
            {metaNavRight.map((l, i) => (
              <li key={l.href} className="flex items-center">
                {i > 0 && <span className="mx-3 h-3.5 w-px bg-brand/40" aria-hidden="true" />}
                <a href={l.href} className="hover:underline">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* 2 · Logos, unit name, search, IEEE Master Brand */}
      <div className="bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-3 py-3 sm:gap-4 sm:px-6">
          <Link href="/" className="flex min-w-0 items-center gap-4 lg:gap-6" aria-label={`${site.fullName} — home`}>
            <Identifier />
            <span className="hidden text-xl font-bold leading-tight text-ieee-navy lg:block">
              {site.headerTitle.map((line) => (
                <span key={line} className="block">{line}</span>
              ))}
            </span>
          </Link>
          <div className="flex shrink-0 items-center">
            <Link href="/search/" className="hidden p-2 text-brand hover:text-ieee-navy sm:block" aria-label="Search this site">
              <Search className="h-6 w-6" />
            </Link>
            <span className="mx-3 hidden h-10 w-px bg-rule sm:block" aria-hidden="true" />
            <MasterBrand />
            <button
              type="button"
              className="ml-1 rounded p-2 text-brand lg:hidden"
              aria-expanded={open}
              aria-controls="main-menu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <Close /> : <Menu />}
              <span className="sr-only">Menu</span>
            </button>
          </div>
        </div>
      </div>

      {/* 3 · Main menu */}
      <nav aria-label="Main" className="sticky top-0 z-40 bg-brand shadow-sm">
        <ul
          id="main-menu"
          className={`mx-auto max-w-6xl px-2 sm:px-4 lg:flex lg:items-stretch lg:gap-1 ${open ? "block py-2" : "hidden"} lg:py-0`}
        >
          {mainNav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`block border-b-[3px] px-3 py-3 font-semibold text-white hover:bg-white/10 lg:py-3.5 ${
                  isActive(item.href) ? "border-accent" : "border-transparent"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="sm:hidden">
            <Link href="/search/" className="block px-3 py-3 font-semibold text-white">Search</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
