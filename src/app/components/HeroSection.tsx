import { ArrowRight, Sparkles } from "lucide-react";
import { CTAButton } from "./CTAButton";
import { CTA_PATHS } from "../lib/cta";
import { DashboardMockup } from "./DashboardMockup";

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-[#F8FAFC] via-blue-50/30 to-teal-50/20 pt-20 pb-32 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200 mb-6">
            <Sparkles className="w-4 h-4 text-[#1E4ED8]" />
            <span className="text-sm text-gray-700">Introducing Dentxone</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Modern Technology for
            <br />
            <span className="bg-gradient-to-r from-[#1E4ED8] to-[#14B8A6] bg-clip-text text-transparent">
              Smarter Clinics
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Flizk builds powerful healthcare software platforms that help clinics manage patients,
            appointments, treatments, billing, and operations efficiently.
          </p>

          {/* Product Highlight */}
          <div className="max-w-2xl mx-auto mb-10">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <div className="w-8 h-8 bg-gradient-to-br from-[#1E4ED8] to-[#14B8A6] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">D</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Dentxone</h2>
              </div>
              <p className="text-gray-600">
                All-in-one dental clinic management software built for modern dental practices.
              </p>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <CTAButton
              to={CTA_PATHS.demo}
              className="bg-[#1E4ED8] hover:bg-[#1a42b8] text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
            >
              Book Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </CTAButton>
            <CTAButton
              to={CTA_PATHS.dentxone}
              variant="outline"
              className="px-8 py-6 text-lg border-2 border-gray-300 hover:border-[#1E4ED8] hover:text-[#1E4ED8]"
            >
              Explore Dentxone
            </CTAButton>
          </div>

          {/* Dashboard Mockup */}
          <DashboardMockup />
        </div>
      </div>
    </section>
  );
}
