import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ServicesPage() {
  const services = [
    {
      id: "custom-software",
      title: "Custom Software Development",
      description: "Tailored software solutions designed to meet your specific business needs and requirements.",
      image: "/placeholder.svg?height=300&width=400",
      benefits: [
        "Tailored to your exact requirements",
        "Scalable and adaptable as your business grows",
        "Full ownership of the software",
        "Competitive advantage with unique solutions",
        "Long-term cost efficiency",
      ],
      link: "/services/custom-software",
    },
    {
      id: "mobile-app",
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android platforms.",
      image: "/placeholder.svg?height=300&width=400",
      benefits: [
        "Reach customers on their preferred devices",
        "Improve customer engagement and loyalty",
        "Create new revenue streams",
        "Enhance brand visibility",
        "Collect valuable user data",
      ],
      link: "/services/mobile-app",
    },
    {
      id: "web-development",
      title: "Web Development",
      description: "Responsive and user-friendly websites and web applications with modern technologies.",
      image: "/placeholder.svg?height=300&width=400",
      benefits: [
        "Establish a strong online presence",
        "Responsive design for all devices",
        "SEO-friendly architecture",
        "Fast loading speeds",
        "Secure and reliable performance",
      ],
      link: "/services/web-development",
    },
    {
      id: "ui-ux",
      title: "UI/UX Design",
      description: "Intuitive and engaging user interfaces that enhance user experience and satisfaction.",
      image: "/placeholder.svg?height=300&width=400",
      benefits: [
        "Improved user satisfaction and retention",
        "Reduced learning curve for users",
        "Higher conversion rates",
        "Consistent brand experience",
        "Data-driven design decisions",
      ],
      link: "/services/ui-ux",
    },
    {
      id: "ecommerce",
      title: "E-commerce Solutions",
      description: "Complete e-commerce platforms with payment gateways, inventory management, and more.",
      image: "/placeholder.svg?height=300&width=400",
      benefits: [
        "Expand your market reach globally",
        "24/7 sales capability",
        "Automated inventory management",
        "Secure payment processing",
        "Detailed sales analytics",
      ],
      link: "/services/ecommerce",
    },
    {
      id: "consulting",
      title: "IT Consulting",
      description: "Expert advice and guidance on technology strategy, implementation, and optimization.",
      image: "/placeholder.svg?height=300&width=400",
      benefits: [
        "Strategic technology roadmap",
        "Cost optimization",
        "Risk management",
        "Vendor selection assistance",
        "Technology stack recommendations",
      ],
      link: "/services/consulting",
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-white to-green-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-600 mb-8">
              We provide a comprehensive range of software development services to help businesses innovate and grow in
              the digital era.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-16">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              >
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-3">Key Benefits</h3>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-emerald-500 w-5 h-5 mt-1 flex-shrink-0"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link href={service.link}>
                    <Button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-md">
                      Learn More <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Development Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We follow a structured and transparent development process to ensure high-quality results and client
              satisfaction.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Discovery & Planning",
                description:
                  "We start by understanding your business needs, goals, and requirements to create a detailed project plan.",
              },
              {
                step: "2",
                title: "Design & Prototyping",
                description:
                  "Our designers create wireframes and prototypes to visualize the solution before development begins.",
              },
              {
                step: "3",
                title: "Development & Testing",
                description:
                  "Our developers build the solution using the latest technologies, with regular testing throughout the process.",
              },
              {
                step: "4",
                title: "Deployment & Support",
                description:
                  "We deploy the solution and provide ongoing support and maintenance to ensure optimal performance.",
              },
            ].map((process, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md relative">
                <div className="absolute -top-5 -left-5 w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold mb-3 mt-4">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technologies We Use</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We leverage the latest technologies and frameworks to deliver high-quality, scalable solutions.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              "React",
              "Angular",
              "Vue.js",
              "Node.js",
              "Python",
              "PHP",
              "Laravel",
              "Django",
              "Express",
              "React Native",
              "Flutter",
              "Swift",
              "Kotlin",
              "Java",
              "MySQL",
              "MongoDB",
              "PostgreSQL",
              "AWS",
            ].map((tech, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg text-center border border-gray-100">
                <div className="text-lg font-medium">{tech}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's work together to bring your ideas to life with our expert development services.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-white text-emerald-500 hover:bg-gray-100 px-6 py-2 rounded-md">Contact Us</Button>
            <Button variant="outline" className="border-white text-white hover:bg-emerald-600 px-6 py-2 rounded-md">
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
