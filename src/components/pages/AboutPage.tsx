import { Target, Users, Lightbulb, Heart, Award, TrendingUp } from "lucide-react";
import Link from "next/link";
import { CTA_PATHS } from "@/lib/cta";

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description:
      "We're on a mission to modernize healthcare technology and make it accessible to every clinic.",
    tint: "bg-brand-leaf-tint",
    iconColor: "text-brand-leaf",
  },
  {
    icon: Users,
    title: "Customer-Centric",
    description:
      "Our customers are at the heart of everything we do. We build features based on real clinic needs.",
    tint: "bg-brand-teal-tint",
    iconColor: "text-brand-teal",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We constantly innovate and improve our platform with the latest technology and best practices.",
    tint: "bg-gradient-to-br from-brand-leaf to-brand-teal",
    iconColor: "text-white",
  },
  {
    icon: Heart,
    title: "Healthcare First",
    description:
      "We understand healthcare workflows and design our products specifically for medical professionals.",
    tint: "bg-brand-leaf-tint",
    iconColor: "text-brand-leaf",
  },
];

const milestones = [
  {
    year: "2023",
    title: "Founded",
    description: "Flizk was founded with a vision to transform healthcare technology in India.",
  },
  {
    year: "2024",
    title: "DentXOne Launch",
    description:
      "Launched DentXOne, our flagship dental clinic management software for Indian practices.",
  },
  {
    year: "2025",
    title: "Product Focus",
    description:
      "Expanded DentXOne with WhatsApp reminders and workflows built for Chennai and Tamil Nadu clinics.",
  },
  {
    year: "2026",
    title: "Platform Expansion",
    description:
      "Building the Flizk Healthcare Platform to power multiple healthcare verticals beyond dental.",
  },
];

const stats = [
  { number: "6", label: "Core Modules" },
  { number: "14 days", label: "Free Trial" },
  { number: "WhatsApp", label: "Reminders Built-in" },
  { number: "TN", label: "Built for Tamil Nadu" },
];

export default function AboutPage() {
  return (
    <>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-brand-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-brand-ink mb-6">About Flizk</h1>
            <p className="text-xl md:text-2xl text-brand-muted max-w-3xl mx-auto leading-relaxed">
              We're building the future of healthcare technology. Starting with dental clinics,
              expanding to transform healthcare operations globally.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-brand-ink mb-6">Our Story</h2>
          </div>

          <div className="prose prose-lg text-brand-muted space-y-6">
            <p>
              Flizk was founded with a simple observation: healthcare providers were spending too
              much time on administrative tasks and too little time on patient care. We saw clinics
              struggling with paper records, manual scheduling, and disconnected systems.
            </p>
            <p>
              We talked with dental clinics across India to understand their challenges. What we
              learned was that they needed more than just software – they needed a partner who
              understood healthcare workflows and could build technology that actually made their
              lives easier.
            </p>
            <p>
              Today, Flizk is a healthcare technology company building a platform for modern clinics.
              Our flagship product, DentXOne, helps dental practices in Chennai, Tamil Nadu, and
              across India manage operations more efficiently and deliver better patient care.
            </p>
            <p>
              But we're just getting started. Our vision is to build a comprehensive healthcare
              platform that serves multiple specialties and makes quality healthcare technology
              accessible to every clinic, everywhere.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-brand-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-brand-leaf mb-2">
                  {stat.number}
                </div>
                <div className="text-brand-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-gradient-to-br from-brand-leaf to-brand-teal rounded-[20px] p-12 text-white shadow-[var(--shadow-soft)]">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-xl text-white/90 leading-relaxed">
                To empower healthcare providers with modern technology that simplifies operations,
                improves patient care, and helps practices grow – making quality healthcare
                technology accessible to every clinic.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-brand-teal to-brand-leaf rounded-[20px] p-12 text-white shadow-[var(--shadow-soft)]">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-xl text-white/90 leading-relaxed">
                To become the leading healthcare technology platform in India and beyond, powering
                thousands of clinics across multiple specialties with innovative, reliable, and
                easy-to-use solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-brand-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-ink mb-4">Our Values</h2>
            <p className="text-xl text-brand-muted max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-[20px] p-8 shadow-[var(--shadow-soft)]"
                >
                  <div
                    className={`w-14 h-14 ${value.tint} rounded-2xl flex items-center justify-center mb-6`}
                  >
                    <Icon className={`w-7 h-7 ${value.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-brand-ink mb-3">{value.title}</h3>
                  <p className="text-brand-muted leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-ink mb-4">Our Journey</h2>
            <p className="text-xl text-brand-muted">Key milestones in the Flizk story</p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-leaf to-brand-teal transform -translate-x-1/2"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 0 ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className="flex-1 lg:text-right lg:pr-8">
                    <div
                      className={`bg-white rounded-[20px] p-8 shadow-[var(--shadow-soft)] ${
                        index % 2 === 1 ? "lg:text-left lg:pl-8 lg:pr-0" : ""
                      }`}
                    >
                      <h3 className="text-2xl font-bold text-brand-ink mb-2">{milestone.title}</h3>
                      <p className="text-brand-muted leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Year Badge */}
                  <div className="relative z-10">
                    <div className="w-24 h-24 bg-gradient-to-br from-brand-leaf to-brand-teal rounded-full flex items-center justify-center text-white font-bold text-xl shadow-[var(--shadow-soft)]">
                      {milestone.year}
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="flex-1 hidden lg:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-brand-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-ink mb-4">Built by a Passionate Team</h2>
            <p className="text-xl text-brand-muted max-w-3xl mx-auto">
              We're a team of engineers, designers, and healthcare experts committed to building the
              best healthcare technology platform. We're always looking for talented people to join
              us.
            </p>
          </div>

          <div className="bg-gradient-to-br from-brand-leaf to-brand-teal rounded-[20px] p-12 text-center text-white shadow-[var(--shadow-soft)]">
            <Award className="w-16 h-16 mx-auto mb-6 text-white" />
            <h3 className="text-3xl font-bold mb-4">Join Our Team</h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              We're growing fast and always looking for talented individuals who share our passion
              for transforming healthcare technology.
            </p>
            <Link
              href={CTA_PATHS.contact}
              className="inline-block bg-white text-brand-leaf hover:bg-gray-100 px-8 py-4 rounded-2xl font-medium transition-all"
            >
              View Open Positions
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-ink mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-brand-muted mb-8">
            Start a free trial of DentXOne and see how it fits your dental practice.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={CTA_PATHS.trial}
              className="bg-brand-leaf hover:bg-brand-leaf/90 text-white px-8 py-4 rounded-2xl font-medium shadow-[var(--shadow-soft)] transition-all"
            >
              Start Free Trial
            </Link>
            <Link
              href={CTA_PATHS.contact}
              className="bg-white hover:bg-gray-50 text-brand-ink hover:text-brand-leaf px-8 py-4 rounded-2xl font-medium transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
