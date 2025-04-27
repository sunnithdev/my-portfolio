"use client"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { Twitter, Linkedin, Github } from "lucide-react"
import { useRef } from "react"

const Hero = () => {

  const aboutRef = useRef<HTMLElement>(null)
  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" })
  }
  return (
    <section className="h-screen flex flex-col items-center justify-center relative z-10">
      <div className="text-center">
        <motion.h1 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Sunnith
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="text-xl md:text-2xl text-gray-300 mb-8"
        >
          Software Developer
        </motion.p>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="text-lg md:text-xl text-gray-300 mb-8"
        >
          I create things on web.
        </motion.p>
        <motion.a
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          href="#projects"
          className="bg-white text-black px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition-colors"
        >
          View My Work
        </motion.a>
      </div>

      {/* Scroll Indicator */}
      <motion.div
          className="absolute bottom-24 left-0 right-0 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
            className="cursor-pointer"
            onClick={scrollToAbout}
          >
            <ChevronDown className="mx-auto text-white-500 size-8" />
          </motion.div>
        </motion.div>
      
      {/* Fixed social icons at bottom */}
      <div className="fixed bottom-8 left-0 right-0 flex justify-center space-x-8 z-50">
        {["twitter", "linkedin", "github"].map((platform, i) => (
          <motion.a
            key={platform}
            href={`https://${platform}.com/${platform === "twitter" ? "sunnithdev" : platform === "linkedin" ? "in/sunnith-ch" : "sunnithdev"}`}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
            className="text-white/70 hover:text-white transition-colors duration-300"
            whileHover={{ y: -3 }}
          >
            {platform === "twitter" ? (
              <Twitter size={40} />
            ) : platform === "linkedin" ? (
              <Linkedin size={40} />
            ) : (
              <Github size={40} />
            )}
          </motion.a>
        ))}
      </div>

      {/* <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown size={32} className="text-white" />
      </motion.div> */}
    </section>
  )
}

export default Hero
