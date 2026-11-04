import type { Metadata } from "next";
import PricingPage from "@/components/pages/PricingPage";
import { buildMetadata } from "@/lib/metadata";
import { PAGE_SEO } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata(PAGE_SEO.pricing);

export default function Page() {
  return (
    <>
      <JsonLd
        id="breadcrumb"
        data={breadcrumbSchema([{ name: "Pricing", path: PAGE_SEO.pricing.path }])}
      />
      <PricingPage />
    </>
  );
}
