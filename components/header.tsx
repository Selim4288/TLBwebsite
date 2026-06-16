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
      <button className="flex items-center gap-1 font-medium text-foreground hover:text-blue-600 transition-colors">
        {label}
        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      <div className="absolute left-0 top-full h-2 w-full" />
      <div
        className={`absolute left-0 top-full mt-2 ${width} bg-white shadow-lg rounded-md border border-border z-50 transition-all duration-150 ${
          open ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-1"
        }`}
      >
        <div className="py-2">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block px-4 py-2 text-sm hover:bg-secondary ${
                item.highlight ? "font-medium text-blue-600 border-t border-border mt-2 pt-2" : ""
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
    <header className="sticky top-0 w-full bg-white/95 backdrop-blur-md border-b border-border z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-1 flex-shrink-0">
            <Image src="/logo.svg" alt="Tech Leads BD Ltd Logo" width={150} height={50} className="h-10 w-auto" />
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="font-medium text-foreground hover:text-blue-600 transition-colors text-sm">
              Home
            </Link>
            <NavDropdown label="About Us" items={aboutItems} />
            <NavDropdown label="Software" items={productItems} width="w-56" />
            <NavDropdown label="Services" items={serviceItems} width="w-56" />
            <Link href="/blog" className="font-medium text-foreground hover:text-blue-600 transition-colors text-sm">
              Blog
            </Link>
            <Link href="/contact" className="font-medium text-foreground hover:text-blue-600 transition-colors text-sm">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button className="hidden sm:inline-flex bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium h-auto">
              Get Free Demo
            </Button>
            <button className="md:hidden p-2">
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
                className="text-foreground"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
