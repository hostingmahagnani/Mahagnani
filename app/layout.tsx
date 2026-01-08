import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "sonner"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: 'Mahagnani - Professional Online Education Platform',
  description: 'Master Python, AI, Cybersecurity, and Web Development with comprehensive online courses. Learn with industry experts and advance your tech career.',
  keywords: ['online courses', 'python', 'data science', 'AI', 'cybersecurity', 'web development', 'programming'],
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`font-sans antialiased min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
        <Toaster 
          position="top-right"
          richColors
          expand={false}
          duration={4000}
        />
      </body>
    </html>
  )
}
