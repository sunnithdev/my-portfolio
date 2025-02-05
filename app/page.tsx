"use client"

import AnimatedBackground from "@/components/AnimatedBackground"
import Hero from "@/components/Hero"
import Projects from "@/components/Projects"
import About from "@/components/About"
import Contact from "@/components/Contact"

export default function Home() {
  return (
    <>
      {/* <AnimatedBackground /> */}
      <main className="relative z-10">
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
    </>
  )
}

