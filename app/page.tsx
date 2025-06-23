"use client"

import type React from "react"

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
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose
} from "@/components/ui/dialog"
import { useToast } from "@/hooks/use-toast"

// Apple-style smooth scroll component
const SmoothScrollSection = ({ children, className = "", id }: { children: React.ReactNode; className?: string; id?: string }) => {
  return <section id={id} className={`relative overflow-hidden ${className}`}>{children}</section>
}

// Enhanced Apple-style feature highlight component with 3D effects
const FeatureHighlight = ({ title, description, icon: Icon, gradient }: any) => {
  return (
    <div className="group cursor-pointer perspective-1000">
      <div className="relative bg-gradient-to-br from-slate-900/50 via-slate-800/30 to-slate-900/50 rounded-3xl p-8 backdrop-blur-2xl border border-blue-500/30 shadow-2xl shadow-blue-500/25 transform hover:scale-105 hover:-translate-y-2 transition-all duration-500">
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Mining Status</span>
            <span className="text-green-400 font-medium flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              Active
            </span>
        </div>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-white">Daily Earnings</span>
                <span className="text-white font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  $24.67
                </span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-3 shadow-inner">
                <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 h-3 rounded-full w-3/4 shadow-lg shadow-blue-500/50 animate-pulse"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-white">Hash Rate</span>
                <span className="text-white font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  2.4 TH/s
                </span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-3 shadow-inner">
                <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-emerald-400 h-3 rounded-full w-5/6 shadow-lg shadow-purple-500/50 animate-pulse delay-500"></div>
              </div>
            </div>
          </div>
        </div>
        {/* 3D highlight effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-xl opacity-50 -z-10"></div>
      </div>
    </div>
  )
}

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  // 预定弹窗相关状态
  const [orderOpen, setOrderOpen] = useState(false)
  const [orderStep, setOrderStep] = useState(1)
  const [orderModel, setOrderModel] = useState('')
  const [orderForm, setOrderForm] = useState({ name: '', phone: '', email: '' })
  const { toast } = useToast()

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    setIsVisible(true)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white overflow-x-hidden">
      {/* Enhanced Navigation with new logo */}
      <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-slate-950/90 via-slate-900/90 to-slate-950/90 backdrop-blur-2xl border-b border-blue-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-14 sm:h-16">
            <div className="flex items-center space-x-3">
              <div className="relative w-8 h-8 sm:w-10 sm:h-10">
                <Image
                  src="/images/nexai-logo.png"
                  alt="NexAI Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
              <span className="text-lg sm:text-xl font-medium bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                NexAI
              </span>
            </div>
            <div className="hidden lg:flex items-center space-x-8">
              <a
                href="#overview"
                className="text-gray-300 hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 hover:bg-clip-text hover:text-transparent transition-all duration-300 text-sm font-medium"
              >
                Overview
              </a>
              <a
                href="#features"
                className="text-gray-300 hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 hover:bg-clip-text hover:text-transparent transition-all duration-300 text-sm font-medium"
              >
                Features
              </a>
              <a
                href="#team"
                className="text-gray-300 hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 hover:bg-clip-text hover:text-transparent transition-all duration-300 text-sm font-medium"
              >
                Team
              </a>
              <a
                href="#security"
                className="text-gray-300 hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 hover:bg-clip-text hover:text-transparent transition-all duration-300 text-sm font-medium"
              >
                Security
              </a>
              <a
                href="#pricing"
                className="text-gray-300 hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 hover:bg-clip-text hover:text-transparent transition-all duration-300 text-sm font-medium"
              >
                Pricing
              </a>
              <Button className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white font-medium px-6 py-2 rounded-full transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-purple-500/25">
                Buy
              </Button>
            </div>
            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Button
                size="sm"
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white font-medium px-4 py-2 rounded-full transition-all duration-300 shadow-lg shadow-blue-500/25 text-xs"
              >
                Buy
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Enhanced with mobile optimization */}
      <SmoothScrollSection className="min-h-screen flex items-center justify-center pt-16 relative">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-br from-slate-950 via-slate-900 to-black">
            {/* Hero AI Background */}
            <div className="w-full h-full opacity-30 bg-center bg-cover bg-no-repeat" 
                 style={{backgroundImage: "url('/images/hero-ai-background.jpg')"}}
            ></div>
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
                  <span className="text-white">The future of</span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
                    intelligent mobile
                  </span>
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
                    12.5 TOPS
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400 font-medium">AI Processing</div>
                </div>
                <div className="text-center group">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">
                    48 Hours
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400 font-medium">Battery Life</div>
                </div>
                <div className="text-center group">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">
                    15+ Chains
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400 font-medium">Blockchains</div>
                </div>
                <div className="text-center group">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">
                    8 DePIN
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400 font-medium">Networks</div>
                </div>
              </div>

              {/* Enhanced CTA buttons - mobile optimized */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-blue-500/25 hover:shadow-purple-500/25 text-sm sm:text-base"
                >
                  Pre-order now
                </Button>
                <Link href="/whitepaper">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-blue-500/30 text-white hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 backdrop-blur-xl shadow-lg hover:border-purple-500/40 text-sm sm:text-base"
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

                                {/* Central Image with Surrounding Feature Cards */}
           <div className="relative">
             {/* Header Section */}
             <div className="text-center mb-16">
               <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                 Revolutionary
                 <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"> AI Architecture</span>
               </h3>
               <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto">
                 Powered by our custom NexAI A1 chip, delivering unprecedented AI processing capabilities while maintaining optimal energy efficiency.
               </p>
             </div>

             {/* Main Layout with Central Image */}
             <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center">
               {/* Left Feature Cards */}
               <div className="space-y-6">
                 {[
                   {
                     title: "AI-Powered Mining",
                     description: "Revolutionary neural processing optimizes cryptocurrency mining with zero performance impact",
                     icon: Brain,
                     gradient: "from-blue-500 to-cyan-500"
                   },
                   {
                     title: "Quantum Security", 
                     description: "Military-grade encryption with quantum-resistant algorithms for ultimate protection",
                     icon: Shield,
                     gradient: "from-purple-500 to-pink-500"
                   }
                 ].map((feature, index) => (
                   <div key={index} className="group relative">
                     {/* Connection Line to Center */}
                     <div className="hidden lg:block absolute top-1/2 -right-8 w-8 h-px bg-gradient-to-r from-blue-500/60 to-transparent"></div>
                     
                     <div className="p-5 rounded-2xl bg-slate-800/40 border border-slate-700/40 hover:border-blue-500/40 hover:bg-slate-800/60 transition-all duration-300">
                       <div className="flex items-start space-x-4">
                         <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} bg-opacity-20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                           <feature.icon className="w-6 h-6 text-white" />
                         </div>
                         <div className="flex-1">
                           <h4 className="text-white font-semibold mb-2 group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                             {feature.title}
                           </h4>
                           <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                             {feature.description}
                           </p>
                         </div>
                       </div>
                     </div>
                   </div>
                 ))}
               </div>

               {/* Center - NexAI A1 Chip Image */}
               <div className="flex justify-center">
                 <div className="relative group">
                   <div className="w-full max-w-sm h-[500px] rounded-3xl bg-gradient-to-br from-slate-800/50 via-slate-900/30 to-slate-800/50 flex items-center justify-center border border-blue-500/20 relative overflow-hidden backdrop-blur-xl shadow-2xl shadow-blue-500/25 group-hover:shadow-purple-500/25 transition-all duration-500">
                     <img 
                       src="/images/nexai-a1-chip.png" 
                       alt="NexAI A1 Bionic Chip - 12.5 TOPS AI Processor"
                       className="w-full h-full object-contain rounded-3xl opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                       onError={(e) => {
                         e.currentTarget.style.display = 'none';
                         const nextEl = e.currentTarget.nextElementSibling as HTMLElement;
                         if (nextEl) {
                           nextEl.style.display = 'flex';
                         }
                       }}
                     />
                     <div className="hidden w-full h-full items-center justify-center flex-col text-gray-400 bg-gradient-to-br from-slate-800/50 via-blue-900/30 to-purple-900/30 backdrop-blur-sm">
                       <Cpu className="w-20 h-20 mb-4 text-blue-400" />
                       <span className="text-2xl font-semibold">NexAI A1 Chip</span>
                       <span className="text-lg text-blue-300">12.5 TOPS AI Processing</span>
                     </div>
                   </div>
                   
                   {/* Central Info Labels */}
                   <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500/90 to-purple-500/90 backdrop-blur-xl rounded-full px-6 py-3 border border-blue-400/30 shadow-2xl shadow-blue-500/25">
                     <div className="text-white font-bold text-lg text-center">12.5 TOPS</div>
                     <div className="text-blue-100 text-sm text-center">AI Performance</div>
                   </div>
                   
                   <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500/90 to-pink-500/90 backdrop-blur-xl rounded-full px-6 py-3 border border-purple-400/30 shadow-2xl shadow-purple-500/25">
                     <div className="text-white font-bold text-lg text-center">3nm Process</div>
                     <div className="text-purple-100 text-sm text-center">Advanced Node</div>
                   </div>
                 </div>
               </div>

               {/* Right Feature Cards */}
               <div className="space-y-6">
                 {[
                   {
                     title: "Multi-Chain DeFi",
                     description: "Native access to 15+ blockchain networks with seamless cross-chain functionality",
                     icon: Network,
                     gradient: "from-green-500 to-emerald-500"
                   },
                   {
                     title: "Smart Analytics",
                     description: "Real-time market analysis and portfolio optimization powered by machine learning",
                     icon: TrendingUp,
                     gradient: "from-orange-500 to-red-500"
                   }
                 ].map((feature, index) => (
                   <div key={index} className="group relative">
                     {/* Connection Line to Center */}
                     <div className="hidden lg:block absolute top-1/2 -left-8 w-8 h-px bg-gradient-to-l from-purple-500/60 to-transparent"></div>
                     
                     <div className="p-5 rounded-2xl bg-slate-800/40 border border-slate-700/40 hover:border-purple-500/40 hover:bg-slate-800/60 transition-all duration-300">
                       <div className="flex items-start space-x-4">
                         <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} bg-opacity-20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                           <feature.icon className="w-6 h-6 text-white" />
                         </div>
                         <div className="flex-1">
                           <h4 className="text-white font-semibold mb-2 group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                             {feature.title}
                           </h4>
                           <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                             {feature.description}
                           </p>
                         </div>
                       </div>
                     </div>
                   </div>
                 ))}
               </div>
             </div>

             {/* Enhanced Performance Section */}
             <div className="mt-24">
               {/* Connection Line from Center */}
               <div className="hidden lg:block absolute top-[520px] left-1/2 transform -translate-x-1/2 w-px h-20 bg-gradient-to-b from-purple-500/60 to-transparent"></div>
               
               {/* Header with Enhanced Animation */}
               <div className="text-center mb-16">
                 <div className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-orange-500/20 via-pink-500/20 to-purple-500/20 border border-orange-500/30 mb-8">
                   <Sparkles className="w-5 h-5 text-orange-400 mr-2" />
                   <span className="text-orange-300 font-medium">Peak Performance Engineering</span>
                 </div>
                 
                 <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
                   Engineered for
                   <br />
                   <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                     peak performance
                   </span>
                 </h3>
                 <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
                   Every component has been meticulously designed and optimized to deliver unprecedented computational power and energy efficiency.
                 </p>
               </div>

               {/* Performance Cards Grid */}
               <div className="bg-gradient-to-br from-slate-900/60 via-slate-800/40 to-slate-900/60 rounded-3xl p-8 lg:p-12 backdrop-blur-2xl border border-orange-500/20 shadow-2xl shadow-orange-500/25 mb-16">
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                   {[
                     {
                       title: "Neural Engine",
                       value: "12.5 TOPS",
                       description: "AI processing power",
                       icon: Brain,
                       gradient: "from-blue-500 to-cyan-500",
                       bgGradient: "from-blue-500/10 to-cyan-500/10"
                     },
                     {
                       title: "Battery Life",
                       value: "48 Hours",
                       description: "Mining + daily use",
                       icon: Battery,
                       gradient: "from-green-500 to-emerald-500",
                       bgGradient: "from-green-500/10 to-emerald-500/10"
                     },
                     {
                       title: "Security Chip",
                       value: "Quantum-safe",
                       description: "256-bit encryption",
                       icon: Shield,
                       gradient: "from-purple-500 to-pink-500",
                       bgGradient: "from-purple-500/10 to-pink-500/10"
                     },
                     {
                       title: "Connectivity",
                       value: "5G + Wi-Fi 7",
                       description: "Ultra-fast networking",
                       icon: Wifi,
                       gradient: "from-pink-500 to-red-500",
                       bgGradient: "from-pink-500/10 to-red-500/10"
                     },
                     {
                       title: "DePIN Networks",
                       value: "8+ Protocols",
                       description: "Supported networks",
                       icon: Globe,
                       gradient: "from-teal-500 to-cyan-500",
                       bgGradient: "from-teal-500/10 to-cyan-500/10"
                     }
                   ].map((feature, index) => (
                     <div key={index} className="group relative">
                       <div className={`p-6 rounded-2xl bg-gradient-to-br ${feature.bgGradient} border border-slate-600/30 hover:border-slate-500/50 transition-all duration-300 text-center backdrop-blur-sm group-hover:scale-105 group-hover:-translate-y-2`}>
                         <div className="flex items-center justify-center mb-4">
                           <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                             <feature.icon className="w-8 h-8 text-white" />
                           </div>
                         </div>
                         <h4 className="text-white font-bold text-lg mb-2">
                           {feature.title}
                         </h4>
                         <div className={`bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent font-bold text-xl mb-2`}>
                           {feature.value}
                         </div>
                         <p className="text-gray-300 text-sm">
                           {feature.description}
                         </p>
                       </div>
                     </div>
                   ))}
                 </div>
               </div>

               {/* Technical Specifications */}
               <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                 {[
                   {
                     title: "Processing Power",
                     specs: [
                       "3nm A1 Bionic Chip",
                       "12.5 TOPS Neural Engine",
                       "64GB RAM Support",
                       "1TB Storage Options"
                     ],
                     icon: Cpu,
                     gradient: "from-blue-500 to-cyan-500"
                   },
                   {
                     title: "Energy Management",
                     specs: [
                       "48-hour Battery Life",
                       "Adaptive Power Control",
                       "Smart Mining Throttling",
                       "Wireless Charging 15W"
                     ],
                     icon: Battery,
                     gradient: "from-green-500 to-emerald-500"
                   },
                   {
                     title: "Security Features",
                     specs: [
                       "Hardware Security Module",
                       "Biometric Authentication",
                       "Quantum-resistant Encryption",
                       "Secure Enclave Technology"
                     ],
                     icon: Shield,
                     gradient: "from-purple-500 to-pink-500"
                   },
                   {
                     title: "Connectivity",
                     specs: [
                       "5G mmWave Support",
                       "Wi-Fi 7 (802.11be)",
                       "Bluetooth 5.4",
                       "NFC & UWB"
                     ],
                     icon: Wifi,
                     gradient: "from-pink-500 to-red-500"
                   }
                 ].map((category, index) => (
                   <div key={index} className="group p-6 rounded-2xl bg-slate-800/40 border border-slate-700/40 hover:border-orange-500/40 hover:bg-slate-800/60 transition-all duration-300">
                     <div className="flex items-center mb-4">
                       <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.gradient} bg-opacity-20 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                         <category.icon className="w-6 h-6 text-white" />
                       </div>
                       <h4 className="text-white font-semibold group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-pink-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                         {category.title}
                       </h4>
                     </div>
                     <ul className="space-y-2">
                       {category.specs.map((spec, specIndex) => (
                         <li key={specIndex} className="text-gray-400 text-sm flex items-center">
                           <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-3 flex-shrink-0"></div>
                           {spec}
                         </li>
                       ))}
                     </ul>
                   </div>
                 ))}
               </div>
             </div>

             {/* Performance Metrics */}
             <div className="mt-16 max-w-2xl mx-auto p-6 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-blue-500/20">
               <h4 className="text-white font-semibold mb-6 text-center">Performance Metrics</h4>
               <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                 <div className="text-center">
                   <div className="text-blue-400 text-2xl font-bold">12.5</div>
                   <div className="text-gray-400 text-xs">TOPS AI</div>
                 </div>
                 <div className="text-center">
                   <div className="text-purple-400 text-2xl font-bold">3nm</div>
                   <div className="text-gray-400 text-xs">Process</div>
                 </div>
                 <div className="text-center">
                   <div className="text-green-400 text-2xl font-bold">48H</div>
                   <div className="text-gray-400 text-xs">Battery</div>
                 </div>
                 <div className="text-center">
                   <div className="text-pink-400 text-2xl font-bold">5G</div>
                   <div className="text-gray-400 text-xs">Ready</div>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </SmoothScrollSection>

      {/* Enhanced Product Showcase */}
      <SmoothScrollSection id="features" className="py-32 bg-gradient-to-br from-black via-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          {/* Feature 1 - Enhanced */}
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
            <div>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                Mine while you
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  live your life
                </span>
              </h3>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Advanced AI algorithms automatically optimize mining operations in the background, generating passive
                income without affecting your daily smartphone experience.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Autonomous mining optimization</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Zero impact on performance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Real-time earnings tracking</span>
                </div>
              </div>
            </div>
            <div className="relative perspective-1000">
              <div className="bg-gradient-to-br from-slate-900/50 via-slate-800/30 to-slate-900/50 rounded-3xl p-8 backdrop-blur-2xl border border-blue-500/30 shadow-2xl shadow-blue-500/25 transform hover:scale-105 hover:-translate-y-2 transition-all duration-500">
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Mining Status</span>
                    <span className="text-green-400 font-medium flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                      Active
                    </span>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-white">Daily Earnings</span>
                        <span className="text-white font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                          $24.67
                        </span>
                      </div>
                      <div className="w-full bg-slate-800 rounded-full h-3 shadow-inner">
                        <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 h-3 rounded-full w-3/4 shadow-lg shadow-blue-500/50 animate-pulse"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-white">Hash Rate</span>
                        <span className="text-white font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                          2.4 TH/s
                        </span>
                      </div>
                      <div className="w-full bg-slate-800 rounded-full h-3 shadow-inner">
                        <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-emerald-400 h-3 rounded-full w-5/6 shadow-lg shadow-purple-500/50 animate-pulse delay-500"></div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* 3D highlight effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-xl opacity-50 -z-10"></div>
              </div>
            </div>
          </div>

          {/* Feature 2 - Enhanced */}
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
            <div className="lg:order-2">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                Your gateway to
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                  Web3 ecosystem
                </span>
              </h3>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Seamlessly interact with decentralized applications, trade NFTs, participate in DAOs, and manage your
                entire digital asset portfolio from one intuitive interface.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center group">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                    15+
                  </div>
                  <div className="text-sm text-gray-400">Blockchain Networks</div>
                </div>
                <div className="text-center group">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                    500+
                  </div>
                  <div className="text-sm text-gray-400">DeFi Protocols</div>
                </div>
                <div className="text-center group">
                  <div className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                    $2.4B
                  </div>
                  <div className="text-sm text-gray-400">TVL Supported</div>
                </div>
                <div className="text-center group">
                  <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                    99.9%
                  </div>
                  <div className="text-sm text-gray-400">Uptime</div>
                </div>
              </div>
            </div>
            <div className="lg:order-1 perspective-1000">
              <div className="bg-gradient-to-br from-slate-900/50 via-slate-800/30 to-slate-900/50 rounded-3xl p-8 backdrop-blur-2xl border border-purple-500/30 shadow-2xl shadow-purple-500/25 transform hover:scale-105 hover:-translate-y-2 transition-all duration-500">
                <div className="space-y-6">
                  <h4 className="text-xl font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Portfolio Overview
                  </h4>
                  <div className="space-y-4">
                    {[
                      {
                        name: "Bitcoin",
                        symbol: "BTC",
                        amount: "0.245",
                        value: "$12,450",
                        change: "+5.2%",
                        gradient: "from-orange-400 to-yellow-400",
                      },
                      {
                        name: "Ethereum",
                        symbol: "ETH",
                        amount: "2.67",
                        value: "$8,340",
                        change: "+3.1%",
                        gradient: "from-blue-400 to-purple-400",
                      },
                      {
                        name: "NexAI Token",
                        symbol: "NEX",
                        amount: "1,250",
                        value: "$3,750",
                        change: "+12.8%",
                        gradient: "from-purple-400 to-pink-400",
                      },
                    ].map((asset, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center p-3 rounded-xl bg-gradient-to-r from-slate-800/50 to-slate-700/50 border border-slate-600/30 hover:border-purple-500/30 transition-all duration-300"
                      >
                        <div>
                          <div className="text-white font-medium">{asset.name}</div>
                          <div className="text-gray-400 text-sm">
                            {asset.amount} {asset.symbol}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-white font-semibold">{asset.value}</div>
                          <div
                            className={`text-sm bg-gradient-to-r ${asset.gradient} bg-clip-text text-transparent font-medium`}
                          >
                            {asset.change}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* 3D highlight effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-red-500/10 rounded-3xl blur-xl opacity-50 -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </SmoothScrollSection>

      {/* Enhanced Tech Specs */}
      <SmoothScrollSection id="tech" className="py-32 bg-gradient-to-br from-slate-950 via-slate-900 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Engineered for
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                peak performance
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Every component has been meticulously designed and optimized to deliver unprecedented computational power
              and energy efficiency.
            </p>
          </div>



          {/* Enhanced detailed specs table */}
          <div className="mt-20 bg-gradient-to-br from-slate-900/50 via-slate-800/30 to-slate-900/50 rounded-3xl p-8 backdrop-blur-2xl border border-blue-500/20 shadow-2xl shadow-blue-500/25">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-8 text-center">
              Complete Technical Specifications
            </h3>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Performance
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between p-2 rounded-lg bg-slate-800/30 border border-slate-700/30">
                      <span className="text-gray-400">Processor</span>
                      <span className="text-white font-medium">NexAI A1 Bionic</span>
                    </div>
                    <div className="flex justify-between p-2 rounded-lg bg-slate-800/30 border border-slate-700/30">
                      <span className="text-gray-400">Neural Engine</span>
                      <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-medium">
                        12.5 TOPS
                      </span>
                    </div>
                    <div className="flex justify-between p-2 rounded-lg bg-slate-800/30 border border-slate-700/30">
                      <span className="text-gray-400">Memory</span>
                      <span className="text-white font-medium">12GB LPDDR5</span>
                    </div>
                    <div className="flex justify-between p-2 rounded-lg bg-slate-800/30 border border-slate-700/30">
                      <span className="text-gray-400">Storage</span>
                      <span className="text-white font-medium">256GB / 512GB / 1TB</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Display
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between p-2 rounded-lg bg-slate-800/30 border border-slate-700/30">
                      <span className="text-gray-400">Size</span>
                      <span className="text-white font-medium">6.7" Super Retina XDR</span>
                    </div>
                    <div className="flex justify-between p-2 rounded-lg bg-slate-800/30 border border-slate-700/30">
                      <span className="text-gray-400">Resolution</span>
                      <span className="text-white font-medium">2796 × 1290 pixels</span>
                    </div>
                    <div className="flex justify-between p-2 rounded-lg bg-slate-800/30 border border-slate-700/30">
                      <span className="text-gray-400">Refresh Rate</span>
                      <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-medium">
                        120Hz ProMotion
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4 bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
                    Mining & Web3
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between p-2 rounded-lg bg-slate-800/30 border border-slate-700/30">
                      <span className="text-gray-400">Hash Rate</span>
                      <span className="bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent font-medium">
                        Up to 2.4 TH/s
                      </span>
                    </div>
                    <div className="flex justify-between p-2 rounded-lg bg-slate-800/30 border border-slate-700/30">
                      <span className="text-gray-400">Supported Chains</span>
                      <span className="text-white font-medium">15+ Networks</span>
                    </div>
                    <div className="flex justify-between p-2 rounded-lg bg-slate-800/30 border border-slate-700/30">
                      <span className="text-gray-400">Wallet Security</span>
                      <span className="text-white font-medium">Hardware HSM</span>
                    </div>
                    <div className="flex justify-between p-2 rounded-lg bg-slate-800/30 border border-slate-700/30">
                      <span className="text-gray-400">DeFi Protocols</span>
                      <span className="text-white font-medium">500+ Supported</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                    Battery & Charging
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between p-2 rounded-lg bg-slate-800/30 border border-slate-700/30">
                      <span className="text-gray-400">Capacity</span>
                      <span className="text-white font-medium">5000mAh</span>
                    </div>
                    <div className="flex justify-between p-2 rounded-lg bg-slate-800/30 border border-slate-700/30">
                      <span className="text-gray-400">Fast Charging</span>
                      <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent font-medium">
                        65W Wireless
                      </span>
                    </div>
                    <div className="flex justify-between p-2 rounded-lg bg-slate-800/30 border border-slate-700/30">
                      <span className="text-gray-400">Mining Duration</span>
                      <span className="text-white font-medium">48+ hours</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SmoothScrollSection>

      {/* Enhanced Pricing */}
      <SmoothScrollSection id="pricing" className="py-32 bg-gradient-to-br from-black via-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Choose your
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                NexAI Phone
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Three storage options designed to meet your digital asset management and mining performance needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "NexAI Phone",
                storage: "128GB",
                price: "$299",
                features: [
                  "8 TOPS AI Engine",
                  "128GB Storage",
                  "Basic Mining Package",
                  "Standard DeFi Access",
                  "1-Year Warranty",
                ],
                popular: false,
                gradient: "from-blue-500 via-cyan-500 to-emerald-400",
                borderGradient: "border-cyan-400/40",
                shadowColor: "shadow-cyan-400/20",
                priceGradient: "from-blue-400 to-emerald-400",
                buttonGradient: "from-blue-500 to-emerald-500",
              },
              {
                name: "NexAI Phone Pro",
                storage: "256GB",
                price: "$399",
                features: [
                  "12.5 TOPS AI Engine",
                  "256GB Storage",
                  "Advanced Mining Package",
                  "Premium DeFi Access",
                  "2-Year Warranty",
                ],
                popular: true,
                gradient: "from-purple-500 via-pink-500 to-fuchsia-400",
                borderGradient: "border-pink-400/40",
                shadowColor: "shadow-pink-400/20",
                priceGradient: "from-purple-400 to-pink-400",
                buttonGradient: "from-purple-500 to-pink-500",
              },
              {
                name: "NexAI Phone Max",
                storage: "512GB",
                price: "$499",
                features: [
                  "12.5 TOPS AI Engine",
                  "512GB Storage",
                  "Pro Mining Package",
                  "Full DeFi Suite Access",
                  "3-Year Warranty",
                ],
                popular: false,
                gradient: "from-pink-500 via-red-500 to-orange-400",
                borderGradient: "border-orange-400/40",
                shadowColor: "shadow-orange-400/20",
                priceGradient: "from-pink-400 to-orange-400",
                buttonGradient: "from-pink-500 to-orange-500",
              },
            ].map((model, index) => (
              <Card
                key={index}
                className={`relative bg-gradient-to-br from-slate-900/50 via-slate-800/30 to-slate-900/50 border-2 ${model.borderGradient} hover:border-opacity-80 transition-all duration-500 backdrop-blur-2xl transform hover:scale-105 hover:-translate-y-2 shadow-2xl ${model.shadowColor} perspective-1000 ${
                  model.popular ? "ring-2 ring-pink-400/50 scale-105" : ""
                }`}
              >
                {model.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full shadow-lg shadow-pink-500/25">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center p-8">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${model.gradient} flex items-center justify-center mx-auto mb-6 shadow-lg relative overflow-hidden`}>
                    <Image src="/images/nexai-logo.png" alt="NexAI Logo" fill className="object-cover rounded-2xl" />
                  </div>
                  <CardTitle className="text-white text-xl mb-2 hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 hover:bg-clip-text hover:text-transparent transition-all duration-300">
                    {model.name}
                  </CardTitle>
                  <div className="text-gray-400 mb-4">{model.storage}</div>
                  <div
                    className={`text-4xl font-bold bg-gradient-to-r ${model.priceGradient} bg-clip-text text-transparent mb-6`}
                  >
                    {model.price}
                  </div>
                  <div className="space-y-3 mb-8">
                    {model.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center justify-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button
                    className={`w-full bg-gradient-to-r ${model.buttonGradient} text-white font-semibold py-2 rounded-xl shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300 border-0 mt-2`}
                    onClick={() => { setOrderModel(model.name); setOrderOpen(true); setOrderStep(1); setOrderForm({ name: '', phone: '', email: '' }) }}
                  >
                    Pre-order
                  </Button>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 mb-4">Free shipping and returns. Pay monthly at 0% APR with Apple Card.</p>
            <Button
              variant="outline"
              className="border-blue-500/30 text-white hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 rounded-full backdrop-blur-xl"
            >
              Learn more about financing
            </Button>
          </div>
        </div>
      </SmoothScrollSection>

      {/* Team & Company Section */}
      <SmoothScrollSection id="team" className="py-32 bg-gradient-to-br from-slate-950 via-slate-900 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Meet the
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                NexAI Team
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              World-class experts in AI, blockchain, and mobile technology working together to revolutionize the mobile industry.
            </p>
          </div>

          {/* 团队合照横幅 */}
          <div className="w-full flex justify-center mb-16">
            <img src="/images/Team.jpg" alt="NexAI Team Group" className="rounded-3xl shadow-2xl max-w-3xl w-full object-cover" style={{height:'340px'}} />
          </div>

          {/* Leadership Team */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              {
                name: "Dr. Sarah Chen",
                role: "CEO & Co-Founder",
                background: "Former Apple Senior AI Engineer",
                image: "/images/Sarah Chen.png",
                credentials: ["PhD Computer Science - Stanford", "15+ years in mobile AI", "Former Apple Neural Engine Team Lead"]
              },
              {
                name: "Michael Rodriguez",
                role: "CTO & Co-Founder",
                background: "Ex-Qualcomm Blockchain Architect",
                image: "/images/Michael Rodriguez.png",
                credentials: ["MS Engineering - MIT", "Blockchain expert since 2013", "20+ patents in mobile security"]
              },
              {
                name: "Dr. James Liu",
                role: "Head of AI Research",
                background: "Former Google DeepMind Researcher",
                image: "/images/James.png",
                credentials: ["PhD Machine Learning - Carnegie Mellon", "Published 50+ AI papers", "Google AI Breakthrough Award Winner"]
              }
            ].map((member, index) => (
              <Card key={index} className="bg-gradient-to-br from-slate-900/50 via-slate-800/30 to-slate-900/50 border border-blue-500/20 hover:border-purple-500/40 transition-all duration-500 backdrop-blur-2xl">
                <CardHeader className="text-center p-8">
                  <div className="w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden shadow-lg bg-gradient-to-br from-blue-500 to-purple-500">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <CardTitle className="text-white text-xl mb-2">{member.name}</CardTitle>
                  <div className="text-blue-400 font-medium mb-2">{member.role}</div>
                  <div className="text-gray-400 text-sm mb-4">{member.background}</div>
                  <div className="space-y-2">
                    {member.credentials.map((cred, credIndex) => (
                      <div key={credIndex} className="flex items-center justify-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300 text-xs">{cred}</span>
                      </div>
                    ))}
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* Company Credentials */}
          <div className="bg-gradient-to-br from-slate-900/50 via-slate-800/30 to-slate-900/50 rounded-3xl p-8 backdrop-blur-2xl border border-blue-500/20 shadow-2xl shadow-blue-500/25">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-8 text-center">
              Company Credentials & Certifications
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "ISO 27001", subtitle: "Information Security", icon: Shield },
                { title: "FCC Certified", subtitle: "Radio Frequency Compliance", icon: Zap },
                { title: "CE Marking", subtitle: "European Conformity", icon: CheckCircle },
                { title: "FIDO2 Certified", subtitle: "Authentication Security", icon: Shield }
              ].map((cert, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <cert.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <div className="text-white font-semibold mb-1">{cert.title}</div>
                  <div className="text-gray-400 text-sm">{cert.subtitle}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SmoothScrollSection>

      {/* Roadmap Section */}
      <SmoothScrollSection id="roadmap" className="py-32 bg-gradient-to-br from-black via-slate-950 to-slate-900">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Development Roadmap
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Transparent development progress with clear milestones and regular updates.
            </p>
          </div>

          <div className="space-y-12">
            {[
              {
                quarter: "Q4 2024",
                status: "completed",
                title: "Foundation & Security",
                achievements: ["Hardware prototype completed", "Security audits passed", "Patent applications filed", "Core team assembled"]
              },
              {
                quarter: "Q1 2025",
                status: "current",
                title: "Software Development",
                achievements: ["AI engine optimization", "DePIN integration testing", "Mobile wallet development", "Beta testing program"]
              },
              {
                quarter: "Q2 2025",
                status: "upcoming",
                title: "Production & Launch",
                achievements: ["Mass production start", "Pre-order campaign", "Developer SDK release", "App store launch"]
              },
              {
                quarter: "Q3 2025",
                status: "planned",
                title: "Global Expansion",
                achievements: ["International shipping", "Additional DePIN networks", "Enterprise partnerships", "Version 2.0 planning"]
              }
            ].map((milestone, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex flex-col items-center">
                  <div className={`w-6 h-6 rounded-full border-4 ${
                    milestone.status === 'completed' ? 'bg-green-500 border-green-500' :
                    milestone.status === 'current' ? 'bg-blue-500 border-blue-500' :
                    'bg-slate-700 border-slate-600'
                  }`}></div>
                  {index < 3 && <div className="w-0.5 h-16 bg-slate-600 mt-4"></div>}
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="text-blue-400 font-semibold">{milestone.quarter}</div>
                    <Badge className={`${
                      milestone.status === 'completed' ? 'bg-green-500/20 text-green-400 border-green-500/30' :
                      milestone.status === 'current' ? 'bg-blue-500/20 text-blue-400 border-blue-500/30' :
                      'bg-slate-500/20 text-slate-400 border-slate-500/30'
                    }`}>
                      {milestone.status === 'completed' ? 'Completed' :
                       milestone.status === 'current' ? 'In Progress' :
                       milestone.status === 'upcoming' ? 'Next' : 'Planned'}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{milestone.title}</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {milestone.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-center space-x-2">
                        <CheckCircle className={`w-4 h-4 ${
                          milestone.status === 'completed' ? 'text-green-400' :
                          milestone.status === 'current' ? 'text-blue-400' :
                          'text-gray-500'
                        } flex-shrink-0`} />
                        <span className="text-gray-300 text-sm">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SmoothScrollSection>

      {/* Social Proof & Community */}
      <SmoothScrollSection id="community" className="py-32 bg-gradient-to-br from-slate-950 via-slate-900 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Trusted by
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Early Adopters
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Join thousands of forward-thinking users already earning with NexAI Phone.
            </p>
          </div>

          {/* Community Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {[
              { number: "15,000+", label: "Pre-orders", icon: TrendingUp },
              { number: "98%", label: "Satisfaction Rate", icon: CheckCircle },
              { number: "$2.4M", label: "Total Earnings", icon: Coins },
              { number: "45", label: "Countries", icon: Globe }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-blue-400" />
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">{stat.number}</div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* User Testimonials */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                name: "Alex Thompson",
                role: "Crypto Investor",
                avatar: "AT",
                rating: 5,
                review: "Been mining with NexAI for 3 months. Earning $25-40 daily while using it as my regular phone. Game changer!"
              },
              {
                name: "Maria Santos",
                role: "DeFi Enthusiast",
                avatar: "MS",
                rating: 5,
                review: "The AI features are incredible. Auto-staking optimization has increased my yields by 40%. Worth every penny."
              },
              {
                name: "David Chen",
                role: "Tech Entrepreneur",
                avatar: "DC",
                rating: 5,
                review: "Finally, a phone that pays for itself. The DePIN integrations are seamless and the security is enterprise-grade."
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-gradient-to-br from-slate-900/50 via-slate-800/30 to-slate-900/50 border border-blue-500/20 hover:border-purple-500/40 transition-all duration-500 backdrop-blur-2xl">
                <CardHeader className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                      <span className="text-white font-semibold">{testimonial.avatar}</span>
                    </div>
                    <div>
                      <div className="text-white font-semibold">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                  <div className="flex space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <div key={i} className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">"{testimonial.review}"</p>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* Media Coverage */}
          <div className="bg-gradient-to-br from-slate-900/50 via-slate-800/30 to-slate-900/50 rounded-3xl p-8 backdrop-blur-2xl border border-blue-500/20 shadow-2xl shadow-blue-500/25">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-8 text-center">
              Featured In
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 items-center">
              {[
                { name: "TechCrunch", quote: "Revolutionary AI-powered mobile mining" },
                { name: "Wired", quote: "The future of Web3 smartphones" },
                { name: "Forbes", quote: "Passive income meets premium hardware" },
                { name: "CoinDesk", quote: "Game-changing DePIN integration" }
              ].map((media, index) => (
                <div key={index} className="text-center">
                  <div className="text-white font-bold text-lg mb-2">{media.name}</div>
                  <div className="text-gray-400 text-sm">"{media.quote}"</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SmoothScrollSection>

      {/* FAQ Section */}
      <SmoothScrollSection id="faq" className="py-32 bg-gradient-to-br from-black via-slate-950 to-slate-900">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Frequently Asked
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Get answers to the most common questions about NexAI Phone technology, security, and earnings.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How much can I realistically earn per day?",
                answer: "Earnings vary based on network participation and market conditions. Our AI optimization typically generates $20-50 daily for active users, with some power users earning up to $75/day during peak periods. All earnings are transparently tracked in real-time."
              },
              {
                question: "Is my cryptocurrency safe on the device?",
                answer: "Yes. NexAI Phone uses bank-grade security with a dedicated Secure Enclave chip, hardware-level encryption, and biometric authentication. Your private keys never leave the secure hardware environment and are protected by the same technology used in banking systems."
              },
              {
                question: "Does mining affect phone performance or battery life?",
                answer: "No. Our proprietary AI algorithms optimize mining operations to run efficiently in the background without impacting your daily smartphone experience. The device maintains 48+ hours of battery life even during continuous mining operations."
              },
              {
                question: "Which blockchain networks are supported?",
                answer: "NexAI Phone supports 15+ major blockchain networks including Bitcoin, Ethereum, Solana, Polygon, and leading DePIN networks like Helium, Filecoin, and Render. New networks are added regularly through over-the-air updates."
              },
              {
                question: "What makes NexAI Phone different from other crypto phones?",
                answer: "Unlike previous attempts, NexAI Phone features a custom AI processor designed specifically for cryptocurrency operations, native DePIN integration, and autonomous optimization. We've learned from the limitations of devices like HTC Exodus and Solana Saga to create a truly next-generation product."
              },
              {
                question: "When will the phone be available and what's included?",
                answer: "Pre-orders begin Q2 2025 with shipping starting Q3 2025. Every NexAI Phone includes the device, wireless charger, premium accessories, 2-year warranty, and lifetime access to our mining optimization AI. No hidden fees or subscriptions."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-900/50 via-slate-800/30 to-slate-900/50 rounded-2xl p-6 backdrop-blur-2xl border border-blue-500/20 hover:border-purple-500/40 transition-all duration-500">
                <h3 className="text-white text-xl font-semibold mb-4 hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 hover:bg-clip-text hover:text-transparent transition-all duration-300">
                  {faq.question}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 mb-6">Still have questions?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white font-medium px-8 py-3 rounded-full transition-all duration-300">
                Contact Support
              </Button>
              <Button
                variant="outline"
                className="border-blue-500/30 text-white hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 rounded-full backdrop-blur-xl px-8 py-3"
              >
                Join Community
              </Button>
            </div>
          </div>
        </div>
      </SmoothScrollSection>

      {/* Enhanced Final CTA */}
      <SmoothScrollSection className="py-32 bg-gradient-to-br from-slate-950 via-slate-900 to-black">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
            The future is
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
              in your hands
            </span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-12">
            Join the revolution. Pre-order your NexAI Phone today and be among the first to experience the convergence
            of AI, blockchain, and mobile technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white font-medium px-12 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-purple-500/25"
            >
              Pre-order now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-blue-500/30 text-white hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 font-medium px-12 py-4 rounded-full transition-all duration-300 backdrop-blur-xl"
            >
              <Download className="w-5 h-5 mr-2" />
              Download brochure
            </Button>
          </div>
        </div>
      </SmoothScrollSection>

      {/* Simplified Footer with new logo */}
      <footer className="bg-gradient-to-br from-slate-950 via-slate-900 to-black border-t border-blue-500/20 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Header section with new logo */}
          <div className="text-center mb-8 sm:mb-12">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="relative w-10 h-10">
                <Image
                  src="/images/nexai-logo.png"
                  alt="NexAI Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl font-medium bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                NexAI
              </span>
            </div>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Revolutionizing mobile technology with AI-powered cryptocurrency mining and Web3 integration.
            </p>
          </div>

          {/* Simplified links grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div>
              <h3 className="text-white font-medium mb-3 sm:mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-sm sm:text-base">
                Products
              </h3>
              <div className="space-y-2 text-xs sm:text-sm text-gray-400">
                <div className="hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 hover:bg-clip-text hover:text-transparent transition-all duration-300 cursor-pointer">
                  NexAI Phone
                </div>
                <div className="hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 hover:bg-clip-text hover:text-transparent transition-all duration-300 cursor-pointer">
                  NexAI Phone Pro
                </div>
                <div className="hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 hover:bg-clip-text hover:text-transparent transition-all duration-300 cursor-pointer">
                  Accessories
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-white font-medium mb-3 sm:mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent text-sm sm:text-base">
                Services
              </h3>
              <div className="space-y-2 text-xs sm:text-sm text-gray-400">
                <div className="hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 hover:bg-clip-text hover:text-transparent transition-all duration-300 cursor-pointer">
                  Mining
                </div>
                <div className="hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 hover:bg-clip-text hover:text-transparent transition-all duration-300 cursor-pointer">
                  DeFi
                </div>
                <div className="hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 hover:bg-clip-text hover:text-transparent transition-all duration-300 cursor-pointer">
                  Web3 Wallet
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-white font-medium mb-3 sm:mb-4 bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent text-sm sm:text-base">
                Company
              </h3>
              <div className="space-y-2 text-xs sm:text-sm text-gray-400">
                <div className="hover:bg-gradient-to-r hover:from-pink-400 hover:to-red-400 hover:bg-clip-text hover:text-transparent transition-all duration-300 cursor-pointer">
                  About
                </div>
                <div className="hover:bg-gradient-to-r hover:from-pink-400 hover:to-red-400 hover:bg-clip-text hover:text-transparent transition-all duration-300 cursor-pointer">
                  Careers
                </div>
                <div className="hover:bg-gradient-to-r hover:from-pink-400 hover:to-red-400 hover:bg-clip-text hover:text-transparent transition-all duration-300 cursor-pointer">
                  Press
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-white font-medium mb-3 sm:mb-4 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent text-sm sm:text-base">
                Support
              </h3>
              <div className="space-y-2 text-xs sm:text-sm text-gray-400">
                <div className="hover:bg-gradient-to-r hover:from-green-400 hover:to-emerald-400 hover:bg-clip-text hover:text-transparent transition-all duration-300 cursor-pointer">
                  Contact
                </div>
                <div className="hover:bg-gradient-to-r hover:from-green-400 hover:to-emerald-400 hover:bg-clip-text hover:text-transparent transition-all duration-300 cursor-pointer">
                  Docs
                </div>
                <div className="hover:bg-gradient-to-r hover:from-green-400 hover:to-emerald-400 hover:bg-clip-text hover:text-transparent transition-all duration-300 cursor-pointer">
                  Community
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-blue-500/20 pt-6 sm:pt-8 text-center">
            <p className="text-gray-400 text-xs sm:text-sm">© 2025 NexAI Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* 全局预定Dialog弹窗 */}
      <Dialog open={orderOpen} onOpenChange={setOrderOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Pre-order {orderModel}</DialogTitle>
            <DialogDescription>Please fill in your order information</DialogDescription>
          </DialogHeader>
          {orderStep === 1 && (
            <form className="space-y-4" onSubmit={e => { e.preventDefault(); setOrderStep(2) }}>
              <div>
                <label className="block text-sm mb-1">Name</label>
                <label className="block text-sm mb-1">姓名</label>
                <input className="w-full rounded-lg bg-slate-800/40 border border-slate-700/40 px-3 py-2 text-white" required value={orderForm.name} onChange={e => setOrderForm(f => ({ ...f, name: e.target.value }))} />
              </div>
              <div>
                <label className="block text-sm mb-1">手机号</label>
                <input className="w-full rounded-lg bg-slate-800/40 border border-slate-700/40 px-3 py-2 text-white" required value={orderForm.phone} onChange={e => setOrderForm(f => ({ ...f, phone: e.target.value }))} />
              </div>
              <div>
                <label className="block text-sm mb-1">邮箱</label>
                <input type="email" className="w-full rounded-lg bg-slate-800/40 border border-slate-700/40 px-3 py-2 text-white" required value={orderForm.email} onChange={e => setOrderForm(f => ({ ...f, email: e.target.value }))} />
              </div>
              <div>
                <label className="block text-sm mb-1">机型</label>
                <input className="w-full rounded-lg bg-slate-800/40 border border-slate-700/40 px-3 py-2 text-white" value={orderModel} readOnly />
              </div>
              <DialogFooter>
                <Button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white">下一步</Button>
              </DialogFooter>
            </form>
          )}
          {orderStep === 2 && (
            <div className="space-y-6">
              <div className="text-center text-lg font-semibold text-white mb-4">请支付定金以完成预定</div>
              <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white" onClick={() => { setOrderOpen(false); setOrderStep(1); toast({ title: '未开始发售', description: '手机尚未开放预定，敬请期待！' }) }}>支付</Button>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline" className="w-full mt-2">取消</Button>
                </DialogClose>
              </DialogFooter>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
