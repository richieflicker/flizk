import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="mb-4">
              <Logo brand="flizk" theme="dark" className="h-9 w-auto" />
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Building powerful healthcare technology platforms that help clinics manage their
              operations efficiently. DentXOne is our flagship dental clinic management solution
              for Chennai and Tamil Nadu.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Products</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/products/dentxone" className="text-gray-400 hover:text-white transition-colors">
                  DentXOne
                </Link>
              </li>
              <li>
                <Link href="/features/queue-based-appointments" className="text-gray-400 hover:text-white transition-colors">
                  Queue Appointments
                </Link>
              </li>
              <li>
                <Link href="/features/dental-charting" className="text-gray-400 hover:text-white transition-colors">
                  Dental Charting
                </Link>
              </li>
              <li>
                <Link href="/features/digital-prescriptions" className="text-gray-400 hover:text-white transition-colors">
                  Prescriptions
                </Link>
              </li>
              <li>
                <Link href="/features/multi-clinic-management" className="text-gray-400 hover:text-white transition-colors">
                  Multi-Clinic
                </Link>
              </li>
              <li>
                <Link href="/features/lab-work-tracking" className="text-gray-400 hover:text-white transition-colors">
                  Lab Work Tracking
                </Link>
              </li>
              <li>
                <Link href="/features/role-management" className="text-gray-400 hover:text-white transition-colors">
                  Role Management
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-400 hover:text-white transition-colors">
                  Plans
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Flizk
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/dental-clinic-software-chennai"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Dental Software Chennai
                </Link>
              </li>
              <li>
                <Link
                  href="/dental-clinic-software-madurai"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Dental Software Madurai
                </Link>
              </li>
              <li>
                <Link
                  href="/dental-clinic-software-coimbatore"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Dental Software Coimbatore
                </Link>
              </li>
              <li>
                <Link
                  href="/dental-clinic-software-virudhunagar"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Dental Software Virudhunagar
                </Link>
              </li>
              <li>
                <Link
                  href="/dental-clinic-software-kanyakumari"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Dental Software Kanyakumari
                </Link>
              </li>
              <li>
                <Link
                  href="/whatsapp-appointment-reminders"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  WhatsApp Reminders
                </Link>
              </li>
              <li>
                <Link href="/products/dentxone" className="text-gray-400 hover:text-white transition-colors">
                  Product FAQs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Help & Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm pt-8 border-t border-gray-800">
          <p>© 2026 Flizk. All rights reserved.</p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
