"use client"
import { motion } from "framer-motion"

export default function AboutPage() {
  const skills = [
    "React", "Next.js", "TypeScript", "Node.js", "Angular", "NestJS", 
    "AWS", "Supabase", "PostgreSQL", "MongoDB", "Redis", "LangChain", 
    "OpenAI", "TensorFlow", "Serverless"
  ]

  const experiences = [
    {
      company: "Freelancer",
      role: "Software Developer",
      period: "December 2022 – Present",
      description: "Built a real-time multilingual chat app using React, Redux, Socket.io, NestJS, and Google Translate API, deployed on AWS with Supabase. Developed AI-driven web apps with Next.js, Supabase, and Drizzle ORM to enhance user experiences.",
      color: "#FFD93D"
    },
    {
      company: "Kalgudi Digital",
      role: "Software Engineer",
      period: "April 2021 – January 2023",
      description: "Led development of cross-platform e-commerce apps using Angular/React, implementing state management with NgRx and RxJS. Built microservices with Node.js, PostgreSQL, and AWS Lambda, achieving 99.9% uptime for backend APIs. Automated deployment pipelines using Jenkins, AWS, Docker.",
      color: "#FF6B6B"
    },
    {
      company: "Vasudhaika Software Solutions",
      role: "Web Developer, Intern",
      period: "December 2020 – March 2021",
      description: "Developed 5+ responsive websites using Figma, HTML/CSS, JavaScript, and deployed via Netlify/Heroku. Utilized Shopify/Webflow for e-commerce platforms, integrating Google Analytics for SEO tracking.",
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
          <p className="text-lg mb-6 text-gray-300">
            I'm Sunnith Kumar Chinthapally, a Full Stack Developer with 3+ years of hands-on experience crafting web and mobile applications. My technical toolkit includes React, Angular, Node.js, Next.js, and NestJS for building responsive frontends and robust backend services.
          </p>
          <p className="text-lg mb-6 text-gray-300">
            My work involves developing web and mobile applications that solve real-world problems, backed by cloud-native systems using AWS, Supabase, and PostgreSQL. I'm passionate about integrating Gen AI technologies into these solutions to enhance user experiences and create more intelligent applications.
          </p>
          <p className="text-lg mb-12 text-gray-300">
            I enjoy working with serverless architectures and have implemented AI-driven features using OpenAI and LangChain. When I'm not coding, you'll find me exploring new frameworks, contributing to open-source, or experimenting with emerging technologies to stay ahead in this rapidly evolving field.
          </p>

          {/* Skills Section */}
          <h2 className="text-2xl font-bold text-white mb-8">Technical Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
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