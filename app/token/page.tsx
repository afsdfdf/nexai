"use client"

import PageLayout from "@/components/page-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { AnimatedCounter, InteractiveCard, GlitchText, PulsingDot, FloatingOrbs, DynamicPieChart } from "@/components/enhanced-effects"
import { 
  Coins,
  TrendingUp,
  Shield,
  Users,
  Zap,
  Globe,
  Vote,
  Lock,
  Wallet,
  ArrowRight,
  CheckCircle,
  BarChart3,
  DollarSign,
  Sparkles,
  Target,
  Award,
  Flame,
  PieChart,
  Activity,
  Star
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function TokenPage() {
  const [activeSlice, setActiveSlice] = useState<number | null>(null)
  const [isAnimating, setIsAnimating] = useState(false)

  const tokenomics = [
    { 
      label: "Community Mining", 
      percentage: 40, 
      amount: "400M NEX", 
      color: "#3B82F6", 
      gradient: "from-blue-500 to-cyan-500", 
      icon: Users,
      description: "Rewards for DePIN participation and mining activities"
    },
    { 
      label: "Ecosystem Development", 
      percentage: 20, 
      amount: "200M NEX", 
      color: "#10B981", 
      gradient: "from-green-500 to-emerald-500", 
      icon: Globe,
      description: "Funding for platform development and partnerships"
    },
    { 
      label: "Team & Advisors", 
      percentage: 15, 
      amount: "150M NEX", 
      color: "#8B5CF6", 
      gradient: "from-purple-500 to-pink-500", 
      icon: Award,
      description: "Team allocation with 4-year vesting schedule"
    },
    { 
      label: "Liquidity Pool", 
      percentage: 10, 
      amount: "100M NEX", 
      color: "#F59E0B", 
      gradient: "from-orange-500 to-red-500", 
      icon: Target,
      description: "DEX liquidity and trading pairs"
    },
    { 
      label: "Private Sale", 
      percentage: 10, 
      amount: "100M NEX", 
      color: "#6366F1", 
      gradient: "from-indigo-500 to-blue-500", 
      icon: Flame,
      description: "Early investor allocation"
    },
    { 
      label: "Reserve Fund", 
      percentage: 5, 
      amount: "50M NEX", 
      color: "#6B7280", 
      gradient: "from-gray-500 to-slate-500", 
      icon: Shield,
      description: "Emergency fund and future opportunities"
    }
  ]

  const useCases = [
    {
      title: "DePIN Mining Rewards",
      description: "Earn NEX tokens by contributing to decentralized infrastructure networks with enhanced yield opportunities",
      icon: Zap,
      features: ["Daily mining rewards", "Network contribution bonuses", "Performance multipliers", "Auto-compounding"],
      gradient: "from-blue-500 to-cyan-500",
      glow: "blue"
    },
    {
      title: "Governance Voting",
      description: "Participate in DAO decisions and shape the future of NexAI ecosystem with weighted voting power",
      icon: Vote,
      features: ["Protocol upgrades", "New feature voting", "Treasury allocation", "Community proposals"],
      gradient: "from-purple-500 to-pink-500",
      glow: "purple"
    },
    {
      title: "Staking & Yield",
      description: "Stake NEX tokens to earn passive rewards and unlock premium features with tiered benefits",
      icon: Lock,
      features: ["15-25% APY staking", "Premium app features", "Priority support", "Exclusive access"],
      gradient: "from-green-500 to-emerald-500",
      glow: "green"
    },
    {
      title: "NFT Ecosystem",
      description: "Use NEX to mint, trade, and upgrade your phone NFTs in our comprehensive marketplace",
      icon: Wallet,
      features: ["NFT minting", "Marketplace trading", "Attribute upgrades", "Rarity enhancement"],
      gradient: "from-pink-500 to-red-500",
      glow: "pink"
    }
  ]

  const metrics = [
    { label: "Total Supply", value: "1B NEX", icon: Coins, color: "blue" },
    { label: "Initial Price", value: "$0.01", icon: DollarSign, color: "green" },
    { label: "Market Cap Goal", value: "$100M", icon: TrendingUp, color: "purple" },
    { label: "Holders Target", value: "100K+", icon: Users, color: "pink" }
  ]

  const stakingTiers = [
    {
      tier: "Bronze",
      minStake: "1,000 NEX",
      apy: "15%",
      features: ["Basic mining boost", "Community access", "Monthly rewards"],
      color: "from-orange-600 to-yellow-600",
      icon: "🥉"
    },
    {
      tier: "Silver", 
      minStake: "10,000 NEX",
      apy: "18%",
      features: ["Enhanced mining boost", "Priority support", "Weekly rewards", "Governance voting"],
      color: "from-gray-400 to-gray-600",
      icon: "🥈"
    },
    {
      tier: "Gold",
      minStake: "50,000 NEX",
      apy: "22%",
      features: ["Premium mining boost", "VIP support", "Daily rewards", "Advanced features"],
      color: "from-yellow-400 to-yellow-600",
      icon: "🥇"
    },
    {
      tier: "Diamond",
      minStake: "250,000 NEX",
      apy: "25%",
      features: ["Maximum mining boost", "White-glove support", "Real-time rewards", "Beta access"],
      color: "from-cyan-400 to-blue-600",
      icon: "💎"
    }
  ]

  const timeline = [
    {
      phase: "Phase 1: Token Launch",
      quarter: "2025 Q1",
      status: "upcoming",
      items: [
        "Smart contract deployment",
        "Initial DEX listings",
        "Community airdrop",
        "Staking platform launch"
      ]
    },
    {
      phase: "Phase 2: Ecosystem Growth",
      quarter: "2025 Q2",
      status: "planned",
      items: [
        "Major CEX listings",
        "Cross-chain bridges",
        "DeFi integrations",
        "Mobile wallet launch"
      ]
    },
    {
      phase: "Phase 3: Utility Expansion",
      quarter: "2025 Q3",
      status: "planned",
      items: [
        "NFT marketplace integration",
        "Gaming partnerships",
        "Enterprise solutions",
        "Global expansion"
      ]
    },
    {
      phase: "Phase 4: Full Ecosystem",
      quarter: "2025 Q4",
      status: "planned",
      items: [
        "DAO governance live",
        "Advanced DeFi features",
        "Institutional adoption",
        "Metaverse integration"
      ]
    }
  ]

  // Calculate pie chart angles
  const calculateAngles = () => {
    let currentAngle = 0
    return tokenomics.map(item => {
      const startAngle = currentAngle
      const endAngle = currentAngle + (item.percentage / 100) * 360
      currentAngle = endAngle
      return { ...item, startAngle, endAngle }
    })
  }

  const pieData = calculateAngles()

  useEffect(() => {
    setIsAnimating(true)
    const timer = setTimeout(() => setIsAnimating(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <PageLayout>
      {/* Floating Background Elements */}
      <FloatingOrbs />

      {/* Hero Section - Enhanced */}
      <section className="relative py-24 px-4 sm:px-6 overflow-hidden">
        {/* Floating background orbs */}
        <div className="token-orb"></div>
        <div className="token-orb"></div>
        <div className="token-orb"></div>
        
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            {/* Floating badge */}
            <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 border border-blue-500/30 mb-8 backdrop-blur-xl">
              <Sparkles className="w-4 h-4 text-blue-400 mr-2" />
              <span className="text-blue-300 text-sm font-medium">Native Ecosystem Token</span>
            </div>

            <h1 className="text-5xl sm:text-7xl font-bold mb-8 leading-tight">
              <GlitchText 
                text="NEX Token" 
                className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
              />
              <br />
              <span className="text-white text-4xl sm:text-5xl">Powering the Future</span>
            </h1>

            <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              The native utility token of the NexAI ecosystem. Earn, stake, govern, and unlock 
              the full potential of decentralized smartphone infrastructure.
            </p>

            {/* Enhanced metrics with animations */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto token-metrics-grid">
              {metrics.map((metric, index) => (
                <div key={index} className="group token-metric">
                  <div className={`bg-gradient-to-br from-slate-900/50 via-slate-800/30 to-slate-900/50 rounded-2xl p-6 backdrop-blur-2xl border border-${metric.color}-500/20 hover:border-${metric.color}-500/40 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 token-card`}>
                    <div className="flex items-center justify-center mb-3">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-${metric.color}-500/20 to-${metric.color}-600/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <metric.icon className={`w-6 h-6 text-${metric.color}-400`} />
                      </div>
                    </div>
                    <div className={`text-2xl font-bold text-${metric.color}-400 mb-1`}>
                      {metric.value}
                    </div>
                    <div className="text-gray-400 text-sm font-medium">{metric.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white font-medium px-12 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-purple-500/25 text-lg group token-button">
                <Coins className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                Buy NEX Token
              </Button>
              <Link href="/whitepaper">
                <Button variant="outline" className="border-2 border-blue-500/30 text-white hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 font-medium px-12 py-4 rounded-full transition-all duration-300 backdrop-blur-xl text-lg group token-button">
                  <BarChart3 className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  View Whitepaper
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Tokenomics Section with Dynamic Pie Chart */}
      <section className="py-24 px-4 sm:px-6 bg-gradient-to-br from-slate-950/50 via-slate-900/30 to-slate-950/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Token <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Distribution</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Carefully designed tokenomics to ensure sustainable growth, fair distribution, and long-term ecosystem health.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Interactive Pie Chart */}
            <div className="relative flex justify-center pie-chart-container">
              <DynamicPieChart 
                data={tokenomics}
                size={400}
                onSliceHover={(index) => {
                  // Handle slice hover if needed
                }}
              />
            </div>

            {/* Enhanced distribution list with hover effects */}
            <div className="space-y-6">
              {tokenomics.map((item, index) => (
                <InteractiveCard key={index} className="group">
                  <div className={`bg-gradient-to-br from-slate-900/50 via-slate-800/30 to-slate-900/50 rounded-2xl p-6 backdrop-blur-2xl border border-gray-700/40 hover:border-blue-500/40 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 cursor-pointer token-distribution-card`}>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} bg-opacity-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <item.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <span className="text-white font-semibold text-lg group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                            {item.label}
                          </span>
                          <div className="text-gray-400 text-sm">{item.amount}</div>
                          <div className="text-gray-500 text-xs mt-1">{item.description}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`text-3xl font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                          {item.percentage}%
                        </div>
                      </div>
                    </div>
                    <div className="w-full bg-gray-800/50 rounded-full h-3 overflow-hidden">
                      <div 
                        className={`bg-gradient-to-r ${item.gradient} h-3 rounded-full transition-all duration-1000 shadow-lg group-hover:shadow-xl token-progress`}
                        style={{ 
                          width: `${item.percentage}%`,
                          animation: `slideIn 1s ease-out ${index * 150}ms both`
                        }}
                      ></div>
                    </div>
                  </div>
                </InteractiveCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Use Cases Section */}
      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Token <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Utility</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Multiple use cases designed to create sustainable value and utility within the NexAI ecosystem.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <InteractiveCard key={index} className="group">
                <div className={`p-8 rounded-2xl bg-gradient-to-br from-slate-900/50 via-slate-800/30 to-slate-900/50 backdrop-blur-2xl border border-gray-700/40 hover:border-${useCase.glow}-500/40 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 relative overflow-hidden`}>
                  {/* Background glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-${useCase.glow}-500/5 via-transparent to-${useCase.glow}-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${useCase.gradient} bg-opacity-20 flex items-center justify-center mr-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                        <useCase.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-xl group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                          {useCase.title}
                        </h4>
                      </div>
                    </div>
                    
                    <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                      {useCase.description}
                    </p>
                    
                    <div className="space-y-3">
                      {useCase.features.map((feature, featIndex) => (
                        <div key={featIndex} className="flex items-center space-x-3">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${useCase.gradient} animate-pulse`} style={{ animationDelay: `${featIndex * 200}ms` }}></div>
                          <span className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </InteractiveCard>
            ))}
          </div>
        </div>
      </section>

      {/* New Staking Tiers Section */}
      <section className="py-24 px-4 sm:px-6 bg-gradient-to-br from-slate-950/50 via-slate-900/30 to-slate-950/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Staking <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Tiers</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose your staking tier and unlock exclusive benefits, higher yields, and premium features.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stakingTiers.map((tier, index) => (
              <InteractiveCard key={index} className="group">
                <div className={`p-6 rounded-2xl bg-gradient-to-br ${index === 2 ? 'from-yellow-900/20 via-yellow-800/10 to-yellow-900/20' : 'from-slate-900/50 via-slate-800/30 to-slate-900/50'} backdrop-blur-2xl border ${index === 2 ? 'border-yellow-500/50' : 'border-gray-700/40'} hover:border-yellow-500/40 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 relative overflow-hidden staking-tier ${index === 2 ? 'scale-105 shadow-lg shadow-yellow-500/20' : ''}`}>
                  {index === 2 && (
                    <>
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-semibold px-3 py-1 rounded-full text-xs">
                        POPULAR
                      </div>
                    </div>
                      {/* Gold tier special effects */}
                      <div className="absolute inset-0 bg-yellow-500/5 animate-pulse"></div>
                      <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400/10 to-orange-500/10 blur-md"></div>
                    </>
                  )}
                  
                  <div className="text-center">
                    <div className="text-4xl mb-3">{tier.icon}</div>
                    <h4 className={`text-xl font-bold text-white mb-2 group-hover:bg-gradient-to-r group-hover:${tier.color} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300`}>
                      {tier.tier}
                    </h4>
                    <div className="text-gray-400 text-sm mb-4">Min. Stake: {tier.minStake}</div>
                    <div className={`text-3xl font-bold bg-gradient-to-r ${tier.color} bg-clip-text text-transparent mb-6 relative ${index === 2 ? 'scale-110 transform transition-all duration-300' : ''}`}>
                      {tier.apy}
                      <span className="text-lg">APY</span>
                      {index === 2 && <span className="absolute -right-2 -top-2 text-xs bg-yellow-400 text-black rounded-full px-2 py-0.5 font-medium">Best Value</span>}
                    </div>
                    
                    <div className="space-y-2">
                      {tier.features.map((feature, featIndex) => (
                        <div key={featIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className={`w-4 h-4 ${index === 2 ? 'text-yellow-400' : 'text-green-400'} mr-2 flex-shrink-0 ${index === 2 ? 'animate-pulse' : ''}`} />
                          <span className={index === 2 ? 'text-yellow-100' : ''}>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </InteractiveCard>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Timeline Section */}
      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Development <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Roadmap</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our comprehensive roadmap for token launch, ecosystem development, and feature rollout.
            </p>
          </div>

          <div className="space-y-12">
            {timeline.map((phase, index) => (
              <div key={index} className="flex items-start space-x-6 timeline-item">
                <div className="flex flex-col items-center">
                  <div className={`w-8 h-8 rounded-full border-4 ${
                    phase.status === 'upcoming' ? 'bg-blue-500 border-blue-500' :
                    phase.status === 'current' ? 'bg-purple-500 border-purple-500' :
                    'bg-slate-700 border-slate-600'
                  } flex-shrink-0 relative`}>
                    {phase.status === 'upcoming' && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <PulsingDot color="blue" />
                      </div>
                    )}
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="w-0.5 h-16 bg-slate-600 mt-4"></div>
                  )}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="text-blue-400 font-semibold text-lg">{phase.quarter}</div>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium border ${
                      phase.status === 'upcoming' ? 'bg-blue-500/20 text-blue-400 border-blue-500/30' :
                      phase.status === 'current' ? 'bg-purple-500/20 text-purple-400 border-purple-500/30' :
                      'bg-slate-500/20 text-slate-400 border-slate-500/30'
                    }`}>
                      {phase.status === 'upcoming' ? 'Upcoming' :
                       phase.status === 'current' ? 'Current' : 'Planned'}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 hover:bg-clip-text hover:text-transparent transition-all duration-300 cursor-default">
                    {phase.phase}
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-3">
                    {phase.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center space-x-2 group">
                        <CheckCircle className={`w-4 h-4 flex-shrink-0 ${
                          phase.status === 'upcoming' ? 'text-blue-400' :
                          phase.status === 'current' ? 'text-purple-400' :
                          'text-gray-500'
                        } group-hover:scale-110 transition-transform duration-300`} />
                        <span className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Final CTA */}
      <section className="py-24 px-4 sm:px-6 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Join the NEX Token
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
              Revolution
            </span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-12">
            Be part of the future of decentralized mobile infrastructure. Buy, stake, and earn with NEX tokens.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white font-medium px-12 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-purple-500/25 text-lg group token-button">
              <Coins className="w-6 h-6 mr-2 group-hover:rotate-12 transition-transform duration-300" />
              Get NEX Tokens
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            
            <Button variant="outline" className="border-2 border-blue-500/30 text-white hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 font-medium px-12 py-4 rounded-full transition-all duration-300 backdrop-blur-xl text-lg group token-button">
              <TrendingUp className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
              Start Staking
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  )
} 
