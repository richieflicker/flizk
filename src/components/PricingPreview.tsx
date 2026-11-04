import { Check, Sparkles } from "lucide-react";
import { CTAButton } from "./CTAButton";
import { CTA_PATHS } from "@/lib/cta";

const plans = [
  {
    name: "Solo",
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
    name: "Clinic",
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
    name: "Network",
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
    <section id="pricing" className="py-24 bg-brand-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-ink mb-4">
            Plans for Every Dental Practice
          </h2>
          <p className="text-xl text-brand-muted max-w-2xl mx-auto">
            Choose the plan that fits your clinic. Contact us for a quote tailored to your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-[20px] p-8 shadow-[var(--shadow-soft)] ${
                plan.popular
                  ? "bg-gradient-to-br from-brand-leaf to-brand-teal text-white"
                  : "bg-white"
              } transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-white text-brand-leaf px-4 py-1 rounded-full text-sm font-semibold flex items-center space-x-1 shadow-[var(--shadow-soft)]">
                    <Sparkles className="w-4 h-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <h3
                className={`text-2xl font-bold mb-2 ${
                  plan.popular ? "text-white" : "text-brand-ink"
                }`}
              >
                {plan.name}
              </h3>

              <p
                className={`text-sm mb-8 ${
                  plan.popular ? "text-white/90" : "text-brand-muted"
                }`}
              >
                {plan.description}
              </p>

              <CTAButton
                href={CTA_PATHS.contact}
                className={`w-full mb-8 py-6 rounded-2xl ${
                  plan.popular
                    ? "bg-white text-brand-leaf hover:bg-gray-100"
                    : "bg-brand-leaf text-white hover:bg-brand-leaf/90"
                }`}
              >
                Contact Us
              </CTAButton>

              <div className="space-y-4">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start space-x-3">
                    <Check
                      className={`w-5 h-5 flex-shrink-0 ${
                        plan.popular ? "text-white" : "text-brand-leaf"
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        plan.popular ? "text-white/90" : "text-brand-ink/80"
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
          <p className="text-brand-muted">
            Tell us about your clinic and we&apos;ll recommend the right DentXOne plan.
          </p>
        </div>
      </div>
    </section>
  );
}
