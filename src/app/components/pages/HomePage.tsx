import { PageMeta } from "../PageMeta";
import { JsonLd } from "../JsonLd";
import { PAGE_SEO, SITE_URL } from "../../lib/seo";
import { HeroSection } from "../HeroSection";
import { ProductFeatures } from "../ProductFeatures";
import { WorkflowSection } from "../WorkflowSection";
import { BenefitsSection } from "../BenefitsSection";
import { PlatformSection } from "../PlatformSection";
import { TestimonialsSection } from "../TestimonialsSection";
import { PricingPreview } from "../PricingPreview";
import { FinalCTA } from "../FinalCTA";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Flizk",
  url: SITE_URL,
  email: "hello@flizk.com",
  description:
    "Healthcare technology company building software platforms for clinics, including Dentxone dental clinic management software.",
};

export function HomePage() {
  return (
    <>
      <PageMeta {...PAGE_SEO.home} />
      <JsonLd id="organization" data={organizationSchema} />
      <HeroSection />
      <ProductFeatures />
      <WorkflowSection />
      <BenefitsSection />
      <PlatformSection />
      <TestimonialsSection />
      <PricingPreview />
      <FinalCTA />
    </>
  );
}
