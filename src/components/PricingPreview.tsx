import { Check, Sparkles } from "lucide-react";
import { CTAButton } from "./CTAButton";
import { CTA_PATHS } from "@/lib/cta";

const plans = [
  {
    name: "Starter",
    description: "Perfect for small dental clinics getting started",
    features: [
      "Up to 100 patients",
      "1 clinic location",
      "2 staff accounts",
      "Appointment scheduling",
      "Basic patient records",
      "Email support",
    ],
    popular: false,
  },
  {
    name: "Professional",
    description: "For growing practices with advanced needs",
    features: [
      "Unlimited patients",
      "1 clinic location",
      "5 staff accounts",
      "Advanced scheduling",
      "Treatment planning",
      "Billing & payments",
      "Reports & analytics",
      "WhatsApp & SMS reminders",
      "Priority support",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
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
    popular: false,
  },
];

export function PricingPreview() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Plans for Every Dental Practice
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your clinic. Contact us for a quote tailored to your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl p-8 ${
                plan.popular
                  ? "bg-gradient-to-br from-[#1E4ED8] to-[#14B8A6] text-white shadow-2xl scale-105"
                  : "bg-white border-2 border-gray-200 hover:border-gray-300 shadow-lg"
              } transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-[#22C55E] text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Sparkles className="w-4 h-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <h3
                className={`text-2xl font-bold mb-2 ${
                  plan.popular ? "text-white" : "text-gray-900"
                }`}
              >
                {plan.name}
              </h3>

              <p
                className={`text-sm mb-8 ${
                  plan.popular ? "text-white/90" : "text-gray-600"
                }`}
              >
                {plan.description}
              </p>

              <CTAButton
                href={CTA_PATHS.contact}
                className={`w-full mb-8 py-6 ${
                  plan.popular
                    ? "bg-white text-[#1E4ED8] hover:bg-gray-100"
                    : "bg-[#1E4ED8] text-white hover:bg-[#1a42b8]"
                }`}
              >
                Contact Us
              </CTAButton>

              <div className="space-y-4">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start space-x-3">
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

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Tell us about your clinic and we&apos;ll recommend the right DentXOne plan.
          </p>
        </div>
      </div>
    </section>
  );
}
