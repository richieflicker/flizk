import type { Metadata } from "next";
import ChennaiLandingPage from "@/components/pages/ChennaiLandingPage";
import { buildMetadata } from "@/lib/metadata";
import { PAGE_SEO } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(PAGE_SEO.chennai);

export default function Page() {
  return <ChennaiLandingPage />;
}
