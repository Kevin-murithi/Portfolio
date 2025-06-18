import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiNextdotjs, SiTypescript, SiTailwindcss, SiExpress, SiPostman, SiPostgresql, SiDocker, SiAmazon } from "react-icons/si";
import { DiMysql, DiJavascript1, DiNodejs, DiPython, DiDjango } from "react-icons/di";
import { motion } from "framer-motion";
import { TECH_CATEGORIES } from "../constants";

const iconComponents = {
    RiReactjsLine,
    SiMongodb,
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
    SiExpress,
    SiPostman,
    SiPostgresql,
    SiDocker,
    SiAmazon,
    DiMysql,
    DiJavascript1,
    DiNodejs,
    DiPython,
    DiDjango
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const categoryVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

const techVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: (index) => ({
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            duration: 0.5,
            delay: index * 0.1,
            ease: "easeOut"
        }
    })
};

const techHoverVariants = {
    idle: {
        scale: 1,
        backgroundColor: "rgba(38, 38, 38, 0.3)",
        borderColor: "transparent"
    },
    hover: {
        scale: 1.05,
        backgroundColor: "rgba(38, 38, 38, 0.8)",
        borderColor: "rgba(147, 51, 234, 0.3)",
        transition: {
            duration: 0.3,
            ease: "easeInOut"
        }
    }
};

const iconFloatVariants = {
    animate: {
        y: [-2, 2, -2],
        rotate: [-1, 1, -1],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
};

const progressVariants = {
    hidden: { width: 0 },
    visible: (progress) => ({
        width: `${progress}%`,
        transition: {
            duration: 1.5,
            ease: "easeOut",
            delay: 0.5
        }
    })
};

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24 pt-12 mb-20" id="Skills">
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
        >
            <h2 className="my-20 text-center text-4xl font-light">Technical Expertise</h2>
            <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
                Specialized in cutting-edge technologies for creating exceptional digital experiences
            </p>
        </motion.div>

        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="max-w-7xl mx-auto px-4"
        >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {Object.entries(TECH_CATEGORIES).map(([key, category]) => (
                    <motion.div
                        key={key}
                        variants={categoryVariants}
                        className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-xl p-6 hover:border-purple-500/30 transition-all duration-300"
                    >
                        <div className="text-center mb-6">
                            <h3 className="text-xl font-semibold text-white mb-2">{category.title}</h3>
                            <p className="text-neutral-400 text-sm">{category.description}</p>
                        </div>

                        <div className="space-y-4">
                            {category.technologies.map((tech, techIndex) => {
                                const IconComponent = iconComponents[tech.icon];
                                const skillLevel = Math.floor(Math.random() * 30) + 70; // Random skill level between 70-100%

                                return (
                                    <motion.div
                                        key={tech.name}
                                        custom={techIndex}
                                        variants={techVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        className="group relative"
                                    >
                                        <motion.div
                                            variants={techHoverVariants}
                                            initial="idle"
                                            whileHover="hover"
                                            className="flex items-center justify-between p-4 rounded-lg border transition-all duration-300 cursor-pointer"
                                        >
                                            <div className="flex items-center space-x-3">
                                                {IconComponent && (
                                                    <motion.div
                                                        variants={iconFloatVariants}
                                                        animate="animate"
                                                        className="relative"
                                                    >
                                                        <IconComponent className={`text-2xl ${tech.color} group-hover:scale-110 transition-transform duration-300`} />
                                                        <motion.div
                                                            className="absolute -inset-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                                        />
                                                    </motion.div>
                                                )}
                                                <div className="flex-1">
                                                    <span className="text-neutral-300 group-hover:text-white transition-colors duration-300 font-medium">
                                                        {tech.name}
                                                    </span>
                                                    <motion.div
                                                        className="mt-1 h-1 bg-neutral-700 rounded-full overflow-hidden"
                                                        initial={{ opacity: 0 }}
                                                        whileHover={{ opacity: 1 }}
                                                        transition={{ duration: 0.3 }}
                                                    >
                                                        <motion.div
                                                            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                                                            variants={progressVariants}
                                                            custom={skillLevel}
                                                            initial="hidden"
                                                            whileInView="visible"
                                                            viewport={{ once: true }}
                                                        />
                                                    </motion.div>
                                                </div>
                                            </div>

                                            <motion.div
                                                className="text-xs text-neutral-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                                initial={{ x: -10 }}
                                                whileHover={{ x: 0 }}
                                            >
                                                {skillLevel}%
                                            </motion.div>
                                        </motion.div>

                                        {/* Hover Glow Effect */}
                                        <motion.div
                                            className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                                        />
                                    </motion.div>
                                );
                            })}
                        </div>

                        <div className="mt-6 pt-4 border-t border-neutral-800">
                            <div className="flex flex-wrap gap-2">
                                {category.technologies.slice(0, 3).map((tech) => (
                                    <span key={tech.name} className="px-2 py-1 text-xs bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full border border-blue-500/30">
                                        {tech.name}
                                    </span>
                                ))}
                                {category.technologies.length > 3 && (
                                    <span className="px-2 py-1 text-xs text-neutral-400">
                                        +{category.technologies.length - 3} more
                                    </span>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    </div>
  )
}

export default Technologies