export const SITE_URL = "https://flizk.com";
export const SITE_NAME = "Flizk";

export type PageSeo = {
  title: string;
  description: string;
  path: string;
};

export const PAGE_SEO = {
  home: {
    title: "DentXOne – Dental Clinic Management Software for Chennai & Tamil Nadu Clinics | Flizk",
    description:
      "DentXOne by Flizk: WhatsApp-integrated dental practice management software for clinics in Chennai & Tamil Nadu. Patient records, dental charting, appointment booking & automated reminders. Built for Indian dental practices.",
    path: "/",
  },
  dentxone: {
    title: "DentXOne – Dental Clinic Management Software for India | Flizk",
    description:
      "DentXOne helps dental practices in Chennai, Tamil Nadu, and across India manage patients, appointments, treatments, billing, and WhatsApp reminders. Cloud-based dental clinic software built for Indian clinics.",
    path: "/products/dentxone",
  },
  pricing: {
    title: "DentXOne Plans – Dental Clinic Software for Chennai & Tamil Nadu | Flizk",
    description:
      "Compare DentXOne plans for dental clinics in Chennai and Tamil Nadu. Contact Flizk for a demo or custom quote — WhatsApp reminders, patient records, and practice management included.",
    path: "/pricing",
  },
  chennai: {
    title: "Dental Clinic Software Chennai – DentXOne by Flizk",
    description:
      "DentXOne is dental clinic management software built for Chennai and Tamil Nadu practices. WhatsApp appointment reminders, patient records, billing, and operations in one platform.",
    path: "/dental-clinic-software-chennai",
  },
  whatsappReminders: {
    title: "WhatsApp Appointment Reminders for Dental Clinics | DentXOne",
    description:
      "Reduce no-shows with DentXOne WhatsApp appointment booking and automated reminders for dental clinics in India. Built for Chennai and Tamil Nadu practices.",
    path: "/whatsapp-appointment-reminders",
  },
  about: {
    title: "About Flizk – Healthcare Technology Company",
    description:
      "Flizk is a healthcare technology company building software platforms for clinics. Learn about our mission, team, and DentXOne dental clinic software for Chennai & Tamil Nadu.",
    path: "/about",
  },
  contact: {
    title: "Contact Flizk – Book a DentXOne Demo",
    description:
      "Contact Flizk to book a DentXOne demo or ask about plans for your dental clinic in Chennai, Tamil Nadu, or across India.",
    path: "/contact",
  },
  privacy: {
    title: "Privacy Policy | Flizk",
    description: "How Flizk collects, uses, and protects your information when you use our website and contact forms.",
    path: "/privacy",
  },
  terms: {
    title: "Terms of Service | Flizk",
    description: "Terms of service for using the Flizk website and DentXOne marketing information.",
    path: "/terms",
  },
} as const satisfies Record<string, PageSeo>;

export function pageUrl(path: string): string {
  return `${SITE_URL}${path === "/" ? "" : path}`;
}
