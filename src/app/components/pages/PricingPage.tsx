import { Button } from "../ui/button";
import { Check, Sparkles, HelpCircle } from "lucide-react";

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
      "Treatment tracking",
      "Basic billing",
      "Email support",
      "Mobile app access",
    ],
    cta: "Start Free Trial",
    popular: false,
    badge: null,
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
      "Complete patient records",
      "Treatment planning",
      "Billing & payments",
      "Reports & analytics",
      "SMS & email reminders",
      "Priority support",
      "Custom branding",
      "Data export",
    ],
    cta: "Start Free Trial",
    popular: true,
    badge: "Most Popular",
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
      "On-site training",
      "Custom workflows",
      "SLA guarantee",
    ],
    cta: "Contact Sales",
    popular: false,
    badge: "Enterprise",
  },
];

const faqs = [
  {
    question: "Is there a free trial?",
    answer:
      "Yes! All plans come with a 14-day free trial. No credit card required to start your trial.",
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
    answer: "No setup fees! The price you see is all you pay. We include onboarding assistance for free.",
  },
  {
    question: "What happens if I exceed my patient limit?",
    answer:
      "For the Starter plan, we'll notify you when you're approaching the limit and help you upgrade to Professional for unlimited patients.",
  },
  {
    question: "Do you offer discounts for annual billing?",
    answer:
      "Yes! Save 20% when you choose annual billing. Contact our sales team for custom pricing options.",
  },
];

export default function PricingPage() {
  return (
    <>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-white to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect plan for your dental practice. Start with a 14-day free trial.
              <br />
              No credit card required.
            </p>
          </div>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-16">
            <span className="text-gray-700 font-medium">Monthly</span>
            <button className="relative w-14 h-8 bg-gray-300 rounded-full transition-colors">
              <div className="absolute left-1 top-1 w-6 h-6 bg-white rounded-full shadow-md"></div>
            </button>
            <span className="text-gray-700 font-medium">
              Annual <span className="text-[#22C55E] text-sm">(Save 20%)</span>
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-24 -mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-3xl p-8 transition-all duration-300 ${
                  plan.popular
                    ? "bg-gradient-to-br from-[#1E4ED8] to-[#14B8A6] text-white shadow-2xl scale-105 md:scale-110"
                    : "bg-white border-2 border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-xl"
                }`}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-[#22C55E] text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center space-x-1 shadow-lg">
                      <Sparkles className="w-4 h-4" />
                      <span>{plan.badge}</span>
                    </div>
                  </div>
                )}

                {/* Plan Header */}
                <div className="mb-8">
                  <h3
                    className={`text-2xl font-bold mb-2 ${
                      plan.popular ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`text-sm mb-6 ${
                      plan.popular ? "text-white/90" : "text-gray-600"
                    }`}
                  >
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="flex items-baseline mb-6">
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

                  {/* CTA Button */}
                  <Button
                    className={`w-full py-6 text-base ${
                      plan.popular
                        ? "bg-white text-[#1E4ED8] hover:bg-gray-100"
                        : "bg-[#1E4ED8] text-white hover:bg-[#1a42b8]"
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </div>

                {/* Features List */}
                <div className="space-y-4">
                  <p
                    className={`text-sm font-semibold mb-4 ${
                      plan.popular ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Everything included:
                  </p>
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <Check
                        className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
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
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Compare Plans</h2>
            <p className="text-xl text-gray-600">See which plan is right for your practice</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-6 text-gray-900 font-semibold">Feature</th>
                  <th className="text-center py-4 px-6 text-gray-900 font-semibold">Starter</th>
                  <th className="text-center py-4 px-6 text-[#1E4ED8] font-semibold bg-blue-50">
                    Professional
                  </th>
                  <th className="text-center py-4 px-6 text-gray-900 font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 text-gray-700">Patient Records</td>
                  <td className="text-center py-4 px-6">100</td>
                  <td className="text-center py-4 px-6 bg-blue-50">Unlimited</td>
                  <td className="text-center py-4 px-6">Unlimited</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 text-gray-700">Clinic Locations</td>
                  <td className="text-center py-4 px-6">1</td>
                  <td className="text-center py-4 px-6 bg-blue-50">1</td>
                  <td className="text-center py-4 px-6">Multiple</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 text-gray-700">Staff Accounts</td>
                  <td className="text-center py-4 px-6">2</td>
                  <td className="text-center py-4 px-6 bg-blue-50">5</td>
                  <td className="text-center py-4 px-6">Unlimited</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 text-gray-700">SMS Reminders</td>
                  <td className="text-center py-4 px-6">—</td>
                  <td className="text-center py-4 px-6 bg-blue-50">
                    <Check className="w-5 h-5 text-[#22C55E] mx-auto" />
                  </td>
                  <td className="text-center py-4 px-6">
                    <Check className="w-5 h-5 text-[#22C55E] mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 text-gray-700">API Access</td>
                  <td className="text-center py-4 px-6">—</td>
                  <td className="text-center py-4 px-6 bg-blue-50">—</td>
                  <td className="text-center py-4 px-6">
                    <Check className="w-5 h-5 text-[#22C55E] mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 text-gray-700">Dedicated Support</td>
                  <td className="text-center py-4 px-6">—</td>
                  <td className="text-center py-4 px-6 bg-blue-50">—</td>
                  <td className="text-center py-4 px-6">
                    <Check className="w-5 h-5 text-[#22C55E] mx-auto" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Pricing FAQs</h2>
            <p className="text-xl text-gray-600">Common questions about our pricing</p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-md border border-gray-100"
              >
                <div className="flex items-start space-x-4">
                  <HelpCircle className="w-6 h-6 text-[#1E4ED8] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{faq.question}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <Button className="bg-[#1E4ED8] hover:bg-[#1a42b8] text-white px-8 py-4">
              Contact Sales Team
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-[#1E4ED8] to-[#14B8A6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Start Your Free Trial Today
          </h2>
          <p className="text-xl text-white/90 mb-8">
            No credit card required. 14 days to explore all features.
          </p>
          <Button className="bg-white text-[#1E4ED8] hover:bg-gray-100 px-8 py-6 text-lg">
            Get Started Free
          </Button>
        </div>
      </section>
    </>
  );
}
