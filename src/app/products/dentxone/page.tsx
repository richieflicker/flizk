import type { Metadata } from "next";
import DentxonePage from "@/components/pages/DentxonePage";
import { buildMetadata } from "@/lib/metadata";
import { PAGE_SEO } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata(PAGE_SEO.dentxone);

export default function Page() {
  return (
    <>
      <JsonLd
        id="breadcrumb"
        data={breadcrumbSchema([{ name: "DentXOne", path: PAGE_SEO.dentxone.path }])}
      />
      <DentxonePage />
    </>
  );
}
