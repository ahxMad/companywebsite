"use client"

import {
  ArrowRight,
  Brain,
  Chrome,
  Gamepad,
  Github,
  Linkedin,
  Mail,
  MessageSquare,
  Smartphone,
  Twitter,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Page() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const aiSolutionsRef = useRef<HTMLElement>(null)

  const scrollToAISolutions = () => {
    aiSolutionsRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{
      x: number
      y: number
      dx: number
      dy: number
      size: number
    }> = []

    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        dx: (Math.random() - 0.5) * 2,
        dy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1,
      })
    }

    function animate() {
      if (!canvas || !ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = "rgba(100, 116, 139, 0.2)" // slate-500 with low opacity

      particles.forEach((particle) => {
        particle.x += particle.dx
        particle.y += particle.dy

        if (particle.x < 0 || particle.x > canvas.width) particle.dx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.dy *= -1

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()

        // Draw connections
        particles.forEach((otherParticle) => {
          const distance = Math.sqrt(
            Math.pow(particle.x - otherParticle.x, 2) + Math.pow(particle.y - otherParticle.y, 2),
          )
          if (distance < 100) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(100, 116, 139, ${0.1 - distance / 1000})`
            ctx.lineWidth = 0.6
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.stroke()
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const products = [
    {
      name: "MindTube",
      description:
        "AI-powered video platform for enhanced learning and productivity. Transform your viewing experience with smart recommendations and insights.",
      link: "https://mindtube.app",
      icon: <Brain className="h-12 w-12" />,
      type: "Website",
    },
    {
      name: "NoBeans",
      description:
        "Mobile application for streamlined task management. Boost your productivity with AI-driven task prioritization.",
      link: "https://nobeans.app",
      icon: <Smartphone className="h-12 w-12" />,
      type: "Mobile App",
    },
    {
      name: "Comment Vibe",
      description: "Chrome extension for YouTube comment sentiment analysis. Understand audience sentiment instantly.",
      link: "https://youtubevibe.com",
      icon: <Chrome className="h-12 w-12" />,
      type: "Chrome Extension",
    },
    {
      name: "BrainBugs",
      description:
        "Community platform for developers and tech enthusiasts. Share ideas, solve problems, and grow together.",
      link: "https://brainbugs.community",
      icon: <MessageSquare className="h-12 w-12" />,
      type: "Community Platform",
    },
  
  ]

  const features = [
    {
      title: "AI-Powered Solutions",
      description: "Leverage cutting-edge artificial intelligence to enhance productivity and streamline workflows.",
    },
    {
      title: "Cross-Platform Integration",
      description: "Seamlessly work across devices with our suite of web and mobile applications.",
    },
    {
      title: "Smart Automation",
      description: "Automate repetitive tasks and focus on what matters most to you.",
    },
    {
      title: "Real-time Analytics",
      description: "Get instant insights and make data-driven decisions with our advanced analytics.",
    },
  ]

  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-b from-slate-50 to-zinc-100 text-slate-900 relative overflow-hidden">
      {/* Brain outline */}
      <div className="absolute inset-0 pointer-events-none">
        <svg viewBox="0 0 1000 1000" className="w-full h-full opacity-10">
          <path
            d="M500 0C223.9 0 0 223.9 0 500s223.9 500 500 500 500-223.9 500-500S776.1 0 500 0zM895.3 500c0 218.7-177.6 396.3-396.3 396.3S102.7 718.7 102.7 500 280.3 103.7 499 103.7 895.3 281.3 895.3 500z"
            fill="currentColor"
          />
          <path
            d="M500 187.5c-172.4 0-312.5 140.1-312.5 312.5S327.6 812.5 500 812.5 812.5 672.4 812.5 500 672.4 187.5 500 187.5zm0 562.5c-137.9 0-250-112.1-250-250s112.1-250 250-250 250 112.1 250 250-112.1 250-250 250z"
            fill="currentColor"
          />
          <path
            d="M500 312.5c-103.4 0-187.5 84.1-187.5 187.5S396.6 687.5 500 687.5 687.5 603.4 687.5 500 603.4 312.5 500 312.5zm0 312.5c-68.9 0-125-56.1-125-125s56.1-125 125-125 125 56.1 125 125-56.1 125-125 125z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="flex-grow flex flex-col items-center justify-center pb-8 pt-20 text-center">
          <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" style={{ opacity: 0.7 }} />
          <div className="relative z-10 px-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-slate-700 to-zinc-700 animate-gradient pb-2">
              Enhancing Human Potential with AI
            </h1>
            <p className="max-w-[800px] text-lg md:text-xl text-slate-600 mt-6 animate-fade-in mx-auto">
              We build cutting-edge AI solutions to simplify tasks and boost productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-slate-700 to-zinc-700 text-white hover:opacity-90 transition-opacity"
              >
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-300 text-slate-700 hover:bg-slate-100"
                onClick={scrollToAISolutions}
              >
                View Apps
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="container px-4 md:px-6">
            <div className="flex justify-center mb-8">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-01-07%2023.14.47%20-%20A%20modern%20and%20minimalist%20logo%20design%20for%20a%20company%20named%20'MindAide%20Labs'.%20The%20logo%20features%20a%20sleek%20brain-inspired%20design%20combined%20with%20futuristic%20tech.jpg-AN4Mu2IthK79Pps0PotwhrsC5A1L8I.webp"
                alt="MindAide Labs Logo"
                width="120"
                height="120"
                className="rounded-2xl opacity-90"
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800">
              Why Choose <span className="text-slate-600">MindAide</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-gradient-to-b from-white to-slate-50 border border-slate-200 hover:border-slate-300 transition-all duration-300 shadow-sm"
                >
                  <h3 className="text-xl font-semibold mb-3 text-slate-700">{feature.title}</h3>
                  <p className="text-slate-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Showcase */}
        <section className="py-20 relative" ref={aiSolutionsRef}>
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-slate-800">Our AI Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <Card
                  key={product.name}
                  className="relative bg-white backdrop-blur-sm rounded-xl p-2 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg"
                >
                  <Link href={product.link} className="absolute inset-0 z-10" />
                  <CardHeader className="flex flex-col items-center">
                    <div className="mb-4 flex items-center justify-center h-16 w-16 bg-white rounded-xl shadow-sm">
                      {product.icon}
                    </div>
                    <CardTitle className="text-xl font-bold text-slate-800">{product.name}</CardTitle>
                    <CardDescription className="text-slate-600">{product.type}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700">{product.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-slate-200 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <p className="text-slate-600 max-w-xs">
                  Empowering individuals and organizations with AI-driven solutions for enhanced productivity.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-slate-800">Quick Links</h3>
                <div className="grid gap-2">
                  <Link href="#" className="text-slate-600 hover:text-slate-800 transition-colors">
                    About Us
                  </Link>
                  <Link href="#" className="text-slate-600 hover:text-slate-800 transition-colors">
                    Products
                  </Link>
                  <Link href="#" className="text-slate-600 hover:text-slate-800 transition-colors">
                    Contact
                  </Link>
                  <Link href="#" className="text-slate-600 hover:text-slate-800 transition-colors">
                    Privacy Policy
                  </Link>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-slate-800">Connect</h3>
                <div className="flex gap-4">
                  <Link href="#" className="text-slate-600 hover:text-slate-800 transition-colors">
                    <Twitter className="h-6 w-6" />
                  </Link>
                  <Link href="#" className="text-slate-600 hover:text-slate-800 transition-colors">
                    <Linkedin className="h-6 w-6" />
                  </Link>
                  <Link href="#" className="text-slate-600 hover:text-slate-800 transition-colors">
                    <Github className="h-6 w-6" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-slate-200 text-center text-slate-600">
              <p>© 2024 MindAide Labs. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </main>
  )
}
