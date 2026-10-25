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

export type Photo = {
  /** Path inside /public, e.g. "/yp/hero/students-laptop.jpg". Landscape, at least 1600 px wide. */
  image: string;
  /** Describe the photo for screen readers. */
  alt: string;
  /** Photographer credit, e.g. { name: "Jane Doe / Unsplash", url: "https://unsplash.com/photos/..." } */
  credit?: { name: string; url?: string };
  /** Which part of the photo to keep in view when cropped (CSS object-position). */
  focus?: string;
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
  /** Text shown with the official unit logo (e.g. "RWANDA" under the YP logo). */
  identifierLabel: string;
  /** The unit name printed beside the logos in the header, one entry per line
   *  (like "IEEE PES/PELS/IAS · Hyderabad Section Joint Chapter" on IEEE R10 sites). */
  headerTitle: string[];

  /** One sentence used for search engines and link previews. */
  description: string;
  /** Final address of the website, e.g. https://yp.ieeerwanda.org */
  siteUrl: string;

  /**
   * Colours. Every site uses IEEE Blue (#00629B) as the main colour and IEEE
   * Dark Blue (#002855) for headings and the footer. Each unit adds one accent
   * colour from ITS OWN official brand guideline.
   */
  colors: {
    /** Template colour: meta-nav text, menu bar, buttons and links. IEEE Blue (#00629B) by default. */
    brand: string;
    /** Unit accent — used sparingly: active menu underline, the "Next event" marker, keyboard focus. */
    accent: string;
    /** Light tint for the few highlighted bands (a ≥10% tint, per IEEE). */
    surface: string;
  };

  /** The photo, headline and button at the top of the home page.
   *  Photos live in /public/<unit>/hero/. Use your own event photos whenever you can. */
  hero: Photo & {
    title: string;
    subtitle?: string;
    cta?: Link;
  };

  /** Optional second photo, shown beside "About us" on the home page. */
  aboutPhoto?: Photo;

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

  /** The home page focus section (programmes or focus areas). */
  focus: { heading: string; intro: string; cards: Card[] };

  /** Optional "About IEEE and our societies" cards (joint chapter): what each body is, with a Join button and a link to its website. */
  bodies?: {
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
    /** Unit email (e.g. an @ieee.org alias). Leave out until you have one;
     *  the site then points visitors to the LinkedIn page instead. */
    email?: string;
    address: string;
    /** Google Form or similar, opened in a new tab. Optional. */
    formUrl?: string;
  };

  social: { linkedin?: string; instagram?: string; x?: string; facebook?: string; youtube?: string };
};
