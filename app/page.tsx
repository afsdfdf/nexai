"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"

import PageLayout from "@/components/page-layout"
import { AnimatedCounter, TypewriterEffect, InteractiveCard, GlitchText, PulsingDot } from "@/components/enhanced-effects"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Cpu,
  Shield,
  Coins,
  Brain,
  Network,
  Zap,
  TrendingUp,
  CheckCircle,
  Download,
  Sparkles,
  Play,
  ChevronDown,
  Battery,
  Wifi,
  Globe,
  Lock,
  Award,
  ExternalLink
} from "lucide-react"
import Image from "next/image"

// Apple-style smooth scroll component
const SmoothScrollSection = ({ children, className = "", id }: { children: React.ReactNode; className?: string; id?: string }) => {
  return <section id={id} className={`relative overflow-hidden ${className}`}>{children}</section>
}

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  // Strategic partners data
  const partners = [
    {
      name: "Helium Network",
      logo: "/images/partners/helium.png",
      description: "Decentralized wireless infrastructure provider",
      website: "https://www.helium.com"
    },
    {
      name: "Filecoin",
      logo: "/images/partners/filecoin.png",
      description: "Decentralized storage network",
      website: "https://filecoin.io"
    },
    {
      name: "Render Network",
      logo: "/images/partners/render.png",
      description: "Distributed GPU rendering network",
      website: "https://rendernetwork.com"
    },
    {
      name: "Akash Network",
      logo: "/images/partners/akash.png",
      description: "Decentralized cloud computing marketplace",
      website: "https://akash.network"
    },
    {
      name: "Arweave",
      logo: "/images/partners/arweave.png",
      description: "Permanent data storage network",
      website: "https://www.arweave.org"
    }
  ]

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    setIsVisible(true)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <PageLayout>
      {/* Hero Section - Enhanced with mobile optimization */}
      <SmoothScrollSection className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-br from-slate-950 via-slate-900 to-black">
            {/* Hero AI Background with enhanced effects */}
            <div className="w-full h-full opacity-40 bg-center bg-cover bg-no-repeat animate-pulse" 
                 style={{backgroundImage: "url('/images/hero-ai-background.jpg')"}}
            ></div>
            {/* Floating particles effect */}
            <div className="absolute inset-0">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-bounce"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${2 + Math.random() * 2}s`
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[80vh]">
            {/* Left side - Content */}
            <div
              className={`space-y-6 lg:space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              {/* Enhanced product announcement */}
              <div>
                <Badge className="bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 text-blue-400 border border-blue-500/30 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium rounded-full backdrop-blur-xl shadow-lg shadow-blue-500/25">
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                  Introducing NexAI Phone
                </Badge>
              </div>

              {/* Main headline with enhanced gradient - mobile optimized */}
              <div className="space-y-3 sm:space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight">
                  <span className="text-white animate-in slide-in-from-left-10 duration-1000">The future of</span>
                  <br />
                  <GlitchText 
                    text="intelligent mobile" 
                    className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-500 cursor-default animate-in slide-in-from-right-10 duration-1000 delay-300"
                  />
                </h1>

                {/* Subtitle - mobile optimized */}
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed font-light max-w-2xl">
                  Revolutionary AI-powered smartphone that participates in DePIN networks, mines cryptocurrency, and
                  contributes to decentralized physical infrastructure while earning passive rewards.
                </p>
              </div>

              {/* Enhanced key features highlight - mobile grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                <div className="text-center group">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">
                    <AnimatedCounter end={12.5} suffix=" TOPS" duration={2} />
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400 font-medium">AI Processing</div>
                </div>
                <div className="text-center group">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">
                    <AnimatedCounter end={48} suffix=" Hours" duration={2.5} />
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400 font-medium">Battery Life</div>
                </div>
                <div className="text-center group">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">
                    <AnimatedCounter end={15} suffix="+ Chains" duration={2.2} />
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400 font-medium">Blockchains</div>
                </div>
                <div className="text-center group">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">
                    <AnimatedCounter end={8} suffix=" DePIN" duration={1.8} />
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400 font-medium">
                    <span className="flex items-center justify-center space-x-1">
                      <span>Networks</span>
                      <PulsingDot size="small" color="green" />
                    </span>
                  </div>
                </div>
              </div>

              {/* Enhanced CTA buttons - mobile optimized */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link href="/products">
                <Button
                  size="lg"
                    className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-blue-500/25 hover:shadow-purple-500/25 text-sm sm:text-base w-full sm:w-auto"
                >
                    Explore Products
                </Button>
                </Link>
                <Link href="/whitepaper">
                <Button
                  size="lg"
                  variant="outline"
                    className="border-2 border-blue-500/30 text-white hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 backdrop-blur-xl shadow-lg hover:border-purple-500/40 text-sm sm:text-base w-full sm:w-auto"
                >
                    <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Technical Whitepaper
                </Button>
                </Link>
              </div>

              {/* Enhanced additional info - mobile stack */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-xs sm:text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
                  <span>Free shipping and returns</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
                  <span>0% APR financing available</span>
                </div>
              </div>
            </div>

            {/* Right side - Enhanced Product Image - mobile optimized */}
            <div className="relative lg:justify-self-end order-first lg:order-last">
              <div
                className="transform transition-transform duration-1000"
                style={{ transform: `translateY(${scrollY * -0.02}px)` }}
              >
                <Image
                  src="/images/nexai-phones.png"
                  alt="NexAI Phone - Three devices showing the revolutionary interface"
                  width={700}
                  height={600}
                  className="w-full max-w-lg lg:max-w-2xl h-auto mx-auto"
                  priority
                />
              </div>

              {/* Enhanced floating specs with 3D effects - mobile optimized */}
              <div className="absolute top-4 sm:top-8 -left-2 sm:-left-4 bg-gradient-to-br from-slate-900/80 via-slate-800/80 to-slate-900/80 backdrop-blur-2xl rounded-xl sm:rounded-2xl p-2 sm:p-4 border border-blue-500/30 shadow-2xl shadow-blue-500/25 animate-pulse transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
                  <div>
                    <div className="text-xs sm:text-sm text-white font-medium">Mining Active</div>
                    <div className="text-xs bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      $24.67/day
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/2 -right-2 sm:-right-4 bg-gradient-to-br from-slate-900/80 via-slate-800/80 to-slate-900/80 backdrop-blur-2xl rounded-xl sm:rounded-2xl p-2 sm:p-4 border border-purple-500/30 shadow-2xl shadow-purple-500/25 animate-pulse delay-500 transform hover:scale-105 transition-all duration-300">
                <div className="text-center">
                  <div className="text-sm sm:text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    2.4 TH/s
                  </div>
                  <div className="text-xs text-gray-400">Hash Rate</div>
                </div>
              </div>

              <div className="absolute bottom-4 sm:bottom-8 left-2 sm:left-4 bg-gradient-to-br from-slate-900/80 via-slate-800/80 to-slate-900/80 backdrop-blur-2xl rounded-xl sm:rounded-2xl p-2 sm:p-4 border border-pink-500/30 shadow-2xl shadow-pink-500/25 animate-pulse delay-1000 transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <Brain className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                  <div>
                    <div className="text-xs sm:text-sm text-white font-medium">AI Optimized</div>
                    <div className="text-xs bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
                      Neural Engine
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-3xl scale-110 -z-10 animate-pulse"></div>
            </div>
          </div>

          {/* Enhanced scroll indicator */}
          <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
          </div>
        </div>
      </SmoothScrollSection>

      {/* Enhanced Key Features with mobile optimization */}
      <SmoothScrollSection
        id="overview"
        className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-slate-950 via-slate-900 to-black"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Enhanced Header Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 border border-blue-500/30 mb-8">
              <Sparkles className="w-4 h-4 text-blue-400 mr-2" />
              <span className="text-blue-300 text-sm font-medium">Revolutionary Design</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
              Designed for the
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
                digital future
              </span>
            </h2>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
              Every aspect of NexAI Phone has been engineered to deliver unprecedented performance, security, and
              earning potential in the Web3 ecosystem.
            </p>
            
            {/* Key Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 max-w-4xl mx-auto">
              <div className="text-center group">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  12.5 TOPS
                </div>
                <div className="text-sm text-gray-400 font-medium">AI Processing</div>
              </div>
              <div className="text-center group">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  8 Networks
                </div>
                <div className="text-sm text-gray-400 font-medium">DePIN Support</div>
              </div>
                <div className="text-center group">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  256-bit
                </div>
                <div className="text-sm text-gray-400 font-medium">Encryption</div>
              </div>
              <div className="text-center group">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  48 Hours
                </div>
                <div className="text-sm text-gray-400 font-medium">Battery Life</div>
              </div>
            </div>
          </div>

          {/* Core Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {[
              {
                title: "AI-Powered Mining",
                description: "Revolutionary neural processing optimizes cryptocurrency mining with zero performance impact on daily use.",
                icon: Brain,
                gradient: "from-blue-500 to-cyan-500",
                features: ["Autonomous optimization", "Background operation", "Real-time earnings"]
              },
              {
                title: "Quantum Security", 
                description: "Military-grade encryption with quantum-resistant algorithms protects your digital assets.",
                icon: Shield,
                gradient: "from-purple-500 to-pink-500",
                features: ["Hardware HSM", "Biometric auth", "Secure enclave"]
              },
              {
                title: "Multi-Chain DeFi",
                description: "Native support for 15+ blockchain networks with seamless cross-chain transactions.",
                icon: Network,
                gradient: "from-green-500 to-emerald-500",
                features: ["15+ chains", "Cross-chain swaps", "DeFi protocols"]
              },
              {
                title: "DePIN Integration",
                description: "Participate in 8+ decentralized physical infrastructure networks to earn passive income.",
                icon: Globe,
                gradient: "from-pink-500 to-red-500",
                features: ["Helium", "Filecoin", "Render Network"]
              },
              {
                title: "Neural Engine",
                description: "12.5 TOPS AI processor delivers unprecedented computational power in a mobile device.",
                icon: Cpu,
                gradient: "from-orange-500 to-yellow-500",
                features: ["12.5 TOPS", "3nm process", "Energy efficient"]
              },
              {
                title: "Ultra Battery",
                description: "48-hour battery life supports continuous mining and daily use without compromise.",
                icon: Battery,
                gradient: "from-teal-500 to-cyan-500",
                features: ["48H mining", "Fast charging", "Adaptive power"]
              }
            ].map((feature, index) => (
              <div key={index} className="group relative">
                <div className="p-6 rounded-2xl bg-slate-800/40 border border-slate-700/40 hover:border-blue-500/40 hover:bg-slate-800/60 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} bg-opacity-20 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-white font-semibold text-lg group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {feature.title}
                  </h4>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 group-hover:text-gray-300 transition-colors duration-300">
                    {feature.description}
                  </p>
                  <div className="space-y-1">
                    {feature.features.map((feat, featIndex) => (
                      <div key={featIndex} className="flex items-center text-xs text-gray-500">
                        <div className="w-1 h-1 bg-blue-400 rounded-full mr-2"></div>
                        {feat}
                </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Links to Other Pages */}
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                title: "View Products",
                description: "Explore our smartphone lineup",
                href: "/products",
                icon: "📱",
                gradient: "from-blue-500 to-purple-500"
              },
              {
                title: "DePIN Mining",
                description: "Learn about mining networks",
                href: "/depin",
                icon: "⛏️",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                title: "NEX Token",
                description: "Tokenomics and rewards",
                href: "/token",
                icon: "🪙",
                gradient: "from-pink-500 to-red-500"
              },
              {
                title: "Development",
                description: "See our roadmap",
                href: "/roadmap",
                icon: "🚀",
                gradient: "from-green-500 to-teal-500"
              }
            ].map((link, index) => (
              <Link key={index} href={link.href}>
                <div className="group p-6 rounded-xl bg-slate-800/40 border border-slate-700/40 hover:border-blue-500/40 transition-all duration-300 transform hover:scale-105 cursor-pointer">
                  <div className="text-2xl mb-3">{link.icon}</div>
                  <h4 className={`text-white font-semibold mb-2 group-hover:bg-gradient-to-r group-hover:${link.gradient} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300`}>
                    {link.title}
                  </h4>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                    {link.description}
                  </p>
                  </div>
              </Link>
            ))}
          </div>
        </div>
      </SmoothScrollSection>

      {/* Strategic Partners Section - NEW */}
      <SmoothScrollSection
        id="partners"
        className="py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-950 to-black"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 border border-blue-500/30 mb-8">
              <Globe className="w-4 h-4 text-blue-400 mr-2" />
              <span className="text-blue-300 text-sm font-medium">Strategic Partnerships</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              Trusted by Leading
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                DePIN Networks
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We've partnered with the most innovative decentralized physical infrastructure networks 
              to bring you unmatched earning opportunities and technological integration.
            </p>
          </div>
          
          {/* Partners Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
            {partners.map((partner, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-slate-900/50 via-slate-800/30 to-slate-900/50 backdrop-blur-xl border border-slate-700/40 hover:border-blue-500/30 rounded-xl p-6 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="h-16 flex items-center justify-center">
                    <Image 
                      src={partner.logo} 
                      alt={partner.name} 
                      width={120} 
                      height={60} 
                      className="max-h-12 w-auto opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                  <h3 className="text-white font-medium text-lg">{partner.name}</h3>
                  <p className="text-gray-400 text-xs">{partner.description}</p>
                  <a 
                    href={partner.website} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-xs text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Visit Website
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          {/* Integration Benefits */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-slate-900/50 via-slate-800/30 to-slate-900/50 backdrop-blur-xl border border-slate-700/40 rounded-xl p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Verified Integration</h3>
              <p className="text-gray-400 text-sm">
                All partner networks are officially integrated and verified for optimal performance and security.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-slate-900/50 via-slate-800/30 to-slate-900/50 backdrop-blur-xl border border-slate-700/40 rounded-xl p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Enhanced Rewards</h3>
              <p className="text-gray-400 text-sm">
                Exclusive bonus rewards and optimized earning potential through our strategic partnerships.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-slate-900/50 via-slate-800/30 to-slate-900/50 backdrop-blur-xl border border-slate-700/40 rounded-xl p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Certified Technology</h3>
              <p className="text-gray-400 text-sm">
                Our hardware and software have been certified by each partner network for maximum compatibility.
              </p>
            </div>
          </div>
          
          {/* CTA */}
          <div className="mt-16 text-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white font-medium px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Learn About Partnership Benefits
            </Button>
          </div>
        </div>
      </SmoothScrollSection>

      {/* Final CTA */}
      <SmoothScrollSection className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-black">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Ready to join the
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
              mobile revolution?
            </span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            Experience the convergence of AI, blockchain, and mobile technology with NexAI Phone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products">
            <Button
              size="lg"
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white font-medium px-12 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-purple-500/25 w-full sm:w-auto"
            >
                Explore Products
            </Button>
            </Link>
            <Link href="/whitepaper">
            <Button
              size="lg"
              variant="outline"
                className="border-2 border-blue-500/30 text-white hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 font-medium px-12 py-4 rounded-full transition-all duration-300 backdrop-blur-xl w-full sm:w-auto"
            >
              <Download className="w-5 h-5 mr-2" />
                Learn More
            </Button>
            </Link>
          </div>
        </div>
      </SmoothScrollSection>
    </PageLayout>
  )
}
