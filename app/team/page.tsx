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
  Globe,
  ExternalLink
} from "lucide-react"
import Image from "next/image"

export default function TeamPage() {
  const teamMembers = [
    {
      name: "James Chen",
      role: "CEO & Co-Founder",
      bio: "Former Apple engineer with 15+ years experience in mobile hardware and blockchain technology. Led iPhone hardware security team for 5 years before founding NexAI to bridge the gap between mobile technology and decentralized infrastructure.",
      image: "/images/James.png",
      achievements: [
        "Ex-Apple iPhone Security Team Lead (2015-2020)",
        "Built 3 successful tech startups with exits",
        "Blockchain pioneer since 2015",
        "7 patents in mobile security"
      ],
      experience: [
        { company: "Apple", role: "Senior Security Engineer", period: "2015-2020" },
        { company: "SecureMobile", role: "Founder & CTO", period: "2012-2015" },
        { company: "Qualcomm", role: "Hardware Engineer", period: "2008-2012" }
      ],
      education: [
        { degree: "MS Computer Engineering", institution: "Stanford University", year: "2008" },
        { degree: "BS Electrical Engineering", institution: "UC Berkeley", year: "2006" }
      ],
      publications: [
        "Secure Enclave Architecture for Mobile Devices (IEEE Security Conference, 2019)",
        "Blockchain Integration in Mobile Security Systems (Journal of Cryptography, 2021)"
      ],
      awards: ["Forbes 30 Under 30 - Technology (2016)", "Mobile Security Innovation Award (2018)"],
      linkedin: "https://linkedin.com/in/jameschen",
      twitter: "https://twitter.com/jameschen",
      github: "https://github.com/jameschen"
    },
    {
      name: "Sarah Zhang",
      role: "CTO & Co-Founder", 
      bio: "Blockchain architect and AI researcher with expertise in DePIN protocols and mobile security. Previously led AI research at Google focusing on on-device machine learning and privacy-preserving computation for mobile devices.",
      image: "/images/Sarah Chen.png",
      achievements: [
        "Ex-Google AI Research Lead (2017-2022)",
        "Published 20+ research papers in AI & blockchain",
        "Core DePIN protocol contributor",
        "PhD in Computer Science from MIT"
      ],
      experience: [
        { company: "Google", role: "AI Research Lead", period: "2017-2022" },
        { company: "Ethereum Foundation", role: "Research Contributor", period: "2016-2017" },
        { company: "MIT CSAIL", role: "Research Scientist", period: "2014-2016" }
      ],
      education: [
        { degree: "PhD Computer Science", institution: "MIT", year: "2014" },
        { degree: "MS Computer Science", institution: "Stanford University", year: "2010" }
      ],
      publications: [
        "Privacy-Preserving Machine Learning on Mobile Devices (NeurIPS, 2020)",
        "Efficient DePIN Network Architectures (Blockchain Research Journal, 2022)",
        "On-Device AI for Decentralized Applications (ACM Computing, 2021)"
      ],
      awards: ["ACM Distinguished Researcher Award (2019)", "Women in AI Leadership Award (2021)"],
      linkedin: "https://linkedin.com/in/sarahzhang",
      twitter: "https://twitter.com/sarahzhang",
      github: "https://github.com/sarahzhang"
    },
    {
      name: "Michael Rodriguez",
      role: "Head of Blockchain",
      bio: "Smart contract expert and DeFi protocol designer with deep Web3 infrastructure experience. Led development of multiple high-value DeFi protocols and security auditing for major blockchain projects before joining NexAI to build the next generation of mobile blockchain integration.",
      image: "/images/Michael Rodriguez.png",
      achievements: [
        "Ex-Ethereum Foundation Core Developer (2018-2022)",
        "Built $100M+ DeFi protocols", 
        "Security audit specialist for 30+ major projects",
        "Contributor to 5 EIPs (Ethereum Improvement Proposals)"
      ],
      experience: [
        { company: "Ethereum Foundation", role: "Core Developer", period: "2018-2022" },
        { company: "DeFi Protocol X", role: "Lead Developer", period: "2016-2018" },
        { company: "ConsenSys", role: "Smart Contract Engineer", period: "2015-2016" }
      ],
      education: [
        { degree: "MS Cryptography", institution: "Carnegie Mellon University", year: "2015" },
        { degree: "BS Computer Science", institution: "University of Washington", year: "2013" }
      ],
      publications: [
        "Secure Smart Contract Design Patterns (Ethereum Developer Conference, 2020)",
        "Mobile-First DeFi Infrastructure (Journal of Blockchain Technology, 2022)"
      ],
      awards: ["Blockchain Developer of the Year (2021)", "ETHGlobal Hackathon Winner (2019)"],
      linkedin: "https://linkedin.com/in/michaelrodriguez",
      twitter: "https://twitter.com/michaelrodriguez",
      github: "https://github.com/michaelrodriguez"
    },
    {
      name: "Jennifer Park",
      role: "Head of Product",
      bio: "Product strategy expert with background in consumer electronics and blockchain applications. Previously led product teams at Samsung and crypto wallet startup, bringing user-centered design to complex technical products.",
      image: "/images/team/jennifer-park.png",
      achievements: [
        "Ex-Samsung Mobile Product Lead (2016-2021)",
        "Launched 5 flagship mobile products",
        "Blockchain UX pioneer",
        "2 design patents"
      ],
      experience: [
        { company: "Samsung", role: "Senior Product Manager", period: "2016-2021" },
        { company: "BlockWallet", role: "Head of Product", period: "2021-2023" },
        { company: "LG Electronics", role: "UX Designer", period: "2013-2016" }
      ],
      education: [
        { degree: "MBA", institution: "INSEAD", year: "2016" },
        { degree: "BS Industrial Design", institution: "RISD", year: "2013" }
      ],
      publications: [
        "Simplifying Blockchain UX for Mass Adoption (UX Design Conference, 2022)",
        "Mobile Design Patterns for Web3 Applications (Journal of Digital Design, 2021)"
      ],
      awards: ["Best Mobile UX Design (2019)", "Web3 Design Innovation Award (2022)"],
      linkedin: "https://linkedin.com/in/jenniferpark",
      twitter: "https://twitter.com/jenniferpark"
    }
  ]

  const advisors = [
    {
      name: "Dr. Alex Thompson",
      role: "Technical Advisor",
      company: "Former Tesla AI Director",
      expertise: "AI & Machine Learning",
      bio: "Led Tesla's AI team for autonomous driving systems. PhD in Computer Science from Stanford with 50+ published papers on machine learning and computer vision.",
      image: "/images/team/alex-thompson.png",
      linkedin: "https://linkedin.com/in/alexthompson"
    },
    {
      name: "Maria Gonzalez",
      role: "Business Advisor", 
      company: "Former Samsung Mobile VP",
      expertise: "Mobile Industry",
      bio: "25+ years in mobile industry leadership. Oversaw Samsung's mobile division in North America with $4B annual revenue. Expert in mobile market strategy and hardware ecosystems.",
      image: "/images/team/maria-gonzalez.png",
      linkedin: "https://linkedin.com/in/mariagonzalez"
    },
    {
      name: "David Kim",
      role: "Blockchain Advisor",
      company: "Coinbase Ventures Partner",
      expertise: "Crypto & DeFi",
      bio: "Early blockchain investor and DeFi strategist. Led investments in 30+ blockchain startups with 5 unicorns. Previously founded DeFi protocol with $500M TVL.",
      image: "/images/team/david-kim.png",
      linkedin: "https://linkedin.com/in/davidkim"
    },
    {
      name: "Dr. Lisa Chen",
      role: "Security Advisor",
      company: "Cybersecurity Research Lead",
      expertise: "Hardware Security",
      bio: "Expert in hardware security modules and secure enclave technology. Published researcher with focus on quantum-resistant cryptography and secure hardware design.",
      image: "/images/team/lisa-chen.png",
      linkedin: "https://linkedin.com/in/lisachen"
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
            Our team combines expertise from leading tech companies, blockchain projects, and research institutions.
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card 
                key={index} 
                className="bg-gradient-to-br from-slate-900/50 via-slate-800/30 to-slate-900/50 backdrop-blur-2xl border border-blue-500/20 hover:scale-105 hover:-translate-y-4 hover:rotate-1 transition-all duration-700 transform-gpu group animate-in fade-in-0 slide-in-from-bottom-6"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader className="text-center">
                  <div className="relative w-32 h-32 mx-auto mb-4 group-hover:scale-110 transition-transform duration-500">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover rounded-full group-hover:shadow-2xl group-hover:shadow-blue-500/20 transition-shadow duration-500"
                    />
                    {/* Glowing ring effect */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm scale-110"></div>
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
                    <h4 className="text-white font-semibold mb-2 text-sm">Professional Background</h4>
                    <ul className="space-y-2">
                      {member.experience.map((exp, idx) => (
                        <li key={idx} className="text-xs text-gray-400">
                          <span className="text-blue-400">{exp.company}</span> • {exp.role} • {exp.period}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-2 text-sm">Education</h4>
                    <ul className="space-y-1">
                      {member.education.map((edu, idx) => (
                        <li key={idx} className="text-xs text-gray-400">
                          {edu.degree}, {edu.institution}, {edu.year}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {member.publications && (
                    <div>
                      <h4 className="text-white font-semibold mb-2 text-sm">Key Publications</h4>
                      <ul className="space-y-1">
                        {member.publications.map((pub, idx) => (
                          <li key={idx} className="text-xs text-gray-400">
                            • {pub}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {member.awards && (
                    <div>
                      <h4 className="text-white font-semibold mb-2 text-sm">Awards & Recognition</h4>
                      <ul className="space-y-1">
                        {member.awards.map((award, idx) => (
                          <li key={idx} className="text-xs text-gray-400">
                            • {award}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="flex space-x-3 pt-2">
                    {member.linkedin && (
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                    {member.twitter && (
                      <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                        <Twitter className="w-4 h-4" />
                      </a>
                    )}
                    {member.github && (
                      <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                        <Github className="w-4 h-4" />
                      </a>
                    )}
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advisors.map((advisor, index) => (
              <Card key={index} className="bg-gradient-to-br from-slate-900/50 via-slate-800/30 to-slate-900/50 backdrop-blur-2xl border border-purple-500/20 text-center group hover:scale-105 hover:-translate-y-2 transition-all duration-500">
                <CardHeader>
                  <div className="relative w-24 h-24 mx-auto mb-4 group-hover:scale-110 transition-transform duration-500">
                    <Image
                      src={advisor.image}
                      alt={advisor.name}
                      fill
                      className="object-cover rounded-full group-hover:shadow-2xl group-hover:shadow-purple-500/20 transition-shadow duration-500"
                    />
                  </div>
                  <CardTitle className="text-lg text-white">{advisor.name}</CardTitle>
                  <CardDescription className="text-purple-400 font-medium">
                    {advisor.role}
                  </CardDescription>
                  <p className="text-gray-400 text-sm">{advisor.company}</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Badge className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-purple-400 border-purple-500/30">
                    {advisor.expertise}
                  </Badge>
                  <p className="text-gray-300 text-xs pt-2">
                    {advisor.bio}
                  </p>
                  {advisor.linkedin && (
                    <a 
                      href={advisor.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center text-xs text-purple-400 hover:text-purple-300 transition-colors mt-2"
                    >
                      <Linkedin className="w-3 h-3 mr-1" />
                      LinkedIn Profile
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  )}
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