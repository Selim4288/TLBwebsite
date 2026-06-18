"use client"

import Link from "next/link"
import Image from "next/image"
import { ChevronDown, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRef, useState } from "react"

interface DropdownItem {
  href: string
  label: string
  highlight?: boolean
}

interface NavDropdownProps {
  label: string
  items: DropdownItem[]
  width?: string
}

function NavDropdown({ label, items, width = "w-48" }: NavDropdownProps) {
  const [open, setOpen] = useState(false)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  function handleMouseEnter() {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setOpen(true)
  }

  function handleMouseLeave() {
    closeTimer.current = setTimeout(() => setOpen(false), 250)
  }

  return (
    <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button className="flex items-center gap-1 font-medium text-gray-800 hover:text-emerald-600 transition-colors text-sm">
        {label}
        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      <div className="absolute left-0 top-full h-2 w-full" />
      <div
        className={`absolute left-0 top-full mt-2 ${width} bg-white shadow-lg rounded-md border border-gray-100 z-50 transition-all duration-150 ${
          open ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-1"
        }`}
      >
        <div className="py-2">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block px-4 py-2 text-sm hover:bg-gray-50 ${
                item.highlight ? "font-medium text-emerald-600 border-t border-gray-100 mt-2 pt-2" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

const softwareItems: DropdownItem[] = [
  { href: "/software/erp", label: "ERP Software" },
  { href: "/software/pos", label: "POS Software" },
  { href: "/software/accounting", label: "Accounting Software" },
  { href: "/software/hr-payroll", label: "HR & Payroll" },
  { href: "/software/crm", label: "CRM Software" },
  { href: "/software/garments-erp", label: "Garments ERP" },
  { href: "/software/hospital", label: "Hospital Management" },
  { href: "/software/pharmacy", label: "Pharmacy Management" },
  { href: "/software", label: "View All", highlight: true },
]

const servicesItems: DropdownItem[] = [
  { href: "/services/custom-software", label: "Custom Software Development" },
  { href: "/services/erp-implementation", label: "ERP Implementation" },
  { href: "/services/pos-deployment", label: "POS Deployment" },
  { href: "/services/web-development", label: "Website Development" },
  { href: "/services/mobile-app", label: "Mobile App Development" },
  { href: "/services/cloud-hosting", label: "Cloud Hosting" },
  { href: "/services/technical-support", label: "Technical Support" },
]

const industriesItems: DropdownItem[] = [
  { href: "/industries/retail", label: "Retail" },
  { href: "/industries/wholesale", label: "Wholesale" },
  { href: "/industries/garments", label: "Garments" },
  { href: "/industries/pharmacy", label: "Pharmacy" },
  { href: "/industries/super-shop", label: "Super Shop" },
  { href: "/industries/manufacturing", label: "Manufacturing" },
  { href: "/industries/electronics", label: "Electronics" },
  { href: "/industries/services", label: "Services" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md shadow-sm transition-all duration-300">
      <div className="container mx-auto px-4 h-16 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Tech Leads BD Ltd Logo" width={150} height={50} className="h-10 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          <Link href="/" className="font-medium text-gray-800 hover:text-emerald-600 transition-colors text-sm">
            Home
          </Link>
          <Link href="/about" className="font-medium text-gray-800 hover:text-emerald-600 transition-colors text-sm">
            About
          </Link>
          <NavDropdown label="Software" items={softwareItems} width="w-56" />
          <NavDropdown label="Services" items={servicesItems} width="w-56" />
          <NavDropdown label="Industries" items={industriesItems} width="w-48" />
          <Link href="/blog" className="font-medium text-gray-800 hover:text-emerald-600 transition-colors text-sm">
            Blog
          </Link>
          <Link href="/pricing" className="font-medium text-gray-800 hover:text-emerald-600 transition-colors text-sm">
            Pricing
          </Link>
          <Link href="/contact" className="font-medium text-gray-800 hover:text-emerald-600 transition-colors text-sm">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/8801713636759"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-green-500 text-white hover:bg-green-600 transition-colors"
          >
            <MessageCircle className="h-5 w-5" />
          </a>
          <Button className="hidden md:inline-flex bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-medium rounded-lg px-5 py-2.5 transition-all duration-300 shadow-md hover:shadow-lg">
            Get Demo
          </Button>
          <button
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-800"
            >
              {mobileMenuOpen ? (
                <>
                  <line x1="18" x2="6" y1="6" y2="18" />
                  <line x1="6" x2="18" y1="6" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 py-4 px-4">
          <nav className="flex flex-col gap-3">
            <Link href="/" className="font-medium text-gray-800 hover:text-emerald-600 transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
            <Link href="/about" className="font-medium text-gray-800 hover:text-emerald-600 transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
              About
            </Link>
            <Link href="/software" className="font-medium text-gray-800 hover:text-emerald-600 transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
              Software
            </Link>
            <Link href="/services" className="font-medium text-gray-800 hover:text-emerald-600 transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
              Services
            </Link>
            <Link href="/industries" className="font-medium text-gray-800 hover:text-emerald-600 transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
              Industries
            </Link>
            <Link href="/blog" className="font-medium text-gray-800 hover:text-emerald-600 transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
              Blog
            </Link>
            <Link href="/pricing" className="font-medium text-gray-800 hover:text-emerald-600 transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
              Pricing
            </Link>
            <Link href="/contact" className="font-medium text-gray-800 hover:text-emerald-600 transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </Link>
            <div className="flex gap-3 pt-3 border-t border-gray-100">
              <Button className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-medium rounded-lg">
                Get Demo
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
