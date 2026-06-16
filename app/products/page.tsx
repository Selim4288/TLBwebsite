"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useMemo } from "react"
import {
  Search,
  ArrowRight,
  Cloud,
  Shield,
  TrendingUp,
  Users,
  Smartphone,
  Headphones,
  Package,
  ShoppingCart,
  Calculator,
  Briefcase,
  Building2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const categories = [
  { value: "all", label: "All Categories" },
  { value: "erp", label: "ERP" },
  { value: "pos", label: "POS" },
  { value: "accounting", label: "Accounting" },
  { value: "hr", label: "HR & Payroll" },
  { value: "crm", label: "CRM" },
  { value: "inventory", label: "Inventory" },
  { value: "hospitality", label: "Hospital & Healthcare" },
  { value: "pharmacy", label: "Pharmacy" },
  { value: "retail", label: "Retail" },
  { value: "wholesale", label: "Wholesale" },
  { value: "garments", label: "Garments & Textile" },
  { value: "electronics", label: "Electronics" },
  { value: "mobile", label: "Mobile Shop" },
  { value: "computer", label: "Computer Shop" },
  { value: "stationery", label: "Stationery" },
  { value: "jewelry", label: "Jewelry" },
  { value: "hardware", label: "Hardware" },
  { value: "services", label: "Services" },
]

const featuredProducts = [
  {
    id: "erp-solutions",
    title: "ERP Software",
    description: "Comprehensive enterprise resource planning systems for businesses of all sizes with finance, HR, inventory, and CRM modules.",
    icon: Building2,
    link: "/products/erp-solutions",
  },
  {
    id: "pos-systems",
    title: "POS Software",
    description: "Advanced point of sale systems for retail, restaurant, and service industries with inventory and analytics.",
    icon: ShoppingCart,
    link: "/products/pos-systems",
  },
  {
    id: "accounting-software",
    title: "Accounting Software",
    description: "Powerful accounting tools to manage finances, invoicing, tax calculations, and financial reporting.",
    icon: Calculator,
    link: "/products/accounting-software",
  },
  {
    id: "hr-payroll",
    title: "HR Payroll Software",
    description: "Complete HR and payroll management with attendance tracking, salary processing, and leave management.",
    icon: Briefcase,
    link: "/products/hr-payroll",
  },
  {
    id: "crm-software",
    title: "CRM Software",
    description: "Customer relationship management tools to improve engagement, sales pipeline, and marketing automation.",
    icon: Users,
    link: "/products/crm-software",
  },
  {
    id: "inventory-management",
    title: "Inventory Software",
    description: "Real-time inventory tracking with barcode scanning, reorder alerts, and stock forecasting.",
    icon: Package,
    link: "/products/inventory-management",
  },
]

const allProducts = [
  // ERP Solutions
  { id: "erp-solutions", name: "ERP Software", description: "Comprehensive ERP with finance, HR, inventory, and CRM modules for enterprise management.", category: "erp", link: "/products/erp-solutions" },
  { id: "garments-erp", name: "Garments ERP Software", description: "Specialized ERP for garment manufacturing with production planning and quality control.", category: "garments", link: "/products/garments-erp" },
  { id: "school-management", name: "School ERP Software", description: "Complete school management with student info, attendance, exams, and fee management.", category: "erp", link: "/products/school-management" },
  { id: "hospital-management", name: "Hospital ERP Software", description: "Integrated healthcare solution with patient records, appointments, and pharmacy management.", category: "hospitality", link: "/products/hospital-management" },
  { id: "real-estate-management", name: "Real Estate ERP Software", description: "Property listing management, client database, and financial reporting for real estate.", category: "erp", link: "/products/real-estate-management" },
  { id: "multi-business", name: "Multi-Business ERP Software", description: "Manage multiple business units with centralized database and consolidated reporting.", category: "erp", link: "/products/multi-business" },

  // POS Systems
  { id: "pos-systems", name: "POS Software", description: "Advanced point of sale with inventory management, sales tracking, and payment processing.", category: "pos", link: "/products/pos-systems" },
  { id: "restaurant-management", name: "Restaurant POS Software", description: "Complete restaurant solution with order management, table reservation, and kitchen display.", category: "pos", link: "/products/restaurant-management" },
  { id: "retail-shop", name: "Retail Shop POS Software", description: "Retail POS with customer loyalty, inventory control, and sales analytics.", category: "retail", link: "/products/retail-shop" },
  { id: "super-shop", name: "Super Shop POS Software", description: "Multi-department management for large retail stores with comprehensive analytics.", category: "retail", link: "/products/super-shop" },

  // Accounting
  { id: "accounting-software", name: "Accounting Software", description: "General ledger, AP/AR, financial reporting, and multi-currency support.", category: "accounting", link: "/products/accounting-software" },
  { id: "accounting-inventory", name: "Accounting & Inventory Software", description: "Integrated financial and inventory management in one platform.", category: "accounting", link: "/products/accounting-inventory" },
  { id: "invoice-billing", name: "Invoice & Billing Software", description: "Streamlined invoicing with payment tracking and tax calculations.", category: "accounting", link: "/products/invoice-billing" },

  // HR & Payroll
  { id: "hr-payroll", name: "HR & Payroll Software", description: "Employee management, attendance tracking, payroll processing, and tax calculations.", category: "hr", link: "/products/hr-payroll" },
  { id: "office-management", name: "Office Management Software", description: "Office operations with document management, task tracking, and HR functions.", category: "hr", link: "/products/office-management" },

  // CRM
  { id: "crm-software", name: "CRM Software", description: "Customer management, sales pipeline, marketing automation, and analytics.", category: "crm", link: "/products/crm-software" },
  { id: "company-management-crm", name: "Company Management CRM", description: "Comprehensive CRM for company operations and customer relationships.", category: "crm", link: "/products/company-management-crm" },

  // Inventory Management
  { id: "inventory-management", name: "Inventory Software", description: "Real-time stock tracking with barcode scanning and reorder alerts.", category: "inventory", link: "/products/inventory-management" },
  { id: "product-stock", name: "Product Stock Software", description: "Stock tracking, inventory valuation, and barcode integration.", category: "inventory", link: "/products/product-stock" },
  { id: "warehouse-management", name: "Warehouse Management Software", description: "Complete warehouse solution with bin management and picking optimization.", category: "inventory", link: "/products/warehouse-management" },

  // Pharmacy & Healthcare
  { id: "medicine-shop", name: "Medicine Shop Software", description: "Pharmacy management with medicine inventory, prescription tracking, and expiry alerts.", category: "pharmacy", link: "/products/medicine-shop" },
  { id: "diagnostic-center", name: "Diagnostic Center Software", description: "Lab management with test scheduling, reporting, and billing integration.", category: "hospitality", link: "/products/diagnostic-center" },
  { id: "clinic-management", name: "Clinic Management Software", description: "Patient appointments, medical records, and prescription management for clinics.", category: "hospitality", link: "/products/clinic-management" },

  // Retail & Wholesale
  { id: "wholesale-shop", name: "Wholesale Software", description: "Bulk order processing, price management, and customer accounts for wholesale.", category: "wholesale", link: "/products/wholesale-shop" },
  { id: "fashion-clothing", name: "Fashion & Clothing Software", description: "Size/color variants, season management, and fashion inventory tracking.", category: "retail", link: "/products/fashion-clothing" },
  { id: "footwear-shop", name: "Footwear Shop Software", description: "Size/style management with POS integration and customer loyalty.", category: "retail", link: "/products/footwear-shop" },

  // Specialized Retail
  { id: "mobile-shop", name: "Mobile Shop Software", description: "Device inventory, IMEI tracking, accessory management, and repair tracking.", category: "mobile", link: "/products/mobile-shop" },
  { id: "computer-shop", name: "Computer Shop Software", description: "Hardware inventory, software licensing, and service management.", category: "computer", link: "/products/computer-shop" },
  { id: "electronics-shop", name: "Electronics Shop Software", description: "Serial number tracking, warranty management, and customer database.", category: "electronics", link: "/products/electronics-shop" },
  { id: "stationery-shop", name: "Stationery Shop Software", description: "Product catalog, bulk orders, and customer accounts for stationery stores.", category: "stationery", link: "/products/stationery-shop" },

  // Specialty Shops
  { id: "jewelry-management", name: "Jewelry Shop Software", description: "Precious metal tracking, stone inventory, and custom order management.", category: "jewelry", link: "/products/jewelry-management" },
  { id: "hardware-shop", name: "Hardware Shop Software", description: "Product catalog, inventory management, and supplier management.", category: "hardware", link: "/products/hardware-shop" },
  { id: "optics-shop", name: "Optics Shop Software", description: "Prescription management, frame inventory, and appointment scheduling.", category: "retail", link: "/products/optics-shop" },
  { id: "chemical-shop", name: "Chemical Shop Software", description: "Chemical inventory, safety compliance, and batch tracking.", category: "retail", link: "/products/chemical-shop" },
  { id: "tiles-sanitary", name: "Tiles & Sanitary Software", description: "Product catalog, inventory, and supplier management for tiles business.", category: "retail", link: "/products/tiles-sanitary" },
  { id: "food-color-shop", name: "Food Color Shop Software", description: "Product catalog with batch tracking and expiry management.", category: "retail", link: "/products/food-color-shop" },

  // Services
  { id: "cable-network", name: "Cable Network Software", description: "Subscriber management, billing cycles, and payment tracking.", category: "services", link: "/products/cable-network" },
  { id: "web-hosting", name: "Web Hosting Software", description: "Domain management, hosting packages, and client billing portal.", category: "services", link: "/products/web-hosting" },
  { id: "sme-trading", name: "SME Trading Software", description: "Purchase, sales, inventory, and financial tracking for SMEs.", category: "wholesale", link: "/products/sme-trading" },
  { id: "project-management", name: "Project Management Software", description: "Task management, team collaboration, and resource allocation.", category: "erp", link: "/products/project-management" },
  { id: "ecommerce", name: "E-commerce Platform", description: "Online store with product management, payment gateway, and order processing.", category: "retail", link: "/products/ecommerce" },
]

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [searchQuery, selectedCategory])

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-white to-green-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Business Software Solutions</h1>
            <p className="text-xl text-gray-600 mb-8">
              Explore our complete collection of ERP, POS, CRM and business management software solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-md">
                  Request Demo
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="border-emerald-500 text-emerald-500 hover:bg-emerald-50 px-6 py-2 rounded-md">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product Search Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="relative flex-1 w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 py-2 w-full"
                />
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full md:w-64">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat.value} value={cat.value}>
                      {cat.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <div className="text-gray-600 text-sm whitespace-nowrap">
                <span className="font-semibold text-emerald-500">{filteredProducts.length}</span> products found
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our most popular business software solutions trusted by thousands of companies worldwide.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => {
              const IconComponent = product.icon
              return (
                <Link
                  key={product.id}
                  href={product.link}
                  className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all border border-gray-100 hover:border-emerald-200"
                >
                  <div className="h-48 bg-gradient-to-br from-emerald-50 to-green-100 flex items-center justify-center overflow-hidden">
                    <div className="relative w-full h-full flex items-center justify-center">
                      <IconComponent className="h-20 w-20 text-emerald-500 opacity-80 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-emerald-500 transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
                    <span className="text-emerald-500 font-medium flex items-center gap-1 text-sm">
                      View Details <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* All Products Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">All Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse our complete catalog of 35+ software solutions for every industry and business need.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Link
                key={product.id}
                href={product.link}
                className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all border border-gray-100 hover:border-emerald-200"
              >
                <div className="h-32 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center relative overflow-hidden">
                  <Image
                    src="/placeholder.svg"
                    alt={product.name}
                    width={80}
                    height={80}
                    className="w-16 h-16 object-contain opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-1 group-hover:text-emerald-500 transition-colors text-sm">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-xs line-clamp-2">{product.description}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-xs text-emerald-500 font-medium">
                      View Details <ArrowRight className="w-3 h-3 inline group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Our Software */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Software</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Built with modern technology and designed for businesses of all sizes.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Cloud, title: "Cloud Ready", description: "Access your business data anywhere, anytime with cloud-based deployment options." },
              { icon: Shield, title: "Secure", description: "Enterprise-grade security with encryption, role-based access, and regular backups." },
              { icon: TrendingUp, title: "Scalable", description: "Grow your business without worrying about software limitations or performance." },
              { icon: Users, title: "Multi User", description: "Collaborate efficiently with role-based permissions and multi-user support." },
              { icon: Smartphone, title: "Mobile Friendly", description: "Responsive design that works seamlessly on desktop, tablet, and mobile devices." },
              { icon: Headphones, title: "Dedicated Support", description: "24/7 technical support with expert assistance for implementation and training." },
            ].map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div key={index} className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-emerald-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Help Choosing The Right Software?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our experts are ready to help you find the perfect solution for your business needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button className="bg-white text-emerald-500 hover:bg-gray-100 px-6 py-2 rounded-md">
                Contact Us
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-emerald-600 px-6 py-2 rounded-md">
                Request Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
