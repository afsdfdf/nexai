"use client"

import { useEffect, useState } from "react"

export function ParticleField() {
  const [particles, setParticles] = useState<Array<{
    id: number
    x: number
    y: number
    size: number
    opacity: number
    animationDelay: number
  }>>([])

  useEffect(() => {
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      opacity: Math.random() * 0.6 + 0.2,
      animationDelay: Math.random() * 5
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute bg-blue-400/20 rounded-full animate-float"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            opacity: particle.opacity,
            animationDelay: `${particle.animationDelay}s`,
            animationDuration: `${6 + Math.random() * 4}s`,
          }}
        />
      ))}
    </div>
  )
}

export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(Math.min(progress, 100))
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-50 transition-all duration-150 ease-out"
      style={{ width: `${scrollProgress}%` }}
    />
  )
}

export function FloatingOrbs() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Large floating orbs */}
      <div
        className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/8 to-purple-500/8 rounded-full blur-3xl animate-float"
        style={{
          top: "10%",
          left: "10%",
          animationDuration: "20s",
          animationDelay: "0s",
        }}
      />
      
      <div
        className="absolute w-64 h-64 bg-gradient-to-r from-purple-500/8 to-pink-500/8 rounded-full blur-3xl animate-float"
        style={{
          top: "60%",
          right: "10%",
          animationDuration: "15s",
          animationDelay: "2s",
        }}
      />
      
      <div
        className="absolute w-48 h-48 bg-gradient-to-r from-pink-500/8 to-blue-500/8 rounded-full blur-3xl animate-float"
        style={{
          bottom: "20%",
          left: "20%",
          animationDuration: "25s",
          animationDelay: "5s",
        }}
      />
    </div>
  )
}

interface AnimatedCounterProps {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
  className?: string
}

export function AnimatedCounter({ 
  end, 
  duration = 2, 
  suffix = "", 
  prefix = "", 
  className = "" 
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const startTime = Date.now()
    
    const updateCount = () => {
      const now = Date.now()
      const elapsed = (now - startTime) / 1000
      const progress = Math.min(elapsed / duration, 1)
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = Math.floor(end * easeOutQuart)
      
      setCount(currentCount)
      
      if (progress < 1) {
        requestAnimationFrame(updateCount)
      }
    }
    
    updateCount()
  }, [end, duration])

  return (
    <span className={className}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  )
}

export function TypewriterEffect({ 
  text, 
  speed = 100, 
  className = "",
  onComplete = () => {}
}: {
  text: string
  speed?: number
  className?: string
  onComplete?: () => void
}) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    // Blinking cursor effect
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [])

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(currentIndex + 1)
      }, speed)

      return () => clearTimeout(timeout)
    } else {
      onComplete()
    }
  }, [currentIndex, text, speed, onComplete])

  return (
    <span className={className}>
      {displayText}
      <span className={showCursor ? "opacity-100" : "opacity-0"}>|</span>
    </span>
  )
}

