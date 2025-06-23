import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#000000",
        foreground: "#ffffff",
        primary: {
          DEFAULT: "#3b82f6",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#1f2937",
          foreground: "#ffffff",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "#374151",
          foreground: "#9ca3af",
        },
        accent: {
          DEFAULT: "#1f2937",
          foreground: "#ffffff",
        },
        popover: {
          DEFAULT: "#111827",
          foreground: "#ffffff",
        },
        card: {
          DEFAULT: "#1f2937",
          foreground: "#ffffff",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(59, 130, 246, 0.6)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "3d-rotate": {
          "0%": { transform: "rotateX(0deg) rotateY(0deg)" },
          "25%": { transform: "rotateX(5deg) rotateY(5deg)" },
          "50%": { transform: "rotateX(0deg) rotateY(10deg)" },
          "75%": { transform: "rotateX(-5deg) rotateY(5deg)" },
          "100%": { transform: "rotateX(0deg) rotateY(0deg)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "slide-up": "slide-up 0.6s ease-out",
        "scale-in": "scale-in 0.5s ease-out",
        float: "float 3s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite",
        "pulse-slow": "pulse-slow 3s ease-in-out infinite",
        "gradient-shift": "gradient-shift 3s ease-in-out infinite",
        "3d-rotate": "3d-rotate 10s ease-in-out infinite",
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Display",
          "SF Pro Text",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      fontSize: {
        "display-large": ["4.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-medium": ["3.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-small": ["2.5rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
      },
      boxShadow: {
        apple: "0 4px 20px rgba(0, 0, 0, 0.1)",
        "apple-lg": "0 10px 40px rgba(0, 0, 0, 0.15)",
        "apple-xl": "0 20px 60px rgba(0, 0, 0, 0.2)",
        "glow-blue": "0 0 20px rgba(59, 130, 246, 0.3)",
        "glow-purple": "0 0 20px rgba(147, 51, 234, 0.3)",
        "glow-pink": "0 0 20px rgba(236, 72, 153, 0.3)",
        "glow-multi":
          "0 0 30px rgba(59, 130, 246, 0.4), 0 0 60px rgba(147, 51, 234, 0.3), 0 0 90px rgba(236, 72, 153, 0.2)",
        "3d-light": "0 8px 32px rgba(59, 130, 246, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
        "3d-medium": "0 12px 40px rgba(147, 51, 234, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
        "3d-heavy": "0 16px 48px rgba(236, 72, 153, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
      },
      backdropBlur: {
        apple: "20px",
        "apple-heavy": "30px",
      },
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
        "128": "32rem",
      },
      perspective: {
        "1000": "1000px",
        "1500": "1500px",
        "2000": "2000px",
      },
      transformStyle: {
        "preserve-3d": "preserve-3d",
      },
      backfaceVisibility: {
        hidden: "hidden",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
    ({ addUtilities }) => {
      const newUtilities = {
        ".perspective-1000": {
          perspective: "1000px",
        },
        ".perspective-1500": {
          perspective: "1500px",
        },
        ".preserve-3d": {
          transformStyle: "preserve-3d",
        },
        ".backface-hidden": {
          backfaceVisibility: "hidden",
        },
        ".transform-gpu": {
          transform: "translateZ(0)",
        },
      }
      addUtilities(newUtilities)
    },
  ],
} satisfies Config

export default config
