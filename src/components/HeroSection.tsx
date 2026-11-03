import { ArrowRight, Sparkles } from "lucide-react";
import { CTAButton } from "./CTAButton";
import { CTA_PATHS } from "@/lib/cta";
import { DashboardMockup } from "./DashboardMockup";

export function HeroSection() {
  return (
    <section className="relative bg-brand-surface pt-20 pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-brand-leaf-tint px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-brand-leaf" />
            <span className="text-sm text-brand-ink">Introducing DentXOne</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-brand-ink mb-6 leading-tight">
            Modern Technology for
            <br />
            Smarter Clinics
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-brand-muted max-w-3xl mx-auto mb-8 leading-relaxed">
            Flizk builds powerful healthcare software platforms that help clinics manage patients,
            appointments, treatments, billing, and operations efficiently.
          </p>

          {/* Product Highlight */}
          <div className="max-w-2xl mx-auto mb-10">
            <div className="bg-white rounded-[20px] p-6 shadow-[var(--shadow-soft)]">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <div className="w-8 h-8 bg-gradient-to-br from-brand-leaf to-brand-teal rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-sm">D</span>
                </div>
                <h2 className="text-2xl font-bold text-brand-ink">DentXOne</h2>
              </div>
              <p className="text-brand-muted">
                All-in-one dental clinic management software built for modern dental practices.
              </p>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <CTAButton
              href={CTA_PATHS.trial}
              className="bg-brand-leaf hover:bg-brand-leaf/90 text-white px-8 py-6 text-lg rounded-2xl shadow-[var(--shadow-soft)] transition-all"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </CTAButton>
            <CTAButton
              href={CTA_PATHS.dentxone}
              variant="outline"
              className="px-8 py-6 text-lg bg-white border-0 rounded-2xl hover:text-brand-leaf"
            >
              Explore DentXOne
            </CTAButton>
          </div>

          {/* Dashboard Mockup */}
          <DashboardMockup />
        </div>
      </div>
    </section>
  );
}
