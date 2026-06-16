'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function FinalCTA() {
  return (
    <section className="w-full bg-gradient-to-r from-blue-600 to-blue-800 py-16 sm:py-20 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 text-balance">
          Ready to Transform Your Business?
        </h2>

        <p className="text-lg text-blue-50 mb-8 max-w-2xl mx-auto text-balance">
          Start your digital transformation today with a free 30-day trial. No credit card required. Get full access to all features.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-white hover:bg-gray-100 text-blue-600 px-8 rounded-lg h-12 text-base font-semibold w-full sm:w-auto"
          >
            Start Free Trial
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-blue-700 px-8 rounded-lg h-12 text-base font-semibold w-full sm:w-auto"
          >
            Contact Sales
          </Button>
        </div>

        <p className="text-blue-100 text-sm mt-8">
          Have questions? Our team is ready to help. Chat with us live or schedule a call.
        </p>
      </div>
    </section>
  )
}
