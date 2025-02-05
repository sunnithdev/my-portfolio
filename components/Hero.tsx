"use client"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

const Hero = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center relative z-10">
      <div className="text-center">
        <motion.h1 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Your Name
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="text-xl md:text-2xl text-gray-300 mb-8"
        >
          Software Developer & Web Creator
        </motion.p>
        <motion.a
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          href="#projects"
          className="bg-white text-black px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition-colors"
        >
          View My Work
        </motion.a>
      </div>
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown size={32} className="text-white" />
      </motion.div>
    </section>
  )
}

export default Hero