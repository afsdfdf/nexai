"use client"

import PageLayout from "@/components/page-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Smartphone,
  Star,
  Zap,
  Shield,
  Crown,
  Gem,
  TrendingUp,
  Users
} from "lucide-react"
import Image from "next/image"

export default function NFTPage() {
  const nftTypes = [
    {
      name: "Common Phone NFT",
      rarity: "Common",
      supply: "50,000",
      price: "0.1 ETH",
      mining: "+10%",
      color: "from-gray-500 to-slate-500",
      icon: Smartphone
    },
    {
      name: "Rare Phone NFT", 
      rarity: "Rare",
      supply: "10,000",
      price: "0.5 ETH",
      mining: "+25%",
      color: "from-blue-500 to-cyan-500",
      icon: Star
    },
    {
      name: "Epic Phone NFT",
      rarity: "Epic", 
      supply: "2,000",
      price: "2 ETH",
      mining: "+50%",
      color: "from-purple-500 to-pink-500",
      icon: Zap
    },
    {
      name: "Legendary Phone NFT",
      rarity: "Legendary",
      supply: "500",
      price: "10 ETH", 
      mining: "+100%",
      color: "from-orange-500 to-red-500",
      icon: Crown
    }
  ]

  return (
    <PageLayout>
      <section className="relative py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              NFT Collection
            </span>
            <br />
            Coming Soon
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Unique phone NFTs with special attributes and mining bonuses. 
            Own, trade, and upgrade your digital smartphone assets.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {nftTypes.map((nft, index) => (
              <Card key={index} className="bg-gradient-to-br from-slate-900/50 via-slate-800/30 to-slate-900/50 backdrop-blur-2xl border border-blue-500/20">
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${nft.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <nft.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg text-white">{nft.name}</CardTitle>
                  <Badge className={`bg-gradient-to-r ${nft.color} text-white`}>
                    {nft.rarity}
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Supply:</span>
                    <span className="text-white">{nft.supply}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Price:</span>
                    <span className="text-white">{nft.price}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Mining Bonus:</span>
                    <span className="text-green-400">{nft.mining}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-pink-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            NFT Marketplace Coming Q1 2026
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Be among the first to mint exclusive phone NFTs with unique attributes and benefits.
          </p>
          <Button className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white font-medium px-8 py-4 rounded-full transition-all duration-300 shadow-lg text-lg">
            Join Waitlist
          </Button>
        </div>
      </section>
    </PageLayout>
  )
} 