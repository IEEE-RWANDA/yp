import type { MetadataRoute } from "next";
import { site } from "@/content";
import { mainNav } from "@/lib/nav";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return mainNav.map((n) => ({ url: new URL(n.href, site.siteUrl).toString() }));
}
