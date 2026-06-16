'use client'

import { Play } from "lucide-react"

export default function DemoVideo() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            See It in Action
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Watch how our software helps businesses streamline operations
          </p>
        </div>

        {/* Video Container */}
        <div className="relative w-full bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
          {/* Placeholder video background */}
          <div className="w-full aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
            {/* Play button */}
            <button className="group relative">
              <div className="absolute inset-0 bg-blue-600 rounded-full group-hover:scale-110 transition-transform duration-300"></div>
              <div className="relative bg-blue-600 group-hover:bg-blue-700 p-6 rounded-full transition-colors">
                <Play className="w-8 h-8 text-white fill-white" />
              </div>
            </button>

            {/* Video text overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="text-center text-white">
                <p className="text-2xl font-bold mb-2">Product Demo Video</p>
                <p className="text-gray-300">Click to watch our platform walkthrough</p>
              </div>
            </div>
          </div>
        </div>

        {/* Video benefits */}
        <div className="grid sm:grid-cols-3 gap-6 mt-12">
          {[
            { title: "5 Min Overview", desc: "Quick introduction to our platform" },
            { title: "Feature Walkthrough", desc: "Explore all key features in detail" },
            { title: "Real Use Cases", desc: "See how businesses use our software" },
          ].map((item, index) => (
            <div key={index} className="text-center p-6 bg-slate-50 rounded-lg border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
