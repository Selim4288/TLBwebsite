import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Check, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function RetailShopPage() {
  const product = {
    title: "Retail Shop Management Software",
    description: "Complete solution for managing retail store operations and inventory.",
    longDescription:
      "Our Retail Shop Management Software is a comprehensive solution designed to streamline and optimize all aspects of retail operations. From inventory and sales management to customer relationships and employee scheduling, our platform helps retail businesses of all sizes enhance efficiency, improve customer service, and increase profitability. With powerful features and an intuitive interface, our software provides the tools you need to succeed in today's competitive retail environment.",
    image: "/placeholder.svg?height=600&width=800",
    features: [
      {
        title: "POS Integration",
        description: "Seamless point of sale system with barcode scanning, receipt printing, and payment processing.",
      },
      {
        title: "Inventory Management",
        description: "Real-time inventory tracking, automated reordering, and multi-location stock management.",
      },
      {
        title: "Customer Loyalty",
        description: "Customer database with purchase history, loyalty programs, and personalized marketing tools.",
      },
      {
        title: "Employee Management",
        description: "Staff scheduling, performance tracking, and commission calculations.",
      },
      {
        title: "Sales Analytics",
        description: "Comprehensive reporting on sales performance, inventory turnover, and customer behavior.",
      },
      {
        title: "Supplier Management",
        description: "Vendor database, purchase order creation, and delivery tracking.",
      },
      {
        title: "Multi-channel Integration",
        description: "Connect in-store sales with e-commerce platforms for unified inventory and customer data.",
      },
      {
        title: "Promotions & Discounts",
        description: "Create and manage special offers, discounts, and promotional campaigns.",
      },
    ],
    pricing: [
      {
        plan: "Basic",
        price: "$89",
        period: "per month",
        features: [
          "Single Store Location",
          "Basic POS Features",
          "Inventory Management",
          "Customer Database",
          "Up to 3 Users",
          "Email Support",
        ],
      },
      {
        plan: "Professional",
        price: "$169",
        period: "per month",
        features: [
          "Up to 3 Store Locations",
          "Advanced POS Features",
          "Customer Loyalty Program",
          "Employee Management",
          "Basic Analytics",
          "Up to 10 Users",
          "Priority Support",
        ],
      },
      {
        plan: "Enterprise",
        price: "$299",
        period: "per month",
        features: [
          "Unlimited Store Locations",
          "All Professional Features",
          "Advanced Analytics",
          "Multi-channel Integration",
          "API Access",
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
          "This retail management system has transformed our operations. We've reduced inventory costs by 15% through better stock management, and our staff can process sales much faster, improving customer satisfaction.",
        author: "Rebecca Martinez",
        position: "Owner",
        company: "Fashion Boutique",
        avatar: "/placeholder.svg?height=80&width=80",
      },
      {
        quote:
          "The customer loyalty features have significantly increased our repeat business. The reporting tools give us insights we never had before, helping us make better purchasing and staffing decisions.",
        author: "James Wilson",
        position: "General Manager",
        company: "Wilson's Department Store",
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
              <h3 className="text-xl font-semibold mb-4">For Store Operations</h3>
              <ul className="space-y-3">
                {[
                  "Streamlined checkout process for faster customer service",
                  "Optimized inventory levels to prevent stockouts and overstock",
                  "Reduced administrative work with automated processes",
                  "Improved employee productivity with clear task management",
                  "Enhanced store security with detailed transaction logs",
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="w-5 h-5 mt-0.5 flex-shrink-0 text-emerald-500" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <h3 className="text-xl font-semibold mb-4">For Business Growth</h3>
              <ul className="space-y-3">
                {[
                  "Increased customer loyalty and repeat business",
                  "Data-driven insights for better purchasing decisions",
                  "Improved profit margins through efficient operations",
                  "Scalable solution that grows with your business",
                  "Competitive advantage with enhanced customer experience",
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
                <TabsTrigger value="hardware">Hardware</TabsTrigger>
              </TabsList>
              <TabsContent value="general" className="space-y-4">
                <div className="border-b pb-4">
                  <h3 className="text-xl font-semibold mb-2">How long does it take to implement the system?</h3>
                  <p className="text-gray-600">
                    Implementation typically takes 1-2 weeks for a standard setup. This includes software installation,
                    data import, configuration, and basic training for your staff.
                  </p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="text-xl font-semibold mb-2">Can I import my existing product database?</h3>
                  <p className="text-gray-600">
                    Yes, our software supports data import from various formats including Excel, CSV, and direct
                    migration from several other retail management systems.
                  </p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="text-xl font-semibold mb-2">Is training provided for my staff?</h3>
                  <p className="text-gray-600">
                    Yes, we provide comprehensive training for managers and staff. This includes both online and on-site
                    training options depending on your needs and package.
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
                  <h3 className="text-xl font-semibold mb-2">Can the system work without an internet connection?</h3>
                  <p className="text-gray-600">
                    Yes, our system includes offline functionality for the POS component, allowing you to continue
                    processing sales during internet outages. The system will automatically sync data when the
                    connection is restored.
                  </p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="text-xl font-semibold mb-2">
                    Can your software integrate with my e-commerce platform?
                  </h3>
                  <p className="text-gray-600">
                    Yes, our Professional and Enterprise plans include integration capabilities with popular e-commerce
                    platforms like Shopify, WooCommerce, and Magento, allowing synchronized inventory, orders, and
                    customer data.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="hardware" className="space-y-4">
                <div className="border-b pb-4">
                  <h3 className="text-xl font-semibold mb-2">What hardware is compatible with your software?</h3>
                  <p className="text-gray-600">
                    Our software is compatible with a wide range of retail hardware including barcode scanners, receipt
                    printers, cash drawers, and customer displays from major manufacturers. We can provide a
                    comprehensive compatibility list.
                  </p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="text-xl font-semibold mb-2">
                    Do you provide the necessary hardware for POS stations?
                  </h3>
                  <p className="text-gray-600">
                    Yes, we offer complete hardware packages including all necessary POS equipment. We can also work
                    with your existing hardware if it meets compatibility requirements.
                  </p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="text-xl font-semibold mb-2">Does your system support mobile POS devices?</h3>
                  <p className="text-gray-600">
                    Yes, our system supports mobile POS functionality on tablets and smartphones, allowing your staff to
                    process sales anywhere in the store, particularly useful during peak times or for curbside service.
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Retail Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Streamline your operations, enhance customer experience, and boost your bottom line with our comprehensive
            Retail Shop Management Software. Contact us today to schedule a demo.
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
