"use client"
import { motion } from "framer-motion"

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <p className="text-lg mb-8 text-gray-300">
            I'm always open to new opportunities and collaborations. Feel free to reach out if you'd like to discuss a
            project or just say hello!
          </p>
          <a href="mailto:sunnithdev@gmail.com">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition-colors"
            >
              Email me
            </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
