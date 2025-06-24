"use client"

import PageLayout from "@/components/page-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
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
  DollarSign
} from "lucide-react"
import Image from "next/image"

export default function TokenPage() {
  const tokenomics = [
    { label: "Community Mining", percentage: 40, amount: "400M NEX", color: "from-blue-500 to-cyan-500" },
    { label: "Ecosystem Development", percentage: 20, amount: "200M NEX", color: "from-green-500 to-emerald-500" },
    { label: "Team & Advisors", percentage: 15, amount: "150M NEX", color: "from-purple-500 to-pink-500" },
    { label: "Liquidity Pool", percentage: 10, amount: "100M NEX", color: "from-orange-500 to-red-500" },
    { label: "Private Sale", percentage: 10, amount: "100M NEX", color: "from-indigo-500 to-blue-500" },
    { label: "Reserve Fund", percentage: 5, amount: "50M NEX", color: "from-gray-500 to-slate-500" }
  ]

  const useCases = [
    {
      title: "DePIN Mining Rewards",
      description: "Earn NEX tokens by contributing to decentralized infrastructure networks",
      icon: Zap,
      features: ["Daily mining rewards", "Network contribution bonuses", "Performance multipliers"]
    },
    {
      title: "Governance Voting",
      description: "Participate in DAO decisions and shape the future of NexAI",
      icon: Vote,
      features: ["Protocol upgrades", "New feature voting", "Treasury allocation"]
    },
    {
      title: "Staking & Yield",
      description: "Stake NEX tokens to earn passive rewards and unlock premium features",
      icon: Lock,
      features: ["15-25% APY staking", "Premium app features", "Priority support"]
    },
    {
      title: "NFT Ecosystem",
      description: "Use NEX to mint, trade, and upgrade your phone NFTs",
      icon: Wallet,
      features: ["NFT minting", "Marketplace trading", "Attribute upgrades"]
    }
  ]

  const metrics = [
    { label: "Total Supply", value: "1B NEX", icon: Coins },
    { label: "Initial Price", value: "$0.01", icon: DollarSign },
    { label: "Market Cap Goal", value: "$100M", icon: TrendingUp },
    { label: "Holders Target", value: "100K+", icon: Users }
  ]

  const timeline = [
    {
      phase: "Phase 1: Token Launch",
      quarter: "2025 Q1",
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
      items: [
        "DAO governance live",
        "Advanced DeFi features",
        "Institutional adoption",
        "Metaverse integration"
      ]
    }
  ]

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                NEX Token
              </span>
              <br />
              Powering the Future
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              The native utility token of the NexAI ecosystem. Earn, stake, govern, and unlock 
              the full potential of decentralized smartphone infrastructure.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {metrics.map((metric, index) => (
                <div key={index} className="flex items-center space-x-2 bg-slate-800/50 rounded-full px-6 py-3">
                  <metric.icon className="w-5 h-5 text-blue-400" />
                  <span className="text-white font-semibold">{metric.value}</span>
                  <span className="text-gray-400 text-sm">{metric.label}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white font-medium px-8 py-4 rounded-full transition-all duration-300 shadow-lg text-lg">
                Buy NEX Token
              </Button>
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800/50 px-8 py-4 rounded-full text-lg">
                View Whitepaper
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Tokenomics */}
      <section className="py-20 px-4 sm:px-6 bg-slate-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Token Distribution</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Carefully designed tokenomics to ensure sustainable growth and fair distribution.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              {tokenomics.map((item, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-4 backdrop-blur-xl border border-gray-700">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-semibold">{item.label}</span>
                    <span className="text-gray-300">{item.percentage}%</span>
                  </div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-gray-400 text-sm">{item.amount}</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className={`bg-gradient-to-r ${item.color} h-2 rounded-full`}
                      style={{ width: `${item.percentage * 2.5}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative">
              <div className="w-80 h-80 mx-auto relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-blue-500/30"></div>
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      1B
                    </div>
                    <div className="text-lg text-gray-300">NEX Tokens</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">NEX Token Utility</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Multiple use cases within the NexAI ecosystem create constant demand for NEX tokens.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="bg-gradient-to-br from-slate-900/50 via-slate-800/30 to-slate-900/50 backdrop-blur-2xl border border-blue-500/20 hover:scale-105 transition-all duration-500">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <useCase.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl text-white">{useCase.title}</CardTitle>
                  </div>
                  <CardDescription className="text-gray-300">
                    {useCase.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {useCase.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Staking & Rewards */}
      <section className="py-20 px-4 sm:px-6 bg-slate-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Staking & Rewards</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stake your NEX tokens to earn passive rewards and unlock exclusive benefits 
              in the NexAI ecosystem.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-blue-600/20 via-cyan-600/20 to-blue-600/20 backdrop-blur-2xl border border-blue-500/30">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-white mb-2">Basic Staking</CardTitle>
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  15% APY
                </div>
                <CardDescription className="text-gray-300">
                  Minimum 1,000 NEX
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Daily rewards distribution
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    7-day unstaking period
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Basic governance voting
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:opacity-90 text-white">
                  Start Staking
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-purple-600/20 backdrop-blur-2xl border border-purple-500/30 scale-105">
              <CardHeader className="text-center">
                <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white mb-4">
                  Most Popular
                </Badge>
                <CardTitle className="text-2xl text-white mb-2">Premium Staking</CardTitle>
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  20% APY
                </div>
                <CardDescription className="text-gray-300">
                  Minimum 10,000 NEX
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Higher rewards + bonuses
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Premium app features
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Enhanced voting power
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Early access to features
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 text-white">
                  Start Staking
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-600/20 via-red-600/20 to-orange-600/20 backdrop-blur-2xl border border-orange-500/30">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-white mb-2">Elite Staking</CardTitle>
                <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-2">
                  25% APY
                </div>
                <CardDescription className="text-gray-300">
                  Minimum 100,000 NEX
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Maximum rewards + NFT drops
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    VIP support & features
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Proposal creation rights
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Exclusive community access
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:opacity-90 text-white">
                  Start Staking
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Roadmap Timeline */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">NEX Token Roadmap</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our strategic roadmap for NEX token development, utility expansion, 
              and ecosystem growth throughout 2025 and beyond.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 h-full"></div>
            
            <div className="space-y-12">
              {timeline.map((phase, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="bg-gradient-to-br from-slate-900/50 via-slate-800/30 to-slate-900/50 backdrop-blur-2xl border border-blue-500/20">
                      <CardHeader>
                        <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white w-fit">
                          {phase.quarter}
                        </Badge>
                        <CardTitle className="text-xl text-white">{phase.phase}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {phase.items.map((item, idx) => (
                            <li key={idx} className="flex items-start text-sm text-gray-300">
                              <ArrowRight className="w-4 h-4 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="relative z-10">
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-slate-900"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-pink-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Join the NEX Economy
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start earning, staking, and governing with NEX tokens today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white font-medium px-8 py-4 rounded-full transition-all duration-300 shadow-lg text-lg">
              Buy NEX Token
            </Button>
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800/50 px-8 py-4 rounded-full text-lg">
              Start Staking
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  )
} 