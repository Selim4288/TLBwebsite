'use client'

import Image from "next/image"
import { Award, Users, Globe, Zap, Heart, Target } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  const stats = [
    { label: "Projects Completed", value: "500+" },
    { label: "Happy Clients", value: "450+" },
    { label: "Industries Served", value: "12+" },
    { label: "Years in Business", value: "10+" },
  ]

  const values = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description: "We deliver exceptional quality in every project we undertake",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "We work closely with clients as true partners in their success",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Innovation",
      description: "We stay ahead with cutting-edge technologies and methodologies",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Efficiency",
      description: "We deliver solutions on time and within budget",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Integrity",
      description: "We maintain the highest ethical standards in all business dealings",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Customer Focus",
      description: "Your success is our primary measure of achievement",
    },
  ]

  const teamMembers = [
    {
      name: "Md. Habibur Rahman",
      title: "Founder & CEO",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Fatima Akter",
      title: "Chief Technology Officer",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Karim Khan",
      title: "Head of Development",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Sarah Ahmed",
      title: "Director of Operations",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  const processSteps = [
    { number: 1, title: "Listen", description: "We start by deeply understanding your business needs and goals" },
    { number: 2, title: "Plan", description: "We create a comprehensive strategy tailored to your requirements" },
    { number: 3, title: "Build", description: "We develop with precision using best practices and technologies" },
    { number: 4, title: "Deliver", description: "We deploy and ensure seamless integration with your systems" },
    { number: 5, title: "Support", description: "We provide ongoing support to ensure your continued success" },
  ]

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-white pt-24 pb-20 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-60 top-0 w-96 h-96 bg-gradient-to-bl from-blue-100 to-transparent rounded-full opacity-40"></div>
          <div className="absolute -left-60 -bottom-60 w-96 h-96 bg-gradient-to-tr from-blue-100 to-transparent rounded-full opacity-40"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight text-balance mb-6">
                Building Digital Excellence Since 2014
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We are Tech Leads BD Ltd., a premier software company transforming businesses across Bangladesh with innovative, reliable, and scalable solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">Our Story</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded in 2014, Tech Leads BD Ltd. began with a simple vision: to provide world-class software solutions to businesses in Bangladesh. What started as a small team of passionate developers has grown into a trusted partner for hundreds of businesses across the country.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Over the past decade, we have continuously evolved, embraced new technologies, and expanded our service offerings. Today, we are proud to be recognized as one of Bangladesh's leading software development and ERP solution providers.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our success is built on a foundation of trust, transparency, and a genuine commitment to our clients' success. Every project we undertake is an opportunity to demonstrate our expertise and dedication.
              </p>
            </div>
            <div className="relative hidden md:block">
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-1 border border-blue-200 shadow-2xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=500&width=400"
                  alt="Tech Leads BD Team"
                  width={400}
                  height={500}
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="p-8 rounded-2xl border border-blue-100 bg-white hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 mb-6 font-bold text-2xl">
                🎯
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To empower businesses across Bangladesh with innovative, reliable, and affordable software solutions that streamline operations, enhance productivity, and drive sustainable growth.
              </p>
            </div>
            <div className="p-8 rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 mb-6 font-bold text-2xl">
                ✨
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To become the most trusted and innovative software partner for businesses in South Asia, recognized for delivering exceptional solutions that create lasting value and competitive advantage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Statistics */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">By The Numbers</h2>
            <p className="text-xl text-muted-foreground">
              A decade of excellence and trusted partnership
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="p-8 rounded-xl border border-blue-100 bg-white hover:shadow-lg transition-shadow text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-3">{stat.value}</div>
                <p className="text-foreground font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Why Choose Tech Leads BD</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We combine expertise, innovation, and dedication to deliver outstanding results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { title: "Experienced Team", description: "10+ years of industry experience with a talented team of developers, architects, and designers" },
              { title: "Proven Track Record", description: "500+ successful projects delivered for clients across 12+ industries" },
              { title: "Cutting-edge Technology", description: "Always updated with the latest technologies and best practices" },
              { title: "Cost Effective", description: "High-quality solutions at competitive pricing tailored to your budget" },
              { title: "Dedicated Support", description: "24/7 technical support and maintenance for peace of mind" },
              { title: "Local Expertise", description: "Deep understanding of Bangladesh's business environment and needs" },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-xl border border-border bg-white hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center font-bold mb-4">
                  ✓
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, i) => (
              <div
                key={i}
                className="p-8 rounded-xl border border-blue-100 bg-white hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Working Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A structured approach to ensure your project's success
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {processSteps.map((step, i) => (
                <div key={i} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-2xl flex-shrink-0">
                      {step.number}
                    </div>
                    {i < processSteps.length - 1 && (
                      <div className="w-1 h-20 bg-blue-200 mt-4"></div>
                    )}
                  </div>
                  <div className="pt-3 pb-8">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Leadership Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experienced leaders driving innovation and excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, i) => (
              <div key={i} className="text-center group">
                <div className="relative mb-6 overflow-hidden rounded-xl border-2 border-blue-100 group-hover:border-blue-400 transition-all">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
                <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                <p className="text-muted-foreground mt-2">{member.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-32 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full -ml-48 -mb-48"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Let&apos;s Work Together
            </h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              Join hundreds of businesses that trust Tech Leads BD to transform their operations. Let's discuss how we can help achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-blue-600 hover:bg-gray-50 px-10 py-4 rounded-lg text-base font-semibold h-auto shadow-lg">
                Start Your Project
              </Button>
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 px-10 py-4 rounded-lg text-base font-semibold h-auto"
              >
                Contact Us Today
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
