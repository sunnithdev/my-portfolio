import "./globals.css"
import { Inter } from "next/font/google"
import Header from "@/components/Header"
import AnimatedBackground from "@/components/AnimatedBackground"
import type React from "react"
import Head from 'next/head'

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Your Name - Software Developer",
  description: "Portfolio website showcasing my software development projects and skills",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <Head>
      <link rel="icon" href="/sunnithwebicon.png" />
      </Head>
      <body className={`${inter.className} relative min-h-screen bg-black text-white`}>
        <AnimatedBackground />
        <div className="relative z-10">
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}