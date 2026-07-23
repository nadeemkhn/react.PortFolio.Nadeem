import './App.css';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Technology from './components/Technology';
import Services from './components/Services';
import Experience from './components/Experience';
import Education from './components/Education';
import Project from './components/Project';
import Contact from './components/Contact';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <div className="min-h-screen overflow-x-hidden text-neutral-300">

      {/* Scroll progress bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 z-[60] h-1 origin-left bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
      />

      {/* Fixed gradient background */}
      <div className="fixed inset-0 -z-10 h-full w-full overflow-hidden">
        <div className="absolute top-0 z-[-2] h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

        {/* Animated aurora blobs */}
        <motion.div
          aria-hidden
          className="absolute -left-32 top-24 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl"
          animate={{ x: [0, 60, 0], y: [0, 40, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          aria-hidden
          className="absolute right-0 top-1/3 h-[28rem] w-[28rem] rounded-full bg-purple-600/20 blur-3xl"
          animate={{ x: [0, -50, 0], y: [0, 60, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          aria-hidden
          className="absolute left-1/3 bottom-0 h-80 w-80 rounded-full bg-pink-600/15 blur-3xl"
          animate={{ x: [0, 40, 0], y: [0, -50, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <Navbar />

      {/* pt-20 offsets the fixed navbar height */}
      <div className="container mx-auto px-6 pt-20">
        <Hero />
        <Technology />
        <Services />
        <Experience />
        <Education />
        <Project />
        <Contact />
      </div>

    </div>
  );
}

export default App;
