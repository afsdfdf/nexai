"use client"

import PageLayout from "@/components/page-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  CheckCircle,
  Clock,
  Rocket,
  Target,
  Users,
  Globe,
  Smartphone,
  Coins,
  Network,
  Shield,
  ArrowRight,
  Calendar
} from "lucide-react"

export default function RoadmapPage() {
  const milestones = [
    {
      quarter: "2025 Q1",
      title: "Foundation & Launch",
      status: "completed",
      items: [
        { text: "Team formation and funding", completed: true },
        { text: "Core technology development", completed: true },
        { text: "Website and branding launch", completed: true },
        { text: "Community building initiation", completed: false }
      ]
    },
    {
      quarter: "2025 Q2", 
      title: "Product Development",
      status: "active",
      items: [
        { text: "NexAI Phone prototype completion", completed: false },
        { text: "DePIN mining integration", completed: false },
        { text: "NEX token smart contract deployment", completed: false },
        { text: "Initial security audits", completed: false }
      ]
    },
    {
      quarter: "2025 Q3",
      title: "Beta Testing & Partnerships",
      status: "upcoming",
      items: [
        { text: "Closed beta testing program", completed: false },
        { text: "Strategic partnerships with DePIN networks", completed: false },
        { text: "Manufacturing partnerships", completed: false },
        { text: "Regulatory compliance certification", completed: false }
      ]
    },
    {
      quarter: "2025 Q4",
      title: "Public Launch",
      status: "upcoming", 
      items: [
        { text: "NexAI Phone public release", completed: false },
        { text: "NEX token public listing", completed: false },
        { text: "Mobile app ecosystem launch", completed: false },
        { text: "Global marketing campaign", completed: false }
      ]
    },
    {
      quarter: "2026 Q1",
      title: "Ecosystem Expansion",
      status: "planned",
      items: [
        { text: "NFT marketplace integration", completed: false },
        { text: "Advanced AI features rollout", completed: false },
        { text: "Cross-chain bridge implementation", completed: false },
        { text: "Developer SDK release", completed: false }
      ]
    },
    {
      quarter: "2026 Q2+",
      title: "Global Scaling",
      status: "planned",
      items: [
        { text: "International market expansion", completed: false },
        { text: "Enterprise solutions development", completed: false },
        { text: "Next-generation hardware research", completed: false },
        { text: "Decentralized governance transition", completed: false }
      ]
    }
  ]

  const keyMetrics = [
    { label: "Development Progress", value: "35%", icon: Rocket },
    { label: "Team Members", value: "25+", icon: Users },
    { label: "Target Markets", value: "15", icon: Globe },
    { label: "Partnership LOIs", value: "8", icon: Target }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "from-green-500 to-emerald-500"
      case "active": return "from-blue-500 to-purple-500" 
      case "upcoming": return "from-orange-500 to-red-500"
      case "planned": return "from-gray-500 to-slate-500"
      default: return "from-gray-500 to-slate-500"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed": return CheckCircle
      case "active": return Clock
      case "upcoming": return Target
      case "planned": return Calendar
      default: return Calendar
    }
  }

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Development
            </span>
            <br />
            Roadmap
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Our strategic roadmap to revolutionize the mobile industry with blockchain technology. 
            Track our progress and upcoming milestones.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {keyMetrics.map((metric, index) => (
              <div key={index} className="flex items-center space-x-2 bg-slate-800/50 rounded-full px-6 py-3">
                <metric.icon className="w-5 h-5 text-blue-400" />
                <span className="text-white font-semibold">{metric.value}</span>
                <span className="text-gray-400 text-sm">{metric.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 h-full"></div>
            
            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <div 
                  key={index} 
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} animate-in fade-in-0 slide-in-from-bottom-6`}
                  style={{ animationDelay: `${index * 300}ms` }}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                    <Card className="bg-gradient-to-br from-slate-900/50 via-slate-800/30 to-slate-900/50 backdrop-blur-2xl border border-blue-500/20 hover:scale-105 hover:-translate-y-2 hover:border-purple-500/30 transition-all duration-500 group">
                      <CardHeader>
                        <div className={`flex items-center gap-3 ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`}>
                          <Badge className={`bg-gradient-to-r ${getStatusColor(milestone.status)} text-white`}>
                            {milestone.quarter}
                          </Badge>
                          <CardTitle className="text-xl text-white">{milestone.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          {milestone.items.map((item, idx) => (
                            <li key={idx} className={`flex items-start gap-2 text-sm ${index % 2 === 0 ? 'flex-row-reverse text-right' : 'flex-row text-left'}`}>
                              {item.completed ? (
                                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                              ) : (
                                <div className="w-4 h-4 border-2 border-gray-400 rounded-full mt-0.5 flex-shrink-0"></div>
                              )}
                              <span className={item.completed ? 'text-gray-300' : 'text-gray-400'}>
                                {item.text}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="relative z-10 flex items-center justify-center">
                    <div className={`w-12 h-12 bg-gradient-to-r ${getStatusColor(milestone.status)} rounded-full border-4 border-slate-900 flex items-center justify-center hover:scale-125 transition-transform duration-300 ${
                      milestone.status === 'active' ? 'animate-pulse' : ''
                    }`}>
                      {(() => {
                        const StatusIcon = getStatusIcon(milestone.status)
                        return <StatusIcon className="w-6 h-6 text-white" />
                      })()}
                    </div>
                    {/* Pulsing rings for active status */}
                    {milestone.status === 'active' && (
                      <>
                        <div className={`absolute w-16 h-16 bg-gradient-to-r ${getStatusColor(milestone.status)} opacity-20 rounded-full animate-ping`}></div>
                        <div className={`absolute w-20 h-20 bg-gradient-to-r ${getStatusColor(milestone.status)} opacity-10 rounded-full animate-ping`} style={{ animationDelay: '0.5s' }}></div>
                      </>
                    )}
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Timeline */}
      <section className="py-20 px-4 sm:px-6 bg-slate-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Feature Rollout Plan</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover when key features and capabilities will be available to users.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-slate-900/50 via-slate-800/30 to-slate-900/50 backdrop-blur-2xl border border-green-500/20">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Smartphone className="w-8 h-8 text-green-400" />
                  <div>
                    <CardTitle className="text-white">Hardware Launch</CardTitle>
                    <CardDescription className="text-green-400">Q4 2025</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• NexAI Phone hardware</li>
                  <li>• Basic DePIN mining</li>
                  <li>• NEX wallet integration</li>
                  <li>• Initial security features</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-slate-900/50 via-slate-800/30 to-slate-900/50 backdrop-blur-2xl border border-blue-500/20">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Coins className="w-8 h-8 text-blue-400" />
                  <div>
                    <CardTitle className="text-white">Token Economy</CardTitle>
                    <CardDescription className="text-blue-400">Q1 2026</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• NEX token staking</li>
                  <li>• Governance voting</li>
                  <li>• Reward distribution</li>
                  <li>• DeFi integrations</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-slate-900/50 via-slate-800/30 to-slate-900/50 backdrop-blur-2xl border border-purple-500/20">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Network className="w-8 h-8 text-purple-400" />
                  <div>
                    <CardTitle className="text-white">Advanced DePIN</CardTitle>
                    <CardDescription className="text-purple-400">Q2 2026</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Multi-network mining</li>
                  <li>• AI optimization</li>
                  <li>• Cross-chain bridges</li>
                  <li>• Enterprise features</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Updates */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Follow our progress and get notified about major milestones and releases.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white font-medium px-8 py-4 rounded-full transition-all duration-300 shadow-lg text-lg">
              Join Newsletter
            </Button>
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800/50 px-8 py-4 rounded-full text-lg">
              Join Discord
            </Button>
          </div>
          <p className="text-sm text-gray-400 mt-6">
            Get weekly development updates and early access to beta features
          </p>
        </div>
      </section>
    </PageLayout>
  )
} 