import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Check, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MedicineShopPage() {
  const product = {
    title: "Medicine Shop Management Software",
    description: "Specialized solution for pharmacies and medicine shops to manage inventory and sales.",
    longDescription:
      "Our Medicine Shop Management Software is a comprehensive solution designed specifically for pharmacies and medicine shops. It streamlines inventory management, prescription handling, sales processing, and customer management in one integrated platform. With features tailored to the unique needs of pharmaceutical retail, our software helps you maintain accurate records, ensure compliance with regulations, optimize inventory levels, and provide better service to your customers.",
    image: "/placeholder.svg?height=600&width=800",
    features: [
      {
        title: "Medicine Inventory Management",
        description: "Track pharmaceutical products with batch numbers, expiry dates, and manufacturer details.",
      },
      {
        title: "Prescription Management",
        description: "Digitize and store prescriptions with patient information and medication details.",
      },
      {
        title: "Expiry Tracking & Alerts",
        description: "Automated alerts for near-expiry and expired medications to prevent losses.",
      },
      {
        title: "Customer Records",
        description: "Maintain patient profiles with medication history and prescription records.",
      },
      {
        title: "Sales & Billing",
        description: "Efficient point of sale system with support for insurance claims and discounts.",
      },
      {
        title: "Purchase Management",
        description: "Streamlined ordering process with supplier management and stock replenishment.",
      },
      {
        title: "Reporting & Analytics",
        description: "Comprehensive reports on sales, inventory, expiry, and business performance.",
      },
      {
        title: "Regulatory Compliance",
        description:
          "Features to help maintain compliance with pharmaceutical regulations and record-keeping requirements.",
      },
    ],
    pricing: [
      {
        plan: "Basic",
        price: "$69",
        period: "per month",
        features: [
          "Medicine Inventory Management",
          "Basic Prescription Handling",
          "Expiry Tracking",
          "Point of Sale",
          "Up to 3 Users",
          "Email Support",
        ],
      },
      {
        plan: "Professional",
        price: "$129",
        period: "per month",
        features: [
          "All Basic Features",
          "Advanced Prescription Management",
          "Customer Records & History",
          "Purchase Management",
          "Basic Reporting",
          "Up to 10 Users",
          "Priority Support",
        ],
      },
      {
        plan: "Enterprise",
        price: "$249",
        period: "per month",
        features: [
          "All Professional Features",
          "Multi-branch Support",
          "Advanced Reporting & Analytics",
          "Regulatory Compliance Tools",
          "API Integration",
          "Unlimited Users",
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
          "This software has revolutionized how we manage our pharmacy. The expiry tracking feature alone has saved us thousands of dollars in potential losses, and the prescription management system has improved our accuracy and customer service.",
        author: "Dr. James Wilson",
        position: "Owner",
        company: "Wilson Pharmacy",
        avatar: "/placeholder.svg?height=80&width=80",
      },
      {
        quote:
          "We've been using this system for over a year now, and it has significantly improved our operational efficiency. The inventory management is precise, and the reporting tools give us valuable insights into our business performance.",
        author: "Sarah Chen",
        position: "Pharmacy Manager",
        company: "HealthPlus Medications",
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
              <h3 className="text-xl font-semibold mb-4">For Pharmacy Operations</h3>
              <ul className="space-y-3">
                {[
                  "Reduced medication errors with accurate prescription processing",
                  "Minimized losses from expired medications",
                  "Optimized inventory levels based on demand patterns",
                  "Streamlined purchasing and supplier management",
                  "Improved cash flow with better inventory control",
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="w-5 h-5 mt-0.5 flex-shrink-0 text-emerald-500" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <h3 className="text-xl font-semibold mb-4">For Customer Service</h3>
              <ul className="space-y-3">
                {[
                  "Faster service with efficient prescription processing",
                  "Enhanced patient safety with medication history tracking",
                  "Improved customer satisfaction with accurate billing",
                  "Better patient counseling with complete medication records",
                  "Increased customer loyalty through personalized service",
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
                  <h3 className="text-xl font-semibold mb-2">How long does it take to implement the software?</h3>
                  <p className="text-gray-600">
                    Implementation typically takes 1-2 weeks for a standard setup. This includes installation, data
                    migration, and basic training for your staff.
                  </p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="text-xl font-semibold mb-2">Can I import my existing inventory data?</h3>
                  <p className="text-gray-600">
                    Yes, our software supports data import from various formats including Excel, CSV, and direct
                    migration from several other pharmacy management systems.
                  </p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="text-xl font-semibold mb-2">Is training provided for my staff?</h3>
                  <p className="text-gray-600">
                    Yes, we provide comprehensive training for all users. This includes both online and on-site training
                    options depending on your needs and package.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="technical" className="space-y-4">
                <div className="border-b pb-4">
                  <h3 className="text-xl font-semibold mb-2">Does the software work on mobile devices?</h3>
                  <p className="text-gray-600">
                    Yes, our software is fully responsive and can be accessed on tablets and smartphones. We also offer
                    dedicated mobile apps for iOS and Android for certain functions like inventory checking.
                  </p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="text-xl font-semibold mb-2">Can the software be integrated with other systems?</h3>
                  <p className="text-gray-600">
                    Yes, our Enterprise plan includes API access for integration with accounting software, e-commerce
                    platforms, and healthcare information systems.
                  </p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="text-xl font-semibold mb-2">How is data backed up and secured?</h3>
                  <p className="text-gray-600">
                    We implement industry-standard security measures including data encryption, automated backups, and
                    role-based access controls to ensure your sensitive pharmacy data is secure and protected.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="compliance" className="space-y-4">
                <div className="border-b pb-4">
                  <h3 className="text-xl font-semibold mb-2">Does the software help with regulatory compliance?</h3>
                  <p className="text-gray-600">
                    Yes, our software is designed to help pharmacies maintain compliance with common regulatory
                    requirements including record-keeping, controlled substance tracking, and patient privacy.
                  </p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="text-xl font-semibold mb-2">How does the system handle controlled substances?</h3>
                  <p className="text-gray-600">
                    The Enterprise plan includes special features for controlled substance management, including
                    enhanced tracking, specialized reporting, and audit trails to help maintain compliance with
                    regulations.
                  </p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="text-xl font-semibold mb-2">Is patient data protected according to privacy laws?</h3>
                  <p className="text-gray-600">
                    Yes, our system is designed with patient privacy in mind and includes features to help you maintain
                    compliance with healthcare privacy regulations in most jurisdictions.
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Pharmacy?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Streamline your pharmacy operations, improve customer service, and ensure compliance with our specialized
            Medicine Shop Management Software. Contact us today to schedule a demo.
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
