import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PAGE_SEO, SITE_URL } from "@/lib/seo";
import { buildMetadata } from "@/lib/metadata";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  ...buildMetadata(PAGE_SEO.home),
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#F8FAFC] font-['Inter'] antialiased">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
