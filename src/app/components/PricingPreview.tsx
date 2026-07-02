import { Check, Sparkles } from "lucide-react";
import { CTAButton } from "./CTAButton";
import { CTA_PATHS } from "../lib/cta";

const plans = [
  {
    name: "Starter",
    price: "₹999",
    period: "/month",
    description: "Perfect for small dental clinics getting started",
    features: [
      "Up to 100 patients",
      "1 clinic location",
      "2 staff accounts",
      "Appointment scheduling",
      "Basic patient records",
      "Email support",
    ],
    cta: "Start Free Trial",
    ctaPath: CTA_PATHS.trial,
    popular: false,
  },
  {
    name: "Professional",
    price: "₹2,999",
    period: "/month",
    description: "For growing practices with advanced needs",
    features: [
      "Unlimited patients",
      "1 clinic location",
      "5 staff accounts",
      "Advanced scheduling",
      "Treatment planning",
      "Billing & payments",
      "Reports & analytics",
      "Priority support",
    ],
    cta: "Start Free Trial",
    ctaPath: CTA_PATHS.trial,
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "pricing",
    description: "For multi-clinic networks and large practices",
    features: [
      "Unlimited patients",
      "Multiple clinic locations",
      "Unlimited staff accounts",
      "Multi-clinic management",
      "Advanced analytics",
      "Custom integrations",
      "API access",
      "Dedicated account manager",
      "24/7 phone support",
    ],
    cta: "Contact Sales",
    ctaPath: CTA_PATHS.enterprise,
    popular: false,
  },
];

export function PricingPreview() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your dental practice. No hidden fees, cancel anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-8 ${
                plan.popular
                  ? "bg-gradient-to-br from-[#1E4ED8] to-[#14B8A6] text-white shadow-2xl scale-105"
                  : "bg-white border-2 border-gray-200 hover:border-gray-300 shadow-lg"
              } transition-all duration-300`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-[#22C55E] text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Sparkles className="w-4 h-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              {/* Plan Name */}
              <h3
                className={`text-2xl font-bold mb-2 ${
                  plan.popular ? "text-white" : "text-gray-900"
                }`}
              >
                {plan.name}
              </h3>

              {/* Description */}
              <p
                className={`text-sm mb-6 ${
                  plan.popular ? "text-white/90" : "text-gray-600"
                }`}
              >
                {plan.description}
              </p>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-baseline">
                  <span
                    className={`text-5xl font-bold ${
                      plan.popular ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`ml-2 ${
                      plan.popular ? "text-white/80" : "text-gray-600"
                    }`}
                  >
                    {plan.period}
                  </span>
                </div>
              </div>

              {/* CTA Button */}
              <CTAButton
                to={plan.ctaPath}
                className={`w-full mb-8 py-6 ${
                  plan.popular
                    ? "bg-white text-[#1E4ED8] hover:bg-gray-100"
                    : "bg-[#1E4ED8] text-white hover:bg-[#1a42b8]"
                }`}
              >
                {plan.cta}
              </CTAButton>

              {/* Features List */}
              <div className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <Check
                      className={`w-5 h-5 flex-shrink-0 ${
                        plan.popular ? "text-white" : "text-[#22C55E]"
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        plan.popular ? "text-white/90" : "text-gray-700"
                      }`}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            All plans include a <span className="font-semibold text-[#1E4ED8]">14-day free trial</span>. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
}
