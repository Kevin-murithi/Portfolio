import { useState } from "react";
import { Menu, X } from "lucide-react"; // For menu icons

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed top-0 left-0 w-full z-50 bg-black text-white px-8 md:px-16 lg:px-24 shadow-lg">
            <div className="container py-3 flex justify-between items-center">
                {/* Logo */}
                <div className="text-2xl font-bold">Kevin</div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6">
                    <a href="#Home" className="hover:text-gray-400">Home</a>
                    <a href="#About" className="hover:text-gray-400">About Me</a>
                    <a href="#Services" className="hover:text-gray-400">Services</a>
                    <a href="#Projects" className="hover:text-gray-400">Projects</a>
                    <a href="#Contact" className="hover:text-gray-400">Contact</a>
                </div>

                {/* Connect Button (Desktop) */}
                <button className="hidden md:inline bg-gradient-to-r from-blue-700 to-purple-900 text-white px-4 py-2 rounded-full transition-transform duration-300 hover:scale-105">
                    Connect Me
                </button>

                {/* Hamburger Button (Mobile) */}
                <button className="md:hidden" onClick={() => setIsOpen(true)}>
                    <Menu size={28} />
                </button>
            </div>

            {/* Mobile Menu (Sliding from Right) */}
            <div className={`fixed top-0 right-0 h-full w-64 bg-black shadow-lg transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
                <div className="flex justify-end p-5">
                    <button onClick={() => setIsOpen(false)}>
                        <X size={28} />
                    </button>
                </div>

                <nav className="flex flex-col items-center space-y-6 mt-10">
                    <a href="#Home" className="text-lg hover:text-gray-400" onClick={() => setIsOpen(false)}>Home</a>
                    <a href="#About" className="text-lg hover:text-gray-400" onClick={() => setIsOpen(false)}>About Me</a>
                    <a href="#Services" className="text-lg hover:text-gray-400" onClick={() => setIsOpen(false)}>Services</a>
                    <a href="#Projects" className="text-lg hover:text-gray-400" onClick={() => setIsOpen(false)}>Projects</a>
                    <a href="#Contact" className="text-lg hover:text-gray-400" onClick={() => setIsOpen(false)}>Contact</a>
                    <button className="bg-gradient-to-r from-blue-700 to-purple-900 text-white px-4 py-2 rounded-full">
                        Connect Me
                    </button>
                </nav>
            </div>
        </div>
    );
}
