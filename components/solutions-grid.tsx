'use client'

import { BarChart3, ShoppingCart, Shirt, Stethoscope, Pill, Settings } from "lucide-react"

export default function SolutionsGrid() {
  const solutions = [
    {
      icon: BarChart3,
      title: "Accounting & Inventory ERP",
      description: "Complete financial management with real-time inventory tracking",
      color: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      icon: ShoppingCart,
      title: "POS Software",
      description: "Fast, reliable point of sale system for retail businesses",
      color: "bg-green-50",
      iconColor: "text-green-600",
    },
    {
      icon: Shirt,
      title: "Garments ERP",
      description: "Specialized solution for textile and garment industry",
      color: "bg-purple-50",
      iconColor: "text-purple-600",
    },
    {
      icon: Stethoscope,
      title: "Hospital Management",
      description: "Comprehensive healthcare facility management system",
      color: "bg-red-50",
      iconColor: "text-red-600",
    },
    {
      icon: Pill,
      title: "Pharmacy Software",
      description: "Medicine shop & pharmacy operations management",
      color: "bg-orange-50",
      iconColor: "text-orange-600",
    },
    {
      icon: Settings,
      title: "Custom ERP Solutions",
      description: "Tailored solutions for your unique business needs",
      color: "bg-indigo-50",
      iconColor: "text-indigo-600",
    },
  ]

  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Software Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive business software tailored for every industry
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon
            return (
              <div
                key={index}
                className={`${solution.color} rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-300 cursor-pointer`}
              >
                <div className={`${solution.iconColor} mb-4`}>
                  <IconComponent className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                <p className="text-gray-700">{solution.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
