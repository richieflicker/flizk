import type { Metadata } from "next";
import ChennaiLandingPage from "@/components/pages/ChennaiLandingPage";
import { buildMetadata } from "@/lib/metadata";
import { PAGE_SEO } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata(PAGE_SEO.chennai);

export default function Page() {
  return (
    <>
      <JsonLd
        id="breadcrumb"
        data={breadcrumbSchema([{ name: "Dental Clinic Software Chennai", path: PAGE_SEO.chennai.path }])}
      />
      <ChennaiLandingPage />
    </>
  );
}
