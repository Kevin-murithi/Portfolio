import profilePic from "../assets/profilePic.jpg";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const textRevealVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative min-h-screen py-20 overflow-hidden" id="About" ref={ref}>
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
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10 max-w-6xl mx-auto px-6 md:px-16 lg:px-24 xl:px-32"
      >
        {/* Section Header */}
        <motion.div
          variants={sectionVariants}
          className="text-center mb-16"
        >
          <motion.div className="inline-block">
            <motion.span
              className="text-xs md:text-sm font-medium text-blue-400 tracking-wider uppercase mb-2 md:mb-3 block"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              About
            </motion.span>
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent mb-3 md:mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              About Me
            </motion.h2>
            <motion.div
              className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={isInView ? { width: 80 } : { width: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </motion.div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Section - Left Side on Desktop, Top on Mobile */}
          <motion.div
            variants={imageVariants}
            className="relative order-1 lg:order-1 flex justify-center"
          >
            {/* Decorative Elements - Hidden on mobile for cleaner look */}
            <motion.div
              className="absolute -top-6 -left-6 w-24 h-24 border-2 border-blue-500/30 rounded-full hidden md:block"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute -bottom-6 -right-6 w-20 h-20 border-2 border-purple-500/30 rounded-full hidden md:block"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />

            {/* Main Image Container */}
            <motion.div
              className="relative group max-w-md md:max-w-lg lg:max-w-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Glow Effect */}
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-2xl md:rounded-3xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-500"
                animate={{
                  background: [
                    "linear-gradient(45deg, #3b82f6, #8b5cf6, #06b6d4)",
                    "linear-gradient(45deg, #8b5cf6, #06b6d4, #3b82f6)",
                    "linear-gradient(45deg, #06b6d4, #3b82f6, #8b5cf6)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              {/* Image */}
              <div className="relative bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-2xl md:rounded-3xl p-1.5 md:p-2 shadow-2xl overflow-hidden h-[450px] md:h-[500px] lg:h-[550px]">
                <motion.img
                  src={profilePic}
                  alt="Kevin Murithi - Full Stack Developer"
                  className="w-full h-full object-cover rounded-xl md:rounded-2xl"
                  style={{ 
                    imageRendering: 'high-quality',
                    objectPosition: 'center'
                  }}
                  loading="eager"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />

                {/* Overlay */}
                <motion.div
                  className="absolute inset-1.5 md:inset-2 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>

              {/* Floating Stats - Adjusted for smaller screens */}
              <motion.div
                variants={statsVariants}
                className="absolute -right-4 md:-right-6 top-1/4 bg-neutral-900/90 backdrop-blur-sm border border-neutral-700 rounded-xl md:rounded-2xl p-3 md:p-4 shadow-xl"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center">
                  <motion.div
                    className="text-xl md:text-2xl font-bold text-blue-400 mb-1"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    5+
                  </motion.div>
                  <div className="text-xs text-neutral-400">Years Experience</div>
                </div>
              </motion.div>

              <motion.div
                variants={statsVariants}
                className="absolute -left-4 md:-left-6 bottom-1/4 bg-neutral-900/90 backdrop-blur-sm border border-neutral-700 rounded-xl md:rounded-2xl p-3 md:p-4 shadow-xl"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center">
                  <motion.div
                    className="text-xl md:text-2xl font-bold text-purple-400 mb-1"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  >
                    50+
                  </motion.div>
                  <div className="text-xs text-neutral-400">Projects Done</div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Content Section - Right Side on Desktop, Bottom on Mobile */}
          <motion.div
            variants={sectionVariants}
            className="space-y-6 md:space-y-8 order-2 lg:order-2"
          >
            {/* Introduction */}
            <motion.div
              variants={textRevealVariants}
              className="space-y-4 md:space-y-6"
            >
              <motion.h3
                className="text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight"
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Digital Solutions with{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Precision
                </span>
              </motion.h3>

              <motion.p
                className="text-sm md:text-base text-neutral-300 leading-relaxed"
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Full-stack developer transforming ideas into scalable solutions.
                I create applications that function flawlessly and deliver
                exceptional user experiences.
              </motion.p>

              <motion.p
                className="text-xs md:text-sm text-neutral-400 leading-relaxed"
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                Driven by curiosity and continuous learning. I solve challenging
                problems and build impactful solutions.
              </motion.p>
            </motion.div>

            {/* Skills Grid */}
            <motion.div
              variants={textRevealVariants}
              className="grid grid-cols-2 gap-3 md:gap-4"
            >
              {[
                { name: "Frontend", tech: "React, Next.js", icon: "💻", color: "from-blue-500 to-cyan-500" },
                { name: "Backend", tech: "Node.js, APIs", icon: "⚙️", color: "from-purple-500 to-pink-500" },
                { name: "Database", tech: "MongoDB, MySQL", icon: "🗄️", color: "from-green-500 to-emerald-500" },
                { name: "Tools", tech: "Git, Docker", icon: "🛠️", color: "from-orange-500 to-red-500" }
              ].map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="group relative bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-lg md:rounded-xl p-3 md:p-4 hover:border-neutral-700 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  whileHover={{
                    scale: 1.02,
                    y: -2,
                    transition: { duration: 0.2 }
                  }}
                >
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 rounded-lg md:rounded-xl transition-opacity duration-300`}
                  />
                  <div className="relative z-10">
                    <div className="flex items-center space-x-2 md:space-x-3 mb-1 md:mb-2">
                      <span className="text-lg md:text-2xl">{skill.icon}</span>
                      <h4 className="font-semibold text-white text-sm md:text-base">{skill.name}</h4>
                    </div>
                    <p className="text-xs md:text-sm text-neutral-400">{skill.tech}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              variants={textRevealVariants}
              className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4 md:pt-6"
            >
              <motion.button
                className="group relative bg-gradient-to-r from-blue-500 to-purple-600 text-white px-5 md:px-6 py-2.5 md:py-3 rounded-lg font-medium overflow-hidden shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 text-sm"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <span className="relative z-10 flex items-center justify-center space-x-1.5">
                  <span>Projects</span>
                  <motion.span
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
              </motion.button>

              <motion.button
                className="group relative bg-transparent border-2 border-neutral-700 text-white px-5 md:px-6 py-2.5 md:py-3 rounded-lg font-medium hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 text-sm"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1.5 }}
              >
                <span className="flex items-center justify-center space-x-1.5">
                  <span>Resume</span>
                  <motion.span
                    animate={{ y: [0, -2, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    ↓
                  </motion.span>
                </span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Decorative Elements */}
        <motion.div
          className="mt-12 md:mt-16 lg:mt-20 flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <div className="flex space-x-2">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
