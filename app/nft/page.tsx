"use client"

import PageLayout from "@/components/page-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AnimatedCounter, InteractiveCard, GlitchText, PulsingDot, FloatingOrbs } from "@/components/enhanced-effects"
import { 
  Smartphone,
  Star,
  Zap,
  Shield,
  Crown,
  Gem,
  TrendingUp,
  Users,
  Sparkles,
  Award,
  Target,
  Flame,
  Lock,
  Eye,
  Palette,
  Layers,
  CheckCircle,
  Calendar,
  ArrowRight,
  DollarSign,
  BarChart3,
  ShoppingCart
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function NFTPage() {
  const nftTypes = [
    {
      name: "Common Phone NFT",
      rarity: "Common",
      supply: "50,000",
      price: "0.1 ETH",
      mining: "+10%",
      color: "from-gray-500 to-slate-500",
      bgGradient: "from-gray-500/10 to-slate-500/10",
      icon: Smartphone,
      rarityScore: 1,
      attributes: [
        "Basic mining boost",
        "Standard features",
        "Community access"
      ],
      glow: "gray"
    },
    {
      name: "Rare Phone NFT", 
      rarity: "Rare",
      supply: "10,000",
      price: "0.5 ETH",
      mining: "+25%",
      color: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/10 to-cyan-500/10",
      icon: Star,
      rarityScore: 2,
      attributes: [
        "Enhanced mining boost", 
        "Premium features",
        "Priority support",
        "Exclusive events"
      ],
      glow: "blue"
    },
    {
      name: "Epic Phone NFT",
      rarity: "Epic", 
      supply: "2,000",
      price: "2 ETH",
      mining: "+50%",
      color: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-500/10 to-pink-500/10",
      icon: Zap,
      rarityScore: 3,
      attributes: [
        "Superior mining boost",
        "Advanced features",
        "VIP support",
        "Beta access",
        "Staking rewards"
      ],
      glow: "purple"
    },
    {
      name: "Legendary Phone NFT",
      rarity: "Legendary",
      supply: "500",
      price: "10 ETH", 
      mining: "+100%",
      color: "from-orange-500 to-red-500",
      bgGradient: "from-orange-500/10 to-red-500/10",
      icon: Crown,
      rarityScore: 4,
      attributes: [
        "Maximum mining boost",
        "Ultimate features",
        "White-glove support",
        "Founder privileges",
        "Maximum staking rewards",
        "Governance voting power"
      ],
      glow: "orange"
    }
  ]

  const features = [
    {
      title: "Unique Attributes",
      description: "Each NFT has randomly generated attributes that affect mining performance and visual appearance",
      icon: Palette,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Mining Bonuses",
      description: "NFT holders receive significant mining rewards multipliers based on rarity tier",
      icon: Zap,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Upgrade System",
      description: "Enhance your NFTs with upgrade materials and increase their rarity and benefits",
      icon: Layers,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Marketplace Trading",
      description: "Buy, sell, and trade NFTs in our integrated marketplace with advanced filtering",
      icon: ShoppingCart,
      color: "from-orange-500 to-red-500"
    }
  ]

  const roadmap = [
    {
      phase: "Phase 1: Foundation",
      quarter: "Q1 2026",
      status: "planned",
      items: [
        "NFT collection artwork completion",
        "Smart contract development",
        "Rarity system implementation",
        "Metadata generation"
      ]
    },
    {
      phase: "Phase 2: Launch",
      quarter: "Q2 2026", 
      status: "planned",
      items: [
        "Public minting begins",
        "Marketplace integration",
        "Trading functionality",
        "Community features"
      ]
    },
    {
      phase: "Phase 3: Utility",
      quarter: "Q3 2026",
      status: "planned", 
      items: [
        "Mining bonus activation",
        "Staking rewards launch",
        "Upgrade system release",
        "Cross-chain support"
      ]
    },
    {
      phase: "Phase 4: Expansion",
      quarter: "Q4 2026",
      status: "planned",
      items: [
        "Gaming integration",
        "Metaverse compatibility",
        "Advanced trading features",
        "Community governance"
      ]
    }
  ]

  const stats = [
    { label: "Total Collection", value: "62,500", icon: Gem },
    { label: "Avg. Price", value: "0.8 ETH", icon: DollarSign },
    { label: "Holders", value: "15,000+", icon: Users },
    { label: "Trading Volume", value: "2,500 ETH", icon: TrendingUp }
  ]

  return (
    <PageLayout>
      {/* Floating Background Elements */}
      <FloatingOrbs />

      {/* Hero Section - Enhanced */}
      <section className="relative py-24 px-4 sm:px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            {/* Floating badge */}
            <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-red-500/20 border border-purple-500/30 mb-8 backdrop-blur-xl">
              <Gem className="w-4 h-4 text-purple-400 mr-2" />
              <span className="text-purple-300 text-sm font-medium">Exclusive Digital Assets</span>
            </div>

            <h1 className="text-5xl sm:text-7xl font-bold mb-8 leading-tight">
              <GlitchText 
                text="NFT Collection" 
                className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent"
              />
              <br />
              <span className="text-white text-4xl sm:text-5xl">Rare Digital Phones</span>
            </h1>

            <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Unique phone NFTs with special attributes, mining bonuses, and exclusive benefits. 
              Own, trade, and upgrade your digital smartphone assets in our comprehensive ecosystem.
            </p>

            {/* Enhanced stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="group">
                  <div className="bg-gradient-to-br from-slate-900/50 via-slate-800/30 to-slate-900/50 rounded-2xl p-6 backdrop-blur-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
                    <div className="flex items-center justify-center mb-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <stat.icon className="w-6 h-6 text-purple-400" />
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-purple-400 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 hover:from-purple-700 hover:via-pink-700 hover:to-red-700 text-white font-medium px-12 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-purple-500/25 text-lg group">
                <Gem className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                Join Waitlist
              </Button>
              <Button variant="outline" className="border-2 border-purple-500/30 text-white hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-pink-500/10 font-medium px-12 py-4 rounded-full transition-all duration-300 backdrop-blur-xl text-lg group">
                <Eye className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                Explore Collection
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced NFT Types Section */}
      <section className="py-24 px-4 sm:px-6 bg-gradient-to-br from-slate-950/50 via-slate-900/30 to-slate-950/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Rarity <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Tiers</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Four distinct rarity tiers with unique attributes, mining bonuses, and exclusive benefits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {nftTypes.map((nft, index) => (
              <InteractiveCard key={index} className="group">
                <div className={`relative bg-gradient-to-br from-slate-900/50 via-slate-800/30 to-slate-900/50 backdrop-blur-2xl border border-${nft.glow}-500/20 hover:border-${nft.glow}-500/40 rounded-2xl p-6 transition-all duration-700 transform hover:scale-105 hover:-translate-y-4 hover:rotate-1 overflow-hidden`}>
                  {/* Background glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${nft.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  {/* Rarity indicator */}
                  <div className="absolute top-4 right-4">
                    <div className={`bg-gradient-to-r ${nft.color} text-white font-semibold px-2 py-1 text-xs`}>
                      {nft.rarity}
                    </div>
                  </div>

                  {/* Main content */}
                  <div className="relative z-10">
                    {/* Icon with enhanced effects */}
                    <div className="text-center mb-6">
                      <div className={`w-20 h-20 bg-gradient-to-r ${nft.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-2xl group-hover:shadow-3xl relative`}>
                        <nft.icon className="w-10 h-10 text-white group-hover:scale-125 transition-transform duration-300" />
                        {/* Glow effect */}
                        <div className={`absolute inset-0 bg-gradient-to-r ${nft.color} rounded-2xl blur-lg opacity-50 group-hover:opacity-80 transition-opacity duration-500 -z-10`}></div>
                      </div>
                      
                      {/* Rarity stars */}
                      <div className="flex justify-center space-x-1 mb-2">
                        {[...Array(nft.rarityScore)].map((_, starIndex) => (
                          <Star key={starIndex} className={`w-4 h-4 text-yellow-400 fill-current animate-pulse`} style={{ animationDelay: `${starIndex * 100}ms` }} />
                        ))}
                      </div>
                      
                      <h3 className="text-lg font-bold text-white group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {nft.name}
                      </h3>
                    </div>

                    {/* Stats grid */}
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between items-center p-2 rounded-lg bg-slate-800/30 border border-slate-700/30">
                        <span className="text-gray-400 text-sm">Supply:</span>
                        <span className="text-white font-semibold">{nft.supply}</span>
                      </div>
                      <div className="flex justify-between items-center p-2 rounded-lg bg-slate-800/30 border border-slate-700/30">
                        <span className="text-gray-400 text-sm">Floor Price:</span>
                        <span className="text-white font-semibold">{nft.price}</span>
                      </div>
                      <div className="flex justify-between items-center p-2 rounded-lg bg-slate-800/30 border border-slate-700/30">
                        <span className="text-gray-400 text-sm">Mining Bonus:</span>
                        <span className={`font-semibold bg-gradient-to-r ${nft.color} bg-clip-text text-transparent`}>
                          {nft.mining}
                        </span>
                      </div>
                    </div>

                    {/* Attributes */}
                    <div className="space-y-2">
                      <h4 className="text-white font-semibold text-sm mb-3">Attributes:</h4>
                      {nft.attributes.map((attribute, attrIndex) => (
                        <div key={attrIndex} className="flex items-center text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {attribute}
                        </div>
                      ))}
                    </div>

                    {/* Hover action button */}
                    <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button className={`w-full bg-gradient-to-r ${nft.color} hover:shadow-lg text-white text-sm py-2 rounded-lg transition-all duration-300`}>
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              </InteractiveCard>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              NFT <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Features</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced functionality and utility built into every NFT in our collection.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <InteractiveCard key={index} className="group">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900/50 via-slate-800/30 to-slate-900/50 backdrop-blur-2xl border border-gray-700/40 hover:border-blue-500/40 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 relative overflow-hidden">
                  <div className="relative z-10">
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} bg-opacity-20 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <h4 className="text-white font-semibold text-lg mb-3 group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {feature.title}
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </InteractiveCard>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Roadmap Section */}
      <section className="py-24 px-4 sm:px-6 bg-gradient-to-br from-slate-950/50 via-slate-900/30 to-slate-950/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              NFT <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Roadmap</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our comprehensive development timeline for the NFT ecosystem launch and expansion.
            </p>
          </div>

          <div className="space-y-12">
            {roadmap.map((phase, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex flex-col items-center">
                  <div className={`w-8 h-8 rounded-full border-4 ${
                    phase.status === 'upcoming' ? 'bg-purple-500 border-purple-500' :
                    phase.status === 'current' ? 'bg-blue-500 border-blue-500' :
                    'bg-slate-700 border-slate-600'
                  } flex-shrink-0 relative`}>
                    {phase.status === 'upcoming' && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <PulsingDot color="purple" />
                      </div>
                    )}
                  </div>
                  {index < roadmap.length - 1 && (
                    <div className="w-0.5 h-16 bg-slate-600 mt-4"></div>
                  )}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="text-purple-400 font-semibold text-lg">{phase.quarter}</div>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium border ${
                      phase.status === 'upcoming' ? 'bg-purple-500/20 text-purple-400 border-purple-500/30' :
                      phase.status === 'current' ? 'bg-blue-500/20 text-blue-400 border-blue-500/30' :
                      'bg-slate-500/20 text-slate-400 border-slate-500/30'
                    }`}>
                      {phase.status === 'upcoming' ? 'Upcoming' :
                       phase.status === 'current' ? 'Current' : 'Planned'}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 hover:bg-clip-text hover:text-transparent transition-all duration-300 cursor-default">
                    {phase.phase}
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-3">
                    {phase.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center space-x-2 group">
                        <CheckCircle className={`w-4 h-4 flex-shrink-0 ${
                          phase.status === 'upcoming' ? 'text-purple-400' :
                          phase.status === 'current' ? 'text-blue-400' :
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
      <section className="py-24 px-4 sm:px-6 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-red-900/20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-red-500/5"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Join the NFT
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent animate-pulse">
              Revolution
            </span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-12">
            Be among the first to mint exclusive phone NFTs with unique attributes and mining benefits. 
            Early supporters get special privileges and access to our upcoming marketplace.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 hover:from-purple-700 hover:via-pink-700 hover:to-red-700 text-white font-medium px-12 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-purple-500/25 text-lg group">
              <Gem className="w-6 h-6 mr-2 group-hover:rotate-12 transition-transform duration-300" />
              Join Whitelist
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            
            <Button variant="outline" className="border-2 border-purple-500/30 text-white hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-pink-500/10 font-medium px-12 py-4 rounded-full transition-all duration-300 backdrop-blur-xl text-lg group">
              <Calendar className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
              View Calendar
            </Button>
          </div>

          {/* Additional info */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400 mb-2">Q1 2026</div>
              <div className="text-gray-400 text-sm">Minting Launch</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-pink-400 mb-2">62,500</div>
              <div className="text-gray-400 text-sm">Total Supply</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-400 mb-2">100%</div>
              <div className="text-gray-400 text-sm">Utility Enabled</div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
} 