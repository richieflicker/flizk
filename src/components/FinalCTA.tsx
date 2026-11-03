import { ArrowRight, CheckCircle2 } from "lucide-react";
import { CTAButton } from "./CTAButton";
import { CTA_PATHS } from "@/lib/cta";

export function FinalCTA() {
  return (
    <section className="py-24 bg-brand-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-ink mb-6 leading-tight">
            Ready to Modernize Your Clinic?
          </h2>
          <p className="text-xl md:text-2xl text-brand-muted max-w-3xl mx-auto mb-12">
            Use DentXOne to streamline operations, improve patient care, and grow your practice —
            built for clinics in Chennai and Tamil Nadu.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <CTAButton
              href={CTA_PATHS.trial}
              className="bg-brand-leaf hover:bg-brand-leaf/90 text-white px-8 py-6 text-lg rounded-2xl shadow-[var(--shadow-soft)] transition-all"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </CTAButton>
            <CTAButton
              href={CTA_PATHS.demo}
              variant="outline"
              className="bg-white border-0 rounded-2xl hover:text-brand-leaf px-8 py-6 text-lg"
            >
              Book Demo
            </CTAButton>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-brand-ink">
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-5 h-5 text-brand-leaf" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-5 h-5 text-brand-leaf" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-5 h-5 text-brand-leaf" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[28px] p-8 shadow-[var(--shadow-soft)]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-brand-ink">
            <div>
              <div className="text-4xl font-bold mb-2">14 days</div>
              <div className="text-brand-muted text-sm">Free Trial</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">₹0</div>
              <div className="text-brand-muted text-sm">Setup Fees</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">Multi-branch</div>
              <div className="text-brand-muted text-sm">Ready</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">Tamil Nadu</div>
              <div className="text-brand-muted text-sm">Built</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
