import type { Metadata } from "next";
import WhatsAppRemindersPage from "@/components/pages/WhatsAppRemindersPage";
import { buildMetadata } from "@/lib/metadata";
import { PAGE_SEO } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata(PAGE_SEO.whatsappReminders);

export default function Page() {
  return (
    <>
      <JsonLd
        id="breadcrumb"
        data={breadcrumbSchema([{ name: "WhatsApp Appointment Reminders", path: PAGE_SEO.whatsappReminders.path }])}
      />
      <WhatsAppRemindersPage />
    </>
  );
}
