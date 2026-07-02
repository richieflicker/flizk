import { ArrowRight, CheckCircle2 } from "lucide-react";
import { CTAButton } from "./CTAButton";
import { CTA_PATHS } from "../lib/cta";

export function FinalCTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#1E4ED8] via-[#1a42b8] to-[#14B8A6] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Modernize Your Clinic?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12">
            Join hundreds of dental clinics using Dentxone to streamline operations, improve
            patient care, and grow their practice.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <CTAButton
              to={CTA_PATHS.demo}
              className="bg-white text-[#1E4ED8] hover:bg-gray-100 px-8 py-6 text-lg shadow-2xl hover:shadow-3xl transition-all"
            >
              Book Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </CTAButton>
            <CTAButton
              to={CTA_PATHS.trial}
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg"
            >
              Start Free Trial
            </CTAButton>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-white/90">
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-5 h-5 text-[#22C55E]" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-5 h-5 text-[#22C55E]" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-5 h-5 text-[#22C55E]" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">5 min</div>
              <div className="text-white/80 text-sm">Setup Time</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">60%</div>
              <div className="text-white/80 text-sm">Time Saved</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-white/80 text-sm">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-white/80 text-sm">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
