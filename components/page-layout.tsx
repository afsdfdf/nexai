"use client"

import Navigation from "./navigation"
import { ScrollProgress, FloatingOrbs, ParticleField } from "./enhanced-effects"
import { ReactNode } from "react"

interface PageLayoutProps {
  children: ReactNode
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white relative overflow-x-hidden">
      {/* Enhanced background effects */}
      <ScrollProgress />
      <FloatingOrbs />
      <ParticleField />
      
      <Navigation />
      <main className="pt-16 relative z-10">
        {children}
      </main>
      <footer className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-t border-blue-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between">
            {/* Logo and Description */}
            <div className="mb-6 md:mb-0 md:max-w-xs">
              <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                NexAI Phone
              </h3>
              <p className="text-gray-400 text-sm">
                The future of blockchain smartphones with DePIN mining capabilities.
              </p>
            </div>
            
            {/* Links - Optimized for mobile */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-10">
              <div>
                <h4 className="font-medium text-white text-sm mb-3">Products</h4>
                <ul className="space-y-2 text-xs text-gray-400">
                  <li><a href="/products" className="hover:text-blue-400 transition-colors">NexAI Phones</a></li>
                  <li><a href="/nft" className="hover:text-blue-400 transition-colors">NFT Collection</a></li>
                  <li><a href="/token" className="hover:text-blue-400 transition-colors">NEX Token</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-white text-sm mb-3">Technology</h4>
                <ul className="space-y-2 text-xs text-gray-400">
                  <li><a href="/depin" className="hover:text-blue-400 transition-colors">DePIN Mining</a></li>
                  <li><a href="/whitepaper" className="hover:text-blue-400 transition-colors">Whitepaper</a></li>
                  <li><a href="/roadmap" className="hover:text-blue-400 transition-colors">Roadmap</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-white text-sm mb-3">Company</h4>
                <ul className="space-y-2 text-xs text-gray-400">
                  <li><a href="/team" className="hover:text-blue-400 transition-colors">Team</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition-colors">Contact</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition-colors">Support</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Social Media Links and Copyright - Mobile Optimized */}
          <div className="mt-6 border-t border-gray-800 pt-6">
            <div className="flex flex-col-reverse sm:flex-row justify-between items-center">
              {/* Copyright */}
              <div className="text-xs text-gray-500 mt-4 sm:mt-0">
                <p>&copy; 2025 NexAI Phone. All rights reserved.</p>
              </div>
              
              {/* Social Media Icons */}
              <div className="flex space-x-3">
                <a href="https://t.me/nexaiphone" target="_blank" rel="noopener noreferrer" aria-label="Telegram 社区" title="Telegram 社区" className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 p-2 rounded-full border border-blue-500/30 hover:border-blue-500/60 transition-all hover:scale-110">
                  <svg className="w-4 h-4 text-blue-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.214-.495.214l.18-2.5 4.563-4.125c.198-.175-.043-.271-.31-.097l-5.636 3.55-2.424-.746c-.517-.17-.53-.517.11-.764l9.472-3.654c.425-.163.81.102.67.652z" />
                  </svg>
                </a>
                <a href="https://twitter.com/nexaiphone" target="_blank" rel="noopener noreferrer" aria-label="推特 Twitter" title="推特 Twitter" className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 p-2 rounded-full border border-blue-500/30 hover:border-blue-500/60 transition-all hover:scale-110">
                  <svg className="w-4 h-4 text-blue-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z" />
                  </svg>
                </a>
                <a href="https://github.com/nexaiphone" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 p-2 rounded-full border border-blue-500/30 hover:border-blue-500/60 transition-all hover:scale-110">
                  <svg className="w-4 h-4 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a href="https://discord.gg/nexaiphone" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 p-2 rounded-full border border-blue-500/30 hover:border-blue-500/60 transition-all hover:scale-110">
                  <svg className="w-4 h-4 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.39-.444.976-.608 1.41a18.27 18.27 0 0 0-5.487 0 12.278 12.278 0 0 0-.617-1.41.077.077 0 0 0-.079-.037 19.798 19.798 0 0 0-4.885 1.491.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026c.462-.62.874-1.275 1.226-1.963.021-.04.001-.088-.041-.104a13.201 13.201 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
} 