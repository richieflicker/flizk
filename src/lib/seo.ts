export const SITE_URL = "https://flizk.com";
export const SITE_NAME = "Flizk";

export type PageSeo = {
  title: string;
  description: string;
  path: string;
};

export const PAGE_SEO = {
  home: {
    title: "DentXOne – Dental Clinic Software for Chennai | Flizk",
    description:
      "WhatsApp-integrated dental clinic software for Chennai & Tamil Nadu: patient records, dental charting, appointments and automated reminders.",
    path: "/",
  },
  dentxone: {
    title: "DentXOne – Dental Clinic Management Software | Flizk",
    description:
      "Manage patients, appointments, treatments, billing and WhatsApp reminders in one cloud-based dental clinic software built for Indian clinics.",
    path: "/products/dentxone",
  },
  pricing: {
    title: "DentXOne Pricing – Dental Clinic Software | Flizk",
    description:
      "Compare DentXOne plans for dental clinics in Chennai and Tamil Nadu. Contact Flizk for a demo or a custom quote.",
    path: "/pricing",
  },
  chennai: {
    title: "Dental Clinic Software Chennai – DentXOne | Flizk",
    description:
      "DentXOne is dental clinic management software for Chennai and Tamil Nadu practices: WhatsApp reminders, patient records and billing in one platform.",
    path: "/dental-clinic-software-chennai",
  },
  cityMadurai: {
    title: "Dental Clinic Software Madurai – DentXOne | Flizk",
    description:
      "DentXOne is cloud dental clinic software for Madurai clinics: live patient queue, dental charting, billing and WhatsApp appointment reminders.",
    path: "/dental-clinic-software-madurai",
  },
  cityCoimbatore: {
    title: "Dental Clinic Software Coimbatore – DentXOne | Flizk",
    description:
      "DentXOne is cloud dental clinic software for Coimbatore practices: charting, lab work tracking, staff roles, billing and WhatsApp reminders.",
    path: "/dental-clinic-software-coimbatore",
  },
  cityVirudhunagar: {
    title: "Dental Clinic Software Virudhunagar – DentXOne | Flizk",
    description:
      "Simple cloud dental clinic software for Virudhunagar district clinics: patient records, queue, billing and WhatsApp appointment reminders.",
    path: "/dental-clinic-software-virudhunagar",
  },
  cityKanyakumari: {
    title: "Dental Clinic Software Kanyakumari – DentXOne | Flizk",
    description:
      "DentXOne is cloud dental clinic software for Kanyakumari district clinics and branches: charting, billing, roles and WhatsApp reminders.",
    path: "/dental-clinic-software-kanyakumari",
  },
  whatsappReminders: {
    title: "WhatsApp Appointment Reminders for Dental Clinics | DentXOne",
    description:
      "Cut no-shows with DentXOne WhatsApp appointment booking and automated reminders, built for dental clinics in Chennai, Tamil Nadu and across India.",
    path: "/whatsapp-appointment-reminders",
  },
  featureQueue: {
    title: "Queue-Based Dental Appointment Software | DentXOne",
    description:
      "Token-numbered patient queues for dental clinics with live updates, check-in, emergency flags and follow-ups. See how DentXOne runs the clinic day.",
    path: "/features/queue-based-appointments",
  },
  featureCharting: {
    title: "Dental Charting Software with FDI Tooth Chart | DentXOne",
    description:
      "Interactive FDI tooth chart for dental clinics: record diagnosis, treatment and surfaces per tooth for adult, mixed and children's dentition.",
    path: "/features/dental-charting",
  },
  featureMultiClinic: {
    title: "Multi-Clinic Dental Software for Branches | DentXOne",
    description:
      "Run several dental clinic branches from one DentXOne account: switch between clinics, set schedules per clinic and see a rollup across locations.",
    path: "/features/multi-clinic-management",
  },
  featureLabWork: {
    title: "Dental Lab Work Tracking Software | DentXOne",
    description:
      "Track crowns and other dental lab cases from dispatch to fitting: vendor assignment, a status board, remakes and lab payables in DentXOne.",
    path: "/features/lab-work-tracking",
  },
  featureRoles: {
    title: "Dental Clinic Staff Roles & Permissions | DentXOne",
    description:
      "Control what doctors, reception, accountants and admins can see and do with DentXOne role management and per-clinic permission overrides.",
    path: "/features/role-management",
  },
  guides: {
    title: "Guides for Dental Clinics in India | Flizk",
    description:
      "Practical guides for dental clinic owners in India on reducing no-shows, running the front desk and getting more from clinic software.",
    path: "/guides",
  },
  guideNoShows: {
    title: "How to Reduce Dental No-Shows in India (Guide) | Flizk",
    description:
      "A practical guide for Indian dental clinics: what counts as a no-show, what research says about reminders, and a step-by-step plan using WhatsApp.",
    path: "/guides/reduce-dental-no-shows-india",
  },
  guideQueueToken: {
    title: "Dental Clinic Token & Queue System in India (Guide) | Flizk",
    description:
      "Walk-in, appointment or token queue? A practical guide for Indian dental clinics on running a fair queue and what the research says about waiting.",
    path: "/guides/dental-clinic-queue-token-system-india",
  },
  about: {
    title: "About Flizk – Healthcare Technology Company",
    description:
      "Flizk builds software platforms for clinics. Learn about our mission and DentXOne, our dental clinic software for Chennai and Tamil Nadu.",
    path: "/about",
  },
  contact: {
    title: "Contact Flizk – Book a DentXOne Demo",
    description:
      "Contact Flizk to book a DentXOne demo or ask about plans for your dental clinic in Chennai, Tamil Nadu, or across India.",
    path: "/contact",
  },
  privacy: {
    title: "Privacy Policy | Flizk DentXOne",
    description:
      "How DentXOne by Flizk collects, uses and protects patient data for WhatsApp appointment messaging, including consent, opt-out and deletion.",
    path: "/privacy",
  },
  terms: {
    title: "Terms of Service | Flizk DentXOne",
    description:
      "Terms of service for DentXOne by Flizk: the service, WhatsApp messaging, clinic responsibilities, accounts, fees and liability.",
    path: "/terms",
  },
} as const satisfies Record<string, PageSeo>;

export function pageUrl(path: string): string {
  return `${SITE_URL}${path === "/" ? "" : path}`;
}
