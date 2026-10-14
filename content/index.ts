// This website's content lives in content/yp.ts (plus content/shared.ts).
import content from "./yp";
import type { SiteContent } from "./types";

export const site: SiteContent = content;
export type { SiteContent };
