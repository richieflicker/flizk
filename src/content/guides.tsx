import type { PAGE_SEO } from "@/lib/seo";
import type { FeatureSlug } from "@/content/features";

export type GuideSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  steps?: { title: string; text: string }[];
};

export type GuideContent = {
  seoKey: keyof typeof PAGE_SEO;
  h1: string;
  intro: string;
  answerTitle: string;
  answer: string;
  published: string; // ISO date
  updated: string; // ISO date
  readingMinutes: number;
  sections: GuideSection[];
  relatedFeatures: FeatureSlug[];
  faqs: { question: string; answer: string }[];
  sources: { title: string; url: string; note: string }[];
};

// Guides must stay honest: paraphrase sources, no invented statistics, say plainly when data
// is from another country or from a vendor. Update `updated` when the content changes.
export const GUIDES = {
  "reduce-dental-no-shows-india": {
    seoKey: "guideNoShows",
    h1: "How to reduce no-shows at a dental clinic in India",
    intro:
      "Missed appointments leave empty chairs and waste the doctor's time. This guide explains what counts as a no-show, what the research says about reminders, and a simple plan an Indian dental clinic can run using WhatsApp and a live queue.",
    answerTitle: "The short answer",
    answer:
      "Confirm every appointment when it is booked, send a reminder the day before and another on the morning of the visit, make it easy for patients to reply to reschedule, and track your no-show rate every month. Automated reminders are the part with the best evidence: in a large five-year study by a dental software vendor, they cut no-shows by about 23% in dental practices. Most published data is from US clinics, so measure your own numbers.",
    published: "2026-11-04",
    updated: "2026-11-04",
    readingMinutes: 6,
    sections: [
      {
        heading: "What counts as a no-show, and what does not",
        paragraphs: [
          "Clinics often mix these up, which makes the numbers useless. Decide on one definition and use it every month.",
        ],
        bullets: [
          "No-show: the patient does not come and does not tell you in advance.",
          "Late cancellation: the patient cancels too close to the appointment for you to fill the slot.",
          "Reschedule: the patient moves the appointment to another day. This is a kept patient, not a lost one.",
        ],
      },
      {
        heading: "How common are no-shows? What the data says, and what it does not",
        paragraphs: [
          "Published figures vary a lot. One US dental marketing agency, citing a 2026 industry report, puts the average no-show rate at 6.9% and the cancellation rate at 12.9%. Other sources quote an average closer to 15%, and some practices report much more. The spread mostly comes from how clinics count.",
          "We did not find reliable published no-show data for Indian dental clinics. Treat the US numbers as a rough guide only, and work out your own: the number of no-shows divided by the number of booked appointments over a month.",
        ],
      },
      {
        heading: "Do reminders actually work?",
        paragraphs: [
          "Yes, with some caveats. A five-year study run by the dental software vendor Sesame Communications looked at more than 21 million appointments across 491 practices. It reported that no-shows in dental practices fell by about 23% over the first 36 months of using automated reminders. The study was done by a vendor in the US, so read it as encouraging, not as a guarantee.",
          "A study of an orthodontic practice found that patients who chose text-message reminders had the lowest no-show rate, at 1.90%. But the differences between phone, email and text were not statistically significant, and the authors suggested letting patients choose how they are reminded. The practical lesson is to use the channel your patients actually read.",
          "A second touch can help the patients most likely to miss. A US marketing agency's summary of a Penn Medicine trial, in a general medical setting and not a dental one, reported that adding automated voice calls on top of text reminders cut no-shows among high-risk patients from 11.3% to 9.6%.",
        ],
      },
      {
        heading: "A reminder plan an Indian dental clinic can run",
        steps: [
          {
            title: "Confirm at booking",
            text: "Before the patient leaves the desk or ends the call, repeat the date, time, doctor and clinic location, and tell them how to cancel or reschedule. A booking the patient did not really register is the easiest one to forget.",
          },
          {
            title: "Remind twice",
            text: "A common pattern is one reminder the day before and a second on the morning of the visit. For longer or more costly treatment, add a reminder a week ahead. Adjust this based on what your own numbers show.",
          },
          {
            title: "Use WhatsApp, and keep it short",
            text: "India is WhatsApp's largest market, and most patients already read their messages there. Include the clinic name, the date and time, and one line saying how to reschedule.",
          },
          {
            title: "Make rescheduling easy",
            text: "One agency's analysis argues that patients often avoid phoning to cancel because it feels awkward, but will happily send a message. Whether or not that is true for your patients, a patient who reschedules is a kept appointment, not a no-show.",
          },
          {
            title: "Plan for queue and walk-in days",
            text: "If your clinic runs on token numbers, remind patients of the day and the rough time window, and mark late arrivals and no-shows promptly so the queue keeps moving and the doctor is not left waiting.",
          },
          {
            title: "State your cancellation policy",
            text: "Tell patients when they book, and again in the reminder, how much notice you need. Some clinics ask for a small advance for long or expensive procedures. Decide what suits your patients before you introduce one.",
          },
          {
            title: "Follow up on missed visits",
            text: "Message patients who missed within a day or two and offer a new slot. Many will rebook if you ask kindly and do not make them feel judged.",
          },
        ],
      },
      {
        heading: "Track four numbers every month",
        bullets: [
          "No-show rate: no-shows divided by booked appointments.",
          "Short-notice cancellation rate: cancellations too late to refill.",
          "Same-day fill rate: how many empty slots you managed to fill.",
          "Recovery rate: missed appointments rebooked within about a week.",
        ],
        paragraphs: [
          "If you can, split the no-show rate by doctor, day of the week and type of treatment. Patterns often show up there, for example a particular day or a long first visit that patients tend to skip.",
        ],
      },
      {
        heading: "Where DentXOne fits in",
        paragraphs: [
          "Full disclosure: Flizk makes DentXOne, so this is our own product. DentXOne sends automated WhatsApp appointment reminders, keeps a live token-numbered queue for each specialty, and lets staff mark a patient as checked in, cancelled or a no-show so the day's record stays accurate. Scheduled appointments are available in a calendar and list view next to the queue.",
          "No software makes patients come, and we do not promise a specific reduction. What it does is take the reminder work off your front desk and give you a clean record of what happened, so you can see your own rate and improve it.",
        ],
      },
    ],
    relatedFeatures: ["queue-based-appointments", "dental-charting"],
    faqs: [
      {
        question: "What is a normal dental no-show rate?",
        answer:
          "It depends on how a clinic counts. US sources quote anything from about 7% to 15% or more. We found no reliable data for Indian dental clinics, so the best benchmark is your own rate from month to month.",
      },
      {
        question: "Are WhatsApp reminders better than SMS?",
        answer:
          "We did not find a dental study that compares WhatsApp and SMS directly. WhatsApp's advantage in India is practical: it is where most patients already read messages, and it lets them reply easily.",
      },
      {
        question: "How many reminders should a clinic send?",
        answer:
          "Two is a sensible starting point: one the day before and one on the morning of the appointment. Add an earlier reminder for longer treatments, then check your numbers and adjust.",
      },
      {
        question: "Should a clinic charge for missed appointments?",
        answer:
          "That is a business decision. Some clinics ask for a small advance on long or expensive procedures. Whatever you choose, tell patients the policy when they book and again in the reminder.",
      },
    ],
    sources: [
      {
        title: "Study quantifies automated patient reminder impact (Dr. Bicuspid)",
        url: "https://www.drbicuspid.com/dental-business/dental-education/article/15366420/study-quantifies-automated-patient-reminder-impact",
        note: "Summary of the Sesame Communications five-year study of automated reminders.",
      },
      {
        title: "Patient-chosen appointment reminder methods and no-show rates, Angle Orthodontist (PubMed Central)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8288327/",
        note: "Retrospective study in a single orthodontic practice.",
      },
      {
        title: "Reducing Dental No-Shows: The Reminder System and Recovery Sequence (HIP Agency)",
        url: "https://hip.agency/?p=25039",
        note: "Agency article citing Planet DDS 2026 industry data and a Penn Medicine trial.",
      },
      {
        title: "Top 10 Ways To Reduce Dental No Shows After Patients Schedule (DOCS Education)",
        url: "https://www.docseducation.com/node/53377",
        note: "Practical steps including tracking by appointment type and clear cancellation policies.",
      },
    ],
  },
} satisfies Record<string, GuideContent>;

export type GuideSlug = keyof typeof GUIDES;
export const GUIDE_SLUGS = Object.keys(GUIDES) as GuideSlug[];
