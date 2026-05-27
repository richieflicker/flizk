import { Target, Users, Lightbulb, Heart, Award, TrendingUp } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description:
      "We're on a mission to modernize healthcare technology and make it accessible to every clinic.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Users,
    title: "Customer-Centric",
    description:
      "Our customers are at the heart of everything we do. We build features based on real clinic needs.",
    color: "from-teal-500 to-teal-600",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We constantly innovate and improve our platform with the latest technology and best practices.",
    color: "from-green-500 to-green-600",
  },
  {
    icon: Heart,
    title: "Healthcare First",
    description:
      "We understand healthcare workflows and design our products specifically for medical professionals.",
    color: "from-purple-500 to-purple-600",
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
    title: "Dentxone Launch",
    description:
      "Launched Dentxone, our flagship dental clinic management software, serving our first 50 clinics.",
  },
  {
    year: "2025",
    title: "Rapid Growth",
    description:
      "Crossed 500+ active clinics and expanded our team to build more healthcare solutions.",
  },
  {
    year: "2026",
    title: "Platform Expansion",
    description:
      "Building the Flizk Healthcare Platform to power multiple healthcare verticals beyond dental.",
  },
];

const stats = [
  { number: "500+", label: "Active Clinics" },
  { number: "50K+", label: "Patients Managed" },
  { number: "1M+", label: "Appointments Booked" },
  { number: "98%", label: "Customer Satisfaction" },
];

export default function AboutPage() {
  return (
    <>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#1E4ED8] to-[#14B8A6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">About Flizk</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
          </div>

          <div className="prose prose-lg text-gray-600 space-y-6">
            <p>
              Flizk was founded with a simple observation: healthcare providers were spending too
              much time on administrative tasks and too little time on patient care. We saw clinics
              struggling with paper records, manual scheduling, and disconnected systems.
            </p>
            <p>
              We started by talking to hundreds of dental clinics across India to understand their
              challenges. What we learned was that they needed more than just software – they needed
              a partner who understood healthcare workflows and could build technology that actually
              made their lives easier.
            </p>
            <p>
              Today, Flizk is a healthcare technology company building a platform that powers modern
              clinics. Our flagship product, Dentxone, is helping over 500 dental clinics across
              India manage their operations more efficiently, save time, and provide better patient
              care.
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
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-[#1E4ED8] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
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
            <div className="bg-gradient-to-br from-[#1E4ED8] to-[#14B8A6] rounded-3xl p-12 text-white">
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
            <div className="bg-gradient-to-br from-[#22C55E] to-green-600 rounded-3xl p-12 text-white">
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
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100"
                >
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-6`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">Key milestones in the Flizk story</p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#1E4ED8] via-[#14B8A6] to-[#22C55E] transform -translate-x-1/2"></div>

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
                      className={`bg-white rounded-2xl p-8 shadow-lg border border-gray-100 ${
                        index % 2 === 1 ? "lg:text-left lg:pl-8 lg:pr-0" : ""
                      }`}
                    >
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Year Badge */}
                  <div className="relative z-10">
                    <div className="w-24 h-24 bg-gradient-to-br from-[#1E4ED8] to-[#14B8A6] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-xl">
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
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Built by a Passionate Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're a team of engineers, designers, and healthcare experts committed to building the
              best healthcare technology platform. We're always looking for talented people to join
              us.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#1E4ED8] to-[#14B8A6] rounded-3xl p-12 text-center text-white">
            <Award className="w-16 h-16 mx-auto mb-6 text-white" />
            <h3 className="text-3xl font-bold mb-4">Join Our Team</h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              We're growing fast and always looking for talented individuals who share our passion
              for transforming healthcare technology.
            </p>
            <button className="bg-white text-[#1E4ED8] hover:bg-gray-100 px-8 py-4 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all">
              View Open Positions
            </button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join hundreds of dental clinics using Dentxone to transform their practice.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-[#1E4ED8] hover:bg-[#1a42b8] text-white px-8 py-4 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all">
              Start Free Trial
            </button>
            <button className="border-2 border-gray-300 hover:border-[#1E4ED8] text-gray-700 hover:text-[#1E4ED8] px-8 py-4 rounded-xl font-medium transition-all">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
