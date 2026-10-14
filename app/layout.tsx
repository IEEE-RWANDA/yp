import type { Metadata } from "next";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/600.css";
import "@fontsource/open-sans/700.css";
import "@fontsource/open-sans/400-italic.css";
import "@fontsource/open-sans-condensed/700.css";
import "./globals.css";
import { site } from "@/content";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: { default: site.fullName, template: `%s | ${site.shortName}` },
  description: site.description,
  openGraph: { title: site.fullName, description: site.description, url: site.siteUrl, siteName: site.fullName, type: "website", locale: "en_US" },
  twitter: { card: "summary", title: site.fullName, description: site.description },
};

// Structured data so search engines understand who we are.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.fullName,
  url: site.siteUrl,
  email: site.contact.email,
  description: site.description,
  parentOrganization: { "@type": "Organization", name: "IEEE Rwanda Subsection", url: "https://www.ieeerwanda.org" },
  sameAs: Object.values(site.social).filter(Boolean),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      style={{
        ["--brand" as string]: site.colors.brand,
        ["--brand-tint" as string]: `color-mix(in srgb, ${site.colors.brand} 10%, white)`,
        ["--accent" as string]: site.colors.accent,
        ["--surface" as string]: site.colors.surface,
      }}
    >
      <body className="font-sans antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
