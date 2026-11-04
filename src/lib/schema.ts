import { SITE_NAME, SITE_URL } from "@/lib/seo";

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

// Site-wide entity records. Every page's JSON-LD points at the same Organization @id so search
// and AI systems resolve "Flizk" and "DentXOne by Flizk" to one consistent entity.
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORGANIZATION_ID,
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/flizk-512.png`,
  description:
    "Healthcare technology company building software platforms for clinics, including DentXOne dental clinic management software for Chennai and Tamil Nadu.",
  areaServed: [
    { "@type": "City", name: "Chennai" },
    { "@type": "State", name: "Tamil Nadu" },
    { "@type": "Country", name: "IN" },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: "support@flizk.com",
    areaServed: "IN",
    availableLanguage: ["English"],
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  name: SITE_NAME,
  url: SITE_URL,
  publisher: { "@id": ORGANIZATION_ID },
  inLanguage: "en-IN",
};

export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...trail].map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.path === "/" ? SITE_URL : `${SITE_URL}${item.path}`,
    })),
  };
}
