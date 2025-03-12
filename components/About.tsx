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
            I'm Sunnith Kumar Chinthapally, a Full Stack Developer with 3+ years of hands-on experience crafting web and mobile applications. My technical toolkit includes React, Angular, Node.js, Next.js, and NestJS for building responsive frontends and robust backend services.
          </p>
          <p className="text-lg mb-6 text-gray-300">
            My work involves developing web and mobile applications that solve real-world problems, backed by cloud-native systems using AWS, Supabase, and No-code tools. I'm passionate about integrating Gen AI technologies into these solutions to enhance user experiences and create more intelligent applications.
          </p>
          <p className="text-lg text-gray-300">
            I'm particularly interested in Gen AI. When I'm not coding, you'll find me exploring X.com, contributing to GitHub discussions, or experimenting with the latest web technologies.
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
