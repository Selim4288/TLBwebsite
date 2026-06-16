import Hero from "@/components/hero"
import TrustedBy from "@/components/trusted-by"
import SolutionsGrid from "@/components/solutions-grid"
import Features from "@/components/features"
import DemoVideo from "@/components/demo-video"
import Pricing from "@/components/pricing"
import Testimonials from "@/components/testimonials"
import FinalCTA from "@/components/final-cta"

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <TrustedBy />
      <SolutionsGrid />
      <Features />
      <DemoVideo />
      <Pricing />
      <Testimonials />
      <FinalCTA />
    </div>
  )
}
