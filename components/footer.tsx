'use client'

import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">TL</span>
              </div>
              <span className="font-bold text-white text-lg">Tech Leads BD</span>
            </div>
            <p className="text-gray-400 text-sm">
              Complete ERP & POS software solutions for businesses in Bangladesh
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-bold mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-blue-400">
                  ERP Software
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  POS System
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Hospital Management
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Pharmacy Software
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-blue-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p>Tech Leads BD Ltd.</p>
                  <p>Faridpur, Bangladesh</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <a href="tel:+8801234567890" className="hover:text-blue-400">
                  +880 123 456 7890
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <a href="mailto:hello@techleadsbd.com" className="hover:text-blue-400">
                  hello@techleadsbd.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="text-sm text-gray-500 mb-4 sm:mb-0">
            © 2024 Tech Leads BD Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Legal Links */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-center gap-6 text-sm text-gray-500">
          <a href="#" className="hover:text-gray-300">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-gray-300">
            Terms of Service
          </a>
          <a href="#" className="hover:text-gray-300">
            Cookies
          </a>
        </div>
      </div>
    </footer>
  )
}
