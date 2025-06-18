import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("Home");

    const navItems = [
        { name: "Home", href: "#Home" },
        { name: "About Me", href: "#About" },
        { name: "Services", href: "#Services" },
        { name: "Skills", href: "#Skills" },
        { name: "Contact", href: "#Contact" }
    ];

    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map(item => item.href.substring(1));
            const scrollPosition = window.scrollY + 100;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i]);
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(sections[i]);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Call once to set initial state

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.div
            className="fixed top-1 left-0 w-full z-40 bg-black/90 backdrop-blur-sm text-white px-8 md:px-12 lg:px-24 shadow-lg border-b border-neutral-800/50 transition-all duration-300"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 3.5 }}
        >
            <div className="container py-3 flex justify-between items-center">
                {/* Logo */}
                <div className="text-2xl font-bold">Kevin</div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8">
                    {navItems.map((item) => (
                        <motion.a
                            key={item.name}
                            href={item.href}
                            className="relative py-2 text-white hover:text-gray-300 transition-colors duration-300"
                            whileHover={{ y: -2 }}
                            transition={{ duration: 0.2 }}
                        >
                            <span className="relative z-10">{item.name}</span>
                            {activeSection === item.href.substring(1) && (
                                <motion.div
                                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                                    layoutId="activeTab"
                                    initial={{ opacity: 0, scaleX: 0 }}
                                    animate={{ opacity: 1, scaleX: 1 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 500,
                                        damping: 30
                                    }}
                                />
                            )}
                            <motion.div
                                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400/50 to-purple-400/50 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300"
                                initial={{ scaleX: 0 }}
                                whileHover={{ scaleX: 1 }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.a>
                    ))}
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

                <nav className="bg-black flex flex-col items-center space-y-6 mt-10">
                    {navItems.map((item) => (
                        <motion.a
                            key={item.name}
                            href={item.href}
                            className={`text-lg hover:text-gray-400 transition-colors duration-300 relative ${
                                activeSection === item.href.substring(1) ? 'text-blue-400' : ''
                            }`}
                            onClick={() => setIsOpen(false)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {item.name}
                            {activeSection === item.href.substring(1) && (
                                <motion.div
                                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ duration: 0.3 }}
                                />
                            )}
                        </motion.a>
                    ))}
                    <motion.button
                        className="bg-gradient-to-r from-blue-700 to-purple-900 text-white px-6 py-3 rounded-full mt-4"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Connect Me
                    </motion.button>
                </nav>
            </div>
        </motion.div>
    );
}
