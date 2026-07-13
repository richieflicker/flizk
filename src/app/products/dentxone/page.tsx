import type { Metadata } from "next";
import DentxonePage from "@/components/pages/DentxonePage";
import { buildMetadata } from "@/lib/metadata";
import { PAGE_SEO } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(PAGE_SEO.dentxone);

export default function Page() {
  return <DentxonePage />;
}
