export const SITE_URL = "https://flizk.com";
export const SITE_NAME = "Flizk";

export type PageSeo = {
  title: string;
  description: string;
  path: string;
};

export const PAGE_SEO = {
  home: {
    title: "Flizk – Modern Technology for Smarter Clinics",
    description:
      "Flizk builds healthcare software for clinics. Dentxone is all-in-one dental clinic management software for patients, appointments, billing, and operations.",
    path: "/",
  },
  dentxone: {
    title: "Dentxone – Dental Clinic Management Software | Flizk",
    description:
      "Dentxone helps dental practices manage patients, appointments, treatments, billing, and analytics. Cloud-based dental clinic software built for India.",
    path: "/products/dentxone",
  },
  pricing: {
    title: "Dentxone Pricing – Dental Clinic Software | Flizk",
    description:
      "Simple pricing for Dentxone dental clinic management software. Plans from ₹999/month with a 14-day free trial. No credit card required.",
    path: "/pricing",
  },
  about: {
    title: "About Flizk – Healthcare Technology Company",
    description:
      "Flizk is a healthcare technology company building software platforms for clinics. Learn about our mission, team, and Dentxone.",
    path: "/about",
  },
  contact: {
    title: "Contact Flizk – Book a Dentxone Demo",
    description:
      "Contact Flizk to book a Dentxone demo, start a free trial, or ask about enterprise plans for your dental clinic.",
    path: "/contact",
  },
  privacy: {
    title: "Privacy Policy | Flizk",
    description: "How Flizk collects, uses, and protects your information when you use our website and contact forms.",
    path: "/privacy",
  },
  terms: {
    title: "Terms of Service | Flizk",
    description: "Terms of service for using the Flizk website and Dentxone marketing information.",
    path: "/terms",
  },
} as const satisfies Record<string, PageSeo>;

export function pageUrl(path: string): string {
  return `${SITE_URL}${path === "/" ? "" : path}`;
}
