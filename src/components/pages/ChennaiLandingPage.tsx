import { ArrowRight, Check, MapPin, MessageSquare, Calendar, Users } from "lucide-react";
import Link from "next/link";
import { CTAButton } from "@/components/CTAButton";
import { JsonLd } from "@/components/JsonLd";
import { CTA_PATHS } from "@/lib/cta";
import {pageUrl} from "@/lib/seo";

const highlights = [
  {
    icon: MapPin,
    title: "Built for Chennai & Tamil Nadu clinics",
    description:
      "DentXOne is designed for Indian dental practices — INR workflows, local payment methods, and support that understands how clinics in Chennai and Tamil Nadu operate.",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp appointment reminders",
    description:
      "Send automated WhatsApp reminders so patients show up on time. Reduce no-shows without adding front-desk workload.",
  },
  {
    icon: Calendar,
    title: "Scheduling, records & billing",
    description:
      "Manage appointments, patient records, treatment plans, and billing from one cloud dashboard — accessible from any device.",
  },
  {
    icon: Users,
    title: "Single clinic or multi-location",
    description:
      "Whether you run one clinic in Chennai or a network across Tamil Nadu, DentXOne scales with your practice.",
  },
];

const faqs = [
  {
    question: "Is DentXOne dental clinic software available in Chennai?",
    answer:
      "Yes. DentXOne by Flizk is built for dental clinics in Chennai and Tamil Nadu, with WhatsApp reminders, patient management, appointments, and billing in one platform.",
  },
  {
    question: "What makes DentXOne different from generic clinic software?",
    answer:
      "DentXOne is purpose-built for dental practices in India — including WhatsApp-integrated reminders, dental workflows, and support focused on Chennai and Tamil Nadu clinics.",
  },
  {
    question: "How do I get started?",
    answer:
      "Contact Flizk to book a demo or discuss a plan for your clinic. We’ll walk you through DentXOne and help you get set up.",
  },
];

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "DentXOne",
  applicationCategory: "HealthApplication",
  operatingSystem: "Web",
  url: pageUrl("/dental-clinic-software-chennai"),
  description:
    "Dental clinic management software for Chennai and Tamil Nadu clinics with WhatsApp appointment reminders.",
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

export default function ChennaiLandingPage() {
  return (
    <>
      <JsonLd id="chennai-software" data={softwareSchema} />
      <JsonLd id="chennai-faq" data={faqSchema} />

      <section className="relative bg-brand-surface pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 bg-brand-leaf-tint px-4 py-2 rounded-full mb-6">
            <MapPin className="w-4 h-4 text-brand-leaf" />
            <span className="text-brand-ink text-sm">Chennai & Tamil Nadu</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-brand-ink mb-6 leading-tight">
            Dental Clinic Software in Chennai
          </h1>
          <p className="text-xl md:text-2xl text-brand-muted max-w-3xl mx-auto mb-10">
            DentXOne by Flizk helps Chennai and Tamil Nadu dental clinics manage patients,
            appointments, billing, and WhatsApp reminders — in one modern platform.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton
              href={CTA_PATHS.trial}
              className="bg-brand-leaf hover:bg-brand-leaf/90 text-white px-8 py-6 text-lg rounded-2xl shadow-[var(--shadow-soft)]"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </CTAButton>
            <CTAButton
              href={CTA_PATHS.dentxone}
              variant="outline"
              className="bg-white border-0 rounded-2xl hover:text-brand-leaf px-8 py-6 text-lg"
            >
              Explore DentXOne
            </CTAButton>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-ink mb-6">
            Why Chennai dental clinics choose DentXOne
          </h2>
          <div className="prose prose-lg text-brand-muted space-y-4">
            <p>
              Searching for dental clinic software in Chennai or dental practice management software
              in Tamil Nadu? DentXOne is built specifically for Indian dental practices — not a
              generic global tool adapted after the fact.
            </p>
            <p>
              From patient records and appointment booking to WhatsApp reminders and billing,
              DentXOne gives clinic owners and staff one place to run day-to-day operations so you
              can focus on care, not paperwork.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white rounded-[20px] p-8 shadow-[var(--shadow-soft)]"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-brand-leaf to-brand-teal rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-brand-ink mb-4">{item.title}</h3>
                  <p className="text-brand-muted leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-ink mb-8">What you get with DentXOne</h2>
          <ul className="space-y-4">
            {[
              "Patient records and treatment history",
              "Appointment scheduling with WhatsApp reminders",
              "Billing and payment tracking",
              "Reports and clinic analytics",
              "Cloud access from desktop or tablet",
            ].map((item) => (
              <li key={item} className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-brand-leaf flex-shrink-0 mt-0.5" />
                <span className="text-brand-ink/80 text-lg">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap gap-4 text-sm">
            <Link href="/whatsapp-appointment-reminders" className="text-brand-leaf hover:underline">
              WhatsApp appointment reminders →
            </Link>
            <Link href="/pricing" className="text-brand-leaf hover:underline">
              View plans →
            </Link>
            <Link href="/products/dentxone" className="text-brand-leaf hover:underline">
              Full product overview →
            </Link>
            <Link href="/dental-clinic-software-madurai" className="text-brand-leaf hover:underline">
              Dental clinic software Madurai →
            </Link>
            <Link href="/dental-clinic-software-coimbatore" className="text-brand-leaf hover:underline">
              Dental clinic software Coimbatore →
            </Link>
            <Link href="/dental-clinic-software-virudhunagar" className="text-brand-leaf hover:underline">
              Dental clinic software Virudhunagar →
            </Link>
            <Link href="/dental-clinic-software-kanyakumari" className="text-brand-leaf hover:underline">
              Dental clinic software Kanyakumari →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-ink mb-10 text-center">Frequently asked questions</h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="bg-white rounded-[20px] p-8 shadow-[var(--shadow-soft)]">
                <h3 className="text-xl font-semibold text-brand-ink mb-4">{faq.question}</h3>
                <p className="text-brand-muted leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-brand-leaf to-brand-teal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready for dental clinic software that fits Chennai?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Contact Flizk to book a DentXOne demo for your practice.
          </p>
          <CTAButton
            href={CTA_PATHS.contact}
            className="bg-white text-brand-leaf hover:bg-gray-100 px-8 py-6 text-lg rounded-2xl"
          >
            Contact Us
            <ArrowRight className="ml-2 w-5 h-5" />
          </CTAButton>
        </div>
      </section>
    </>
  );
}
