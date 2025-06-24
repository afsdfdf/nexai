"use client"

import PageLayout from "@/components/page-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Linkedin, 
  Twitter, 
  Github,
  Users,
  Award,
  TrendingUp,
  Globe
} from "lucide-react"
import Image from "next/image"

export default function TeamPage() {
  const teamMembers = [
    {
      name: "James Chen",
      role: "CEO & Co-Founder",
      bio: "Former Apple engineer with 15+ years experience in mobile hardware and blockchain technology.",
      image: "/images/James.png",
      achievements: [
        "Ex-Apple iPhone Team Lead",
        "Built 3 successful startups",
        "Blockchain pioneer since 2015"
      ]
    },
    {
      name: "Sarah Chen",
      role: "CTO & Co-Founder", 
      bio: "Blockchain architect and AI researcher with expertise in DePIN protocols and mobile security.",
      image: "/images/Sarah Chen.png",
      achievements: [
        "Ex-Google AI Research",
        "Published 20+ research papers",
        "DePIN protocol contributor"
      ]
    },
    {
      name: "Michael Rodriguez",
      role: "Head of Blockchain",
      bio: "Smart contract expert and DeFi protocol designer with deep Web3 infrastructure experience.",
      image: "/images/Michael Rodriguez.png",
      achievements: [
        "Ex-Ethereum Foundation",
        "Built $100M+ DeFi protocols", 
        "Security audit specialist"
      ]
    }
  ]

  const advisors = [
    {
      name: "Dr. Alex Thompson",
      role: "Technical Advisor",
      company: "Former Tesla AI Director",
      expertise: "AI & Machine Learning"
    },
    {
      name: "Maria Gonzalez",
      role: "Business Advisor", 
      company: "Former Samsung Mobile VP",
      expertise: "Mobile Industry"
    },
    {
      name: "David Kim",
      role: "Blockchain Advisor",
      company: "Coinbase Ventures Partner",
      expertise: "Crypto & DeFi"
    }
  ]

  const companyStats = [
    { label: "Team Members", value: "50+", icon: Users },
    { label: "Countries", value: "12", icon: Globe },
    { label: "Years Experience", value: "100+", icon: Award },
    { label: "Patents Filed", value: "25", icon: TrendingUp }
  ]

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            Meet the
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              NexAI Team
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Passionate innovators building the future of decentralized smartphone technology.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {companyStats.map((stat, index) => (
              <div key={index} className="flex items-center space-x-2 bg-slate-800/50 rounded-full px-6 py-3">
                <stat.icon className="w-5 h-5 text-blue-400" />
                <span className="text-white font-semibold text-lg">{stat.value}</span>
                <span className="text-gray-400 text-sm">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Photo */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="relative w-full h-96 rounded-2xl overflow-hidden mb-12">
            <Image
              src="/images/Team.jpg"
              alt="NexAI Team"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6">
              <h3 className="text-2xl font-bold text-white mb-2">Our Global Team</h3>
              <p className="text-gray-300">Building the future together from around the world</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Team */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet the visionary leaders driving innovation at NexAI and shaping 
              the future of blockchain smartphones.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-gradient-to-br from-slate-900/50 via-slate-800/30 to-slate-900/50 backdrop-blur-2xl border border-blue-500/20">
                <CardHeader className="text-center">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <CardTitle className="text-xl text-white">{member.name}</CardTitle>
                  <CardDescription className="text-blue-400 font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-300 text-sm">
                    {member.bio}
                  </p>
                  <div>
                    <h4 className="text-white font-semibold mb-2 text-sm">Achievements</h4>
                    <ul className="space-y-1">
                      {member.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-xs text-gray-400">
                          • {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advisors */}
      <section className="py-20 px-4 sm:px-6 bg-slate-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Advisory Board</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Industry veterans and thought leaders guiding our strategic vision 
              and technology development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advisors.map((advisor, index) => (
              <Card key={index} className="bg-gradient-to-br from-slate-900/50 via-slate-800/30 to-slate-900/50 backdrop-blur-2xl border border-purple-500/20 text-center">
                <CardHeader>
                  <CardTitle className="text-lg text-white">{advisor.name}</CardTitle>
                  <CardDescription className="text-purple-400 font-medium">
                    {advisor.role}
                  </CardDescription>
                  <p className="text-gray-400 text-sm">{advisor.company}</p>
                </CardHeader>
                <CardContent>
                  <Badge className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-purple-400 border-purple-500/30">
                    {advisor.expertise}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Culture & Values */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide our mission to democratize blockchain technology 
              and empower users worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Innovation</h3>
              <p className="text-gray-400 text-sm">
                Pushing boundaries and creating groundbreaking solutions for the Web3 future.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Community</h3>
              <p className="text-gray-400 text-sm">
                Building products that empower our global community of users and developers.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Transparency</h3>
              <p className="text-gray-400 text-sm">
                Open development, clear communication, and honest business practices.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Accessibility</h3>
              <p className="text-gray-400 text-sm">
                Making advanced blockchain technology accessible to everyone, everywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-20 px-4 sm:px-6 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-pink-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Join Our Mission
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Ready to shape the future of blockchain smartphones? 
            We're looking for passionate individuals to join our growing team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white font-medium px-8 py-4 rounded-full transition-all duration-300 shadow-lg text-lg">
              View Open Positions
            </Button>
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800/50 px-8 py-4 rounded-full text-lg">
              Get in Touch
            </Button>
          </div>
          <p className="text-sm text-gray-400 mt-6">
            Remote-first company • Competitive compensation • Equity packages
          </p>
        </div>
      </section>
    </PageLayout>
  )
} 