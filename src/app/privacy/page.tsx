import type { Metadata } from "next";
import PrivacyPage from "@/components/pages/PrivacyPage";
import { buildMetadata } from "@/lib/metadata";
import { PAGE_SEO } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(PAGE_SEO.privacy);

export default function Page() {
  return <PrivacyPage />;
}
