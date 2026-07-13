import type { Metadata } from "next";
import ContactPage from "@/components/pages/ContactPage";
import { buildMetadata } from "@/lib/metadata";
import { PAGE_SEO } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(PAGE_SEO.contact);

export default function Page() {
  return <ContactPage />;
}
