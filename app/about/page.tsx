"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowRight, Check, Users, Building2, ShoppingCart, Calculator, Briefcase, Code, Globe, Smartphone, Target, Eye, Lightbulb, Settings, TestTube, Rocket, Headphones, Shield, Zap, Clock, Award, Heart, MessageCircle, Star, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

// Animated Counter Component
function AnimatedCounter({ end, label, suffix = "+" }: { end: number; label: string; suffix?: string }) {
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

export default function AboutPage() {
  const services = [
    { title: "ERP Software Development", description: "Complete enterprise resource planning systems for business automation", icon: Building2 },
    { title: "POS System Development", description: "Modern point of sale solutions for retail and wholesale businesses", icon: ShoppingCart },
    { title: "Accounting Software", description: "Professional financial management and accounting solutions", icon: Calculator },
    { title: "CRM Systems", description: "Customer relationship management for sales and marketing teams", icon: Users },
    { title: "Custom Software Development", description: "Tailored software solutions for unique business requirements", icon: Code },
    { title: "Website & Mobile App", description: "Responsive web and mobile application development", icon: Smartphone },
  ]

  const workProcess = [
    { step: 1, title: "Requirement Analysis", description: "Understanding your business needs and goals", icon: Target },
    { step: 2, title: "System Design", description: "Creating detailed architecture and UI/UX design", icon: Settings },
    { step: 3, title: "Development", description: "Building robust and scalable software solutions", icon: Code },
    { step: 4, title: "Testing", description: "Quality assurance and performance optimization", icon: TestTube },
    { step: 5, title: "Deployment", description: "Seamless installation and go-live support", icon: Rocket },
    { step: 6, title: "Support & Maintenance", description: "Continuous support and system updates", icon: Headphones },
  ]

  const whyChooseUs = [
    { title: "24/7 Customer Support", description: "Round the clock technical assistance whenever you need it", icon: Headphones },
    { title: "Experienced Engineers", description: "Skilled software engineers with years of expertise", icon: Award },
    { title: "Custom Tailored Solutions", description: "Software designed specifically for your business needs", icon: Settings },
    { title: "Affordable Pricing", description: "Competitive pricing without compromising quality", icon: Calculator },
    { title: "Fast Delivery", description: "Quick turnaround time with professional execution", icon: Zap },
    { title: "Long Term Support", description: "Ongoing maintenance and feature updates", icon: Clock },
  ]

  const expertise = [
    { title: "ERP Implementation Experts", description: "End-to-end ERP deployment and customization" },
    { title: "ASP.NET / C# MVC", description: "Enterprise-grade web application development" },
    { title: "PHP Laravel / MySQL", description: "Modern web solutions with robust backend" },
    { title: "Java Development", description: "Cross-platform enterprise applications" },
    { title: "Microsoft SQL Server", description: "Scalable database solutions" },
    { title: "Scalable Architecture", description: "Future-proof system design patterns" },
  ]

  const teamRoles = [
    { title: "Project Managers", count: 5, description: "Experienced project leaders ensuring timely delivery", icon: Target },
    { title: "Software Engineers", count: 20, description: "Skilled developers building robust solutions", icon: Code },
    { title: "UI/UX Designers", count: 8, description: "Creative designers crafting intuitive interfaces", icon: Lightbulb },
    { title: "Support Engineers", count: 10, description: "Dedicated support team for 24/7 assistance", icon: Headphones },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-blue-200 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">About Us</span>
          </nav>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm text-blue-100">Established 2016 | Trusted by 500+ Businesses</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Think Ahead. Build{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-300">
                Smart Business Systems.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-blue-100 leading-relaxed max-w-3xl">
              Tech Leads BD Ltd is a leading software company in Bangladesh providing ERP, POS, CRM, Accounting and custom software solutions since 2016. We help businesses automate and grow with innovative technology.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block bg-blue-100 text-blue-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
                About Our Company
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Who We Are
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                <strong className="text-slate-800">Tech Leads BD Ltd</strong> is a software & IT solutions provider specializing in ERP, POS, CRM, accounting systems, web development, and mobile applications.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                We deliver customized software solutions tailored for Bangladeshi and global businesses. Our team of experienced engineers and designers work closely with clients to understand their unique needs and deliver solutions that drive real business value.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Award, label: "Established in 2016" },
                  { icon: Building2, label: "ERP & POS Specialists" },
                  { icon: Code, label: "Custom Software Experts" },
                  { icon: Globe, label: "Local + Global Market" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="font-medium text-slate-700 text-sm">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl" />
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-indigo-500/10 rounded-full blur-2xl" />

                <div className="relative z-10 space-y-6">
                  <div className="bg-white rounded-2xl p-6 shadow-sm">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-slate-900">500+</div>
                        <div className="text-slate-500">Happy Clients</div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-2xl p-4 shadow-sm">
                      <div className="text-xl font-bold text-slate-900">1200+</div>
                      <div className="text-slate-500 text-sm">Projects Delivered</div>
                    </div>
                    <div className="bg-white rounded-2xl p-4 shadow-sm">
                      <div className="text-xl font-bold text-slate-900">10+</div>
                      <div className="text-slate-500 text-sm">Industries Served</div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 text-white">
                    <div className="text-lg font-semibold mb-1">8+ Years of Excellence</div>
                    <div className="text-blue-100 text-sm">Building trust since 2016</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-emerald-100 text-emerald-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              Our Purpose
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Mission & Vision
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Driving innovation and delivering excellence in every solution we create
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Mission Card */}
            <div className="group relative bg-white rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-blue-200">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-t-3xl" />
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                To provide innovative, scalable and cost-effective software solutions that help businesses automate and grow efficiently. We are committed to delivering quality products that meet the highest standards.
              </p>
            </div>

            {/* Vision Card */}
            <div className="group relative bg-white rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-emerald-200">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-t-3xl" />
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                To become the leading end-to-end software solution provider in Bangladesh with global recognition and impact. We aspire to be the trusted technology partner for businesses worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-purple-100 text-purple-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              Our Services
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What We Do
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive software solutions designed to transform your business operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-4 flex items-center text-blue-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More <ArrowRight className="ml-1 w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Process Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-white/10 text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6 border border-white/20">
              Our Process
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How We Work
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              A structured approach to deliver exceptional software solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workProcess.map((item, index) => (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="absolute top-4 right-4 w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-300 font-bold text-sm">
                  {item.step}
                </div>
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-500 transition-colors">
                  <item.icon className="w-6 h-6 text-blue-300 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-orange-100 text-orange-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              Why Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Choose Tech Leads BD
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We focus on long-term client relationships and business growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-6 hover:from-orange-50 hover:to-orange-100 transition-all duration-300 border border-slate-100 hover:border-orange-200"
              >
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center text-white">
            <p className="text-lg">
              <strong>Note:</strong> We focus on long-term client relationships and business growth. Your success is our success.
            </p>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block bg-cyan-100 text-cyan-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
                Technical Strength
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Our Technical Expertise
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We build robust, secure and scalable enterprise systems using modern technologies and best practices. Our team stays updated with the latest industry trends.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {expertise.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-3">
                    <Check className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium text-slate-900 text-sm">{item.title}</div>
                      <div className="text-xs text-slate-500">{item.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl p-8 text-white">
                <div className="mb-8">
                  <Shield className="w-16 h-16 mb-4" />
                  <h3 className="text-2xl font-bold mb-4">We Build with Quality</h3>
                  <p className="text-cyan-100 leading-relaxed">
                    Every solution we deliver goes through rigorous testing and quality assurance. We ensure your software is reliable, secure, and performs exceptionally well.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="text-2xl font-bold">99.9%</div>
                    <div className="text-cyan-200 text-sm">Uptime Guarantee</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="text-2xl font-bold">100%</div>
                    <div className="text-cyan-200 text-sm">Client Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Success in Numbers
            </h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Our track record speaks for itself
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <AnimatedCounter end={500} label="Happy Clients" />
            <AnimatedCounter end={1200} label="Projects Delivered" />
            <AnimatedCounter end={8} label="Years Experience" suffix="+" />
            <AnimatedCounter end={24} label="Support Available" suffix="/7" />
          </div>
        </div>
      </section>

      {/* Team Preview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-indigo-100 text-indigo-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              Our Team
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A dedicated team of professionals committed to delivering excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamRoles.map((role, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-6 text-center hover:from-indigo-50 hover:to-indigo-100 transition-all duration-300 border border-slate-100 hover:border-indigo-200"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <role.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-1">{role.title}</h3>
                <div className="text-2xl font-bold text-indigo-600 mb-2">{role.count}+</div>
                <p className="text-sm text-slate-500">{role.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Difference Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block bg-rose-100 text-rose-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
                What Makes Us Different
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Our Difference
              </h2>
              <p className="text-lg text-slate-600">
                We treat clients as partners. Our success is measured by client success.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: Heart, title: "Client-First Approach", description: "Your needs and goals are our priority" },
                  { icon: Users, title: "Long-Term Partnership", description: "Building relationships, not just software" },
                  { icon: Award, title: "High Quality Delivery", description: "Excellence in every project we deliver" },
                  { icon: Lightbulb, title: "Innovative Problem Solving", description: "Creative solutions for complex challenges" },
                  { icon: MessageCircle, title: "Strong Communication", description: "Transparent and responsive updates" },
                  { icon: Headphones, title: "Dedicated Support System", description: "Always here when you need us" },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors">
                    <div className="w-10 h-10 bg-rose-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-rose-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">{item.title}</h3>
                      <p className="text-sm text-slate-500">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Want to Build Your Custom ERP System?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Let's discuss your requirements and create a solution that fits your business perfectly.
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
    </div>
  )
}
