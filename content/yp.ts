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
  announcement: {
    label: "Announcement",
    title: "Kigali will host the IEEE Region 8 ASYP Congress 2027",
    text: "IEEE Region 8 has chosen Kigali, Rwanda to host the 2027 Africa Students and Young Professionals Congress (ASYP). Students and young professionals from across Africa will meet for leadership, technical and networking sessions. Dates and registration will be announced soon.",
    link: { label: "Follow us on LinkedIn for updates", href: "https://www.linkedin.com/showcase/ieee-young-professionals-rwanda/" },
    image: { src: "/yp/asyp-2027-hosts.jpg", alt: "IEEE Region 8 announcement of the 2027 Cross-Sectional SYP hosts: ASYP Kigali, Rwanda; MENASYP Cairo, Egypt; NCESYP Glasgow, UK & Ireland; SESYP Athens, Greece" },
  },

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
    image: "/yp/about-team.jpg",
    alt: "Four young professionals, women and men, working together at computers around a shared desk",
    credit: { name: "Jep Gambardella / Pexels", url: "https://www.pexels.com/photo/people-working-in-the-office-7689856/" },
    focus: "center 60%",
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
    { group: "Executive Committee", name: "Akabway Rurangwa", role: "Chair", photo: "/yp/team/akabway-rurangwa.jpg" },
    { group: "Executive Committee", name: "Adonijah Ogara", role: "Vice Chair", photo: "/yp/team/adonijah-ogara.jpg" },
    { group: "Executive Committee", name: "Furaha Benedict", role: "Secretary", photo: "/yp/team/furaha-benedict.jpg" },
    { group: "Executive Committee", name: "Kayesu Ritah", role: "Treasurer", photo: "/yp/team/kayesu-ritah.jpg" },
  ],

  events: [
    {
      title: "Charging Ahead: Making Sense of Rwanda's EV Battery Interoperability Mandate",
      date: "2026-11-06",
      time: "16:00–17:30",
      location: "Digital Transformation Center Rwanda, Kigali",
      type: "Panel Discussion",
      organiser: "IEEE Rwanda Young Professionals, with the PES/IAS/PELS Joint Chapter and SIGHT Group",
      summary: "In June 2026, Rwanda became the first African country to require battery-swapping interoperability. Panellists from government, e-mobility, charging infrastructure and finance discuss what it means in practice and how investment can support the transition, followed by Q&A and networking. Open to students, engineers and professionals.",
      registerUrl: "https://lnkd.in/dfx5kXuR",
    },
    {
      title: "Women in STEM Leadership and Career Development Forum",
      date: "2026-08-28",
      location: "Carnegie Mellon University Africa, Kigali",
      type: "Forum",
      organiser: "IEEE Women in Engineering Affinity Group at CMU-Africa, funded by IEEE Young Professionals",
      summary: "Students, engineers, researchers and young professionals met women who have walked the paths they are navigating, for honest conversations about careers, leadership, mentorship and setbacks. A panel with Uwase Vestine, Dr Victoire (Vicky) Ghafi Kondi-Akara and Furaha Benedict, a Women in Engineering awareness session led by Kayesu Ritah, and an IEEE session led by Rhoda Ojetola, Chair of IEEE WIE at CMU-Africa.",
    },
    {
      title: "IEEE ComSoc Rwanda & Partner IEEE Societies Meet & Greet at ALU",
      date: "2026-08-08",
      time: "13:00–16:00",
      location: "African Leadership University, Kigali Innovation City, Bumbogo",
      type: "Meet & Greet",
      organiser: "IEEE ComSoc Rwanda Chapter, in collaboration with IEEE Rwanda Young Professionals",
      summary: "African Leadership University students met IEEE volunteers to learn about IEEE opportunities and the steps toward an IEEE Student Branch and a Communications Society student chapter at ALU. The YP Chair presented \"IEEE at a Glance\", and sessions covered membership, student leadership, technical communities and how to form and sustain new IEEE units.",
    },
    {
      title: "Industrial Visit: Volkswagen Mobility Solutions Rwanda",
      date: "2026-07-24",
      location: "Volkswagen Mobility Solutions Rwanda, Kigali",
      type: "Industrial Visit",
      organiser: "IEEE IES Rwanda Chapter, in collaboration with IEEE Rwanda Young Professionals",
      summary: "Students from the University of Rwanda, African Leadership University and Carnegie Mellon University Africa toured Volkswagen's Kigali assembly plant. They learned how vehicles are assembled, the different parts of a car, and the range of careers at Volkswagen, from engineering to marketing and sales, and how each role fits together until a car rolls off the line.",
    },
    {
      title: "Rwanda Simulation Synergy",
      date: "2026-05-22",
      time: "09:00",
      location: "Carnegie Mellon University Africa, Kigali",
      type: "Industry Workshop",
      organiser: "IEEE CMU-Africa IAS/PELS/PES Joint Student Branch Chapter",
      summary: "An industry networking workshop on numerical simulation and smart electrical systems, held with Ansys and the IEEE Industry Applications Society. 43 participants from 12 nationalities explored how digital modelling and smart technologies solve real engineering problems, through technical talks, a panel, a student showcase and a live Ansys Discovery demo. For many it was their first time using professional simulation software, and 12 joined IEEE IAS as student members.",
    },
    {
      title: "IEEE Young Professionals: Benefits and Opportunities",
      date: "2026-05-05",
      time: "18:30–19:30",
      location: "Online (Zoom)",
      type: "Webinar",
      organiser: "IEEE Rwanda Young Professionals, with IEEE Region 8",
      summary: "Dr Mohamed Saeed Darweesh, Chair of the IEEE Region 8 YP Committee, and Moataz Alaa shared how early-career engineers can get involved in IEEE YP, from networking and volunteering to funding programmes and Region 8 initiatives.",
    },
    {
      title: "Tartan Synergy: Securing the Grid",
      date: "2026-04-29",
      time: "14:00–17:00",
      location: "Muhazi Conference Hall, University of Rwanda",
      type: "STEP Workshop",
      organiser: "IEEE CMU-Africa and IEEE University of Rwanda Student Branches, with IEEE Young Professionals",
      summary: "A workshop on cybersecurity for energy infrastructure in Rwanda and the region. It opened with a keynote by Musabyimana Josee on grid cybersecurity, followed by a panel with Muyombano Happy Axel, Chisom Ogbogu and Jamiu Dahunsi, moderated by Mariamawit Arega. Kipngeno Koech closed with IEEE opportunities for students and the vision of the new IEEE Rwanda Subsection.",
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
    // email: "unit-name@ieee.org",   <- add the unit email here when you have one
    address: "Kigali, Rwanda",
  },

  social: {
    linkedin: "https://www.linkedin.com/showcase/ieee-young-professionals-rwanda/",
  },
};

export default content;
