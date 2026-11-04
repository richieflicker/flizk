import {
  Building2,
  ClipboardList,
  FlaskConical,
  ListOrdered,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import type { PAGE_SEO } from "@/lib/seo";

export type FeatureContent = {
  seoKey: keyof typeof PAGE_SEO;
  name: string; // short name used in breadcrumbs, cards and links
  badge: string;
  icon: LucideIcon;
  h1: string;
  intro: string;
  overviewTitle: string;
  overview: string[];
  highlights: { title: string; description: string }[];
  checklistTitle: string;
  checklist: string[];
  faqs: { question: string; answer: string }[];
  ctaTitle: string;
  related: string[]; // feature slugs
};

// Every capability below was checked against the DentXOne app. Do not add claims here that the
// product does not do; for plan/module availability, point people to Flizk instead of guessing.
export const FEATURES = {
  "queue-based-appointments": {
    seoKey: "featureQueue",
    name: "Queue-based appointments",
    badge: "Appointments",
    icon: ListOrdered,
    h1: "Queue-based appointments for dental clinics",
    intro:
      "Many Indian dental clinics run on patient queues and token numbers, not fixed time slots. DentXOne gives reception and doctors one live queue per specialty, so everyone can see who is next.",
    overviewTitle: "A live patient queue the whole clinic can see",
    overview: [
      "In a busy clinic, the front desk and the doctors need to look at the same list. DentXOne keeps a token-numbered queue for each specialty and updates it as patients check in, get called, complete treatment, cancel or are marked as no-shows.",
      "Scheduled appointments are still there when you need them. The queue sits next to a calendar and list view, so one system covers both the live day and what is booked ahead.",
    ],
    highlights: [
      {
        title: "Token numbers for every patient",
        description:
          "Each patient in the queue gets a token number shown with the clinic's display code, so reception and patients can refer to the same number.",
      },
      {
        title: "Live updates for reception and doctors",
        description:
          "Check-ins, cancellations, no-shows, completions and doctor claims show up on the queue as they happen, without refreshing the page.",
      },
      {
        title: "Doctors claim their patients",
        description:
          "A doctor can claim the next patient from the queue, or release them back if plans change, so it is clear who is with whom.",
      },
      {
        title: "Emergency flag",
        description:
          "Reception can mark a patient as an emergency. The case is flagged on the queue so the team notices it straight away.",
      },
      {
        title: "Follow-up visits",
        description:
          "Follow-up appointments can be approved or declined by the doctor, rescheduled, or added to the queue by reception.",
      },
      {
        title: "Schedules by specialty and day",
        description:
          "Each clinic sets its schedule windows by specialty and day of the week, and the queue and bookings follow them.",
      },
    ],
    checklistTitle: "What the queue covers",
    checklist: [
      "Token-numbered queue per specialty",
      "Check-in, cancel and no-show handling",
      "Doctor claim and release",
      "Emergency flag",
      "Follow-up approve, decline and reschedule",
      "Calendar and list views for booked appointments",
    ],
    faqs: [
      {
        question: "What is a queue-based appointment system?",
        answer:
          "It manages patients in the order they arrive or are called, usually with token numbers, instead of giving each patient a fixed time slot. It suits clinics where visit lengths vary and patients are seen in turn.",
      },
      {
        question: "Can patients still book appointments in advance with DentXOne?",
        answer:
          "Yes. DentXOne also has scheduled appointments with a calendar and list view, so you can run the live queue and advance bookings in the same system.",
      },
      {
        question: "Do the reception desk and the doctor see the same queue?",
        answer:
          "Yes. The queue updates live for reception and doctors, so a check-in at the front desk appears on the doctor's side without a refresh.",
      },
    ],
    ctaTitle: "See the DentXOne patient queue in a demo",
    related: ["dental-charting", "multi-clinic-management"],
  },

  "dental-charting": {
    seoKey: "featureCharting",
    name: "Dental charting",
    badge: "Clinical",
    icon: ClipboardList,
    h1: "Dental charting software with an FDI tooth chart",
    intro:
      "Record what you find and what you do, tooth by tooth. DentXOne's interactive tooth chart uses FDI numbering and works for adult, mixed and children's dentition.",
    overviewTitle: "An interactive tooth chart built into the patient record",
    overview: [
      "The chart shows the full arch. You select a tooth, then record its state, diagnosis, treatment, affected surfaces and notes. Only teeth that differ from healthy need a record, so charting stays quick during a consultation.",
      "Charts are part of the patient's history. A chart snapshot appears on the visit timeline, so a doctor opening a returning patient can see what was recorded before.",
    ],
    highlights: [
      {
        title: "FDI (ISO 3950) tooth numbering",
        description:
          "Teeth are numbered with the two-digit FDI system used in most of the world, with the patient's right on the left side of the chart.",
      },
      {
        title: "Diagnosis, treatment, surfaces and notes per tooth",
        description:
          "Each tooth has its own record, so findings and planned or completed treatment stay attached to the right tooth.",
      },
      {
        title: "Clear tooth states",
        description:
          "Mark a tooth as healthy, caries, filling, crown, implant, missing, extraction, erupting or planned, and read the chart at a glance with its legend.",
      },
      {
        title: "Adult, mixed and children's teeth",
        description:
          "The chart picks primary, mixed or permanent dentition from the patient's age, so paediatric patients are charted properly.",
      },
      {
        title: "Chart snapshots on the visit timeline",
        description:
          "Each visit keeps a snapshot of the chart, so you can look back at what was recorded earlier in the patient's treatment.",
      },
      {
        title: "Linked to lab work",
        description:
          "Lab cases such as crowns are tied to specific teeth, so the lab job and the chart agree.",
      },
    ],
    checklistTitle: "What you can record",
    checklist: [
      "Tooth state, diagnosis and treatment",
      "Affected surfaces and notes",
      "Primary, mixed and permanent dentition",
      "A chart snapshot for each visit",
      "Lab cases linked to teeth",
    ],
    faqs: [
      {
        question: "What tooth numbering system does DentXOne use?",
        answer:
          "DentXOne uses FDI (ISO 3950) two-digit numbering, for example 11 for the upper right central incisor.",
      },
      {
        question: "Does DentXOne support children's teeth?",
        answer:
          "Yes. The chart supports primary, mixed and permanent dentition and chooses the right one from the patient's age.",
      },
      {
        question: "Can I see a patient's earlier charts?",
        answer:
          "Yes. Chart snapshots from earlier visits appear on the patient's visit timeline.",
      },
    ],
    ctaTitle: "See the DentXOne dental chart in a demo",
    related: ["lab-work-tracking", "queue-based-appointments"],
  },

  "multi-clinic-management": {
    seoKey: "featureMultiClinic",
    name: "Multi-clinic management",
    badge: "Growth",
    icon: Building2,
    h1: "Multi-clinic dental software for branches and groups",
    intro:
      "Run more than one clinic from a single DentXOne account. Switch between branches, keep each clinic's schedule separate, and get a rollup across locations.",
    overviewTitle: "One account, several clinics",
    overview: [
      "Dental groups and growing practices need each branch to work on its own and still be managed as one business. DentXOne lets staff work inside their clinic while owners and managers see across the group.",
      "Multi-clinic management is part of the Enterprise plan on the pricing page. Contact Flizk to talk through your setup.",
    ],
    highlights: [
      {
        title: "Clinic switcher",
        description:
          "Staff who work at more than one branch switch clinics from the header, and see the clinics they are assigned to.",
      },
      {
        title: "All-clinics rollup for managers",
        description:
          "Tenant admins and clinic managers can view an all-clinics rollup, not only a single branch.",
      },
      {
        title: "A schedule for each clinic",
        description:
          "Each clinic has its own schedule by specialty and day, so branches with different hours or doctors are handled properly.",
      },
      {
        title: "Clinic manager dashboard",
        description:
          "Clinic managers get a dashboard built for running a branch day to day.",
      },
      {
        title: "Permissions per clinic",
        description:
          "Role permissions can be set for the whole organisation and then adjusted for a single clinic.",
      },
    ],
    checklistTitle: "Built for multi-branch practices",
    checklist: [
      "Multiple clinic locations in one account",
      "Switch between assigned clinics",
      "All-clinics rollup for admins and managers",
      "Per-clinic schedules",
      "Per-clinic permission overrides",
    ],
    faqs: [
      {
        question: "Which DentXOne plan supports multiple clinics?",
        answer:
          "Multi-clinic management is listed on the Enterprise plan. Contact Flizk for a quote based on your number of clinics.",
      },
      {
        question: "Can staff only see their own clinic?",
        answer:
          "Staff see the clinics they are assigned to. Tenant admins and clinic managers can also view an all-clinics rollup.",
      },
      {
        question: "Can each branch have different working hours?",
        answer:
          "Yes. Schedules are set per clinic, by specialty and day of the week.",
      },
    ],
    ctaTitle: "Talk to Flizk about running multiple clinics on DentXOne",
    related: ["role-management", "queue-based-appointments"],
  },

  "lab-work-tracking": {
    seoKey: "featureLabWork",
    name: "Lab work tracking",
    badge: "Lab",
    icon: FlaskConical,
    h1: "Dental lab work tracking from dispatch to fitting",
    intro:
      "Know where every crown and lab case is. DentXOne tracks each case from the doctor's visit, through your lab vendor, to the day it is fitted in the patient's mouth.",
    overviewTitle: "No more lost lab cases",
    overview: [
      "A doctor sends a case to the lab from the visit. Reception picks the lab vendor and dispatches it, and the case moves across a status board as it progresses. Everyone can see what is waiting, what is at the lab and what is ready.",
      "Lab vendors and what you owe them are kept in the same place, in rupees, so you do not need a separate notebook or sheet.",
    ],
    highlights: [
      {
        title: "Send a case from the visit",
        description:
          "The doctor creates the lab case during the patient's visit, linked to the teeth involved.",
      },
      {
        title: "Dispatch to a lab vendor",
        description:
          "Reception selects the vendor and dispatches the case, so each job has an owner on the lab side.",
      },
      {
        title: "A status board",
        description:
          "Cases move through awaiting dispatch, sent, in lab, ready, received, and fitted, with cancelled and remake states when plans change.",
      },
      {
        title: "Remakes",
        description:
          "If a case needs to be redone, it can be marked as a remake so it is not lost.",
      },
      {
        title: "Lab vendors",
        description:
          "Keep your lab vendors in the system and choose between them at dispatch.",
      },
      {
        title: "Lab payables",
        description:
          "See what is payable to each lab vendor, in rupees, next to the cases it relates to.",
      },
    ],
    checklistTitle: "What lab tracking covers",
    checklist: [
      "Lab cases linked to teeth",
      "Dispatch to a chosen vendor",
      "Status board from dispatch to fitting",
      "Remake and cancelled cases",
      "Vendor list and payables",
    ],
    faqs: [
      {
        question: "Can DentXOne track dental lab cases such as crowns?",
        answer:
          "Yes. A doctor sends a case from the visit, reception dispatches it to a lab vendor, and the case is tracked through to fitting on a status board.",
      },
      {
        question: "Can I work with more than one dental lab?",
        answer:
          "Yes. You can keep several lab vendors and choose the vendor when you dispatch each case.",
      },
      {
        question: "Is lab work included in every DentXOne plan?",
        answer:
          "Lab work is a module that is switched on for each clinic account. Contact Flizk to confirm what your plan includes.",
      },
    ],
    ctaTitle: "See DentXOne lab work tracking in a demo",
    related: ["dental-charting", "role-management"],
  },

  "role-management": {
    seoKey: "featureRoles",
    name: "Role management",
    badge: "Security",
    icon: ShieldCheck,
    h1: "Dental clinic staff roles and permissions",
    intro:
      "Give each team member access to what they need and nothing more. DentXOne role management controls what doctors, reception, accountants and admins can see and do.",
    overviewTitle: "Control access with a permission matrix",
    overview: [
      "Clinic software holds patient data and money. DentXOne lets an administrator set permissions for each role in a simple matrix, grouped by area, instead of giving everyone the same access.",
      "Defaults can be set for the whole organisation, then adjusted for an individual clinic when one branch works differently.",
    ],
    highlights: [
      {
        title: "Roles for a clinic team",
        description:
          "Tenant admin, clinic admin, doctor, reception and accountant roles cover who typically works in a dental clinic.",
      },
      {
        title: "A permission matrix",
        description:
          "Tick which permissions each role has, with permissions grouped so you can find the right ones quickly.",
      },
      {
        title: "Organisation-wide defaults",
        description:
          "Set role permissions once for the whole organisation, so every clinic starts from the same rules.",
      },
      {
        title: "Per-clinic overrides",
        description:
          "Add permissions for a role in one clinic without changing the rest, for branches that work differently.",
      },
    ],
    checklistTitle: "What you can control",
    checklist: [
      "Permissions by role",
      "Permissions grouped by area",
      "Organisation-wide defaults",
      "Per-clinic overrides",
    ],
    faqs: [
      {
        question: "Which staff roles does DentXOne have?",
        answer:
          "DentXOne has tenant admin, clinic admin, doctor, reception and accountant roles, each with its own set of permissions.",
      },
      {
        question: "Can different clinics have different permissions?",
        answer:
          "Yes. You set defaults for the organisation, and a single clinic can add permissions for a role on top of those defaults.",
      },
      {
        question: "Is role management included in every plan?",
        answer:
          "Role management is a module that is switched on for each account. Contact Flizk to confirm what your plan includes.",
      },
    ],
    ctaTitle: "See DentXOne role management in a demo",
    related: ["multi-clinic-management", "lab-work-tracking"],
  },
} satisfies Record<string, FeatureContent>;

export type FeatureSlug = keyof typeof FEATURES;
export const FEATURE_SLUGS = Object.keys(FEATURES) as FeatureSlug[];
