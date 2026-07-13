import { Clock, Smile, TrendingUp, Cloud, Shield, Zap } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Save Time",
    description: "Cut administrative busywork with automated workflows and smart scheduling.",
    color: "bg-blue-100",
    iconColor: "text-[#1E4ED8]",
  },
  {
    icon: Smile,
    title: "Improve Patient Experience",
    description: "Smooth appointments, timely reminders, and organized records lead to happier patients.",
    color: "bg-teal-100",
    iconColor: "text-[#14B8A6]",
  },
  {
    icon: TrendingUp,
    title: "Increase Revenue",
    description: "Optimize clinic workflows, reduce no-shows, and maximize appointment utilization.",
    color: "bg-green-100",
    iconColor: "text-[#22C55E]",
  },
  {
    icon: Cloud,
    title: "Cloud Based",
    description: "Access your clinic system from anywhere, anytime. No installation or maintenance needed.",
    color: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    icon: Shield,
    title: "Secure & Compliant",
    description: "Bank-level security and data encryption to protect sensitive patient information.",
    color: "bg-orange-100",
    iconColor: "text-orange-600",
  },
  {
    icon: Zap,
    title: "Fast & Reliable",
    description: "Cloud-based performance built for reliability — so your clinic keeps running.",
    color: "bg-pink-100",
    iconColor: "text-pink-600",
  },
];

export function BenefitsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Dental Clinics Choose DentXOne
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Modern tools for dental practices that want smoother operations and better patient care
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-gray-200 overflow-hidden"
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10">
                  <div
                    className={`w-16 h-16 ${benefit.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className={`w-8 h-8 ${benefit.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-[#1E4ED8] to-[#14B8A6] rounded-3xl p-12 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">6</div>
              <div className="text-blue-100">Core Modules</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">14 days</div>
              <div className="text-blue-100">Free Trial</div>
              <div className="text-blue-100/80 text-sm mt-1">(no card required)</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">WhatsApp</div>
              <div className="text-blue-100">Reminders</div>
              <div className="text-blue-100/80 text-sm mt-1">Built-in</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
