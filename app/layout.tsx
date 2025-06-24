import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NexAI Phone - The Future of Blockchain Smartphones',
  description: 'Revolutionary blockchain smartphone with DePIN mining, AI-powered features, and Web3 integration. Earn crypto while using your phone.',
  keywords: 'blockchain smartphone, DePIN mining, crypto phone, Web3 mobile, NEX token, NFT phone',
  authors: [{ name: 'NexAI Team' }],
  openGraph: {
    title: 'NexAI Phone - The Future of Blockchain Smartphones',
    description: 'Revolutionary blockchain smartphone with DePIN mining capabilities',
    images: ['/images/nexai-phones.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
