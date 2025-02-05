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
            I'm a passionate software developer with expertise in web technologies. I love creating modern, efficient,
            and user-friendly applications that solve real-world problems.
          </p>
          <p className="text-lg mb-6 text-gray-300">
            My skills include React, Next.js, Node.js, and various other tools and frameworks in the JavaScript
            ecosystem. I'm always eager to learn new technologies and improve my craft.
          </p>
          <p className="text-lg text-gray-300">
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
            enjoying the great outdoors.
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