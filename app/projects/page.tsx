"use client"
import { motion } from "framer-motion"
import Image from "next/image"

const allProjects = [
  {
    id: 1,
    title: "Goodslimited.com Inc",
    description: "Solopremier business website for Goods Limited, showcasing consulting, co-packing services, and unique first-to-market products.",
    image: "goodslimited.png?height=300&width=400",
    technologies: ["GoDaddy", "Wix Studio"],
    link: "https://goodslimited.com"
  },
  {
    id: 2,
    title: "Fairway Restaurant & Bar",
    description: "Developed a website for Fairway Restaurant & Bar to promote their menu and events.",
    image: "fairwayss.png?height=300&width=400",
    technologies: ["Wix Studio"],
    link: "https://fairwayrestoandbar.wixstudio.com/version1"
  },
  {
    id: 3,
    title: "E-commerce Web and Mobile Application for Kalgudi Digital",
    description: "Developed a full-stack e-commerce platform for Kalgudi Digital, including web and mobile applications.",
    image: "/kalgudi-outputs-store.png?height=300&width=400",
    technologies: ["Angular", "In-house Angular Library", "Serverless", "AWS", "Node.js", "Jenkins", "PostgreSQL"],
    link: "https://outputs.kalgudi.com"
  },
  {
    id: 4,
    title: "E-commerce Mobile App for AgBSE",
    description: "Developed a mobile e-commerce application for AgBSE with backend integration and CI/CD pipelines.",
    image: "/agbse.png?height=300&width=400",
    technologies: ["Ionic", "Node.js", "Express", "MySQL", "Prisma", "Github Actions", "Netlify"],
    link: "https://play.google.com/store/apps/details?id=com.agbse.agbse&hl=en_CA"
  },
  {
    id: 5,
    title: "E-commerce Web and Mobile Application for Kalgudi Digital",
    description: "Created an e-commerce solution for Kalgudi Digital with analytics and cloud integration.",
    image: "/kalgudi-store.png?height=300&width=400",
    technologies: ["Angular", "Node.js", "PostgreSQL", "Google Analytics", "Jenkins", "Serverless", "AWS S3"],
    link: "https://store.kalgudi.com/"
  },
  {
    id: 7,
    title: "LaSo - Language Solution & Chat Application",
    description: "Developing a real-time chat application using React.js for the web and React Native with Expo for mobile, enabling seamless multilingual communication.",
    image: "/laso-web.jpg?height=300&width=400",
    technologies: ["React.js", "React Native", "NestJS", "Google Translate API", "Redis", "Firebase", "Supabase"],
    link: "https://laso-test.netlify.app/"
  },
  {
    id: 9,
    title: "E-commerce Application for BreadEssentials",
    description: "Implemented an e-commerce solution for BreadEssentials using Shopify and delivery automation tools.",
    image: "/shopify.png?height=300&width=400",
    technologies: ["Shopify", "Zapier", "Google Analytics"],
    link: "https://thebreadessentials.com"
  },

  {
    id: 12,
    title: "WordPress Website for Friendsfries",
    description: "Developed a WordPress website for Friendsfries with integrated analytics.",
    image: "/friendsfries.png?height=300&width=400",
    technologies: ["WordPress", "Google Analytics"],
    link: "https://friendsfries.ca"
  },
  {
    id: 10,
    title: "Website for Rajyatantra Non-Profit Organization",
    description: "Designed and developed a website for a non-profit organization to showcase their initiatives.",
    image: "/rajyatantra.png?height=300&width=400",
    technologies: ["HTML", "CSS", "Bootstrap", "Firebase Hosting"],
    link: "https://rajyatantra.org"
  },
  {
    id: 11,
    title: "Website for a Telugu Student's Organisation - Delhi",
    description: "Created a website for a Telugu student organization to promote cultural events and activities.",
    image: "/tsa-delhi.png?height=300&width=400",
    technologies: ["HTML", "SCSS", "JavaScript"],
    link: "https://telugustudentsdelhi.com"
  },
  {
    id: 13,
    title: "Checkout My GitHub for More Projects",
    description: "Explore my GitHub profile for additional projects and contributions.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["TypeScript", "D3.js", "SCSS", "Figma", "AdobeXD", "Three.js"],
    link: "https://github.com/sunnithdev"
  }
];


export default function ProjectsPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          All Projects
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="bg-gray-700 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-400 transition-colors"
                >
                  View Project →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}