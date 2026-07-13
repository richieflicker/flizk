import type { Metadata } from "next";
import PricingPage from "@/components/pages/PricingPage";
import { buildMetadata } from "@/lib/metadata";
import { PAGE_SEO } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(PAGE_SEO.pricing);

export default function Page() {
  return <PricingPage />;
}
