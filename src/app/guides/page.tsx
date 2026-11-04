import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { GUIDES, GUIDE_SLUGS } from "@/content/guides";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { PAGE_SEO } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(PAGE_SEO.guides);

export default function Page() {
  return (
    <>
      <JsonLd
        id="breadcrumb"
        data={breadcrumbSchema([{ name: "Guides", path: PAGE_SEO.guides.path }])}
      />
      <section className="bg-brand-surface pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold text-brand-ink mb-6 leading-tight">
            Guides for dental clinics in India
          </h1>
          <p className="text-xl text-brand-muted mb-12">
            Practical, sourced guides for clinic owners on running the front desk and getting more
            from clinic software.
          </p>
          <div className="space-y-6">
            {GUIDE_SLUGS.map((slug) => {
              const g = GUIDES[slug];
              return (
                <Link
                  key={slug}
                  href={PAGE_SEO[g.seoKey].path}
                  className="block bg-white rounded-[20px] p-8 shadow-[var(--shadow-soft)] hover:shadow-lg transition-shadow"
                >
                  <h2 className="text-2xl font-semibold text-brand-ink mb-3">{g.h1}</h2>
                  <p className="text-brand-muted leading-relaxed mb-4">{g.intro}</p>
                  <span className="text-sm text-brand-leaf">
                    Read the guide · {g.readingMinutes} min →
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
