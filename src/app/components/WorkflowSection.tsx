import { Settings, UserPlus, TrendingUp, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { CTA_PATHS } from "../lib/cta";

const steps = [
  {
    number: "01",
    icon: Settings,
    title: "Set up your clinic",
    description:
      "Quick onboarding process to configure your clinic details, staff, and preferences in minutes.",
    color: "from-[#1E4ED8] to-blue-600",
  },
  {
    number: "02",
    icon: UserPlus,
    title: "Manage patients and appointments",
    description:
      "Add patients, schedule appointments, send automated reminders, and manage your daily schedule effortlessly.",
    color: "from-[#14B8A6] to-teal-600",
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Track treatments, billing and reports",
    description:
      "Monitor treatment progress, generate invoices, accept payments, and analyze clinic performance with comprehensive reports.",
    color: "from-[#22C55E] to-green-600",
  },
];

export function WorkflowSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How Dentxone Simplifies
            <br />
            Clinic Operations
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get started in three simple steps and transform your dental practice workflow
          </p>
        </div>

        {/* Workflow Steps */}
        <div className="space-y-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {/* Connecting Line (except for last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute left-1/2 top-32 w-0.5 h-24 bg-gradient-to-b from-gray-300 to-transparent transform -translate-x-1/2"></div>
                )}

                <div
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Step Number & Icon */}
                  <div className="flex-shrink-0 relative">
                    <div
                      className={`w-32 h-32 bg-gradient-to-br ${step.color} rounded-3xl flex items-center justify-center shadow-2xl`}
                    >
                      <Icon className="w-16 h-16 text-white" />
                    </div>
                    <div className="absolute -top-4 -right-4 w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg border-4 border-gray-50">
                      <span className="text-2xl font-bold text-gray-900">{step.number}</span>
                    </div>
                  </div>

                  {/* Arrow for Desktop */}
                  <div className="hidden lg:block">
                    <ArrowRight
                      className={`w-12 h-12 text-gray-300 ${
                        index % 2 === 1 ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  {/* Step Content */}
                  <div
                    className={`flex-1 bg-white rounded-2xl p-8 shadow-lg border border-gray-100 ${
                      index % 2 === 1 ? "lg:text-right" : ""
                    }`}
                  >
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">Ready to streamline your clinic operations?</p>
          <Link
            to={CTA_PATHS.trial}
            className="bg-[#1E4ED8] hover:bg-[#1a42b8] text-white px-8 py-4 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all inline-flex items-center space-x-2"
          >
            <span>Start Free Trial</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
