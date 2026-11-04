import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { CTAButton } from "@/components/CTAButton";
import { JsonLd } from "@/components/JsonLd";
import { FEATURES, type FeatureSlug } from "@/content/features";
import { CTA_PATHS } from "@/lib/cta";
import { PAGE_SEO, pageUrl } from "@/lib/seo";
import { breadcrumbSchema, ORGANIZATION_ID } from "@/lib/schema";

export function FeaturePage({ slug }: { slug: FeatureSlug }) {
  const f = FEATURES[slug];
  const Icon = f.icon;
  const seo = PAGE_SEO[f.seoKey];

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl(seo.path)}#webpage`,
    url: pageUrl(seo.path),
    name: seo.title,
    description: seo.description,
    inLanguage: "en-IN",
    isPartOf: { "@id": `${pageUrl("/")}#website` },
    about: {
      "@type": "SoftwareApplication",
      name: "DentXOne",
      applicationCategory: "HealthApplication",
      operatingSystem: "Web",
      url: pageUrl("/products/dentxone"),
      provider: { "@id": ORGANIZATION_ID },
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: f.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <JsonLd id={`${slug}-page`} data={pageSchema} />
      <JsonLd id={`${slug}-faq`} data={faqSchema} />
      <JsonLd
        id="breadcrumb"
        data={breadcrumbSchema([
          { name: "DentXOne", path: PAGE_SEO.dentxone.path },
          { name: f.name, path: seo.path },
        ])}
      />

      <section className="relative bg-brand-surface pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 bg-brand-leaf-tint px-4 py-2 rounded-full mb-6">
            <Icon className="w-4 h-4 text-brand-leaf" />
            <span className="text-brand-ink text-sm">DentXOne · {f.badge}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-brand-ink mb-6 leading-tight">
            {f.h1}
          </h1>
          <p className="text-xl md:text-2xl text-brand-muted max-w-3xl mx-auto mb-10">{f.intro}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton
              href={CTA_PATHS.demo}
              className="bg-brand-leaf hover:bg-brand-leaf/90 text-white px-8 py-6 text-lg rounded-2xl shadow-[var(--shadow-soft)]"
            >
              Book a Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </CTAButton>
            <CTAButton
              href={CTA_PATHS.dentxone}
              variant="outline"
              className="bg-white border-0 rounded-2xl hover:text-brand-leaf px-8 py-6 text-lg"
            >
              Explore DentXOne
            </CTAButton>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-ink mb-6">{f.overviewTitle}</h2>
          <div className="prose prose-lg text-brand-muted space-y-4">
            {f.overview.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {f.highlights.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-[20px] p-8 shadow-[var(--shadow-soft)]"
              >
                <h3 className="text-2xl font-semibold text-brand-ink mb-4">{item.title}</h3>
                <p className="text-brand-muted leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-ink mb-8">{f.checklistTitle}</h2>
          <ul className="space-y-4">
            {f.checklist.map((item) => (
              <li key={item} className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-brand-leaf flex-shrink-0 mt-0.5" />
                <span className="text-brand-ink/80 text-lg">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap gap-4 text-sm">
            {f.related.map((r) => {
              const rel = FEATURES[r as FeatureSlug];
              return (
                <Link
                  key={r}
                  href={PAGE_SEO[rel.seoKey].path}
                  className="text-brand-leaf hover:underline"
                >
                  {rel.name} →
                </Link>
              );
            })}
            <Link href="/products/dentxone" className="text-brand-leaf hover:underline">
              Full product overview →
            </Link>
            <Link href="/pricing" className="text-brand-leaf hover:underline">
              View plans →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-ink mb-10 text-center">
            Frequently asked questions
          </h2>
          <div className="space-y-6">
            {f.faqs.map((faq) => (
              <div
                key={faq.question}
                className="bg-white rounded-[20px] p-8 shadow-[var(--shadow-soft)]"
              >
                <h3 className="text-xl font-semibold text-brand-ink mb-4">{faq.question}</h3>
                <p className="text-brand-muted leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-brand-leaf to-brand-teal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">{f.ctaTitle}</h2>
          <p className="text-xl text-white/90 mb-8">
            Contact Flizk to book a DentXOne demo for your practice.
          </p>
          <CTAButton
            href={CTA_PATHS.contact}
            className="bg-white text-brand-leaf hover:bg-gray-100 px-8 py-6 text-lg rounded-2xl"
          >
            Contact Us
            <ArrowRight className="ml-2 w-5 h-5" />
          </CTAButton>
        </div>
      </section>
    </>
  );
}
