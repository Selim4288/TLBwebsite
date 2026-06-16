import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Check, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProductTemplatePage() {
  // Replace this with actual product data for each specific product
  const product = {
    title: "Product Name",
    description: "Short product description.",
    longDescription: "Detailed product description that explains the product purpose, target users, and main benefits.",
    image: "/placeholder.svg?height=600&width=800",
    features: [
      {
        title: "Feature 1",
        description: "Description of feature 1.",
      },
      {
        title: "Feature 2",
        description: "Description of feature 2.",
      },
      {
        title: "Feature 3",
        description: "Description of feature 3.",
      },
      {
        title: "Feature 4",
        description: "Description of feature 4.",
      },
      {
        title: "Feature 5",
        description: "Description of feature 5.",
      },
      {
        title: "Feature 6",
        description: "Description of feature 6.",
      },
      {
        title: "Feature 7",
        description: "Description of feature 7.",
      },
      {
        title: "Feature 8",
        description: "Description of feature 8.",
      },
    ],
    pricing: [
      {
        plan: "Basic",
        price: "$XX",
        period: "per month",
        features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4", "Up to X Users", "Email Support"],
      },
      {
        plan: "Professional",
        price: "$XX",
        period: "per month",
        features: ["All Basic Features", "Feature 5", "Feature 6", "Feature 7", "Up to X Users", "Priority Support"],
      },
      {
        plan: "Enterprise",
        price: "$XX",
        period: "per month",
        features: [
          "All Professional Features",
          "Feature 8",
          "Feature 9",
          "Feature 10",
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
          "Testimonial quote about how the product helped the client solve problems and improve business outcomes.",
        author: "Client Name",
        position: "Position",
        company: "Company Name",
        avatar: "/placeholder.svg?height=80&width=80",
      },
      {
        quote: "Another testimonial quote highlighting different aspects of the product and its benefits.",
        author: "Another Client",
        position: "Position",
        company: "Company Name",
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
              <h3 className="text-xl font-semibold mb-4">For Business Operations</h3>
              <ul className="space-y-3">
                {[
                  "Benefit 1 related to operations",
                  "Benefit 2 related to operations",
                  "Benefit 3 related to operations",
                  "Benefit 4 related to operations",
                  "Benefit 5 related to operations",
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
                  "Benefit 1 related to growth",
                  "Benefit 2 related to growth",
                  "Benefit 3 related to growth",
                  "Benefit 4 related to growth",
                  "Benefit 5 related to growth",
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
                <TabsTrigger value="support">Support</TabsTrigger>
              </TabsList>
              <TabsContent value="general" className="space-y-4">
                <div className="border-b pb-4">
                  <h3 className="text-xl font-semibold mb-2">FAQ Question 1?</h3>
                  <p className="text-gray-600">Answer to FAQ question 1.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="text-xl font-semibold mb-2">FAQ Question 2?</h3>
                  <p className="text-gray-600">Answer to FAQ question 2.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="text-xl font-semibold mb-2">FAQ Question 3?</h3>
                  <p className="text-gray-600">Answer to FAQ question 3.</p>
                </div>
              </TabsContent>
              <TabsContent value="technical" className="space-y-4">
                <div className="border-b pb-4">
                  <h3 className="text-xl font-semibold mb-2">Technical Question 1?</h3>
                  <p className="text-gray-600">Answer to technical question 1.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="text-xl font-semibold mb-2">Technical Question 2?</h3>
                  <p className="text-gray-600">Answer to technical question 2.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="text-xl font-semibold mb-2">Technical Question 3?</h3>
                  <p className="text-gray-600">Answer to technical question 3.</p>
                </div>
              </TabsContent>
              <TabsContent value="support" className="space-y-4">
                <div className="border-b pb-4">
                  <h3 className="text-xl font-semibold mb-2">Support Question 1?</h3>
                  <p className="text-gray-600">Answer to support question 1.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="text-xl font-semibold mb-2">Support Question 2?</h3>
                  <p className="text-gray-600">Answer to support question 2.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="text-xl font-semibold mb-2">Support Question 3?</h3>
                  <p className="text-gray-600">Answer to support question 3.</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to learn how our solution can help you achieve your business goals.
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
