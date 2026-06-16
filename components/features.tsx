'use client'

import { Check, Activity, Cloud, Share2, Shield } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Activity,
      title: "Real-time Stock Tracking",
      description: "Monitor inventory levels across all locations instantly with automated alerts and detailed analytics.",
    },
    {
      icon: Cloud,
      title: "Cloud-Based Access",
      description: "Access your business data anytime, anywhere on any device with secure cloud infrastructure.",
    },
    {
      icon: Share2,
      title: "Multi-Branch Support",
      description: "Manage multiple locations from a single dashboard with centralized reporting and control.",
    },
    {
      icon: Shield,
      title: "User Role Management",
      description: "Granular permission controls to ensure secure data access and maintain operational integrity.",
    },
  ]

  return (
    <section className="w-full bg-gradient-to-b from-white to-slate-50 py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Powerful Features Built for Growth
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to run your business efficiently
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-600">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Additional benefit list */}
        <div className="mt-16 bg-blue-50 rounded-xl p-8 border border-blue-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Tech Leads BD?</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "24/7 Customer Support",
              "99.9% Uptime Guarantee",
              "No Hidden Fees",
              "Easy Integration",
              "Regular Updates & Features",
              "Data Backup & Security",
            ].map((benefit, index) => (
              <div key={index} className="flex items-center gap-3">
                <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
