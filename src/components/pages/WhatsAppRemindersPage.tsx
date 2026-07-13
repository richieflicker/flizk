import { ArrowRight, Check, MessageSquare, Bell, Calendar, Smartphone } from "lucide-react";
import Link from "next/link";
import { CTAButton } from "@/components/CTAButton";
import { JsonLd } from "@/components/JsonLd";
import { CTA_PATHS } from "@/lib/cta";
import {pageUrl} from "@/lib/seo";

const benefits = [
  {
    icon: Bell,
    title: "Automated WhatsApp reminders",
    description:
      "Send appointment reminders on WhatsApp so patients get the message where they already are — reducing no-shows without extra staff effort.",
  },
  {
    icon: Calendar,
    title: "Tied to your clinic calendar",
    description:
      "Reminders stay in sync with DentXOne scheduling. When appointments change, your communication stays accurate.",
  },
  {
    icon: Smartphone,
    title: "Built for Indian dental clinics",
    description:
      "WhatsApp is how patients in Chennai, Tamil Nadu, and across India prefer to communicate. DentXOne meets them there.",
  },
  {
    icon: MessageSquare,
    title: "Part of full practice management",
    description:
      "WhatsApp reminders sit alongside patient records, treatments, billing, and analytics — not a bolted-on afterthought.",
  },
];

const faqs = [
  {
    question: "Does DentXOne support WhatsApp appointment reminders?",
    answer:
      "Yes. DentXOne includes WhatsApp-integrated appointment reminders so dental clinics can reduce no-shows and keep patients informed automatically.",
  },
  {
    question: "Is this useful for clinics in India?",
    answer:
      "Absolutely. WhatsApp is the primary messaging channel for most patients in India. DentXOne is built for Indian dental practices, including clinics in Chennai and Tamil Nadu.",
  },
  {
    question: "How do I enable WhatsApp reminders for my clinic?",
    answer:
      "Contact Flizk to book a demo. We’ll show you how DentXOne WhatsApp reminders work and help you get set up for your practice.",
  },
];

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "DentXOne",
  applicationCategory: "HealthApplication",
  operatingSystem: "Web",
  url: pageUrl("/whatsapp-appointment-reminders"),
  description:
    "WhatsApp appointment booking and automated reminders for dental clinics in India, including Chennai and Tamil Nadu.",
  featureList: [
    "WhatsApp appointment reminders",
    "Dental clinic scheduling",
    "Patient management",
    "Billing and operations",
  ],
  provider: {
    "@type": "Organization",
    name: "Flizk",
    url: "https://flizk.com",
  },
  areaServed: [
    { "@type": "City", name: "Chennai" },
    { "@type": "State", name: "Tamil Nadu" },
    { "@type": "Country", name: "IN" },
  ],
};

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

export default function WhatsAppRemindersPage() {
  return (
    <>
      <JsonLd id="whatsapp-software" data={softwareSchema} />
      <JsonLd id="whatsapp-faq" data={faqSchema} />

      <section className="relative bg-gradient-to-br from-[#1E4ED8] to-[#14B8A6] pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <MessageSquare className="w-4 h-4 text-white" />
            <span className="text-white text-sm">WhatsApp for dental clinics</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            WhatsApp Appointment Reminders for Dental Clinics
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10">
            DentXOne helps Indian dental clinics cut no-shows with automated WhatsApp reminders —
            built for practices in Chennai, Tamil Nadu, and across India.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton
              href={CTA_PATHS.trial}
              className="bg-white text-[#1E4ED8] hover:bg-gray-100 px-8 py-6 text-lg"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </CTAButton>
            <CTAButton
              href="/dental-clinic-software-chennai"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg"
            >
              Dental software in Chennai
            </CTAButton>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why WhatsApp reminders matter for dental clinics
          </h2>
          <div className="prose prose-lg text-gray-600 space-y-4">
            <p>
              Missed appointments cost clinics time and revenue. SMS and email help, but patients in
              India live on WhatsApp. DentXOne brings WhatsApp appointment reminders into your
              dental practice management workflow so confirmations and reminders go out automatically.
            </p>
            <p>
              Whether you run a clinic in Chennai or elsewhere in Tamil Nadu, WhatsApp-integrated
              reminders are one of the highest-leverage ways to keep your chair filled.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-[#1E4ED8] to-[#14B8A6] rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">More than reminders</h2>
          <ul className="space-y-4">
            {[
              "Full dental clinic management alongside WhatsApp messaging",
              "Patient records, treatments, and billing in one place",
              "Cloud-based access for your front desk and doctors",
              "Plans for single clinics and multi-location networks",
            ].map((item) => (
              <li key={item} className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-[#22C55E] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-lg">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap gap-4 text-sm">
            <Link href="/products/dentxone" className="text-[#1E4ED8] hover:underline">
              Explore DentXOne features →
            </Link>
            <Link href="/dental-clinic-software-chennai" className="text-[#1E4ED8] hover:underline">
              Dental clinic software Chennai →
            </Link>
            <Link href="/pricing" className="text-[#1E4ED8] hover:underline">
              View plans →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Frequently asked questions</h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="bg-white rounded-2xl p-8 shadow-md border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-[#1E4ED8] to-[#14B8A6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Start reducing no-shows with WhatsApp
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Contact Flizk to see DentXOne WhatsApp reminders in action.
          </p>
          <CTAButton
            href={CTA_PATHS.contact}
            className="bg-white text-[#1E4ED8] hover:bg-gray-100 px-8 py-6 text-lg"
          >
            Contact Us
            <ArrowRight className="ml-2 w-5 h-5" />
          </CTAButton>
        </div>
      </section>
    </>
  );
}
