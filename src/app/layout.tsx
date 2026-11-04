import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { LogoIntro } from "@/components/LogoIntro";
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
    <html lang="en">
      <head>
        {/* the intro overlay defaults to display:none inline (set only once LogoIntro's effect
            decides to actually play it), so there's no flash to guard against there — this just
            keeps hero content visible for the rare case JS never runs at all. */}
        <noscript>
          <style>{`[data-intro-reveal]{opacity:1 !important}`}</style>
        </noscript>
      </head>
      <body className="min-h-screen bg-[#F8FAFC] font-['Inter'] antialiased">
        <LogoIntro />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
