import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const LoadingScreen = ({ onComplete }) => {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ["Kevin", "Murithi"];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentWord < words.length - 1) {
        setCurrentWord(currentWord + 1);
      } else {
        setTimeout(onComplete, 800); // Wait a bit after last word
      }
    }, 1200);

    return () => clearTimeout(timer);
  }, [currentWord, onComplete]);

  const letterVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: -90,
      scale: 0.5
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.6, 0.01, -0.05, 0.95],
        type: "spring",
        stiffness: 100
      }
    }),
    exit: {
      opacity: 0,
      y: -50,
      scale: 1.2,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  };

  const backgroundVariants = {
    initial: {
      background: "radial-gradient(125% 125% at 50% 10%, #000 40%, #1a1a2e 100%)"
    },
    animate: {
      background: [
        "radial-gradient(125% 125% at 50% 10%, #000 40%, #1a1a2e 100%)",
        "radial-gradient(125% 125% at 50% 10%, #000 40%, #16213e 100%)",
        "radial-gradient(125% 125% at 50% 10%, #000 40%, #0f3460 100%)",
        "radial-gradient(125% 125% at 50% 10%, #000 40%, #63e 100%)"
      ],
      transition: {
        duration: 3,
        ease: "easeInOut"
      }
    }
  };

  const glowVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.8, 0.3],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
        variants={backgroundVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {/* Animated Background Elements */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
          variants={glowVariants}
          animate="animate"
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
          variants={glowVariants}
          animate="animate"
          style={{ animationDelay: "1s" }}
        />

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Main Content */}
        <div className="relative z-10 text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentWord}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative"
            >
              {/* Glow Effect Behind Text */}
              <motion.div
                className="absolute inset-0 blur-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ duration: 1 }}
              >
                <h1 className="text-8xl md:text-9xl font-extrabold tracking-wider bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent" style={{ fontFamily: "'Orbitron', 'Exo 2', 'Rajdhani', monospace" }}>
                  {words[currentWord]}
                </h1>
              </motion.div>

              {/* Main Text */}
              <h1 className="relative text-8xl md:text-9xl font-extrabold tracking-wider" style={{ fontFamily: "'Orbitron', 'Exo 2', 'Rajdhani', monospace" }}>
                {words[currentWord].split("").map((letter, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={letterVariants}
                    className="inline-block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                    style={{ perspective: "1000px" }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </h1>

              {/* Subtitle */}
              <motion.div
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <div className="flex items-center justify-center space-x-2">
                  <motion.div
                    className="w-2 h-2 bg-blue-400 rounded-full"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                  <motion.div
                    className="w-2 h-2 bg-purple-400 rounded-full"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                  />
                  <motion.div
                    className="w-2 h-2 bg-pink-400 rounded-full"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                  />
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress Indicator */}
        <motion.div
          className="absolute bottom-20 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="w-64 h-1 bg-neutral-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 3, ease: "easeInOut" }}
            />
          </div>
          <motion.p
            className="text-neutral-400 text-sm mt-4 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            Loading Portfolio...
          </motion.p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;
