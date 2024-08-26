import aboutImg from "../assets/profilePic3.jpg"
import {motion} from "framer-motion"
const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4" id="About">
        <h2 className="my-20 text-center text-4xl">About <span className="text-neutral-500">Me</span></h2>
        <div className="flex flex-wrap">
            <div className="w-full lg:w-2/5 ml-10">
                <motion.div 
                    whileInView={{opacity:1, x:0}}
                    initial={{opacity:0, x:100}}
                    transition={{duration:1}}
                    className="flex justify-center lg:justify-start">
                        <p className="my-2 max-w-xl py-6">I am a committed and adaptable full stack developer with a strong enthusiasm for building efficient, user-centric web applications. Over the past years, I have gained extensive experience working with a range of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a keen interest in understanding how things work, and it has grown into a career where I consistently seek to learn and tackle new challenges. I excel in team-oriented settings and take pride in solving intricate problems to deliver top-notch solutions. Beyond coding, I enjoy staying active, exploring emerging technologies, and contributing to open-source projects.</p>
                </motion.div>
            </div>
            <motion.div 
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x:-70}}
                transition={{duration:1}}
                className="w-full lg:w-1/2 lg:p-8">
                <div className="flex items-center justify-center">
                    <img className="rounded-2xl h-1/2 lg:h-96" src={aboutImg} alt="" />
                </div>
            </motion.div>

            
        </div>
    </div>
  )
}

export default About