import type { Metadata } from "next";
import { FeaturePage } from "@/components/pages/FeaturePage";
import { buildMetadata } from "@/lib/metadata";
import { PAGE_SEO } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(PAGE_SEO.featureQueue);

export default function Page() {
  return <FeaturePage slug="queue-based-appointments" />;
}
