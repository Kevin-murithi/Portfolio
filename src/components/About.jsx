import aboutImg from "../assets/profilePic6.jpg";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -100, scale: 0.8 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.3
      }
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

  return (
    <div className="border-b border-neutral-900 pb-20 mb-20 w-5/6 relative overflow-hidden" id="About" ref={ref}>
      {/* Background Animation Elements */}
      <motion.div
        className="absolute top-10 right-10 w-24 h-24 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-xl"
        animate={{
          y: [-20, 20, -20],
          x: [-10, 10, -10],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Heading */}
        <motion.h2
          variants={itemVariants}
          className="my-16 md:ml-52 text-center text-4xl md:text-4xl relative"
        >
          <span className="relative">
            About Me
            <motion.div
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
              initial={{ width: 0 }}
              animate={isInView ? { width: "100%" } : { width: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </span>
        </motion.h2>

        <div className="md:ml-52 flex flex-col md:flex-row lg:flex-row items-center justify-center gap-12 px-0 md:px-16">
          {/* Image Section */}
          <motion.div
            variants={imageVariants}
            className="relative flex items-center justify-center group"
          >
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
            <motion.div
              className="relative w-72 h-72 md:w-80 md:h-80 rounded-2xl p-1 shadow-lg shadow-blue-500/50 bg-gradient-to-br from-blue-500 to-purple-500"
              whileHover={{
                scale: 1.02,
                rotate: 1,
                transition: { duration: 0.3 }
              }}
            >
              <motion.img
                src={aboutImg}
                alt="Profile"
                className="w-full h-full object-cover rounded-xl"
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </motion.div>
          </motion.div>

          {/* Text Section */}
          <motion.div
            variants={textVariants}
            className="w-full text-center lg:text-left bg-neutral-900/80 backdrop-blur-sm p-8 rounded-2xl border border-neutral-800 shadow-lg hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 group"
            whileHover={{
              scale: 1.02,
              borderColor: "rgba(59, 130, 246, 0.3)",
              transition: { duration: 0.3 }
            }}
          >
            <motion.p
              className="text-md text-neutral-300 leading-relaxed mb-6"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              I am a passionate full-stack developer skilled in React.js,
              Next.js, Node.js, MongoDB, MySQL, and more. I focus on creating
              efficient, scalable, and modern web applications that enhance
              user experience.
            </motion.p>

            <motion.div className="flex flex-wrap gap-2 mb-6">
              {["React.js", "Node.js", "MongoDB", "Next.js"].map((skill, index) => (
                <motion.span
                  key={skill}
                  className="px-3 py-1 text-xs bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full border border-blue-500/30"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "rgba(59, 130, 246, 0.3)",
                    transition: { duration: 0.2 }
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>

            <motion.button
              variants={buttonVariants}
              initial="idle"
              whileHover="hover"
              whileTap="tap"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-medium relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <span className="relative z-10 flex items-center space-x-2">
                <span>View My Work</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
