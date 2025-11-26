import { MyServices } from "../constants"
import { motion } from "framer-motion"

const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: (index) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            delay: index * 0.15,
            duration: 0.8,
            ease: "easeOut"
        }
    })
};

const cardHoverVariants = {
    idle: {
        scale: 1,
        rotateY: 0,
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)"
    },
    hover: {
        scale: 1.05,
        rotateY: 5,
        boxShadow: "0 20px 40px rgba(147, 51, 234, 0.3)",
        transition: {
            duration: 0.4,
            ease: "easeInOut"
        }
    }
};

const iconVariants = {
    idle: { scale: 1, rotate: 0 },
    hover: {
        scale: 1.2,
        rotate: 10,
        transition: {
            duration: 0.3,
            ease: "easeInOut"
        }
    }
};

const buttonVariants = {
    idle: { x: 0, opacity: 0.7 },
    hover: {
        x: 5,
        opacity: 1,
        transition: {
            duration: 0.3,
            ease: "easeInOut"
        }
    }
};

const Services = () => {
  return (
    <div className="relative mb-20 flex justify-center flex-col items-center border-b border-neutral-900 pb-24 overflow-hidden" id="Services">
        {/* Dynamic Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950">
            <motion.div
                className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
            />
        </div>

        <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-center mb-16"
        >
            <h2 className="my-20 text-center text-4xl font-light">Specialized Development Services</h2>
            <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
                Expert solutions tailored to your technical challenges
            </p>
        </motion.div>

        <div className="relative z-10 w-full max-w-7xl px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {MyServices.map((service, index) => (
                    <motion.div
                        key={service.id}
                        custom={index}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        className="group relative"
                    >
                        {/* Background Glow Effect */}
                        <motion.div
                            className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        />

                        <motion.div
                            variants={cardHoverVariants}
                            initial="idle"
                            whileHover="hover"
                            className="relative bg-neutral-900/80 backdrop-blur-sm border border-neutral-800 p-6 rounded-xl overflow-hidden"
                            style={{ perspective: "1000px" }}
                        >
                            {/* Animated Background Pattern */}
                            <motion.div
                                className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-2xl"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.3, 0.6, 0.3]
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />

                            <div className="relative z-10">
                                <div className="flex items-center justify-between mb-6">
                                    <motion.div
                                        className="text-4xl"
                                        variants={iconVariants}
                                        initial="idle"
                                        whileHover="hover"
                                    >
                                        {service.icon}
                                    </motion.div>
                                    <motion.div
                                        className="text-right text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
                                        initial={{ opacity: 0.7 }}
                                        whileHover={{ opacity: 1, scale: 1.1 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {service.id}
                                    </motion.div>
                                </div>

                                <motion.h3
                                    className="text-xl font-semibold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 transition-all duration-500"
                                    initial={{ y: 0 }}
                                    whileHover={{ y: -2 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {service.title}
                                </motion.h3>

                                <motion.p
                                    className="text-neutral-300 leading-relaxed text-sm mb-6"
                                    initial={{ opacity: 0.8 }}
                                    whileHover={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {service.description}
                                </motion.p>

                                <div className="pt-4 border-t border-neutral-800 group-hover:border-purple-500/30 transition-colors duration-500">
                                    <motion.button
                                        className="text-blue-400 hover:text-purple-400 text-sm font-medium transition-colors duration-300 flex items-center"
                                        variants={buttonVariants}
                                        initial="idle"
                                        whileHover="hover"
                                    >
                                        
                                        <motion.span
                                            className="ml-2"
                                            animate={{ x: [0, 3, 0] }}
                                            transition={{
                                                duration: 1.5,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                            }}
                                        >
                                            →
                                        </motion.span>
                                    </motion.button>
                                </div>
                            </div>

                            {/* Hover Overlay Effect */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                            />
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Services