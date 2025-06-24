"use client"

import PageLayout from "@/components/page-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { 
  Network,
  Coins,
  Shield,
  Zap,
  Globe,
  HardDrive,
  Cpu,
  Video,
  Radio,
  Search,
  Archive,
  Cloud,
  TrendingUp,
  CheckCircle,
  Play
} from "lucide-react"
import Image from "next/image"

export default function DePINPage() {
  const networks = [
    {
      name: "Helium",
      symbol: "HNT",
      icon: Radio,
      description: "5G/4G wireless network infrastructure",
      dailyReward: "8-12 HNT",
      nexBonus: "15 NEX/day",
      color: "from-green-500 to-emerald-500",
      features: ["IoT Coverage", "5G Hotspots", "Proof of Coverage"],
      difficulty: "Medium",
      requirements: "Location dependent"
    },
    {
      name: "Filecoin",
      symbol: "FIL",
      icon: HardDrive,
      description: "Decentralized storage network",
      dailyReward: "0.5-2 FIL",
      nexBonus: "20 NEX/day",
      color: "from-blue-500 to-cyan-500",
      features: ["Storage Deals", "Retrieval Mining", "Proof of Storage"],
      difficulty: "High",
      requirements: "Storage space"
    },
    {
      name: "Render Network",
      symbol: "RNDR",
      icon: Cpu,
      description: "GPU compute and rendering",
      dailyReward: "5-15 RNDR",
      nexBonus: "25 NEX/day",
      color: "from-purple-500 to-pink-500",
      features: ["3D Rendering", "AI Compute", "GPU Sharing"],
      difficulty: "High",
      requirements: "High-end GPU"
    },
    {
      name: "Livepeer",
      symbol: "LPT",
      icon: Video,
      description: "Video transcoding network",
      dailyReward: "2-8 LPT",
      nexBonus: "18 NEX/day",
      color: "from-red-500 to-orange-500",
      features: ["Video Processing", "Live Streaming", "Transcoding"],
      difficulty: "Medium",
      requirements: "Bandwidth"
    },
    {
      name: "The Graph",
      symbol: "GRT",
      icon: Search,
      description: "Blockchain data indexing",
      dailyReward: "10-30 GRT",
      nexBonus: "12 NEX/day",
      color: "from-indigo-500 to-blue-500",
      features: ["Data Indexing", "Query Processing", "Subgraph Deployment"],
      difficulty: "Medium",
      requirements: "Technical knowledge"
    },
    {
      name: "Arweave",
      symbol: "AR",
      icon: Archive,
      description: "Permanent storage network",
      dailyReward: "0.1-0.5 AR",
      nexBonus: "10 NEX/day",
      color: "from-gray-500 to-slate-500",
      features: ["Permanent Storage", "Data Archival", "Content Addressing"],
      difficulty: "Low",
      requirements: "Storage space"
    },
    {
      name: "Akash Network",
      symbol: "AKT",
      icon: Cloud,
      description: "Decentralized cloud computing",
      dailyReward: "20-50 AKT",
      nexBonus: "22 NEX/day",
      color: "from-teal-500 to-green-500",
      features: ["Cloud Computing", "Container Deployment", "Load Balancing"],
      difficulty: "High",
      requirements: "Server hardware"
    },
    {
      name: "Pocket Network",
      symbol: "POKT",
      icon: Globe,
      description: "RPC infrastructure network",
      dailyReward: "100-300 POKT",
      nexBonus: "16 NEX/day",
      color: "from-violet-500 to-purple-500",
      features: ["RPC Nodes", "Blockchain Access", "API Services"],
      difficulty: "Medium",
      requirements: "Stable connection"
    }
  ]

  const miningStats = [
    { label: "Active Networks", value: "8+", icon: Network },
    { label: "Max Daily Rewards", value: "$40", icon: Coins },
    { label: "Network Uptime", value: "99.9%", icon: Shield },
    { label: "Average APY", value: "25%", icon: TrendingUp }
  ]

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  DePIN Mining
                </span>
                <br />
                Revolution
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Transform your NexAI Phone into a powerful decentralized infrastructure node. 
                Earn rewards from multiple DePIN networks simultaneously while using your device normally.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white font-medium px-8 py-4 rounded-full transition-all duration-300 shadow-lg text-lg">
                  <Play className="w-5 h-5 mr-2" />
                  Start Mining Now
                </Button>
                <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800/50 px-8 py-4 rounded-full text-lg">
                  View Calculator
                </Button>
              </div>
              <div className="flex flex-wrap gap-4">
                {miningStats.map((stat, index) => (
                  <div key={index} className="flex items-center space-x-2 bg-slate-800/50 rounded-full px-4 py-2">
                    <stat.icon className="w-4 h-4 text-blue-400" />
                    <span className="text-white font-semibold">{stat.value}</span>
                    <span className="text-gray-400 text-sm">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative w-full h-96">
                <Image
                  src="/images/depin-network-topology.png"
                  alt="DePIN Network Topology"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 bg-slate-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">How DePIN Mining Works</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your NexAI Phone contributes computational resources, storage, and network capacity 
              to decentralized infrastructure networks, earning you crypto rewards 24/7.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Network className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Connect to Networks</h3>
              <p className="text-gray-400">
                Your phone automatically connects to multiple DePIN networks based on your location and capabilities.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Contribute Resources</h3>
              <p className="text-gray-400">
                Share unused compute power, storage space, and network bandwidth to support decentralized services.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Coins className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Earn Rewards</h3>
              <p className="text-gray-400">
                Receive both native network tokens and NEX tokens as rewards for your contributions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Networks */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Supported DePIN Networks</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Mine from the most profitable and established decentralized infrastructure networks. 
              Our smart routing ensures optimal earnings across all supported protocols.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {networks.map((network, index) => (
              <Card 
                key={index} 
                className="bg-gradient-to-br from-slate-900/50 via-slate-800/30 to-slate-900/50 backdrop-blur-2xl border border-blue-500/20 hover:scale-105 hover:-translate-y-2 hover:rotate-1 transition-all duration-700 transform-gpu group animate-in fade-in-0 slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${network.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-2xl`}>
                    <network.icon className="w-8 h-8 text-white group-hover:scale-125 transition-transform duration-300" />
                  </div>
                  <CardTitle className="text-lg text-white">{network.name}</CardTitle>
                  <CardDescription className="text-gray-400">{network.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Daily Reward:</span>
                      <span className="text-white font-semibold">{network.dailyReward}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">NEX Bonus:</span>
                      <span className="text-green-400 font-semibold">{network.nexBonus}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Difficulty:</span>
                      <Badge variant="outline" className={`text-xs ${
                        network.difficulty === 'Low' ? 'border-green-500 text-green-400' :
                        network.difficulty === 'Medium' ? 'border-yellow-500 text-yellow-400' :
                        'border-red-500 text-red-400'
                      }`}>
                        {network.difficulty}
                      </Badge>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-2">Features</h4>
                    <ul className="space-y-1">
                      {network.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-xs text-gray-400">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-2 border-t border-gray-700">
                    <p className="text-xs text-gray-400">
                      <span className="font-medium">Requirements:</span> {network.requirements}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mining Dashboard Preview */}
      <section className="py-20 px-4 sm:px-6 bg-slate-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Real-time Mining Dashboard</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Monitor your earnings, network performance, and optimize your mining strategy 
              with our comprehensive dashboard.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-slate-900/50 via-slate-800/30 to-slate-900/50 backdrop-blur-2xl border border-blue-500/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-green-400" />
                  Live Earnings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Today's Earnings</span>
                    <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      $24.67
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">This Month</span>
                    <span className="text-xl font-semibold text-white">$742.15</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">NEX Tokens</span>
                      <span className="text-white">156.4 NEX</span>
                    </div>
                    <Progress value={75} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-slate-900/50 via-slate-800/30 to-slate-900/50 backdrop-blur-2xl border border-blue-500/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Network className="w-5 h-5 mr-2 text-blue-400" />
                  Network Performance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {['Helium', 'Filecoin', 'Render'].map((network, index) => (
                    <div key={network} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">{network}</span>
                        <span className="text-green-400">Active</span>
                      </div>
                      <Progress value={[85, 92, 78][index]} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <div className="relative w-full max-w-4xl mx-auto h-64 mb-8">
              <Image
                src="/images/earnings-dashboard.png"
                alt="Mining Dashboard"
                fill
                className="object-contain rounded-xl"
              />
            </div>
            <Button className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white font-medium px-8 py-4 rounded-full transition-all duration-300 shadow-lg text-lg">
              Try Demo Dashboard
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits & Features */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose NexAI DePIN Mining?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Passive Income</h3>
              <p className="text-gray-400">
                Earn crypto 24/7 without any active effort. Your phone works while you sleep.
              </p>
            </div>
            <div className="text-center p-6">
              <Network className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Multi-Network Support</h3>
              <p className="text-gray-400">
                Mine from 8+ different DePIN networks simultaneously for maximum rewards.
              </p>
            </div>
            <div className="text-center p-6">
              <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Secure & Private</h3>
              <p className="text-gray-400">
                Enterprise-grade security with zero access to your personal data.
              </p>
            </div>
            <div className="text-center p-6">
              <TrendingUp className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Smart Optimization</h3>
              <p className="text-gray-400">
                AI-powered routing automatically switches to the most profitable networks.
              </p>
            </div>
            <div className="text-center p-6">
              <Coins className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Dual Rewards</h3>
              <p className="text-gray-400">
                Earn both native network tokens and bonus NEX tokens for every contribution.
              </p>
            </div>
            <div className="text-center p-6">
              <Globe className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Global Network</h3>
              <p className="text-gray-400">
                Join a worldwide community of miners building the decentralized future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-pink-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Start Mining Today
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of users already earning passive income with DePIN mining
          </p>
          <div className="space-y-4">
            <Button className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white font-medium px-8 py-4 rounded-full transition-all duration-300 shadow-lg text-lg">
              Get Your NexAI Phone
            </Button>
            <p className="text-sm text-gray-400">
              30-day money-back guarantee • Free shipping worldwide
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  )
} 