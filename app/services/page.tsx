'use client'

import Image from "next/image"
import { CheckCircle, Code2, Zap, Shield, Users, Headphones, Smartphone, Globe, Cloud } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ServicesPage() {
  const mainServices = [
    {
      title: "Custom Software Development",
      description: "Bespoke software solutions tailored to your unique business requirements and workflows",
      icon: <Code2 className="w-8 h-8" />,
      image: "/placeholder.svg?height=300&width=400",
      features: [
        "Requirements Analysis",
        "System Design & Architecture",
        "Full-Stack Development",
        "Quality Assurance & Testing",
        "Deployment & Support",
      ],
      benefits: [
        "Perfectly aligned with business needs",
        "Scalable and maintainable codebase",
        "Complete ownership and control",
        "Long-term technical support",
      ],
    },
    {
      title: "ERP Implementation",
      description: "Complete enterprise resource planning system deployment and integration with your existing infrastructure",
      icon: <Zap className="w-8 h-8" />,
      image: "/placeholder.svg?height=300&width=400",
      features: [
        "System Selection & Planning",
        "Data Migration",
        "Module Configuration",
        "Staff Training",
        "Go-Live Support",
      ],
      benefits: [
        "Streamlined business processes",
        "Improved data accuracy",
        "Enhanced reporting capabilities",
        "Reduced operational costs",
      ],
    },
    {
      title: "POS System Deployment",
      description: "Fast and reliable point of sale system setup with payment integration and inventory management",
      icon: <Smartphone className="w-8 h-8" />,
      image: "/placeholder.svg?height=300&width=400",
      features: [
        "Hardware Setup",
        "Payment Gateway Integration",
        "Inventory Link Setup",
        "Staff Training",
        "24/7 Technical Support",
      ],
      benefits: [
        "Faster transaction processing",
        "Real-time inventory tracking",
        "Multi-location management",
        "Detailed sales reports",
      ],
    },
    {
      title: "Website Development",
      description: "Modern, responsive websites optimized for conversion and user experience",
      icon: <Globe className="w-8 h-8" />,
      image: "/placeholder.svg?height=300&width=400",
      features: [
        "UI/UX Design",
        "Responsive Development",
        "SEO Optimization",
        "Content Management System",
        "Analytics Integration",
      ],
      benefits: [
        "Professional online presence",
        "Mobile-optimized experience",
        "Better search rankings",
        "Easy content management",
      ],
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android platforms",
      icon: <Smartphone className="w-8 h-8" />,
      image: "/placeholder.svg?height=300&width=400",
      features: [
        "iOS & Android Development",
        "UI/UX Design",
        "Backend Integration",
        "Testing & QA",
        "App Store Deployment",
      ],
      benefits: [
        "Reach customers on mobile",
        "Enhanced user engagement",
        "Offline functionality",
        "Push notifications",
      ],
    },
    {
      title: "Cloud Hosting & Infrastructure",
      description: "Secure, scalable cloud infrastructure with automatic backups and disaster recovery",
      icon: <Cloud className="w-8 h-8" />,
      image: "/placeholder.svg?height=300&width=400",
      features: [
        "Server Setup & Configuration",
        "SSL Certificates",
        "Automated Backups",
        "Disaster Recovery",
        "24/7 Monitoring",
      ],
      benefits: [
        "99.9% uptime guarantee",
        "Automatic scaling",
        "Data security",
        "Compliance ready",
      ],
    },
    {
      title: "Technical Support & Maintenance",
      description: "Ongoing support, maintenance, and optimization to keep your systems running smoothly",
      icon: <Headphones className="w-8 h-8" />,
      image: "/placeholder.svg?height=300&width=400",
      features: [
        "24/7 Help Desk Support",
        "Bug Fixes & Updates",
        "Performance Optimization",
        "Security Patches",
        "System Monitoring",
      ],
      benefits: [
        "Minimal downtime",
        "Proactive issue resolution",
        "Regular updates",
        "Performance improvements",
      ],
    },
    {
      title: "System Integration & API Development",
      description: "Connect your systems with custom APIs and integrations for seamless data flow",
      icon: <Users className="w-8 h-8" />,
      image: "/placeholder.svg?height=300&width=400",
      features: [
        "API Design & Development",
        "Third-party Integrations",
        "Data Synchronization",
        "Security Implementation",
        "Documentation",
      ],
      benefits: [
        "Unified data ecosystem",
        "Automated workflows",
        "Reduced manual work",
        "Better reporting",
      ],
    },
  ]

  const implementationProcess = [
    { step: 1, title: "Discovery & Planning", description: "Understand your requirements and create a detailed project plan" },
    { step: 2, title: "Design & Architecture", description: "Design the solution architecture and get your approval" },
    { step: 3, title: "Development & Testing", description: "Build and thoroughly test your solution" },
    { step: 4, title: "Deployment", description: "Deploy to production with minimal downtime" },
    { step: 5, title: "Training & Support", description: "Train your team and provide ongoing support" },
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
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight text-balance mb-6">
                Professional Services & Support
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                From custom development to implementation and ongoing support, we provide comprehensive services to ensure your success
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-base font-semibold h-auto">
                Request Consultation
              </Button>
              <Button
                variant="outline"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg text-base font-semibold h-auto"
              >
                View Pricing
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Service Offerings</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complete range of IT and business software services
            </p>
          </div>

          <div className="space-y-20">
            {mainServices.map((service, i) => (
              <div
                key={i}
                className={`grid md:grid-cols-2 gap-12 items-center bg-white rounded-2xl p-8 md:p-12 border border-blue-100 ${
                  i % 2 === 1 ? "md:grid-cols-2 md:[&>*:nth-child(1)]:order-2 md:[&>*:nth-child(2)]:order-1" : ""
                }`}
              >
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-foreground">{service.title}</h3>
                    </div>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">{service.description}</p>

                  <div>
                    <h4 className="font-semibold text-foreground mb-4">What&apos;s Included:</h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, j) => (
                        <li key={j} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-4">Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, j) => (
                        <li key={j} className="flex items-center gap-2 text-muted-foreground">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="relative hidden md:block">
                  <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-1 border border-blue-200 overflow-hidden shadow-lg">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={400}
                      height={300}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Implementation Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A proven methodology to ensure project success
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {implementationProcess.map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl flex-shrink-0">
                      {item.step}
                    </div>
                    {i < implementationProcess.length - 1 && (
                      <div className="w-1 h-16 bg-blue-200 mt-4"></div>
                    )}
                  </div>
                  <div className="pt-2 pb-8">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Why Businesses Choose Tech Leads BD</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Proven expertise and commitment to your success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { title: "Expert Team", description: "Highly skilled developers and architects with 10+ years experience" },
              { title: "Fast Delivery", description: "Efficient processes and agile methodology for quick time-to-market" },
              { title: "Quality Assurance", description: "Rigorous testing and quality control at every stage" },
              { title: "Cost Effective", description: "Competitive pricing without compromising on quality" },
              { title: "Dedicated Support", description: "24/7 technical support and responsive communication" },
              { title: "Scalable Solutions", description: "Systems designed to grow with your business" },
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 bg-white rounded-xl border border-border hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 mb-4 font-bold text-lg">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Technology Stack</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Built with industry-leading technologies
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "React.js",
                "Node.js",
                "PostgreSQL",
                "MongoDB",
                "Docker",
                "AWS",
                "Next.js",
                "TypeScript",
                "GraphQL",
                "REST API",
                "Redis",
                "Kubernetes",
              ].map((tech, i) => (
                <div
                  key={i}
                  className="p-4 rounded-lg border border-blue-100 hover:border-blue-400 bg-white hover:shadow-md transition-all text-center group cursor-pointer"
                >
                  <p className="font-semibold text-foreground group-hover:text-blue-600 transition-colors">
                    {tech}
                  </p>
                </div>
              ))}
            </div>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              Let&apos;s discuss how our services can help transform your business. Schedule a free consultation with our team today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-blue-600 hover:bg-gray-50 px-10 py-4 rounded-lg text-base font-semibold h-auto shadow-lg">
                Schedule Consultation
              </Button>
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 px-10 py-4 rounded-lg text-base font-semibold h-auto"
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
