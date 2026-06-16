import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <Image src="/logo-white.svg" alt="Tech Leads BD Ltd Logo" width={150} height={50} className="h-12 w-auto" />
            </Link>
            <p className="text-gray-400 mb-6">
              Tech Leads BD Ltd. is a leading software development company providing innovative solutions for businesses worldwide. We transform your ideas into powerful digital solutions.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Products</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/products/erp-solutions" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  ERP Software
                </Link>
              </li>
              <li>
                <Link href="/products/pos-systems" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  POS Software
                </Link>
              </li>
              <li>
                <Link href="/products/accounting-software" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Accounting Software
                </Link>
              </li>
              <li>
                <Link href="/products/hr-payroll" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  HR Payroll Software
                </Link>
              </li>
              <li>
                <Link href="/products/hospital-management" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Hospital Management
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-emerald-400 hover:text-emerald-300 transition-colors font-medium">
                  View All Products →
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services/custom-software" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Custom Software Development
                </Link>
              </li>
              <li>
                <Link href="/services/web-development" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Website Development
                </Link>
              </li>
              <li>
                <Link href="/services/mobile-app" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link href="/services/cloud-hosting" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Cloud Hosting
                </Link>
              </li>
              <li>
                <Link href="/services/technical-support" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Technical Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-1" />
                <div className="text-gray-400">
                  <p className="font-medium text-white">Tech Leads BD Ltd.</p>
                  <p>Near DC Office, Moffazel Tower</p>
                  <p>Station Road, Faridpur-7800</p>
                </div>
              </li>
              <li className="flex gap-3">
                <Phone className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                <div className="text-gray-400">
                  <p>+8801713636759</p>
                  <p>+8801732640831</p>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                <span className="text-gray-400">info@techleadsbd.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Quick Links */}
        <div className="border-t border-gray-800 mt-10 pt-8">
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <Link href="/" className="text-gray-400 hover:text-white transition-colors text-sm">
              Home
            </Link>
            <Link href="/about/company-profile" className="text-gray-400 hover:text-white transition-colors text-sm">
              About Us
            </Link>
            <Link href="/products" className="text-gray-400 hover:text-white transition-colors text-sm">
              Products
            </Link>
            <Link href="/services" className="text-gray-400 hover:text-white transition-colors text-sm">
              Services
            </Link>
            <Link href="/blog" className="text-gray-400 hover:text-white transition-colors text-sm">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">
              Contact
            </Link>
            <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" className="text-gray-400 hover:text-white transition-colors text-sm">
              Terms & Conditions
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Tech Leads BD Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
