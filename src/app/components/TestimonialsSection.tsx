import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Dentxone has transformed the way we manage our clinic. Everything from appointments to billing is now seamless and efficient.",
    author: "Dr. Priya Sharma",
    role: "SmileCare Dental Clinic",
    location: "Mumbai, India",
    rating: 5,
  },
  {
    quote:
      "The best investment we made for our dental practice. Our staff loves how easy it is to use, and patients appreciate the smooth experience.",
    author: "Dr. Rajesh Kumar",
    role: "Advanced Dentistry Center",
    location: "Bangalore, India",
    rating: 5,
  },
  {
    quote:
      "Managing multiple clinic branches was always a challenge. Dentxone made it incredibly simple. Highly recommended!",
    author: "Dr. Anjali Patel",
    role: "Dental Care Network",
    location: "Delhi NCR, India",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#F8FAFC] to-blue-50/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Trusted by Dental Professionals
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See what dental clinic owners say about Dentxone
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6">
                <Quote className="w-12 h-12 text-blue-100" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 leading-relaxed mb-8 relative z-10">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#1E4ED8] to-[#14B8A6] rounded-full flex items-center justify-center text-white font-semibold">
                  {testimonial.author.charAt(4)}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-xs text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-md border border-gray-100">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#1E4ED8] mb-1">4.9/5</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-gray-200"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#14B8A6] mb-1">98%</div>
              <div className="text-sm text-gray-600">Customer Satisfaction</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-gray-200"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#22C55E] mb-1">500+</div>
              <div className="text-sm text-gray-600">Happy Clinics</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-gray-200"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-1">24/7</div>
              <div className="text-sm text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
