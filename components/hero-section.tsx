import React from 'react'
import { motion } from 'motion/react'

export default function HeroSection() {
  return (
    <motion.div 
      className="min-h-screen bg-black text-white relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Central Orbital System */}
        <motion.div 
          className="absolute top-1/3 right-1/5 transform -translate-y-1/2"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <div className="relative w-96 h-96">
            {/* Outer orbit ring */}
            <motion.div 
              className="absolute inset-0 rounded-full border border-blue-400/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            ></motion.div>
            <motion.div 
              className="absolute inset-8 rounded-full border border-blue-400/20"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            ></motion.div>
            <motion.div 
              className="absolute inset-16 rounded-full border border-purple-400/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            ></motion.div>
            
            {/* Central core */}
            <motion.div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 shadow-2xl shadow-blue-500/50"
              animate={{ 
                scale: [1, 1.1, 1],
                boxShadow: [
                  "0 0 20px rgba(59, 130, 246, 0.5)",
                  "0 0 40px rgba(147, 51, 234, 0.7)",
                  "0 0 20px rgba(59, 130, 246, 0.5)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            ></motion.div>
            
            {/* Orbital dots */}
            <motion.div 
              className="absolute top-4 left-1/2 w-3 h-3 rounded-full bg-blue-400 shadow-lg shadow-blue-400/50"
              animate={{ 
                y: [0, -10, 0],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ duration: 2, repeat: Infinity, delay: 0 }}
            ></motion.div>
            <motion.div 
              className="absolute bottom-8 right-8 w-2 h-2 rounded-full bg-purple-400 shadow-lg shadow-purple-400/50"
              animate={{ 
                y: [0, 8, 0],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
            ></motion.div>
            <motion.div 
              className="absolute left-12 top-1/3 w-2 h-2 rounded-full bg-indigo-400 shadow-lg shadow-indigo-400/50"
              animate={{ 
                x: [-5, 5, -5],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{ duration: 1.8, repeat: Infinity, delay: 1 }}
            ></motion.div>
            <motion.div 
              className="absolute right-16 bottom-1/4 w-3 h-3 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ duration: 2.2, repeat: Infinity, delay: 1.5 }}
            ></motion.div>
          </div>
        </motion.div>
        
        {/* Additional floating elements */}
        <motion.div 
          className="absolute top-20 left-1/4 w-2 h-2 rounded-full bg-blue-400/60"
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-32 left-1/3 w-1 h-1 rounded-full bg-purple-400/60"
          animate={{ 
            x: [-10, 10, -10],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
        ></motion.div>
        <motion.div 
          className="absolute top-1/3 right-1/3 w-1 h-1 rounded-full bg-cyan-400/60"
          animate={{ 
            scale: [0.5, 1, 0.5],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{ duration: 2.8, repeat: Infinity, delay: 2 }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-20 right-20 w-2 h-2 rounded-full bg-indigo-400/60"
          animate={{ 
            rotate: [0, 360],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ duration: 6, repeat: Infinity }}
        ></motion.div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 flex flex-col justify-center min-h-screen px-8 lg:px-16 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            className="space-y-8"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div>
              <motion.h1 
                className="text-5xl lg:text-7xl font-bold leading-tight mb-6"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  QUANTUS
                </motion.span>
              </motion.h1>
              <motion.h2 
                className="text-2xl lg:text-3xl font-semibold mb-6 text-blue-400"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                Reimagining Reality with Quantum Possibility
              </motion.h2>
              <motion.p 
                className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-lg mb-4"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.1 }}
              >
                Empowering Students to explore, innovate and collaborate in quantum computing.
              </motion.p>
              <motion.p 
                className="text-base lg:text-lg text-gray-400 leading-relaxed max-w-lg"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.3 }}
              >
                A dynamic student-led community exploring quantum computing, cutting-edge technology, and beyond. Let's build the future—together.
              </motion.p>
            </div>
            
            <motion.button 
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg shadow-purple-600/30"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(147, 51, 234, 0.4)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              Join Our Community
            </motion.button>
          </motion.div>
          
          {/* Right side - handled by background animation */}
          <div></div>
        </div>
      </div>
    </motion.div>
  )
}
