import profilePic from "../assets/profilePic.jpg"
import { motion } from "framer-motion";

const container = (delay) => ({
    hidden: { x: -100, opacity:0},
    visible: {x:0, opacity: 1, transition: {duration: 0.5, delay: delay},} ,
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35" id="Home">
        <div className="flex flex-wrap">
             <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center items-center mt-14">
                    <motion.img 
                        initial={{x: 100, opacity:0}}
                        animate={{x:0, opacity:1}}
                        transition={{duration:1, delay:1.2}}
                        className = ""src={profilePic} width={300} height= {300} alt="profile pic" />
                </div>
            </div>
            <div className="w-full lg:w-2/5 mr-10">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1 
                        variants={container(1)}
                        initial="hidden" 
                        animate="visible"
                        className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
                        Kevin Murithi
                    </motion.h1>
                    <motion.span 
                        variants={container(1.5)}
                        initial="hidden" 
                        animate="visible"
                        className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">Full Stack Developer
                    </motion.span>
                    <motion.p 
                        variants={container(2)}
                        initial="hidden" 
                        animate="visible"
                        className="my-2 max-w-xl py-6 font-light tracking-tighter">I am an enthusiastic full stack developer with a talent for building strong and scalable web applications. With years of practical experience, I have sharpened my skills in front-end technologies such as React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My objective is to utilize my expertise to develop innovative solutions that enhance business growth and provide outstanding user experiences.
                    </motion.p>
                </div>
            </div>
            
        </div> 
    </div>
  )
}

export default Hero