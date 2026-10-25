# IEEE Rwanda Young Professionals Affinity Group — website

The website for the IEEE Rwanda Young Professionals Affinity Group, planned for **yp.ieeerwanda.org**.

Built with **Next.js + Tailwind CSS**. Each build produces a plain static website (a folder of HTML files called `out/`) — no database, no server.

**You only ever need to edit `content/yp.ts`** (and `content/shared.ts` for things shared with the other IEEE Rwanda units), plus photos in `public/yp/`. Everything else is the "theme".

Split out of the original three-site codebase [akabway-cmu/ieee-rwanda-unit-sites-akabwayr](https://github.com/akabway-cmu/ieee-rwanda-unit-sites-akabwayr). The sister sites (YP, PES/IAS/PELS, SIGHT) now live in their own repositories in the IEEE-RWANDA organisation; `content/shared.ts` is duplicated in each, so update it in all three when it changes.

---

## 1. What is already IEEE-compliant

Based on the IEEE Brand Experience *Global Page Elements and Branding Requirements*:

- ✅ IEEE meta navigation at the very top (IEEE.org | IEEE *Xplore*® | IEEE Standards | IEEE Spectrum | More Sites — Join IEEE | Donate), Open Sans, underline on hover
- ✅ Site identifier top-left (the official unit logo, which contains "IEEE"), linking home
- ✅ IEEE Master Brand slot top-right, linking to ieee.org with alt text "IEEE" (**you must add the official file — see step 4**)
- ✅ Required footer links: Home, Contact, Accessibility, Nondiscrimination Policy, IEEE Ethics Reporting, IEEE Privacy Policy, Terms & Disclosures, Sitemap
- ✅ Required copyright line + descriptor; the year updates automatically
- ✅ IEEE colour palette (IEEE Blue `#00629B` + one accent per unit), full-width footer visually separated
- ✅ Accessibility: skip link, keyboard focus outlines, alt text, works on phones, respects "reduce motion"
- ✅ Search-engine basics: page titles, descriptions, sitemap.xml, robots.txt, Organization structured data

Things only you (or IEEE) can do are in the **launch checklist** at the end.

---

## 2. See the site on your computer

Install **Node.js LTS** (https://nodejs.org), then in this folder run:

```
npm install
npm run dev
```

Open http://localhost:3000. Every time you save a content file, the page refreshes by itself. Press `Ctrl + C` to stop.

## 3. Edit the content

Open `content/yp.ts` (or the other two). It reads like a form:

```ts
officers: [
  { group: "Executive Committee", name: "Akabway Rurangwa", role: "Chair" },
  { group: "Executive Committee", name: "Name Surname", role: "Vice Chair", affiliation: "Organisation", placeholder: true },
```

Rules of thumb:
- Change only the text **inside the quotes**. Keep the commas and brackets.
- Anything with `placeholder: true` shows an orange "Placeholder — replace before launch" label. Replace the text and **delete** `placeholder: true`.
- There is no unit email yet, so the site points visitors to the LinkedIn page. When you get one (ask for an @ieee.org alias), remove the `//` in front of the `email:` line under `contact` and type the address.
- If you break something, the browser shows a red error naming the line — usually a missing comma or quote.

**Adding an event:** copy an existing `{ ... },` block inside `events: [ ]` and edit it. Dates are written `"2026-11-20"`. Leave `date` out if it isn't fixed yet (shows "Date TBA"). Events move from *Upcoming* to *Past* automatically once the date passes. Put the IEEE vTools link in `registerUrl`, and after the event add `photosUrl` / `reportUrl`.

**Adding photos:** put square photos in `public/yp/team/` (etc.) and point to them, e.g. `photo: "/yp/team/akabway.jpg"`. Keep files under ~300 KB.

**Logos** (already installed from the official brand packs, in `public/`):
- IEEE Master Brand — black on the white header, white in the footer (`public/brand/`). IEEE websites must not use the blue Master Brand.
- YP — official horizontal logo with "RWANDA" in IEEE Blue underneath, as the YP guideline describes.
- Joint Chapter — official PES, IAS (stacked) and PELS logos separated by thin rules, with "IEEE Rwanda Joint Chapter" underneath (your lock-up design, rebuilt from the original files so it stays sharp).
- SIGHT — official 2024 IEEE SIGHT logo with the red "wedge" identifier box from the SIGHT identifier template, reading "Rwanda Subsection" (change `identifierLabel` in `content/sight.ts` to edit it). The HT guideline asks for approval of final files — email htb-office@ieee.org before launch.
- **Favicon:** IEEE requires the IEEE favicon. Download the set from the Brand Experience site and put `favicon.ico` in the `app/` folder.

**Colours** (set in each content file under `colors`, all from the guidelines in the project):

| Site | Main | Accent(s) | Source |
|---|---|---|---|
| All | IEEE Blue `#00629B`, Dark Blue `#002855` | — | IEEE Color Guide 03/2025 |
| Joint Chapter | IEEE Blue | PES green `#78BE20`, grey tint `#E6E7E8` | IEEE PES Identity Guidelines |
| YP | IEEE Blue | green `#00843D` | IEEE YP Identity Guidelines |
| SIGHT | IEEE Blue | SIGHT red `#BA0C2F` | IEEE HT / SIGHT Identity Guidelines |

Buttons and links are always IEEE Blue (white on photos), as in the IEEE website templates. The accent only marks the active menu item, the "Next event" band and keyboard focus. Text uses Open Sans, the IEEE web font; page titles use its condensed cut.

**Layout:** IEEE link bar → logo, unit name, search and IEEE logo → menu bar → photo with headline → the next event → about → focus areas (or the societies, for the joint chapter) → recent events → leadership → how to get involved → footer. The menu colour is `colors.brand` (IEEE Blue). For a green look, set it to IEEE Green `#00843D` — PES's bright green `#78BE20` is too light for white menu text.

**Home-page photos** (`hero` and `aboutPhoto` in the content file, files in `public/<unit>/hero/`):
- The current photos are free stock photos (Unsplash License — free to use, credit shown under each photo). The Kigali skylines are real Kigali photos; the others are generic.
- IEEE prefers **your own photos** of real IEEE Rwanda activities. Replace them as soon as you have good ones — landscape, at least 1920 px wide, people doing something, sharp and bright, with consent from the people shown. Good shots to collect:
  - Joint Chapter: members at a substation, solar plant or battery-swap station visit; a Distinguished Lecturer talk; students around power-electronics hardware in a lab.
  - YP: a panel discussion on stage; networking at an event; a group photo with the YP banner; a mentoring session.
  - SIGHT: volunteers with a community partner; a solar or water installation you helped deliver; a school STEM outreach session.
- The IEEE Rwanda Subsection launch album (Flickr) has photos you can use for all three sites — download the best ones and drop them in.
- To swap a photo: copy it into `public/<unit>/hero/`, then change `image`, `alt` and `credit` in `hero` or `aboutPhoto`.

**Shared content** (the Subsection launch event, IEEE tool links, links to sister units in the footer) lives in `content/shared.ts`.

## 4. Publishing

Every push to `main` deploys the site to production on Vercel automatically (`.github/workflows/deploy.yml`). Pull requests get a preview deployment; the link is in the workflow run's summary. `npm run build` builds the same static site into `out/` locally.

## 5. Launch checklist

- [ ] All `placeholder: true` entries replaced (sample events, sample project)
- [ ] Optional: add a unit email (ask for an @ieee.org alias); until then visitors are sent to LinkedIn
- [ ] LinkedIn page created and linked in `social.linkedin` (the Subsection's funding rules require an active website **and** LinkedIn page)
- [ ] IEEE favicon added
- [ ] SIGHT identifier approved by IEEE HT (htb-office@ieee.org)
- [ ] Officer photos added (with each person's permission)
- [ ] Check the facts in the text
- [ ] Site registered with IEEE: https://brand-experience.ieee.org/guidelines/digital/site-registration-form/
- [ ] Optional but recommended: request an IEEE Experience Design review of the beta URL (https://brand-experience.ieee.org/contact/exd-contact-form/)
- [ ] Ask the Web Administrator about the IEEE cookie banner (needed if you add analytics or embeds that set cookies; this site sets none by default)

## How the code is organised

```
content/      ← the only files editors touch: yp.ts and shared.ts
public/       ← images and logos (public/yp, public/brand)
app/          ← pages: home, about, team, events, get-involved, resources, contact, and [slug]
components/   ← header (meta nav + menu), footer, cards, event list
lib/nav.ts    ← menu order and the IEEE-required meta-nav and footer links
```
