import React from 'react'
import { motion } from 'motion/react'

export default function AboutUs() {
  return (
    <motion.div 
      id='about'
      className="bg-gradient-to-br from-black via-gray-900 to-slate-900 text-white py-20 px-8 lg:px-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.p 
            className="text-purple-400 text-xl tracking-wider mb-4 font-semibold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            // ABOUT US
          </motion.p>
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold mb-6"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            Driven By Passion, Powered By Curiosity
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            A bunch of students who dared to ask, "What if?" Learn how we started from an idea—and became a movement.
          </motion.p>
        </motion.div>

        {/* What Sets Us Apart */}
        <motion.div 
          className="text-center mb-12"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
        >
          <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
            What sets us apart? Our blend of curiosity, collaboration, and commitment to meaningful learning experiences.
          </p>
        </motion.div>

        {/* Call to Action Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2 }}
        >
          <motion.button 
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg shadow-purple-600/30"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(147, 51, 234, 0.4)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            Meet The Team
          </motion.button>
          <motion.button 
            className="bg-transparent border-2 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "rgba(147, 51, 234, 1)",
              color: "white"
            }}
            whileTap={{ scale: 0.98 }}
          >
            Our Journey
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  )
}
