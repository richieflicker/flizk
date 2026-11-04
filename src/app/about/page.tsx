import type { Metadata } from "next";
import AboutPage from "@/components/pages/AboutPage";
import { buildMetadata } from "@/lib/metadata";
import { PAGE_SEO } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata(PAGE_SEO.about);

export default function Page() {
  return (
    <>
      <JsonLd
        id="breadcrumb"
        data={breadcrumbSchema([{ name: "About", path: PAGE_SEO.about.path }])}
      />
      <AboutPage />
    </>
  );
}
