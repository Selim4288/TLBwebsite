import Image from "next/image"
import Link from "next/link"
import { Play, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  const products = [
    { title: "ERP Solutions", description: "Comprehensive enterprise resource planning systems for businesses of all sizes.", link: "/products/erp-solutions" },
    { title: "POS Systems", description: "Advanced point of sale systems for retail, restaurant, and service industries.", link: "/products/pos-systems" },
    { title: "Accounting Software", description: "Powerful accounting tools to manage finances, invoicing, and financial reporting.", link: "/products/accounting-software" },
    { title: "HR Payroll Software", description: "Complete HR and payroll management solution for streamlined workforce management.", link: "/products/hr-payroll" },
    { title: "CRM Software", description: "Customer relationship management tools to improve customer engagement and sales.", link: "/products/crm-software" },
    { title: "Inventory Software", description: "Real-time inventory tracking and management for optimized stock control.", link: "/products/inventory-management" },
    { title: "Hospital Management", description: "Integrated healthcare management solution for hospitals and medical facilities.", link: "/products/hospital-management" },
    { title: "School Management", description: "Complete education management solution for schools and educational institutions.", link: "/products/school-management" },
    { title: "Restaurant Management", description: "All-in-one solution for restaurants, cafes, and food service businesses.", link: "/products/restaurant-management" },
    { title: "Hotel Management", description: "Comprehensive hotel and hospitality management software solution.", link: "/products/hotel-management" },
    { title: "Garments ERP", description: "Specialized ERP solution for garment manufacturing and textile industries.", link: "/products/garments-erp" },
    { title: "Real Estate Management", description: "Complete solution for real estate agencies, property managers, and developers.", link: "/products/real-estate-management" },
  ]

  return (
    <div className="relative overflow-hidden">
      {/* Decorative dots */}
      <div className="absolute right-0 top-1/4 flex flex-col gap-2 z-10">
        {Array(10)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-emerald-500"></div>
          ))}
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-white to-green-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="z-10">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span>Best </span>
                <span className="text-emerald-500">Software Development</span>
                <br />
                <span>Company </span>
                <span>To Architect The Dream</span>
                <br />
                <span>For </span>
                <span className="text-emerald-500">Next Generation</span>
              </h1>
              <p className="text-gray-700 mb-8 text-lg">
                Tech Leads BD Ltd. is a leading software development company providing innovative ERP, POS, Accounting,
                and custom software solutions for businesses worldwide.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-md">
                  Get Started
                </Button>
                <Button
                  variant="outline"
                  className="border-emerald-500 text-emerald-500 hover:bg-emerald-50 px-6 py-2 rounded-md"
                >
                  Our Services
                </Button>
              </div>
              <div className="flex items-center gap-4 mt-8">
                <Image src="/placeholder.svg?height=40&width=40" alt="ISO" width={40} height={40} className="h-10" />
                <Image src="/placeholder.svg?height=40&width=40" alt="BASIS" width={40} height={40} className="h-10" />
                <Image src="/placeholder.svg?height=40&width=40" alt="BACCO" width={40} height={40} className="h-10" />
                <Image src="/placeholder.svg?height=40&width=40" alt="Envato" width={40} height={40} className="h-10" />
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Tech Leads BD Team"
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <Play className="w-6 h-6 text-emerald-500 ml-1" />
                  </button>
                </div>
                <div className="absolute bottom-0 right-0 bg-emerald-500 text-white p-4 rounded-tl-lg">
                  <div className="text-4xl font-bold">10+</div>
                  <div className="text-sm">
                    Years of
                    <br />
                    Experience
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide a wide range of IT and digital services to help businesses grow and succeed in the digital
              world.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Software Development",
                description:
                  "Custom software solutions tailored to your business needs, from enterprise applications to specialized industry software.",
                icon: "💻",
                link: "/services-overview#software-development",
              },
              {
                title: "Website Design & Development",
                description:
                  "Professional website design and development services that create stunning, functional, and user-friendly websites.",
                icon: "🌐",
                link: "/services-overview#website-design-development",
              },
              {
                title: "Mobile App Development",
                description:
                  "Cutting-edge mobile applications for iOS and Android platforms that engage users and drive business growth.",
                icon: "📱",
                link: "/services-overview#mobile-app-development",
              },
              {
                title: "Graphic Design",
                description:
                  "Creative graphic design services that communicate your brand message effectively and leave a lasting impression.",
                icon: "🎨",
                link: "/services-overview#graphic-design",
              },
              {
                title: "Digital Marketing",
                description:
                  "Comprehensive digital marketing strategies that increase your online visibility, drive traffic, and generate leads.",
                icon: "📈",
                link: "/services-overview#digital-marketing",
              },
              {
                title: "E-commerce Website",
                description:
                  "Powerful e-commerce solutions that help you sell products and services online with secure payment processing.",
                icon: "🛒",
                link: "/services-overview#ecommerce-website",
              },
              {
                title: "Domain & Hosting Services",
                description:
                  "Reliable domain registration and web hosting services that provide a solid foundation for your online presence.",
                icon: "🔌",
                link: "/services-overview#domain-hosting",
              },
              {
                title: "Affordable Local SEO Services",
                description:
                  "Targeted local SEO strategies that help your business appear in local search results and attract nearby customers.",
                icon: "🔍",
                link: "/services-overview#local-seo",
              },
              {
                title: "Buildings IT Network Infrastructure",
                description:
                  "Comprehensive IT network infrastructure solutions for buildings, ensuring reliable connectivity and performance.",
                icon: "🏢",
                link: "/services-overview#it-network-infrastructure",
              },
              {
                title: "IT Products Supply and Service",
                description:
                  "Comprehensive IT product supply and service solutions for public and private organizations of all sizes.",
                icon: "🖥️",
                link: "/services-overview#it-products-supply",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100 flex flex-col h-full"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>
                <Link
                  href={service.link}
                  className="text-emerald-500 font-medium flex items-center gap-1 hover:underline"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services-overview">
              <Button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-md">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our range of 30+ innovative software products designed to streamline your business operations.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Link
                key={index}
                href={product.link}
                className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow p-6"
              >
                <h3 className="text-lg font-semibold mb-2 group-hover:text-emerald-500 transition-colors">
                  {product.title}
                </h3>
                <p className="text-gray-600 text-sm">{product.description}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/products">
              <Button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-md">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from our satisfied clients about their experience working with Tech Leads BD Ltd.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-100">
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
                <p className="text-gray-700 mb-6 italic">
                  "Tech Leads BD delivered an exceptional software solution that has significantly improved our business
                  operations. Their team was professional, responsive, and truly understood our needs."
                </p>
                <div className="flex items-center gap-4">
                  <Image
                    src="/placeholder.svg?height=50&width=50"
                    alt="Client"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold">John Smith</h4>
                    <p className="text-sm text-gray-600">CEO, Tech Solutions Inc.</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's work together to create innovative solutions that drive your business forward.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-white text-emerald-500 hover:bg-gray-100 px-6 py-2 rounded-md">Get in Touch</Button>
            <Button variant="outline" className="border-white text-white hover:bg-emerald-600 px-6 py-2 rounded-md">
              View Our Work
            </Button>
          </div>
        </div>
      </section>

      {/* Social Media Floating Buttons */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-3 z-50">
        <a
          href="#"
          className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-green-600 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
        <a
          href="#"
          className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-blue-600 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.05 1.577c-.393-.016-.784.08-1.117.235-.484.186-4.92 1.902-9.41 3.64-2.26.873-4.518 1.746-6.256 2.415-1.737.67-3.045 1.168-3.114 1.192-.46.16-1.082.362-1.61.984-.133.155-.267.354-.335.628s-.038.622.095.895c.265.547.714.773 1.244.976.53.204 1.525.573 2.021.76.496.187 1.091.413 1.776.79.715.38 1.288 1.244 1.315 2.228.036 1.3-.023 2.43.102 3.022.125.593.326.999.7 1.25.373.25.624.142.924.07.3-.07.677-.244 1.27-.565.593-.32 1.685-1.03 3.45-2.317.567-.42.897-.862.897-1.45-.005-.267.033-.6.226-.92.192-.32.566-.705.968-1.09.4-.385.822-.79 1.24-1.194.425-.405.848-.81 1.25-1.195.4-.385.773-.77.97-1.092.197-.323.23-.653.23-.923 0-.592-.317-1.024-.87-1.448-.553-.424-1.332-.797-2.16-1.167-1.657-.736-3.652-1.464-5.638-2.196-1.986-.73-3.962-1.465-5.555-2.11-1.593-.647-2.797-1.19-3.04-1.344-.25-.155-.5-.44-.63-.76-.13-.32-.16-.68-.16-.76 0-.08.03-.44.16-.76.13-.32.38-.605.63-.76.243-.155 1.447-.697 3.04-1.345 1.593-.645 3.57-1.38 5.555-2.11 1.986-.732 3.98-1.46 5.638-2.196.828-.37 1.607-.743 2.16-1.168.553-.424.87-.856.87-1.448 0-.27-.033-.6-.23-.923-.197-.323-.57-.708-.97-1.092-.402-.385-.825-.79-1.25-1.193-.418-.404-.84-.81-1.24-1.195-.402-.385-.776-.77-.968-1.09-.193-.32-.23-.653-.226-.92.003-.59.333-1.03.9-1.45 1.765-1.287 2.857-1.997 3.45-2.318.593-.32.97-.494 1.27-.564.3-.07.55-.18.924.07.374.25.575.657.7 1.25.125.592.066 1.723.102 3.022.027.985.6 1.848 1.315 2.228.685.378 1.28.603 1.776.79.496.188 1.492.557 2.022.76.53.204.978.43 1.244.977.133.273.168.62.095.895s-.202.473-.335.628c-.528.622-1.15.824-1.61.985-.07.023-1.378.522-3.114 1.19-1.738.67-3.996 1.544-6.256 2.416-4.49 1.738-8.926 3.454-9.41 3.64-.333.156-.724.252-1.117.236-1.079-.043-1.853-1.043-1.853-1.043" />
          </svg>
        </a>
      </div>
    </div>
  )
}
