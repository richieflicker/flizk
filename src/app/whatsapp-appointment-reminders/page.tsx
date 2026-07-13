import type { Metadata } from "next";
import WhatsAppRemindersPage from "@/components/pages/WhatsAppRemindersPage";
import { buildMetadata } from "@/lib/metadata";
import { PAGE_SEO } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(PAGE_SEO.whatsappReminders);

export default function Page() {
  return <WhatsAppRemindersPage />;
}
