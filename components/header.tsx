'use client'

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">TL</span>
            </div>
            <span className="font-bold text-lg text-gray-900 hidden sm:inline">Tech Leads BD</span>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium text-sm">
              Solutions
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium text-sm">
              Pricing
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium text-sm">
              Features
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium text-sm">
              About
            </a>
          </nav>

          {/* CTA Buttons - Desktop */}
          <div className="hidden sm:flex items-center gap-3">
            <Button variant="ghost" className="text-gray-900 hover:text-blue-600 h-10">
              Login
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white h-10">Get Demo</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-gray-200">
            <nav className="flex flex-col gap-3 py-4">
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium px-2 py-2">
                Solutions
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium px-2 py-2">
                Pricing
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium px-2 py-2">
                Features
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium px-2 py-2">
                About
              </a>
            </nav>
            <div className="flex flex-col gap-2 pt-4 border-t border-gray-200">
              <Button variant="outline" className="w-full h-10 border-gray-300">
                Login
              </Button>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white h-10">
                Get Demo
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
