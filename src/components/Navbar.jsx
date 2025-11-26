import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("Home");

    const navItems = [
        { name: "Home", href: "#Home" },
        { name: "About Me", href: "#About" },
        { name: "Skills", href: "#Skills" },
        { name: "Services", href: "#Services" },
        { name: "Projects", href: "#Projects" },
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

    // Handle body scroll lock when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    // Close mobile menu when screen size changes to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768 && isOpen) {
                setIsOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isOpen]);

    return (
        <>
            {/* Main Navbar */}
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
                    <button
                        className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors duration-200 z-50 relative"
                        onClick={() => setIsOpen(true)}
                    >
                        <Menu size={28} />
                    </button>
                </div>
            </motion.div>

            {/* Mobile Menu Overlay - Clickable area to close menu */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-[60] md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Mobile Menu - 60% width */}
            <div className={`fixed top-0 right-0 h-screen w-[60%] bg-black z-[70] transform transition-transform duration-300 ease-in-out md:hidden ${
                isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}>
                {/* Close Button */}
                <div className="flex justify-end p-6">
                    <button
                        onClick={() => setIsOpen(false)}
                        className="text-white hover:text-gray-300 transition-colors duration-200 p-2 hover:bg-white/10 rounded-lg"
                    >
                        <X size={28} />
                    </button>
                </div>

                {/* Menu Content */}
                <div className="flex flex-col items-center justify-center h-full space-y-6 -mt-16">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className={`text-xl font-light hover:text-gray-300 transition-colors duration-300 relative ${
                                activeSection === item.href.substring(1) ? 'text-blue-400' : 'text-white'
                            }`}
                            onClick={() => setIsOpen(false)}
                        >
                            {item.name}
                            {activeSection === item.href.substring(1) && (
                                <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                            )}
                        </a>
                    ))}

                    {/* Connect Button */}
                    <button
                        className="bg-gradient-to-r from-blue-700 to-purple-900 text-white px-6 py-3 rounded-full text-base font-medium mt-6 hover:from-blue-600 hover:to-purple-800 transition-all duration-300"
                        onClick={() => setIsOpen(false)}
                    >
                        Connect Me
                    </button>
                </div>
            </div>
        </>
    );
}
