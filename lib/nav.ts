import { site } from "@/content";

export type NavItem = { label: string; href: string };

/** The main menu. Pages appear in this order. */
export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about/" },
  ...(site.extraPage ? [{ label: site.extraPage.title, href: `/${site.extraPage.slug}/` }] : []),
  { label: "Team", href: "/team/" },
  { label: "Events", href: "/events/" },
  { label: "Get Involved", href: "/get-involved/" },
  { label: "Resources", href: "/resources/" },
  { label: "Contact", href: "/contact/" },
];

/** IEEE-required meta navigation (top bar). Do not change. */
export const metaNavLeft = [
  { label: "IEEE.org", href: "https://www.ieee.org" },
  { label: "IEEE Xplore®", href: "https://ieeexplore.ieee.org", italic: true },
  { label: "IEEE Standards", href: "https://standards.ieee.org" },
  { label: "IEEE Spectrum", href: "https://spectrum.ieee.org" },
  { label: "More Sites", href: "https://www.ieee.org/sitemap.html" },
];
export const metaNavRight = [
  { label: "Join IEEE", href: "https://www.ieee.org/join" },
  { label: "Donate", href: "https://www.ieee.org/give" },
];

/** IEEE-required footer links. Do not change. */
export const footerPolicyLinks = [
  { label: "Home", href: "/" },
  { label: "Contact", href: "/contact/" },
  { label: "Accessibility", href: "https://www.ieee.org/accessibility-statement.html" },
  { label: "Nondiscrimination Policy", href: "https://www.ieee.org/about/corporate/governance/p9-26.html" },
  { label: "IEEE Ethics Reporting", href: "http://www.ieee-ethics-reporting.org" },
  { label: "IEEE Privacy Policy", href: "https://www.ieee.org/security-privacy.html" },
  { label: "Terms & Disclosures", href: "https://www.ieee.org/about/help/site-terms-conditions.html" },
  { label: "Sitemap", href: "/sitemap.xml" },
];

export const isExternal = (href: string) => /^(https?:|mailto:)/.test(href);
