// ═════════════════════════════════════════════════════════════
//  IEEE Rwanda Young Professionals Affinity Group — WEBSITE CONTENT
//  Everything visitors read on yp.ieeerwanda.org lives here.
//  Edit the text between the quotes "like this", save, done.
//  Lines marked  placeholder: true  are samples — replace them.
// ═════════════════════════════════════════════════════════════
import type { SiteContent } from "./types";
import { COMMON_RESOURCES, SUBSECTION_EVENTS } from "./shared";

const content: SiteContent = {
  id: "yp",
  shortName: "IEEE Rwanda YP",
  fullName: "IEEE Rwanda Young Professionals Affinity Group",
  identifierLabel: "RWANDA",

  headerTitle: ["IEEE Rwanda", "Young Professionals", "Affinity Group"],

  description:
    "IEEE Rwanda Young Professionals — supporting early-career engineers and technologists in Rwanda with networking, career development and leadership opportunities.",
  siteUrl: "https://yp.ieeerwanda.org",

  // Colours from the IEEE Young Professionals Identity Guidelines: IEEE Blue,
  // green #00843D ("youth and growth") and orange #E87722 — the colours of the YP logo.
  colors: { brand: "#00629B", accent: "#00843D", surface: "#E6EFF5" },

  // The photo, headline and button at the top of the home page.
  hero: {
    image: "/yp/hero/students-laptop.jpg",
    alt: "A group of young professionals working together around a laptop",
    title: "From graduate to leader.",
    cta: { label: "Join Young Professionals", href: "/get-involved/" },
    credit: { name: "Vitaly Gariev / Unsplash", url: "https://unsplash.com/photos/8gAbl776pc0" },
    focus: "center 30%",
  },

  // Shown beside "About us" on the home page. Remove to show the text on its own.
  aboutPhoto: {
    image: "/yp/hero/speaker-audience.jpg",
    alt: "A speaker on stage in front of a large audience",
    credit: { name: "Alexandre Pellaes / Unsplash", url: "https://unsplash.com/photos/6vAjp0pscX0" },
  },

  about: {
    heading: "About IEEE Rwanda Young Professionals",
    intro: [
      "IEEE Young Professionals™ (YP) is a worldwide IEEE affinity group for members who graduated with their first professional degree within the past fifteen years. Every IEEE member in that window is automatically part of YP — there is nothing extra to pay.",
      "The Rwanda affinity group helps early-career engineers and technologists make the jump from student life into the profession, and keeps them connected as they grow into managers, founders and technical leaders. We work with industry, government, universities and the other IEEE Rwanda units.",
    ],
    mission:
      "To help young engineers and technologists in Rwanda build successful careers by giving them skills, networks and leadership experience — and to give them a voice in Rwanda's technology and policy conversations.",
    vision: "A generation of Rwandan engineering professionals who are connected, confident and leading change.",
    goals: [
      "Support the transition from university to the profession.",
      "Connect young professionals with industry, investors, policy-makers and each other.",
      "Grow leaders for IEEE Rwanda and for Rwanda's technology sector.",
    ],
    objectives: [
      "Host panels and talks on technology, policy, finance and careers.",
      "Run skills workshops — project management, entrepreneurship, communication.",
      "Organise networking events and mentorship between YPs and students.",
      "Run STEP (Student Transition & Elevation Partnership) events with student branches.",
    ],
    parent: ["IEEE", "IEEE Region 8", "IEEE Rwanda Subsection", "Young Professionals"],
  },

  whatWeDo: [
    "Industry and policy panels on topics shaping Rwanda's economy",
    "Professional-skills workshops for early-career engineers",
    "Networking events that connect students, YPs and senior engineers",
    "STEP events helping final-year students transition into the profession",
    "Volunteer leadership roles across IEEE Rwanda",
  ],

  focus: {
    heading: "Built for the first fifteen years of your career",
    intro: "Our programme is organised around four themes. Every event we run serves at least one of them.",
    cards: [
      { title: "Career growth", description: "Workshops, CV clinics and talks that help you land, keep and grow in great engineering jobs." },
      { title: "Industry & policy", description: "Panels connecting YPs with industry, investors and regulators on the issues shaping Rwanda's tech sector." },
      { title: "Entrepreneurship", description: "Stories, tools and contacts for engineers who want to build their own start-ups." },
      { title: "Leadership", description: "Real volunteer roles running events, teams and budgets inside IEEE Rwanda." },
    ],
  },

  extraPage: {
    slug: "programs",
    title: "Programs",
    intro: "Programs that IEEE Young Professionals Rwanda runs or takes part in. Global IEEE YP programs are linked so you can explore them further.",
    cards: [
      {
        tag: "Local",
        title: "YP Industry & Policy Panels",
        description:
          "Panels bringing together practitioners, regulators and financiers to discuss how technology policy is shaping Rwanda — starting with e-mobility and battery-swapping interoperability.",
        href: "/events/",
        linkLabel: "See events",
      },
      {
        tag: "Global",
        title: "STEP — Student Transition & Elevation Partnership",
        description:
          "Events that welcome graduating students into IEEE Young Professionals and show them how to make the most of their membership after university.",
        href: "https://yp.ieee.org",
        linkLabel: "IEEE YP",
      },
      {
        tag: "Local",
        title: "Professional skills series",
        description: "Short workshops on project management, communication, finance and entrepreneurship for engineers.",
      },
      {
        tag: "Global",
        title: "IEEE Mentoring",
        description: "Find a mentor — or become one — through the IEEE Mentoring Center.",
        href: "https://mentoring.ieee.org",
        linkLabel: "mentoring.ieee.org",
      },
    ],
  },

  officers: [
    { group: "Executive Committee", name: "Akabway Rurangwa", role: "Chair", affiliation: "SLS Energy Ltd" },
    { group: "Executive Committee", name: "Adonijah Ogara", role: "Vice Chair" },
    { group: "Executive Committee", name: "Furaha Benedict", role: "Secretary" },
    { group: "Executive Committee", name: "Kayesu Ritah", role: "Treasurer" },
  ],

  events: [
    {
      title: "Panel: Rwanda's battery-swapping interoperability mandate — what it means for finance and investment",
      location: "Kigali (venue to be confirmed)",
      type: "Panel",
      summary:
        "Industry, government and finance voices discuss how Rwanda's interoperability requirement for e-mobility battery swapping will affect business models, financing and investment in the sector.",
    },
    ...SUBSECTION_EVENTS,
  ],

  getInvolved: {
    intro:
      "If you are an IEEE member and earned your first professional degree in the last fifteen years, you are already a Young Professional. Here is how to get involved locally.",
    eligibility:
      "Our events are open to everyone — students about to graduate, early-career engineers and experienced professionals who want to mentor.",
    steps: [
      { title: "Join or renew IEEE", text: "IEEE membership automatically includes YP if you're within fifteen years of your first degree.", link: { label: "ieee.org/join", href: "https://www.ieee.org/membership/join/index.html" } },
      { title: "Check you're in Rwanda", text: "Make sure your IEEE profile address is in Rwanda so you are counted in the Rwanda Subsection." },
      { title: "Come to an event", text: "Register for our next event and meet the committee.", link: { label: "Our events", href: "/events/" } },
    ],
    benefits: [
      "Panels and talks with industry leaders, investors and policy-makers",
      "Professional-skills workshops for early-career engineers",
      "A network of peers across Rwanda and IEEE Region 8",
      "Leadership roles you can put on your CV",
      "Access to global IEEE YP programs and funding",
    ],
    volunteerText:
      "Want to organise events, lead a committee or help with communications? We'd love to have you on the team.",
  },

  resources: [
    {
      category: "Young Professionals",
      items: [
        { title: "IEEE Young Professionals", description: "The global IEEE YP home page, programs and news.", url: "https://yp.ieee.org" },
        { title: "IEEE Region 8", description: "Europe, Middle East & Africa region news and programs.", url: "https://ieeer8.org" },
      ],
    },
    COMMON_RESOURCES,
  ],

  partners: [
    { name: "IEEE Rwanda Subsection", url: "https://www.ieeerwanda.org" },
    { name: "IEEE Young Professionals", url: "https://yp.ieee.org" },
  ],

  contact: {
    email: "CHANGE-ME@ieee.org",
    address: "Kigali, Rwanda",
  },

  social: {
    linkedin: "https://www.linkedin.com/showcase/ieee-young-professionals-rwanda/",
  },
};

export default content;
