import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 ">
        <div className="container mx-auto px-4 flex justify-between items-start">
            <div className="flex items-center space-x-3">
                <Image
                    src="/assests/images/logo.png"
                    alt="Quantus Logo"
                    width={80}
                    height={40}
                    className="h-10 w-14"
                />
                <span className="text-xl font-semibold">Quantus</span>
            </div>
            
            <div className="flex space-x-12">
                <div>
                    <h3 className="font-semibold mb-3">Company</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li><a href="#" className="hover:text-white">About</a></li>
                        <li><a href="#" className="hover:text-white">Careers</a></li>
                        <li><a href="#" className="hover:text-white">Contact</a></li>
                    </ul>
                </div>
                
                <div>
                    <h3 className="font-semibold mb-3">Resources</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li><a href="#" className="hover:text-white">Documentation</a></li>
                        <li><a href="#" className="hover:text-white">Support</a></li>
                        <li><a href="#" className="hover:text-white">Privacy</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}
