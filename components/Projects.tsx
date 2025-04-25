"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "CoffeeChat",
    description:
      "A platform for booking quick 10-15 minute coffee chats with professionals or highly skilled people. Users can book meetings with Pros, who set availability and optional fees. Currently in development.",
    ongoing: true,
    link: "https://coffe-chat.vercel.app/" // Correct link for CoffeeChat
  },
  {
    id: 2,
    title: "Entourage",
    description:
      "An app-based service offering stylish and social team members to help create a lively atmosphere in restaurants, bars, and cafés, subtly attracting more foot traffic. Currently in development.",
    ongoing: true,
    link: "https://entourage-app.vercel.app" // Correct link for Entourage
  },
  {
    id: 3,
    title: "Fairway Restaurant & Bar",
    description:
      "Building a website for Fairway Restaurant & Bar to promote their menu and events, enhancing their digital presence. Currently in development.",
    ongoing: true,
    link: "https://www.fairwayrestaurantandbar.ca/" // Correct link for Fairway Restaurant & Bar
  },
  {
    id: 4,
    title: "Ivy Coffee Shop",
    description:
      "Designing and developing a sleek, engaging website for Ivy Coffee Shop, which has a grab-and-go vibe, integrating online presence with the coffee shop's brand. Currently in development.",
    ongoing: true,
    link: "https://ivycoffeeshop.com" // Replace with the actual website URL
  },
  {
    id: 5,
    title: "Laso App",
    description:
      "Laso is a real-time translation application designed to break language barriers and connect people globally. With our instant translation feature, users can seamlessly communicate across languages, making friends, exchanging ideas, and embracing cultures from around the world.",
    ongoing: false,
    link: "https://laso-test.netlify.app/" // Correct link for Laso App
  },
]



const Projects = () => {
  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold mb-16 text-white">projects</h2>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border-t border-gray-800 pt-6"
            >
              <div className="flex justify-between items-center mb-2">
                <Link
                  href={project.link}
                  className="text-xl md:text-2xl font-medium hover:text-gray-300 transition-colors border-b border-gray-500 inline-block"
                >
                  {project.title}
                </Link>
                {project.ongoing && <span className="text-gray-400 text-sm">ongoing</span>}
              </div>
              <p className="text-gray-400 mt-4">{project.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 flex justify-center items-center">
          <Link href="/projects" className="text-gray-400 hover:text-white transition-colors border-b border-gray-700">
            View All Projects →
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Projects
