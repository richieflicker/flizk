import Link from "next/link";

const SECTIONS = [
  { id: "overview", title: "Overview" },
  { id: "data-we-collect", title: "WhatsApp data we collect and process" },
  { id: "consent-and-opt-out", title: "How we use it, consent and opt-out" },
  { id: "sharing-storage-security", title: "Sharing, storage, retention and security" },
  { id: "rights-and-contact", title: "Patient rights, data deletion and contact" },
] as const;

export default function PrivacyPage() {
  return (
    <section className="pt-32 pb-20 bg-white">
      <div className="max-w-[720px] mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Privacy Policy: WhatsApp Messaging
        </h1>
        <p className="text-sm text-gray-500 mb-8">Last updated: 3 November 2026</p>

        <nav aria-label="Table of contents" className="rounded-xl border border-gray-200 bg-gray-50 px-6 py-5 mb-10">
          <h2 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
            Contents
          </h2>
          <ul className="space-y-2">
            {SECTIONS.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`} className="text-brand-leaf hover:underline">
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-10 text-gray-700 leading-relaxed">
          <section id="overview">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Overview</h2>
            <p className="mb-4">
              DentXOne sends appointment confirmations, reminders and clinic updates to patients
              through WhatsApp, using the WhatsApp Business Platform (Cloud API) provided by Meta.
              This policy explains what patient data is involved, why we use it, who it is shared
              with, and how patients can control it.
            </p>
            <p>
              DentXOne is a dental clinic management service operated by Flizk (flizk.com). Each
              clinic that uses DentXOne decides why patient data is collected. We process that data
              on the clinic&apos;s behalf to deliver the messages.
            </p>
          </section>

          <section id="data-we-collect">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              WhatsApp data we collect and process
            </h2>
            <p className="mb-4">We process only what is needed to send and track a message.</p>

            <div className="overflow-x-auto mb-4">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b border-gray-300 text-left">
                    <th scope="col" className="py-2 pr-4 font-semibold text-gray-900">
                      Data
                    </th>
                    <th scope="col" className="py-2 pr-4 font-semibold text-gray-900">
                      Source
                    </th>
                    <th scope="col" className="py-2 font-semibold text-gray-900">
                      Purpose
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Patient name", "Clinic's patient record", "Personalise the message"],
                    ["WhatsApp phone number", "Clinic's patient record", "Deliver the message"],
                    [
                      "Appointment details (treatment, date, time, doctor)",
                      "Clinic's appointment record",
                      "Fill the message template",
                    ],
                    ["Clinic name and phone", "Clinic profile", "Identify the sender and contact point"],
                    [
                      "Delivery status (sent, delivered, read, failed)",
                      "WhatsApp webhooks",
                      "Show clinics whether a message arrived",
                    ],
                    [
                      "Button replies (Reschedule, Cancel)",
                      "Patient's tap on a message",
                      "Update the appointment",
                    ],
                    [
                      "Replies typed by the patient",
                      "Patient's WhatsApp message",
                      "Pass to the clinic for follow-up",
                    ],
                  ].map((row) => (
                    <tr key={row[0]} className="border-b border-gray-200 align-top">
                      <td className="py-2 pr-4">{row[0]}</td>
                      <td className="py-2 pr-4">{row[1]}</td>
                      <td className="py-2">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p>
              We do not send marketing or promotional messages through these templates. Message
              content is limited to appointment information and does not include diagnoses,
              prescriptions or treatment notes.
            </p>
          </section>

          <section id="consent-and-opt-out">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              How we use it, consent and opt-out
            </h2>
            <p className="mb-4">
              We use WhatsApp data only to send appointment-related messages for the clinic the
              patient booked with: confirmations, reminders, rescheduling and cancellation
              notices. We do not sell patient data or use it for advertising.
            </p>
            <p className="mb-4">
              Consent is collected by the clinic when the patient provides their phone number and
              agrees to receive WhatsApp messages. The clinic is responsible for recording that
              consent, and DentXOne only sends messages to numbers the clinic has marked as opted
              in.
            </p>
            <p className="mb-2">Patients can opt out at any time by:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>replying STOP to any message</li>
              <li>telling the clinic reception to turn off WhatsApp notifications</li>
              <li>
                writing to us at{" "}
                <a href="mailto:privacy@flizk.com" className="text-brand-leaf hover:underline">
                  privacy@flizk.com
                </a>
              </li>
            </ul>
            <p>
              Once a patient opts out, no further WhatsApp messages are sent. Appointment
              information is still available through the clinic.
            </p>
          </section>

          <section id="sharing-storage-security">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Sharing, storage, retention and security
            </h2>
            <p className="mb-4">
              <strong>Who receives the data.</strong> Message content and the patient&apos;s phone
              number are passed to Meta Platforms, the provider of WhatsApp, so it can deliver the
              message. Meta processes this data under its own terms and privacy policy. We share
              data with no one else for this purpose, other than our hosting provider, which
              stores it on our behalf.
            </p>
            <p className="mb-4">
              <strong>Where it is stored.</strong> Delivery statuses and message logs are kept in
              our database, separated by clinic so one clinic cannot see another&apos;s data.
            </p>
            <p className="mb-4">
              <strong>How long we keep it.</strong> Message logs are kept for 90 days, then
              deleted or anonymised. Appointment records follow the clinic&apos;s own retention
              rules.
            </p>
            <p className="mb-2">Security:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Data is encrypted in transit (HTTPS/TLS).</li>
              <li>WhatsApp access tokens are stored on our servers only, never in the app or browser.</li>
              <li>Access to message logs is limited to authorised staff and to the clinic concerned.</li>
              <li>Webhook requests from Meta are verified before they are processed.</li>
            </ul>
          </section>

          <section id="rights-and-contact">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Patient rights, data deletion and contact
            </h2>
            <p className="mb-2">
              Under India&apos;s Digital Personal Data Protection Act, 2023, patients can:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>ask what personal data we hold about them</li>
              <li>correct inaccurate data</li>
              <li>withdraw consent to WhatsApp messages</li>
              <li>ask for their data to be erased</li>
              <li>raise a grievance with us</li>
            </ul>
            <p className="mb-4">
              To make a request, email{" "}
              <a href="mailto:privacy@flizk.com" className="text-brand-leaf hover:underline">
                privacy@flizk.com
              </a>{" "}
              with the patient&apos;s name, the clinic and the WhatsApp number. We reply within 30
              days. Requests about clinical records are handled together with the clinic, since
              the clinic controls those records.
            </p>
            <p className="mb-4">
              <strong>Data deletion instructions.</strong> To delete WhatsApp-related data, email{" "}
              <a href="mailto:privacy@flizk.com" className="text-brand-leaf hover:underline">
                privacy@flizk.com
              </a>{" "}
              with the subject &quot;WhatsApp data deletion&quot;. We delete message logs and
              contact details linked to that number from our systems and confirm by email. Data
              already held by Meta is governed by Meta&apos;s privacy policy.
            </p>
            <p className="mb-4">
              <strong>Changes to this policy.</strong> We will update this page when our WhatsApp
              use changes and show the date of the latest update at the top.
            </p>
            <p>
              <strong>Contact.</strong> Flizk, Chennai, Tamil Nadu, India ·{" "}
              <a href="mailto:privacy@flizk.com" className="text-brand-leaf hover:underline">
                privacy@flizk.com
              </a>
            </p>
          </section>

          <p className="text-sm text-gray-500 border-t border-gray-200 pt-6">
            Questions about this policy?{" "}
            <Link href="/contact" className="text-brand-leaf hover:underline">
              Contact us
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
