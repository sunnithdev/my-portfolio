"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "Goodslimited.com Inc",
    description: "Solopremier business website for Goods Limited, showcasing consulting, co-packing services, and unique first-to-market products.",
    image: "/goodslimited.png?height=300&width=400",
  },
  {
    id: 2,
    title: "Fairway Restaurant & Bar",
    description: "Developed a website for Fairway Restaurant & Bar to promote their menu and events.",
    image: "/fairwayss.png?height=300&width=400",
  },
  {
    id: 3,
    title: "E-commerce Application for BreadEssentials",
    description: "Implemented an e-commerce solution for BreadEssentials using Shopify and delivery automation tools.",
    image: "/shopify.png?height=300&width=400",
  },
]

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link key={project.id} href="/projects">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
              >
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400">{project.description}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
        <div className="p-10 flex justify-center items-center">
          <Link
            href="/projects"
            className="text-blue-500 hover:text-blue-400 transition-colors"
          >
            View All Projects →
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Projects
