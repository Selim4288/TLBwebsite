import Image from "next/image"
import Link from "next/link"
import { Check, ArrowUpRight, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ServicesOverviewPage() {
  const services = [
    {
      id: "software-development",
      title: "Software Development",
      description:
        "Custom software solutions tailored to your business needs, from enterprise applications to specialized industry software.",
      image: "/placeholder.svg?height=600&width=800&text=Software%20Development",
      features: [
        "Custom software development",
        "Enterprise resource planning (ERP)",
        "Customer relationship management (CRM)",
        "Inventory management systems",
        "Human resource management systems",
        "Point of sale (POS) systems",
      ],
      benefits: [
        "Streamline business operations",
        "Increase productivity and efficiency",
        "Reduce operational costs",
        "Improve decision-making with data insights",
        "Scale your business with custom solutions",
      ],
    },
    {
      id: "website-design-development",
      title: "Website Design & Development",
      description:
        "Professional website design and development services that create stunning, functional, and user-friendly websites for businesses of all sizes.",
      image: "/placeholder.svg?height=600&width=800&text=Website%20Design",
      features: [
        "Responsive web design",
        "Content management systems (WordPress, Drupal)",
        "E-commerce website development",
        "Landing page design",
        "Website maintenance and support",
        "Web application development",
      ],
      benefits: [
        "Establish a professional online presence",
        "Improve user experience and engagement",
        "Increase conversion rates",
        "Enhance brand credibility",
        "Reach customers across all devices",
      ],
    },
    {
      id: "mobile-app-development",
      title: "Mobile App Development",
      description:
        "Cutting-edge mobile applications for iOS and Android platforms that engage users and drive business growth.",
      image: "/placeholder.svg?height=600&width=800&text=Mobile%20App%20Development",
      features: [
        "Native iOS app development",
        "Native Android app development",
        "Cross-platform app development",
        "Progressive web applications (PWAs)",
        "App maintenance and support",
        "App store optimization",
      ],
      benefits: [
        "Reach customers on their preferred devices",
        "Improve customer engagement and loyalty",
        "Create new revenue streams",
        "Enhance brand visibility",
        "Collect valuable user data and insights",
      ],
    },
    {
      id: "graphic-design",
      title: "Graphic Design",
      description:
        "Creative graphic design services that communicate your brand message effectively and leave a lasting impression on your audience.",
      image: "/placeholder.svg?height=600&width=800&text=Graphic%20Design",
      features: [
        "Logo design and branding",
        "Print design (brochures, business cards, flyers)",
        "Social media graphics",
        "Banner and advertisement design",
        "Packaging design",
        "Infographic design",
      ],
      benefits: [
        "Establish a strong brand identity",
        "Communicate your message visually",
        "Stand out from competitors",
        "Create consistent brand materials",
        "Enhance marketing effectiveness",
      ],
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing",
      description:
        "Comprehensive digital marketing strategies that increase your online visibility, drive traffic, and generate leads for your business.",
      image: "/placeholder.svg?height=600&width=800&text=Digital%20Marketing",
      features: [
        "Search engine optimization (SEO)",
        "Pay-per-click (PPC) advertising",
        "Social media marketing",
        "Email marketing campaigns",
        "Content marketing",
        "Analytics and reporting",
      ],
      benefits: [
        "Increase website traffic and visibility",
        "Generate qualified leads",
        "Improve conversion rates",
        "Build brand awareness",
        "Measure and optimize marketing ROI",
      ],
    },
    {
      id: "ecommerce-website",
      title: "E-commerce Website",
      description:
        "Powerful e-commerce solutions that help you sell products and services online with secure payment processing and inventory management.",
      image: "/placeholder.svg?height=600&width=800&text=E-commerce%20Website",
      features: [
        "Custom e-commerce development",
        "Shopping cart and checkout optimization",
        "Payment gateway integration",
        "Inventory management",
        "Order processing and fulfillment",
        "Mobile-responsive e-commerce",
      ],
      benefits: [
        "Sell products 24/7 without geographical limitations",
        "Reduce operational costs compared to physical stores",
        "Scale your business more easily",
        "Collect customer data for marketing",
        "Provide a convenient shopping experience",
      ],
    },
    {
      id: "domain-hosting",
      title: "Domain & Hosting Services",
      description:
        "Reliable domain registration and web hosting services that provide a solid foundation for your online presence.",
      image: "/placeholder.svg?height=600&width=800&text=Domain%20and%20Hosting",
      features: [
        "Domain name registration and management",
        "Shared hosting plans",
        "VPS and dedicated server hosting",
        "Cloud hosting solutions",
        "Email hosting services",
        "SSL certificate installation",
      ],
      benefits: [
        "Establish a professional web address",
        "Ensure website reliability and uptime",
        "Scale hosting resources as your business grows",
        "Secure your website with SSL",
        "Get technical support when you need it",
      ],
    },
    {
      id: "local-seo",
      title: "Affordable Local SEO Services",
      description:
        "Targeted local SEO strategies that help your business appear in local search results and attract nearby customers.",
      image: "/placeholder.svg?height=600&width=800&text=Local%20SEO",
      features: [
        "Google My Business optimization",
        "Local keyword research and targeting",
        "Citation building and management",
        "Local link building",
        "Review management",
        "Local content creation",
      ],
      benefits: [
        "Increase visibility in local search results",
        "Drive foot traffic to physical locations",
        "Build trust with local customers",
        "Compete effectively in your local market",
        "Improve conversion rates for local searches",
      ],
    },
    {
      id: "it-network-infrastructure",
      title: "Buildings IT Network Infrastructure Supply and Setup",
      description:
        "Comprehensive IT network infrastructure solutions for buildings, ensuring reliable connectivity and performance.",
      image: "/placeholder.svg?height=600&width=800&text=IT%20Network%20Infrastructure",
      features: [
        "Network design and planning",
        "Cabling installation and management",
        "Wireless network setup",
        "Server room design and implementation",
        "Network security implementation",
        "Ongoing maintenance and support",
      ],
      benefits: [
        "Ensure reliable connectivity throughout your building",
        "Improve network performance and speed",
        "Enhance security and data protection",
        "Scale your network as your business grows",
        "Reduce downtime and technical issues",
      ],
    },
    {
      id: "it-products-supply",
      title: "Public and Private Organizations IT Products Supply and Service",
      description:
        "Comprehensive IT product supply and service solutions for public and private organizations of all sizes.",
      image: "/placeholder.svg?height=600&width=800&text=IT%20Products%20Supply",
      features: [
        "Hardware procurement and supply",
        "Software licensing and management",
        "IT equipment installation and setup",
        "Technical support and maintenance",
        "IT asset management",
        "Technology consulting and planning",
      ],
      benefits: [
        "Access to quality IT products at competitive prices",
        "Simplified procurement process",
        "Expert installation and configuration",
        "Ongoing technical support",
        "Strategic technology planning for future needs",
      ],
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-white to-green-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-600 mb-8">
              Comprehensive IT and digital solutions to help your business thrive in the digital era.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-md">
                Get Started
              </Button>
              <Button
                variant="outline"
                className="border-emerald-500 text-emerald-500 hover:bg-emerald-50 px-6 py-2 rounded-md"
              >
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service List Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive IT and digital solutions tailored to meet your business needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Software Development",
                icon: "💻",
                description:
                  "Custom software solutions tailored to your business needs, from enterprise applications to specialized industry software.",
                link: "#software-development",
              },
              {
                title: "Website Design & Development",
                icon: "🌐",
                description:
                  "Professional website design and development services that create stunning, functional, and user-friendly websites.",
                link: "#website-design-development",
              },
              {
                title: "Mobile App Development",
                icon: "📱",
                description:
                  "Cutting-edge mobile applications for iOS and Android platforms that engage users and drive business growth.",
                link: "#mobile-app-development",
              },
              {
                title: "Graphic Design",
                icon: "🎨",
                description:
                  "Creative graphic design services that communicate your brand message effectively and leave a lasting impression.",
                link: "#graphic-design",
              },
              {
                title: "Digital Marketing",
                icon: "📈",
                description:
                  "Comprehensive digital marketing strategies that increase your online visibility, drive traffic, and generate leads.",
                link: "#digital-marketing",
              },
              {
                title: "E-commerce Website",
                icon: "🛒",
                description:
                  "Powerful e-commerce solutions that help you sell products and services online with secure payment processing.",
                link: "#ecommerce-website",
              },
              {
                title: "Domain & Hosting Services",
                icon: "🔌",
                description:
                  "Reliable domain registration and web hosting services that provide a solid foundation for your online presence.",
                link: "#domain-hosting",
              },
              {
                title: "Affordable Local SEO Services",
                icon: "🔍",
                description:
                  "Targeted local SEO strategies that help your business appear in local search results and attract nearby customers.",
                link: "#local-seo",
              },
              {
                title: "Buildings IT Network Infrastructure",
                icon: "🏢",
                description:
                  "Comprehensive IT network infrastructure solutions for buildings, ensuring reliable connectivity and performance.",
                link: "#it-network-infrastructure",
              },
              {
                title: "IT Products Supply and Service",
                icon: "🖥️",
                description:
                  "Comprehensive IT product supply and service solutions for public and private organizations of all sizes.",
                link: "#it-products-supply",
              },
            ].map((service, index) => (
              <a
                key={index}
                href={service.link}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow flex flex-col h-full"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>
                <div className="flex items-center text-emerald-500 font-medium">
                  <span>Learn More</span>
                  <ArrowUpRight className="w-4 h-4 ml-1" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Comprehensive Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a wide range of IT and digital services to help businesses of all sizes establish their online
              presence, optimize operations, and drive growth.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
            {services.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="bg-white p-4 rounded-lg text-center border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-lg font-medium text-emerald-600">{service.title}</div>
              </a>
            ))}
          </div>

          {/* Individual Service Sections */}
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`py-16 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"} scroll-mt-20`}
            >
              <div className="container mx-auto px-4">
                <div className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8`}>
                  <div className="lg:w-1/2">
                    <div className="rounded-lg overflow-hidden shadow-lg">
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        width={800}
                        height={600}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                  <div className="lg:w-1/2">
                    <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                    <p className="text-gray-600 mb-6">{service.description}</p>

                    <div className="mb-6">
                      <h3 className="text-xl font-semibold mb-3">Key Features</h3>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2">
                            <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-xl font-semibold mb-3">Benefits</h3>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start gap-2">
                            <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">Learn More</Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose BDTask</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're committed to delivering exceptional service and results for our clients.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Expertise & Experience",
                description: "Our team brings years of experience and deep expertise across all our service areas.",
                image: "/placeholder.svg?height=300&width=400&text=Expertise",
              },
              {
                title: "Custom Solutions",
                description: "We create tailored solutions that address your specific business challenges and goals.",
                image: "/placeholder.svg?height=300&width=400&text=Custom%20Solutions",
              },
              {
                title: "Quality Assurance",
                description: "We maintain rigorous quality standards throughout our development and delivery process.",
                image: "/placeholder.svg?height=300&width=400&text=Quality%20Assurance",
              },
              {
                title: "Ongoing Support",
                description:
                  "We provide reliable support and maintenance to ensure your solutions continue to perform optimally.",
                image: "/placeholder.svg?height=300&width=400&text=Ongoing%20Support",
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4 h-48 overflow-hidden rounded-lg">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We follow a structured approach to ensure successful delivery of all our services.
            </p>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-emerald-200 -translate-y-1/2 z-0"></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {[
                {
                  number: "01",
                  title: "Discovery",
                  description:
                    "We start by understanding your business, goals, and requirements to create a tailored solution.",
                  image: "/placeholder.svg?height=300&width=400&text=Discovery",
                },
                {
                  number: "02",
                  title: "Planning",
                  description:
                    "We develop a detailed plan outlining the scope, timeline, and deliverables for your project.",
                  image: "/placeholder.svg?height=300&width=400&text=Planning",
                },
                {
                  number: "03",
                  title: "Execution",
                  description:
                    "Our team implements the solution according to the plan, with regular updates and feedback.",
                  image: "/placeholder.svg?height=300&width=400&text=Execution",
                },
                {
                  number: "04",
                  title: "Support",
                  description:
                    "We provide ongoing support and maintenance to ensure your solution continues to perform optimally.",
                  image: "/placeholder.svg?height=300&width=400&text=Support",
                },
              ].map((step, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md relative">
                  <div className="absolute -top-5 -left-5 w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center text-xl font-bold">
                    {step.number}
                  </div>
                  <div className="mb-4 h-40 overflow-hidden rounded-lg">
                    <Image
                      src={step.image || "/placeholder.svg"}
                      alt={step.title}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide our services to businesses across various industries, tailoring our solutions to meet
              industry-specific needs.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: "Retail & E-commerce", icon: "🛍️" },
              { name: "Healthcare", icon: "🏥" },
              { name: "Finance & Banking", icon: "💰" },
              { name: "Education", icon: "🎓" },
              { name: "Manufacturing", icon: "🏭" },
              { name: "Logistics & Transportation", icon: "🚚" },
              { name: "Real Estate", icon: "🏢" },
              { name: "Hospitality & Tourism", icon: "🏨" },
              { name: "Government & Public Sector", icon: "🏛️" },
              { name: "Technology", icon: "💻" },
              { name: "Professional Services", icon: "👔" },
              { name: "Non-Profit", icon: "🤝" },
            ].map((industry, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl mb-3">{industry.icon}</div>
                <h3 className="text-lg font-semibold">{industry.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Case Studies</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore how our services have helped businesses across different industries achieve their goals.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-commerce Platform for Retail Chain",
                category: "E-commerce Website",
                image: "/placeholder.svg?height=300&width=400&text=E-commerce%20Case%20Study",
                description:
                  "Developed a comprehensive e-commerce platform that increased online sales by 150% in the first year.",
              },
              {
                title: "Mobile App for Healthcare Provider",
                category: "Mobile App Development",
                image: "/placeholder.svg?height=300&width=400&text=Healthcare%20App",
                description: "Created a patient management app that improved appointment scheduling efficiency by 40%.",
              },
              {
                title: "IT Infrastructure for Corporate Headquarters",
                category: "IT Network Infrastructure",
                image: "/placeholder.svg?height=300&width=400&text=IT%20Infrastructure",
                description: "Designed and implemented a scalable network infrastructure that reduced downtime by 99%.",
              },
              {
                title: "Digital Marketing Campaign for Local Business",
                category: "Digital Marketing",
                image: "/placeholder.svg?height=300&width=400&text=Digital%20Marketing",
                description: "Executed a targeted digital marketing strategy that increased qualified leads by 200%.",
              },
              {
                title: "Custom ERP for Manufacturing Company",
                category: "Software Development",
                image: "/placeholder.svg?height=300&width=400&text=ERP%20System",
                description: "Developed a custom ERP system that streamlined operations and reduced costs by 25%.",
              },
              {
                title: "Brand Identity for Tech Startup",
                category: "Graphic Design",
                image: "/placeholder.svg?height=300&width=400&text=Brand%20Identity",
                description:
                  "Created a comprehensive brand identity that helped secure $2M in venture capital funding.",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-0 left-0 bg-emerald-500 text-white px-3 py-1 text-sm">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <Link
                    href="/case-studies"
                    className="text-emerald-500 font-medium flex items-center gap-1 hover:underline"
                  >
                    Read Case Study <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button
              variant="outline"
              className="border-emerald-500 text-emerald-500 hover:bg-emerald-50 px-6 py-2 rounded-md"
            >
              View All Case Studies
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from our satisfied clients about their experience working with BDTask.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "BDTask delivered an exceptional e-commerce platform that has significantly improved our online sales. Their team was professional, responsive, and truly understood our needs.",
                author: "John Smith",
                position: "CEO",
                company: "Retail Solutions Inc.",
                avatar: "/placeholder.svg?height=80&width=80",
                image: "/placeholder.svg?height=300&width=400&text=Retail%20Solutions",
              },
              {
                quote:
                  "The mobile app developed by BDTask exceeded our expectations in terms of design, functionality, and user experience. They were a pleasure to work with from start to finish.",
                author: "Sarah Johnson",
                position: "Marketing Director",
                company: "Healthcare Providers",
                avatar: "/placeholder.svg?height=80&width=80",
                image: "/placeholder.svg?height=300&width=400&text=Healthcare%20App",
              },
              {
                quote:
                  "We've been working with BDTask for over three years now, and they continue to impress us with their technical expertise, proactive approach, and commitment to quality.",
                author: "Michael Chen",
                position: "CTO",
                company: "FinTech Innovations",
                avatar: "/placeholder.svg?height=80&width=80",
                image: "/placeholder.svg?height=300&width=400&text=FinTech%20Dashboard",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-100 overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={`${testimonial.company} Project`}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-0.5 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="text-yellow-400"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.author}
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <div>
                      <h4 className="font-semibold">{testimonial.author}</h4>
                      <p className="text-sm text-gray-600">
                        {testimonial.position}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our services, process, and engagement models.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "What types of businesses do you work with?",
                  answer:
                    "We work with businesses of all sizes across various industries, from startups to large enterprises. Our services are tailored to meet the specific needs and goals of each client, regardless of their size or industry.",
                },
                {
                  question: "How long does it take to complete a project?",
                  answer:
                    "Project timelines vary based on the scope, complexity, and requirements. A simple website might take 2-4 weeks, while a complex custom software solution could take several months. We provide detailed timelines during the planning phase and keep you updated throughout the project.",
                },
                {
                  question: "What is your pricing structure?",
                  answer:
                    "Our pricing is based on the scope and requirements of each project. We offer flexible pricing models including fixed-price for well-defined projects, time and materials for projects with evolving requirements, and retainer arrangements for ongoing services. We provide detailed quotes after understanding your specific needs.",
                },
                {
                  question: "Do you provide ongoing support after project completion?",
                  answer:
                    "Yes, we offer various support and maintenance packages to ensure your digital assets continue to perform optimally after launch. These include technical support, security updates, content updates, performance monitoring, and feature enhancements based on your needs.",
                },
                {
                  question: "How do you ensure the quality of your deliverables?",
                  answer:
                    "We implement a comprehensive quality assurance process that includes thorough testing, code reviews, and client feedback at various stages of the project. Our team follows industry best practices and standards to ensure high-quality, reliable, and secure solutions.",
                },
                {
                  question: "Can you work with our existing systems and technologies?",
                  answer:
                    "Yes, we have experience integrating with various existing systems and technologies. Our team can assess your current infrastructure and recommend the best approach for integration or migration, ensuring a seamless transition and minimal disruption to your operations.",
                },
              ].map((faq, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-emerald-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your project requirements and how our services can help your business grow.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-white text-emerald-500 hover:bg-gray-100 px-6 py-2 rounded-md">Contact Us</Button>
            <Button variant="outline" className="border-white text-white hover:bg-emerald-600 px-6 py-2 rounded-md">
              Schedule a Consultation
            </Button>
          </div>
          <div className="mt-8 flex justify-center items-center gap-2">
            <Clock className="h-5 w-5" />
            <span>Response time: Within 24 hours</span>
          </div>
        </div>
      </section>
    </div>
  )
}
