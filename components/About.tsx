"use client"
import { motion } from "framer-motion"
import Link from "next/link"

const About = () => {
  return (
    <section id="about" className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <p className="text-lg mb-6 text-gray-300">
            I'm Sunnith Kumar Chinthapally, a passionate Full Stack Developer with experience in building scalable web
            applications and modern user experiences. I specialize in technologies like React, Next.js, Node.js, and Supabase.
          </p>
          <p className="text-lg mb-6 text-gray-300">
            I enjoy solving challenging problems and developing innovative solutions that make an impact. Whether it's
            front-end interfaces or back-end APIs, I'm driven to create clean, efficient, and maintainable code.
          </p>
          <p className="text-lg text-gray-300">
            Outside of work, I love exploring new tech, contributing to open-source projects, and constantly learning new skills to
            stay ahead in the ever-evolving tech world.
          </p>
          <Link
            href="/about"
            className="text-blue-500 hover:text-blue-400 transition-colors"
          >
            Learn More About Me →
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default About
