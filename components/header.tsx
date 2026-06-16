"use client"

import Link from "next/link"
import Image from "next/image"
import { ChevronDown } from "lucide-react"
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
      <button className="flex items-center gap-1 font-medium text-gray-800 hover:text-emerald-600 transition-colors">
        {label}
        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {/* invisible bridge fills the mt-2 gap so cursor doesn't leave the hover zone */}
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

const aboutItems: DropdownItem[] = [
  { href: "/about/company-profile", label: "Company Profile" },
  { href: "/about/mission-vision", label: "Mission & Vision" },
  { href: "/about/why-choose-us", label: "Why Choose Us" },
]

const productItems: DropdownItem[] = [
  { href: "/products/erp-solutions", label: "ERP Software" },
  { href: "/products/pos-systems", label: "POS Software" },
  { href: "/products/accounting-software", label: "Accounting Software" },
  { href: "/products/hr-payroll", label: "HR Payroll Software" },
  { href: "/products/crm-software", label: "CRM Software" },
  { href: "/products/inventory-management", label: "Inventory Software" },
  { href: "/products/hospital-management", label: "Hospital Management Software" },
  { href: "/products", label: "View All Products →", highlight: true },
]

const serviceItems: DropdownItem[] = [
  { href: "/services/custom-software", label: "Custom Software Development" },
  { href: "/services/erp-implementation", label: "ERP Implementation" },
  { href: "/services/pos-deployment", label: "POS Deployment" },
  { href: "/services/web-development", label: "Website Development" },
  { href: "/services/mobile-app", label: "Mobile App Development" },
  { href: "/services/cloud-hosting", label: "Cloud Hosting" },
  { href: "/services/technical-support", label: "Technical Support" },
]

export default function Header() {
  return (
    <>
      <div className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-4 text-center">
        <div className="container mx-auto flex justify-center items-center gap-2">
          <span>✨ Transform Your Business with AI-Powered Solutions - Limited Time Offer!</span>
          <Button size="sm" className="bg-white hover:bg-gray-100 text-purple-600 font-medium rounded-md">
            Get Started
          </Button>
        </div>
      </div>
      <header className="w-full bg-white py-4 px-4 border-b">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-1">
            <Image src="/logo.svg" alt="Tech Leads BD Ltd Logo" width={150} height={50} className="h-12 w-auto" />
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="font-medium text-gray-800 hover:text-emerald-600 transition-colors">
              Home
            </Link>
            <NavDropdown label="About Us" items={aboutItems} />
            <NavDropdown label="Products" items={productItems} width="w-56" />
            <NavDropdown label="Services" items={serviceItems} width="w-56" />
            <Link href="/blog" className="font-medium text-gray-800 hover:text-emerald-600 transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="font-medium text-gray-800 hover:text-emerald-600 transition-colors">
              Contact Us
            </Link>
          </nav>
          <button className="md:hidden">
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
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </div>
      </header>
    </>
  )
}
