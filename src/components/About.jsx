import aboutImg from "../assets/profilePic6.jpg"
import {motion} from "framer-motion"
const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4" id="About">
        <h2 className="my-20 text-center text-4xl">About <span className="text-neutral-500">Me</span></h2>
        <div className="flex flex-wrap justify-center items-center">
            <div className="w-full lg:w-2/5 ml-10">
                <motion.div 
                    whileInView={{opacity:1, x:0}}
                    initial={{opacity:0, x:100}}
                    transition={{duration:1}}
                    className="flex justify-center lg:justify-start">
                        <p className="my-2 max-w-xl py-6">I am a passionate full-stack developer skilled in building scalable web applications. Proficient in React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB, I create innovative solutions that drive business growth and enhance user experiences.</p>
                </motion.div>
            </div>
            <motion.div 
                whileInView={{opacity:1, x:-10}}
                initial={{opacity:0, x:-90}}
                transition={{duration:1}}
                className="w-full lg:w-1/2 lg:p-8">
                <div className="flex items-center justify-center">
                    <img className="rounded-2xl" src={aboutImg} width={300} height= {50} alt="" />
                </div>
            </motion.div>

            
        </div>
    </div>
  )
}

export default About