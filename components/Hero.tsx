"use client"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { Twitter, Linkedin, Github } from "lucide-react" // Import social icons

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
          Sunnith Dev
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
      
      <div className="absolute bottom-16 flex space-x-6">
        <motion.a
          href="https://twitter.com/yourusername" // Replace with your Twitter URL
          target="_blank"
          rel="noopener noreferrer"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
          className="text-white hover:text-gray-300"
        >
          <Twitter size={32} />
        </motion.a>
        <motion.a
          href="https://linkedin.com/in/yourusername" // Replace with your LinkedIn URL
          target="_blank"
          rel="noopener noreferrer"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="text-white hover:text-gray-300"
        >
          <Linkedin size={32} />
        </motion.a>
        <motion.a
          href="https://github.com/yourusername" // Replace with your GitHub URL
          target="_blank"
          rel="noopener noreferrer"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
          className="text-white hover:text-gray-300"
        >
          <Github size={32} />
        </motion.a>
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
