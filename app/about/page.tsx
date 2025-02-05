"use client"
import { motion } from "framer-motion"

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8">About Me</h1>
          <div className="space-y-6 text-lg text-gray-300">
            <p>
              I'm a passionate software developer with expertise in web technologies. I love creating modern, efficient,
              and user-friendly applications that solve real-world problems.
            </p>
            <h2 className="text-2xl font-bold mt-12 mb-4">My Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {["React", "Next.js", "TypeScript", "Node.js", "MongoDB", "AWS"].map((skill) => (
                <motion.div
                  key={skill}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-800 p-4 rounded-lg text-center"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
            <h2 className="text-2xl font-bold mt-12 mb-4">Experience</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold">Senior Developer @ Company Name</h3>
                <p className="text-gray-400">2020 - Present</p>
                <p className="mt-2">Description of role and achievements...</p>
              </div>
              {/* Add more experience items */}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}