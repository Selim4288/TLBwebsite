import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, User, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

// This would typically come from a database or API
const blogPosts = [
  {
    id: 1,
    title: "The Future of Software Development: Trends to Watch in 2023",
    excerpt:
      "Explore the emerging trends that are shaping the future of software development, from AI-driven development to low-code platforms.",
    image: "/placeholder.svg?height=400&width=600",
    author: "John Smith",
    date: "May 15, 2023",
    readTime: "8 min read",
    category: "Technology",
    slug: "future-of-software-development",
  },
  {
    id: 2,
    title: "How to Choose the Right Mobile App Development Approach",
    excerpt:
      "Native, hybrid, or cross-platform? Learn the pros and cons of each mobile app development approach to make the right choice for your project.",
    image: "/placeholder.svg?height=400&width=600",
    author: "Sarah Johnson",
    date: "April 28, 2023",
    readTime: "6 min read",
    category: "Mobile Development",
    slug: "choosing-mobile-app-development-approach",
  },
  {
    id: 3,
    title: "The Impact of AI on Modern Business Operations",
    excerpt:
      "Discover how artificial intelligence is transforming business operations across industries and how you can leverage it for your organization.",
    image: "/placeholder.svg?height=400&width=600",
    author: "Michael Brown",
    date: "April 10, 2023",
    readTime: "10 min read",
    category: "Artificial Intelligence",
    slug: "ai-impact-on-business-operations",
  },
  {
    id: 4,
    title: "Essential Security Practices for Web Applications",
    excerpt:
      "Learn the critical security practices that every web application should implement to protect user data and prevent breaches.",
    image: "/placeholder.svg?height=400&width=600",
    author: "Lisa Chen",
    date: "March 22, 2023",
    readTime: "7 min read",
    category: "Web Security",
    slug: "web-application-security-practices",
  },
  {
    id: 5,
    title: "The Role of UX Design in Software Development",
    excerpt:
      "Explore how user experience design influences software development and why it's crucial for creating successful products.",
    image: "/placeholder.svg?height=400&width=600",
    author: "David Wilson",
    date: "March 5, 2023",
    readTime: "5 min read",
    category: "UX Design",
    slug: "ux-design-in-software-development",
  },
  {
    id: 6,
    title: "Cloud Computing: Choosing the Right Service Model",
    excerpt:
      "IaaS, PaaS, or SaaS? Understand the different cloud service models and how to select the best option for your business needs.",
    image: "/placeholder.svg?height=400&width=600",
    author: "Emily Wong",
    date: "February 18, 2023",
    readTime: "9 min read",
    category: "Cloud Computing",
    slug: "cloud-computing-service-models",
  },
]

const categories = [
  "Technology",
  "Mobile Development",
  "Web Development",
  "Artificial Intelligence",
  "UX Design",
  "Cloud Computing",
  "Web Security",
  "Software Engineering",
]

export default function BlogPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-white to-green-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
            <p className="text-xl text-gray-600 mb-8">
              Insights, tips, and updates from our team of experts on software development, technology trends, and more.
            </p>
            <div className="relative max-w-xl mx-auto">
              <Input type="text" placeholder="Search articles..." className="pl-10 pr-4 py-2 rounded-md w-full" />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Featured Post</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center bg-gray-50 rounded-xl overflow-hidden shadow-md">
            <div className="h-full">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Featured Post"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <div className="flex items-center gap-2 text-sm text-emerald-600 mb-3">
                <span className="font-medium">Technology</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                <Link href="/blog/future-of-software-development" className="hover:text-emerald-600 transition-colors">
                  The Future of Software Development: Trends to Watch in 2023
                </Link>
              </h3>
              <p className="text-gray-600 mb-6">
                Explore the emerging trends that are shaping the future of software development, from AI-driven
                development to low-code platforms. Learn how these innovations are changing the industry and how you can
                stay ahead of the curve.
              </p>
              <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>John Smith</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>May 15, 2023</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>8 min read</span>
                </div>
              </div>
              <Link href="/blog/future-of-software-development">
                <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">Read More</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold mb-8">Latest Articles</h2>
              <div className="grid gap-8">
                {blogPosts.map((post) => (
                  <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="h-64 md:h-auto">
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          width={600}
                          height={400}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-2 text-sm text-emerald-600 mb-3">
                          <span className="font-medium">{post.category}</span>
                        </div>
                        <h3 className="text-xl font-bold mb-3">
                          <Link href={`/blog/${post.slug}`} className="hover:text-emerald-600 transition-colors">
                            {post.title}
                          </Link>
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                          <div className="flex items-center gap-1">
                            <User className="h-4 w-4" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        <Link href={`/blog/${post.slug}`}>
                          <Button variant="outline" className="text-emerald-500 border-emerald-500 hover:bg-emerald-50">
                            Read More
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10 flex justify-center">
                <Button variant="outline" className="text-emerald-500 border-emerald-500 hover:bg-emerald-50">
                  Load More
                </Button>
              </div>
            </div>
            <div>
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-xl font-bold mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <Link
                        href={`/blog/category/${category.toLowerCase().replace(/\s+/g, "-")}`}
                        className="text-gray-600 hover:text-emerald-600 transition-colors"
                      >
                        {category}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-xl font-bold mb-4">Popular Posts</h3>
                <div className="space-y-4">
                  {blogPosts.slice(0, 3).map((post) => (
                    <div key={post.id} className="flex gap-3">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        width={80}
                        height={80}
                        className="w-20 h-20 object-cover rounded-md flex-shrink-0"
                      />
                      <div>
                        <h4 className="font-medium line-clamp-2 mb-1">
                          <Link href={`/blog/${post.slug}`} className="hover:text-emerald-600 transition-colors">
                            {post.title}
                          </Link>
                        </h4>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <Calendar className="h-3 w-3" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-emerald-500 text-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h3>
                <p className="mb-4">Stay updated with our latest articles, news, and insights.</p>
                <div className="space-y-3">
                  <Input type="email" placeholder="Your email address" className="bg-white text-gray-800 w-full" />
                  <Button className="w-full bg-white text-emerald-500 hover:bg-gray-100">Subscribe</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
