import { Mail, Phone, MapPin, Clock, MessageSquare, Calendar } from "lucide-react";
import { Link } from "react-router";
import { ContactForm } from "../ContactForm";
import { PageMeta } from "../PageMeta";
import { CTA_PATHS } from "../../lib/cta";
import { PAGE_SEO } from "../../lib/seo";

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    detail: "hello@flizk.com",
    href: "mailto:hello@flizk.com",
    description: "Send us an email anytime. We typically respond within 24 hours.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Phone,
    title: "Call Us",
    detail: "+91 123 456 7890",
    href: "tel:+911234567890",
    description: "Call us during business hours for immediate assistance.",
    color: "from-teal-500 to-teal-600",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    detail: "Mumbai, India",
    description: "Come visit our office. Schedule an appointment first.",
    color: "from-green-500 to-green-600",
  },
  {
    icon: Clock,
    title: "Business Hours",
    detail: "Mon - Fri: 9 AM - 6 PM",
    description: "We're available during business hours to help you.",
    color: "from-purple-500 to-purple-600",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageMeta {...PAGE_SEO.contact} />

      <section className="pt-32 pb-20 bg-gradient-to-br from-[#1E4ED8] to-[#14B8A6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Get in Touch</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Have questions about Dentxone or Flizk? We&apos;re here to help. Reach out and
              let&apos;s talk about how we can transform your dental practice.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 -mt-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all"
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center mb-4`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{method.title}</h3>
                  {method.href ? (
                    <a
                      href={method.href}
                      className="text-[#1E4ED8] font-medium mb-2 block hover:underline"
                    >
                      {method.detail}
                    </a>
                  ) : (
                    <p className="text-[#1E4ED8] font-medium mb-2">{method.detail}</p>
                  )}
                  <p className="text-sm text-gray-600">{method.description}</p>
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
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
                <p className="text-xl text-gray-600">
                  Fill out the form below and we&apos;ll get back to you as soon as possible.
                </p>
              </div>
              <ContactForm />
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 border border-blue-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h3>
                <div className="space-y-4">
                  <Link
                    to={CTA_PATHS.demo}
                    className="w-full flex items-center justify-between bg-white hover:bg-gray-50 p-4 rounded-xl shadow-sm border border-gray-200 transition-all group"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-[#1E4ED8] rounded-lg flex items-center justify-center">
                        <Calendar className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-left">
                        <h4 className="font-semibold text-gray-900">Book a Demo</h4>
                        <p className="text-sm text-gray-600">See Dentxone in action</p>
                      </div>
                    </div>
                    <span className="text-gray-400 group-hover:text-[#1E4ED8]">→</span>
                  </Link>

                  <Link
                    to={CTA_PATHS.enterprise}
                    className="w-full flex items-center justify-between bg-white hover:bg-gray-50 p-4 rounded-xl shadow-sm border border-gray-200 transition-all group"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-[#14B8A6] rounded-lg flex items-center justify-center">
                        <MessageSquare className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-left">
                        <h4 className="font-semibold text-gray-900">Chat with Sales</h4>
                        <p className="text-sm text-gray-600">Enterprise and multi-clinic plans</p>
                      </div>
                    </div>
                    <span className="text-gray-400 group-hover:text-[#14B8A6]">→</span>
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Support Resources</h3>
                <div className="space-y-4">
                  <Link
                    to="/products/dentxone"
                    className="block text-[#1E4ED8] hover:text-[#1a42b8] transition-colors"
                  >
                    → Product overview & FAQs
                  </Link>
                  <Link
                    to="/pricing"
                    className="block text-[#1E4ED8] hover:text-[#1a42b8] transition-colors"
                  >
                    → Pricing & plans
                  </Link>
                  <a
                    href="mailto:hello@flizk.com"
                    className="block text-[#1E4ED8] hover:text-[#1a42b8] transition-colors"
                  >
                    → Email support
                  </a>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#1E4ED8] to-[#14B8A6] rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Visit Our Office</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium">Flizk Technologies Pvt Ltd</p>
                      <p className="text-white/80 text-sm">Mumbai, Maharashtra, India</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium">Business Hours</p>
                      <p className="text-white/80 text-sm">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-white/80 text-sm">Saturday - Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200">
            <div className="aspect-video bg-gradient-to-br from-blue-100 to-teal-100 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-[#1E4ED8] mx-auto mb-4" />
                <p className="text-xl font-semibold text-gray-700">Mumbai, India</p>
                <p className="text-gray-600">Schedule a visit by contacting us first</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Common Questions</h2>
            <p className="text-xl text-gray-600">Quick answers to questions you may have</p>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-2xl p-8 border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                How quickly will I hear back?
              </h3>
              <p className="text-gray-600">
                We typically respond to all inquiries within 24 hours during business days. For
                urgent matters, please call us directly.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-2xl p-8 border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Can I schedule a product demo?
              </h3>
              <p className="text-gray-600">
                Absolutely! Use the{" "}
                <Link to={CTA_PATHS.demo} className="text-[#1E4ED8] hover:underline">
                  Book a Demo
                </Link>{" "}
                option and we&apos;ll walk you through Dentxone live.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-2xl p-8 border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Do you offer phone support?
              </h3>
              <p className="text-gray-600">
                Yes! Professional and Enterprise plan customers receive priority phone support.
                Starter plan customers can reach us via email.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
