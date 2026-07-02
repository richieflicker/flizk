import { PageMeta } from "../PageMeta";
import { PAGE_SEO } from "../../lib/seo";

export default function TermsPage() {
  return (
    <>
      <PageMeta {...PAGE_SEO.terms} />

      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-gray">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-sm text-gray-500 mb-8">Last updated: July 2, 2026</p>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            <p className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
              This is draft placeholder copy for the Flizk marketing website. Have qualified legal
              counsel review and replace it before relying on it for compliance purposes.
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Agreement</h2>
              <p>
                By accessing flizk.com (the &quot;Site&quot;), you agree to these Terms of Service.
                If you do not agree, please do not use the Site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Website purpose</h2>
              <p>
                The Site provides marketing and informational content about Flizk and its products,
                including Dentxone dental clinic management software. Product features, pricing, and
                availability described on the Site may change.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">No professional advice</h2>
              <p>
                Content on the Site is for general information only and does not constitute medical,
                legal, or professional advice. Healthcare providers remain responsible for their own
                compliance and clinical decisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Acceptable use</h2>
              <p>You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Use the Site in any unlawful manner or to transmit harmful code.</li>
                <li>Attempt to gain unauthorized access to our systems or data.</li>
                <li>Misrepresent your identity or affiliation when contacting us.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Product services</h2>
              <p>
                Use of Dentxone or other Flizk software products is governed by separate product
                agreements presented at signup or purchase. These website terms apply only to use of
                the marketing Site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Disclaimer</h2>
              <p>
                The Site is provided &quot;as is&quot; without warranties of any kind, express or
                implied, including fitness for a particular purpose or uninterrupted availability.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Limitation of liability</h2>
              <p>
                To the fullest extent permitted by law, Flizk will not be liable for indirect,
                incidental, or consequential damages arising from your use of the Site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Changes</h2>
              <p>
                We may update these terms from time to time. Continued use of the Site after changes
                are posted constitutes acceptance of the revised terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Contact</h2>
              <p>
                Questions about these terms? Email{" "}
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
