import type { Metadata } from "next";
import TermsPage from "@/components/pages/TermsPage";
import { buildMetadata } from "@/lib/metadata";
import { PAGE_SEO } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(PAGE_SEO.terms);

export default function Page() {
  return <TermsPage />;
}
