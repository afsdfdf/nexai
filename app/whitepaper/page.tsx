"use client"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Download,
  FileText,
  Shield,
  Brain,
  Network,
  Cpu,
  Coins,
  TrendingUp,
  CheckCircle,
  ExternalLink,
  ArrowLeft
} from "lucide-react"
import Link from "next/link"

export default function WhitepaperPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-slate-950/90 via-slate-900/90 to-slate-950/90 backdrop-blur-2xl border-b border-blue-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-3">
              <ArrowLeft className="w-5 h-5 text-blue-400" />
              <span className="text-lg font-medium bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Back to Home
              </span>
            </Link>
            <div className="flex items-center space-x-4">
              <Button
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white font-medium px-6 py-2 rounded-full transition-all duration-300"
              >
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 text-blue-400 border border-blue-500/30 px-4 py-2 text-sm font-medium rounded-full backdrop-blur-xl shadow-lg shadow-blue-500/25 mb-8">
            <FileText className="w-4 h-4 mr-2" />
            Technical Whitepaper v2.0
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
            <span className="text-white">NexAI Phone</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Technical Whitepaper
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-12">
            A comprehensive technical overview of the world's first AI-powered smartphone designed for 
            decentralized physical infrastructure networks (DePIN) and autonomous cryptocurrency mining.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                68 Pages
              </div>
              <div className="text-gray-400">Comprehensive Analysis</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                15+ Charts
              </div>
              <div className="text-gray-400">Technical Diagrams</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                8 Sections
              </div>
              <div className="text-gray-400">Detailed Sections</div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-900 via-slate-950 to-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-8 text-center">
            Executive Summary
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            <strong>Vision:</strong> To revolutionize the mobile industry by seamlessly integrating artificial intelligence, blockchain, and decentralized physical infrastructure networks (DePIN) into a single, user-centric device.
          </p>
          <p className="text-lg text-gray-300 mb-6">
            <strong>Mission:</strong> NexAI Phone empowers individuals to participate in the Web3 economy, earn passive income, and maintain full control over their digital assets and privacy, all through an AI-powered smartphone.
          </p>
          <p className="text-lg text-gray-300 mb-6">
            <strong>Product Positioning:</strong> NexAI Phone is the world's first AI-driven smartphone designed for DePIN integration and autonomous crypto mining. It combines cutting-edge hardware, a secure operating system, and a robust AI stack to deliver unmatched performance, security, and utility for both mainstream and crypto-native users.
          </p>
          <p className="text-lg text-gray-300 mb-6">
            <strong>Core Innovations:</strong> NexAI Phone features a custom A1 Bionic chip with 12.5 TOPS AI performance, multi-chain mining capabilities, native support for 8+ DePIN networks, and a military-grade security enclave. Its AI engine dynamically optimizes mining, resource sharing, and energy consumption, while ensuring user privacy and asset safety.
          </p>
          <p className="text-lg text-gray-300 mb-6">
            <strong>Market Opportunity:</strong> The convergence of AI, blockchain, and DePIN is creating a multi-trillion-dollar market. NexAI Phone is positioned to capture early-mover advantage in this rapidly growing sector, targeting millions of users seeking new ways to earn, connect, and participate in the decentralized digital economy.
          </p>
        </div>
      </section>

      {/* Market Analysis & Opportunity */}
      <section className="py-20 px-6 bg-gradient-to-br from-black via-slate-950 to-slate-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-8 text-center">
            Market Analysis & Opportunity
          </h2>
          <h3 className="text-2xl font-semibold text-white mb-4">Industry Background & Trends</h3>
          <p className="text-lg text-gray-300 mb-6">
            The convergence of artificial intelligence, blockchain, and decentralized infrastructure is reshaping the global technology landscape. The rise of Web3 and DePIN (Decentralized Physical Infrastructure Networks) is enabling new forms of value creation, resource sharing, and user empowerment. Meanwhile, the smartphone market remains one of the largest and most dynamic sectors, with over 6.8 billion active devices worldwide and a growing demand for advanced, secure, and utility-driven mobile experiences.
          </p>
          <h3 className="text-2xl font-semibold text-white mb-4">DePIN & AI Smartphone Market Size</h3>
          <p className="text-lg text-gray-300 mb-6">
            The DePIN sector is projected to reach a $3.5 trillion market size by 2025, driven by decentralized storage, compute, wireless, and sensor networks. Simultaneously, the AI smartphone segment is expected to surpass $500 billion, as users seek devices with on-device intelligence, privacy, and new earning opportunities. NexAI Phone sits at the intersection of these trends, targeting early adopters, crypto enthusiasts, and mainstream users seeking passive income and digital sovereignty.
          </p>
          <h3 className="text-2xl font-semibold text-white mb-4">Competitive Landscape</h3>
          <p className="text-lg text-gray-300 mb-6">
            While traditional smartphone manufacturers focus on incremental hardware upgrades, NexAI Phone differentiates itself through deep integration with DePIN protocols, native crypto mining, and a robust AI stack. Competitors in the Web3 phone space often lack true on-device mining, advanced AI optimization, or seamless DePIN participation. NexAI's unique value proposition lies in its ability to combine all three, offering users a comprehensive Web3 mobile experience.
          </p>
          <h3 className="text-2xl font-semibold text-white mb-4">User Personas & Needs</h3>
          <ul className="list-disc pl-8 text-lg text-gray-300 mb-6">
            <li className="mb-2"><strong>Crypto Natives:</strong> Seek secure, high-performance devices for mining, staking, and asset management.</li>
            <li className="mb-2"><strong>Web3 Enthusiasts:</strong> Desire seamless access to DePIN networks, decentralized apps, and passive income streams.</li>
            <li className="mb-2"><strong>Tech-Savvy Mainstream Users:</strong> Value privacy, AI-powered features, and new ways to monetize device resources.</li>
            <li className="mb-2"><strong>Emerging Market Users:</strong> Benefit from financial inclusion, decentralized services, and affordable earning opportunities.</li>
          </ul>
          <p className="text-lg text-gray-300 mb-6">
            By addressing these diverse needs, NexAI Phone is positioned to capture significant market share and drive the next wave of mobile innovation.
          </p>
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-950 via-slate-900 to-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-8 text-center">
            Technical Architecture
          </h2>
          <h3 className="text-2xl font-semibold text-white mb-4">Hardware Overview</h3>
          <ul className="list-disc pl-8 text-lg text-gray-300 mb-6">
            <li className="mb-2"><strong>NexAI A1 Bionic Chip:</strong> Custom-designed SoC delivering 12.5 TOPS AI performance, optimized for on-device machine learning, cryptography, and energy efficiency.</li>
            <li className="mb-2"><strong>Sensor Array:</strong> Multi-modal sensors including GPS, accelerometer, gyroscope, environmental, and biometric sensors for DePIN and AI applications.</li>
            <li className="mb-2"><strong>Security Modules:</strong> Military-grade secure enclave for private key storage, biometric authentication (fingerprint, facial recognition), and hardware-based encryption.</li>
            <li className="mb-2"><strong>Battery & Power Management:</strong> High-capacity battery with advanced power management, supporting 48+ hours of continuous mining and DePIN operations.</li>
          </ul>
          <h3 className="text-2xl font-semibold text-white mb-4">Software Stack</h3>
          <ul className="list-disc pl-8 text-lg text-gray-300 mb-6">
            <li className="mb-2"><strong>Operating System:</strong> Hardened Android-based OS with custom security layers, privacy controls, and native support for Web3 applications.</li>
            <li className="mb-2"><strong>AI Engine:</strong> On-device neural network inference, federated learning, and real-time optimization for mining, resource allocation, and user experience.</li>
            <li className="mb-2"><strong>Blockchain Integration:</strong> Multi-chain wallet, DePIN protocol adapters, and automated mining modules for seamless participation in decentralized networks.</li>
            <li className="mb-2"><strong>Developer SDK:</strong> Open APIs and SDKs for third-party dApp and DePIN service integration.</li>
          </ul>
          <h3 className="text-2xl font-semibold text-white mb-4">System Architecture (Described)</h3>
          <p className="text-lg text-gray-300 mb-6">
            The NexAI Phone system architecture is built around a secure hardware root of trust, with the A1 Bionic chip at its core. The OS enforces strict application sandboxing and encrypted data storage. The AI engine operates in a dedicated NPU, isolated from user data, while the blockchain modules interact with DePIN networks via secure protocol adapters. All sensitive operations, including key management and biometric authentication, are handled within the secure enclave, ensuring end-to-end security and privacy.
          </p>
          <h3 className="text-2xl font-semibold text-white mb-4">Performance Benchmarks</h3>
          <ul className="list-disc pl-8 text-lg text-gray-300 mb-6">
            <li className="mb-2"><strong>AI Inference:</strong> 12.5 TOPS, outperforming leading mobile AI chips by 30% in real-world tasks.</li>
            <li className="mb-2"><strong>Mining Efficiency:</strong> Up to 24.67 USD/day in optimal DePIN and blockchain mining scenarios (varies by network and market conditions).</li>
            <li className="mb-2"><strong>Security:</strong> EAL6+ certified secure enclave, quantum-resistant cryptography, and zero-knowledge proof support.</li>
            <li className="mb-2"><strong>Battery Life:</strong> 48+ hours of continuous DePIN operation, 72+ hours in standard use.</li>
          </ul>
        </div>
      </section>

      {/* DePIN Network Integration */}
      <section className="py-20 px-6 bg-gradient-to-br from-black via-slate-950 to-slate-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-8 text-center">
            DePIN Network Integration
          </h2>
          <h3 className="text-2xl font-semibold text-white mb-4">Supported DePIN Protocols</h3>
          <ul className="list-disc pl-8 text-lg text-gray-300 mb-6">
            <li className="mb-2"><strong>Helium:</strong> Decentralized wireless network for IoT and mobile data offloading.</li>
            <li className="mb-2"><strong>Filecoin:</strong> Decentralized storage network enabling users to rent out device storage.</li>
            <li className="mb-2"><strong>Render Network:</strong> Distributed GPU compute for AI and graphics workloads.</li>
            <li className="mb-2"><strong>Akash Network:</strong> Decentralized cloud compute marketplace.</li>
            <li className="mb-2"><strong>Arweave, Storj:</strong> Additional storage and data permanence protocols.</li>
            <li className="mb-2"><strong>Other DePINs:</strong> Support for sensor, location, and energy networks as the ecosystem expands.</li>
          </ul>
          <h3 className="text-2xl font-semibold text-white mb-4">Resource Contribution</h3>
          <ul className="list-disc pl-8 text-lg text-gray-300 mb-6">
            <li className="mb-2"><strong>Storage:</strong> Share unused device storage for decentralized file hosting and backup.</li>
            <li className="mb-2"><strong>Compute:</strong> Offer idle CPU/GPU cycles for distributed AI, rendering, and blockchain tasks.</li>
            <li className="mb-2"><strong>Bandwidth:</strong> Participate as a wireless node, relaying data and earning network rewards.</li>
            <li className="mb-2"><strong>Sensors:</strong> Contribute environmental, location, and IoT data for DePIN applications.</li>
          </ul>
          <h3 className="text-2xl font-semibold text-white mb-4">Incentive Mechanisms</h3>
          <ul className="list-disc pl-8 text-lg text-gray-300 mb-6">
            <li className="mb-2"><strong>Native Tokens:</strong> Earn HNT, FIL, RNDR, AKT, and other DePIN tokens for resource sharing.</li>
            <li className="mb-2"><strong>NEX Token:</strong> Receive additional rewards in the NexAI ecosystem token for active participation.</li>
            <li className="mb-2"><strong>Stablecoins & NFTs:</strong> Access stablecoin payouts and unique NFT achievements for top contributors.</li>
            <li className="mb-2"><strong>Dynamic Optimization:</strong> AI engine automatically allocates resources to maximize user rewards across networks.</li>
          </ul>
          <h3 className="text-2xl font-semibold text-white mb-4">Technical Implementation</h3>
          <p className="text-lg text-gray-300 mb-6">
            NexAI Phone features a unified DePIN protocol adapter layer, abstracting the complexity of multiple networks. The device auto-discovers available DePIN opportunities, manages resource allocation, and ensures quality of service through real-time monitoring and a reputation system. All DePIN interactions are secured by the hardware enclave, and user privacy is preserved via on-device data processing and zero-knowledge proofs. The open SDK allows developers to build new DePIN integrations and services, expanding the ecosystem.
          </p>
        </div>
      </section>

      {/* AI Mining & Consensus Mechanisms */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-950 via-slate-900 to-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-8 text-center">
            AI Mining & Consensus Mechanisms
          </h2>
          <h3 className="text-2xl font-semibold text-white mb-4">AI Mining Overview</h3>
          <p className="text-lg text-gray-300 mb-6">
            NexAI Phone revolutionizes cryptocurrency mining through intelligent, adaptive algorithms that optimize for multiple objectives simultaneously. The AI engine continuously analyzes network conditions, market dynamics, and device state to maximize mining efficiency while minimizing energy consumption and hardware stress. This approach enables users to earn passive income from their devices without compromising performance or battery life.
          </p>
          <h3 className="text-2xl font-semibold text-white mb-4">Supported Mining Algorithms</h3>
          <ul className="list-disc pl-8 text-lg text-gray-300 mb-6">
            <li className="mb-2"><strong>SHA-256:</strong> Bitcoin and Bitcoin Cash mining with optimized hashrate and power efficiency.</li>
            <li className="mb-2"><strong>Ethash:</strong> Ethereum Classic and other Ethash-based cryptocurrencies.</li>
            <li className="mb-2"><strong>RandomX:</strong> Monero and privacy-focused cryptocurrencies with CPU-optimized mining.</li>
            <li className="mb-2"><strong>Scrypt:</strong> Litecoin and other Scrypt-based altcoins.</li>
            <li className="mb-2"><strong>Blake2b:</strong> Siacoin and other Blake2b-based networks.</li>
            <li className="mb-2"><strong>Custom Algorithms:</strong> Support for emerging consensus mechanisms and experimental protocols.</li>
          </ul>
          <h3 className="text-2xl font-semibold text-white mb-4">Dynamic Optimization</h3>
          <ul className="list-disc pl-8 text-lg text-gray-300 mb-6">
            <li className="mb-2"><strong>Energy Optimization:</strong> AI algorithms predict optimal mining windows based on electricity costs, battery level, and device usage patterns.</li>
            <li className="mb-2"><strong>Risk Management:</strong> Real-time assessment of mining profitability, network difficulty, and market volatility to adjust strategies.</li>
            <li className="mb-2"><strong>Yield Maximization:</strong> Multi-objective optimization balancing immediate rewards with long-term sustainability and growth.</li>
            <li className="mb-2"><strong>Thermal Management:</strong> Predictive temperature control to prevent overheating and maintain optimal performance.</li>
          </ul>
          <h3 className="text-2xl font-semibold text-white mb-4">Security & Privacy in Mining</h3>
          <ul className="list-disc pl-8 text-lg text-gray-300 mb-6">
            <li className="mb-2"><strong>Hardware Security:</strong> Mining operations are isolated within the secure enclave, protecting private keys and mining credentials.</li>
            <li className="mb-2"><strong>Network Privacy:</strong> VPN integration and Tor support ensure anonymous mining pool connections and transaction broadcasting.</li>
            <li className="mb-2"><strong>Zero-Knowledge Mining:</strong> Advanced cryptographic techniques allow mining participation without revealing device identity or location.</li>
            <li className="mb-2"><strong>Anti-Detection:</strong> Intelligent traffic shaping and timing randomization prevent mining activity detection by ISPs or network administrators.</li>
          </ul>
          <h3 className="text-2xl font-semibold text-white mb-4">Expected Performance</h3>
          <p className="text-lg text-gray-300 mb-6">
            Under optimal conditions, NexAI Phone can generate up to $24.67 per day through combined DePIN participation and cryptocurrency mining. Actual earnings vary based on network conditions, market prices, and user participation levels. The AI engine continuously adapts to maximize returns while ensuring device longevity and user experience quality.
          </p>
        </div>
      </section>

      {/* Security Framework */}
      <section className="py-20 px-6 bg-gradient-to-br from-black via-slate-950 to-slate-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-8 text-center">
            Security Framework
          </h2>
          <h3 className="text-2xl font-semibold text-white mb-4">Hardware Security</h3>
          <ul className="list-disc pl-8 text-lg text-gray-300 mb-6">
            <li className="mb-2"><strong>Secure Enclave:</strong> EAL6+ certified hardware security module providing isolated execution environment for sensitive operations.</li>
            <li className="mb-2"><strong>Biometric Authentication:</strong> Multi-modal biometric system (fingerprint, facial recognition, voice) with liveness detection and anti-spoofing measures.</li>
            <li className="mb-2"><strong>Private Key Storage:</strong> Hardware-based key generation and storage, ensuring private keys never leave the secure enclave.</li>
            <li className="mb-2"><strong>Tamper Detection:</strong> Physical tamper sensors and secure boot chain prevent unauthorized hardware modifications.</li>
          </ul>
          <h3 className="text-2xl font-semibold text-white mb-4">Software Security</h3>
          <ul className="list-disc pl-8 text-lg text-gray-300 mb-6">
            <li className="mb-2"><strong>Encryption:</strong> AES-256 encryption for data at rest and in transit, with quantum-resistant algorithms for future-proofing.</li>
            <li className="mb-2"><strong>Zero-Knowledge Proofs:</strong> Advanced ZKP implementation for privacy-preserving authentication and transaction verification.</li>
            <li className="mb-2"><strong>Local Processing:</strong> Sensitive data processing occurs on-device, minimizing exposure to external networks and cloud services.</li>
            <li className="mb-2"><strong>Application Sandboxing:</strong> Strict isolation between applications and system components, preventing privilege escalation attacks.</li>
          </ul>
          <h3 className="text-2xl font-semibold text-white mb-4">Network Security</h3>
          <ul className="list-disc pl-8 text-lg text-gray-300 mb-6">
            <li className="mb-2"><strong>VPN Integration:</strong> Built-in VPN with multiple protocols (WireGuard, OpenVPN) for secure network connections.</li>
            <li className="mb-2"><strong>Tor Support:</strong> Native Tor network integration for anonymous browsing and blockchain interactions.</li>
            <li className="mb-2"><strong>End-to-End Encryption:</strong> All communications are encrypted using state-of-the-art protocols with perfect forward secrecy.</li>
            <li className="mb-2"><strong>Traffic Analysis Resistance:</strong> Advanced traffic obfuscation techniques prevent network analysis and fingerprinting.</li>
          </ul>
          <h3 className="text-2xl font-semibold text-white mb-4">Compliance & Standards</h3>
          <ul className="list-disc pl-8 text-lg text-gray-300 mb-6">
            <li className="mb-2"><strong>GDPR Compliance:</strong> Full compliance with European data protection regulations, including right to be forgotten.</li>
            <li className="mb-2"><strong>CCPA Compliance:</strong> Adherence to California Consumer Privacy Act requirements.</li>
            <li className="mb-2"><strong>ISO 27001:</strong> Information security management system certification for enterprise deployments.</li>
            <li className="mb-2"><strong>FIPS 140-2:</strong> Federal Information Processing Standards certification for cryptographic modules.</li>
          </ul>
          <h3 className="text-2xl font-semibold text-white mb-4">Security Audits & Testing</h3>
          <p className="text-lg text-gray-300 mb-6">
            NexAI Phone undergoes regular security audits by independent third-party firms, including penetration testing, vulnerability assessments, and code reviews. The device also participates in bug bounty programs, encouraging security researchers to identify and report potential vulnerabilities. All security findings are promptly addressed and disclosed to the community.
          </p>
        </div>
      </section>

      {/* Tokenomics & Economic Model */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-950 via-slate-900 to-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-8 text-center">
            Tokenomics & Economic Model
          </h2>
          <h3 className="text-2xl font-semibold text-white mb-4">Token Distribution & Allocation</h3>
          <ul className="list-disc pl-8 text-lg text-gray-300 mb-6">
            <li className="mb-2"><strong>Total Supply:</strong> 1,000,000,000 NEX tokens (1 billion)</li>
            <li className="mb-2"><strong>Public Sale (30%):</strong> 300,000,000 NEX for community participation and fair distribution</li>
            <li className="mb-2"><strong>Team & Advisors (15%):</strong> 150,000,000 NEX with 4-year vesting schedule and 1-year cliff</li>
            <li className="mb-2"><strong>Ecosystem Development (25%):</strong> 250,000,000 NEX for DePIN rewards, developer grants, and community incentives</li>
            <li className="mb-2"><strong>Foundation Reserve (20%):</strong> 200,000,000 NEX for long-term development and strategic initiatives</li>
            <li className="mb-2"><strong>Early Investors (10%):</strong> 100,000,000 NEX with 2-year vesting schedule</li>
          </ul>
          <h3 className="text-2xl font-semibold text-white mb-4">Staking, Rewards & Governance</h3>
          <ul className="list-disc pl-8 text-lg text-gray-300 mb-6">
            <li className="mb-2"><strong>Staking Rewards:</strong> Up to 12% APY for staking NEX tokens, with additional bonuses for long-term holders</li>
            <li className="mb-2"><strong>DePIN Participation:</strong> Earn NEX tokens for contributing storage, compute, bandwidth, and sensor data to DePIN networks</li>
            <li className="mb-2"><strong>Mining Rewards:</strong> Receive NEX tokens as additional rewards for successful mining operations</li>
            <li className="mb-2"><strong>Governance Rights:</strong> NEX holders can participate in protocol upgrades, feature proposals, and ecosystem decisions</li>
            <li className="mb-2"><strong>NFT Rewards:</strong> Exclusive NFTs for top contributors and milestone achievements</li>
          </ul>
          <h3 className="text-2xl font-semibold text-white mb-4">Revenue Model & Projections</h3>
          <ul className="list-disc pl-8 text-lg text-gray-300 mb-6">
            <li className="mb-2"><strong>Hardware Sales:</strong> Premium pricing for NexAI Phone devices with built-in mining and DePIN capabilities</li>
            <li className="mb-2"><strong>Transaction Fees:</strong> Small percentage of DePIN and mining rewards collected as platform fees</li>
            <li className="mb-2"><strong>Enterprise Solutions:</strong> B2B offerings for companies seeking secure, AI-powered mobile infrastructure</li>
            <li className="mb-2"><strong>Developer Tools:</strong> SDK licensing and premium API access for third-party developers</li>
            <li className="mb-2"><strong>Data Services:</strong> Anonymized, aggregated data insights for research and market analysis</li>
          </ul>
          <h3 className="text-2xl font-semibold text-white mb-4">Financial Forecasts</h3>
          <p className="text-lg text-gray-300 mb-6">
            Projected revenue growth from $50M in Year 1 to $500M+ by Year 5, driven by device sales, DePIN participation, and ecosystem expansion. User base expected to reach 1M+ active devices within 3 years, generating significant network effects and value appreciation for NEX token holders. Conservative estimates suggest 10-50x token value growth over 5 years based on market adoption and ecosystem development.
          </p>
        </div>
      </section>

      {/* Roadmap & Future Development */}
      <section className="py-20 px-6 bg-gradient-to-br from-black via-slate-950 to-slate-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-8 text-center">
            Roadmap & Future Development
          </h2>
          <h3 className="text-2xl font-semibold text-white mb-4">Milestones & Timeline</h3>
          <ul className="list-disc pl-8 text-lg text-gray-300 mb-6">
            <li className="mb-2"><strong>Q1 2025:</strong> NexAI A1 Bionic chip finalization and manufacturing setup</li>
            <li className="mb-2"><strong>Q2 2025:</strong> Beta device production and developer SDK release</li>
            <li className="mb-2"><strong>Q3 2025:</strong> Public token sale and community building initiatives</li>
            <li className="mb-2"><strong>Q4 2025:</strong> Commercial device launch and DePIN network integration</li>
            <li className="mb-2"><strong>Q1 2026:</strong> Enterprise partnerships and international market expansion</li>
            <li className="mb-2"><strong>Q2-Q4 2026:</strong> Ecosystem growth, additional DePIN integrations, and AI model improvements</li>
          </ul>
          <h3 className="text-2xl font-semibold text-white mb-4">Ecosystem Expansion</h3>
          <ul className="list-disc pl-8 text-lg text-gray-300 mb-6">
            <li className="mb-2"><strong>Developer Platform:</strong> Comprehensive SDK, documentation, and developer tools for third-party applications</li>
            <li className="mb-2"><strong>DePIN Marketplace:</strong> Centralized platform for discovering and participating in new DePIN networks</li>
            <li className="mb-2"><strong>AI Model Marketplace:</strong> Community-driven marketplace for AI models optimized for NexAI devices</li>
            <li className="mb-2"><strong>Enterprise Solutions:</strong> B2B offerings for companies seeking secure, AI-powered mobile infrastructure</li>
            <li className="mb-2"><strong>Research Partnerships:</strong> Collaborations with universities and research institutions for AI and blockchain innovation</li>
          </ul>
          <h3 className="text-2xl font-semibold text-white mb-4">Community & Developer Engagement</h3>
          <ul className="list-disc pl-8 text-lg text-gray-300 mb-6">
            <li className="mb-2"><strong>Developer Grants:</strong> $10M+ in funding for developers building on the NexAI platform</li>
            <li className="mb-2"><strong>Hackathons:</strong> Regular global hackathons with prizes and mentorship opportunities</li>
            <li className="mb-2"><strong>Community Governance:</strong> DAO structure for community-driven decision making and protocol upgrades</li>
            <li className="mb-2"><strong>Educational Programs:</strong> Comprehensive tutorials, workshops, and certification programs</li>
            <li className="mb-2"><strong>Ambassador Program:</strong> Global network of community ambassadors promoting NexAI adoption</li>
          </ul>
          <h3 className="text-2xl font-semibold text-white mb-4">Long-Term Vision</h3>
          <p className="text-lg text-gray-300 mb-6">
            NexAI Phone aims to become the foundational platform for the decentralized mobile economy, connecting billions of users to Web3 infrastructure and AI-powered services. Our vision extends beyond individual devices to a comprehensive ecosystem that democratizes access to AI, blockchain, and DePIN technologies. We envision a future where every mobile device contributes to and benefits from decentralized networks, creating a more equitable and efficient digital economy.
          </p>
          <h3 className="text-2xl font-semibold text-white mb-4">Technology Evolution</h3>
          <ul className="list-disc pl-8 text-lg text-gray-300 mb-6">
            <li className="mb-2"><strong>AI Advancements:</strong> Continuous improvement of on-device AI capabilities and model efficiency</li>
            <li className="mb-2"><strong>Blockchain Integration:</strong> Support for emerging consensus mechanisms and Layer 2 solutions</li>
            <li className="mb-2"><strong>DePIN Expansion:</strong> Integration with new DePIN protocols and emerging use cases</li>
            <li className="mb-2"><strong>Hardware Innovation:</strong> Next-generation chips and sensors for enhanced performance and capabilities</li>
            <li className="mb-2"><strong>Sustainability:</strong> Green mining initiatives and energy-efficient computing solutions</li>
          </ul>
        </div>
      </section>

      {/* Team & Advisors */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-950 via-slate-900 to-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-8 text-center">
            Team & Advisors
          </h2>
          <h3 className="text-2xl font-semibold text-white mb-4">Core Team</h3>
          <ul className="list-disc pl-8 text-lg text-gray-300 mb-6">
            <li className="mb-2"><strong>Dr. Sarah Chen - CEO & Co-Founder:</strong> Former AI Research Lead at Google, PhD in Computer Science from Stanford, 15+ years in AI and mobile technology</li>
            <li className="mb-2"><strong>Michael Rodriguez - CTO & Co-Founder:</strong> Ex-Senior Engineer at Apple, specialized in chip design and mobile architecture, 12+ years in hardware development</li>
            <li className="mb-2"><strong>James Wilson - CPO & Co-Founder:</strong> Former Product Director at Samsung, expert in user experience and blockchain integration</li>
            <li className="mb-2"><strong>Dr. Emily Zhang - Chief AI Officer:</strong> Leading AI researcher with 50+ published papers, former professor at MIT</li>
            <li className="mb-2"><strong>David Kim - Chief Security Officer:</strong> Cybersecurity expert with background in military and financial services</li>
          </ul>
          <h3 className="text-2xl font-semibold text-white mb-4">Advisors</h3>
          <ul className="list-disc pl-8 text-lg text-gray-300 mb-6">
            <li className="mb-2"><strong>Dr. Robert Taylor:</strong> Former IBM Global VP, enterprise technology solutions expert</li>
            <li className="mb-2"><strong>Lisa Thompson:</strong> Partner at leading crypto investment firm, DePIN ecosystem specialist</li>
            <li className="mb-2"><strong>Prof. Mark Johnson:</strong> Stanford University professor, blockchain and distributed systems researcher</li>
            <li className="mb-2"><strong>Alex Chen:</strong> Legal expert specializing in crypto regulations and compliance</li>
          </ul>
          <h3 className="text-2xl font-semibold text-white mb-4">Investment Institutions</h3>
          <ul className="list-disc pl-8 text-lg text-gray-300 mb-6">
            <li className="mb-2"><strong>Sequoia Capital:</strong> Series A lead investor, providing strategic guidance and resources</li>
            <li className="mb-2"><strong>Andreessen Horowitz (a16z):</strong> Web3-focused investment firm, ecosystem development support</li>
            <li className="mb-2"><strong>Coinbase Ventures:</strong> Strategic investor with deep crypto industry connections</li>
            <li className="mb-2"><strong>Binance Labs:</strong> Global exchange investment arm, market access and liquidity support</li>
          </ul>
        </div>
      </section>

      {/* Risk Analysis */}
      <section className="py-20 px-6 bg-gradient-to-br from-black via-slate-950 to-slate-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-8 text-center">
            Risk Analysis
          </h2>
          <h3 className="text-2xl font-semibold text-white mb-4">Technical Risks</h3>
          <ul className="list-disc pl-8 text-lg text-gray-300 mb-6">
            <li className="mb-2"><strong>Technology Maturity:</strong> AI mining and DePIN technologies are still evolving, with potential for technical failures or inefficiencies</li>
            <li className="mb-2"><strong>Hardware Challenges:</strong> Custom chip development involves significant technical and manufacturing risks</li>
            <li className="mb-2"><strong>Security Vulnerabilities:</strong> New attack vectors may emerge as technology evolves</li>
            <li className="mb-2"><strong>Performance Issues:</strong> Real-world performance may not meet theoretical benchmarks</li>
          </ul>
          <h3 className="text-2xl font-semibold text-white mb-4">Market Risks</h3>
          <ul className="list-disc pl-8 text-lg text-gray-300 mb-6">
            <li className="mb-2"><strong>Cryptocurrency Volatility:</strong> Mining rewards depend on crypto prices, which are highly volatile</li>
            <li className="mb-2"><strong>Competition:</strong> Established players may enter the market with superior resources</li>
            <li className="mb-2"><strong>Regulatory Changes:</strong> Evolving crypto and AI regulations may impact business model</li>
            <li className="mb-2"><strong>Market Adoption:</strong> Consumer adoption may be slower than projected</li>
          </ul>
          <h3 className="text-2xl font-semibold text-white mb-4">Operational Risks</h3>
          <ul className="list-disc pl-8 text-lg text-gray-300 mb-6">
            <li className="mb-2"><strong>Supply Chain:</strong> Global supply chain disruptions may affect manufacturing</li>
            <li className="mb-2"><strong>Team Retention:</strong> Loss of key personnel could impact development timeline</li>
            <li className="mb-2"><strong>Funding:</strong> Insufficient funding may limit growth and development</li>
            <li className="mb-2"><strong>Partnership Risks:</strong> Dependence on third-party partners and DePIN networks</li>
          </ul>
          <h3 className="text-2xl font-semibold text-white mb-4">Risk Mitigation Strategies</h3>
          <ul className="list-disc pl-8 text-lg text-gray-300 mb-6">
            <li className="mb-2"><strong>Technical Safeguards:</strong> Multiple security audits, redundancy systems, and continuous monitoring</li>
            <li className="mb-2"><strong>Market Diversification:</strong> Multiple revenue streams and geographic expansion</li>
            <li className="mb-2"><strong>Regulatory Compliance:</strong> Proactive engagement with regulators and legal experts</li>
            <li className="mb-2"><strong>Insurance Coverage:</strong> Comprehensive insurance for hardware, cybersecurity, and business interruption</li>
            <li className="mb-2"><strong>Community Building:</strong> Strong community support and decentralized governance</li>
          </ul>
          <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6 mt-8">
            <h4 className="text-xl font-semibold text-red-400 mb-4">⚠️ Important Risk Disclosure</h4>
            <p className="text-gray-300">
              Investing in and using NexAI Phone involves significant risks, including the potential loss of capital. Cryptocurrency markets are highly volatile, and DePIN technologies are experimental. Past performance does not guarantee future results. Users should only invest what they can afford to lose and should conduct their own research before making any investment decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-12 text-center">
            Table of Contents
          </h2>
          
          <div className="grid gap-6">
            {[
              {
                section: "1",
                title: "Executive Summary",
                description: "High-level overview of NexAI Phone's revolutionary approach to mobile AI and DePIN integration",
                pages: "3-5",
                icon: FileText
              },
              {
                section: "2",
                title: "Market Analysis & Opportunity",
                description: "Comprehensive analysis of the mobile AI market and DePIN ecosystem growth potential",
                pages: "6-12",
                icon: TrendingUp
              },
              {
                section: "3",
                title: "Technical Architecture",
                description: "Detailed breakdown of hardware specifications, AI processing capabilities, and system design",
                pages: "13-24",
                icon: Cpu
              },
              {
                section: "4",
                title: "DePIN Network Integration",
                description: "Integration protocols for Helium, Filecoin, Render Network, and other DePIN ecosystems",
                pages: "25-35",
                icon: Network
              },
              {
                section: "5",
                title: "AI Mining & Consensus Mechanisms",
                description: "Advanced AI algorithms for autonomous mining optimization and network participation",
                pages: "36-45",
                icon: Brain
              },
              {
                section: "6",
                title: "Security Framework",
                description: "Multi-layered security architecture including hardware enclaves and cryptographic protocols",
                pages: "46-52",
                icon: Shield
              },
              {
                section: "7",
                title: "Tokenomics & Economic Model",
                description: "Token distribution, staking mechanisms, and economic incentive structures",
                pages: "53-60",
                icon: Coins
              },
              {
                section: "8",
                title: "Roadmap & Future Development",
                description: "Development milestones, upgrade paths, and long-term ecosystem expansion plans",
                pages: "61-68",
                icon: CheckCircle
              }
            ].map((item, index) => (
              <Card key={index} className="bg-gradient-to-br from-slate-900/50 via-slate-800/30 to-slate-900/50 border border-blue-500/20 hover:border-purple-500/40 transition-all duration-500 backdrop-blur-2xl group">
                <CardHeader className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-3">
                        <CardTitle className="text-white text-xl group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                          Section {item.section}: {item.title}
                        </CardTitle>
                        <Badge className="bg-slate-700/50 text-gray-300 border-slate-600/30">
                          Pages {item.pages}
                        </Badge>
                      </div>
                      <CardDescription className="text-gray-400 leading-relaxed">
                        {item.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-20 px-6 bg-gradient-to-br from-black via-slate-950 to-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-12 text-center">
            Key Technical Highlights
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "12.5 TOPS AI Processor",
                description: "Custom NexAI A1 Bionic chip with dedicated neural processing unit for real-time AI computations",
                metric: "12.5 TOPS",
                color: "from-blue-400 to-cyan-400"
              },
              {
                title: "Multi-Chain Mining",
                description: "Simultaneous participation in 15+ blockchain networks with intelligent workload distribution",
                metric: "15+ Chains",
                color: "from-purple-400 to-pink-400"
              },
              {
                title: "Secure Enclave",
                description: "Hardware-level security with isolated private key storage and biometric authentication",
                metric: "Bank-Grade",
                color: "from-green-400 to-emerald-400"
              },
              {
                title: "Energy Efficiency",
                description: "Advanced power management enabling 48+ hours of continuous mining operations",
                metric: "48+ Hours",
                color: "from-yellow-400 to-orange-400"
              },
              {
                title: "DePIN Integration",
                description: "Native support for 8 major DePIN networks with automated reward optimization",
                metric: "8 Networks",
                color: "from-red-400 to-pink-400"
              },
              {
                title: "ROI Optimization",
                description: "AI-driven earnings optimization with potential returns of $20-50 daily passive income",
                metric: "$20-50/day",
                color: "from-indigo-400 to-purple-400"
              }
            ].map((highlight, index) => (
              <Card key={index} className="bg-gradient-to-br from-slate-900/50 via-slate-800/30 to-slate-900/50 border border-blue-500/20 hover:border-purple-500/40 transition-all duration-500 backdrop-blur-2xl text-center group">
                <CardHeader className="p-6">
                  <div className={`text-3xl font-bold bg-gradient-to-r ${highlight.color} bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    {highlight.metric}
                  </div>
                  <CardTitle className="text-white text-lg mb-3 group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {highlight.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400 text-sm leading-relaxed">
                    {highlight.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Dive Deeper?
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Download the complete technical whitepaper to explore the full scope of NexAI Phone's 
            revolutionary technology and market potential.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white font-medium px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-purple-500/25 text-lg">
              <Download className="w-5 h-5 mr-3" />
              Download Full Whitepaper (PDF)
            </Button>
            
            <Button
              variant="outline"
              className="border-blue-500/30 text-white hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 rounded-full backdrop-blur-xl px-8 py-4 text-lg"
            >
              <ExternalLink className="w-5 h-5 mr-3" />
              View Technical Specs
            </Button>
          </div>
          
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400 mb-2">68 Pages</div>
              <div className="text-gray-400">In-depth Analysis</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400 mb-2">Updated</div>
              <div className="text-gray-400">January 2025</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-pink-400 mb-2">Free</div>
              <div className="text-gray-400">Open Access</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 