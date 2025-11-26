import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import CodeEditor from "./CodeEditor";
import SkillBadges from "./SkillBadges";

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
            delay: delay,
            ease: "easeOut"
        }
    },
});

const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
    }
};



const buttonVariants = {
    idle: {
        scale: 1,
        boxShadow: "0 4px 15px rgba(59, 130, 246, 0.3)"
    },
    hover: {
        scale: 1.05,
        boxShadow: "0 8px 25px rgba(59, 130, 246, 0.5)",
        transition: {
            duration: 0.3,
            ease: "easeInOut"
        }
    },
    tap: {
        scale: 0.95,
        transition: {
            duration: 0.1
        }
    }
};

const TypewriterText = ({ text, delay = 0 }) => {
    const [displayText, setDisplayText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (currentIndex < text.length) {
                setDisplayText(prev => prev + text[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }
        }, delay + currentIndex * 100);

        return () => clearTimeout(timer);
    }, [currentIndex, text, delay]);

    return (
        <span>
            {displayText}
            <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-1 h-8 bg-gradient-to-r from-blue-400 to-purple-500 ml-1"
            />
        </span>
    );
};

const Hero = () => {
    const controls = useAnimation();

    useEffect(() => {
        controls.start("visible");
    }, [controls]);

    return (
        <div className="border-b border-neutral-900 mb-20 pt-24 pb-20 lg:mb-35 relative overflow-hidden min-h-screen flex items-center" id="Home">
            {/* Floating Background Elements */}
            <motion.div
                className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-xl"
                animate={floatingAnimation}
            />
            <motion.div
                className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-xl"
                animate={{
                    ...floatingAnimation,
                    transition: { ...floatingAnimation.transition, delay: 1 }
                }}
            />

            <div className="container mx-auto px-6 md:px-16 lg:px-24 xl:px-32 2xl:px-40">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center relative z-10">
                    {/* Left Content */}
                    <div className="space-y-4 md:space-y-6">
                        <motion.div
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                        >
                            <h1 className="pb-8 md:pb-12 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-thin tracking-tight">
                                <TypewriterText text="Kevin Murithi" delay={500} />
                            </h1>
                        </motion.div>

                        <motion.div
                            variants={container(1.5)}
                            initial="hidden"
                            animate="visible"
                            className="relative"
                        >
                            <motion.span
                                className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-tight text-transparent font-semibold"
                                style={{ fontFamily: "'Inter', 'Poppins', sans-serif" }}
                                animate={{
                                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                            >
                                Full Stack Engineer
                            </motion.span>
                        </motion.div>

                        <motion.div
                            variants={container(2)}
                            initial="hidden"
                            animate="visible"
                            className="my-2 py-4 md:py-6 font-light tracking-tighter"
                        >
                            <p className="text-gray-400 text-base md:text-lg lg:text-xl leading-relaxed max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl" style={{ fontFamily: "'Inter', sans-serif" }}>
                                Passionate developer creating intuitive, responsive web applications
                                that deliver outstanding user experiences.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={container(2.5)}
                            initial="hidden"
                            animate="visible"
                            className="my-2 py-4 md:py-6 font-light tracking-tighter"
                        >
                            <motion.button
                                variants={buttonVariants}
                                initial="idle"
                                whileHover="hover"
                                whileTap="tap"
                                className="bg-gradient-to-r from-blue-700 to-purple-900 text-white px-6 py-3 md:px-8 md:py-4 lg:px-10 lg:py-4 text-sm md:text-base lg:text-lg rounded-full font-medium relative overflow-hidden group"
                            >
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                />
                                <span className="relative z-10 flex items-center space-x-2">
                                    <span>Connect</span>
                                    <motion.span
                                        animate={{ x: [0, 4, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                    >
                                        →
                                    </motion.span>
                                </span>
                            </motion.button>
                        </motion.div>
                    </div>

                    {/* Right Interactive Elements */}
                    <div className="relative flex flex-col items-center space-y-4 md:space-y-6 mt-8 lg:mt-0">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.8 }}
                            className="w-full flex justify-center"
                        >
                            <CodeEditor />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 1.2 }}
                            className="w-full flex justify-center"
                        >
                            <SkillBadges />
                        </motion.div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2"
                >
                    <span className="text-gray-400 text-xs md:text-sm">Scroll</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-5 h-8 md:w-6 md:h-10 border-2 border-cyan-500 rounded-full flex justify-center"
                    >
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-1 h-2 md:h-3 bg-cyan-500 rounded-full mt-1 md:mt-2"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}

export default Hero