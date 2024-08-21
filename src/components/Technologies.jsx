import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { DiJavascript1 } from "react-icons/di";
import { DiNodejs } from "react-icons/di";
import { DiPython } from "react-icons/di";
import {motion} from "framer-motion";

const iconVariants = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h2 
            whileInView={{ opacity:1, y:0 }}
            initial={{ opacity: 0, y:-100 }}
            transition={{duration:3}}
            className="my-20 text-center text-4xl">Skills</motion.h2>
        <motion.div 
            whileInView={{ opacity:1, x:0 }}
            initial={{ opacity: 0, x:-100 }}
            transition={{duration:3}}
            className="flex flex-wrap items-center justify-center gap-4">

            <motion.div 
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                 className="rounded-2xl border-4 border-neutral-800 p-4">
                    <DiJavascript1 className="text-7xl bg-yellow-400 text-black"/>
                    <p>Javascript</p>
            </motion.div>

            <motion.div 
                variants={iconVariants(3.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-7xl text-cyan-400"/>
                    <p>React.js</p>
            </motion.div>

            <motion.div 
                variants={iconVariants(4.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <DiNodejs className="text-7xl text-green-400"/>
                    <p>Node.js</p>
            </motion.div>

            <motion.div 
                variants={iconVariants(4.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiMongodb className="text-7xl text-green-500"/>
                    <p>MongoDB</p>
            </motion.div>

            <motion.div 
                variants={iconVariants(3.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <DiMysql className="text-7xl text-cyan-400"/>
                    <p>MySQL</p>
            </motion.div>            
            
            <motion.div 
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <DiPython className="text-7xl text-cyan-400"/>
                    <p>Python</p>
            </motion.div>
        </motion.div>
    
    </div>
  )
}

export default Technologies