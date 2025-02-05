"use client"
import { motion } from "framer-motion"

export default function AboutPage() {
  const skills = ["React", "Next.js", "TypeScript", "Node.js", "Supabase", "Firebase", "NestJS", "AWS", "Go", "Redis"]

  const experiences = [

    {
      company: "Freelance",
      role: "Full Stack Developer",
      period: "December 2022 – Present",
      description: "Built real-time chat applications and developed modern web apps using Next.js, Supabase, and Drizzle ORM.",
      color: "#FFD93D"
    },
    {
      company: "Kalgudi Digital",
      role: "Software Engineer",
      period: "April 2021 – January 2023",
      description: "Developed cross-platform e-commerce applications using Angular and React. Built scalable microservices and APIs with Node.js and AWS Serverless.",
      color: "#FF6B6B"
    },
    {
      company: "Vasudhaika Software Solutions",
      role: "Web Developer Intern",
      period: "December 2020 – March 2021",
      description: "Built websites using HTML, CSS, JavaScript, and deployed them on cloud platforms like Netlify and AWS.",
      color: "#4ECDC4"
    },
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8 text-white">About Me</h1>
          <p className="text-lg text-gray-300 mb-12">
            Hi, I’m Sunnith Kumar Chinthapally, a Full Stack Developer with experience building web and mobile applications. I specialize in React, Next.js, and Node.js, with a focus on delivering modern, scalable solutions.
          </p>

          {/* Skills Section */}
          <h2 className="text-2xl font-bold text-white mb-8">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800 p-4 rounded-lg text-center text-white"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                {skill}
              </motion.div>
            ))}
          </div>

          {/* Work Experience Section */}
          <h2 className="text-2xl font-bold text-white mt-16 mb-8">Work Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="flex items-start space-x-4"
              >
                <div className="w-12 h-12 flex-shrink-0 rounded-full" style={{ backgroundColor: exp.color }}></div>
                <div className="flex-1 bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-white">{exp.company}</h3>
                  <p className="text-gray-400">{exp.role}</p>
                  <p className="text-gray-500 text-sm">{exp.period}</p>
                  <p className="mt-2 text-gray-300">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
