import { ArrowRight, Lightbulb } from "lucide-react";
import Link from "next/link";
import { CTAButton } from "@/components/CTAButton";
import { JsonLd } from "@/components/JsonLd";
import { FEATURES } from "@/content/features";
import { GUIDES, type GuideSlug } from "@/content/guides";
import { CTA_PATHS } from "@/lib/cta";
import { PAGE_SEO, pageUrl } from "@/lib/seo";
import { breadcrumbSchema, ORGANIZATION_ID } from "@/lib/schema";

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

export function GuidePage({ slug }: { slug: GuideSlug }) {
  const g = GUIDES[slug];
  const seo = PAGE_SEO[g.seoKey];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${pageUrl(seo.path)}#article`,
    headline: g.h1,
    description: seo.description,
    mainEntityOfPage: pageUrl(seo.path),
    datePublished: g.published,
    dateModified: g.updated,
    inLanguage: "en-IN",
    author: { "@id": ORGANIZATION_ID },
    publisher: { "@id": ORGANIZATION_ID },
    isPartOf: { "@id": `${pageUrl("/")}#website` },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: g.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <JsonLd id={`${slug}-article`} data={articleSchema} />
      <JsonLd id={`${slug}-faq`} data={faqSchema} />
      <JsonLd
        id="breadcrumb"
        data={breadcrumbSchema([
          { name: "Guides", path: PAGE_SEO.guides.path },
          { name: g.h1, path: seo.path },
        ])}
      />

      <article>
        <section className="bg-brand-surface pt-32 pb-12">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="text-sm text-brand-muted mb-6" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-brand-leaf">
                Home
              </Link>{" "}
              /{" "}
              <Link href="/guides" className="hover:text-brand-leaf">
                Guides
              </Link>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-brand-ink mb-6 leading-tight">
              {g.h1}
            </h1>
            <p className="text-xl text-brand-muted mb-6">{g.intro}</p>
            <p className="text-sm text-brand-muted">
              By Flizk · Updated {formatDate(g.updated)} · {g.readingMinutes} min read
            </p>
          </div>
        </section>

        <section className="bg-white pt-10 pb-4">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-brand-leaf-tint rounded-[20px] p-8">
              <div className="flex items-center space-x-2 mb-3">
                <Lightbulb className="w-5 h-5 text-brand-leaf" />
                <h2 className="text-xl font-semibold text-brand-ink">{g.answerTitle}</h2>
              </div>
              <p className="text-brand-ink/80 text-lg leading-relaxed">{g.answer}</p>
            </div>
          </div>
        </section>

        <section className="bg-white py-12">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            {g.sections.map((section) => (
              <div key={section.heading}>
                <h2 className="text-3xl font-bold text-brand-ink mb-5">{section.heading}</h2>
                <div className="space-y-4 text-lg text-brand-muted leading-relaxed">
                  {section.paragraphs?.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                  {section.bullets ? (
                    <ul className="list-disc pl-6 space-y-2">
                      {section.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  ) : null}
                  {section.steps ? (
                    <ol className="space-y-5">
                      {section.steps.map((step, i) => (
                        <li key={step.title} className="flex gap-4">
                          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-leaf text-white flex items-center justify-center text-sm font-semibold">
                            {i + 1}
                          </span>
                          <div>
                            <h3 className="text-xl font-semibold text-brand-ink mb-1">
                              {step.title}
                            </h3>
                            <p>{step.text}</p>
                          </div>
                        </li>
                      ))}
                    </ol>
                  ) : null}
                </div>
              </div>
            ))}

            <div className="flex flex-wrap gap-4 text-sm">
              {g.relatedFeatures.map((f) => (
                <Link
                  key={f}
                  href={PAGE_SEO[FEATURES[f].seoKey].path}
                  className="text-brand-leaf hover:underline"
                >
                  {FEATURES[f].name} →
                </Link>
              ))}
              <Link
                href={PAGE_SEO.whatsappReminders.path}
                className="text-brand-leaf hover:underline"
              >
                WhatsApp appointment reminders →
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-brand-surface">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-brand-ink mb-8">Frequently asked questions</h2>
            <div className="space-y-6">
              {g.faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="bg-white rounded-[20px] p-8 shadow-[var(--shadow-soft)]"
                >
                  <h3 className="text-xl font-semibold text-brand-ink mb-3">{faq.question}</h3>
                  <p className="text-brand-muted leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-brand-ink mb-6">Sources</h2>
            <ul className="space-y-4">
              {g.sources.map((s) => (
                <li key={s.url} className="text-brand-muted">
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-leaf hover:underline"
                  >
                    {s.title}
                  </a>
                  <span className="block text-sm">{s.note}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-brand-muted">
              Most of these sources describe US practices. Figures are summarised in our own words
              and can differ from clinic to clinic.
            </p>
          </div>
        </section>
      </article>

      <section className="py-24 bg-gradient-to-br from-brand-leaf to-brand-teal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Let DentXOne handle the reminders
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Contact Flizk to book a demo of WhatsApp reminders and the live patient queue.
          </p>
          <CTAButton
            href={CTA_PATHS.demo}
            className="bg-white text-brand-leaf hover:bg-gray-100 px-8 py-6 text-lg rounded-2xl"
          >
            Book a Demo
            <ArrowRight className="ml-2 w-5 h-5" />
          </CTAButton>
        </div>
      </section>
    </>
  );
}
