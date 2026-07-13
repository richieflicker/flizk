import { JsonLd } from "@/components/JsonLd";
import {SITE_URL} from "@/lib/seo";
import { HeroSection } from "@/components/HeroSection";
import { ProductFeatures } from "@/components/ProductFeatures";
import { WorkflowSection } from "@/components/WorkflowSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { PlatformSection } from "@/components/PlatformSection";
import { PricingPreview } from "@/components/PricingPreview";
import { FinalCTA } from "@/components/FinalCTA";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Flizk",
  url: SITE_URL,
  description:
    "Healthcare technology company building software platforms for clinics, including DentXOne dental clinic management software for Chennai and Tamil Nadu.",
  areaServed: [
    { "@type": "City", name: "Chennai" },
    { "@type": "State", name: "Tamil Nadu" },
    { "@type": "Country", name: "IN" },
  ],
};

export function HomePage() {
  return (
    <>
      <JsonLd id="organization" data={organizationSchema} />
      <HeroSection />
      <ProductFeatures />
      <WorkflowSection />
      <BenefitsSection />
      <PlatformSection />
      <PricingPreview />
      <FinalCTA />
    </>
  );
}
