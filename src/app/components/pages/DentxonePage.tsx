import { CTAButton } from "../CTAButton";
import { PageMeta } from "../PageMeta";
import { JsonLd } from "../JsonLd";
import { CTA_PATHS } from "../../lib/cta";
import { PAGE_SEO, pageUrl } from "../../lib/seo";
import { DashboardMockup } from "../DashboardMockup";
import {
  Users,
  Calendar,
  ClipboardList,
  CreditCard,
  BarChart3,
  Building2,
  Check,
  ArrowRight,
  Smartphone,
  Cloud,
  Shield,
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Patient Management",
    description:
      "Complete patient records with treatment history, X-rays, documents, and notes. Smart search and filtering to find any patient instantly.",
  },
  {
    icon: Calendar,
    title: "Appointment Scheduling",
    description:
      "Intuitive calendar view with drag-and-drop scheduling. Automated SMS and email reminders to reduce no-shows.",
  },
  {
    icon: ClipboardList,
    title: "Treatment Planning",
    description:
      "Create detailed treatment plans with procedures, costs, and timelines. Track treatment progress and completion status.",
  },
  {
    icon: CreditCard,
    title: "Billing & Payments",
    description:
      "Generate professional invoices automatically. Accept multiple payment methods and track outstanding balances.",
  },
  {
    icon: BarChart3,
    title: "Reports & Analytics",
    description:
      "Comprehensive reports on revenue, patient visits, treatments, and staff performance. Export data for further analysis.",
  },
  {
    icon: Building2,
    title: "Multi-Clinic Management",
    description:
      "Manage multiple clinic locations from one unified dashboard. Centralized billing and reporting across all branches.",
  },
];

const faqs = [
  {
    question: "What is dental clinic management software?",
    answer:
      "Dental clinic management software is a comprehensive digital solution that helps dental practices manage all aspects of their operations including patient records, appointments, treatments, billing, and reporting. Dentxone is a modern cloud-based solution specifically designed for dental clinics.",
  },
  {
    question: "How does Dentxone help dental clinics?",
    answer:
      "Dentxone streamlines clinic operations by automating appointment scheduling, maintaining organized patient records, simplifying billing processes, and providing detailed analytics. This helps clinics save time, reduce errors, improve patient satisfaction, and increase revenue.",
  },
  {
    question: "Is Dentxone suitable for multi-clinic setups?",
    answer:
      "Yes! Dentxone's Enterprise plan is specifically designed for multi-clinic networks. You can manage multiple locations from a single dashboard, with centralized reporting, billing, and patient management across all branches.",
  },
  {
    question: "Can Dentxone manage patient records securely?",
    answer:
      "Absolutely. Dentxone uses bank-level encryption and follows healthcare data security best practices. All patient data is stored securely in the cloud with regular backups and compliance with data protection regulations.",
  },
  {
    question: "Do I need to install any software?",
    answer:
      "No! Dentxone is a cloud-based solution that works directly in your web browser. You can access it from any device with an internet connection - desktop, laptop, or tablet.",
  },
  {
    question: "What kind of support do you provide?",
    answer:
      "We offer comprehensive support including email support for all plans, priority support for Professional plans, and 24/7 phone support for Enterprise customers. We also provide onboarding assistance and training resources.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Dentxone",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    price: "999",
  },
  url: pageUrl("/products/dentxone"),
  provider: {
    "@type": "Organization",
    name: "Flizk",
  },
};

export default function DentxonePage() {
  return (
    <>
      <PageMeta {...PAGE_SEO.dentxone} />
      <JsonLd id="dentxone-faq" data={faqSchema} />
      <JsonLd id="dentxone-software" data={softwareSchema} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1E4ED8] to-[#14B8A6] pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="text-white text-sm">Dental Clinic Management Software</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Dentxone
            </h1>
            <p className="text-2xl md:text-3xl text-white/90 mb-8">
              Complete Dental Practice Management Platform
            </p>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-12">
              All-in-one solution for patient management, appointments, treatments, billing, and
              analytics. Built specifically for modern dental practices in India.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <CTAButton
                to={CTA_PATHS.trial}
                className="bg-white text-[#1E4ED8] hover:bg-gray-100 px-8 py-6 text-lg"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </CTAButton>
              <CTAButton
                to={CTA_PATHS.demo}
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg"
              >
                Book Demo
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-16 -mt-32 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DashboardMockup />
        </div>
      </section>

      {/* What is Dental Clinic Management Software */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            What is Dental Clinic Management Software?
          </h2>
          <div className="prose prose-lg text-gray-600 space-y-4">
            <p>
              Dental clinic management software is a specialized digital platform designed to help
              dental practices manage their day-to-day operations efficiently. It replaces manual
              processes and paper-based systems with automated workflows and digital records.
            </p>
            <p>
              Dentxone is a modern cloud-based dental clinic management solution that provides
              everything a dental practice needs in one integrated platform. From patient records and
              appointment scheduling to treatment planning and billing, Dentxone helps dental clinics
              operate more efficiently and provide better patient care.
            </p>
            <p>
              Whether you're a small single-location clinic or a large multi-clinic network, Dentxone
              scales to meet your needs with flexible pricing plans and powerful features designed
              specifically for dental practices in India and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Comprehensive Features for Dental Practices
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to run a successful dental clinic
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-[#1E4ED8] to-[#14B8A6] rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose Dentxone for Your Dental Practice?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#22C55E] rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      Built for Indian Dental Clinics
                    </h4>
                    <p className="text-gray-600">
                      Designed with Indian dental practices in mind, with support for INR currency,
                      local regulations, and Indian payment methods.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#22C55E] rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Easy to Use</h4>
                    <p className="text-gray-600">
                      Intuitive interface that requires minimal training. Your staff can start using
                      Dentxone within minutes.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#22C55E] rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      Affordable Pricing
                    </h4>
                    <p className="text-gray-600">
                      Flexible pricing plans starting at just ₹999/month. No hidden fees or long-term
                      contracts required.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#22C55E] rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      Reliable Support
                    </h4>
                    <p className="text-gray-600">
                      Dedicated customer support team ready to help you with onboarding, training, and
                      any questions you may have.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 text-center">
                <Smartphone className="w-12 h-12 text-[#1E4ED8] mx-auto mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">Mobile Friendly</h4>
                <p className="text-sm text-gray-600">Works on any device</p>
              </div>
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-6 text-center">
                <Cloud className="w-12 h-12 text-[#14B8A6] mx-auto mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">Cloud Based</h4>
                <p className="text-sm text-gray-600">Access from anywhere</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 text-center">
                <Shield className="w-12 h-12 text-[#22C55E] mx-auto mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">Secure</h4>
                <p className="text-sm text-gray-600">Bank-level encryption</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 text-center">
                <BarChart3 className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">Analytics</h4>
                <p className="text-sm text-gray-600">Detailed insights</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">Everything you need to know about Dentxone</p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-md border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-[#1E4ED8] to-[#14B8A6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Dental Practice?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Start your 14-day free trial today. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton
              to={CTA_PATHS.trial}
              className="bg-white text-[#1E4ED8] hover:bg-gray-100 px-8 py-6 text-lg"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </CTAButton>
            <CTAButton
              to={CTA_PATHS.demo}
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg"
            >
              Schedule Demo
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
