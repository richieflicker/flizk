import type { Metadata } from "next";
import ContactPage from "@/components/pages/ContactPage";
import { buildMetadata } from "@/lib/metadata";
import { PAGE_SEO } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata(PAGE_SEO.contact);

export default function Page() {
  return (
    <>
      <JsonLd
        id="breadcrumb"
        data={breadcrumbSchema([{ name: "Contact", path: PAGE_SEO.contact.path }])}
      />
      <ContactPage />
    </>
  );
}
