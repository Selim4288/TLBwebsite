'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative w-full bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
        <div className="text-center space-y-8">
          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight text-balance">
            Complete ERP & POS Software for Every Business in Bangladesh
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto text-balance">
            Streamline your operations with our cloud-based business management solutions. From accounting and inventory to point of sale, hospital management, and garments—all in one platform.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 rounded-lg h-12 text-base font-semibold">
              Get Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-gray-300 text-gray-900 hover:bg-gray-50 px-8 rounded-lg h-12 text-base font-semibold">
              View Software
            </Button>
          </div>

          {/* Trust badge */}
          <div className="pt-4">
            <p className="text-sm text-gray-500">Trusted by businesses across Bangladesh</p>
          </div>
        </div>
      </div>
    </section>
  )
}
