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
            Hey! I'm Sunnith Kumar Chinthapally — a Full Stack Developer with over 3 years of experience building products that actually make a difference. I’ve worked on everything from mobile apps and web dashboards to analytics portals and booking platforms, both solo and in small, tight-knit teams.
          </p>
          <p className="text-lg mb-6 text-gray-300">
            My toolkit includes React, Angular, Next.js, Node.js, and NestJS — and lately, I’ve been diving deep into the Next.js ecosystem with Drizzle ORM, Supabase, and shadcn/ui for slick, modern UIs. I'm also exploring Gen AI and wrapping APIs into clean, usable products. If something can be automated or made smarter, I’m probably already on it.
          </p>
          <p className="text-lg mb-6 text-gray-300">
            I’ve built secure dashboards with FastAPI, launched real-time insights tools, and even developed a Coffee Chat app connecting rookies with pros. My work is usually practical and driven by actual user needs — whether that’s for a solo client in Toronto or collaborating on a project like a high-traffic restaurant booking platform.
          </p>
          <p className="text-lg mb-6 text-gray-300">
            I’m also into branding and digital presence — I’ve helped a bunch of small businesses (like Ivy Coffee near Love Park in Toronto, Fairway restaurant and bar @ Leaside and many more) set up their entire online game, from website to vibe. On the side, I like talking tech on X (@Sunnithdev), contributing to GitHub convos, and always experimenting with new tools.
          </p>
          <p className="text-lg text-gray-300">
            Big on in-person collaboration, clean code, and launching things that feel polished but alive.
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
