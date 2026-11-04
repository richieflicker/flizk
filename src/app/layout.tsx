import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { LogoIntro } from "@/components/LogoIntro";
import { introBootScript } from "@/lib/intro";
import { JsonLd } from "@/components/JsonLd";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import { PAGE_SEO, SITE_URL } from "@/lib/seo";
import { buildMetadata } from "@/lib/metadata";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  ...buildMetadata(PAGE_SEO.home),
  icons: {
    icon: [
      { url: "/flizk-favicon.svg", type: "image/svg+xml" },
      { url: "/flizk-favicon.ico", sizes: "any" },
    ],
    apple: "/flizk-180.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
      <head>
        {/* Decides before first paint whether the hero must wait for the logo intro. Anything
            that skips the intro (repeat visit, reduced motion, crawlers, no JS) never gets the
            hidden state, so the H1 can paint immediately. */}
        <script dangerouslySetInnerHTML={{ __html: introBootScript }} />
      </head>
      <body className="min-h-screen bg-[#F8FAFC] font-['Inter'] antialiased">
        <JsonLd id="organization" data={organizationSchema} />
        <JsonLd id="website" data={websiteSchema} />
        <LogoIntro />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
