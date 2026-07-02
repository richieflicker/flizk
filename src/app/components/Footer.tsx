import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-[#1E4ED8] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">F</span>
              </div>
              <span className="text-2xl font-bold">Flizk</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Building powerful healthcare technology platforms that help clinics manage their
              operations efficiently. Dentxone is our flagship dental clinic management solution.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Products</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/products/dentxone" className="text-gray-400 hover:text-white transition-colors">
                  Dentxone
                </Link>
              </li>
              <li>
                <Link to="/products/dentxone" className="text-gray-400 hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-400 hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Flizk
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/products/dentxone" className="text-gray-400 hover:text-white transition-colors">
                  Product FAQs
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-400 hover:text-white transition-colors">
                  Pricing FAQ
                </Link>
              </li>
              <li>
                <a href="mailto:hello@flizk.com" className="text-gray-400 hover:text-white transition-colors">
                  Help & Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12 pb-12 border-b border-gray-800">
          <div className="flex items-start space-x-3">
            <Mail className="w-5 h-5 text-[#14B8A6] flex-shrink-0 mt-1" />
            <div>
              <h5 className="font-semibold mb-1">Email</h5>
              <a href="mailto:hello@flizk.com" className="text-gray-400 hover:text-white">
                hello@flizk.com
              </a>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Phone className="w-5 h-5 text-[#14B8A6] flex-shrink-0 mt-1" />
            <div>
              <h5 className="font-semibold mb-1">Phone</h5>
              <a href="tel:+911234567890" className="text-gray-400 hover:text-white">
                +91 123 456 7890
              </a>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <MapPin className="w-5 h-5 text-[#14B8A6] flex-shrink-0 mt-1" />
            <div>
              <h5 className="font-semibold mb-1">Address</h5>
              <p className="text-gray-400">Mumbai, India</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm">
          <p>© 2026 Flizk. All rights reserved.</p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
