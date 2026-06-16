import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check, Users, Code, Zap, Award, Clock, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function OurServicesPage() {
  const serviceCategories = [
    {
      title: "Software Development",
      description:
        "We create custom software solutions tailored to your specific business needs, from enterprise applications to specialized industry software.",
      services: [
        {
          title: "Custom Software Development",
          description:
            "Tailored software solutions designed to meet your specific business needs and requirements. Our experienced team works closely with you to understand your challenges and create software that streamlines operations, enhances productivity, and drives growth.",
          icon: "💻",
          features: [
            "Requirements analysis and planning",
            "Custom architecture design",
            "Agile development methodology",
            "Quality assurance and testing",
            "Deployment and maintenance support",
          ],
        },
        {
          title: "Enterprise Resource Planning (ERP)",
          description:
            "Comprehensive ERP solutions that integrate all facets of your business operations, including planning, purchasing, inventory, sales, marketing, finance, and human resources.",
          icon: "🏢",
          features: [
            "Modular and scalable architecture",
            "Cross-department integration",
            "Real-time data analytics",
            "Process automation",
            "Customizable dashboards and reporting",
          ],
        },
        {
          title: "Customer Relationship Management (CRM)",
          description:
            "CRM systems that help you build stronger customer relationships, streamline sales processes, and drive growth by centralizing customer data and interactions.",
          icon: "👥",
          features: [
            "Contact and lead management",
            "Sales pipeline tracking",
            "Customer service automation",
            "Marketing campaign integration",
            "Performance analytics and reporting",
          ],
        },
      ],
    },
    {
      title: "Mobile Development",
      description:
        "We build high-performance, feature-rich mobile applications for iOS and Android platforms that engage users and drive business growth.",
      services: [
        {
          title: "Native App Development",
          description:
            "Platform-specific applications built using native technologies for iOS (Swift/Objective-C) and Android (Kotlin/Java), offering optimal performance and seamless integration with device features.",
          icon: "📱",
          features: [
            "Platform-specific UI/UX design",
            "Full access to device capabilities",
            "Optimal performance and speed",
            "Enhanced security features",
            "App store optimization",
          ],
        },
        {
          title: "Cross-Platform Development",
          description:
            "Cost-effective mobile solutions that work across multiple platforms using frameworks like React Native and Flutter, reducing development time while maintaining near-native performance.",
          icon: "🔄",
          features: [
            "Single codebase for multiple platforms",
            "Faster time-to-market",
            "Consistent user experience",
            "Easier maintenance and updates",
            "Cost-efficient development",
          ],
        },
        {
          title: "Mobile App Maintenance & Support",
          description:
            "Ongoing support and maintenance services to ensure your mobile applications remain up-to-date, secure, and compatible with the latest OS versions and devices.",
          icon: "🛠️",
          features: [
            "Regular updates and bug fixes",
            "Performance optimization",
            "Security patches and enhancements",
            "OS compatibility updates",
            "Feature additions and improvements",
          ],
        },
      ],
    },
    {
      title: "Web Development",
      description:
        "We create responsive, user-friendly websites and web applications that deliver exceptional user experiences across all devices.",
      services: [
        {
          title: "Responsive Website Development",
          description:
            "Modern, mobile-friendly websites that adapt seamlessly to all screen sizes and devices, ensuring an optimal user experience for all visitors regardless of how they access your site.",
          icon: "🌐",
          features: [
            "Mobile-first design approach",
            "Cross-browser compatibility",
            "Fast loading speeds",
            "SEO-friendly architecture",
            "Accessibility compliance",
          ],
        },
        {
          title: "E-commerce Development",
          description:
            "Comprehensive e-commerce solutions that help businesses sell products and services online with secure payment processing, inventory management, and customer engagement features.",
          icon: "🛒",
          features: [
            "User-friendly product catalogs",
            "Secure payment gateway integration",
            "Inventory and order management",
            "Customer account portals",
            "Marketing and promotion tools",
          ],
        },
        {
          title: "Progressive Web Applications (PWA)",
          description:
            "Web applications that offer app-like experiences on the web, combining the best features of websites and mobile apps for enhanced user engagement and performance.",
          icon: "⚡",
          features: [
            "Offline functionality",
            "Fast loading and performance",
            "Push notifications",
            "Home screen installation",
            "Native-like user experience",
          ],
        },
      ],
    },
    {
      title: "UI/UX Design",
      description:
        "We create intuitive, engaging user interfaces and experiences that enhance user satisfaction and drive conversion rates.",
      services: [
        {
          title: "User Interface Design",
          description:
            "Visually appealing and intuitive interfaces that align with your brand identity and enhance user engagement across web and mobile platforms.",
          icon: "🎨",
          features: [
            "Brand-aligned visual design",
            "Responsive and adaptive layouts",
            "Interactive prototypes",
            "Consistent design systems",
            "Accessibility considerations",
          ],
        },
        {
          title: "User Experience Design",
          description:
            "Research-driven UX design that focuses on understanding user behaviors, needs, and motivations to create seamless, enjoyable digital experiences.",
          icon: "🔍",
          features: [
            "User research and personas",
            "Information architecture",
            "User flow optimization",
            "Usability testing",
            "Iterative design process",
          ],
        },
        {
          title: "Design System Development",
          description:
            "Comprehensive design systems that establish consistent visual language, component libraries, and usage guidelines for scalable product development.",
          icon: "📐",
          features: [
            "Component libraries",
            "Style guides and documentation",
            "Design tokens and variables",
            "Cross-platform consistency",
            "Scalable design architecture",
          ],
        },
      ],
    },
    {
      title: "IT Consulting",
      description:
        "We provide expert advice and strategic guidance on technology implementation, optimization, and digital transformation.",
      services: [
        {
          title: "Digital Transformation Strategy",
          description:
            "Strategic consulting to help businesses leverage digital technologies to transform operations, improve efficiency, and create new business models and revenue streams.",
          icon: "🔍",
          features: [
            "Technology assessment and roadmapping",
            "Business process reengineering",
            "Change management planning",
            "ROI analysis and measurement",
            "Implementation guidance",
          ],
        },
        {
          title: "Technology Stack Consulting",
          description:
            "Expert guidance on selecting the optimal technology stack for your project, considering factors like scalability, performance, maintenance, and long-term business goals.",
          icon: "⚙️",
          features: [
            "Technology evaluation and selection",
            "Architecture recommendations",
            "Scalability planning",
            "Security assessment",
            "Cost-benefit analysis",
          ],
        },
        {
          title: "IT Infrastructure Optimization",
          description:
            "Assessment and optimization of your IT infrastructure to improve performance, security, and cost-efficiency while supporting your business objectives.",
          icon: "🏗️",
          features: [
            "Infrastructure assessment",
            "Cloud migration strategies",
            "Performance optimization",
            "Security enhancement",
            "Cost optimization",
          ],
        },
      ],
    },
  ]

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Planning",
      description:
        "We start by understanding your business needs, goals, and requirements to create a detailed project plan.",
    },
    {
      number: "02",
      title: "Design & Prototyping",
      description:
        "Our designers create wireframes and prototypes to visualize the solution before development begins.",
    },
    {
      number: "03",
      title: "Development & Testing",
      description:
        "Our developers build the solution using the latest technologies, with regular testing throughout the process.",
    },
    {
      number: "04",
      title: "Deployment & Support",
      description: "We deploy the solution and provide ongoing support and maintenance to ensure optimal performance.",
    },
  ]

  const technologies = [
    {
      category: "Frontend",
      techs: ["React", "Angular", "Vue.js", "Next.js", "TypeScript", "HTML5/CSS3", "Tailwind CSS", "Bootstrap"],
    },
    {
      category: "Backend",
      techs: ["Node.js", "Python", "PHP", "Java", "C#/.NET", "Ruby on Rails", "Laravel", "Express"],
    },
    {
      category: "Mobile",
      techs: ["React Native", "Flutter", "Swift", "Kotlin", "Xamarin", "Ionic", "Native Android", "Native iOS"],
    },
    {
      category: "Database",
      techs: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Firebase", "SQL Server", "Oracle", "DynamoDB"],
    },
    {
      category: "DevOps",
      techs: ["Docker", "Kubernetes", "AWS", "Azure", "Google Cloud", "CI/CD", "Jenkins", "GitHub Actions"],
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
              We provide a comprehensive range of software development and IT services to help businesses innovate,
              transform, and grow in the digital era.
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

      {/* Video Overview Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video bg-black rounded-lg overflow-hidden shadow-xl mb-8">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="BDTask Services Overview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Watch Our Services Overview</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Get a quick overview of how we deliver exceptional software solutions and services to help businesses
                transform and grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We combine technical expertise, industry knowledge, and a client-focused approach to deliver solutions
              that drive real business value.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="mb-4 h-48 overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Expert Team"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="flex justify-center mb-4">
                <Users className="h-10 w-10 text-emerald-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Team</h3>
              <p className="text-gray-600">
                Our team consists of experienced professionals with deep expertise in their respective fields.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="mb-4 h-48 overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Quality Code"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="flex justify-center mb-4">
                <Code className="h-10 w-10 text-emerald-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Code</h3>
              <p className="text-gray-600">
                We follow industry best practices and coding standards to ensure high-quality, maintainable code.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="mb-4 h-48 overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Fast Delivery"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="flex justify-center mb-4">
                <Zap className="h-10 w-10 text-emerald-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Fast Delivery</h3>
              <p className="text-gray-600">
                Our agile development process ensures timely delivery without compromising on quality.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="mb-4 h-48 overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Proven Results"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="flex justify-center mb-4">
                <Award className="h-10 w-10 text-emerald-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Proven Results</h3>
              <p className="text-gray-600">
                We have a track record of delivering successful projects that meet or exceed client expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {serviceCategories.map((category, categoryIndex) => (
        <section
          key={categoryIndex}
          className={`py-16 ${categoryIndex % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
          id={category.title.toLowerCase().replace(/\s+/g, "-")}
        >
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center mb-12 gap-8">
              <div className="md:w-1/2">
                <Image
                  src={`/placeholder.svg?height=600&width=800&text=${encodeURIComponent(category.title)}`}
                  alt={category.title}
                  width={800}
                  height={600}
                  className="rounded-lg shadow-md w-full h-auto"
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{category.title}</h2>
                <p className="text-gray-600">{category.description}</p>
              </div>
            </div>
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
              {category.services.map((service, serviceIndex) => (
                <div
                  key={serviceIndex}
                  className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-800 mb-2">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    href={`/services/${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-emerald-500 font-medium flex items-center gap-1 hover:underline"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Our Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Development Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We follow a structured and transparent development process to ensure high-quality results and client
              satisfaction.
            </p>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-emerald-200 -translate-y-1/2 z-0"></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {processSteps.map((step, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md relative">
                  <div className="absolute -top-5 -left-5 w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center text-xl font-bold">
                    {step.number}
                  </div>
                  <div className="mb-4 h-40 overflow-hidden rounded-lg">
                    <Image
                      src={`/placeholder.svg?height=300&width=400&text=${encodeURIComponent(`Step ${step.number}`)}`}
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

      {/* Technologies Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technologies We Use</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We leverage the latest technologies and frameworks to deliver high-quality, scalable solutions.
            </p>
          </div>
          <div className="space-y-8">
            {technologies.map((techCategory, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-xl font-semibold mb-4">{techCategory.category}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
                  {techCategory.techs.map((tech, techIndex) => (
                    <div key={techIndex} className="bg-white p-4 rounded-lg text-center border border-gray-100">
                      <div className="text-lg font-medium">{tech}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We have experience working with clients across various industries, delivering tailored solutions to meet
              their specific needs.
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

      {/* Service Packages */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Service Packages</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer flexible service packages to meet different needs and budgets, from one-time projects to ongoing
              support.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-50 p-6 border-b">
                <h3 className="text-2xl font-bold mb-2">Project-Based</h3>
                <p className="text-gray-600">For clients with specific, well-defined project requirements</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>Fixed scope and timeline</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>Detailed project planning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>Milestone-based delivery</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>Fixed or flexible pricing options</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>Post-launch support period</span>
                  </li>
                </ul>
                <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white">Get Quote</Button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-emerald-500 relative">
              <div className="absolute top-0 right-0 bg-emerald-500 text-white px-4 py-1 text-sm font-medium">
                Popular
              </div>
              <div className="bg-emerald-500 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Dedicated Team</h3>
                <p>For clients with ongoing development needs and multiple projects</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>Dedicated development resources</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>Flexible team scaling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>Monthly billing based on team size</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>Direct communication with team</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>Regular progress reporting</span>
                  </li>
                </ul>
                <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white">Get Quote</Button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-50 p-6 border-b">
                <h3 className="text-2xl font-bold mb-2">Maintenance & Support</h3>
                <p className="text-gray-600">For clients with existing applications needing ongoing support</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>Regular updates and bug fixes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>Security patches and monitoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>Performance optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>Technical support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>Monthly or annual contracts</span>
                  </li>
                </ul>
                <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white">Get Quote</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent Projects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Take a look at some of our recent work across different industries and service areas.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-commerce Platform",
                category: "Web Development",
                image: "/placeholder.svg?height=300&width=400",
                description:
                  "A comprehensive e-commerce solution with inventory management, payment processing, and customer portal.",
              },
              {
                title: "Healthcare Management System",
                category: "Custom Software",
                image: "/placeholder.svg?height=300&width=400",
                description:
                  "An integrated system for managing patient records, appointments, billing, and medical inventory.",
              },
              {
                title: "Logistics Tracking App",
                category: "Mobile Development",
                image: "/placeholder.svg?height=300&width=400",
                description:
                  "A real-time tracking application for logistics companies to monitor fleet and shipment status.",
              },
              {
                title: "Financial Dashboard",
                category: "UI/UX Design",
                image: "/placeholder.svg?height=300&width=400",
                description:
                  "An intuitive dashboard for financial data visualization and analysis with customizable reports.",
              },
              {
                title: "Real Estate Platform",
                category: "Web Development",
                image: "/placeholder.svg?height=300&width=400",
                description:
                  "A property listing and management platform with virtual tours and agent communication tools.",
              },
              {
                title: "Inventory Management System",
                category: "Custom Software",
                image: "/placeholder.svg?height=300&width=400",
                description:
                  "A comprehensive inventory system with barcode scanning, automated reordering, and reporting.",
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
                    href="/portfolio"
                    className="text-emerald-500 font-medium flex items-center gap-1 hover:underline"
                  >
                    View Case Study <ArrowUpRight className="w-4 h-4" />
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
              View All Projects
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
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
                  question: "How long does a typical project take?",
                  answer:
                    "Project timelines vary based on complexity and requirements. Simple projects may take a few weeks, while more complex ones can take several months. We provide estimated timelines during the planning phase and keep you updated throughout the project.",
                },
                {
                  question: "What is your pricing model?",
                  answer:
                    "We offer flexible pricing models including fixed-price for well-defined projects, time and materials for projects with evolving requirements, and dedicated team arrangements for ongoing development needs. We'll recommend the most suitable model based on your project specifics.",
                },
                {
                  question: "How do you ensure quality in your deliverables?",
                  answer:
                    "We implement a comprehensive quality assurance process that includes code reviews, automated testing, manual testing, and user acceptance testing. Our development process follows industry best practices and coding standards to ensure high-quality, maintainable code.",
                },
                {
                  question: "Do you provide post-launch support and maintenance?",
                  answer:
                    "Yes, we offer various support and maintenance packages to ensure your application continues to perform optimally after launch. These include bug fixes, security updates, performance optimization, and feature enhancements based on your needs.",
                },
                {
                  question: "How do you handle project communication?",
                  answer:
                    "We establish clear communication channels and regular meeting schedules at the start of each project. Depending on your preference, we use tools like Slack, Microsoft Teams, or email for daily communication, and provide regular progress reports and milestone updates.",
                },
                {
                  question: "Can you work with our existing development team?",
                  answer:
                    "Yes, we can collaborate with your in-house team or other vendors. We're flexible in our approach and can either augment your existing team or take full responsibility for specific modules or features, ensuring seamless integration with your current systems.",
                },
              ].map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
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
                  "BDTask delivered an exceptional software solution that has significantly improved our business operations. Their team was professional, responsive, and truly understood our needs.",
                author: "John Smith",
                position: "CEO",
                company: "Tech Solutions Inc.",
                avatar: "/placeholder.svg?height=80&width=80",
                image: "/placeholder.svg?height=300&width=400&text=Tech%20Solutions%20Project",
              },
              {
                quote:
                  "The mobile app developed by BDTask exceeded our expectations in terms of design, functionality, and user experience. They were a pleasure to work with from start to finish.",
                author: "Sarah Johnson",
                position: "Marketing Director",
                company: "Global Retail",
                avatar: "/placeholder.svg?height=80&width=80",
                image: "/placeholder.svg?height=300&width=400&text=Global%20Retail%20App",
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
              <div key={index} className="bg-gray-50 rounded-lg border border-gray-100 overflow-hidden">
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

      {/* Video Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Video Testimonials</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Watch what our clients have to say about their experience working with us.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                client: "Tech Solutions Inc.",
                project: "Enterprise Software Development",
                videoId: "dQw4w9WgXcQ",
              },
              {
                client: "Global Retail",
                project: "E-commerce Platform",
                videoId: "dQw4w9WgXcQ",
              },
              {
                client: "FinTech Innovations",
                project: "Financial Dashboard",
                videoId: "dQw4w9WgXcQ",
              },
            ].map((video, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="aspect-video bg-black">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${video.videoId}`}
                    title={`${video.client} Testimonial`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold">{video.client}</h3>
                  <p className="text-sm text-gray-600">{video.project}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Work in Action</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse through our gallery to see examples of our services and solutions in action.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { title: "Mobile App UI Design", category: "UI/UX Design" },
              { title: "E-commerce Platform", category: "Web Development" },
              { title: "Inventory Dashboard", category: "Software Development" },
              { title: "Healthcare Management System", category: "Custom Software" },
              { title: "Real Estate App", category: "Mobile Development" },
              { title: "Financial Analytics Dashboard", category: "Data Visualization" },
              { title: "Restaurant Management System", category: "POS Software" },
              { title: "Logistics Tracking Interface", category: "Web Application" },
            ].map((item, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg">
                <Image
                  src={`/placeholder.svg?height=300&width=400&text=${encodeURIComponent(item.title)}`}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                  <h3 className="text-white font-medium">{item.title}</h3>
                  <p className="text-white/80 text-sm">{item.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-emerald-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's work together to bring your ideas to life. Contact us today to discuss your project requirements.
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
