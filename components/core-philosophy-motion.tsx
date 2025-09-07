import React from 'react'
import { motion } from 'motion/react'

export default function CorePhilosophy() {
  return (
    <motion.div 
      className="bg-black text-white py-20 px-8 lg:px-16 text-left"
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
            className="text-purple-400 text-xl tracking-wider mb-4 font-semibold text-left"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            // ABOUT QUANTUS
          </motion.p>
          <motion.h2 
            className="text-2xl lg:text-3xl font-bold text-left"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            Redefining the Learning Experience in Quantum Technology
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-300 mt-6 max-w-4xl text-left"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            Quantus is a vibrant, student-driven initiative founded with a mission to bridge the gap between curiosity and cutting-edge technology. From decoding the mysteries of quantum physics to building future-ready tech skills, we bring together passionate learners, researchers, and innovators.
          </motion.p>
        </motion.div>
        
        {/* Philosophy Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Top Left - Exploration */}
          <motion.div 
            className="bg-slate-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 relative overflow-hidden"
            initial={{ y: 50, opacity: 0, scale: 0.9 }}
            whileInView={{ y: 0, opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)"
            }}
          >
            <div className="flex items-start gap-6">
              <motion.div 
                className="relative"
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.8 }}
              >
                {/* Quantum exploration icon */}
                <div className="w-24 h-24 relative">
                  <motion.div 
                    className="absolute inset-0 rounded-full border-2 border-purple-400"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  ></motion.div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-600"></div>
                  <motion.div 
                    className="absolute right-0 top-1/2 transform -translate-y-1/2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="w-8 h-1 bg-purple-400"></div>
                    <div className="w-2 h-2 rounded-full bg-purple-400 ml-6 -mt-0.5"></div>
                  </motion.div>
                </div>
              </motion.div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Explore</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Dive deep into the fascinating world of quantum computing, quantum physics, and emerging technologies. Our community encourages curiosity-driven learning and hands-on exploration of quantum concepts.
                </p>
              </div>
            </div>
          </motion.div>
          
          {/* Top Right - Innovation */}
          <motion.div 
            className="bg-slate-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 relative overflow-hidden"
            initial={{ y: 50, opacity: 0, scale: 0.9 }}
            whileInView={{ y: 0, opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 20px 40px rgba(147, 51, 234, 0.2)"
            }}
          >
            <div className="flex items-start gap-6">
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                {/* Innovation system diagram */}
                <div className="w-24 h-24 relative">
                  <motion.div 
                    className="absolute inset-2 rounded-full border border-blue-400/50"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  ></motion.div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600"></div>
                  <motion.div 
                    className="absolute top-2 right-6 w-2 h-2 rounded-full bg-blue-400"
                    animate={{ 
                      scale: [1, 1.5, 1],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  ></motion.div>
                  <motion.div 
                    className="absolute bottom-4 left-4 w-1 h-1 rounded-full bg-purple-400"
                    animate={{ 
                      y: [0, -5, 0],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                  ></motion.div>
                </div>
              </motion.div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Innovate</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Push the boundaries of what's possible with creative projects, research initiatives, and cutting-edge experiments. We foster an environment where bold ideas and innovative thinking thrive.
                </p>
              </div>
            </div>
          </motion.div>
          
          {/* Bottom Left - Collaboration */}
          <motion.div 
            className="bg-slate-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 relative overflow-hidden"
            initial={{ y: 50, opacity: 0, scale: 0.9 }}
            whileInView={{ y: 0, opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 20px 40px rgba(34, 197, 94, 0.2)"
            }}
          >
            <div className="flex items-start gap-6">
              <motion.div 
                className="relative"
                whileHover={{ 
                  rotateY: 360,
                  color: "#3b82f6"
                }}
                transition={{ duration: 0.8 }}
              >
                {/* Collaboration symbol */}
                <div className="w-24 h-24 flex items-center justify-center">
                  <motion.div 
                    className="text-4xl font-bold text-purple-400"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      opacity: [0.8, 1, 0.8]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    ∞
                  </motion.div>
                </div>
              </motion.div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Collaborate</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Connect with like-minded peers, form study groups, and work together on exciting quantum projects. Our collaborative environment brings together diverse perspectives and expertise.
                </p>
              </div>
            </div>
          </motion.div>
          
          {/* Bottom Right - Community Impact */}
          <motion.div 
            className="bg-slate-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 lg:col-span-1"
            initial={{ y: 50, opacity: 0, scale: 0.9 }}
            whileInView={{ y: 0, opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 20px 40px rgba(236, 72, 153, 0.2)"
            }}
          >
            <div className="flex items-start gap-6">
              <motion.div 
                className="relative"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 1 }}
              >
                {/* Community network diagram */}
                <div className="w-24 h-24 relative">
                  <motion.div 
                    className="absolute inset-0 rounded-full border-2 border-dashed border-purple-400/50"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  ></motion.div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-600"></div>
                  <motion.div 
                    className="absolute top-2 left-1/2 w-2 h-2 rounded-full bg-purple-400"
                    animate={{ 
                      y: [0, -5, 0],
                      opacity: [0.6, 1, 0.6]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  ></motion.div>
                  <motion.div 
                    className="absolute bottom-2 left-1/2 w-2 h-2 rounded-full bg-blue-400"
                    animate={{ 
                      y: [0, 5, 0],
                      opacity: [0.6, 1, 0.6]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  ></motion.div>
                  <motion.div 
                    className="absolute left-2 top-1/2 w-2 h-2 rounded-full bg-cyan-400"
                    animate={{ 
                      x: [-3, 3, -3],
                      opacity: [0.6, 1, 0.6]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  ></motion.div>
                  <motion.div 
                    className="absolute right-2 top-1/2 w-2 h-2 rounded-full bg-indigo-400"
                    animate={{ 
                      x: [3, -3, 3],
                      opacity: [0.6, 1, 0.6]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                  ></motion.div>
                </div>
              </motion.div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Build the Future</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Join a movement that's shaping the future of technology. Through events, workshops, and community outreach, we're making quantum computing accessible to the next generation of innovators.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