export function InteractiveCard({ 
  children, 
  className = "",
  glowColor = "blue"
}: {
  children: React.ReactNode
  className?: string
  glowColor?: "blue" | "purple" | "pink" | "green"
}) {
  const [isHovered, setIsHovered] = useState(false)

  const glowClasses = {
    blue: "hover:shadow-2xl hover:shadow-blue-500/20 hover:border-blue-500/30",
    purple: "hover:shadow-2xl hover:shadow-purple-500/20 hover:border-purple-500/30",
    pink: "hover:shadow-2xl hover:shadow-pink-500/20 hover:border-pink-500/30",
    green: "hover:shadow-2xl hover:shadow-green-500/20 hover:border-green-500/30",
  }

  return (
    <div
      className={`relative transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${glowClasses[glowColor]} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-lg animate-pulse pointer-events-none" />
      )}
      {children}
    </div>
  )
}

export function GlitchText({ 
  text, 
  className = "" 
}: { 
  text: string
  className?: string 
}) {
  const [isGlitching, setIsGlitching] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true)
      setTimeout(() => setIsGlitching(false), 200)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <span 
      className={`relative inline-block ${className}`}
      style={{
        animation: isGlitching ? 'glitch 0.2s ease-in-out' : 'none'
      }}
    >
      {text}
      {isGlitching && (
        <>
          <span 
            className="absolute top-0 left-0 text-red-500/70"
            style={{ transform: 'translate(-1px, 0)' }}
          >
            {text}
          </span>
          <span 
            className="absolute top-0 left-0 text-blue-500/70"
            style={{ transform: 'translate(1px, 0)' }}
          >
            {text}
          </span>
        </>
      )}
      <style jsx>{`
        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
          100% { transform: translate(0); }
        }
      `}</style>
    </span>
  )
}

export function PulsingDot({ 
  size = "small",
  color = "blue" 
}: { 
  size?: "small" | "medium" | "large"
  color?: "blue" | "green" | "red" | "purple"
}) {
  const sizeClasses = {
    small: "w-2 h-2",
    medium: "w-3 h-3", 
    large: "w-4 h-4"
  }

  const colorClasses = {
    blue: "bg-blue-400",
    green: "bg-green-400",
    red: "bg-red-400",
    purple: "bg-purple-400"
  }

  return (
    <div className="relative inline-flex">
      <div className={`${sizeClasses[size]} ${colorClasses[color]} rounded-full animate-pulse`} />
      <div className={`absolute inset-0 ${sizeClasses[size]} ${colorClasses[color]} rounded-full animate-ping opacity-20`} />
    </div>
  )
}

// Dynamic Pie Chart Component
export const DynamicPieChart = ({ data, size = 400, onSliceHover }: {
  data: Array<{
    label: string
    percentage: number
    color: string
    gradient: string
    icon: any
    description: string
  }>
  size?: number
  onSliceHover?: (index: number | null) => void
}) => {
  const [activeSlice, setActiveSlice] = useState<number | null>(null)
  const [isAnimating, setIsAnimating] = useState(false)

  // Calculate pie chart angles
  const calculateAngles = () => {
    let currentAngle = 0
    return data.map(item => {
      const startAngle = currentAngle
      const endAngle = currentAngle + (item.percentage / 100) * 360
      currentAngle = endAngle
      return { ...item, startAngle, endAngle }
    })
  }

  const pieData = calculateAngles()

  useEffect(() => {
    setIsAnimating(true)
    const timer = setTimeout(() => setIsAnimating(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  const handleSliceHover = (index: number | null) => {
    setActiveSlice(index)
    onSliceHover?.(index)
  }

  return (
    <div className="relative" style={{ width: size, height: size }}>
      {/* Outer glow rings */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-blue-500/30 animate-pulse"></div>
      <div className="absolute inset-2 rounded-full bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-blue-500/10 backdrop-blur-lg border border-purple-500/20 animate-pulse delay-500"></div>
      
      {/* SVG Pie Chart */}
      <svg 
        className="absolute inset-8 w-full h-full transform -rotate-90" 
        viewBox="0 0 100 100"
        style={{ width: size - 64, height: size - 64 }}
      >
        {pieData.map((slice, index) => {
          const radius = 45
          const centerX = 50
          const centerY = 50
          const startAngleRad = (slice.startAngle * Math.PI) / 180
          const endAngleRad = (slice.endAngle * Math.PI) / 180
          
          const x1 = centerX + radius * Math.cos(startAngleRad)
          const y1 = centerY + radius * Math.sin(startAngleRad)
          const x2 = centerX + radius * Math.cos(endAngleRad)
          const y2 = centerY + radius * Math.sin(endAngleRad)
          
          const largeArcFlag = slice.percentage > 50 ? 1 : 0
          
          const pathData = [
            `M ${centerX} ${centerY}`,
            `L ${x1} ${y1}`,
            `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`,
            'Z'
          ].join(' ')
          
          return (
            <g key={index}>
              <path
                d={pathData}
                fill={slice.color}
                className={`transition-all duration-500 cursor-pointer hover:opacity-80 ${
                  activeSlice === index ? 'opacity-100' : 'opacity-70'
                } ${isAnimating ? 'animate-pulse' : ''}`}
                onMouseEnter={() => handleSliceHover(index)}
                onMouseLeave={() => handleSliceHover(null)}
                style={{
                  transformOrigin: '50% 50%',
                  animationDelay: `${index * 200}ms`
                }}
              />
              {/* Hover effect glow */}
              {activeSlice === index && (
                <path
                  d={pathData}
                  fill={slice.color}
                  className="opacity-30 blur-sm animate-pulse"
                />
              )}
            </g>
          )
        })}
        
        {/* Center circle */}
        <circle cx="50" cy="50" r="15" fill="url(#centerGradient)" className="animate-pulse" />
        <defs>
          <radialGradient id="centerGradient">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </radialGradient>
        </defs>
      </svg>

      {/* Center content */}
      <div className="absolute inset-8 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
            <AnimatedCounter end={1} suffix="B" duration={2} />
          </div>
          <div className="text-xl text-gray-300 font-medium">NEX Tokens</div>
          <div className="text-sm text-gray-500 mt-2">Total Supply</div>
        </div>
      </div>

      {/* Floating elements around the circle */}
      {data.slice(0, 3).map((item, index) => (
        <div 
          key={index}
          className={`absolute w-16 h-16 rounded-full bg-gradient-to-br ${item.gradient} bg-opacity-20 backdrop-blur-xl border border-white/10 flex items-center justify-center animate-float`}
          style={{
            top: `${20 + index * 30}%`,
            right: index % 2 === 0 ? '-8%' : 'auto',
            left: index % 2 === 1 ? '-8%' : 'auto',
            animationDelay: `${index * 0.5}s`
          }}
        >
          <item.icon className="w-6 h-6 text-white" />
        </div>
      ))}
    </div>
  )
} 