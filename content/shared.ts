// Content shared by all three websites. Edit once, it updates everywhere.
import type { EventItem } from "./types";

export const SUBSECTION = {
  name: "IEEE Rwanda Subsection",
  url: "https://www.ieeerwanda.org",
  region: "IEEE Region 8 (Europe, Middle East & Africa)",
  regionUrl: "https://ieeer8.org",
};

/** Links to the sister units, shown in the footer of every site. */
export const SISTER_SITES = [
  { label: "IEEE Rwanda Subsection", href: "https://www.ieeerwanda.org" },
  { label: "Young Professionals", href: "https://yp.ieeerwanda.org" },
  { label: "PES / IAS / PELS Joint Chapter", href: "https://pes.ieeerwanda.org" },
  { label: "SIGHT Group", href: "https://sight.ieeerwanda.org" },
  { label: "ComSoc Rwanda", href: "https://comsoc.ieeerwanda.org" },
  { label: "IES Rwanda", href: "https://ies.ieeerwanda.org" },
];

/** Events run by the whole Subsection that every unit took part in. */
export const SUBSECTION_EVENTS: EventItem[] = [
  {
    title: "IEEE Rwanda Subsection Launch & Societies Engagement Forum",
    date: "2026-07-17",
    location: "CMU-Africa, Kigali Innovation City",
    type: "Community",
    organiser: "IEEE Rwanda Subsection",
    summary:
      "The official activation of Rwanda's IEEE geographic unit, bringing together engineers, students, faculty, industry and government for the launch ceremony, society workshops, humanitarian-technology discussions and student-leadership sessions.",
    photosUrl: "https://flic.kr/s/aHBqjCZwSB",
  },
];

/** IEEE-wide resources useful to every member. */
export const COMMON_RESOURCES = {
  category: "IEEE member tools",
  items: [
    { title: "IEEE Xplore®", description: "Papers, standards and conference proceedings.", url: "https://ieeexplore.ieee.org" },
    { title: "IEEE vTools Events", description: "Find and register for IEEE events worldwide.", url: "https://events.vtools.ieee.org" },
    { title: "IEEE Collabratec™", description: "Network and collaborate with IEEE members.", url: "https://ieee-collabratec.ieee.org" },
    { title: "IEEE Mentoring Center", description: "Find a mentor or become one.", url: "https://mentoring.ieee.org" },
    { title: "IEEE Job Site", description: "Engineering jobs and career resources.", url: "https://jobs.ieee.org" },
    { title: "IEEE Learning Network", description: "Online courses and professional development hours.", url: "https://iln.ieee.org" },
  ],
};
