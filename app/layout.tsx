import "./globals.css"
import { Inter } from "next/font/google"
import Header from "@/components/Header"
import AnimatedBackground from "@/components/AnimatedBackground"
import type React from "react"
import Head from 'next/head'

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Sunnith Dev - Software Developer",
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
      <script src="https://cdn.peasy.so/peasy.js" data-website-id="01jrc53y3rn23cssfdqdjckzhr" async></script>
      <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "ee3895ba868645c7a8cfa0334162f2a5"}'></script>
      <script defer src="https://cloud.umami.is/script.js" data-website-id="c7ab68da-18ee-4080-aefa-a222ee4836a4"></script>
      </body>
    </html>
  )
}