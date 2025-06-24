"use client"

import PageLayout from "@/components/page-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Cpu, 
  Battery, 
  Wifi, 
  Shield, 
  Camera, 
  Smartphone,
  Zap,
  Star,
  CheckCircle
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ProductsPage() {
  const phones = [
    {
      id: "nexai-essential",
      name: "NexAI Essential",
      price: "$299",
      originalPrice: "$399",
      description: "Perfect for crypto beginners",
      image: "/images/nexai-phones.png",
      gradient: "from-blue-600/20 via-cyan-600/20 to-blue-600/20",
      borderGradient: "from-blue-500 to-cyan-500",
      features: [
        "Basic DePIN Mining",
        "5G Connectivity",
        "48MP AI Camera",
        "4000mAh Battery",
        "6GB RAM + 128GB Storage",
        "NEX Wallet Built-in"
      ],
      miningBonus: "+10%",
      specs: {
        display: "6.1\" AMOLED",
        processor: "Snapdragon 7 Gen 1",
        storage: "128GB",
        battery: "4000mAh",
        camera: "48MP Triple"
      }
    },
    {
      id: "nexai-pro",
      name: "NexAI Pro",
      price: "$399",
      originalPrice: "$499",
      description: "Enhanced mining capabilities",
      image: "/images/nexai-phones.png",
      gradient: "from-purple-600/20 via-pink-600/20 to-purple-600/20",
      borderGradient: "from-purple-500 to-pink-500",
      features: [
        "Advanced DePIN Mining",
        "Wi-Fi 6E + 5G",
        "108MP AI Camera System",
        "5000mAh Fast Charging",
        "8GB RAM + 256GB Storage",
        "Multi-Chain Wallet"
      ],
      miningBonus: "+25%",
      popular: true,
      specs: {
        display: "6.5\" AMOLED 120Hz",
        processor: "Snapdragon 8 Gen 2",
        storage: "256GB",
        battery: "5000mAh",
        camera: "108MP Quad"
      }
    },
    {
      id: "nexai-max",
      name: "NexAI Max",
      price: "$499",
      originalPrice: "$699",
      description: "Ultimate performance & mining",
      image: "/images/nexai-phones.png",
      gradient: "from-pink-600/20 via-orange-600/20 to-pink-600/20",
      borderGradient: "from-pink-500 to-orange-500",
      features: [
        "Premium DePIN Mining",
        "Satellite Connectivity",
        "200MP Pro Camera System",
        "6000mAh Wireless Charging",
        "12GB RAM + 512GB Storage",
        "Hardware Security Module"
      ],
      miningBonus: "+50%",
      specs: {
        display: "6.8\" LTPO AMOLED 144Hz",
        processor: "Snapdragon 8 Gen 3",
        storage: "512GB",
        battery: "6000mAh",
        camera: "200MP Penta"
      }
    }
  ]

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              NexAI Phone
            </span>
            <br />
            Collection
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Revolutionary blockchain smartphones that mine crypto while you use them. 
            Choose the perfect device for your Web3 journey.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
              <CheckCircle className="w-4 h-4 mr-2" />
              DePIN Mining Ready
            </Badge>
            <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
              <Wifi className="w-4 h-4 mr-2" />
              5G + Wi-Fi 6E
            </Badge>
            <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30">
              <Shield className="w-4 h-4 mr-2" />
              Hardware Security
            </Badge>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {phones.map((phone, index) => (
              <Card 
                key={phone.id}
                className={`relative overflow-hidden bg-gradient-to-br ${phone.gradient} backdrop-blur-2xl border-0 shadow-2xl hover:scale-105 hover:rotate-1 hover:-translate-y-2 transition-all duration-700 transform-gpu group ${
                  phone.popular ? 'ring-2 ring-purple-500/50 scale-105' : ''
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {phone.popular && (
                  <div className="absolute top-4 left-4 z-10">
                    <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                      <Star className="w-3 h-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className="relative w-48 h-48 mx-auto mb-4 group-hover:scale-110 transition-transform duration-500">
                    <Image
                      src={phone.image}
                      alt={phone.name}
                      fill
                      className="object-contain group-hover:rotate-6 transition-transform duration-700"
                    />
                    {/* Floating glow effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${phone.borderGradient} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500 -z-10`}></div>
                  </div>
                  <CardTitle className="text-2xl font-bold text-white mb-2">
                    {phone.name}
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    {phone.description}
                  </CardDescription>
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      {phone.price}
                    </span>
                    <span className="text-lg text-gray-400 line-through">
                      {phone.originalPrice}
                    </span>
                  </div>
                  <Badge className={`bg-gradient-to-r ${phone.borderGradient} text-white mt-2`}>
                    Mining Bonus: {phone.miningBonus}
                  </Badge>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Features */}
                  <div>
                    <h4 className="font-semibold text-white mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {phone.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Quick Specs */}
                  <div>
                    <h4 className="font-semibold text-white mb-3">Specifications</h4>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="text-gray-400">Display:</div>
                      <div className="text-white">{phone.specs.display}</div>
                      <div className="text-gray-400">Processor:</div>
                      <div className="text-white">{phone.specs.processor}</div>
                      <div className="text-gray-400">Storage:</div>
                      <div className="text-white">{phone.specs.storage}</div>
                      <div className="text-gray-400">Battery:</div>
                      <div className="text-white">{phone.specs.battery}</div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <Button 
                      className={`w-full bg-gradient-to-r ${phone.borderGradient} hover:opacity-90 text-white font-medium py-3 rounded-full transition-all duration-300 shadow-lg`}
                    >
                      Pre-order Now
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full border-gray-600 text-gray-300 hover:bg-gray-800/50"
                    >
                      Learn More
                    </Button>
                  </div>
                </CardContent>

                {/* Gradient border effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${phone.borderGradient} opacity-20 blur-xl -z-10`}></div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Compare Models</h2>
            <p className="text-gray-400">Choose the perfect NexAI Phone for your needs</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-slate-900/50 backdrop-blur-xl rounded-xl border border-blue-500/20">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left p-4 text-white font-semibold">Feature</th>
                  <th className="text-center p-4 text-white font-semibold">Essential</th>
                  <th className="text-center p-4 text-white font-semibold">Pro</th>
                  <th className="text-center p-4 text-white font-semibold">Max</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-gray-800">
                  <td className="p-4 text-gray-300">Price</td>
                  <td className="p-4 text-center text-blue-400 font-semibold">$299</td>
                  <td className="p-4 text-center text-purple-400 font-semibold">$399</td>
                  <td className="p-4 text-center text-pink-400 font-semibold">$499</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="p-4 text-gray-300">Mining Bonus</td>
                  <td className="p-4 text-center text-white">+10%</td>
                  <td className="p-4 text-center text-white">+25%</td>
                  <td className="p-4 text-center text-white">+50%</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="p-4 text-gray-300">Display</td>
                  <td className="p-4 text-center text-white">6.1" AMOLED</td>
                  <td className="p-4 text-center text-white">6.5" AMOLED 120Hz</td>
                  <td className="p-4 text-center text-white">6.8" LTPO 144Hz</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="p-4 text-gray-300">RAM/Storage</td>
                  <td className="p-4 text-center text-white">6GB/128GB</td>
                  <td className="p-4 text-center text-white">8GB/256GB</td>
                  <td className="p-4 text-center text-white">12GB/512GB</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="p-4 text-gray-300">Camera</td>
                  <td className="p-4 text-center text-white">48MP Triple</td>
                  <td className="p-4 text-center text-white">108MP Quad</td>
                  <td className="p-4 text-center text-white">200MP Penta</td>
                </tr>
                <tr>
                  <td className="p-4 text-gray-300">Special Features</td>
                  <td className="p-4 text-center text-white">Basic DePIN</td>
                  <td className="p-4 text-center text-white">Advanced DePIN</td>
                  <td className="p-4 text-center text-white">Premium DePIN + Satellite</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Mining?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of users already earning crypto with their NexAI Phones
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white font-medium px-8 py-4 rounded-full transition-all duration-300 shadow-lg text-lg">
              Pre-order Your Phone
            </Button>
            <Link href="/depin">
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800/50 px-8 py-4 rounded-full text-lg">
                Learn About DePIN Mining
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  )
} 