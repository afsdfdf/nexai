"use client"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Download,
  FileText,
  Shield,
  Brain,
  Network,
  Cpu,
  Coins,
  TrendingUp,
  CheckCircle,
  ExternalLink,
  ArrowLeft
} from "lucide-react"
import Link from "next/link"

export default function WhitepaperPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-slate-950/90 via-slate-900/90 to-slate-950/90 backdrop-blur-2xl border-b border-blue-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-3">
              <ArrowLeft className="w-5 h-5 text-blue-400" />
              <span className="text-lg font-medium bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Back to Home
              </span>
            </Link>
            <div className="flex items-center space-x-4">
              <Button
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white font-medium px-6 py-2 rounded-full transition-all duration-300"
              >
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 text-blue-400 border border-blue-500/30 px-4 py-2 text-sm font-medium rounded-full backdrop-blur-xl shadow-lg shadow-blue-500/25 mb-8">
            <FileText className="w-4 h-4 mr-2" />
            Technical Whitepaper v2.0
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
            <span className="text-white">NexAI Phone</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Technical Whitepaper
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-12">
            A comprehensive technical overview of the world's first AI-powered smartphone designed for 
            decentralized physical infrastructure networks (DePIN) and autonomous cryptocurrency mining.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                68 Pages
              </div>
              <div className="text-gray-400">Comprehensive Analysis</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                15+ Charts
              </div>
              <div className="text-gray-400">Technical Diagrams</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                8 Sections
              </div>
              <div className="text-gray-400">Detailed Sections</div>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-12 text-center">
            Table of Contents
          </h2>
          
          <div className="grid gap-6">
            {[
              {
                section: "1",
                title: "Executive Summary",
                description: "High-level overview of NexAI Phone's revolutionary approach to mobile AI and DePIN integration",
                pages: "3-5",
                icon: FileText
              },
              {
                section: "2",
                title: "Market Analysis & Opportunity",
                description: "Comprehensive analysis of the mobile AI market and DePIN ecosystem growth potential",
                pages: "6-12",
                icon: TrendingUp
              },
              {
                section: "3",
                title: "Technical Architecture",
                description: "Detailed breakdown of hardware specifications, AI processing capabilities, and system design",
                pages: "13-24",
                icon: Cpu
              },
              {
                section: "4",
                title: "DePIN Network Integration",
                description: "Integration protocols for Helium, Filecoin, Render Network, and other DePIN ecosystems",
                pages: "25-35",
                icon: Network
              },
              {
                section: "5",
                title: "AI Mining & Consensus Mechanisms",
                description: "Advanced AI algorithms for autonomous mining optimization and network participation",
                pages: "36-45",
                icon: Brain
              },
              {
                section: "6",
                title: "Security Framework",
                description: "Multi-layered security architecture including hardware enclaves and cryptographic protocols",
                pages: "46-52",
                icon: Shield
              },
              {
                section: "7",
                title: "Tokenomics & Economic Model",
                description: "Token distribution, staking mechanisms, and economic incentive structures",
                pages: "53-60",
                icon: Coins
              },
              {
                section: "8",
                title: "Roadmap & Future Development",
                description: "Development milestones, upgrade paths, and long-term ecosystem expansion plans",
                pages: "61-68",
                icon: CheckCircle
              }
            ].map((item, index) => (
              <Card key={index} className="bg-gradient-to-br from-slate-900/50 via-slate-800/30 to-slate-900/50 border border-blue-500/20 hover:border-purple-500/40 transition-all duration-500 backdrop-blur-2xl group">
                <CardHeader className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-3">
                        <CardTitle className="text-white text-xl group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                          Section {item.section}: {item.title}
                        </CardTitle>
                        <Badge className="bg-slate-700/50 text-gray-300 border-slate-600/30">
                          Pages {item.pages}
                        </Badge>
                      </div>
                      <CardDescription className="text-gray-400 leading-relaxed">
                        {item.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-20 px-6 bg-gradient-to-br from-black via-slate-950 to-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-12 text-center">
            Key Technical Highlights
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "12.5 TOPS AI Processor",
                description: "Custom NexAI A1 Bionic chip with dedicated neural processing unit for real-time AI computations",
                metric: "12.5 TOPS",
                color: "from-blue-400 to-cyan-400"
              },
              {
                title: "Multi-Chain Mining",
                description: "Simultaneous participation in 15+ blockchain networks with intelligent workload distribution",
                metric: "15+ Chains",
                color: "from-purple-400 to-pink-400"
              },
              {
                title: "Secure Enclave",
                description: "Hardware-level security with isolated private key storage and biometric authentication",
                metric: "Bank-Grade",
                color: "from-green-400 to-emerald-400"
              },
              {
                title: "Energy Efficiency",
                description: "Advanced power management enabling 48+ hours of continuous mining operations",
                metric: "48+ Hours",
                color: "from-yellow-400 to-orange-400"
              },
              {
                title: "DePIN Integration",
                description: "Native support for 8 major DePIN networks with automated reward optimization",
                metric: "8 Networks",
                color: "from-red-400 to-pink-400"
              },
              {
                title: "ROI Optimization",
                description: "AI-driven earnings optimization with potential returns of $20-50 daily passive income",
                metric: "$20-50/day",
                color: "from-indigo-400 to-purple-400"
              }
            ].map((highlight, index) => (
              <Card key={index} className="bg-gradient-to-br from-slate-900/50 via-slate-800/30 to-slate-900/50 border border-blue-500/20 hover:border-purple-500/40 transition-all duration-500 backdrop-blur-2xl text-center group">
                <CardHeader className="p-6">
                  <div className={`text-3xl font-bold bg-gradient-to-r ${highlight.color} bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    {highlight.metric}
                  </div>
                  <CardTitle className="text-white text-lg mb-3 group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {highlight.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400 text-sm leading-relaxed">
                    {highlight.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Dive Deeper?
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Download the complete technical whitepaper to explore the full scope of NexAI Phone's 
            revolutionary technology and market potential.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white font-medium px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-purple-500/25 text-lg">
              <Download className="w-5 h-5 mr-3" />
              Download Full Whitepaper (PDF)
            </Button>
            
            <Button
              variant="outline"
              className="border-blue-500/30 text-white hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 rounded-full backdrop-blur-xl px-8 py-4 text-lg"
            >
              <ExternalLink className="w-5 h-5 mr-3" />
              View Technical Specs
            </Button>
          </div>
          
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400 mb-2">68 Pages</div>
              <div className="text-gray-400">In-depth Analysis</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400 mb-2">Updated</div>
              <div className="text-gray-400">January 2025</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-pink-400 mb-2">Free</div>
              <div className="text-gray-400">Open Access</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 