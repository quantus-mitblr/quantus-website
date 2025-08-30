import React from 'react'
import { motion } from 'motion/react'

export default function JoinUs() {
  return (
    <motion.div 
      className="bg-black text-white py-20 px-8 lg:px-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Floating quantum particles background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute top-20 left-1/4 w-2 h-2 rounded-full bg-purple-400/60"
            animate={{ 
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          ></motion.div>
          <motion.div 
            className="absolute top-32 right-1/3 w-1 h-1 rounded-full bg-blue-400/60"
            animate={{ 
              x: [-15, 15, -15],
              opacity: [0.4, 0.9, 0.4]
            }}
            transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
          ></motion.div>
          <motion.div 
            className="absolute bottom-32 left-1/3 w-3 h-3 rounded-full bg-cyan-400/40"
            animate={{ 
              scale: [0.8, 1.2, 0.8],
              opacity: [0.2, 0.6, 0.2]
            }}
            transition={{ duration: 5, repeat: Infinity, delay: 2 }}
          ></motion.div>
        </div>

        {/* Main Content */}
        <motion.div 
          className="relative z-10"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h2 
            className="text-4xl lg:text-6xl font-bold mb-6"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Be Part Of This Amazing Journey
          </motion.h2>
          
          <motion.p 
            className="text-xl lg:text-2xl text-gray-300 mb-4 max-w-4xl mx-auto leading-relaxed"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            Whether you're a curious beginner or a tech wizard, there's a place for you at Quantus. 
          </motion.p>
          
          <motion.p 
            className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            🌟 Let's learn, build, and dream together—quantum-style. Join our growing community of quantum enthusiasts!
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
          >
            <motion.button 
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-10 py-5 rounded-full font-bold text-xl transition-all duration-300 shadow-lg shadow-purple-600/30 relative overflow-hidden group"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(147, 51, 234, 0.4)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.span
                className="relative z-10"
                whileHover={{ scale: 1.1 }}
              >
                Join Our Team
              </motion.span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              ></motion.div>
            </motion.button>
            
            <motion.button 
              className="bg-transparent border-2 border-purple-400 hover:bg-purple-400 hover:text-black text-purple-400 px-10 py-5 rounded-full font-bold text-xl transition-all duration-300 relative overflow-hidden group"
              whileHover={{ 
                scale: 1.05,
                borderColor: "rgba(147, 51, 234, 1)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.span
                className="relative z-10 group-hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
              >
                Join Our Club
              </motion.span>
              <motion.div
                className="absolute inset-0 bg-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              ></motion.div>
            </motion.button>
          </motion.div>

          {/* Quantum symbol decoration */}
          <motion.div 
            className="mt-16 flex justify-center"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 0.6, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.5, duration: 1 }}
          >
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}
