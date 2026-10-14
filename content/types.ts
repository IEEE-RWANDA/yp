// ─────────────────────────────────────────────────────────────
//  The shape of each unit's content file. You normally do NOT
//  need to edit this file — edit yp.ts, pes-ias-pels.ts or
//  sight.ts instead.
// ─────────────────────────────────────────────────────────────

export type Link = { label: string; href: string };

export type Officer = {
  name: string;
  role: string;
  /** Section heading the person appears under, e.g. "Executive Committee". */
  group: string;
  affiliation?: string;
  /** Path to a photo inside /public, e.g. "/yp/team/jane.jpg". Square photos look best. */
  photo?: string;
  linkedin?: string;
  email?: string;
  /** true = sample entry that must be replaced before launch (shown with a warning label). */
  placeholder?: boolean;
};

export type EventItem = {
  title: string;
  /** "YYYY-MM-DD". Leave out if the date is not fixed yet (shown as "Date TBA"). */
  date?: string;
  time?: string;
  location: string;
  /** e.g. "Workshop", "Panel", "Industry Visit", "Webinar" */
  type: string;
  summary: string;
  /** IEEE vTools registration link — events.vtools.ieee.org/m/xxxxx */
  registerUrl?: string;
  photosUrl?: string;
  reportUrl?: string;
  /** Who organised it, if not only this unit. */
  organiser?: string;
  placeholder?: boolean;
};

export type Card = {
  title: string;
  description: string;
  href?: string;
  linkLabel?: string;
  /** Short tag shown above the title, e.g. "PES". */
  tag?: string;
  /** Path to an image/logo inside /public. */
  image?: string;
  placeholder?: boolean;
};

export type SiteContent = {
  id: "yp" | "pes-ias-pels" | "sight";

  /** Short name used in page titles and the footer. */
  shortName: string;
  /** Official full name of the unit. */
  fullName: string;
  /** The site identifier (top-left). IEEE rules: the letters IEEE must be in it. */
  wordmark: { lineTop: string; lineMain: string; lineSub?: string };
  /** Text shown with the official unit logo (e.g. "RWANDA" under the YP logo). */
  identifierLabel: string;
  /** The unit name printed beside the logos in the header, one entry per line
   *  (like "IEEE PES/PELS/IAS · Hyderabad Section Joint Chapter" on IEEE R10 sites). */
  headerTitle: string[];

  /** One sentence used for search engines and link previews. */
  description: string;
  /** Final address of the website, e.g. https://yp.ieeerwanda.org */
  siteUrl: string;
  /** IEEE vTools / OU code if you have it, e.g. "R80XXXX" — shown in the footer. */
  ouCode?: string;

  /**
   * Colours. Every site uses IEEE Blue (#00629B) as the main colour and IEEE
   * Dark Blue (#002855) for the top bar and footer, like the IEEE website
   * templates. Each unit adds the accent colour(s) from ITS OWN official brand
   * guideline — never more than two (IEEE rule).
   */
  colors: {
    /** Template colour: meta-nav text, header title, menu bar, headings and footer.
     *  IEEE Blue (#00629B) by default. */
    brand: string;
    /** Main accent — thin rules, active menu underline, badges, bullets. */
    accent: string;
    /** Text colour that passes WCAG AA contrast ON the accent colour. */
    onAccent: string;
    /** Optional second accent from the same guideline (used sparingly). */
    accent2?: string;
    /** Background for alternating light sections (a ≥10% tint, per IEEE). */
    surface: string;
  };

  /** Emergency / announcement bar at the very top of the home page. Remove to hide. */
  alert?: { message: string; link?: Link };

  /** Full-width photo slider at the top of the home page (IEEE template style).
   *  Photos live in /public/<unit>/hero/. Use your own event photos whenever you can. */
  slides: {
    image: string;
    /** Describe the photo for screen readers. */
    alt: string;
    title: string;
    subtitle?: string;
    cta?: Link;
    /** Photographer credit, e.g. { name: "Jane Doe / Unsplash", url: "https://unsplash.com/photos/..." } */
    credit?: { name: string; url?: string };
    /** Which part of the photo to keep in view when cropped (CSS object-position). */
    focus?: string;
  }[];

  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    highlights: string[];
    primary: Link;
    secondary: Link;
  };

  stats: { value: string; label: string }[];

  about: {
    heading: string;
    intro: string[];
    mission: string;
    vision: string;
    goals: string[];
    objectives: string[];
    parent: string[];
  };

  /** "What we do" bullet list (home + about). */
  whatWeDo: string[];

  /** Cards in the home page focus section (societies, programmes or focus areas). */
  focus: { eyebrow: string; heading: string; intro: string; cards: Card[] };

  /** Optional "About IEEE and our societies" cards (joint chapter): what each body is, with a Join button and a link to its website. */
  bodies?: {
    eyebrow: string;
    heading: string;
    intro?: string;
    items: { name: string; question: string; description: string; logo: string; join: Link; home: string }[];
  };

  /** Optional extra page (Projects for SIGHT, Programs for YP, Societies for the joint chapter). */
  extraPage?: {
    slug: "projects" | "programs" | "societies";
    title: string;
    intro: string;
    cards: Card[];
  };

  officers: Officer[];
  events: EventItem[];

  getInvolved: {
    intro: string;
    eligibility: string;
    steps: { title: string; text: string; link?: Link }[];
    benefits: string[];
    volunteerText: string;
    volunteerFormUrl?: string;
  };

  resources: { category: string; items: { title: string; description: string; url: string }[] }[];

  partners: { name: string; url?: string; logo?: string }[];

  contact: {
    email: string;
    address: string;
    /** Google Form or similar, opened in a new tab. Optional. */
    formUrl?: string;
  };

  social: { linkedin?: string; instagram?: string; x?: string; facebook?: string; youtube?: string };
};
