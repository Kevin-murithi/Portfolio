import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Technologies from './components/Technologies';
import Contact from './components/Contact';
import Services from './components/Services';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import PageTransition from './components/PageTransition';
import { motion } from 'framer-motion';
const App = () => {
  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 scroll-smooth'>
      <ScrollProgress />

      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>

        {/* Animated Background Elements */}
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <PageTransition>
        <div className='mx-1 px-0 w-full relative z-10'>
          <Navbar />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Hero />
            <About />
            <Services />
            <Technologies />
            <Contact />
          </motion.div>
        </div>
        <Footer />
      </PageTransition>
    </div>
  )
};

export default App;