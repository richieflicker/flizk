import { CTAButton } from "@/components/CTAButton";
import { CTA_PATHS } from "@/lib/cta";
import { Check, Sparkles, HelpCircle } from "lucide-react";

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
      "Treatment tracking",
      "Basic billing",
      "Email support",
      "Mobile app access",
    ],
    popular: false,
    badge: null as string | null,
  },
  {
    name: "Professional",
    description: "For growing practices with advanced needs",
    features: [
      "Unlimited patients",
      "1 clinic location",
      "5 staff accounts",
      "Advanced scheduling",
      "Complete patient records",
      "Treatment planning",
      "Billing & payments",
      "Reports & analytics",
      "WhatsApp, SMS & email reminders",
      "Priority support",
      "Custom branding",
      "Data export",
    ],
    popular: true,
    badge: "Most Popular",
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
      "On-site training",
      "Custom workflows",
      "SLA guarantee",
    ],
    popular: false,
    badge: "Enterprise",
  },
];

const faqs = [
  {
    question: "How do I get pricing for DentXOne?",
    answer:
      "Contact us through the form and tell us about your clinic. We’ll recommend a plan and share a quote tailored to your needs.",
  },
  {
    question: "Can I change plans later?",
    answer:
      "Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect immediately.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit/debit cards, UPI, net banking, and can set up invoicing for annual plans.",
  },
  {
    question: "Is there a setup fee?",
    answer: "No setup fees. We include onboarding assistance for free.",
  },
  {
    question: "What happens if I exceed my patient limit?",
    answer:
      "For the Starter plan, we'll notify you when you're approaching the limit and help you upgrade to Professional for unlimited patients.",
  },
  {
    question: "Do you offer discounts for annual billing?",
    answer:
      "Yes — ask our team when you contact us. Annual billing options are available.",
  },
];

export default function PricingPage() {
  return (
    <>

      <section className="pt-32 pb-20 bg-brand-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-brand-ink mb-6">
              DentXOne Plans for Your Clinic
            </h1>
            <p className="text-xl md:text-2xl text-brand-muted max-w-3xl mx-auto">
              Compare plans for dental clinics in Chennai, Tamil Nadu, and across India.
              Contact us for a quote — no public price list.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24 -mt-8 bg-brand-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-[20px] p-8 shadow-[var(--shadow-soft)] transition-all duration-300 ${
                  plan.popular
                    ? "bg-gradient-to-br from-brand-leaf to-brand-teal text-white md:scale-105"
                    : "bg-white"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-white text-brand-leaf px-4 py-1 rounded-full text-sm font-semibold flex items-center space-x-1 shadow-[var(--shadow-soft)]">
                      <Sparkles className="w-4 h-4" />
                      <span>{plan.badge}</span>
                    </div>
                  </div>
                )}

                <div className="mb-8">
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
                    className={`w-full py-6 text-base rounded-2xl ${
                      plan.popular
                        ? "bg-white text-brand-leaf hover:bg-gray-100"
                        : "bg-brand-leaf text-white hover:bg-brand-leaf/90"
                    }`}
                  >
                    Contact Us
                  </CTAButton>
                </div>

                <div className="space-y-4">
                  <p
                    className={`text-sm font-semibold mb-4 ${
                      plan.popular ? "text-white" : "text-brand-ink"
                    }`}
                  >
                    Everything included:
                  </p>
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start space-x-3">
                      <Check
                        className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
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
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-ink mb-4">Compare Plans</h2>
            <p className="text-xl text-brand-muted">See which plan is right for your practice</p>
          </div>

          <div className="overflow-x-auto rounded-[20px] shadow-[var(--shadow-soft)]">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-brand-surface">
                  <th className="text-left py-4 px-6 text-brand-ink font-semibold">Feature</th>
                  <th className="text-center py-4 px-6 text-brand-ink font-semibold">Starter</th>
                  <th className="text-center py-4 px-6 text-brand-leaf font-semibold bg-brand-leaf-tint">
                    Professional
                  </th>
                  <th className="text-center py-4 px-6 text-brand-ink font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-brand-surface">
                  <td className="py-4 px-6 text-brand-muted">Patient Records</td>
                  <td className="text-center py-4 px-6">100</td>
                  <td className="text-center py-4 px-6 bg-brand-leaf-tint">Unlimited</td>
                  <td className="text-center py-4 px-6">Unlimited</td>
                </tr>
                <tr className="border-b border-brand-surface">
                  <td className="py-4 px-6 text-brand-muted">Clinic Locations</td>
                  <td className="text-center py-4 px-6">1</td>
                  <td className="text-center py-4 px-6 bg-brand-leaf-tint">1</td>
                  <td className="text-center py-4 px-6">Multiple</td>
                </tr>
                <tr className="border-b border-brand-surface">
                  <td className="py-4 px-6 text-brand-muted">Staff Accounts</td>
                  <td className="text-center py-4 px-6">2</td>
                  <td className="text-center py-4 px-6 bg-brand-leaf-tint">5</td>
                  <td className="text-center py-4 px-6">Unlimited</td>
                </tr>
                <tr className="border-b border-brand-surface">
                  <td className="py-4 px-6 text-brand-muted">WhatsApp Reminders</td>
                  <td className="text-center py-4 px-6">—</td>
                  <td className="text-center py-4 px-6 bg-brand-leaf-tint">
                    <Check className="w-5 h-5 text-brand-leaf mx-auto" />
                  </td>
                  <td className="text-center py-4 px-6">
                    <Check className="w-5 h-5 text-brand-leaf mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-brand-surface">
                  <td className="py-4 px-6 text-brand-muted">API Access</td>
                  <td className="text-center py-4 px-6">—</td>
                  <td className="text-center py-4 px-6 bg-brand-leaf-tint">—</td>
                  <td className="text-center py-4 px-6">
                    <Check className="w-5 h-5 text-brand-leaf mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-brand-muted">Dedicated Support</td>
                  <td className="text-center py-4 px-6">—</td>
                  <td className="text-center py-4 px-6 bg-brand-leaf-tint">—</td>
                  <td className="text-center py-4 px-6">
                    <Check className="w-5 h-5 text-brand-leaf mx-auto" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-ink mb-4">Plan FAQs</h2>
            <p className="text-xl text-brand-muted">Common questions about DentXOne plans</p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="bg-white rounded-[20px] p-8 shadow-[var(--shadow-soft)]"
              >
                <div className="flex items-start space-x-4">
                  <HelpCircle className="w-6 h-6 text-brand-leaf flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-brand-ink mb-3">{faq.question}</h3>
                    <p className="text-brand-muted leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-brand-muted mb-4">Still have questions?</p>
            <CTAButton
              href={CTA_PATHS.contact}
              className="bg-brand-leaf hover:bg-brand-leaf/90 text-white px-8 py-4 rounded-2xl"
            >
              Contact Us
            </CTAButton>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-brand-leaf to-brand-teal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get a Quote for Your Clinic
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Tell us about your practice and we&apos;ll recommend the right DentXOne plan.
          </p>
          <CTAButton
            href={CTA_PATHS.contact}
            className="bg-white text-brand-leaf hover:bg-gray-100 px-8 py-6 text-lg rounded-2xl"
          >
            Contact Us
          </CTAButton>
        </div>
      </section>
    </>
  );
}
