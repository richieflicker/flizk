import type { Metadata } from "next";
import { CityPage } from "@/components/pages/CityPage";
import { buildMetadata } from "@/lib/metadata";
import { PAGE_SEO } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(PAGE_SEO.cityMadurai);

export default function Page() {
  return <CityPage slug="dental-clinic-software-madurai" />;
}
