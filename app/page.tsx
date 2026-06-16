'use client'

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Cloud, Share2, BarChart3, Shield, Smartphone, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  const softwareCategories = [
    { title: "ERP Software", icon: "📊" },
    { title: "POS Software", icon: "🛍️" },
    { title: "Accounting Software", icon: "💰" },
    { title: "HR & Payroll", icon: "👥" },
    { title: "Hospital Management", icon: "🏥" },
    { title: "Pharmacy Management", icon: "💊" },
    { title: "Garments ERP", icon: "👕" },
    { title: "Custom Software", icon: "⚙️" },
  ]

  const features = [
    {
      title: "Cloud Based",
      description: "Access from anywhere, anytime with secure cloud infrastructure",
      icon: <Cloud className="w-8 h-8" />,
    },
    {
      title: "Multi Branch",
      description: "Manage multiple locations with centralized control",
      icon: <Share2 className="w-8 h-8" />,
    },
    {
      title: "Real Time Reporting",
      description: "Get instant insights with live business dashboards",
      icon: <BarChart3 className="w-8 h-8" />,
    },
    {
      title: "Data Security",
      description: "Enterprise-grade encryption and data protection",
      icon: <Shield className="w-8 h-8" />,
    },
    {
      title: "Mobile Friendly",
      description: "Full functionality on mobile and tablet devices",
      icon: <Smartphone className="w-8 h-8" />,
    },
    {
      title: "Local Support",
      description: "24/7 dedicated support in your local language",
      icon: <Zap className="w-8 h-8" />,
    },
  ]

  const modules = [
    { title: "Accounting", icon: "📈" },
    { title: "Inventory", icon: "📦" },
    { title: "Sales", icon: "🎯" },
    { title: "Purchase", icon: "🛒" },
    { title: "CRM", icon: "👤" },
    { title: "HRM", icon: "👨‍💼" },
    { title: "Payroll", icon: "💳" },
    { title: "Production", icon: "🏭" },
    { title: "Asset Management", icon: "🔧" },
  ]

  const industries = [
    "Retail",
    "Wholesale",
    "Garments",
    "Hospital",
    "Pharmacy",
    "Restaurant",
    "Corporate",
    "SME",
  ]

  const testimonials = [
    {
      name: "Md. Hasan Mia",
      company: "ABC Trading Ltd.",
      text: "Tech Leads BD transformed our entire business operations. The ERP system is intuitive, reliable, and has increased our efficiency by 60%.",
    },
    {
      name: "Fatima Akhter",
      company: "Star Garments",
      text: "The garments ERP solution exceeded our expectations. The support team is incredibly responsive and professional.",
    },
    {
      name: "Dr. Shafiq Ahmed",
      company: "Prime Hospital",
      text: "Outstanding hospital management system. Patient records management has never been easier. Highly recommended!",
    },
  ]

  const plans = [
    {
      name: "Starter",
      price: "২৫,০০০",
      period: "/month",
      description: "Perfect for small businesses",
      features: ["Up to 3 Users", "Single Location", "Basic Reporting", "Email Support"],
    },
    {
      name: "Professional",
      price: "৫০,০০০",
      period: "/month",
      description: "For growing companies",
      features: [
        "Up to 15 Users",
        "Multi-branch Support",
        "Advanced Reporting",
        "Priority Support",
        "Custom Integrations",
      ],
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "Get Quote",
      description: "Enterprise grade solutions",
      features: [
        "Unlimited Users",
        "Unlimited Locations",
        "Full Customization",
        "24/7 Dedicated Support",
        "API Access",
      ],
    },
  ]

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-white pt-24 pb-20 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-60 top-0 w-96 h-96 bg-gradient-to-bl from-blue-100 to-transparent rounded-full opacity-40"></div>
          <div className="absolute -left-60 -bottom-60 w-96 h-96 bg-gradient-to-tr from-blue-100 to-transparent rounded-full opacity-40"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight text-balance mb-6">
                  Complete ERP & POS Software Solutions for Modern Businesses
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Streamline accounting, inventory, HRM, payroll, sales, CRM and operations with one powerful platform.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-base font-semibold h-auto">
                  Get Free Demo
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg text-base font-semibold h-auto"
                >
                  Explore Software
                </Button>
              </div>
              <div className="flex items-center gap-12 pt-6">
                <div className="border-r border-border pr-12">
                  <div className="text-4xl font-bold text-foreground">500+</div>
                  <p className="text-sm text-muted-foreground">Businesses Using Our Platform</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-foreground">10+</div>
                  <p className="text-sm text-muted-foreground">Years of Excellence</p>
                </div>
              </div>
            </div>
            <div className="relative hidden md:block">
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-1 border border-blue-200 shadow-2xl">
                <div className="rounded-xl bg-white p-8 overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=450&width=550"
                    alt="Professional Dashboard"
                    width={550}
                    height={450}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm font-semibold text-muted-foreground mb-10 uppercase tracking-widest">
            Trusted by businesses across Bangladesh
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="flex justify-center">
                <Image
                  src={`/placeholder.svg?height=50&width=140`}
                  alt={`Client logo ${i}`}
                  width={140}
                  height={50}
                  className="h-10 w-auto opacity-50 grayscale hover:opacity-75 hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Software Categories */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Software Categories</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive business solutions tailored for your industry
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {softwareCategories.map((category, i) => (
              <div
                key={i}
                className="group p-8 rounded-xl border border-blue-100 hover:border-blue-400 hover:shadow-xl transition-all duration-300 bg-white hover:bg-blue-50/50 cursor-pointer"
              >
                <div className="text-5xl mb-4 group-hover:scale-125 transition-transform">{category.icon}</div>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-blue-600 transition-colors">
                  {category.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Why Choose Tech Leads BD</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Premium features designed for enterprise success
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div key={i} className="p-8 bg-white rounded-xl border border-border hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ERP Modules */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Complete ERP Modules</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              All the tools you need in one integrated platform
            </p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {modules.map((module, i) => (
              <div
                key={i}
                className="p-6 rounded-lg border border-blue-100 hover:border-blue-400 bg-gradient-to-br from-blue-50 to-white hover:shadow-md transition-all group cursor-pointer"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{module.icon}</div>
                <h3 className="font-semibold text-foreground text-sm">{module.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Industries We Serve</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Specialized solutions for every business sector
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {industries.map((industry, i) => (
              <div
                key={i}
                className="p-6 rounded-lg border border-border bg-white hover:border-blue-400 hover:shadow-md transition-all text-center group cursor-pointer"
              >
                <h3 className="font-semibold text-foreground group-hover:text-blue-600 transition-colors">
                  {industry}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">See Our Platform In Action</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Watch how businesses transform with Tech Leads BD
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden h-96 md:h-[500px] bg-gradient-to-br from-blue-50 to-slate-100 border-2 border-blue-200 flex items-center justify-center group cursor-pointer">
              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors"></div>
              <div className="relative z-10 w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-blue-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Hear from businesses transformed by our solutions
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="p-8 bg-white rounded-xl border border-border hover:shadow-lg transition-shadow">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <svg
                      key={j}
                      className="w-5 h-5 text-amber-400 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-foreground mb-6 leading-relaxed text-balance">&quot;{testimonial.text}&quot;</p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-32 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full -ml-48 -mb-48"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Ready to Digitize Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              Join 500+ businesses transforming their operations with Tech Leads BD. Get your free personalized demo today and discover how our platform can revolutionize your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-blue-600 hover:bg-gray-50 px-10 py-4 rounded-lg text-base font-semibold h-auto shadow-lg">
                Get Free Demo Today
              </Button>
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 px-10 py-4 rounded-lg text-base font-semibold h-auto"
              >
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
