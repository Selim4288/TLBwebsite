import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <Image src="/logo-white.svg" alt="Tech Leads BD Ltd Logo" width={150} height={50} className="h-10 w-auto" />
            </Link>
            <p className="text-slate-400 mb-6 leading-relaxed text-sm">
              Tech Leads BD Ltd. is Bangladesh&apos;s premier enterprise software company. We deliver comprehensive ERP, POS, and business solutions trusted by 500+ businesses.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-base font-semibold mb-6 text-white">Products</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/products/erp-solutions" className="text-slate-400 hover:text-blue-400 transition-colors">
                  ERP Software
                </Link>
              </li>
              <li>
                <Link href="/products/pos-systems" className="text-slate-400 hover:text-blue-400 transition-colors">
                  POS Software
                </Link>
              </li>
              <li>
                <Link href="/products/accounting-software" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Accounting Software
                </Link>
              </li>
              <li>
                <Link href="/products/hr-payroll" className="text-slate-400 hover:text-blue-400 transition-colors">
                  HR & Payroll
                </Link>
              </li>
              <li>
                <Link href="/products/hospital-management" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Hospital Management
                </Link>
              </li>
            </ul>
          </div>

          {/* Services & Legal */}
          <div>
            <h3 className="text-base font-semibold mb-6 text-white">Services</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/services/custom-software" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Custom Software
                </Link>
              </li>
              <li>
                <Link href="/services/web-development" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/mobile-app" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link href="/services/cloud-hosting" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Cloud Hosting
                </Link>
              </li>
              <li>
                <Link href="/services/technical-support" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Support Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base font-semibold mb-6 text-white">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div className="text-slate-400">
                  <p className="font-medium text-white">Faridpur, Bangladesh</p>
                  <p>Station Road, Faridpur-7800</p>
                </div>
              </li>
              <li className="flex gap-3">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <div className="text-slate-400">
                  <p>+880 171 363 6759</p>
                  <p>+880 173 264 0831</p>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span className="text-slate-400">info@techleadsbd.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm">
              <Link href="/privacy-policy" className="text-slate-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-conditions" className="text-slate-400 hover:text-white transition-colors">
                Terms & Conditions
              </Link>
            </div>
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} Tech Leads BD Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
