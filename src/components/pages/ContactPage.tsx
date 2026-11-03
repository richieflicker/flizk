import { Suspense } from "react";
import { Clock, Mail, MessageSquare, Calendar } from "lucide-react";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { CTA_PATHS } from "@/lib/cta";

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    detail: "support@flizk.com",
    detailHref: "mailto:support@flizk.com",
    description: "We usually reply within 1 business day.",
    tint: "bg-brand-leaf-tint",
    iconColor: "text-brand-leaf",
  },
  {
    icon: Clock,
    title: "Business Hours",
    detail: "Mon - Fri: 9 AM - 6 PM IST",
    detailHref: undefined as string | undefined,
    description: "We're available during business hours to help you.",
    tint: "bg-brand-teal-tint",
    iconColor: "text-brand-teal",
  },
];

export default function ContactPage() {
  return (
    <>

      <section className="pt-32 pb-20 bg-brand-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-brand-ink mb-6">Get in Touch</h1>
            <p className="text-xl md:text-2xl text-brand-muted max-w-3xl mx-auto">
              Have questions about DentXOne or Flizk? We&apos;re here to help. Reach out and
              let&apos;s talk about how we can transform your dental practice.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 -mt-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {contactMethods.map((method) => {
              const Icon = method.icon;
              return (
                <div
                  key={method.title}
                  className="bg-white rounded-[20px] p-6 shadow-[var(--shadow-soft)]"
                >
                  <div
                    className={`w-12 h-12 ${method.tint} rounded-2xl flex items-center justify-center mb-4`}
                  >
                    <Icon className={`w-6 h-6 ${method.iconColor}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-brand-ink mb-2">{method.title}</h3>
                  {method.detailHref ? (
                    <a
                      href={method.detailHref}
                      className="text-brand-leaf font-medium mb-2 inline-block hover:underline"
                    >
                      {method.detail}
                    </a>
                  ) : (
                    <p className="text-brand-leaf font-medium mb-2">{method.detail}</p>
                  )}
                  <p className="text-sm text-brand-muted">{method.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-brand-ink mb-4">Send Us a Message</h2>
                <p className="text-xl text-brand-muted">
                  Fill out the form below and we&apos;ll get back to you as soon as possible.
                </p>
              </div>
              <Suspense fallback={<p className="text-brand-muted">Loading form…</p>}>
                <ContactForm />
              </Suspense>
            </div>

            <div className="space-y-8">
              <div className="bg-brand-leaf-tint rounded-[20px] p-8">
                <h3 className="text-2xl font-bold text-brand-ink mb-6">Quick Actions</h3>
                <div className="space-y-4">
                  <Link
                    href={CTA_PATHS.demo}
                    className="w-full flex items-center justify-between bg-white hover:bg-gray-50 p-4 rounded-2xl shadow-[var(--shadow-soft)] transition-all group"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-brand-leaf rounded-xl flex items-center justify-center">
                        <Calendar className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-left">
                        <h4 className="font-semibold text-brand-ink">Book a Demo</h4>
                        <p className="text-sm text-brand-muted">See DentXOne in action</p>
                      </div>
                    </div>
                    <span className="text-brand-muted group-hover:text-brand-leaf">→</span>
                  </Link>

                  <Link
                    href={CTA_PATHS.enterprise}
                    className="w-full flex items-center justify-between bg-white hover:bg-gray-50 p-4 rounded-2xl shadow-[var(--shadow-soft)] transition-all group"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-brand-teal rounded-xl flex items-center justify-center">
                        <MessageSquare className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-left">
                        <h4 className="font-semibold text-brand-ink">Chat with Sales</h4>
                        <p className="text-sm text-brand-muted">Enterprise and multi-clinic plans</p>
                      </div>
                    </div>
                    <span className="text-brand-muted group-hover:text-brand-teal">→</span>
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-[20px] p-8 shadow-[var(--shadow-soft)]">
                <h3 className="text-2xl font-bold text-brand-ink mb-6">Support Resources</h3>
                <div className="space-y-4">
                  <Link
                    href="/products/dentxone"
                    className="block text-brand-leaf hover:text-brand-leaf/80 transition-colors"
                  >
                    → Product overview & FAQs
                  </Link>
                  <Link
                    href="/pricing"
                    className="block text-brand-leaf hover:text-brand-leaf/80 transition-colors"
                  >
                    → Plans
                  </Link>
                  <Link
                    href="/dental-clinic-software-chennai"
                    className="block text-brand-leaf hover:text-brand-leaf/80 transition-colors"
                  >
                    → Dental clinic software Chennai
                  </Link>
                  <Link
                    href="/whatsapp-appointment-reminders"
                    className="block text-brand-leaf hover:text-brand-leaf/80 transition-colors"
                  >
                    → WhatsApp appointment reminders
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-ink mb-4">Common Questions</h2>
            <p className="text-xl text-brand-muted">Quick answers to questions you may have</p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-[20px] p-8 shadow-[var(--shadow-soft)]">
              <h3 className="text-xl font-semibold text-brand-ink mb-3">
                How quickly will I hear back?
              </h3>
              <p className="text-brand-muted">
                We typically respond to all inquiries within 24 hours during business days.
              </p>
            </div>

            <div className="bg-white rounded-[20px] p-8 shadow-[var(--shadow-soft)]">
              <h3 className="text-xl font-semibold text-brand-ink mb-3">
                Can I schedule a product demo?
              </h3>
              <p className="text-brand-muted">
                Absolutely! Use the{" "}
                <Link href={CTA_PATHS.demo} className="text-brand-leaf hover:underline">
                  Book a Demo
                </Link>{" "}
                option and we&apos;ll walk you through DentXOne live.
              </p>
            </div>

            <div className="bg-white rounded-[20px] p-8 shadow-[var(--shadow-soft)]">
              <h3 className="text-xl font-semibold text-brand-ink mb-3">
                How do I get support?
              </h3>
              <p className="text-brand-muted">
                Email{" "}
                <a href="mailto:support@flizk.com" className="text-brand-leaf hover:underline">
                  support@flizk.com
                </a>{" "}
                for the fastest response, or fill out the form on this page and we&apos;ll follow
                up within one business day.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
