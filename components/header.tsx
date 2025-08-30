"use client"

import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import { motion } from 'motion/react'

export default function Header() {
    const { theme } = useTheme()
    const [mounted, setMounted] = useState(false)
    useEffect(() => {
        setMounted(true)
    }, [])
    return (
        <motion.div 
            className="w-full py-6 px-8 lg:px-16 bg-black flex items-center justify-between relative z-20"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <motion.div 
                className="flex flex-row items-center gap-4"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                {mounted ? (
                    <motion.img 
                        src={"/assests/images/logo.png"} 
                        alt="Logo" 
                        className="h-8 w-auto" 
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                    />
                ) : <img src={"/assests/images/logo.png"} alt="Logo" className="h-8 w-auto" />}
                <motion.p 
                    className="text-2xl font-bold text-white"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                >
                    Quantus
                </motion.p>
            </motion.div>
            <motion.nav
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                <ul className="flex space-x-8">
                    <motion.li
                        whileHover={{ y: -2 }}
                        transition={{ duration: 0.2 }}
                    >
                        <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Home</a>
                    </motion.li>
                    <motion.li
                        whileHover={{ y: -2 }}
                        transition={{ duration: 0.2 }}
                    >
                        <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">About</a>
                    </motion.li>
                    <motion.li
                        whileHover={{ y: -2 }}
                        transition={{ duration: 0.2 }}
                    >
                        <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Events</a>
                    </motion.li>
                    <motion.li
                        whileHover={{ y: -2 }}
                        transition={{ duration: 0.2 }}
                    >
                        <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Team</a>
                    </motion.li>
                    <motion.li
                        whileHover={{ y: -2 }}
                        transition={{ duration: 0.2 }}
                    >
                        <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Join Us</a>
                    </motion.li>
                </ul>
            </motion.nav>
        </motion.div>
    )
}
