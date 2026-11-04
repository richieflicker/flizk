import type { PAGE_SEO } from "@/lib/seo";
import type { FeatureSlug } from "@/content/features";

export type GuideSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  steps?: { title: string; text: string }[];
  table?: { headers: string[]; rows: string[][] };
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
  "dental-clinic-queue-token-system-india": {
    seoKey: "guideQueueToken",
    h1: "Queue and token systems for dental clinics in India: walk-in vs appointment",
    intro:
      "Most Indian dental clinics run a mix of booked patients and walk-ins. This guide compares walk-in, appointment and token-queue models, explains how to run a token queue fairly, and shares what the research says about waiting.",
    answerTitle: "The short answer",
    answer:
      "For most Indian clinics, a hybrid works best: take bookings for planned treatments, accept walk-ins into the same queue, and give every patient a token number so everyone can see the order. Write down your rules for emergencies, late arrivals and follow-ups before you need them. One Management Science field study in Indian clinics found that alphanumeric tokens (a letter plus a number) led to lower perceived waiting than plain numbers in most cases. We found no study of token queues in Indian dental clinics specifically, so track your own waiting times.",
    published: "2026-11-04",
    updated: "2026-11-04",
    readingMinutes: 7,
    sections: [
      {
        heading: "Why waiting matters",
        paragraphs: [
          "A small cross-sectional study at a dental clinic in Medan, Indonesia (100 follow-up patients, 2026) found that just over half of patients rated the waiting time as poor, and that waiting time was significantly associated with satisfaction. The authors suggest that predicting service time and telling patients what to expect could help. It is a small study from another country, so read it as a pointer, not a benchmark for India.",
          "The practical lesson is simple: patients judge a clinic by how the wait feels as much as by the treatment, so it is worth managing both the length of the wait and what patients are told about it.",
        ],
      },
      {
        heading: "Walk-in, appointment or token queue: how they compare",
        paragraphs: [
          "These are not exclusive. Many clinics run all three at once. The table shows what each one is good and bad at.",
        ],
        table: {
          headers: ["Model", "Works well when", "Main weakness"],
          rows: [
            [
              "Walk-in only",
              "Most visits are short, such as checkups, pain or minor problems, and patients live nearby.",
              "Unpredictable load. Busy hours create crowds and idle gaps appear at other times.",
            ],
            [
              "Appointment only",
              "Treatments are long and planned, such as root canals, implants and orthodontics.",
              "Turns away people with sudden pain. Empty slots appear when patients do not show up.",
            ],
            [
              "Token queue (hybrid)",
              "You have both booked patients and walk-ins and want one visible order.",
              "Needs clear rules for emergencies and for booked patients, or people feel it is unfair.",
            ],
          ],
        },
      },
      {
        heading: "Separate queues, or one shared queue?",
        paragraphs: [
          "A 2023 simulation study of an outpatient clinic registration system (published in IJERPH) compared one shared queue, with priority for patients who had appointments, against separate queues with dedicated staff for walk-ins. In the simulation, splitting the queues did not meaningfully shorten walk-in waits, could lengthen waits for appointment holders, and served fewer patients overall because staff sat idle while others were busy.",
          "Separate queues helped walk-ins more when walk-in volume was high and fewer booked patients missed their slots. This was a simulation of a registration desk, not a dental clinic, so it supports a cautious conclusion: start with one shared queue and only split it if your own waiting times show a reason to.",
        ],
      },
      {
        heading: "How a token system works",
        steps: [
          {
            title: "Issue a token at check-in",
            text: "Every patient gets a token when they arrive or check in, whether they booked or walked in. The token, not the arrival impression, defines the order.",
          },
          {
            title: "Show the queue where patients can see it",
            text: "Display the current token on a screen or read it out. A visible order is what makes a queue feel fair.",
          },
          {
            title: "Call patients by token",
            text: "Call by token number so names stay private and the order stays clear, even in a crowded waiting area.",
          },
          {
            title: "Record what happened",
            text: "Mark each token as seen, cancelled or no-show. Those records are what let you measure waiting later.",
          },
        ],
      },
      {
        heading: "Designing the token: letters plus numbers",
        paragraphs: [
          "The Management Science study (Rathee and colleagues, 2023) ran field experiments in three clinics in India. It compared numeric tokens with alphanumeric ones. In most cases the alphanumeric tokens led to lower pain perception, lower perceived waiting time and higher satisfaction with the healthcare system.",
          "The researchers describe this as initial evidence, and the clinics were health clinics in general, not dental practices. Still, it is cheap to apply: use a letter prefix that means something at your clinic, such as a specialty or doctor, followed by the number, for example a prefix for general dentistry or one for orthodontics.",
        ],
      },
      {
        heading: "Fairness rules to write down",
        paragraphs: [
          "Most arguments in a waiting room are about fairness. Decide the rules in advance, post them at reception, and apply them the same way to everyone.",
        ],
        bullets: [
          "Emergencies: severe pain, swelling, bleeding or trauma can go ahead of the queue. Mark them as emergencies so the exception is visible and recorded.",
          "Late arrivals: set a grace period for booked patients. After it, they join the queue at the back rather than taking the doctor's next slot.",
          "Follow-ups: short follow-ups, such as a dressing check or suture removal, can get their own quick path if the doctor agrees.",
          "Booked patients: decide whether a booking gives priority, a time window, or only a place in the same queue. Tell patients which one it is.",
          "Walk-ins when the day is full: say so politely at the door and offer a booking for another day.",
        ],
      },
      {
        heading: "Tell patients how long it will take",
        paragraphs: [
          "A rough, honest estimate is better than silence. Count how many tokens are ahead of the patient and multiply by your typical visit length for that treatment, then say a range, not a precise time. If the queue runs long, tell people early.",
          "Be careful with promises. A patient told 20 minutes who waits 50 will be more upset than one told 45 who waits 50.",
        ],
      },
      {
        heading: "What to measure",
        bullets: [
          "Waiting time: from check-in to the patient entering the treatment room, by treatment type.",
          "No-show and late-cancellation rate each month (see our guide on reducing dental no-shows).",
          "Share of patients who are walk-ins, bookings and emergencies on each day of the week.",
          "Longest waits: look at the worst day each month, not only the average.",
        ],
      },
      {
        heading: "Where DentXOne fits in",
        paragraphs: [
          "Full disclosure: Flizk makes DentXOne, so this is our own product. DentXOne keeps a live token-numbered queue for each specialty, shows each patient with a display code and token number, lets staff check patients in, lets a doctor claim or release a patient, and supports an emergency flag. Staff can cancel or mark a no-show, the queue updates live, and booked appointments are available in a calendar and list view with schedule windows.",
          "We do not claim that DentXOne predicts waiting times, and software will not fix a queue without clear rules. It gives your team one shared, visible order and a record of what happened, so you can apply the rules above and measure the result.",
        ],
      },
    ],
    relatedFeatures: ["queue-based-appointments", "role-management"],
    faqs: [
      {
        question: "Should a dental clinic take only appointments or allow walk-ins too?",
        answer:
          "Most Indian clinics benefit from both. Book planned, longer treatments, and keep room for walk-ins with sudden pain. A single visible queue with token numbers keeps the two groups fair to each other.",
      },
      {
        question: "Why use letters in token numbers?",
        answer:
          "A Management Science field study in Indian health clinics found that alphanumeric tokens usually led to lower perceived waiting and higher satisfaction than numeric ones. It was not a dental study, but the change costs nothing.",
      },
      {
        question: "How do we handle emergencies without upsetting other patients?",
        answer:
          "Write the rule down, post it at reception, and mark emergencies visibly in the queue. People accept an exception more easily when the rule was clear before the day began.",
      },
      {
        question: "Should booked patients skip the queue?",
        answer:
          "That is your call. Some clinics give booked patients a fixed time window, others only guarantee a place in the same queue. Either works if patients know which one applies.",
      },
      {
        question: "Does one shared queue or separate queues work better?",
        answer:
          "One simulation of a clinic registration desk found a shared queue with priority for appointments performed about as well for walk-ins and better overall than splitting queues. It was a simulation, not a dental clinic, so check your own waiting times.",
      },
    ],
    sources: [
      {
        title: "Alphanumeric vs. Numeric Token Systems and the Healthcare Experience: Field Evidence from Healthcare Delivery in India (Management Science, 2023)",
        url: "https://doi.org/10.1287/mnsc.2022.4389",
        note: "Field experiments in three health clinics in India. Not specific to dental clinics.",
      },
      {
        title: "Analysis of the Waiting Time in Clinic Registration of Patients with Appointments and Random Walk-Ins (IJERPH, 2023)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9915897",
        note: "Computer simulation of a shared queue versus separate queues.",
      },
      {
        title: "Service time and waiting time as predictors of patient satisfaction at Sozo Dental Clinic, Medan (2026)",
        url: "https://jurnal.unprimdn.ac.id/index.php/bulkesprima/article/view/8469",
        note: "Cross-sectional study of 100 follow-up patients in Indonesia.",
      },
    ],
  },
} satisfies Record<string, GuideContent>;

export type GuideSlug = keyof typeof GUIDES;
export const GUIDE_SLUGS = Object.keys(GUIDES) as GuideSlug[];
