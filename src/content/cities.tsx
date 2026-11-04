import type { PAGE_SEO } from "@/lib/seo";
import type { FeatureSlug } from "@/content/features";

export type CityContent = {
  seoKey: keyof typeof PAGE_SEO;
  city: string;
  region: string; // shown in the hero badge
  h1: string;
  intro: string;
  whyTitle: string;
  why: string[];
  areasTitle: string;
  areas: string[]; // towns / localities the page speaks to
  focusTitle: string;
  focus: { title: string; description: string; feature: FeatureSlug | "whatsapp" }[];
  faqs: { question: string; answer: string }[];
  ctaTitle: string;
};

// Keep these pages honest and distinct: no invented statistics, no claims of a local office or
// local customers. Capabilities must match the DentXOne app (see content/features.tsx).
export const CITIES = {
  "dental-clinic-software-madurai": {
    seoKey: "cityMadurai",
    city: "Madurai",
    region: "Madurai & southern Tamil Nadu",
    h1: "Dental clinic software in Madurai",
    intro:
      "DentXOne by Flizk helps Madurai dental clinics run the day from one cloud dashboard: patient queue, appointments, dental charting, billing and WhatsApp reminders.",
    whyTitle: "Built for clinics that see patients from across the district",
    why: [
      "Madurai is one of southern Tamil Nadu's busiest cities for healthcare, and many patients travel in from the towns around it. For a clinic, that makes every missed or badly timed visit expensive.",
      "DentXOne keeps a live, token-numbered queue so reception and doctors always agree on who is next, and WhatsApp reminders help patients arrive on the day and time they were given.",
    ],
    areasTitle: "For clinics in Madurai and the towns around it",
    areas: ["Madurai city", "Thirumangalam", "Melur", "Usilampatti"],
    focusTitle: "What Madurai clinics use most",
    focus: [
      {
        title: "Live queue with token numbers",
        description:
          "Patients are seen in turn. Reception and the doctor share one live queue, with an emergency flag when a case cannot wait.",
        feature: "queue-based-appointments",
      },
      {
        title: "A second branch in a nearby town",
        description:
          "Run a Madurai clinic and a branch in another town from one account, with a schedule for each clinic.",
        feature: "multi-clinic-management",
      },
      {
        title: "Charting that follows the patient",
        description:
          "Record findings tooth by tooth on an FDI chart, and see earlier visits when a patient returns.",
        feature: "dental-charting",
      },
    ],
    faqs: [
      {
        question: "Is DentXOne available for dental clinics in Madurai?",
        answer:
          "Yes. DentXOne is cloud-based, so a clinic in Madurai can use it from a computer or tablet. Contact Flizk to book a demo and talk through your setup.",
      },
      {
        question: "Can I run a clinic in Madurai and another in a nearby town?",
        answer:
          "Yes. DentXOne supports multiple clinic locations in one account, with a clinic switcher and a separate schedule for each clinic. Multi-clinic management is part of the multi-clinic plan.",
      },
      {
        question: "Does DentXOne suit clinics that see patients in turn instead of by appointment?",
        answer:
          "Yes. DentXOne has a token-numbered live queue for each specialty, next to normal scheduled appointments, so you can run either style or both.",
      },
    ],
    ctaTitle: "Ready for dental clinic software that fits Madurai?",
  },

  "dental-clinic-software-coimbatore": {
    seoKey: "cityCoimbatore",
    city: "Coimbatore",
    region: "Coimbatore & western Tamil Nadu",
    h1: "Dental clinic software in Coimbatore",
    intro:
      "DentXOne by Flizk gives Coimbatore dental clinics one place for patient records, dental charts, appointments, lab cases, billing and WhatsApp reminders.",
    whyTitle: "For practices of every size, from one chair to many",
    why: [
      "Coimbatore has dental practices of every size, from single-doctor clinics to multi-chair centres with a full team. As a team grows, the work shifts from keeping records to coordinating people: who sees which patient, who sends the crown to the lab, who handles billing.",
      "DentXOne is built for that coordination. Doctors, reception and accountants get their own roles, lab cases are tracked from dispatch to fitting, and everything sits in one cloud account.",
    ],
    areasTitle: "For clinics across Coimbatore",
    areas: ["Gandhipuram", "RS Puram", "Peelamedu", "Saravanampatti", "Singanallur", "Pollachi"],
    focusTitle: "What Coimbatore clinics use most",
    focus: [
      {
        title: "Lab work, tracked end to end",
        description:
          "Send a crown from the visit, dispatch it to your lab vendor and follow it on a status board until it is fitted.",
        feature: "lab-work-tracking",
      },
      {
        title: "Roles for a growing team",
        description:
          "Give doctors, reception and accountants only the access they need, with a permission matrix you control.",
        feature: "role-management",
      },
      {
        title: "Detailed dental charting",
        description:
          "An FDI tooth chart with diagnosis, treatment and surfaces per tooth, for adults and children.",
        feature: "dental-charting",
      },
    ],
    faqs: [
      {
        question: "Is DentXOne dental clinic software available in Coimbatore?",
        answer:
          "Yes. DentXOne is cloud-based and works for dental clinics in Coimbatore. Contact Flizk to book a demo.",
      },
      {
        question: "Can DentXOne track crowns and other dental lab cases?",
        answer:
          "Yes. A doctor sends a lab case from the visit, reception dispatches it to a vendor, and the case moves across a status board until it is fitted. Lab work is a module that is switched on per clinic account, so contact Flizk to confirm what your plan includes.",
      },
      {
        question: "Can I control what each staff member can see?",
        answer:
          "Yes. DentXOne has roles for admin, doctor, reception and accountant, with permissions you can set for the whole organisation and adjust for a single clinic.",
      },
    ],
    ctaTitle: "Ready for dental clinic software that fits Coimbatore?",
  },

  "dental-clinic-software-virudhunagar": {
    seoKey: "cityVirudhunagar",
    city: "Virudhunagar",
    region: "Virudhunagar district",
    h1: "Dental clinic software in Virudhunagar",
    intro:
      "DentXOne by Flizk helps dental clinics in Virudhunagar district replace paper registers with simple cloud software: patient records, appointments, billing and WhatsApp reminders.",
    whyTitle: "Simple, cloud-based software for district and small-town clinics",
    why: [
      "Dental clinics in Virudhunagar district are often run by a small team: one or two doctors and a receptionist, serving patients from the town and surrounding villages. They need software that is quick to learn and does not require a server or an IT person.",
      "DentXOne runs in the cloud and works from a computer or tablet. Patient records, treatment history, billing and WhatsApp reminders are in one place, and the clinic's data is not tied to a single machine in the back room.",
    ],
    areasTitle: "For clinics across the district",
    areas: ["Virudhunagar town", "Sivakasi", "Rajapalayam", "Aruppukottai", "Srivilliputhur"],
    focusTitle: "What district clinics use most",
    focus: [
      {
        title: "WhatsApp appointment reminders",
        description:
          "Patients who travel in from villages get a reminder on WhatsApp, which helps avoid wasted trips and empty chairs.",
        feature: "whatsapp",
      },
      {
        title: "A live queue for busy days",
        description:
          "Token numbers keep the waiting room orderly when patients are seen in turn, and the doctor sees the same queue as reception.",
        feature: "queue-based-appointments",
      },
      {
        title: "Records that follow the patient",
        description:
          "Chart each tooth, record treatment, and see earlier visits when the patient comes back.",
        feature: "dental-charting",
      },
    ],
    faqs: [
      {
        question: "Can a small dental clinic in Virudhunagar use DentXOne?",
        answer:
          "Yes. DentXOne has plans for single clinics, and it runs in the cloud, so there is no server to buy or maintain. Contact Flizk to talk through the right plan for your clinic.",
      },
      {
        question: "Do I need special equipment to run DentXOne?",
        answer:
          "No. DentXOne is cloud-based, so you can use it from a computer or tablet with an internet connection.",
      },
      {
        question: "Can DentXOne send appointment reminders on WhatsApp?",
        answer:
          "Yes. DentXOne sends automated WhatsApp appointment reminders to patients to help reduce no-shows. Contact Flizk for details on how it is set up for your clinic.",
      },
    ],
    ctaTitle: "Ready for dental clinic software that fits Virudhunagar?",
  },

  "dental-clinic-software-kanyakumari": {
    seoKey: "cityKanyakumari",
    city: "Kanyakumari",
    region: "Kanyakumari district",
    h1: "Dental clinic software in Kanyakumari",
    intro:
      "DentXOne by Flizk helps dental clinics in Kanyakumari district manage patients, appointments, charts, billing and WhatsApp reminders, including clinics with branches across several towns.",
    whyTitle: "For clinics and clinic groups spread across the district",
    why: [
      "Kanyakumari district has several busy towns close together, and it is common for a dentist to see patients in more than one of them, or to open a second clinic as a practice grows.",
      "DentXOne lets you run each clinic from the same account with its own schedule, switch between them in one click, and keep patient records and billing organised, whichever branch the patient visits.",
    ],
    areasTitle: "For clinics across Kanyakumari district",
    areas: ["Nagercoil", "Marthandam", "Thuckalay", "Colachel", "Kuzhithurai"],
    focusTitle: "What Kanyakumari clinics use most",
    focus: [
      {
        title: "One account, several branches",
        description:
          "Run a clinic in Nagercoil and another in a nearby town together, with a schedule for each and a rollup for the owner.",
        feature: "multi-clinic-management",
      },
      {
        title: "Staff access you control",
        description:
          "Give reception, doctors and accountants the right access at every branch, with per-clinic overrides when a branch works differently.",
        feature: "role-management",
      },
      {
        title: "Charting for every patient",
        description:
          "An FDI tooth chart that handles adult, mixed and children's teeth, with a snapshot kept for each visit.",
        feature: "dental-charting",
      },
    ],
    faqs: [
      {
        question: "Is DentXOne available for dental clinics in Kanyakumari?",
        answer:
          "Yes. DentXOne is cloud-based, so clinics in Nagercoil and across Kanyakumari district can use it from a computer or tablet. Contact Flizk to book a demo.",
      },
      {
        question: "Can I manage clinics in two different towns from one account?",
        answer:
          "Yes. DentXOne supports multiple clinic locations in one account, with a clinic switcher and a schedule for each clinic. Multi-clinic management is part of the multi-clinic plan.",
      },
      {
        question: "Can each branch have different staff permissions?",
        answer:
          "Yes. You set role permissions for the whole organisation and can add permissions for a role in a single clinic.",
      },
    ],
    ctaTitle: "Ready for dental clinic software that fits Kanyakumari?",
  },
} satisfies Record<string, CityContent>;

export type CitySlug = keyof typeof CITIES;
export const CITY_SLUGS = Object.keys(CITIES) as CitySlug[];
