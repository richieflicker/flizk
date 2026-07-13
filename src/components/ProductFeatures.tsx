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
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Calendar,
    title: "Appointment Scheduling",
    description: "Smart appointment booking and reminders.",
    color: "from-teal-500 to-teal-600",
  },
  {
    icon: ClipboardList,
    title: "Treatment Planning",
    description: "Track procedures and treatment progress.",
    color: "from-green-500 to-green-600",
  },
  {
    icon: CreditCard,
    title: "Billing & Payments",
    description: "Automated invoices and payment management.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: BarChart3,
    title: "Reports & Analytics",
    description: "Monitor clinic performance and revenue.",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: Building2,
    title: "Multi-Clinic Management",
    description: "Manage multiple branches from one dashboard.",
    color: "from-pink-500 to-pink-600",
  },
];

export function ProductFeatures() {
  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            DentXOne – Complete Dental Practice
            <br />
            Management Platform
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            DentXOne helps dentists manage patients, appointments, treatments, billing, and reports
            – all in one powerful platform designed for modern dental practices.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-gray-200"
              >
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-teal-50 px-6 py-3 rounded-full">
            <span className="text-gray-700">
              ✨ Designed specifically for dental clinics in India and beyond
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
