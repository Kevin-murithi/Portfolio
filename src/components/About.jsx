import aboutImg from "../assets/profilePic6.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-20 mb-20 w-3/4" id="About" >
      {/* Heading */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1.5 }}
        className="my-16 md:ml-52 text-center text-4xl md:text-4xl"
      >
        About Me
      </motion.h2>

      <div className="md:ml-64 flex flex-col md:flex-row lg:flex-row items-center justify-center gap-12 px-0 md:px-16">
        {/* Image Section */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="relative flex items-center justify-center"
        >
          <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-2xl p-3 shadow-lg shadow-blue-500/50">
            <img
              src={aboutImg}
              alt="Profile"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.5 }}
          className="w-full text-center lg:text-left bg-neutral-900 p-6 rounded-2xl border-2 border-neutral-800 shadow-lg"
        >
          <p className="text-md text-neutral-300 leading-relaxed">
            I am a passionate full-stack developer skilled in React.js,
            Next.js, Node.js, MongoDB, MySQL, and more. I focus on creating
            efficient, scalable, and modern web applications that enhance
            user experience.
          </p>

          <button className="mt-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg shadow-md hover:scale-105 transition-transform">
            View My Work
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
