import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin, MessageCircle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image src="/logo-white.svg" alt="Tech Leads BD Ltd Logo" width={150} height={50} className="h-10 w-auto" />
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Tech Leads BD Ltd. is a leading software development company providing innovative ERP, POS, CRM and custom software solutions for businesses across Bangladesh and worldwide.
            </p>
            <div className="flex gap-4 mb-6">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-emerald-600 hover:text-white transition-all">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-emerald-600 hover:text-white transition-all">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-emerald-600 hover:text-white transition-all">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-emerald-600 hover:text-white transition-all">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-emerald-600 hover:text-white transition-all">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-white">Tech Leads BD Ltd.</p>
                  <p>Near DC Office, Moffazel Tower, Station Road, Faridpur-7800</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                <span>+8801713636759, +8801732640831</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                <span>info@techleadsbd.com</span>
              </div>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/about/team" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Software */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Software</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/software/erp" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  ERP Software
                </Link>
              </li>
              <li>
                <Link href="/software/pos" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  POS Software
                </Link>
              </li>
              <li>
                <Link href="/software/accounting" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Accounting Software
                </Link>
              </li>
              <li>
                <Link href="/software/hr-payroll" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  HR & Payroll
                </Link>
              </li>
              <li>
                <Link href="/software/crm" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  CRM Software
                </Link>
              </li>
              <li>
                <Link href="/software" className="text-emerald-400 hover:text-emerald-300 transition-colors font-medium">
                  View All Software
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/support" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/documentation" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/training" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Training
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/support/tickets" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Submit Ticket
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Links */}
        <div className="border-t border-gray-800 mt-10 pt-8">
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" className="text-gray-400 hover:text-white transition-colors text-sm">
              Terms & Conditions
            </Link>
            <Link href="/refund-policy" className="text-gray-400 hover:text-white transition-colors text-sm">
              Refund Policy
            </Link>
            <Link href="/sitemap" className="text-gray-400 hover:text-white transition-colors text-sm">
              Sitemap
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Tech Leads BD Ltd. All rights reserved.
          </p>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/8801713636759"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </footer>
  )
}
