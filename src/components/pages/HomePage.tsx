import { HeroSection } from "@/components/HeroSection";
import { ProductFeatures } from "@/components/ProductFeatures";
import { WorkflowSection } from "@/components/WorkflowSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { PlatformSection } from "@/components/PlatformSection";
import { PricingPreview } from "@/components/PricingPreview";
import { FinalCTA } from "@/components/FinalCTA";

export function HomePage() {
  return (
    <>
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
