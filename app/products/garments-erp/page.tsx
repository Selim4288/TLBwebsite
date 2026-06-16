import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Check, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function GarmentsERPPage() {
  const product = {
    title: "Garments ERP Software",
    description: "Specialized ERP solution for garment manufacturing and textile industries.",
    longDescription:
      "Our Garments ERP Software is a comprehensive solution specifically designed for the textile and garment manufacturing industry. It addresses the unique challenges of apparel production, from design and material procurement to production planning and quality control. This integrated platform connects all departments, streamlines workflows, optimizes resources, and provides real-time visibility into your operations, helping you reduce costs, improve quality, and deliver products on time.",
    image: "/placeholder.svg?height=600&width=800",
    features: [
      {
        title: "Production Planning",
        description:
          "Advanced planning tools for scheduling, capacity management, and production timeline optimization.",
      },
      {
        title: "Material Management",
        description: "Complete fabric and trim inventory management with consumption tracking and wastage control.",
      },
      {
        title: "Quality Control",
        description: "Comprehensive quality assurance tools for inspections at various production stages.",
      },
      {
        title: "Order Management",
        description: "End-to-end order processing from sample development to final product delivery.",
      },
      {
        title: "Cost Calculation",
        description: "Detailed costing modules for accurate price quotations and profit margin analysis.",
      },
      {
        title: "Pattern & Design Management",
        description: "Digital pattern and design libraries with version control and specification management.",
      },
      {
        title: "Production Tracking",
        description: "Real-time monitoring of work-in-progress across cutting, sewing, and finishing operations.",
      },
      {
        title: "Compliance Management",
        description: "Tools to ensure adherence to international standards and buyer requirements.",
      },
    ],
    pricing: [
      {
        plan: "Basic",
        price: "$299",
        period: "per month",
        features: [
          "Production Planning",
          "Basic Material Management",
          "Order Processing",
          "Simple Cost Calculation",
          "Up to 10 Users",
          "Email Support",
        ],
      },
      {
        plan: "Professional",
        price: "$599",
        period: "per month",
        features: [
          "All Basic Features",
          "Advanced Material Management",
          "Quality Control Module",
          "Pattern & Design Library",
          "Production Floor Tracking",
          "Up to 50 Users",
          "Priority Support",
        ],
      },
      {
        plan: "Enterprise",
        price: "$999",
        period: "per month",
        features: [
          "All Professional Features",
          "Multi-factory Support",
          "Advanced Compliance Management",
          "Comprehensive Analytics",
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
          "This Garments ERP has transformed our production processes. We've reduced lead times by 30% and material wastage by 25%. The real-time visibility into our production status has been invaluable for meeting client deadlines.",
        author: "Robert Chen",
        position: "Operations Director",
        company: "Global Apparel Manufacturing Ltd.",
        avatar: "/placeholder.svg?height=80&width=80",
      },
      {
        quote:
          "The cost calculation feature alone has saved us thousands of dollars by providing accurate quotations. The quality control module has helped us significantly reduce defects and improve our reputation with buyers.",
        author: "Sarah Khan",
        position: "Production Manager",
        company: "Fashion Textiles International",
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
              <h3 className="text-xl font-semibold mb-4">For Production Efficiency</h3>
              <ul className="space-y-3">
                {[
                  "Reduced production lead times through optimized planning",
                  "Minimized material wastage with accurate consumption tracking",
                  "Improved capacity utilization and resource allocation",
                  "Enhanced quality control with fewer defects and rejections",
                  "Streamlined communications between departments",
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
                  "Accurate cost calculations for better pricing decisions",
                  "Improved on-time delivery and customer satisfaction",
                  "Data-driven decision making with comprehensive analytics",
                  "Enhanced compliance with international standards",
                  "Scalable solution that grows with your business",
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
                <TabsTrigger value="implementation">Implementation</TabsTrigger>
              </TabsList>
              <TabsContent value="general" className="space-y-4">
                <div className="border-b pb-4">
                  <h3 className="text-xl font-semibold mb-2">How is this different from general ERP solutions?</h3>
                  <p className="text-gray-600">
                    Our Garments ERP is specifically designed for the unique workflows and requirements of the apparel
                    manufacturing industry. It includes specialized features like fabric consumption calculations,
                    pattern management, and garment-specific quality control that generic ERPs don't offer.
                  </p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="text-xl font-semibold mb-2">Can it handle multiple production facilities?</h3>
                  <p className="text-gray-600">
                    Yes, our Enterprise plan supports multi-factory operations with centralized control and reporting,
                    allowing you to manage and coordinate production across multiple locations.
                  </p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="text-xl font-semibold mb-2">Does it support international compliance standards?</h3>
                  <p className="text-gray-600">
                    Yes, our software includes compliance management features to help you meet international standards
                    like WRAP, BSCI, SEDEX, and buyer-specific requirements for ethical and sustainable production.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="technical" className="space-y-4">
                <div className="border-b pb-4">
                  <h3 className="text-xl font-semibold mb-2">Can the system be accessed from the production floor?</h3>
                  <p className="text-gray-600">
                    Yes, our system offers mobile access for production floor staff, allowing real-time data entry and
                    monitoring through tablets or smartphones, with a simplified interface designed for factory floor
                    use.
                  </p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="text-xl font-semibold mb-2">Does it integrate with accounting software?</h3>
                  <p className="text-gray-600">
                    Yes, our Enterprise plan includes API integration capabilities with popular accounting software,
                    allowing seamless flow of financial data between systems.
                  </p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="text-xl font-semibold mb-2">
                    Can it handle different units of measurement for materials?
                  </h3>
                  <p className="text-gray-600">
                    Yes, our system supports multiple units of measurement and automatic conversions between them,
                    accommodating different standards for fabrics, trims, and finished goods.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="implementation" className="space-y-4">
                <div className="border-b pb-4">
                  <h3 className="text-xl font-semibold mb-2">How long does implementation typically take?</h3>
                  <p className="text-gray-600">
                    Implementation typically takes 4-8 weeks depending on the size of your operation and complexity of
                    your requirements. This includes system setup, data migration, configuration, and training.
                  </p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="text-xl font-semibold mb-2">Do you provide training for different departments?</h3>
                  <p className="text-gray-600">
                    Yes, we provide role-specific training for different departments including merchandising,
                    production, quality control, and warehouse management, ensuring all users can effectively use the
                    system.
                  </p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="text-xl font-semibold mb-2">Can you import data from our existing systems?</h3>
                  <p className="text-gray-600">
                    Yes, we provide comprehensive data migration services from various systems including Excel sheets,
                    legacy ERP systems, and other production management software to ensure a smooth transition.
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Optimize Your Garment Production?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Transform your apparel manufacturing with our specialized Garments ERP Software. Contact us today to
            schedule a demo tailored to your factory's needs.
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
