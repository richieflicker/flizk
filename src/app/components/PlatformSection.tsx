import { Layers, Database, Lock, Smartphone, Globe, Cpu } from "lucide-react";
import { Link } from "react-router";

export function PlatformSection() {
  const platformFeatures = [
    { icon: Layers, label: "Modular Architecture" },
    { icon: Database, label: "Scalable Database" },
    { icon: Lock, label: "Enterprise Security" },
    { icon: Smartphone, label: "Multi-Platform" },
    { icon: Globe, label: "Global Infrastructure" },
    { icon: Cpu, label: "AI-Powered" },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-[#1E4ED8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="text-white/90 text-sm">Powered by Flizk Platform</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Built on the Flizk
              <br />
              Healthcare Platform
            </h2>

            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Flizk builds scalable healthcare technology solutions that power modern clinics.
              Dentxone is our flagship product, built on a robust, enterprise-grade platform
              designed for healthcare providers.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-[#22C55E] flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Healthcare-First Design</h4>
                  <p className="text-white/70">
                    Built specifically for healthcare workflows and compliance requirements
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-[#22C55E] flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Future-Ready Architecture</h4>
                  <p className="text-white/70">
                    Continuously evolving platform with regular updates and new features
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-[#22C55E] flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Ecosystem Integration</h4>
                  <p className="text-white/70">
                    Seamlessly integrates with other healthcare tools and services
                  </p>
                </div>
              </div>
            </div>

            <Link
              to="/about"
              className="inline-block bg-white hover:bg-gray-100 text-[#1E4ED8] px-8 py-4 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all"
            >
              Learn About Flizk Platform
            </Link>
          </div>

          {/* Right - Platform Diagram */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              {/* Central Hub */}
              <div className="relative">
                <div className="bg-gradient-to-br from-white to-blue-100 rounded-2xl p-8 shadow-2xl mb-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#1E4ED8] to-[#14B8A6] rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-2xl">F</span>
                    </div>
                    <h3 className="font-bold text-gray-900 text-xl mb-2">Flizk Platform</h3>
                    <p className="text-gray-600 text-sm">Healthcare Technology Core</p>
                  </div>
                </div>

                {/* Feature Grid */}
                <div className="grid grid-cols-3 gap-4">
                  {platformFeatures.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <div
                        key={index}
                        className="bg-white/90 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white transition-colors"
                      >
                        <Icon className="w-8 h-8 text-[#1E4ED8] mx-auto mb-2" />
                        <p className="text-xs text-gray-700 font-medium">{feature.label}</p>
                      </div>
                    );
                  })}
                </div>

                {/* Connecting Lines Decoration */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-white/20 rounded-full pointer-events-none"></div>
              </div>
            </div>

            {/* Decorative Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#14B8A6] rounded-2xl opacity-20 blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#22C55E] rounded-2xl opacity-20 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
