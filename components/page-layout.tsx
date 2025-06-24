"use client"

import Navigation from "./navigation"
import { ReactNode } from "react"

interface PageLayoutProps {
  children: ReactNode
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white">
      <Navigation />
      <main className="pt-16">
        {children}
      </main>
      <footer className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-t border-blue-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                NexAI Phone
              </h3>
              <p className="text-gray-400 text-sm">
                The future of blockchain smartphones with DePIN mining capabilities.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium text-white">Products</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/products" className="hover:text-blue-400 transition-colors">NexAI Phones</a></li>
                <li><a href="/nft" className="hover:text-blue-400 transition-colors">NFT Collection</a></li>
                <li><a href="/token" className="hover:text-blue-400 transition-colors">NEX Token</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium text-white">Technology</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/depin" className="hover:text-blue-400 transition-colors">DePIN Mining</a></li>
                <li><a href="/whitepaper" className="hover:text-blue-400 transition-colors">Whitepaper</a></li>
                <li><a href="/roadmap" className="hover:text-blue-400 transition-colors">Roadmap</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium text-white">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/team" className="hover:text-blue-400 transition-colors">Team</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Support</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 NexAI Phone. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 