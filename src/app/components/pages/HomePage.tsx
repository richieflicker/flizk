import { HeroSection } from "../HeroSection";
import { ProductFeatures } from "../ProductFeatures";
import { WorkflowSection } from "../WorkflowSection";
import { BenefitsSection } from "../BenefitsSection";
import { PlatformSection } from "../PlatformSection";
import { TestimonialsSection } from "../TestimonialsSection";
import { PricingPreview } from "../PricingPreview";
import { FinalCTA } from "../FinalCTA";

export function HomePage() {
  return (
    <>
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
