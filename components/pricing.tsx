'use client'

import { Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "৳5,999",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "Up to 1 user account",
        "Basic inventory tracking",
        "Simple POS system",
        "Email support",
        "Cloud storage (10GB)",
      ],
      notIncluded: ["Multi-branch support", "Advanced analytics", "API access"],
      highlighted: false,
    },
    {
      name: "Professional",
      price: "৳15,999",
      period: "/month",
      description: "Best for growing businesses",
      features: [
        "Up to 10 user accounts",
        "Advanced inventory management",
        "Full POS system",
        "Multi-branch support",
        "Advanced analytics",
        "Priority support",
        "Cloud storage (100GB)",
        "Custom reports",
      ],
      notIncluded: ["API access", "White-label solution"],
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "৳Custom",
      period: "",
      description: "For large enterprises",
      features: [
        "Unlimited user accounts",
        "Complete ERP system",
        "Multi-branch management",
        "Advanced analytics & BI",
        "API access",
        "Dedicated support",
        "Unlimited cloud storage",
        "Custom integrations",
      ],
      notIncluded: [],
      highlighted: false,
    },
  ]

  return (
    <section className="w-full bg-gradient-to-b from-slate-50 to-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your business needs
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl border-2 transition-all duration-300 ${
                plan.highlighted
                  ? "border-blue-600 bg-white shadow-2xl scale-105"
                  : "border-gray-200 bg-white hover:shadow-lg"
              } overflow-hidden`}
            >
              {plan.highlighted && (
                <div className="bg-blue-600 text-white py-2 text-center text-sm font-bold">
                  MOST POPULAR
                </div>
              )}

              <div className="p-8">
                {/* Plan name and price */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  {plan.period && <span className="text-gray-600 ml-2">{plan.period}</span>}
                </div>

                {/* CTA Button */}
                <Button
                  className={`w-full mb-8 h-11 font-semibold rounded-lg ${
                    plan.highlighted
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-900 border border-gray-300"
                  }`}
                >
                  Get Started
                </Button>

                {/* Features */}
                <div className="space-y-4">
                  <p className="text-sm font-semibold text-gray-900 uppercase">Included:</p>
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}

                  {plan.notIncluded.length > 0 && (
                    <>
                      <p className="text-sm font-semibold text-gray-900 uppercase pt-4">Not included:</p>
                      {plan.notIncluded.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <X className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-500">{feature}</span>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            All plans include free trial for 30 days. No credit card required.
          </p>
          <p className="text-sm text-gray-500">
            Billing in BDT. VAT may apply based on your location.
          </p>
        </div>
      </div>
    </section>
  )
}
