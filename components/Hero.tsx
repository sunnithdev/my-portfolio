"use client"
import { motion } from "framer-motion"
import { Twitter, Linkedin, Github } from "lucide-react"
import Chat from "./Chat"

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative z-10 px-4 pt-24">
      {/* Desktop Layout - Side by side */}
      <div className="hidden lg:flex w-full max-w-7xl mx-auto items-center justify-between gap-12">
        {/* Left Side - Name and Title */}
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex-1 text-left"
        >
          <motion.h1 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-6xl font-bold mb-6 text-white"
          >
            Sunnith
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-2xl text-gray-300 mb-8"
          >
            Software Developer
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
          
          {/* Social icons below Software Developer for desktop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="mt-8 flex space-x-6"
          >
            {["twitter", "linkedin", "github"].map((platform, i) => (
              <motion.a
                key={platform}
                href={`https://${platform}.com/${platform === "twitter" ? "sunnithdev" : platform === "linkedin" ? "in/sunnith-ch" : "sunnithdev"}`}
                target="_blank"
                rel="noopener noreferrer"
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="text-white/70 hover:text-white transition-colors duration-300"
                whileHover={{ y: -3, scale: 1.1 }}
              >
                {platform === "twitter" ? (
                  <Twitter size={28} />
                ) : platform === "linkedin" ? (
                  <Linkedin size={28} />
                ) : (
                  <Github size={28} />
                )}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Side - Chat */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="flex-1"
        >
          <Chat />
        </motion.div>
      </div>

      {/* Mobile/Tablet Layout - Stacked */}
      <div className="lg:hidden w-full max-w-2xl mx-auto text-center pt-8">
        <motion.h1 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold mb-4 text-white"
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
        <motion.a
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          href="#projects"
          className="bg-white text-black px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition-colors"
        >
          View My Work
        </motion.a>
        {/* Social icons below Software Developer for mobile/tablet */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="m-8 flex justify-center space-x-6"
        >
          {["twitter", "linkedin", "github"].map((platform, i) => (
            <motion.a
              key={platform}
              href={`https://${platform}.com/${platform === "twitter" ? "sunnithdev" : platform === "linkedin" ? "in/sunnith-ch" : "sunnithdev"}`}
              target="_blank"
              rel="noopener noreferrer"
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="text-white/70 hover:text-white transition-colors duration-300"
              whileHover={{ y: -3, scale: 1.1 }}
            >
              {platform === "twitter" ? (
                <Twitter size={28} />
              ) : platform === "linkedin" ? (
                <Linkedin size={28} />
              ) : (
                <Github size={28} />
              )}
            </motion.a>
          ))}
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="mb-8"
        >
          <Chat />
        </motion.div>
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
