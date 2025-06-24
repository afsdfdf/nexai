"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'DePIN Mining', href: '/depin' },
    { name: 'NEX Token', href: '/token' },
    { name: 'NFT Collection', href: '/nft' },
    { name: 'Team', href: '/team' },
    { name: 'Roadmap', href: '/roadmap' },
    { name: 'Whitepaper', href: '/whitepaper' },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-slate-950/90 via-slate-900/90 to-slate-950/90 backdrop-blur-2xl border-b border-blue-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative w-8 h-8 sm:w-10 sm:h-10">
              <Image
                src="/images/nexai-logo.png"
                alt="NexAI Logo"
                width={40}
                height={40}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <span className="text-lg sm:text-xl font-medium bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              NexAI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-all duration-300 ${
                  pathname === item.href
                    ? 'bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'
                    : 'text-gray-300 hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 hover:bg-clip-text hover:text-transparent'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link href="/products">
              <Button className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white font-medium px-6 py-2 rounded-full transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-purple-500/25">
                Buy Now
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-900/95 backdrop-blur-xl rounded-lg mt-2 border border-blue-500/20">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 text-sm font-medium transition-all duration-300 rounded-md ${
                    pathname === item.href
                      ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-400'
                      : 'text-gray-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link href="/products" onClick={() => setIsOpen(false)}>
                <Button className="w-full mt-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white font-medium px-6 py-2 rounded-full transition-all duration-300">
                  Buy Now
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 