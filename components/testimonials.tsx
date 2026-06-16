'use client'

import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Mehrab Hasan",
      role: "Owner, Fashion Hub BD",
      content:
        "Tech Leads BD's software has transformed how we manage our garment business. The inventory tracking is incredibly accurate and has helped us reduce waste by 30%.",
      rating: 5,
      avatar: "MH",
    },
    {
      name: "Fatima Ahmed",
      role: "Manager, City Pharmacy",
      content:
        "The pharmacy software is user-friendly and has significantly reduced billing errors. Our staff adapted to it in just one week. Highly recommended!",
      rating: 5,
      avatar: "FA",
    },
    {
      name: "Dr. Karim Khan",
      role: "Hospital Administrator",
      content:
        "Their hospital management system is comprehensive and reliable. It has improved our patient management and staff coordination dramatically.",
      rating: 5,
      avatar: "DK",
    },
    {
      name: "Sohel Rahman",
      role: "Retail Manager, Mart Plus",
      content:
        "The POS system is fast, responsive, and integrates seamlessly with our existing infrastructure. Customer support is exceptional and always helpful.",
      rating: 5,
      avatar: "SR",
    },
  ]

  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Loved by Businesses
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See what our customers have to say about working with us
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-slate-50 rounded-xl p-8 border border-gray-200">
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 leading-relaxed mb-6">{testimonial.content}</p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-3 gap-6 mt-16 pt-16 border-t border-gray-200">
          {[
            { number: "5000+", label: "Active Users" },
            { number: "500+", label: "Happy Customers" },
            { number: "99.9%", label: "Uptime" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
