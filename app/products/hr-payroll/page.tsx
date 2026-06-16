import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Check, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function HRPayrollPage() {
  const product = {
    title: "HR & Payroll Management Software",
    description: "Comprehensive solution for managing human resources and payroll processing.",
    longDescription:
      "Our HR & Payroll Management Software provides a complete solution for managing your workforce and streamlining payroll operations. From employee onboarding and attendance tracking to payroll processing and tax compliance, our integrated platform helps you automate HR processes, reduce administrative workload, and ensure accurate and timely compensation for your employees. With powerful features and an intuitive interface, our solution helps businesses of all sizes manage their most valuable asset—their people.",
    image: "/placeholder.svg?height=600&width=800",
    features: [
      {
        title: "Employee Management",
        description: "Centralized employee database with comprehensive profiles and document management.",
      },
      {
        title: "Attendance Tracking",
        description: "Automated attendance recording with multiple options including biometric integration.",
      },
      {
        title: "Leave Management",
        description: "Streamlined leave request, approval, and balance tracking for all types of leave.",
      },
      {
        title: "Payroll Processing",
        description: "Automated salary calculations with support for various compensation structures.",
      },
      {
        title: "Tax Calculations",
        description: "Built-in tax calculations and reporting to ensure compliance with regulations.",
      },
      {
        title: "Performance Management",
        description: "Tools for goal setting, performance reviews, and employee development tracking.",
      },
      {
        title: "Reporting & Analytics",
        description: "Comprehensive reports on workforce metrics, payroll, and HR performance indicators.",
      },
      {
        title: "Employee Self-Service",
        description: "Portal for employees to access their information, apply for leave, and view pay stubs.",
      },
    ],
    pricing: [
      {
        plan: "Basic",
        price: "$5",
        period: "per employee/month",
        features: [
          "Employee Database",
          "Basic Attendance Tracking",
          "Leave Management",
          "Simple Payroll Processing",
          "Email Support",
          "Regular Updates",
        ],
      },
      {
        plan: "Professional",
        price: "$10",
        period: "per employee/month",
        features: [
          "All Basic Features",
          "Advanced Attendance Options",
          "Performance Management",
          "Tax Calculations",
          "Employee Self-Service",
          "Priority Support",
        ],
      },
      {
        plan: "Enterprise",
        price: "$15",
        period: "per employee/month",
        features: [
          "All Professional Features",
          "Custom Workflow Automation",
          "Advanced Reporting & Analytics",
          "API Access for Integration",
          "Dedicated Account Manager",
          "24/7 Support",
        ],
      },
    ],
    screenshots: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    testimonials: [
      {
        quote:
          "Since implementing this HR & Payroll system, we've reduced our payroll processing time by 80% and practically eliminated calculation errors. The employee self-service feature has also significantly reduced queries to our HR team.",
        author: "Jennifer Thompson",
        position: "HR Director",
        company: "Global Manufacturing Inc.",
        avatar: "/placeholder.svg?height=80&width=80",
      },
      {
        quote:
          "The comprehensive reporting and analytics have given us valuable insights into our workforce that we never had before. The attendance and leave management features have improved transparency and employee satisfaction.",
        author: "Michael Rodriguez",
        position: "COO",
        company: "TechSolutions Ltd.",
        avatar: "/placeholder.svg?height=80&width=80",
      },
    ],
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-white to-green-50 py-16">
        <div className="container mx-auto px-4">
          <Link href="/products" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Products
          </Link>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{product.title}</h1>
              <p className="text-xl text-gray-600 mb-8">{product.longDescription}</p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-md">
                  Request a Demo
                </Button>
                <Button
                  variant="outline"
                  className="border-emerald-500 text-emerald-500 hover:bg-emerald-50 px-6 py-2 rounded-md"
                >
                  <Download className="mr-2 h-4 w-4" /> Download Brochure
                </Button>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.title}
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {product.features.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Screenshots</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {product.screenshots.map((screenshot, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-md">
                <Image
                  src={screenshot || "/placeholder.svg"}
                  alt={`${product.title} Screenshot ${index + 1}`}
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Benefits</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <h3 className="text-xl font-semibold mb-4">For HR Management</h3>
              <ul className="space-y-3">
                {[
                  "Centralized employee information for easy access and management",
                  "Streamlined recruitment and onboarding processes",
                  "Automated leave management reducing administrative work",
                  "Enhanced performance evaluation and employee development",
                  "Improved compliance with labor regulations and policies",
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="w-5 h-5 mt-0.5 flex-shrink-0 text-emerald-500" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <h3 className="text-xl font-semibold mb-4">For Payroll Processing</h3>
              <ul className="space-y-3">
                {[
                  "Accurate and timely salary calculations",
                  "Automated tax deductions and compliance reporting",
                  "Reduced payroll processing time and errors",
                  "Simplified management of benefits and allowances",
                  "Detailed payroll reports for financial planning",
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="w-5 h-5 mt-0.5 flex-shrink-0 text-emerald-500" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Pricing Plans</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {product.pricing.map((plan, index) => (
              <div
                key={index}
                className={`border rounded-lg overflow-hidden ${index === 1 ? "border-emerald-500 shadow-lg" : "border-gray-200"}`}
              >
                <div className={`p-6 ${index === 1 ? "bg-emerald-500 text-white" : "bg-gray-50"}`}>
                  <h3 className="text-2xl font-bold mb-2">{plan.plan}</h3>
                  <div className="flex items-end gap-1">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-sm mb-1">{plan.period}</span>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check
                          className={`w-5 h-5 mt-0.5 flex-shrink-0 ${index === 1 ? "text-emerald-500" : "text-gray-500"}`}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Button
                      className={`w-full ${index === 1 ? "bg-emerald-500 hover:bg-emerald-600" : "bg-gray-800 hover:bg-gray-900"} text-white`}
                    >
                      {index === 1 ? "Get Started" : "Choose Plan"}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">What Our Clients Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {product.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.author}
                    width={80}
                    height={80}
                    className="rounded-full w-16 h-16"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.author}</h4>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            <Tabs defaultValue="general" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="general">General</TabsTrigger>
                <TabsTrigger value="technical">Technical</TabsTrigger>
                <TabsTrigger value="compliance">Compliance</TabsTrigger>
              </TabsList>
              <TabsContent value="general" className="space-y-4">
                <div className="border-b pb-4">
                  <h3 className="text-xl font-semibold mb-2">How easy is it to migrate from our current system?</h3>
                  <p className="text-gray-600">
                    We provide comprehensive data migration services to ensure a smooth transition from your existing
                    systems. Our team will work with you to import employee data, payroll history, and other essential
                    information.
                  </p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="text-xl font-semibold mb-2">How long does implementation typically take?</h3>
                  <p className="text-gray-600">
                    Implementation time varies based on company size and complexity, but typically ranges from 2-4
                    weeks. This includes setup, configuration, data migration, and initial training.
                  </p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="text-xl font-semibold mb-2">Is training provided for HR staff and employees?</h3>
                  <p className="text-gray-600">
                    Yes, we provide comprehensive training for both HR administrators and end-users. This includes live
                    training sessions, documentation, and access to our knowledge base and video tutorials.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="technical" className="space-y-4">
                <div className="border-b pb-4">
                  <h3 className="text-xl font-semibold mb-2">Is the software cloud-based or on-premise?</h3>
                  <p className="text-gray-600">
                    We offer both cloud-based and on-premise solutions. Most clients choose our cloud option for easier
                    updates, accessibility, and reduced IT overhead, but we can accommodate on-premise requirements if
                    needed.
                  </p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="text-xl font-semibold mb-2">Can the system integrate with other business software?</h3>
                  <p className="text-gray-600">
                    Yes, our Enterprise plan includes API access for integration with accounting software, time-tracking
                    systems, benefits administration platforms, and other business applications.
                  </p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="text-xl font-semibold mb-2">How secure is employee data in your system?</h3>
                  <p className="text-gray-600">
                    We implement industry-leading security measures including data encryption, regular backups,
                    role-based access controls, and compliance with data protection regulations to ensure your employee
                    information remains secure.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="compliance" className="space-y-4">
                <div className="border-b pb-4">
                  <h3 className="text-xl font-semibold mb-2">Does the system help with tax compliance?</h3>
                  <p className="text-gray-600">
                    Yes, our software is regularly updated to reflect current tax regulations and can help ensure
                    compliance with tax withholding, reporting requirements, and year-end processing across multiple
                    jurisdictions.
                  </p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="text-xl font-semibold mb-2">
                    How does the system handle different labor regulations?
                  </h3>
                  <p className="text-gray-600">
                    Our software is designed to adapt to various labor regulations and can be configured to support
                    compliance with local labor laws regarding working hours, overtime calculations, leave entitlements,
                    and more.
                  </p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="text-xl font-semibold mb-2">
                    Can the system generate compliance-related reports for audits?
                  </h3>
                  <p className="text-gray-600">
                    Yes, our system includes a comprehensive suite of reports designed to help with regulatory
                    compliance, including tax reports, labor law compliance, and other statutory reporting requirements.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your HR & Payroll Operations?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Streamline your workforce management and payroll processing with our comprehensive HR & Payroll Management
            Software. Contact us today to schedule a demo.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-white text-emerald-500 hover:bg-gray-100 px-6 py-2 rounded-md">Contact Sales</Button>
            <Button variant="outline" className="border-white text-white hover:bg-emerald-600 px-6 py-2 rounded-md">
              Request a Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
