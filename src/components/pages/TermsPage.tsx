const SECTIONS = [
  { id: "about-these-terms", title: "1. About these terms" },
  { id: "the-service", title: "2. The service" },
  { id: "accounts", title: "3. Accounts" },
  { id: "clinic-responsibilities", title: "4. Clinic responsibilities" },
  { id: "whatsapp-messaging", title: "5. WhatsApp messaging" },
  { id: "acceptable-use", title: "6. Acceptable use" },
  { id: "data-and-privacy", title: "7. Data and privacy" },
  { id: "fees-and-payment", title: "8. Fees and payment" },
  { id: "availability-and-support", title: "9. Availability and support" },
  { id: "intellectual-property", title: "10. Intellectual property" },
  { id: "suspension-and-termination", title: "11. Suspension and termination" },
  { id: "disclaimers-and-liability", title: "12. Disclaimers and liability" },
  { id: "changes-to-these-terms", title: "13. Changes to these terms" },
  { id: "governing-law", title: "14. Governing law" },
  { id: "contact", title: "15. Contact" },
] as const;

export default function TermsPage() {
  return (
    <section className="pt-32 pb-20 bg-white">
      <div className="max-w-[720px] mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
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
          <section id="about-these-terms">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">1. About these terms</h2>
            <p>
              These terms govern your use of DentXOne, a dental clinic management service operated
              by Flizk (&quot;Flizk&quot;, &quot;we&quot;, &quot;us&quot;). By creating an account or
              using DentXOne, you agree to these terms. If you use DentXOne on behalf of a clinic,
              you confirm you have authority to accept them for that clinic.
            </p>
          </section>

          <section id="the-service">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">2. The service</h2>
            <p>
              DentXOne provides tools for clinics to manage appointments, patient records,
              prescriptions and communication with patients, including WhatsApp messaging. We may
              add, change or remove features from time to time and will give reasonable notice of
              material changes.
            </p>
          </section>

          <section id="accounts">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">3. Accounts</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>You must provide accurate information and keep your login details secure.</li>
              <li>
                You are responsible for all activity under your account, including activity by
                your staff.
              </li>
              <li>
                Tell us promptly at{" "}
                <a href="mailto:support@flizk.com" className="text-brand-leaf hover:underline">
                  support@flizk.com
                </a>{" "}
                if you suspect unauthorised access.
              </li>
            </ul>
          </section>

          <section id="clinic-responsibilities">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">4. Clinic responsibilities</h2>
            <p className="mb-2">Each clinic is responsible for:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>the accuracy and lawfulness of the patient data it enters</li>
              <li>
                obtaining and recording patient consent before using patient data or sending
                WhatsApp messages
              </li>
              <li>
                complying with applicable laws, including India&apos;s Digital Personal Data
                Protection Act, 2023 and medical record-keeping rules
              </li>
              <li>
                the clinical decisions it makes. DentXOne is a management tool and does not
                provide medical advice.
              </li>
            </ul>
          </section>

          <section id="whatsapp-messaging">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">5. WhatsApp messaging</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                WhatsApp messages are sent through the WhatsApp Business Platform provided by
                Meta. Use of messaging is also subject to Meta&apos;s WhatsApp Business Terms and
                Commerce Policy.
              </li>
              <li>
                Clinics may send only appointment-related and other permitted transactional
                messages through DentXOne, and only to patients who have opted in.
              </li>
              <li>
                Clinics must not send spam, unlawful, misleading, abusive or promotional content
                without proper opt-in and approved templates.
              </li>
              <li>
                Patients who reply STOP must be removed from messaging. We may suspend messaging
                if opt-outs are ignored.
              </li>
              <li>
                Message delivery depends on Meta and the recipient&apos;s network. We do not
                guarantee that every message is delivered or read.
              </li>
              <li>
                Meta may change its pricing, limits or policies. We may pass on reasonable changes
                in messaging costs with notice.
              </li>
            </ul>
          </section>

          <section id="acceptable-use">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">6. Acceptable use</h2>
            <p className="mb-2">You must not:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>use DentXOne for anything unlawful or harmful</li>
              <li>attempt to access data belonging to another clinic</li>
              <li>interfere with or reverse engineer the service</li>
              <li>upload malicious code</li>
              <li>resell the service without our written agreement</li>
            </ul>
          </section>

          <section id="data-and-privacy">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">7. Data and privacy</h2>
            <p>
              Our Privacy Policy at{" "}
              <a
                href="https://flizk.com/privacy"
                className="text-brand-leaf hover:underline"
              >
                https://flizk.com/privacy
              </a>{" "}
              explains how we handle personal data. For patient data entered by a clinic, the
              clinic decides why and how it is used, and Flizk processes it on the clinic&apos;s
              behalf. You keep ownership of your data and may export it on request.
            </p>
          </section>

          <section id="fees-and-payment">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">8. Fees and payment</h2>
            <p>
              Fees, billing cycles and plans are set out in your order or on our pricing page.
              Fees are exclusive of applicable taxes such as GST unless stated. We may suspend the
              service for overdue payments after notice.
            </p>
          </section>

          <section id="availability-and-support">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">9. Availability and support</h2>
            <p>
              We aim to keep DentXOne available and secure, but we do not promise uninterrupted
              service. Planned maintenance will be announced where possible. Support is available
              at{" "}
              <a href="mailto:support@flizk.com" className="text-brand-leaf hover:underline">
                support@flizk.com
              </a>
              .
            </p>
          </section>

          <section id="intellectual-property">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">10. Intellectual property</h2>
            <p>
              Flizk owns DentXOne, including its software, design and branding. We grant you a
              limited, non-exclusive, non-transferable right to use it during your subscription.
              You grant us the right to process your data only as needed to provide the service.
            </p>
          </section>

          <section id="suspension-and-termination">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              11. Suspension and termination
            </h2>
            <p>
              You may stop using DentXOne at any time. We may suspend or end access if you breach
              these terms or the law, with notice where reasonable. After termination you may
              request an export of your data, and we delete it within a reasonable period unless
              the law requires us to keep it.
            </p>
          </section>

          <section id="disclaimers-and-liability">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              12. Disclaimers and liability
            </h2>
            <p>
              DentXOne is provided &quot;as is&quot; to the extent permitted by law. We are not
              liable for indirect or consequential loss, loss of profit, or loss resulting from
              clinical decisions, third-party services such as WhatsApp, or events outside our
              control. Our total liability is limited to the fees you paid in the 12 months before
              the claim. Nothing here limits liability that cannot be limited by law.
            </p>
          </section>

          <section id="changes-to-these-terms">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">13. Changes to these terms</h2>
            <p>
              We may update these terms. We will post the new version on this page with a new
              date, and for material changes we will notify account owners by email. Continued use
              after the change means you accept it.
            </p>
          </section>

          <section id="governing-law">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">14. Governing law</h2>
            <p>
              These terms are governed by the laws of India. The courts at Chennai, Tamil Nadu
              have exclusive jurisdiction.
            </p>
          </section>

          <section id="contact">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">15. Contact</h2>
            <p>
              Flizk, Chennai, Tamil Nadu, India
              <br />
              Email:{" "}
              <a href="mailto:support@flizk.com" className="text-brand-leaf hover:underline">
                support@flizk.com
              </a>
              <br />
              Privacy:{" "}
              <a href="mailto:privacy@flizk.com" className="text-brand-leaf hover:underline">
                privacy@flizk.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
