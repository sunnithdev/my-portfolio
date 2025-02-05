"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "Description of Project 1",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 2,
    title: "Project 2",
    description: "Description of Project 2",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 3,
    title: "Project 3",
    description: "Description of Project 3",
    image: "/placeholder.svg?height=300&width=400",
  },
]

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
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
