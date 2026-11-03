import {
  Users,
  Calendar,
  ClipboardList,
  CreditCard,
  BarChart3,
  Building2,
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Patient Management",
    description: "Store patient records, treatment history, X-rays and notes.",
    tint: "bg-brand-leaf-tint",
    iconColor: "text-brand-leaf",
  },
  {
    icon: Calendar,
    title: "Appointment Scheduling",
    description: "Smart appointment booking and reminders.",
    tint: "bg-brand-teal-tint",
    iconColor: "text-brand-teal",
  },
  {
    icon: ClipboardList,
    title: "Treatment Planning",
    description: "Track procedures and treatment progress.",
    tint: "bg-gradient-to-br from-brand-leaf to-brand-teal",
    iconColor: "text-white",
  },
  {
    icon: CreditCard,
    title: "Billing & Payments",
    description: "Automated invoices and payment management.",
    tint: "bg-brand-leaf-tint",
    iconColor: "text-brand-leaf",
  },
  {
    icon: BarChart3,
    title: "Reports & Analytics",
    description: "Monitor clinic performance and revenue.",
    tint: "bg-brand-teal-tint",
    iconColor: "text-brand-teal",
  },
  {
    icon: Building2,
    title: "Multi-Clinic Management",
    description: "Manage multiple branches from one dashboard.",
    tint: "bg-gradient-to-br from-brand-leaf to-brand-teal",
    iconColor: "text-white",
  },
];

export function ProductFeatures() {
  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-ink mb-4">
            DentXOne – Complete Dental Practice
            <br />
            Management Platform
          </h2>
          <p className="text-xl text-brand-muted max-w-3xl mx-auto">
            DentXOne helps dentists manage patients, appointments, treatments, billing, and reports
            – all in one powerful platform designed for modern dental practices.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-[20px] p-8 shadow-[var(--shadow-soft)]"
              >
                <div
                  className={`w-14 h-14 ${feature.tint} rounded-2xl flex items-center justify-center mb-6`}
                >
                  <Icon className={`w-7 h-7 ${feature.iconColor}`} />
                </div>
                <h3 className="text-xl font-semibold text-brand-ink mb-3">{feature.title}</h3>
                <p className="text-brand-muted leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-brand-leaf-tint px-6 py-3 rounded-full">
            <span className="text-brand-ink">
              ✨ Designed specifically for dental clinics in India and beyond
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
