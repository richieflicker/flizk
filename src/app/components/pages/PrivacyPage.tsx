import { PageMeta } from "../PageMeta";
import { PAGE_SEO } from "../../lib/seo";

export default function PrivacyPage() {
  return (
    <>
      <PageMeta {...PAGE_SEO.privacy} />

      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-gray">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-sm text-gray-500 mb-8">Last updated: July 2, 2026</p>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            <p className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
              This is draft placeholder copy for the Flizk marketing website. Have qualified legal
              counsel review and replace it before relying on it for compliance purposes.
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Overview</h2>
              <p>
                Flizk (&quot;we&quot;, &quot;us&quot;) operates flizk.com and related marketing pages
                for our healthcare technology products, including Dentxone. This policy explains what
                information we collect when you visit our website or contact us, and how we use it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Information we collect</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Contact form data:</strong> name, email, phone number, clinic name, and
                  message content when you submit our contact form.
                </li>
                <li>
                  <strong>Usage data:</strong> basic technical information such as browser type,
                  pages visited, and referral source, if analytics are enabled.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">How we use information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to demo requests, trial inquiries, and support questions.</li>
                <li>Improve our website and understand visitor interest in our products.</li>
                <li>Send product updates or follow-ups related to your inquiry, where permitted.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Third-party services</h2>
              <p>
                We use Formspree to process contact form submissions. Data you submit through the form
                is transmitted to Formspree according to their privacy practices. We may also use
                analytics or hosting providers that process limited technical data on our behalf.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Data retention</h2>
              <p>
                We retain contact inquiries for as long as needed to respond and maintain business
                records, unless a longer period is required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Your rights</h2>
              <p>
                Depending on your location, you may have rights to access, correct, or delete personal
                information we hold about you. Contact us at{" "}
                <a href="mailto:hello@flizk.com" className="text-[#1E4ED8] hover:underline">
                  hello@flizk.com
                </a>{" "}
                to make a request.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Contact</h2>
              <p>
                Questions about this policy? Email{" "}
                <a href="mailto:hello@flizk.com" className="text-[#1E4ED8] hover:underline">
                  hello@flizk.com
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
