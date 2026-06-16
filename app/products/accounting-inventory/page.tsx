import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Check, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AccountingInventoryPage() {
  const product = {
    title: "Accounting & Inventory Software",
    description: "Integrated solution for managing finances and inventory in one platform.",
    longDescription:
      "Our Accounting & Inventory Software provides a comprehensive solution that integrates financial management and inventory control in a single platform. Designed for businesses of all sizes, this software streamlines accounting processes, tracks inventory in real-time, and provides valuable insights to help you make informed business decisions. With powerful features and an intuitive interface, our solution helps you maintain accurate financial records, optimize inventory levels, and improve overall operational efficiency.",
    image: "/placeholder.svg?height=600&width=800",
    features: [
      {
        title: "Financial Accounting",
        description:
          "Complete accounting system with general ledger, accounts payable/receivable, and financial statements.",
      },
      {
        title: "Inventory Management",
        description: "Real-time inventory tracking, stock valuation, and automated reordering capabilities.",
      },
      {
        title: "Purchase Management",
        description: "Streamlined purchase order processing, supplier management, and cost tracking.",
      },
      {
        title: "Sales Management",
        description: "Efficient sales order processing, invoicing, and customer management.",
      },
      {
        title: "Reporting & Analytics",
        description:
          "Comprehensive reporting tools for financial analysis, inventory status, and business performance.",
      },
      {
        title: "Multi-location Support",
        description: "Manage inventory across multiple warehouses or retail locations with ease.",
      },
      {
        title: "Tax Management",
        description: "Automated tax calculations and reporting for compliance with local regulations.",
      },
      {
        title: "Bank Reconciliation",
        description: "Easily reconcile bank statements with your accounting records for accuracy.",
      },
    ],
    pricing: [
      {
        plan: "Basic",
        price: "$79",
        period: "per month",
        features: [
          "Financial Accounting",
          "Basic Inventory Management",
          "Up to 1,000 Transactions",
          "3 User Accounts",
          "Email Support",
        ],
      },
      {
        plan: "Professional",
        price: "$149",
        period: "per month",
        features: [
          "All Basic Features",
          "Advanced Inventory Management",
          "Purchase & Sales Management",
          "Up to 10,000 Transactions",
          "10 User Accounts",
          "Priority Support",
        ],
      },
      {
        plan: "Enterprise",
        price: "$299",
        period: "per month",
        features: [
          "All Professional Features",
          "Multi-location Support",
          "Advanced Reporting & Analytics",
          "Unlimited Transactions",
          "Unlimited User Accounts",
          "24/7 Support",
          "Dedicated Account Manager",
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
          "This accounting and inventory software has transformed our business operations. We now have complete visibility of our finances and inventory in one place, which has helped us make better decisions and improve our bottom line.",
        author: "Robert Johnson",
        position: "CFO",
        company: "Global Retail Solutions",
        avatar: "/placeholder.svg?height=80&width=80",
      },
      {
        quote:
          "The integration between accounting and inventory has eliminated double-entry and reduced errors significantly. Our month-end closing process is now 75% faster, and we always know exactly what we have in stock.",
        author: "Sarah Williams",
        position: "Operations Manager",
        company: "Williams Manufacturing",
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
              <h3 className="text-xl font-semibold mb-4">For Financial Management</h3>
              <ul className="space-y-3">
                {[
                  "Accurate financial reporting and statements",
                  "Streamlined accounts payable and receivable processes",
                  "Simplified tax compliance and reporting",
                  "Improved cash flow management",
                  "Reduced accounting errors and discrepancies",
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="w-5 h-5 mt-0.5 flex-shrink-0 text-emerald-500" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <h3 className="text-xl font-semibold mb-4">For Inventory Management</h3>
              <ul className="space-y-3">
                {[
                  "Real-time visibility of inventory levels",
                  "Reduced stockouts and excess inventory",
                  "Optimized purchasing decisions",
                  "Improved order fulfillment and customer satisfaction",
                  "Better inventory valuation and cost tracking",
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
                <TabsTrigger value="pricing">Pricing</TabsTrigger>
              </TabsList>
              <TabsContent value="general" className="space-y-4">
                <div className="border-b pb-4">
                  <h3 className="text-xl font-semibold mb-2">How long does implementation take?</h3>
                  <p className="text-gray-600">
                    Implementation typically takes 2-4 weeks depending on the complexity of your business requirements
                    and the amount of data to be migrated.
                  </p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="text-xl font-semibold mb-2">Can I migrate data from my existing systems?</h3>
                  <p className="text-gray-600">
                    Yes, we offer data migration services to help you transfer your existing accounting and inventory
                    data to our system smoothly and accurately.
                  </p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="text-xl font-semibold mb-2">Is training provided with the software?</h3>
                  <p className="text-gray-600">
                    Yes, we provide comprehensive training for all users. This includes both online and on-site training
                    options depending on your needs and package.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="technical" className="space-y-4">
                <div className="border-b pb-4">
                  <h3 className="text-xl font-semibold mb-2">Is the software cloud-based or on-premise?</h3>
                  <p className="text-gray-600">
                    We offer both cloud-based and on-premise solutions. The cloud version can be accessed from any
                    device with an internet connection, while the on-premise version is installed on your local servers.
                  </p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="text-xl font-semibold mb-2">How secure is my financial and inventory data?</h3>
                  <p className="text-gray-600">
                    We implement industry-standard security measures including data encryption, regular backups, and
                    role-based access controls to ensure your data is secure and protected.
                  </p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="text-xl font-semibold mb-2">Can the software be integrated with other systems?</h3>
                  <p className="text-gray-600">
                    Yes, our software offers API integration capabilities with various third-party applications
                    including e-commerce platforms, CRM systems, and payment gateways.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="pricing" className="space-y-4">
                <div className="border-b pb-4">
                  <h3 className="text-xl font-semibold mb-2">
                    Are there any additional costs beyond the subscription?
                  </h3>
                  <p className="text-gray-600">
                    The subscription covers software usage, updates, and basic support. Additional costs may apply for
                    premium support, custom development, or advanced training.
                  </p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="text-xl font-semibold mb-2">Do you offer a free trial?</h3>
                  <p className="text-gray-600">
                    Yes, we offer a 14-day free trial for all our plans. No credit card required.
                  </p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="text-xl font-semibold mb-2">Can I upgrade or downgrade my plan?</h3>
                  <p className="text-gray-600">
                    Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next
                    billing cycle.
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Streamline Your Accounting & Inventory?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Transform your business with our integrated Accounting & Inventory Software. Contact us today to schedule a
            demo.
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
