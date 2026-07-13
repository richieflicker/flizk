import type { Metadata } from "next";
import { HomePage } from "@/components/pages/HomePage";
import { buildMetadata } from "@/lib/metadata";
import { PAGE_SEO } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(PAGE_SEO.home);

export default function Page() {
  return <HomePage />;
}
