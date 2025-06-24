"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { Menu, X, Github, Twitter, MessageCircle, BookOpen } from "lucide-react"

export default function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showCommunity, setShowCommunity] = useState(false)

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

  const communityLinks = [
    { name: 'Discord', href: 'https://discord.gg/nexai', iconType: 'custom', icon: <span className="text-blue-400 text-lg">󰙯</span> },
    { name: 'Twitter', href: 'https://twitter.com/nexaiphone', iconType: 'lucide', icon: <Twitter className="w-4 h-4 text-blue-400" /> },
    { name: 'GitHub', href: 'https://github.com/nexai', iconType: 'lucide', icon: <Github className="w-4 h-4 text-blue-400" /> },
    { name: 'Documentation', href: '/docs', iconType: 'lucide', icon: <BookOpen className="w-4 h-4 text-blue-400" /> },
    { name: 'Support', href: '/support', iconType: 'lucide', icon: <MessageCircle className="w-4 h-4 text-blue-400" /> },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setShowCommunity(false)
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-slate-950/95 backdrop-blur-3xl border-b border-blue-500/30 shadow-2xl shadow-blue-500/10' 
        : 'bg-gradient-to-r from-slate-950/90 via-slate-900/90 to-slate-950/90 backdrop-blur-2xl border-b border-blue-500/20'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className={`flex justify-between items-center transition-all duration-300 ${
          scrolled ? 'h-12 sm:h-14' : 'h-14 sm:h-16'
        }`}>
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className={`relative transition-all duration-300 ${
              scrolled ? 'w-7 h-7 sm:w-8 sm:h-8' : 'w-8 h-8 sm:w-10 sm:h-10'
            }`}>
              <Image
                src="/images/nexai-logo.png"
                alt="NexAI Logo"
                width={40}
                height={40}
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                priority
              />
            </div>
            <span className={`font-medium bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-purple-300 transition-all duration-300 ${
              scrolled ? 'text-base sm:text-lg' : 'text-lg sm:text-xl'
            }`}>
              NexAI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 group hover:scale-105 ${
                  pathname === item.href
                    ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 shadow-lg shadow-blue-500/20'
                    : 'text-gray-300 hover:bg-slate-800/50 hover:text-white'
                }`}
              >
                  <span>{item.name}</span>
                {pathname === item.href && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full animate-pulse"></div>
                )}
              </Link>
            ))}
            
            {/* Community dropdown */}
            <div className="relative">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowCommunity(!showCommunity);
                }}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 group hover:scale-105 text-gray-300 hover:bg-slate-800/50 hover:text-white ${showCommunity ? 'bg-slate-800/50 text-white' : ''}`}
              >
                <span>Community</span>
              </button>
              
              {showCommunity && (
                <div className="absolute right-0 mt-2 w-56 rounded-xl bg-slate-900/95 backdrop-blur-xl border border-blue-500/20 shadow-2xl shadow-blue-500/10 animate-in fade-in-0 slide-in-from-top-5 duration-200 z-50">
                  <div className="py-2 px-2">
                    {communityLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        className="flex items-center space-x-3 px-4 py-3 text-sm font-medium transition-all duration-300 rounded-lg hover:bg-slate-800/50 text-gray-300 hover:text-white"
                      >
                        {link.icon}
                        <span>{link.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
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
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-900/95 backdrop-blur-xl rounded-lg mt-2 border border-blue-500/20 shadow-2xl shadow-blue-500/10 animate-in slide-in-from-top-2 duration-300">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center space-x-3 px-4 py-3 text-sm font-medium transition-all duration-300 rounded-lg hover:scale-[1.02] ${
                    pathname === item.href
                      ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-400 shadow-lg shadow-blue-500/20'
                      : 'text-gray-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={() => setIsOpen(false)}
                >
                  <span>{item.name}</span>
                  {pathname === item.href && (
                    <div className="ml-auto w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  )}
                </Link>
              ))}
              
              {/* Mobile Community Links */}
              <div className="pt-2 mt-2 border-t border-gray-800">
                <h4 className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Community
                </h4>
                {communityLinks.map((link, index) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="flex items-center space-x-3 px-4 py-3 text-sm font-medium transition-all duration-300 rounded-lg hover:bg-slate-800/50 text-gray-300 hover:text-white"
                    style={{ animationDelay: `${(navigation.length + index) * 50}ms` }}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.icon}
                    <span>{link.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 