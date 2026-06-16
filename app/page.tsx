'use client'

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, BarChart3, Share2, Lock, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  const solutions = [
    {
      title: "Accounting & Inventory ERP",
      description: "Complete financial management and stock tracking",
      icon: "📊",
    },
    {
      title: "POS Software",
      description: "Fast and reliable point of sale system",
      icon: "🛍️",
    },
    {
      title: "Garments ERP",
      description: "Specialized for textile and garment industry",
      icon: "👕",
    },
    {
      title: "Hospital Management",
      description: "Healthcare and patient management system",
      icon: "🏥",
    },
    {
      title: "Pharmacy Software",
      description: "Medicine shop and pharmacy operations",
      icon: "💊",
    },
    {
      title: "Custom ERP Solutions",
      description: "Tailored enterprise solutions for your business",
      icon: "⚙️",
    },
  ]

  const features = [
    {
      title: "Real-time Stock Tracking",
      description: "Monitor inventory levels instantly across all locations",
      icon: <BarChart3 className="w-6 h-6" />,
    },
    {
      title: "Cloud Based Access",
      description: "Access your business data anytime, anywhere, from any device",
      icon: <Share2 className="w-6 h-6" />,
    },
    {
      title: "Multi-branch Support",
      description: "Manage multiple locations with centralized control",
      icon: <Lock className="w-6 h-6" />,
    },
    {
      title: "User Role Management",
      description: "Set permissions and control access for team members",
      icon: <Users className="w-6 h-6" />,
    },
  ]

  const testimonials = [
    {
      name: "Md. Hasan",
      company: "ABC Trading Ltd.",
      text: "Tech Leads BD transformed our business operations completely. Their ERP system is incredibly intuitive and has saved us hours every day.",
      star: 5,
    },
    {
      name: "Fatima Akhter",
      company: "Star Garments",
      text: "The garments ERP solution is exactly what we needed. Support team is responsive and the system works flawlessly.",
      star: 5,
    },
    {
      name: "Shafiq Ahmed",
      company: "Prime Hospital",
      text: "Outstanding hospital management system. Patient records are now organized and accessible instantly.",
      star: 5,
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
      <section className="relative bg-white py-20 md:py-32 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-40 -top-40 w-80 h-80 bg-blue-50 rounded-full opacity-40"></div>
          <div className="absolute -left-40 -bottom-40 w-80 h-80 bg-blue-50 rounded-full opacity-40"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
                ✨ Complete Business Solutions
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight text-balance">
                Complete ERP & POS Software for Every Business in Bangladesh
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Streamline your operations with cloud-based software designed for Bangladeshi businesses. From retail to manufacturing, we&apos;ve got you covered.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-medium h-auto"
                >
                  Get Demo
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg text-lg font-medium h-auto"
                >
                  View Software
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-foreground">500+</div>
                  <p className="text-sm text-muted-foreground">Businesses Transformed</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-foreground">10+</div>
                  <p className="text-sm text-muted-foreground">Years in Business</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Dashboard Preview"
                  width={500}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm font-semibold text-muted-foreground mb-8 uppercase tracking-wide">
            Trusted by leading businesses
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex justify-center">
                <Image
                  src={`/placeholder.svg?height=50&width=150`}
                  alt={`Client ${i}`}
                  width={150}
                  height={50}
                  className="h-12 w-auto opacity-60"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Software Solutions Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Software Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions designed for every industry and business size
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, i) => (
              <div
                key={i}
                className="group p-8 rounded-xl border border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300 cursor-pointer bg-white hover:bg-blue-50"
              >
                <div className="text-5xl mb-4">{solution.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-3">{solution.title}</h3>
                <p className="text-muted-foreground mb-4">{solution.description}</p>
                <div className="inline-flex items-center text-blue-600 font-medium group-hover:translate-x-1 transition-transform">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-28 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Powerful Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to run your business efficiently
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, i) => (
              <div key={i} className="flex gap-6 p-8 bg-white rounded-xl border border-blue-100">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">See It In Action</h2>
              <p className="text-xl text-muted-foreground">
                Watch how Tech Leads BD software transforms business operations
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white h-96 flex items-center justify-center group cursor-pointer">
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
              <div className="relative z-10 w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-blue-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the plan that fits your business needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`rounded-2xl p-8 transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-blue-600 text-white shadow-2xl md:scale-105"
                    : "bg-white text-foreground border border-blue-100"
                }`}
              >
                <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? "text-white" : ""}`}>
                  {plan.name}
                </h3>
                <p
                  className={`text-sm mb-6 ${
                    plan.highlighted ? "text-blue-100" : "text-muted-foreground"
                  }`}
                >
                  {plan.description}
                </p>
                <div className="mb-6">
                  <div className={`text-4xl font-bold ${plan.highlighted ? "text-white" : ""}`}>
                    {plan.price}
                  </div>
                  <div
                    className={`text-sm ${
                      plan.highlighted ? "text-blue-100" : "text-muted-foreground"
                    }`}
                  >
                    {plan.period}
                  </div>
                </div>
                <Button
                  className={`w-full mb-8 h-auto py-3 font-medium rounded-lg ${
                    plan.highlighted
                      ? "bg-white text-blue-600 hover:bg-gray-100"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
                >
                  Get Started
                </Button>
                <ul className="space-y-4">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <CheckCircle
                        className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          plan.highlighted ? "text-white" : "text-blue-600"
                        }`}
                      />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join hundreds of businesses that trust Tech Leads BD
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className="p-8 bg-blue-50 rounded-xl border border-blue-100 hover:shadow-lg transition-shadow"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.star)].map((_, j) => (
                    <svg
                      key={j}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-foreground mb-6 leading-relaxed">&quot;{testimonial.text}&quot;</p>
                <div>
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-blue-600 to-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-40 -top-40 w-80 h-80 bg-white rounded-full"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Start Your Digital Transformation Today</h2>
            <p className="text-xl text-blue-100 mb-8">
              Join hundreds of businesses already using Tech Leads BD software. Get a free demo and see how we can help transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg text-lg font-medium h-auto">
                Get Your Free Demo
              </Button>
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-blue-600 px-8 py-3 rounded-lg text-lg font-medium h-auto"
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
