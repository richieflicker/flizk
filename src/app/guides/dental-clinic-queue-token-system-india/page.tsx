import type { Metadata } from "next";
import { GuidePage } from "@/components/pages/GuidePage";
import { buildMetadata } from "@/lib/metadata";
import { PAGE_SEO } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(PAGE_SEO.guideQueueToken);

export default function Page() {
  return <GuidePage slug="dental-clinic-queue-token-system-india" />;
}
