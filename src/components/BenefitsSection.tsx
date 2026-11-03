import { Clock, Smile, TrendingUp, Cloud, Shield, Zap } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Save Time",
    description: "Cut administrative busywork with automated workflows and smart scheduling.",
    color: "bg-brand-leaf-tint",
    iconColor: "text-brand-leaf",
  },
  {
    icon: Smile,
    title: "Improve Patient Experience",
    description: "Smooth appointments, timely reminders, and organized records lead to happier patients.",
    color: "bg-brand-teal-tint",
    iconColor: "text-brand-teal",
  },
  {
    icon: TrendingUp,
    title: "Increase Revenue",
    description: "Optimize clinic workflows, reduce no-shows, and maximize appointment utilization.",
    color: "bg-brand-leaf-tint",
    iconColor: "text-brand-leaf",
  },
  {
    icon: Cloud,
    title: "Cloud Based",
    description: "Access your clinic system from anywhere, anytime. No installation or maintenance needed.",
    color: "bg-brand-teal-tint",
    iconColor: "text-brand-teal",
  },
  {
    icon: Shield,
    title: "Secure & Compliant",
    description: "Bank-level security and data encryption to protect sensitive patient information.",
    color: "bg-brand-leaf-tint",
    iconColor: "text-brand-leaf",
  },
  {
    icon: Zap,
    title: "Fast & Reliable",
    description: "Cloud-based performance built for reliability — so your clinic keeps running.",
    color: "bg-brand-teal-tint",
    iconColor: "text-brand-teal",
  },
];

export function BenefitsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-ink mb-4">
            Why Dental Clinics Choose DentXOne
          </h2>
          <p className="text-xl text-brand-muted max-w-3xl mx-auto">
            Modern tools for dental practices that want smoother operations and better patient care
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-[20px] p-8 shadow-[var(--shadow-soft)]"
              >
                <div
                  className={`w-16 h-16 ${benefit.color} rounded-2xl flex items-center justify-center mb-6`}
                >
                  <Icon className={`w-8 h-8 ${benefit.iconColor}`} />
                </div>
                <h3 className="text-xl font-semibold text-brand-ink mb-3">{benefit.title}</h3>
                <p className="text-brand-muted leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-brand-leaf to-brand-teal rounded-[28px] p-12 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">6</div>
              <div className="text-white/80">Core Modules</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">14 days</div>
              <div className="text-white/80">Free Trial</div>
              <div className="text-white/60 text-sm mt-1">(no card required)</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">WhatsApp</div>
              <div className="text-white/80">Reminders</div>
              <div className="text-white/60 text-sm mt-1">Built-in</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">24/7</div>
              <div className="text-white/80">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
