import type { Metadata } from "next";
import type { PageSeo } from "@/lib/seo";
import { SITE_NAME, pageUrl } from "@/lib/seo";

const OG_IMAGE_PATH = "/og-default.png";

export function buildMetadata(seo: PageSeo): Metadata {
  const url = pageUrl(seo.path);

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url,
      siteName: SITE_NAME,
      type: "website",
      images: [
        {
          url: OG_IMAGE_PATH,
          width: 1200,
          height: 630,
          alt: "DentXOne by Flizk — dental clinic software for Chennai & Tamil Nadu",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [OG_IMAGE_PATH],
    },
  };
}
