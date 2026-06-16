import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Users, Code, Zap, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// This would typically come from a database or API
const servicesData = {
  "custom-software": {
    title: "Custom Software Development",
    description: "Tailored software solutions designed to meet your specific business needs and requirements.",
    longDescription:
      "Our custom software development service delivers tailored solutions that address your unique business challenges. We work closely with you to understand your requirements and create software that streamlines operations, enhances productivity, and drives growth. Our experienced team uses the latest technologies and best practices to ensure your software is scalable, secure, and future-proof.",
    image: "/placeholder.svg?height=600&width=800",
    benefits: [
      {
        title: "Tailored to Your Needs",
        description: "Custom software is designed specifically for your business processes and requirements.",
      },
      {
        title: "Scalable Solutions",
        description: "Our software grows with your business, adapting to changing needs and increasing demands.",
      },
      {
        title: "Competitive Advantage",
        description: "Gain an edge over competitors with unique solutions that address your specific challenges.",
      },
      {
        title: "Integration Capabilities",
        description: "Seamlessly integrate with your existing systems and third-party applications.",
      },
      {
        title: "Long-term Cost Efficiency",
        description: "While initial investment may be higher, custom software offers better ROI over time.",
      },
    ],
    process: [
      {
        title: "Requirements Analysis",
        description: "We work with you to understand your business needs, goals, and technical requirements.",
      },
      {
        title: "Design & Architecture",
        description: "Our team creates detailed designs and architecture plans for your software solution.",
      },
      {
        title: "Development",
        description: "We develop your software using agile methodologies, with regular updates and feedback.",
      },
      {
        title: "Testing & QA",
        description: "Rigorous testing ensures your software is bug-free, secure, and performs optimally.",
      },
      {
        title: "Deployment",
        description: "We deploy your software to your preferred environment, ensuring a smooth transition.",
      },
      {
        title: "Maintenance & Support",
        description: "Ongoing support and maintenance keep your software running smoothly and up-to-date.",
      },
    ],
    technologies: [
      "JavaScript/TypeScript",
      "Python",
      "Java",
      "C#/.NET",
      "PHP",
      "React",
      "Angular",
      "Vue.js",
      "Node.js",
      "Django",
      "Laravel",
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "AWS",
      "Azure",
    ],
    caseStudies: [
      {
        title: "Enterprise Resource Planning System",
        client: "Manufacturing Company",
        description:
          "Developed a comprehensive ERP system that integrated inventory management, production planning, and financial reporting, resulting in a 30% increase in operational efficiency.",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        title: "Healthcare Management Platform",
        client: "Regional Hospital Network",
        description:
          "Created a custom healthcare management system that streamlined patient records, appointment scheduling, and billing processes, improving patient care and reducing administrative overhead by 25%.",
        image: "/placeholder.svg?height=400&width=600",
      },
    ],
    testimonials: [
      {
        quote:
          "The custom software developed by BDTask has transformed our business operations. Their team took the time to understand our unique needs and delivered a solution that exceeded our expectations.",
        author: "John Smith",
        position: "CTO",
        company: "Global Manufacturing Inc.",
        avatar: "/placeholder.svg?height=80&width=80",
      },
      {
        quote:
          "Working with BDTask was a seamless experience. Their expertise in custom software development helped us create a solution that has significantly improved our efficiency and customer satisfaction.",
        author: "Sarah Johnson",
        position: "Operations Director",
        company: "Healthcare Solutions Ltd.",
        avatar: "/placeholder.svg?height=80&width=80",
      },
    ],
  },
  "mobile-app": {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android platforms.",
    longDescription:
      "Our mobile app development service creates engaging, high-performance applications for iOS and Android platforms. Whether you need a native app for specific platform advantages or a cross-platform solution for broader reach, our team delivers mobile experiences that delight users and achieve your business objectives. We focus on intuitive design, seamless functionality, and optimal performance to ensure your app stands out in the crowded marketplace.",
    image: "/placeholder.svg?height=600&width=800",
    benefits: [
      {
        title: "Expanded Market Reach",
        description: "Reach customers on their preferred mobile devices, expanding your market presence.",
      },
      {
        title: "Enhanced Customer Engagement",
        description: "Provide a direct channel to engage with customers and build stronger relationships.",
      },
      {
        title: "Brand Reinforcement",
        description: "Strengthen your brand identity with a consistent and professional mobile presence.",
      },
      {
        title: "New Revenue Streams",
        description:
          "Create additional revenue opportunities through app purchases, subscriptions, or in-app advertising.",
      },
      {
        title: "Valuable User Data",
        description: "Collect insights on user behavior to inform business decisions and improvements.",
      },
    ],
    process: [
      {
        title: "Discovery & Strategy",
        description: "We define your app's goals, target audience, and key features to create a strategic roadmap.",
      },
      {
        title: "UI/UX Design",
        description: "Our designers create intuitive, engaging interfaces that provide exceptional user experiences.",
      },
      {
        title: "Development",
        description: "We build your app using the most appropriate technologies for your requirements and budget.",
      },
      {
        title: "Testing",
        description: "Comprehensive testing across devices and scenarios ensures your app works flawlessly.",
      },
      {
        title: "Deployment",
        description: "We handle the submission process to app stores and ensure your app meets all requirements.",
      },
      {
        title: "Post-Launch Support",
        description: "Ongoing maintenance, updates, and support keep your app running smoothly and evolving.",
      },
    ],
    technologies: [
      "Swift",
      "Objective-C",
      "Kotlin",
      "Java",
      "React Native",
      "Flutter",
      "Xamarin",
      "Firebase",
      "AWS Amplify",
      "GraphQL",
      "REST APIs",
      "SQLite",
      "Realm",
      "Core Data",
    ],
    caseStudies: [
      {
        title: "E-commerce Mobile App",
        client: "Retail Chain",
        description:
          "Developed a feature-rich e-commerce app that increased mobile sales by 45% and improved customer retention through personalized shopping experiences and push notifications.",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        title: "Fitness Tracking App",
        client: "Health & Wellness Company",
        description:
          "Created a comprehensive fitness tracking app with workout plans, progress monitoring, and social features that achieved over 100,000 downloads in the first three months.",
        image: "/placeholder.svg?height=400&width=600",
      },
    ],
    testimonials: [
      {
        quote:
          "BDTask delivered an exceptional mobile app that has significantly boosted our customer engagement and sales. Their attention to detail and user experience expertise made all the difference.",
        author: "Michael Brown",
        position: "Marketing Director",
        company: "Retail Innovations",
        avatar: "/placeholder.svg?height=80&width=80",
      },
      {
        quote:
          "The app developed by BDTask exceeded our expectations in terms of performance and user adoption. Their team was responsive, professional, and truly committed to our success.",
        author: "Lisa Chen",
        position: "Product Manager",
        company: "FitLife Inc.",
        avatar: "/placeholder.svg?height=80&width=80",
      },
    ],
  },
  // Add more services with similar structure
  "web-development": {
    title: "Web Development",
    description: "Responsive and user-friendly websites and web applications with modern technologies.",
    longDescription:
      "Our web development service creates powerful, responsive websites and web applications that deliver exceptional user experiences across all devices. From corporate websites to complex web applications, our team combines cutting-edge technologies with creative design to build solutions that drive your business forward. We focus on performance, security, and scalability to ensure your web presence meets both current needs and future growth.",
    image: "/placeholder.svg?height=600&width=800",
    benefits: [
      {
        title: "Strong Online Presence",
        description: "Establish a professional and effective online presence that represents your brand.",
      },
      {
        title: "Responsive Design",
        description: "Ensure optimal viewing and interaction experience across all devices and screen sizes.",
      },
      {
        title: "SEO-Friendly Architecture",
        description: "Build with search engine optimization in mind to improve visibility and rankings.",
      },
      {
        title: "Fast Loading Speeds",
        description:
          "Optimize performance for quick loading times, reducing bounce rates and improving user satisfaction.",
      },
      {
        title: "Scalable Solutions",
        description: "Create web solutions that can grow and evolve with your business needs.",
      },
    ],
    process: [
      {
        title: "Planning & Strategy",
        description:
          "We define your website goals, target audience, and content strategy to create a solid foundation.",
      },
      {
        title: "Design",
        description: "Our designers create visually appealing layouts that align with your brand and engage users.",
      },
      {
        title: "Development",
        description: "We build your website or web application using modern frameworks and best practices.",
      },
      {
        title: "Content Integration",
        description: "We integrate your content, ensuring it's presented effectively and optimized for search engines.",
      },
      {
        title: "Testing",
        description:
          "Comprehensive testing across browsers and devices ensures consistent performance and functionality.",
      },
      {
        title: "Launch & Maintenance",
        description: "We deploy your website and provide ongoing support to keep it secure and up-to-date.",
      },
    ],
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Angular",
      "Vue.js",
      "Next.js",
      "Node.js",
      "Express",
      "PHP",
      "Laravel",
      "WordPress",
      "Shopify",
      "WooCommerce",
    ],
    caseStudies: [
      {
        title: "Corporate Website Redesign",
        client: "Financial Services Firm",
        description:
          "Redesigned and developed a modern, responsive website that improved user engagement by 60% and increased lead generation by 40% through optimized conversion paths.",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        title: "E-learning Platform",
        client: "Educational Institution",
        description:
          "Built a comprehensive e-learning platform with course management, student tracking, and interactive learning tools that served over 5,000 students in its first year.",
        image: "/placeholder.svg?height=400&width=600",
      },
    ],
    testimonials: [
      {
        quote:
          "BDTask transformed our outdated website into a modern, user-friendly platform that has significantly improved our online presence and customer engagement.",
        author: "Robert Johnson",
        position: "Marketing Manager",
        company: "Financial Solutions Group",
        avatar: "/placeholder.svg?height=80&width=80",
      },
      {
        quote:
          "The web application developed by BDTask has revolutionized how we deliver educational content. Their technical expertise and attention to user experience were exceptional.",
        author: "Emily Wong",
        position: "Director of Digital Learning",
        company: "Global Education Institute",
        avatar: "/placeholder.svg?height=80&width=80",
      },
    ],
  },
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = servicesData[params.slug as keyof typeof servicesData]

  if (!service) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
        <p className="mb-8">The service you are looking for does not exist.</p>
        <Link href="/services">
          <Button>
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
          </Button>
        </Link>
      </div>
    )
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-white to-green-50 py-16">
        <div className="container mx-auto px-4">
          <Link href="/services" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
          </Link>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.title}</h1>
              <p className="text-xl text-gray-600 mb-8">{service.longDescription}</p>
              <div className="flex flex-wrap gap-4">
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
            <div className="rounded-lg overflow-hidden shadow-xl">
              <Image
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Users className="h-10 w-10 text-emerald-500" />,
                title: "Expert Team",
                description:
                  "Our team consists of experienced professionals with deep expertise in their respective fields.",
              },
              {
                icon: <Code className="h-10 w-10 text-emerald-500" />,
                title: "Quality Code",
                description:
                  "We follow industry best practices and coding standards to ensure high-quality, maintainable code.",
              },
              {
                icon: <Zap className="h-10 w-10 text-emerald-500" />,
                title: "Fast Delivery",
                description: "Our agile development process ensures timely delivery without compromising on quality.",
              },
              {
                icon: <Award className="h-10 w-10 text-emerald-500" />,
                title: "Proven Results",
                description:
                  "We have a track record of delivering successful projects that meet or exceed client expectations.",
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Process</h2>
          <div className="grid gap-8">
            {service.process.map((step, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-4 items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center text-xl font-bold">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Technologies We Use</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {service.technologies.map((tech, index) => (
              <div key={index} className="bg-white p-4 rounded-lg text-center border border-gray-100">
                <div className="text-lg font-medium">{tech}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Case Studies</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {service.caseStudies.map((caseStudy, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
                <div className="h-64 overflow-hidden">
                  <Image
                    src={caseStudy.image || "/placeholder.svg"}
                    alt={caseStudy.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{caseStudy.title}</h3>
                  <p className="text-emerald-600 font-medium mb-4">Client: {caseStudy.client}</p>
                  <p className="text-gray-600">{caseStudy.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">What Our Clients Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {service.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            <Tabs defaultValue="general" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="general">General</TabsTrigger>
                <TabsTrigger value="process">Process</TabsTrigger>
                <TabsTrigger value="technical">Technical</TabsTrigger>
              </TabsList>
              <TabsContent value="general" className="space-y-4">
                <div className="border-b pb-4">
                  <h3 className="text-xl font-semibold mb-2">How much does your service cost?</h3>
                  <p className="text-gray-600">
                    Our pricing depends on the scope, complexity, and requirements of your project. We provide detailed
                    quotes after an initial consultation to understand your needs.
                  </p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="text-xl font-semibold mb-2">How long does a typical project take?</h3>
                  <p className="text-gray-600">
                    Project timelines vary based on complexity and requirements. Simple projects may take a few weeks,
                    while more complex ones can take several months. We provide estimated timelines during the planning
                    phase.
                  </p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="text-xl font-semibold mb-2">Do you provide support after the project is completed?</h3>
                  <p className="text-gray-600">
                    Yes, we offer ongoing support and maintenance services to ensure your solution continues to perform
                    optimally. We have various support packages to meet different needs.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="process" className="space-y-4">
                <div className="border-b pb-4">
                  <h3 className="text-xl font-semibold mb-2">What is your development methodology?</h3>
                  <p className="text-gray-600">
                    We primarily use Agile development methodologies, which allow for iterative development, regular
                    feedback, and flexibility to adapt to changing requirements.
                  </p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="text-xl font-semibold mb-2">How do you handle project management?</h3>
                  <p className="text-gray-600">
                    Each project is assigned a dedicated project manager who serves as your main point of contact and
                    ensures the project stays on track, within budget, and meets all requirements.
                  </p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="text-xl font-semibold mb-2">
                    How involved will I need to be during the development process?
                  </h3>
                  <p className="text-gray-600">
                    We encourage client involvement throughout the process, especially during the planning, design
                    review, and testing phases. Regular communication ensures the final product meets your expectations.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="technical" className="space-y-4">
                <div className="border-b pb-4">
                  <h3 className="text-xl font-semibold mb-2">What technologies do you specialize in?</h3>
                  <p className="text-gray-600">
                    We specialize in a wide range of technologies including JavaScript frameworks (React, Angular,
                    Vue.js), backend technologies (Node.js, Python, PHP), mobile development (React Native, Flutter),
                    and more.
                  </p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="text-xl font-semibold mb-2">How do you ensure the quality of your code?</h3>
                  <p className="text-gray-600">
                    We follow industry best practices, conduct regular code reviews, and implement comprehensive testing
                    strategies including unit testing, integration testing, and user acceptance testing.
                  </p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="text-xl font-semibold mb-2">Can you integrate with existing systems?</h3>
                  <p className="text-gray-600">
                    Yes, we have extensive experience integrating with various third-party systems and APIs. We can work
                    with your existing infrastructure to create seamless integrations.
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's work together to create a solution that meets your business needs and drives growth.
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
