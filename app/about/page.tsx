"use client"
import { motion } from "framer-motion"

export default function AboutPage() {
  const skills = [
    "React", "Next.js", "TypeScript", "Node.js", "Angular", "NestJS", 
    "AWS", "Supabase", "PostgreSQL", "MongoDB", "Redis", "LangChain", 
    "OpenAI", "TensorFlow", "Serverless", "FastAPI", "Drizzle ORM", "Ionic"
  ]

  const experiences = [
    {
      company: "Freelancer",
      role: "Software Developer",
      period: "December 2022 – Present",
      description:
        "Delivered full-stack projects for 8+ clients in Toronto. Built a multilingual real-time chat app using React, Redux, Socket.io, and NestJS, powered by Google Translate API. Developed AI-driven apps with Next.js, Drizzle ORM, and Supabase. Created analytics dashboards with FastAPI, secure APIs, and role-based access. Helped launch Ivy Coffee Shop’s online presence. Also collaborated with Siemens as a freelancer, building a web portal using Angular 14 and Djongo on the backend, working in a small 4-member team.",
      color: "#FFD93D"
    },    
    {
      company: "Kalgudi Digital",
      role: "Software Engineer",
      period: "April 2021 – January 2023",
      description:
        "Owned frontend and backend development of cross-platform e-commerce solutions using Angular/React. Used NgRx and RxJS for state management and built backend microservices with Node.js, PostgreSQL, and AWS Lambda. Deployed with Docker and automated CI/CD using Jenkins.",
      color: "#FF6B6B"
    },
    {
      company: "Vasudhaika Software Solutions",
      role: "Web Developer, Intern",
      period: "December 2020 – March 2021",
      description:
        "Built and deployed 5+ responsive websites using Figma, HTML/CSS, JavaScript. Integrated Shopify and Webflow for e-commerce, and used Google Analytics for SEO and user insights.",
      color: "#4ECDC4"
    }
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
            I'm Sunnith Kumar Chinthapally — a Full Stack Developer with 3+ years of experience building practical, user-focused apps. I love turning complex ideas into clean digital products and have worked with startups, agencies, and solo founders to bring projects to life.
          </p>
          <p className="text-lg mb-6 text-gray-300">
            My stack revolves around React, Angular, Node.js, and NestJS. Recently, I’ve leaned heavily into building with Next.js, Supabase, Drizzle ORM, and shadcn/ui to create polished modern experiences. I'm also experimenting with Gen AI tools like OpenAI and LangChain to build intelligent interfaces and tools.
          </p>
          <p className="text-lg mb-6 text-gray-300">
            I’ve built real-time apps, booking platforms, and analytics dashboards using FastAPI, secure APIs, and cloud-native infrastructure. I'm also the person behind digital presence for places like Ivy Coffee in Toronto — think websites, strategy, and making it all feel cohesive.
          </p>
          <p className="text-lg mb-6 text-gray-300">
            I studied Web Development at Conestoga College, and I thrive best in collaborative, in-person team environments. Whether it's a side project like a real estate insights tool or a coffee chat booking app, I'm all about launching fast, building with intent, and making things work well.
          </p>
          <p className="text-lg mb-12 text-gray-300">
            Outside work, I share tech thoughts on <a href="https://x.com/Sunnithdev" className="text-blue-400 underline" target="_blank">X</a>, contribute to open-source, and explore whatever’s next in AI and web dev.
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
