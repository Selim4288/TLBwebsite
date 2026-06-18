"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check, Users, Building2, ShoppingCart, Calculator, Briefcase, Package, HeartPulse, Pill, Store, Code, Box as BoxIcon, UsersRound, DollarSign, ShoppingCart as ShoppingCartIcon, ChartLine as LineChart, Factory, Shield, Cloud, Settings, Headphones, Zap, Layers, LockKeyhole, UserCog, ChartPie as PieChartIcon, QrCode, Smartphone, Database, Plug, ChevronLeft, ChevronRight, Star, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

// Trust Counter Component with Animation
function TrustCounter({ end, label, suffix = "+" }: { end: number; label: string; suffix?: string }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const steps = 60
    const increment = end / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isVisible, end])

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-white mb-2">
        {count}{suffix}
      </div>
      <div className="text-blue-100 text-sm md:text-base">{label}</div>
    </div>
  )
}

// Testimonial data
const testimonials = [
  {
    name: "Rahman Ahmed",
    business: "Super Shop Owner",
    review: "Tech Leads BD ERP system transformed our entire business operations. Inventory management became so easy and we can now track everything in real-time. Highly recommended!",
    rating: 5,
    location: "Dhaka"
  },
  {
    name: "Fatima Begum",
    business: "Garments Factory",
    review: "Their Garments ERP is specifically designed for our industry. Production planning, material tracking, and quality control - everything in one system. Amazing support team!",
    rating: 5,
    location: "Chittagong"
  },
  {
    name: "Mohammad Ali",
    business: "Pharmacy Chain",
    review: "We've been using their Pharmacy Software for 3 years. The expiry tracking feature alone saved us thousands. Best software investment we've made.",
    rating: 5,
    location: "Sylhet"
  },
  {
    name: "Karim Hossain",
    business: "Electronics Distributor",
    review: "The POS system helped us increase efficiency by 40%. Customer support is excellent and they customized the software exactly to our needs.",
    rating: 5,
    location: "Dhaka"
  },
]

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const softwareCategories = [
    { title: "ERP Software", description: "Complete enterprise resource planning for your entire business", icon: Building2, link: "/products/erp-solutions" },
    { title: "POS Software", description: "Modern point of sale system for retail businesses", icon: ShoppingCart, link: "/products/pos-systems" },
    { title: "Accounting Software", description: "Professional accounting and financial management", icon: Calculator, link: "/products/accounting-software" },
    { title: "HR & Payroll", description: "Human resources and payroll management system", icon: Briefcase, link: "/products/hr-payroll" },
    { title: "CRM Software", description: "Customer relationship management for sales teams", icon: Users, link: "/products/crm-software" },
    { title: "Garments ERP", description: "Specialized ERP for garments and textile industry", icon: Factory, link: "/products/garments-erp" },
    { title: "Hospital Management", description: "Comprehensive hospital and clinic management", icon: HeartPulse, link: "/products/hospital-management" },
    { title: "Pharmacy Software", description: "Complete pharmacy management with expiry tracking", icon: Pill, link: "/products/medicine-shop" },
    { title: "Super Shop Management", description: "All-in-one solution for super shops", icon: Store, link: "/products/super-shop" },
    { title: "Custom ERP Solutions", description: "Tailored software for your unique business needs", icon: Code, link: "/contact" },
  ]

  const erpModules = [
    { title: "Inventory Management", description: "Real-time stock tracking and control", icon: Package },
    { title: "HR & Payroll", description: "Employee management and salary processing", icon: UsersRound },
    { title: "Accounting System", description: "Complete financial accounting", icon: DollarSign },
    { title: "Sales & Purchase", description: "Order processing and procurement", icon: ShoppingCartIcon },
    { title: "Production Management", description: "Manufacturing and production planning", icon: BoxIcon },
    { title: "CRM System", description: "Customer relationship and sales pipeline", icon: Users },
    { title: "POS System", description: "Point of sale for retail operations", icon: Calculator },
    { title: "Reports & Analytics", description: "Business intelligence dashboards", icon: LineChart },
  ]

  const industries = [
    { name: "Retail Business", icon: Store },
    { name: "Wholesale Business", icon: Package },
    { name: "Garments Industry", icon: Factory },
    { name: "Pharmacy Shops", icon: Pill },
    { name: "Super Shop / Dept Store", icon: ShoppingCart },
    { name: "Manufacturing", icon: BoxIcon },
    { name: "Electronics Shop", icon: Smartphone },
    { name: "Service Businesses", icon: Headphones },
  ]

  const whyChooseUs = [
    { title: "Secure & Reliable", description: "Enterprise-grade security with 99.9% uptime guarantee", icon: Shield },
    { title: "Cloud Based ERP", description: "Access your business data from anywhere, anytime", icon: Cloud },
    { title: "Fully Customizable", description: "Tailored solutions that fit your unique requirements", icon: Settings },
    { title: "24/7 Support", description: "Dedicated technical support team available round the clock", icon: Headphones },
    { title: "Fast Performance", description: "Optimized for speed with quick load times", icon: Zap },
    { title: "Scalable Architecture", description: "Grows with your business needs seamlessly", icon: Layers },
  ]

  const keyFeatures = [
    { title: "Multi User System", description: "Multiple users with role-based permissions", icon: Users },
    { title: "Real-time Reports", description: "Live dashboards and analytics", icon: PieChartIcon },
    { title: "Barcode System", description: "Integrated barcode scanning and printing", icon: QrCode },
    { title: "Mobile Friendly", description: "Responsive design for all devices", icon: Smartphone },
    { title: "Auto Backup", description: "Automatic data backup and recovery", icon: Database },
    { title: "Advanced Security", description: "Encryption and access control", icon: LockKeyhole },
    { title: "Role Based Access", description: "Granular permission management", icon: UserCog },
    { title: "API Integration", description: "Connect with third-party services", icon: Plug },
  ]

  const blogPosts = [
    {
      title: "How ERP Systems Transform Business Operations",
      excerpt: "Discover how implementing an ERP system can streamline your operations and boost productivity.",
      date: "June 15, 2026",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Top 10 Features of Modern POS Systems",
      excerpt: "Essential features every business should look for when choosing a point of sale solution.",
      date: "June 10, 2026",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Digital Transformation in Manufacturing",
      excerpt: "How Bangladesh's manufacturing sector is embracing digital tools for growth.",
      date: "June 5, 2026",
      image: "/placeholder.svg?height=200&width=400",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm text-blue-100">Trusted by 500+ Businesses in Bangladesh</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Complete ERP, POS & CRM Software Solutions for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-300">
                  Growing Businesses
                </span>
              </h1>

              <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
                Manage your business smartly with our all-in-one ERP system including inventory, accounting, HR, sales, and CRM.
                Streamlined operations, better insights, faster growth.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <Link href="/contact">
                  <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 text-lg px-8 py-6 rounded-xl shadow-xl shadow-blue-900/30 transition-all hover:scale-105">
                    Get Free Demo
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/products">
                  <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6 rounded-xl backdrop-blur-sm transition-all hover:scale-105">
                    View Software
                  </Button>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <TrustCounter end={500} label="Happy Clients" />
                <TrustCounter end={10} label="Industries" suffix="+" />
                <TrustCounter end={1200} label="Projects Done" />
                <TrustCounter end={24} label="Support" suffix="/7" />
              </div>
            </div>

            {/* Right Content - Dashboard Mockup */}
            <div className="relative hidden lg:block">
              <div className="relative">
                {/* Main Dashboard Card */}
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                  <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-4 mb-4">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-blue-500/20 rounded-lg p-3 text-center">
                        <div className="text-2xl font-bold text-blue-400">৳12.5M</div>
                        <div className="text-xs text-slate-400">Revenue</div>
                      </div>
                      <div className="bg-green-500/20 rounded-lg p-3 text-center">
                        <div className="text-2xl font-bold text-green-400">847</div>
                        <div className="text-xs text-slate-400">Orders</div>
                      </div>
                      <div className="bg-purple-500/20 rounded-lg p-3 text-center">
                        <div className="text-2xl font-bold text-purple-400">156</div>
                        <div className="text-xs text-slate-400">Products</div>
                      </div>
                    </div>
                  </div>
                  <div className="h-32 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-xl flex items-center justify-center">
                    <LineChart className="w-16 h-16 text-blue-300/50" />
                  </div>
                </div>

                {/* Floating Cards */}
                <div className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-xl transform -rotate-6 hover:rotate-0 transition-transform">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <Check className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-800">Payment Received</div>
                      <div className="text-xs text-slate-500">৳ 25,500.00</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-xl transform rotate-6 hover:rotate-0 transition-transform">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Package className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-800">Stock Updated</div>
                      <div className="text-xs text-slate-500">+150 items added</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/50 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Company Intro Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block bg-emerald-100 text-emerald-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
                About Our Company
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Who We Are
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                <strong className="text-slate-800">TECH LEADS BD LTD</strong> is a leading ERP, POS, CRM and custom software company providing smart business automation solutions. We help businesses digitalize their operations with cutting-edge technology and dedicated support.
              </p>
              <p className="text-slate-600 mb-8">
                With over a decade of experience, we've successfully delivered 1200+ projects across 10+ industries, helping businesses streamline operations and achieve remarkable growth.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Building2, label: "ERP Solutions" },
                  { icon: ShoppingCart, label: "POS Systems" },
                  { icon: Calculator, label: "Accounting Software" },
                  { icon: Code, label: "Custom Development" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="font-medium text-slate-700">{item.label}</span>
                  </div>
                ))}
              </div>

              <Link href="/about/company-profile">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg">
                  Learn More About Us
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white transform hover:scale-105 transition-transform">
                    <Users className="w-10 h-10 mb-3" />
                    <div className="text-3xl font-bold">500+</div>
                    <div className="text-blue-100">Active Clients</div>
                  </div>
                  <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl p-6 text-white transform hover:scale-105 transition-transform">
                    <Headphones className="w-10 h-10 mb-3" />
                    <div className="text-3xl font-bold">24/7</div>
                    <div className="text-emerald-100">Support Available</div>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white transform hover:scale-105 transition-transform">
                    <Package className="w-10 h-10 mb-3" />
                    <div className="text-3xl font-bold">30+</div>
                    <div className="text-purple-100">Software Products</div>
                  </div>
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 text-white transform hover:scale-105 transition-transform">
                    <Clock className="w-10 h-10 mb-3" />
                    <div className="text-3xl font-bold">10+</div>
                    <div className="text-orange-100">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Software Categories Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              Our Software Solutions
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Software Categories
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive business software solutions designed for every industry and business need
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {softwareCategories.map((category, index) => (
              <Link
                key={index}
                href={category.link}
                className="group bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <category.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {category.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {category.description}
                </p>
                <div className="mt-4 flex items-center text-blue-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More <ArrowRight className="ml-1 w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/products">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-xl">
                View All Software
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ERP Modules Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-emerald-100 text-emerald-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              Complete Solution
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Powerful ERP Modules
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Everything you need to run your business efficiently in one integrated platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {erpModules.map((module, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-6 hover:from-blue-50 hover:to-blue-100 transition-all duration-300 border border-slate-100 hover:border-blue-200"
              >
                <div className="absolute top-4 right-4 w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="w-4 h-4 text-blue-600" />
                </div>
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <module.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{module.title}</h3>
                <p className="text-sm text-slate-500">{module.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-white/10 text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6 border border-white/20">
              Our Expertise
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Tailored solutions for diverse industry requirements with deep domain expertise
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
              >
                <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500 transition-colors">
                  <industry.icon className="w-7 h-7 text-blue-300 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-medium text-white">{industry.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-purple-100 text-purple-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              Why Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Choose TECH LEADS BD
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Partner with us for reliable, scalable, and innovative business solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 border border-slate-200 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-100/50 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block bg-cyan-100 text-cyan-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
                Key Features
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Everything You Need in One Platform
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Our software is packed with features designed to streamline your business operations and boost productivity.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {keyFeatures.slice(0, 4).map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-cyan-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">{feature.title}</h3>
                      <p className="text-sm text-slate-500">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link href="/our-services">
                <Button className="mt-8 bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg">
                  Explore All Features
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {keyFeatures.slice(4, 8).map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-6 border border-slate-200 hover:border-cyan-300 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-1">{feature.title}</h3>
                  <p className="text-sm text-slate-500">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-orange-100 text-orange-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              Client Reviews
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Hear from businesses that transformed their operations with our solutions
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 md:p-12 text-center">
                      <div className="flex justify-center mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                      <blockquote className="text-xl md:text-2xl text-slate-700 mb-8 leading-relaxed">
                        &ldquo;{testimonial.review}&rdquo;
                      </blockquote>
                      <div className="flex items-center justify-center gap-4">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-xl font-bold">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div className="text-left">
                          <div className="font-semibold text-slate-900">{testimonial.name}</div>
                          <div className="text-slate-500">{testimonial.business}</div>
                          <div className="text-sm text-slate-400">{testimonial.location}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={() => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-slate-50 transition-colors hidden md:flex"
            >
              <ChevronLeft className="w-6 h-6 text-slate-600" />
            </button>
            <button
              onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-slate-50 transition-colors hidden md:flex"
            >
              <ChevronRight className="w-6 h-6 text-slate-600" />
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeTestimonial ? "bg-blue-600" : "bg-slate-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Statistics Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <TrustCounter end={500} label="Happy Clients" />
            <TrustCounter end={1200} label="Completed Projects" />
            <TrustCounter end={10} label="Years Experience" suffix="+" />
            <TrustCounter end={24} label="Support Available" suffix="/7" />
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <div className="inline-block bg-blue-100 text-blue-700 text-sm font-medium px-4 py-1.5 rounded-full mb-4">
                Latest Insights
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                From Our Blog
              </h2>
            </div>
            <Link href="/blog">
              <Button variant="outline" className="mt-4 md:mt-0 border-slate-300 hover:border-blue-300 hover:text-blue-600">
                View All Blogs
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Link
                key={index}
                href="/blog"
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={200}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="text-sm text-slate-500 mb-3">{post.date}</div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center text-blue-600 text-sm font-medium">
                    Read More <ArrowRight className="ml-1 w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Ready to Digitalize Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join 500+ businesses already using TECH LEADS BD software to streamline operations and boost growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 text-lg px-10 py-7 rounded-xl shadow-xl transition-all hover:scale-105">
                Get Free Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 text-lg px-10 py-7 rounded-xl backdrop-blur-sm transition-all hover:scale-105">
                Contact Us
              </Button>
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-8 text-blue-100">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-400" />
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-400" />
              <span>No Hidden Charges</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-400" />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/8801713636759"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors z-50 hover:scale-110 transform"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  )
}
